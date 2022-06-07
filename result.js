<script type="text/javascript">
// 1
var user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
Reflect.deleteProperty(user，name)

// 2
function caculate(obj){    
        var result;       
        for(var name in obj){       
           result += obj[name]
        }  
        return result;  
    }
console.log(caculate(fruit));
</script>