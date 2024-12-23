function isEnoughCapacity(products, containerSize) {
        let totalQuantity = 0;
        for (const quantity of Object.values(products)) {
            totalQuantity += quantity;
        }
        return totalQuantity <= containerSize;
    }
