const axios = require('axios')
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
        id: {type:GraphQLString},
        name: {type:GraphQLString}   
    })
})

// Services Query
const ServiceQuery = new GraphQLObjectType({
    name: 'Service',
    fields: () => ({
        name:{type:GraphQLString},
        attr:{type:GraphQLString}
    })
})

// // Timline Query
// const TimelineQuery = new GraphQLObjectType({
//     date:{type:GraphQLString},
//     event:{type:GraphQLString}
// })

// // Testimonials Query
// const TestimonialsQuery = new GraphQLObjectType({
//     name:{type:GraphQLString},
//     test:{type:GraphQLString}
// })

// Root Query 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        about:{
            type: AboutQuery,
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/about').then(res => res.data)
            }
        },
        event:{
            type: EventsQuery,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/events/' + args.id).then(res => res.data)
            }
        },
        events: {
            type: new GraphQLList(EventsQuery),
            resolve() {
                return axios.get('http://localhost:3000/events').then(res => res.data)
            }
        },
        service: {
            type: ServiceQuery,
            args: {
                id:{type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/services/' + args.id).then(res => res.data)
            }
        },
        services: {
            type: new GraphQLList(ServiceQuery),
            resolve() {
                return axios.get('http://localhost:3000/services').then(res => res.data)
            }
        }
    }
})

// Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAbout:{
            type: AboutQuery,
            args: {
                desc: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:3000/about', {
                    desc: args.desc
                }).then(res => res.data)
            }
        },
        addEvents:{
            type: EventsQuery,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:3000/events', {
                    name: args.name
                }).then(res => res.data)
            }
        },
        addService:{
            type: ServiceQuery,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                attr: {type: new GraphQLNonNull(GraphQLString)}
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});