import React from "react"
import { Button, Grid } from "../common"
import { allCategory, Category, CategoryData, getCategories } from "../data/categories"
import { Style } from "../styles/style"

interface Props {
    onChange: (bewCategory: Category) => void;
}

export const CategorySelect = (props: Props) => {
    const [currentCategory, setCurrentCategory] = React.useState<Category>(Category.All);
    const getButtonStyleProps = React.useCallback((category: Category) => {
        const isSelected = category === currentCategory
        return {
            backgroundColor: isSelected ? Style.Color.Light100 : undefined,
            color: isSelected ? Style.Color.Dark100 : undefined,
        }
    }, [currentCategory]);

    const handleClick = (newCategory: Category) => {
        setCurrentCategory(newCategory);
        props.onChange(newCategory);
    }

    return (
        <Grid inline gap={Style.Spacing.S}>
            {getCategories(true).map(value => (
                <Button small onClick={() => handleClick(value.category)} icon={value.icon} {...getButtonStyleProps(value.category)}>{value.name}</Button>)
            )}
        </Grid>
    )
}