const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');
const fetch = require("node-fetch");

// Initial state
const initialState = {
    loading: false,
    posts: [],
    error: ''
}

// Create async think
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    // const response = await fetch('https://bnodejs.herokuapp.com/api/v1/bootcamps');
    return await response.json();
});

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: () => {
        console.log('Main Reducer');
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = '';
            // console.log(`Action =>${action}`);
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.posts = action.payload
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
            state.posts = []
        });
    }
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;