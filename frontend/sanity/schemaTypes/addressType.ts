import { defineField, defineType } from "sanity";
import {HomeIcon} from '@sanity/icons'

export const addressType = defineType({
    name: 'address',
    title: 'Address',
    type: 'document',
    icon: HomeIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Address Name',
            type: 'string',
            description: 'Nhập địa chỉ người nhận (ví dụ: Ngu Hanh Son, Da Nang)',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'email',
            title: 'User Email',
            type: 'email',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'address',
            title: 'Street Address',
            type: 'string',
            description: 'Nhập tên đường và số nhà (ví dụ: 18, Ho Chi Minh)',
            validation: (Rule)=>Rule.required().min(5).max(100)
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (Rule)=>Rule.required().min(5).max(100)
        }),
        defineField({
            name: 'state',
            title: 'State',
            type: 'string',
            description: 'Nhập ký tự cho mã thành phố (ví dụ: HN, VT)',
            validation: (Rule)=>Rule.required().min(5).max(100)
        }),
        defineField({
            name: 'zip',
            title: 'ZIP Code',
            type: 'string',
            description: 'Nhập mã zip code (ví dụ: 12345, 12345-6789)',
            validation: (Rule)=>Rule.required().min(5).max(100)
        }),
        defineField({
            name: 'default',
            title: 'Default Address',
            type: 'boolean',
            description: 'Đây có phải địa chỉ ship không',
            initialValue: false
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: ()=> new Date().toISOString()
        }),
    ],
    preview: {
        select:{
            title: 'name',
            subtitle: 'address',
            city: 'city',
            state: 'state',
            isDefault: 'default'
        },
        prepare({title, subtitle, city, state, isDefault}){
            return {
                title: `${title} ${isDefault ? "(Default)" : ""}`,
                subtitle: `${subtitle}, ${city}, ${state}`
            }
        }
    }

})