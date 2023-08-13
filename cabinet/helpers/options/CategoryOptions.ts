import CategoryService from "~/domain/services/CategoryService";
import {integer} from "vscode-languageserver-types";
import Category from "../../../common/domain/entities/Category";

export default async (service: CategoryService, restaurantId: integer): Promise<{ label: string, value: any }[]> => {
    const options: {label: string, value: any }[] = [];

    (await service.getAll(restaurantId)).forEach((category: Category) => {
        options.push({
            label: category.name,
            value: category.id
        });
    });

    return options;
}