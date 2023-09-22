public static byte[] setG1Str(string str, bool jp)
{
    Dictionary<string, byte> dict = jp ? U2RBY_J : U2RBY_U;
    if (dict.ContainsKey(str))
        return new[] {dict[str], dict["\0"]};
    return str
        .TakeWhile(c => dict.ContainsKey(c.ToString()))
        .Select(c => dict[c.ToString()])
        .Concat(new[] {dict["\0"]})
        .ToArray();
}
