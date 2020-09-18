<template>
    <div class='IndexPageStyle'>
        <div class="main">aaaa</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    created(){
        this.$axios.post('/apis/api/office/template/list',{categoryId: "1",pageNo:1}).then(res=>{
            console.log(res);
        })
    },
    computed:{

    },
    methods:{

    }
}
</script>
<style lang="scss">
.IndexPageStyle{
    $color:blue;
    .main{
        color:$color;
    }
}
</style>