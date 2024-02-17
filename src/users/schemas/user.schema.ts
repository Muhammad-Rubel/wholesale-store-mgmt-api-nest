import { Prop } from '@nestjs/mongoose';

export enum UserType {
  SUPER_ADMIN = 'super-admin',
  ADMIN = 'admin',
  USER = 'user',
}

export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: false })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: false })
  phoneNumber: string;

  @Prop({ type: String, required: false })
  type: UserType;

  @Prop({ type: String, required: false })
  password: string;
}
