import { useState } from "react";
import { Container, Title, Stack } from "@mantine/core";
import { useProducts, fetchProductById } from "./hooks/useProducts";
import { SearchBar } from "./components/SearchBar";
import { ProductList } from "./components/ProductList";
import { ProductModal } from "./components/ProductModal";
import type { Product } from "./types";

function App() {
    const [search, setSearch] = useState("");

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null,
    );
    const [detailedProduct, setDetailedProduct] = useState<Product | null>(
        null,
    );

    const [modalOpened, setModalOpened] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);

    const { products, loading, error } = useProducts(search);

    const handleViewDetails = async (product: Product) => {
        setSelectedProduct(product);
        setDetailedProduct(null);
        setModalOpened(true);
        setLoadingDetails(true);

        try {
            const detailed = await fetchProductById(product.id);
            setDetailedProduct(detailed);
        } finally {
            setLoadingDetails(false);
        }
    };

    const handleCloseModal = () => {
        setModalOpened(false);
        setSelectedProduct(null);
        setDetailedProduct(null);
        setLoadingDetails(false);
    };

    return (
        <Container size="xl" py="xl" style={{ width: "100%" }}>
            <Stack gap="lg" style={{ width: "100%" }}>
                <Title order={1} ta="center">
                    Магазин товаров
                </Title>

                <div style={{ width: "100%" }}>
                    <SearchBar value={search} onChange={setSearch} />
                </div>

                <ProductList
                    products={products}
                    loading={loading}
                    error={error}
                    onViewDetails={handleViewDetails}
                />

                <ProductModal
                    product={detailedProduct ?? selectedProduct}
                    opened={modalOpened}
                    onClose={handleCloseModal}
                    loading={loadingDetails && !detailedProduct}
                />
            </Stack>
        </Container>
    );
}

export default App;
