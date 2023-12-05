package main

import "fmt"

var i5 int = 500

func main() {
	var i int = 100
	fmt.Println(i)

	var s string = "Hello"
	fmt.Println(s)

	var (
		i2 int = 200
		s2 string ="Taku"
	)
	fmt.Println(i2, s2)

	var i3 int
	var s3 string
	fmt.Println(i3, s3)

	i3 = 300
	s3 = "Go"
	fmt.Println(i3, s3)



	i4 := 400
	fmt.Println(i4)

	i4 = 450
	fmt.Println(i4)

	fmt.Println(i5)

}