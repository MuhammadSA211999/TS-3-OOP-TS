//TYPE GURD
//keyof gurd function parametre/arguiment check kore kaj kore ba argument type er upor nirbor kore value return kore

//keyof gurd
type Alphaneumeric = string | number
function getValue(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2
    }
    else {
        return param1.toString() + param2.toString()
    }
}

const stringValue = getValue('1', '2')
const numValue = getValue(1, 2)
// console.log(stringValue, numValue)

//in-gurd 
//key-in-gurd object er upor kaj kore| object er nirdisto property-value check kore kaj kore/value return kore

type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: 'admin' /* */
}
type User = AdminUser | NormalUser
function getUser(user: User): string {
    if ('role' in user) {
        //ekhane check kora hocce user ze type diye toiree hoice tar moddhye role property ache kina
        return `I am an admin user`
    }
    else {
        return `I am a normal user`
    }
}
//make some user with type NormalUser or type AdminUser or type User 
const m_sa: AdminUser = {
    name: 'MSA',
    role: 'admin' //role *admin* chara onno kichu deya zabe na
}
const tarek: NormalUser = {
    name: 'Tarek'
}
const user1 = getUser(m_sa)
const user2 = getUser(tarek)
console.log(user1, user2)



