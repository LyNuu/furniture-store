import { Post, Body, Get } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemDto } from "./dto/item.dto";
import { Controller } from "@nestjs/common";


@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Post()
    async createItem(@Body() createItemDto: ItemDto) {
        return this.itemService.createItem(createItemDto);
    }

    @Get()
    async getItems() {
        return this.itemService.getItems();
    }
}