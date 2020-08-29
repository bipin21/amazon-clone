export const initialState = {
    basket: [
        {
            id: '11',
            title: "item11",
            price: "500",
            rating: 4,
            image: "image1.jpeg"
        },
        {
            id: '12',
            title: "item12",
            price: "500",
            rating: 4,
            image: "image1.jpeg"
        }

    ],
    user: null,
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to add basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for remove from basket
            return {
                ...state
            };
        default:
            return {
                ...state
            };

    }
}

export default reducer;
