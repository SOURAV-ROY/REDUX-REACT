const fetch = require('node-fetch');
const thunkMiddleware = require('redux-thunk');
const {createStore, applyMiddleware} = require("redux");

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

// Actions
const fetchPostsRequested = () => {
    return {
        type: 'posts/requested',
    }
}

const fetchPostsSucceeded = (posts) => {
    return {
        type: 'posts/succeeded',
        payload: posts
    }
}

const fetchPostsFailed = (error) => {
    return {
        type: 'posts/failed',
        payload: error
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/requested':
            return {
                ...state,
                loading: true,
                error: ''
            };

        case 'posts/succeeded':
            return {
                ...state,
                loading: false,
                error: '',
                posts: action.payload
            };

        case 'posts/failed':
            return {
                ...state,
                loading: false,
                error: action.payload.message,
                posts: []
            };
    }
}

// Thunk methods
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const posts = await response.json();
            // console.log('POSTS ==>',posts);
            dispatch(fetchPostsSucceeded(posts));

        } catch (err) {
            dispatch(fetchPostsFailed(err))
        }
    }
};

// Create Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// Subscribe to state changes and update the store
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPosts());