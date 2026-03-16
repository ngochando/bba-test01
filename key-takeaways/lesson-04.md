# 📚 LESSON 04 - KEY TAKE NOTE - DAY 09/03/2026 & 13/03/2026

## JavaScript Basic - Continue

### ✅ OBJECT

#### WHAT - Object là gì?

> Là kiểu dữ liệu được lưu trữ dưới dạng cặp ```key: value```

#### WHY - Tại sao cần phải dùng Object?

Tạo hồ sơ lưu trữ thông tin của 1 học sinh

- Khi không dùng Object:

```
let name = "Ngoc Han";
let age = 18;
let className = "Playwright K22";
```

=> 3 biến rời rạc khó quản lý

- Khi dùng Object:
```
let student = {
    name: "Ngoc Han";
    age: 18;
    className: "Playwright K22";
}
```
=> Gom gọn tất cả các thông tin vào **1 biến duy nhất**, **ưu điểm dễ quản lý**, **dễ truy xuất** và **dễ truyền đi khi cần dùng**

> **⭐️ Key Note:** **Object** có thể tưởng tượng như 1 record, bên trong có nhiều mục khác nhau được lưu trữ dưới dạng từng cặp **key** và **value**
---

#### HOW - Cách Khai Báo Object?

> Có 2 cách để khai báo Object:

**Cách 1: Object Literal (phổ biến nhất)** => được sử dụng nhiều nhất trong thực tế
```
let student = {
    name: "Ngoc Han",
    age: 18,
    className: "Playwright K22"
}
```

**Cách 2: Dùng new Object()**
```
let student = new Object();
student.name = "Ngoc Han"; 
student.age = 18;
student.className = "Playwright K22";
```

##### Convention - Quy tắc đặt tên Key

- Key thường có kiểu dữ liệu là **String**

- Nếu tên key **không có ký tự đặc biệt, khoảng trắng** -> không cần phải đặt trong cặp nháy kép
    - Ví dụ: 
    ```
    name: "Ngoc Han";
    ```
- Nếu tên key **có ký tự đặc biệt, khoảng trắng** -> bắt buộc phải đặt trong cặp nháy kép 
    - - Ví dụ: 
    ```
    "full name": "Ngoc Han";
    ```

#### HOW - Cách Truy Xuất Dữ Liệu Trong Object

**Cách 1: Dot notation (dấu chấm) - Phổ biến**
```
let student = {
    name: "Ngoc Han",
    age: 18,
    className: "Playwright K22",
}
```
Lấy ra value của name, age
```
console.log(student.name); => "Ngoc Han"
console.log(student.age); => 18
```

**Cách 2: Bracket notation (Dấu ngoặc vuông)**
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}
```
Lấy ra value của full name, class name
```
console.log(student["full name"]); => "Ngoc Han"
console.log(student["class name"]); => 18
```

Khi nào thì **bắt buộc** phải dùng Bracket Notation
- Key có dấu cách hoặc ký tự đặc biệt
- Key là biến

Ví dụ:
```
const user = {
  "user name": "Nguyen Van A", // Có khoảng trắng
  100: "Điểm tối đa"          // Bắt đầu bằng số
};

// Dùng biến (động)
const key = "user name";
console.log(user[key]); 
```

#### HOW - Gán giá trị cho Object
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}

//Update giá trị => key đã có
student.age = 20;
student["full name"] = "Ngoc Han 123";

//Add thêm key mới => key chưa tồn tại, auto tạo mới
student.email = "Han@gmail.com";
student["middle name"] = "Phung";
```

#### HOW - Thêm, Sửa, Xoá Thuộc Tính
```
let student = {
    "full name": "Ngoc Han",
    age: 18,
    "class name": "Playwright K22"
}
```
**Thêm**
```
student.email = "Han@gmail.com"; // thêm bằng dot
student["middle name"] = "Phung"; // thêm bằng bracket
```
**Sửa**
```
student.age = 20;
```
**Xoá** -> delete chỉ xoá property ra khỏi Object chứ không xoá biến
```
delete student.email; // xoá bằng dot
delete student["class name"]; // xoá bằng bracket
```

#### Object Lồng Nhau (Nested Object)

Value của 1 Key có thể là bất kì 1 loại dữ liệu nào, kể cả là 1 **Object khác**

```
let sinhVien = {
    hoTen: "Minh",
    tuoi: 21,
    diaChi: {
        soNha: "12",
        duong: "Lê Lợi",
        thanhPho: "Hồ Chí Minh"
    }
};
```
Cách truy xuất Object lồng nhau:
```
console.log(sinhVien.diaChi.soNha);
console.log(sinhVien["diaChi"]["soNha"])
```
---
**Summary**
|Action|Syntax|Example|
|---|---|---|
|Khai báo|```{}``` hoặc ```new Object()```|```let obj = {a: 1}``` hoặc ```let obj = new Object()```|
|Truy xuất|.key hoặc ["key"]|```obj.a``` hoặc ```obj["a"]```|
|Thêm/Sửa|```obj.key = value```|```obj.a = 2```|
|Lồng nhau|value là **Object**|```obj.x.y.z```|

### ✅ ARRAY

#### WHAT - Array là gì?

> Là kiểu dữ liệu dùng để lưu trữ **1 danh sách có thứ tự**

#### WHY - Tại sao lại cần dùng Array?

- Nếu **không dùng** Array:

Ví dụ:
```
let mon1 = "Toán";
let mon2 = "Lý";
let mon3 = "Hoá";
let mon4 = "Anh";
let mon5 = "Tin";
```
-> 5 biến rời rạc. Nếu có nhiều môn hơn thì không quản lý được

- Nếu **dùng** Array:

Ví dụ:
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```
-> 1 biến duy nhất chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua

> Array giống như là 1 danh sách được đánh số - mỗi phần tử đều có index tương ứng, bắt đầu từ 0

![alt text](image.png)

#### HOW - Cách khai báo Array

**Cách 1: Array Literal**
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```

**Cách 2: Dùng new Array()**
```
let monHoc = new Array("Toán", "Lý", "Hoá", "Anh", "Tin");
```

**Note**:
- Array có thể chứa nhiều kiểu dữ liệu khác nhau
- Tuy nhiên trong thực tế trong 1 danh sách nên giữ các phần tử cùng kiểu để dễ xử lý

#### HOW - Truy xuất dữ liệu trong Array

- Lấy phần tử theo index
```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
//lấy phần từ cuối cùng
monHoc[4];
//lấy phần tử đầu tiên
monHoc[0];
//lấy phần từ không tồn tại
monHoc[5] => undefined
```
- Đếm số phần từ -> dùng ```length```
```
monHoc.length => output: 5
```
- Gán lại giá trị theo index
```
monHoc[1] = "Vật lý";
```

#### HOW - Thêm, Xoá phần tử

- Thêm vào cuối -> ```.push()```
- Xoá phần tử cuối -> ```.pop()```
- Thêm vào đầu -> ```.unshift()```
- Xoá phần tử đầu -> ```.shift()```

#### Kết hợp Array với For loop
> Giúp xử lý hàng loạt dữ liệu

Ví dụ:
```
//Tính tổng các số trong array
const arr = [8, 9, 7, 10, 14];

let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum)
```

### ✅ FUNCTION

#### WHAT - Function là gì?
> Là 1 khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code

#### WHY - Tại sao cần dùng Function?
> Những thao tác, code cần dùng đi dùng lại ở nhiều chỗ khác nhau trong chương trình -> nếu cần sửa thì sẽ phải sửa 1 lúc nhiều chỗ. **Dễ sót, dễ sai**.

**Function có thể giải quyết vấn đề** 
- Khai báo 1 lần, dùng nhiều lần
- Khi cần chỉ cần sửa 1 chỗ duy nhất

Tưởng tượng function giống như công thức nấu ăn, khi đã có công thức thì áp dụng vào nấu bao nhiêu lần cũng được

#### HOW - Cách khai báo Function

```
function tenHam() {
    //code ...
}
```

- **function**: từ khoá bắt buộc
- **tenHam**: tên hàm cho mình tự đặt
- **{}**: body của hàm, bên trong chứa code sẽ thực thi

