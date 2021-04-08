import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import './App.css';
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'http://localhost:8000'
const SUPABASE_ANON_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJhdWQiOiIiLCJzdWIiOiIiLCJSb2xlIjoicG9zdGdyZXMifQ.magCcozTMKNrl76Tj2dsM7XTl_YH0v0ilajzAvIlw3U'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
                <Header />
                <Main />
            </div>
          </BrowserRouter>
        );
    }
}


export default App;