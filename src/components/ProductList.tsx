import { SimpleGrid, Loader, Alert, Text } from "@mantine/core";
import { ProductCard } from "./ProductCard";
import type { Product } from "../types";

interface ProductListProps {
    products: Product[];
    loading: boolean;
    error: string | null;
    onViewDetails: (product: Product) => void;
}

export const ProductList = ({
    products,
    loading,
    error,
    onViewDetails,
}: ProductListProps) => {
    if (error) {
        return (
            <Alert color="red" title="Ошибка">
                {error}
            </Alert>
        );
    }

    return (
        <div
            style={{
                position: "relative",
                minHeight: 320,
                width: "100%",
            }}
        >
            {products.length > 0 && (
                <SimpleGrid
                    cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing="lg"
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={onViewDetails}
                        />
                    ))}
                </SimpleGrid>
            )}

            {!loading && products.length === 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text ta="center" size="lg" c="dimmed">
                        Товары не найдены
                    </Text>
                </div>
            )}

            {loading && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    <Loader size="lg" />
                </div>
            )}
        </div>
    );
};