#### HOW - Quy tắc đặt tên Function

- Dùng **camelCase** 
- Nên bắt đầu bằng **Động từ**
- Tên phải **diễn tả được hành động** mà fucntion thực hiện bên trong

> **Lưu ý:* Hàm chỉ chạy khi bạn gọi nó
```
Gọi hàm = tên hàm + dấu ()
```

#### WHAT - Function with Parameter

**Parameter** là tham số truyền vào khi gọi hàm 

##### Phân biệt Parameter(tham số) và Agrument(đối số)

```
// Parameter(tham số) -> biến giữ chỗ khi khai báo function 
    function chao(ten){
        console.log("Xin chào" + ten + "!");
    }

// Agrument(đối số) -> giá trị thật khi call function
    chao("Lan"); -> "Lan" chính là đối số
```
**Một function có thể có nhiều Parameter**

- Khi truyền các đối số vào cần truyền theo thứ tự parameter tương ứng đã khai báo ở function trước đó
- Nếu không truyền vào đối số thì output của tham số ra sẽ là ```undefined```

#### WHAT - Fucntion có giá trị trả về: RETURN

> Ngoài làm gì đó, function còn có thể return kết quả để dùng tiếp 

- **Không có return** -> chỉ ___làm___
- **Có return** -> làm xong ___"trả kết quả"___

> **Note:** ```return``` sẽ dừng hàm ngay lập tức

### Phạm vi của Biến

#### WHAT - Phạm vi của biến là gì?
> **Phạm vi (scope)** -> xác định phạm vi nơi mà biến có thể truy cập được

**Có 3 loại scope:**
- **Block scope (khối)**
    - Biến được khai báo bên trong cặp ngoặc nhọn ```{...}```
        - ```var``` -> global nên không bị giới hạn bởi cặp ngoặc nhọn

        - ```let/const``` -> bị ***giới hạn bởi cặp ngoặc nhọn***, nếu truy cập bên ngoài sẽ trả về ***undefined***

        Ví dụ: 
        ```
        if (true) {
            var a = 1;
            let b = 2;
            const c = 3;
        }
        
        console.log(a); // output: 1
        console.log(b); // output: error: b is not defined
        console.log(c); // output: error: c is not defined
        ```

- **Function scope (hàm)**
    - Biến được khai báo bên trong 1 hàm
        - ```let/var/const``` ***ra bên ngoài hàm*** đều bị ***undefined***

        Ví dụ:
        ```
        function print () {
            var funcScope = "only access in this function";
            let alsoFuncScope = "only access in this function too";

            console.log(funcScope); //output: only access in this function
            console.log(alsoFuncScope); //output: only access in this function too
        }

        console.log(funcScope); //output: funcScope is not defined
        console.log(alsoFuncScope); //output: alsoFuncScope is not defined

        ```
- **Toàn cục (global)**
    - Biến được khai báo ở 1 line code tự do không nằm bên trong bất kì **khối** hay **hàm** nào

        Ví dụ:
        ```
        var globalVar = 1;
        var globalLet = 2;

        function print (){
            console.log(globalVar); //output: 1
            console.log(globalLet) //output: 2
        }
        ```

### Break & Continue

#### Break

##### WHAT - Break là gì?

> **break** dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức

Ví dụ:
```
//Dừng vòng lặp khi i lớn hơn 7
for (let i = 0 ; i <10 ; i++){
    if (i > 7){
        break;
    }

    console.log(i);
}
```
> Output: 
```
0
1
2
3
4
5
6
7
```

##### WHAT - Continue là gì?

> **continue** dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

Ví dụ:

```
//Chỉ in ra các số chẵn và bỏ qua các số lẻ
for (let i =0 ; i < 10 ; i++){
    if (i % 2 !== 0){
        continue;
    }

    console.log(i)
}
```

> Output: 
```
1
3
5
7
9
```

### Câu Điều Kiện Nâng Cao

#### If...else statement

> Thực thi 2 nhánh code khác nhau cho 2 điều kiện true và false

