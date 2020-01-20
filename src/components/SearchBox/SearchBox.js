import React, { useState } from 'react';
import {
    Box, Button, CheckBox, Form, FormField, Heading,
    Layer, RadioButtonGroup
} from 'grommet';
import {Close, Search, SearchAdvanced} from 'grommet-icons';
import FormFieldLabel from "../../components/FormFieldLabel/FormFieldLabel";
import './SearchBox.css';


function AdvancedSearch(props){
    const [show, setShow] = useState();

    return(
        <Box>
            <Button
                className="advancedSearch-button"
                label="Advanced Search"
                onClick={() => setShow(true)}
                plain={true}
                margin={{"top":"medium"}}
            >
            </Button>
            {show && (
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    responsive={true}
                >
                    <Box
                        overflow="auto"
                        margin="auto"
                        pad="40px"
                        width="large"
                    >
                        <Button
                            icon={ <Close /> }
                            onClick={()=>{setShow(false)}}
                        />
                        <Heading level="1">Advanced Search</Heading>
                        <Form
                            role="search"
                            onSubmit={(e) => {
                                props.advancedSearch(e);
                                setShow(false);
                            }}
                        >
                            <Box>
                                <FormField
                                    aria-label="Search by recipe name:"
                                    label="Search by name:"
                                    name="advancedQuery"
                                    htmlFor="id_advancedQuery"
                                    id="id_advancedQuery"
                                    placeholder="e.g. Avocado salad"
                                />
                            </Box>
                            <Box direction="row-responsive">
                                <Box
                                    role="group"
                                    aria-labelledby="diet_type"
                                >
                                    <Heading id="diet_type" level="4">Diet:</Heading>
                                    <FormField
                                        component={CheckBox}
                                        name="vegan"
                                        label="Vegan"
                                        htmlFor="id_vegan"
                                        id="id_vegan"
                                    >
                                    </FormField>
                                    <FormField
                                        name="vegetarian"
                                        component={CheckBox}
                                        label="Vegetarian"
                                        htmlFor="id_vegetarian"
                                        id="id_vegetarian"
                                    />
                                    <FormField
                                        name="pescetarian"
                                        component={CheckBox}
                                        label="Pescetarian"
                                        htmlFor="id_pescetarian"
                                        id="id_pescetarian"
                                    />
                                </Box>
                                <Box role="radiogroup" aria-labelledby="meal_type">
                                    <Heading id="meal_type" level="4">Meal type:</Heading>
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
                                    htmlFor="id_cookingTime"
                                    id="id_cookingTime"
                                >
                                </FormField>
                            </Box>
                            <Box
                                role="group"
                                aria-labelledby="intolerances"
                            >
                                <Heading id="intolerances" level="4">Intolerances:</Heading>
                                <FormField component={CheckBox} name="dairy" htmlFor="id_dairy" id="id_dairy" label="Dairy"></FormField>
                                <FormField component={CheckBox} name="egg" htmlFor="id_egg" id="id_egg" label="Egg"></FormField>
                                <FormField component={CheckBox} name="gluten" htmlFor="id_gluten" id="id_gluten" label="Gluten"></FormField>
                                <FormField component={CheckBox} name="grain" htmlFor="id_grain" id="id_grain" label="Grain"></FormField>
                                <FormField component={CheckBox} name="peanut" htmlFor="id_peanut" id="id_peanut" label="Peanut"></FormField>
                                <FormField component={CheckBox} name="seafood" htmlFor="id_seafood" id="id_seafood" label="Seafood"></FormField>
                                <FormField component={CheckBox} name="sesame" htmlFor="id_sesame" id="id_sesame" label="Sesame"></FormField>
                                <FormField component={CheckBox} name="shellfish" htmlFor="id_shellfish" id="id_shellfish" label="Shellfish"></FormField>
                                <FormField component={CheckBox} name="soy" htmlFor="id_soy" id="id_soy" label="Soy"></FormField>
                                <FormField component={CheckBox} name="sulfite" htmlFor="id_sulfite" id="id_sulfite" label="Sulfite"></FormField>
                                <FormField component={CheckBox} name="tree_nut" htmlFor="id_tree_nut" id="id_tree_nut" label="Tree Nut"></FormField>
                                <FormField component={CheckBox} name="wheat" htmlFor="id_wheat" id="id_wheat" label="Wheat"></FormField>
                            </Box>
                            <Button
                                icon={<SearchAdvanced />}
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
            <Form
                role="search"
                onSubmit={props.search}
            >
                <Box direction="row-responsive">
                    <FormFieldLabel
                        name="query"
                        aria-label="Search"
                        label="Search a recipe:"
                        placeholder="e.g. Tiramisu"
                        htmlFor="id_query"
                        id="id_query"
                    />
                    <Box justify="center">
                        <Button
                            icon={<Search />}
                            type="submit"
                            label="Search"
                            size="small"
                        />
                    </Box>
                </Box>
            </Form>
        </Box>
        <AdvancedSearch advancedSearch={props.advancedSearch}/>
    </Box>
)

export default SearchBox;