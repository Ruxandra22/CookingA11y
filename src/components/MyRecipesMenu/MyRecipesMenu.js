import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Box, Menu, Text } from 'grommet';

import modelInstance from "../../data/DataModel";

import "./MyRecipesMenu.css";

class CustomMenu extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    // when the components are loaded, we add the observer
    componentDidMount() {
        this.props.model.addObserver(this);
    }

    // this is called when component is removed from the DOM
    // good place to remove observer
    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    update() {
        this.setState({
            customRecipes: modelInstance.getCustomRecipes()
        });
    }

    render(){
        let customRecipes = modelInstance.getCustomRecipes();
        let menu_items = [];
        for (let index = 0; index < customRecipes.length; index++) {
            const item = {
                label:  <Link to={"/recipe_details/" + customRecipes[index].recipe.title} key={customRecipes[index].recipe.title}>
                            {customRecipes[index].recipe.title}
		                </Link>,
            }
            menu_items = menu_items.concat(item);
        }
        return(
            <Box>
                <Menu
                    label="My recipes"
                    items={menu_items}
                />
                <Text role="status" aria-live>You have {menu_items.length} recipes</Text>
            </Box>
        );
    }
}

export default CustomMenu;