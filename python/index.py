# 1. Variable Declaration
# 2. Operator
# 3. Looping statement
# 4. Conditional Statement
# 5. List,tuple,dictionary and set
# 6. Functions
# 7. Oops
# 8. File handling
# Django / flask - python framework.
# 1. Variable Declaration -> var
# anyname = data types
# myname = "kaliyaperumal"
# myname = 'webdschool'
# myname = '''
# lorem ipsum
# '''
# myname = 10
# myname = 10.25
# myname= True
# print(myname)
# Typecasting
# myname = 'webdschool'
# myname = 10
# myname = 10.25
# myname = True
# print(type(myname))
# myname = str(input('Enter your name:'))
# print(myname)

# Opearator
# 1. Arithmetic operator
# 2. Comparison operator
# 3. Logical operator
# 4. Bitwise operator


# 1. Arithmetic operator +,-,*,/,%
# print(5+5)
# print(5-5)
# print(5*5)
# print(5/5)
# print(5%5)
# print(5+'webdschool')


# Comparison operator -> ==,>,<,>=,<=,!=
# print(5 == 5)
# print(5 > 5)
# print(5 < 15)
# print(5 >= 5)
# print(5 <= 5)
# print(15 != 5)

# Logical opertor -> and or not
# print((5==5) and (10 == 10))
# print((5==5) or (10 == 10))
# print((5==5) and not(10 == 10))

# Bitwise Operator -> &, | 
# print((5 == 5) & (6==6) )
# print((5 == 5) |(16==6) )
# print((5 == 5) | (not(16==6)))


# 4. Looping Statement - if,if-else, and if-elif

# myage = int(input('enter your age:'))

# print(myage > 18)
# if
# if(myage > 18):
#     print('your eligble for vote')

# if-else
# if(myage > 18):
#     print('eligible for vote')
# else:
#     print('not eligible for vote')

# if - elif
# if(myage > 25 and myage <=35):
#     print('eligible for both online and offline vote')
# elif(myage >35):
#     print('eligible for online vote')
# else:
#     print('not eligible for vote')

# firstnumber = int(input('enter ur firstnumber:'))
# secondnumber = int(input('enter ur secondnumber:'))
# print(firstnumber+secondnumber)





# FOR Loop
# mydata = str(input('enter ur data'))
# for i in mydata:
#     print(i)

# firstnumber = int(input('enter your firstnumber:'))
# secondnumber = int(input('enter your secondnumber:'))

# for output in range(firstnumber,secondnumber):
#     print(output)

# while
# initialvalue = 0
# while initialvalue < 10:
#     print(initialvalue)
#     initialvalue+=1
    # initialvalue = initialvalue + 1

# initialvalue = 0
# text = 'darani'
# while initialvalue < len(text):
#     print(text[initialvalue])
#     initialvalue+=1

# List,Tuple,set,Dictionary.

# List -> List is a array. 
# listdata = [1,5,2,3,4,10,10]
# converttuple = tuple(listdata)
# print(converttuple)
# listdata1 = [11,15,12,131,14,110,110]

# print(type(listdata))
# listdata.append(100)
# listdata.clear()
# ss = listdata.copy()
# print(ss)
# listdata.clear()
# print(listdata)
# listdata.count(10)
# print(len(listdata))
# listdata.extend(listdata1)
# listdata.insert(2,15)
# listdata.pop(4)
# listdata.remove(10)
# listdata.reverse()
# listdata.sort()
# print(listdata)

# Tuple - ()

# tupledata = (1,5,2,3,4,10)
# print(tupledata)
# print(type(tupledata))
# print(tupledata.count(4))
# print(tupledata.index(10))
# convertdata = list(tupledata)
# convertdata.clear()
# print(convertdata)


# set - {}
setdata = {1,1,2,3,4,6,2}
setdata1 = {1,11,12,13,4,6,2}

# print(setdata)
# print(type(setdata))
# setdata.add(15)
# setdata.clear()
# ss =setdata.copy()
# print(ss)
# setdata.clear()
# print(setdata)
# setdata.difference_update(setdata1)
# print(setdata)
# print(setdata.intersection(setdata1))
# setdata.intersection_update(setdata1)
# print(setdata)
# print(setdata.symmetric_difference(setdata1))
# setdata.symmetric_difference_update(setdata1)
# print(setdata)


# Dictionary - {}

mydetails = {
    "myname":"kaliyaperumal",
    "myage":20
}

# print(type(mydetails))
# print(mydetails.keys())
# print(mydetails.values())