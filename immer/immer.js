const {createStore} = require("redux");
const {produce} = require("immer");

const initialState = {
    name: "Learn with SOURAV",
    address: {
        street: "Uttara",
        city: "Dhaka",
        country: "Bangladesh",
    },
};

// action creator
const updateStreet = (street) => {
    return {
        type: "street_updated",
        payload: street,
    };
};

const updateCity = (street) => {
    return {
        type: "city_updated",
        payload: street,
    };
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "street_updated":
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // };

            return produce(state, (draftState) => {
                draftState.address.street = action.payload;
            });

        case 'city_updated':
            return produce(state, (draftState) => {
                draftState.address.city = action.payload;
            })

        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(updateStreet("Khilkhet"));
store.dispatch(updateCity("Dinajpur"));
