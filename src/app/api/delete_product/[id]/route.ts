import Product from "@/lib/models/products";
import { connectMongoDB } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

interface PropsType {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, URLParams: PropsType) {
  try {
    const id = URLParams.params.id;

    await connectMongoDB();

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
