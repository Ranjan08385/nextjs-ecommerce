import { connectMongoDB } from "@/lib/mongoConnect";
import Product from "@/lib/models/products";
import { NextRequest, NextResponse } from "next/server";

interface PropsType {
  params: {
    id: string;
  };
}

export async function PUT(request: NextRequest, URLParams: PropsType) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, category, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, { name, category, price });

    return NextResponse.json({ msg: "Updated Successfully", data });
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
