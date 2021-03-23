import draggable from './draggable';
const directives = {
    draggable
}
export default{
    install(Vue){
        Object.keys(directives).forEach((key) => {
            Vue.directive(key,directives[key]);
        });
    }
}
