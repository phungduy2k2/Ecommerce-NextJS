import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddToCartSchema = Joi.object({
  userID: Joi.string().required(),
  productID: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    // const isAuthUser = await AuthUser(req);

    // if (isAuthUser) {
      const data = await req.json();
      const { productID, userID } = data;
      console.log('data req route:',data);

      const { error } = AddToCartSchema.validate({ userID, productID });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      console.log(userID, productID);

      const isCurrentCartItemAlreadyExists = await Cart.find({
        userID: userID,
        productID: productID,
      });
      console.log('isCartExists:', isCurrentCartItemAlreadyExists);

      if (isCurrentCartItemAlreadyExists?.length > 0) {
        return NextResponse.json({
          success: false,
          message:
            "Product is already added in cart! Please add different product",
        });
      }

      const saveProductToCart = await Cart.create(data);

      if (saveProductToCart) {
        return NextResponse.json({
          success: true,
          message: "Product is added to cart!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the product to cart! Please try again.",
        });
      }
    // } else {
    //   return NextResponse.json({
    //     success: false,
    //     message: "You are not authenticated",
    //   });
    // }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