Ví dụ:
```
const num = 8;

if (num % 2 === 0){
    console.log("Đây là số chẵn"); 
} else {
    console.log("Đây là số lẻ");
}
```

> Output: Đây là số chẵn

#### Ternary Operator

> **Toán tử điều kiện (ba ngôi):** cách viết ngắn gọn của if...else đơn giản

Syntax:
```
<condition> ? value of true : value of false
```

- ```condition```: điều kiện cần kiểm tra
- ```?```: nếu điều kiện đúng
- ```value of true```: giá trị trả ra khi điều kiện đúng
- ```:```: ngược lại
- ```value of false```: giá trị trả ra khi điều kiện sai

Ví dụ:
- Dùng **if...else** bình thường
```
if (num % 2 === 0){
    console.log("Đây là số chẵn"); 
} else {
    console.log("Đây là số lẻ");
}
```
- Dùng **toán từ ba ngôi**
```
let checkNum = num % 2 ? "Đây là số chẵn" : "Đây là số lẻ";
```

Note: chỉ dùng ternary operator khi điều kiện cần check đơn giản, phức tạp thì ưu tiên dùng if...else bình thường

### Vòng Lặp Nâng Cao

#### For..in Loop
> Dùng để duyệt qua các thuộc tính (properies) của một Object

Ví dụ:
```
let person = {
    name = "Ngoc Han",
    age = 20,
    grade = "Playwright K22"
}

for (key in person){
    console.log(key);
    console.log(person[key]);
}
```

> Output:
```
name
age
grade
Ngoc Han
10
Playwright K22
```

**Note:** có thể dùng for...in để duyệt qua các phần từ trong Array nhưng không khuyến khích

```
const arr = [a, b, c];

for (let index in arr){
    console.log(index);
    console.log(arr[index]);
}
```

> Output:
```
0
1
2
a
b
c
```

#### forEach method

> Method của Array để thực thi function với mỗi phần tử của Array. Lưu ý: không thể dùng **break** hoặc **continue**

Ví dụ:
```
const nums = [1, 2, 3, 4, 5];

let sum = 0;
nums.forEach(item => {
    sum += item;
});

console.log(sum) // output: 15
```

### JavaScript -Array Ultils

#### map()
> Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc => trả về mảng mới có cùng độ dài

Ví dụ: 
```
//Ví dụ 1: nhân 2 lên cho tất cả các phần tử có trong mảng
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(a => a * 2); //lamda function -> học sau

console.log(arr); //[1, 2, 3, 4, 5] - mảng gốc được giữa nguyên
console.log(newArr); //[2, 4, 6, 8, 10]

//Ví dụ 2:
const students = ['An', 'Bình', 'Cường'];
const studentList = students.map((name, index) => ({
    id: index + 1,
    name: name,
    code: `SV00${index + 1}`
}))

console.log(studentList);
```

#### filter()
> Tạo ra mảng mới chỉ chứa các phần tử thoả mãn điều kiện bên trong hàm callback. Trả về mảng đã được lọc

Ví dụ:
```
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = nums.filter(num => num % 2 === 0)

console.log(evenNums); // [2, 4, 6, 8, 10]
console.log(num); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> mảng gốc giữ nguyên không thay đổi
```

#### find()

> Tìm và trả về phần tử đầu tiên trong mảng thoả điều kiện. Trả về undefined nếu không tìm thấy

Ví dụ:
```
//Ví dụ 1
const nums = [1, 5, 3, 8, 2, 10, 7];

//Tìm số chẵn đầu tiên
const firstEven = nums.find(num => num % 2 === 0) //output: 8

//Tìm số lớn hơn 6
const greaterThanSix = nums.find(num => num > 6) // output 8 -> dừng lại ngay khi tìm thấy

//Không tìm thấy
const negative = nums.find(num => num < 0); // output: undefined

//--------------------------------------------------------------------

//Ví dụ 2:
const users = [
    {id: 101, name: 'An', role: 'admin', active: true},
    {id: 102, name: 'Bình', role: 'user', active: false},
    {id: 103, name: 'Cường', role: 'user', active: true},
    {id: 104, name: 'Dũng', role: 'admin', active: true}
];

//Tìm user theo id
const userID = 103;
const user = users.find(user => user.id === userID);
console.log(user); //{ id: 103, name: 'Cường', role: 'user', active: true }

//Tìm admin đầu tiên
const userRole = "admin";
const firstAdmin = users.find(user => user.role === userRole);
console.log(firstAdmin); // { id: 101, name: 'An', role: 'admin', active: true }

//Tìm user không active
const inactiveUser = users.find(user => user.active === false);
console.log(inactiveUser); // {id: 102, name: 'Bình', role: 'user', active: false}
```

