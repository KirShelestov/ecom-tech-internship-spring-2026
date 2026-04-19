import {
    Image,
    Text,
    Stack,
    Loader,
    Paper,
    Center,
    ActionIcon,
    Box,
    Badge,
    Group,
    Divider,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import type { Product } from "../types";

export const ProductModal = ({
    product,
    opened,
    onClose,
    loading = false,
}: {
    product: Product | null;
    opened: boolean;
    onClose: () => void;
    loading?: boolean;
}) => {
    if (!opened) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(8px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Paper
                onClick={(e) => e.stopPropagation()}
                radius="24px"
                style={{
                    width: 440,
                    maxWidth: "100%",
                    background: "#fff",
                    boxShadow:
                        "0 30px 60px -12px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1em",
                }}
            >
                <ActionIcon
                    onClick={onClose}
                    variant="white"
                    radius="xl"
                    size="lg"
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 10,
                    }}
                >
                    <IconX size={20} stroke={2.5} />
                </ActionIcon>

                {loading ? (
                    <Center style={{ minHeight: 320 }}>
                        <Stack align="center" gap={10}>
                            <Loader size="md" color="dark" />
                            <Text size="sm" c="dimmed">
                                Загрузка товара...
                            </Text>
                        </Stack>
                    </Center>
                ) : product ? (
                    <>
                        <Box
                            style={{
                                background:
                                    "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
                                padding: 8,
                            }}
                        >
                            <Image
                                src={product.image}
                                alt={product.title}
                                radius="20px"
                                height={320}
                                fit="contain"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://placehold.co/400x400?text=No+Image";
                                }}
                            />
                        </Box>

                        <Stack gap="md" p="24px">
                            <Group justify="space-between" align="flex-start">
                                <Stack gap={4}>
                                    <Text fw={800} size="xl">
                                        {product.title}
                                    </Text>

                                    <Badge variant="dot" color="blue" size="sm">
                                        {product.category}
                                    </Badge>
                                </Stack>
                            </Group>

                            <Divider />

                            <Text size="sm" c="gray.6">
                                {product.description}
                            </Text>

                            <Group justify="space-between" mt="md">
                                <Box>
                                    <Text size="xs" c="dimmed" fw={700}>
                                        Цена
                                    </Text>
                                    <Text fw={900} size="28px">
                                        {product.price?.toLocaleString()} ₽
                                    </Text>
                                </Box>
                            </Group>
                        </Stack>
                    </>
                ) : (
                    <Center p="xl">
                        <Text c="dimmed">Нет данных</Text>
                    </Center>
                )}
            </Paper>
        </div>
    );
};
