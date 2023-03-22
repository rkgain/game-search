import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedSort: string | null;
  onSelectedSort: (sortKey: string) => void;
}

const SortSelector = ({ selectedSort, onSelectedSort }: Props) => {
  const { data: platform, isLoading, error } = usePlatforms();
  if (error) return null;

  const sortOrder = [
    { value: "", label: "Relavance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Create Date" },
    { value: "-rating", label: "Average Rating" },
    { value: "-metacritic", label: "Plpularity" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By :{" "}
        {sortOrder.find((item) => item.value === selectedSort)?.label ||
          "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem
            onClick={() => onSelectedSort(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
