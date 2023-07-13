import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from '../users/users.service';
import { BoilerPartsService } from '../boiler-parts/boiler-parts.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({ where: { userId } });
  }

  async add(addToCartDto: AddToCartDto) {
    const cart = new ShoppingCart();
    const user = await this.usersService.findOne({
      where: { username: addToCartDto.username },
    });
    const part = await this.boilerPartsService.findOne(addToCartDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.boilerManufacturer = part.boilerManufacturer;
    cart.partsManufacturer = part.partsManufacturer;
    cart.price = part.price;
    cart.inStock = part.inStock;
    cart.image = JSON.parse(part.images)[0];
    cart.name = part.name;
    cart.totalPrice = part.price;

    return cart.save();
  }

  async updateCount(count: number, partId: number): Promise<{ count: number }> {
    await this.shoppingCartModel.update({ count }, { where: { partId } });

    const part = await this.shoppingCartModel.findOne({ where: { partId } });
    return { count: part.count };
  }

  async updateTotalPrice(
    totalPrice: number,
    partId: number,
  ): Promise<{ totalPrice: number }> {
    await this.shoppingCartModel.update({ totalPrice }, { where: { partId } });

    const part = await this.shoppingCartModel.findOne({ where: { partId } });
    return { totalPrice: part.totalPrice };
  }

  async remove(partId: number): Promise<void> {
    const part = await this.shoppingCartModel.findOne({ where: { partId } });

    await part.destroy();
  }

  async removeAll(userId: number): Promise<void> {
    await this.shoppingCartModel.destroy({ where: { userId } });
  }
}
