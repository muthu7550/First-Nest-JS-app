import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

  
    @Prop({ required: true })
  userid!: number;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, unique: true })
  email!: string;

   @Prop({ required: true})
  role!: string;

  @Prop({ required: true })
  status!: string;

  @Prop({ required: true })
  city!: string;

  @Prop({ required: false })
  avatar!: string;

}

export const UserSchema = SchemaFactory.createForClass(User);