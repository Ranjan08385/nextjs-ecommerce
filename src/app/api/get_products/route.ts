// Mongo User Name: mogerranjan  , Mongo Password: FrpnCbmh4ZCtr9D0

import { connectMongoDB } from "@/lib/mongoConnect";
import Product from "@/lib/models/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    console.log("TEST here ==>");

    const data = await Product.find();

    console.log("TEST here 2 ==>", data);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        err,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
