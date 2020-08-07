export default {
    computed:{
        mode(){
            let url = window.location.search;
            const urlParams = new URLSearchParams(url);
            return urlParams.has('teach')? "teach":"learn";
        },
    }
}