<template>
    <div>
        <div>
            <span>角色列表</span>
            <el-input v-model="word" placeholder="Please input" />
            <el-button @click="submit">添加</el-button>
        </div>
        <div class="table">
                <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                    >
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="Date" width="120">
                        <template #default="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column property="name" label="Name" width="120" />
                    <el-table-column property="address" label="Address" show-overflow-tooltip />
                    <el-table-column label="operate">
                        
                    </el-table-column>
                </el-table>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import crypto from '@/util/Crypto'
export default {
    name: 'abc',
    setup() {
        const data = reactive({
            word: '',
            encrypto: {},
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ]
        })
        const submit = () => {
            var word =
            {
                name: 'xiaoli',
                age: 18,
                hobby: 'take photo',
                career: 'engineer'
            }
            var keys = Object.keys(word)
            keys.forEach(item => {
                var info = item + " : " + word[item]
                console.log(info)
                var encrypto = crypto.encryptFunc(info)
                console.log('加密', encrypto)
                const decrypto = crypto.decryptFunc(encrypto)
                console.log('解密', decrypto)
            })
        }
        return {
            ...toRefs(data),
            submit
        }
    }
}
</script>
<style>
.el-input {
    width: 250px;
}
.table{
    margin: 20px;
}
</style>