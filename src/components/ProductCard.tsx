import { Card, Image, Text, Button } from "@mantine/core";
import type { Product } from "../types";

interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Card.Section>
                <Image src={product.image} height={160} alt={product.title} />
            </Card.Section>

            <Text
                fw={500}
                lineClamp={2}
                style={{
                    minHeight: 42,
                    marginTop: 12,
                }}
            >
                {product.title}
            </Text>

            <Text
                size="sm"
                fw={600}
                style={{
                    marginTop: 4,
                }}
            >
                {product.price} ₽
            </Text>

            <Text
                size="sm"
                c="dimmed"
                style={{
                    minHeight: 20,
                    marginTop: 4,
                }}
            >
                {product.category}
            </Text>

            <div style={{ flex: 1 }} />

            <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => onViewDetails(product)}
            >
                Подробнее
            </Button>
        </Card>
    );
};
