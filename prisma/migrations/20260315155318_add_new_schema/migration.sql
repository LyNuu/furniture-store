-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'DELIVERED');

-- CreateTable
CREATE TABLE "orders_market" (
    "id" SERIAL NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_market_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items_market" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,

    CONSTRAINT "order_items_market_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs_market" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogs_market_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_items_market_order_id_item_id_key" ON "order_items_market"("order_id", "item_id");

-- AddForeignKey
ALTER TABLE "orders_market" ADD CONSTRAINT "orders_market_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users_market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items_market" ADD CONSTRAINT "order_items_market_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders_market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items_market" ADD CONSTRAINT "order_items_market_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items_market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
