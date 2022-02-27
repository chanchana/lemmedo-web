import { Button, Grid } from "../common"
import { getCategories } from "../data/categories"
import { Style } from "../styles/style"

export const CategorySelect = () => {
    return (
        <Grid inline gap={Style.Spacing.S}>
            {getCategories(true).map(value => <Button small icon={value.icon}>{value.name}</Button>)}
        </Grid>
    )
}