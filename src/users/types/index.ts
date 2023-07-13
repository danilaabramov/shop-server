import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      userId: 1,
      username: 'Ivan',
      password: 'ivan123',
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$cGFtLOvMl5Sd42fHGx.PUOMQZ.5mkozYXAgl5bV/0YWPgK4i9Yr36',
  })
  password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-07-11T15:51:23.737Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-07-11T15:51:23.737Z' })
  createdAt: string;
}
