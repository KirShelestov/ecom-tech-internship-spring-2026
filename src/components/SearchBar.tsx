import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <TextInput
            placeholder="Поиск товаров..."
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
            leftSection={<IconSearch size={18} stroke={1.8} />}
            size="md"
            radius="xl"
            styles={{
                input: {
                    height: 48,
                    paddingLeft: 44,
                    paddingRight: 16,

                    backgroundColor: "#f8f9fa",
                    border: "1px solid transparent",
                    borderRadius: "1em",

                    boxSizing: "border-box",

                    fontSize: 15,
                    fontWeight: 500,

                    transition: "all 0.2s ease",

                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",

                    "&::placeholder": {
                        color: "#868e96",
                    },

                    "&:hover": {
                        backgroundColor: "#f1f3f5",
                    },

                    "&:focus": {
                        backgroundColor: "#ffffff",
                        border: "1px solid transparent",
                        boxShadow:
                            "0 0 0 4px rgba(51,154,240,0.15), 0 6px 20px rgba(0,0,0,0.08)",
                        transform: "translateY(-1px)",
                    },
                },

                section: {
                    color: "#868e96",
                    pointerEvents: "none",
                    height: 48,
                },
            }}
        />
    );
};
