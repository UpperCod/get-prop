import test from "ava";
import getProp from "../esm";

const data1 = {
    a: {
        b: {
            c: {
                d: "d",
            },
        },
    },
};

const data2 = [[data1]];

test("get success", (t) => {
    t.is(getProp(data1, "a.b.c.d"), data1.a.b.c.d);
    t.is(getProp(data1, "a/b/c/d"), data1.a.b.c.d);
    t.is(getProp(data1, ["a", "b", "c", "d"]), data1.a.b.c.d);

    t.is(getProp(data1, "a.b.c"), data1.a.b.c);
    t.is(getProp(data1, "a/b/c"), data1.a.b.c);
    t.is(getProp(data1, ["a", "b", "c"]), data1.a.b.c);
});

test("get notFound", (t) => {
    t.is(getProp(data1, "a.b.c.d.f"), undefined);
    t.is(getProp(data1, "a/g"), undefined);
    t.is(getProp(data1, ["1"]), undefined);
});

test("get array", (t) => {
    t.is(getProp(data2, "[0][0]"), data1);
    t.is(getProp(data2, "[0][0].a.b"), data1.a.b);
});

test("get fill", (t) => {
    const fill = "...";
    t.is(getProp(data2, "[0][0][1]", fill), fill);
});
