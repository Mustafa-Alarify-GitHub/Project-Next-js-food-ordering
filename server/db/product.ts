import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(() => {
    // TODO : get Data Best Sellers
    return db.product.findMany({
        include: {
            sizes: true,
            extras: true,
        },
    });
}, ['best-sellers'], { revalidate: 3600 });



