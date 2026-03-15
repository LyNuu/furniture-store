import { ItemDto } from "./dto/item.dto";
import { Item } from "./item.model";
import { Injectable } from "@nestjs/common";
import { ItemRepository } from "./item.repository";

@Injectable()
export class ItemService {
    constructor(private itemRepository: ItemRepository) { }

    async createItem(createItemDto: ItemDto) {
        const item = new Item();
        item.title = createItemDto.title;
        item.description = createItemDto.description;
        item.price = createItemDto.price;
        item.quantity = createItemDto.quantity;
        item.imageUrl = createItemDto.imageUrl;
        try {
            return await this.itemRepository.save(item);
        } catch (error) {
            throw new Error("Error creating item");
        }
    }

    async getItems() {
        try {
            return await this.itemRepository.findAll();
        } catch (error) {
            throw new Error("Error fetching items");
        }
    }
}