import React, {useState} from 'react';
import {
    Anchor, Box, Button, Form, FormField, Heading,
    Layer, Text, TextInput, RadioButtonGroup, CheckBox, Select
} from 'grommet';
import { Search, Checkbox } from 'grommet-icons';
import './SearchBox.css';


function AdvancedSearch(props){
    const [show, setShow] = useState();

    return(
        <Box>
            <Anchor role="button" onClick={() => setShow(true)}>
                <Text size="small" margin="auto">Advanced search</Text>
            </Anchor>
            {show && (
                <Layer
                onEsc={() => setShow(false)}
                onClickOutside={() => setShow(false)}
                responsive={true}
                >
                    <Box overflow="auto" margin="auto" pad="40px" width="large">
                        <Heading level="1">Advanced Search</Heading>
                        <Form onSubmit={props.advancedSearch}>
                            <Box>
                                <FormField label="Search by recipe:" name="advancedQuery" placeholder="type here"/>
                            </Box>
                            <Box direction="row-responsive">
                                <Box>
                                    <Heading level="4">Diet:</Heading>
                                    <FormField
                                        component={CheckBox}
                                        name="vegan"
                                        label="Vegan"
                                    >
                                    </FormField>
                                    <FormField
                                        name="vegetarian"
                                        component={CheckBox}
                                        label="Vegetarian"
                                    />
                                    <FormField
                                        name="pescetarian"
                                        component={CheckBox}
                                        label="Pescetarian"
                                    />
                                </Box>
                                <Box>
                                    <Heading level="4">Meal type:</Heading>
                                    <FormField
                                        component={RadioButtonGroup}
                                        name="mealType"
                                        options={["Starter", "Main course", "Side dish", "Dessert"]}
                                    >
                                    </FormField>
                                </Box>
                            </Box>
                            <Box>
                                <Heading level="4">Cooking time:</Heading>
                                <FormField
                                    component={CheckBox}
                                    toggle
                                    name="cookingTime"
                                    label="Under 30 minutes"
                                >
                                </FormField>
                            </Box>
                            <Box>
                                <Heading level="4">Intolerances:</Heading>
                                <FormField component={CheckBox} name="dairy" label="Dairy"></FormField>
                                <FormField component={CheckBox} name="egg" label="Egg"></FormField>
                                <FormField component={CheckBox} name="gluten" label="Gluten"></FormField>
                                <FormField component={CheckBox} name="grain" label="Grain"></FormField>
                                <FormField component={CheckBox} name="peanut" label="Peanut"></FormField>
                                <FormField component={CheckBox} name="seafood" label="Seafood"></FormField>
                                <FormField component={CheckBox} name="sesame" label="Sesame"></FormField>
                                <FormField component={CheckBox} name="shellfish" label="Shellfish"></FormField>
                                <FormField component={CheckBox} name="soy" label="Soy"></FormField>
                                <FormField component={CheckBox} name="sulfite" label="Sulfite"></FormField>
                                <FormField component={CheckBox} name="tree_nut" label="Tree Nut"></FormField>
                                <FormField component={CheckBox} name="wheat" label="Wheat"></FormField>
                            </Box>
                            <Button
                                type="submit"
                                label="Search"
                            />
                        </Form>
                    </Box>
                </Layer>
            )}
        </Box>
    );
}

const SearchBox = (props) => (
    <Box
        margin="auto"
        align="center"
    >
        <Box>
            <Form onSubmit={props.search}>
                <FormField name="query" label="Search a recipe:">
                    <TextInput
                        name="query"
                        placeholder="type here"
                    />
                </FormField>
                <Button
                    icon={<Search />}
                    type="submit"
                    label="Search"
                />
            </Form>
        </Box>
        <AdvancedSearch advancedSearch={props.advancedSearch}/>
    </Box>
)

export default SearchBox;