@extends('layouts.app')

@section('content')
<div class="container">
        <p>@{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>


        <ol>
                <li v-for="(todo, index) in todos">
                        @{{ todo.text }} <input v-model="todo.text"> <button @click="remove(index)">Remove</button>
                </li>
        </ol>
        <button v-on:click="addItem">Add Item</button>
        <button v-on:click="submitForm">Submit</button>

</div>
@endsection
