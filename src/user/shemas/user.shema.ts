import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

@Schema({
    timestamps: true,
})

export class User {
    name: string;
    @Prop({ required: true})
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ type: String, enum: UserRole, default: UserRole.USER })
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);