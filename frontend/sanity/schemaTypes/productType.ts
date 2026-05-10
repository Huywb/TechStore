import { defineField, defineType } from "sanity";
import {TrolleyIcon} from '@sanity/icons'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name:'name',
            title:'Product Name',
            type:'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name:'slug',
            type:'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        }),
        defineField({
            name:'images',
            title: 'Product Images',
            type:'array',
            of: [{type:'image',options:{hotspot:true}}]
        }),
        defineField({
            name:'description',
            title: 'Description',
            type:'string',
        }),
        defineField({
            name:'price',
            title: "Price",
            type:'number',
        }),
        defineField({
            name:'discount',
            title: "Discount",
            type:'number',
        }),
        defineField({
            name:'categories',
            title: "Categories",
            type:'array',
            of: [{type: 'reference', to : {type: 'category'}}]
        }),
        defineField({
            name:'stock',
            title: "Stock",
            type:'number',
        }),
        defineField({
            name:'brand',
            title: "Brand",
            type:'reference',
            to: {type: 'brand'}
        }),
        defineField({
            name:'status',
            title: "Product Status",
            type:'string',
            options: {
                list: [
                    {title:'New',value:'new'},
                    {title:'Hot',value:'hot'},
                    {title:'Sale',value:'sale'},
                ]
            }
        }),
        defineField({
            name:'variant',
            title: "Product Type",
            type:'string',
            options: {
                list:[
                    {title:'Gadget',value:'gadget'},
                    {title:'Appliances',value:'appliances'},
                    {title:'Refrigerators',value:'refrigerators'},
                    {title:'Others',value:'others'},
                ]
            }
        }),
        defineField({
            name:'isFeatured',
            title: "Featured Product",
            type:'boolean',
            description: 'Click để set Featured',
            initialValue: false
        }),
    ],
    preview: {
        select:{
            title:'name',
            subtitle: 'price',
            media: 'images'
        },
        prepare(selection) {
            const {title,subtitle,media} = selection

            const image = media && media[0]

            return {
                title: title,
                subtitle: `${subtitle}`,
                media: image
            }
        },
    }
})