#### reduce()
> Duyệt qua mảng và **tích luỹ** các phần tử thành 1 giá trị duy nhất
(số, chuỗi, object, ...) dựa trên hàm callback (còn có thể dễ hiểu gộp tất cả phần tử của mảng thành 1 giá trị)

- Syntax:
```
array.reduce((accumulator, currentValue) => {
    return newValue;
}, initialValue)
```
- ```accumulator```: giá trị đang được tích luỹ
- ```currentValue```: phần tử hiện tại của array
- ```initialValue```: giá trị ban đầu

**Mô hình tư duy đơn giản, dễ hiểu**

Khi dùng reduce hãy nghĩ:

- ```accumulator = kết quả tạm thời```

Sau mỗi vòng lặp:

- ```kết quả tạm thời (accumulator) = xử lý (kết quả tạm thời(accumulator), phần tử hiện tại (current))```

Ví dụ:
```
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, current) => {
    console.log(`Accumulator: ${accumulator} - Current: ${current}`)
    return accumulator + current //tính toán ra giá trị tích luỹ của vòng tiếp theo
}, 0)

// Accumulator: 0 - Current: 1 -> return 1
// Accumulator: 1 - Current: 2 -> return 3
// Accumulator: 3 - Current: 3 -> return 6
// Accumulator: 6 - Current: 4 -> return 10
// Accumulator: 10 - Current: 5 -> return 15

console.log(sum)
```

**So sánh với for loop:** ```reduce``` là cách viết gọn của loop tích lũy.
```
const nums = [1, 2, 3, 4, 5];

let sum1 = 0;
for(let i = 0; i < nums; i++){
    sum1 += nums[i]
}
console.log(sum1); // 15

const sum2 = nums.reduce((accumulator, current) => {
    return accumulator + current
}, 0);
console.log(sum2); //15

```

Ví dụ:

```
const cart = [
    { product: 'Laptop', price: 20000000, quantity: 1 },
    { product: 'Mouse', price: 300000, quantity: 2 },
    { product: 'Keyboard', price: 800000, quantity: 1 },
    { product: 'Monitor', price: 5000000, quantity: 2 }
]

//-------------------------------------------------------------

//Tính tổng tiền giỏ hàng

//Dùng for loop
let sumCart1 = 0;
for (let i = 0; i < cart.length; i++){
    sumCart1 += cart[i].price * cart[i].quantity;
}
console.log(sumCart1); //31400000

//Dùng reduce()
const sumCart2 = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0)
console.log(sumCart2); //31400000

//-------------------------------------------------------------

//Tính tổng số lượng sản phẩm

//Dùng for loop
let totalItem1 = 0;
for(let i = 0; i < cart.length; i++){
    totalItem1 += cart[i].quantity;
}

console.log(totalItem1);

//Dùng reduce()
const totalItem2 = cart.reduce((count, item) => {
    return count + item.quantity;
}, 0);
```

#### some()
> Kiểm tra xem **có ít nhất một phần tử** trong mảng **thoả điều kiện** hay không. Trả về **true/false**. Dừng ngay khi tìm thấy phần tử thoả điều kiện.

Ví dụ:
```
const numbers = [1, 3, 5, 7, 8, 9];

//Kiểm tra xem có số chẵn hay không?
const hasEven = numbers.some(num => num % 2 === 0)
console.log(hasEven); // true

//Kiểm tra có số > 10 hay không?
const greaterThanTen = numbers.some(num => num > 10);
console.log(greaterThanTen); // false
```

