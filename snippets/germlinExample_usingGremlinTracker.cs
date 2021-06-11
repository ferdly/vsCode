#https://stackoverflow.com/questions/42423320/type-getmethod-returns-null-even-though-method-definitely-exists
Type[] typeArgs = { typeof(SomeClass) };
var listRef = typeof(List<>);
var list = Activator.CreateInstance(listRef.MakeGenericType(typeArgs));
var method = list.GetType().GetMethod("Add‌", BindingFlags.Default, null, typeArgs, null);
