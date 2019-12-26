const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

// About Query
const AboutQuery = new GraphQLObjectType({
    name: 'About',
    fields: () => ({
        desc: {type:GraphQLString}
    })
})

// Events Query 
const EventsQuery = new GraphQLObjectType({
    name:'Events',
    fields: () => ({
        name: {type:GraphQLString}   
    })
})

// Services Query
const ServiceQuery = new GraphQLObjectType({
    name:{type:GraphQLString},
    attr:{type:GraphQLString}
})

// Timline Query
const TimelineQuery = new GraphQLObjectType({
    date:{type:GraphQLString},
    event:{type:GraphQLString}
})

// Testimonials Query

const TestimonialsQuery = new GraphQLObjectType({
    name:{type:GraphQLString},
    test:{type:GraphQLString}
})

// Root Query 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    about: {
        type:AboutType
    }
})

module.exports = new GraphQLSchema({

});