```
const user = {
    name: "Nguyen Van A",
    roles: [
        "user",
        "editor"
    ]
};

const adminRoles = [
    "admin",
    "superadmmin"
]

const editorRoles = [
    "editor",
    "admin"
]

//Kiểm tra user có quyền editor hay không?
const canEdit = user.roles.some(role => editorRoles.includes(role));
console.log(canEdit); //true

//Kiểm tra user có phải là admin hay không
const isAdmin = user.roles.some(role => adminRoles.includes(role));
console.log(isAdmin); //false

//Hàm kiểm tra quyền tổng quát
function hasPermission(userRoles, requiredRoles) {
    return userRoles.some(role => requiredRoles.includes(role));
}

console.log(hasPermission(user.roles, editorRoles)); //true
console.log(hasPermission(user.roles, adminRoles)); //false
```

#### every()
> Kiểm tra xem **tất cả phần tử trong mảng** có thoả mãn điều kiện hay không. Trả về **true/false**. Dừng ngay khi gặp false.

Ví dụ:
```
const numbers = [2, 4, 0, 8, 10];

//Kiểm tra tất cả là số chẵn
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);

//Kiểm tra tất cả lớn hơn 0
const greaterThanZero = numbers.every(num => num > 0);

console.log(greaterThanZero);
```
 
```
const orderItems = [
    { product: "iPhone 15", quantity: 1, inStock: 5, price: 25000000},
    { product: "AirPods", quantity: 2, inStock: 10, price: 4000000},
    { product: "Case", quantity: 1, inStock: 20, price: 500000}
];

//Tất cả sản phẩm còn đủ hàng
const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
console.log(allAvailable);

//Tất cả sản phẩm có giá hợp lệ
const allValidPrices = orderItems.every(item => item.price > 0);
console.log(allValidPrices);

//Kiểm tra giới hạn số lượng (max 10 mỗi sản phẩm)
const withinQuantityLimit = orderItems.every(item => item.quantity <= 10);
console.log(withinQuantityLimit); 
```

#### sort()
> Sắp xếp các phần tử trong mảng theo thứ tự mặc định là theo thứ tự tăng dần (alphabet). Lưu ý: nó sẽ làm thay đổi mảng gốc

Ví dụ:
```
//Sort chuỗi
const names = ["Han", "Phong", "Nhung", "An", "Tuan"];
names.sort();
console.log(names); //[ 'An', 'Han', 'Nhung', 'Phong', 'Tuan' ]

//------------------------------------------------------------------

//Sort số
const numbers = [10, 5, 40, 25, 10000, 1];
numbers.sort(); 
console.log(numbers); // [ 1, 10, 10000, 25, 40, 5 ]
/*
Bug:
Do sort() mặc định sắp xếp theo chuỗi (string), JS so sánh từng ký tự từ trái sang phải. Không đúng theo thứ tự số học.
Các số bị conver thành:
    10     → "10"
    5      → "5"
    40     → "40"
    25     → "25"
    10000  → "10000"
    1      → "1"
*/

//Cách đúng -> dùng Compare function
numbers.sort((a, b) => a - b); //tăng dần
/*
a - b = c
nếu c < 0 -> a đứng trước b
nếu c > 0 -> b đứng trước a
nếu c = 0 -> giữ nguyên

Khi sort() chạy, nó liên tục hỏi một câu:
a và b → ai đứng trước?
Bạn phải trả lời câu hỏi này bằng một con số.
*/
console.log(numbers);

numbers.sort((a, b) => b - a); // giảm dần
console.log(numbers);

//-----------------------------------------------------------------

//Compare function detail:
const arr = [3, 1, 2];

arr.sort((a, b) => {
    console.log(`Compare ${a} với ${b}`);
    if (a < b) return -1; // a trước b
    if (a > b) return 1; // b trước a
    return 0; // bằng nhau
});

// Compare 3 vói 1
// Compare 3 vói 2
// Compare 1 vói 2 console.log(arr); // [1, 2, 3]
// Viết gọn với phép trừ (cho sö)

arr.sort((a, b) => a - b); // tương đương với code trên
```

