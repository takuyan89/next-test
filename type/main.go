package main

import "fmt"

func main() {
	// var i int = 100

	// var i2 int64 = 200

	// fmt.Println(i + 50)

	// fmt.Printf("%T\n", i2)

	// fmt.Printf("%T\n", int32(i2))

	// fmt.Println(i + int(i2))



	var fl64 float64 = 2.4
	fmt.Println(fl64)

	fl := 3.2
	fmt.Printf("%T, %T\n", fl64, fl)


	var fl32 float32 = 1.2
	fmt.Printf("%T\n", fl32 )

	fmt.Println(`test
	test
	     tese`)

	var s string = "hello"
	fmt.Println(string(s[0]))

	byteA := []byte{72, 73}
	fmt.Println(byteA)

	fmt.Println(string(byteA))

	c := []byte("HI")
	fmt.Println(c)

}