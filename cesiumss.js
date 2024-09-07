function c(e) {
    return e != null
}

function ye(e) {
    this.name = "DeveloperError", this.message = e;
    var t;
    try {
        throw new Error
    } catch (r) {
        t = r.stack
    }
    this.stack = t
}
c(Object.create) && (ye.prototype = Object.create(Error.prototype), ye.prototype.constructor = ye);
ye.prototype.toString = function() {
    var e = this.name + ": " + this.message;
    return c(this.stack) && (e += "\n" + this.stack.toString()), e
};
ye.throwInstantiationError = function() {
    throw new ye("This function defines an interface and should not be called directly.")
};
var Ke = {};
Ke.typeOf = {};

function jl(e) {
    return e + " is required, actual value was undefined"
}

function Xi(e, t, r) {
    return "Expected " + r + " to be typeof " + t + ", actual typeof was " + e
}
Ke.defined = function(e, t) {
    if (!c(t)) throw new ye(jl(e))
};
Ke.typeOf.func = function(e, t) {
    if (typeof t != "function") throw new ye(Xi(typeof t, "function", e))
};
Ke.typeOf.string = function(e, t) {
    if (typeof t != "string") throw new ye(Xi(typeof t, "string", e))
};
Ke.typeOf.number = function(e, t) {
    if (typeof t != "number") throw new ye(Xi(typeof t, "number", e))
};
Ke.typeOf.number.lessThan = function(e, t, r) {
    if (Ke.typeOf.number(e, t), t >= r) throw new ye("Expected " + e + " to be less than " + r + ", actual value was " + t)
};
Ke.typeOf.number.lessThanOrEquals = function(e, t, r) {
    if (Ke.typeOf.number(e, t), t > r) throw new ye("Expected " + e + " to be less than or equal to " + r + ", actual value was " + t)
};
Ke.typeOf.number.greaterThan = function(e, t, r) {
    if (Ke.typeOf.number(e, t), t <= r) throw new ye("Expected " + e + " to be greater than " + r + ", actual value was " + t)
};
Ke.typeOf.number.greaterThanOrEquals = function(e, t, r) {
    if (Ke.typeOf.number(e, t), t < r) throw new ye("Expected " + e + " to be greater than or equal to" + r + ", actual value was " + t)
};
Ke.typeOf.object = function(e, t) {
    if (typeof t != "object") throw new ye(Xi(typeof t, "object", e))
};
Ke.typeOf.bool = function(e, t) {
    if (typeof t != "boolean") throw new ye(Xi(typeof t, "boolean", e))
};
Ke.typeOf.number.equals = function(e, t, r, n) {
    if (Ke.typeOf.number(e, r), Ke.typeOf.number(t, n), r !== n) throw new ye(e + " must be equal to " + t + ", the actual values are " + r + " and " + n)
};

function v(e, t) {
    return e != null ? e : t
}
v.EMPTY_OBJECT = Object.freeze({});
const Xl = new Set(["nodeType", "toString", "valueOf", "toJSON"]);

function E(e) {
    if (!e) throw new Error("Path is required");
    const t = new Proxy(() => {}, {
        get(r, n) {
            if (!(typeof n == "symbol" || Xl.has(n))) return t
        },
        apply(r, n, i) {
            return t
        }
    });
    return t
}

function yh() {
    return E(this.constructor.name)
}
var p = {};
p.EPSILON1 = .1;
p.EPSILON2 = .01;
p.EPSILON3 = .001;
p.EPSILON4 = 1e-4;
p.EPSILON5 = 1e-5;
p.EPSILON6 = 1e-6;
p.EPSILON7 = 1e-7;
p.EPSILON8 = 1e-8;
p.EPSILON9 = 1e-9;
p.EPSILON10 = 1e-10;
p.EPSILON11 = 1e-11;
p.EPSILON12 = 1e-12;
p.EPSILON13 = 1e-13;
p.EPSILON14 = 1e-14;
p.EPSILON15 = 1e-15;
p.EPSILON16 = 1e-16;
p.EPSILON17 = 1e-17;
p.EPSILON18 = 1e-18;
p.EPSILON19 = 1e-19;
p.EPSILON20 = 1e-20;
p.EPSILON21 = 1e-21;
p.GRAVITATIONALPARAMETER = 3986004418e5;
p.SOLAR_RADIUS = 6955e5;
p.LUNAR_RADIUS = 1737400;
p.SIXTY_FOUR_KILOBYTES = 64 * 1024;
p.FOUR_GIGABYTES = 4 * 1024 * 1024 * 1024;
p.sign = v(Math.sign, function(t) {
    return t = +t, t === 0 || t !== t ? t : t > 0 ? 1 : -1
});
p.signNotZero = function(e) {
    return e < 0 ? -1 : 1
};
p.toSNorm = function(e, t) {
    return t = v(t, 255), Math.round((p.clamp(e, -1, 1) * .5 + .5) * t)
};
p.fromSNorm = function(e, t) {
    return t = v(t, 255), p.clamp(e, 0, t) / t * 2 - 1
};
p.normalize = function(e, t, r) {
    return r = Math.max(r - t, 0), r === 0 ? 0 : p.clamp((e - t) / r, 0, 1)
};
p.sinh = v(Math.sinh, function(t) {
    return (Math.exp(t) - Math.exp(-t)) / 2
});
p.cosh = v(Math.cosh, function(t) {
    return (Math.exp(t) + Math.exp(-t)) / 2
});
p.lerp = function(e, t, r) {
    return (1 - r) * e + r * t
};
p.PI = Math.PI;
p.ONE_OVER_PI = 1 / Math.PI;
p.PI_OVER_TWO = Math.PI / 2;
p.PI_OVER_THREE = Math.PI / 3;
p.PI_OVER_FOUR = Math.PI / 4;
p.PI_OVER_SIX = Math.PI / 6;
p.THREE_PI_OVER_TWO = 3 * Math.PI / 2;
p.TWO_PI = 2 * Math.PI;
p.ONE_OVER_TWO_PI = 1 / (2 * Math.PI);
p.RADIANS_PER_DEGREE = Math.PI / 180;
p.DEGREES_PER_RADIAN = 180 / Math.PI;
p.RADIANS_PER_ARCSECOND = p.RADIANS_PER_DEGREE / 3600;
p.toRadians = function(e) {
    return e * p.RADIANS_PER_DEGREE
};
p.toDegrees = function(e) {
    return e * p.DEGREES_PER_RADIAN
};
p.convertLongitudeRange = function(e) {
    var t = p.TWO_PI,
        r = e - Math.floor(e / t) * t;
    return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r
};
p.clampToLatitudeRange = function(e) {
    return p.clamp(e, -1 * p.PI_OVER_TWO, p.PI_OVER_TWO)
};
p.negativePiToPi = function(e) {
    return p.zeroToTwoPi(e + p.PI) - p.PI
};
p.zeroToTwoPi = function(e) {
    var t = p.mod(e, p.TWO_PI);
    return Math.abs(t) < p.EPSILON14 && Math.abs(e) > p.EPSILON14 ? p.TWO_PI : t
};
p.mod = function(e, t) {
    return (e % t + t) % t
};
p.equalsEpsilon = function(e, t, r, n) {
    r = v(r, 0), n = v(n, r);
    var i = Math.abs(e - t);
    return i <= n || i <= r * Math.max(Math.abs(e), Math.abs(t))
};
p.lessThan = function(e, t, r) {
    return e - t < -r
};
p.lessThanOrEquals = function(e, t, r) {
    return e - t < r
};
p.greaterThan = function(e, t, r) {
    return e - t > r
};
p.greaterThanOrEquals = function(e, t, r) {
    return e - t > -r
};
var ia = [1];
p.factorial = function(e) {
    var t = ia.length;
    if (e >= t)
        for (var r = ia[t - 1], n = t; n <= e; n++) {
            var i = r * n;
            ia.push(i), r = i
        }
    return ia[e]
};
p.incrementWrap = function(e, t, r) {
    return r = v(r, 0), ++e, e > t && (e = r), e
};
p.isPowerOfTwo = function(e) {
    return e !== 0 && (e & e - 1) === 0
};
p.nextPowerOfTwo = function(e) {
    return --e, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e, e
};
p.clamp = function(e, t, r) {
    return e < t ? t : e > r ? r : e
};
var Eh = new yh;
p.setRandomNumberSeed = function(e) {
    Eh = new yh
};
p.nextRandomNumber = function() {
    return Eh.random()
};
p.randomBetween = function(e, t) {
    return p.nextRandomNumber() * (t - e) + e
};
p.acosClamped = function(e) {
    return Math.acos(p.clamp(e, -1, 1))
};
p.asinClamped = function(e) {
    return Math.asin(p.clamp(e, -1, 1))
};
p.chordLength = function(e, t) {
    return 2 * t * Math.sin(e * .5)
};
p.logBase = function(e, t) {
    return Math.log(e) / Math.log(t)
};
p.cbrt = v(Math.cbrt, function(t) {
    var r = Math.pow(Math.abs(t), .3333333333333333);
    return t < 0 ? -r : r
});
p.log2 = v(Math.log2, function(t) {
    return Math.log(t) * Math.LOG2E
});
p.fog = function(e, t) {
    var r = e * t;
    return 1 - Math.exp(-(r * r))
};
p.fastApproximateAtan = function(e) {
    return e * (-.1784 * Math.abs(e) - .0663 * e * e + 1.0301)
};
p.fastApproximateAtan2 = function(e, t) {
    var r, n, i = Math.abs(e);
    r = Math.abs(t), n = Math.max(i, r), r = Math.min(i, r);
    var a = r / n;
    return i = p.fastApproximateAtan(a), i = Math.abs(t) > Math.abs(e) ? p.PI_OVER_TWO - i : i, i = e < 0 ? p.PI - i : i, i = t < 0 ? -i : i, i
};

function R(e, t) {
    this.x = v(e, 0), this.y = v(t, 0)
}
R.fromElements = function(e, t, r) {
    return c(r) ? (r.x = e, r.y = t, r) : new R(e, t)
};
R.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.x = e.x, t.y = e.y, t) : new R(e.x, e.y)
};
R.fromCartesian3 = R.clone;
R.fromCartesian4 = R.clone;
R.packedLength = 2;
R.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.x, t[r] = e.y, t
};
R.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new R), r.x = e[t++], r.y = e[t], r
};
R.packArray = function(e, t) {
    var r = e.length,
        n = r * 2;
    if (!c(t)) t = new Array(n);
    else {
        if (!Array.isArray(t) && t.length !== n) throw new ye("If result is a typed array, it must have exactly array.length * 2 elements");
        t.length !== n && (t.length = n)
    }
    for (var i = 0; i < r; ++i) R.pack(e[i], t, i * 2);
    return t
};
R.unpackArray = function(e, t) {
    var r = e.length;
    c(t) ? t.length = r / 2 : t = new Array(r / 2);
    for (var n = 0; n < r; n += 2) {
        var i = n / 2;
        t[i] = R.unpack(e, n, t[i])
    }
    return t
};
R.fromArray = R.unpack;
R.maximumComponent = function(e) {
    return Math.max(e.x, e.y)
};
R.minimumComponent = function(e) {
    return Math.min(e.x, e.y)
};
R.minimumByComponent = function(e, t, r) {
    return r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r
};
R.maximumByComponent = function(e, t, r) {
    return r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r
};
R.magnitudeSquared = function(e) {
    return e.x * e.x + e.y * e.y
};
R.magnitude = function(e) {
    return Math.sqrt(R.magnitudeSquared(e))
};
var eo = new R;
R.distance = function(e, t) {
    return R.subtract(e, t, eo), R.magnitude(eo)
};
R.distanceSquared = function(e, t) {
    return R.subtract(e, t, eo), R.magnitudeSquared(eo)
};
R.normalize = function(e, t) {
    var r = R.magnitude(e);
    return t.x = e.x / r, t.y = e.y / r, t
};
R.dot = function(e, t) {
    return e.x * t.x + e.y * t.y
};
R.cross = function(e, t) {
    return e.x * t.y - e.y * t.x
};
R.multiplyComponents = function(e, t, r) {
    return r.x = e.x * t.x, r.y = e.y * t.y, r
};
R.divideComponents = function(e, t, r) {
    return r.x = e.x / t.x, r.y = e.y / t.y, r
};
R.add = function(e, t, r) {
    return r.x = e.x + t.x, r.y = e.y + t.y, r
};
R.subtract = function(e, t, r) {
    return r.x = e.x - t.x, r.y = e.y - t.y, r
};
R.multiplyByScalar = function(e, t, r) {
    return r.x = e.x * t, r.y = e.y * t, r
};
R.divideByScalar = function(e, t, r) {
    return r.x = e.x / t, r.y = e.y / t, r
};
R.negate = function(e, t) {
    return t.x = -e.x, t.y = -e.y, t
};
R.abs = function(e, t) {
    return t.x = Math.abs(e.x), t.y = Math.abs(e.y), t
};
var Ou = new R;
R.lerp = function(e, t, r, n) {
    return R.multiplyByScalar(t, r, Ou), n = R.multiplyByScalar(e, 1 - r, n), R.add(Ou, n, n)
};
var Pu = new R,
    Nu = new R;
R.angleBetween = function(e, t) {
    return R.normalize(e, Pu), R.normalize(t, Nu), p.acosClamped(R.dot(Pu, Nu))
};
var Zl = new R;
R.mostOrthogonalAxis = function(e, t) {
    var r = R.normalize(e, Zl);
    return R.abs(r, r), r.x <= r.y ? t = R.clone(R.UNIT_X, t) : t = R.clone(R.UNIT_Y, t), t
};
R.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.x === t.x && e.y === t.y
};
R.equalsArray = function(e, t, r) {
    return e.x === t[r] && e.y === t[r + 1]
};
R.equalsEpsilon = function(e, t, r, n) {
    return e === t || c(e) && c(t) && p.equalsEpsilon(e.x, t.x, r, n) && p.equalsEpsilon(e.y, t.y, r, n)
};
R.ZERO = Object.freeze(new R(0, 0));
R.UNIT_X = Object.freeze(new R(1, 0));
R.UNIT_Y = Object.freeze(new R(0, 1));
R.prototype.clone = function(e) {
    return R.clone(this, e)
};
R.prototype.equals = function(e) {
    return R.equals(this, e)
};
R.prototype.equalsEpsilon = function(e, t, r) {
    return R.equalsEpsilon(this, e, t, r)
};
R.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
};

function u(e, t, r) {
    this.x = v(e, 0), this.y = v(t, 0), this.z = v(r, 0)
}
u.fromSpherical = function(e, t) {
    c(t) || (t = new u);
    var r = e.clock,
        n = e.cone,
        i = v(e.magnitude, 1),
        a = i * Math.sin(n);
    return t.x = a * Math.cos(r), t.y = a * Math.sin(r), t.z = i * Math.cos(n), t
};
u.fromElements = function(e, t, r, n) {
    return c(n) ? (n.x = e, n.y = t, n.z = r, n) : new u(e, t, r)
};
u.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.x = e.x, t.y = e.y, t.z = e.z, t) : new u(e.x, e.y, e.z)
};
u.fromCartesian4 = u.clone;
u.packedLength = 3;
u.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.x, t[r++] = e.y, t[r] = e.z, t
};
u.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new u), r.x = e[t++], r.y = e[t++], r.z = e[t], r
};
u.packArray = function(e, t) {
    var r = e.length,
        n = r * 3;
    if (!c(t)) t = new Array(n);
    else {
        if (!Array.isArray(t) && t.length !== n) throw new ye("If result is a typed array, it must have exactly array.length * 3 elements");
        t.length !== n && (t.length = n)
    }
    for (var i = 0; i < r; ++i) u.pack(e[i], t, i * 3);
    return t
};
u.unpackArray = function(e, t) {
    var r = e.length;
    c(t) ? t.length = r / 3 : t = new Array(r / 3);
    for (var n = 0; n < r; n += 3) {
        var i = n / 3;
        t[i] = u.unpack(e, n, t[i])
    }
    return t
};
u.fromArray = u.unpack;
u.maximumComponent = function(e) {
    return Math.max(e.x, e.y, e.z)
};
u.minimumComponent = function(e) {
    return Math.min(e.x, e.y, e.z)
};
u.minimumByComponent = function(e, t, r) {
    return r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r.z = Math.min(e.z, t.z), r
};
u.maximumByComponent = function(e, t, r) {
    return r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r.z = Math.max(e.z, t.z), r
};
u.magnitudeSquared = function(e) {
    return e.x * e.x + e.y * e.y + e.z * e.z
};
u.magnitude = function(e) {
    return Math.sqrt(u.magnitudeSquared(e))
};
var to = new u;
u.distance = function(e, t) {
    return u.subtract(e, t, to), u.magnitude(to)
};
u.distanceSquared = function(e, t) {
    return u.subtract(e, t, to), u.magnitudeSquared(to)
};
u.normalize = function(e, t) {
    var r = u.magnitude(e);
    return t.x = e.x / r, t.y = e.y / r, t.z = e.z / r, t
};
u.dot = function(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z
};
u.multiplyComponents = function(e, t, r) {
    return r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z, r
};
u.divideComponents = function(e, t, r) {
    return r.x = e.x / t.x, r.y = e.y / t.y, r.z = e.z / t.z, r
};
u.add = function(e, t, r) {
    return r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r
};
u.subtract = function(e, t, r) {
    return r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z, r
};
u.multiplyByScalar = function(e, t, r) {
    return r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r
};
u.divideByScalar = function(e, t, r) {
    return r.x = e.x / t, r.y = e.y / t, r.z = e.z / t, r
};
u.negate = function(e, t) {
    return t.x = -e.x, t.y = -e.y, t.z = -e.z, t
};
u.abs = function(e, t) {
    return t.x = Math.abs(e.x), t.y = Math.abs(e.y), t.z = Math.abs(e.z), t
};
var Mu = new u;
u.lerp = function(e, t, r, n) {
    return u.multiplyByScalar(t, r, Mu), n = u.multiplyByScalar(e, 1 - r, n), u.add(Mu, n, n)
};
var aa = new u,
    No = new u;
u.angleBetween = function(e, t) {
    u.normalize(e, aa), u.normalize(t, No);
    var r = u.dot(aa, No),
        n = u.magnitude(u.cross(aa, No, aa));
    return Math.atan2(n, r)
};
var Kl = new u;
u.mostOrthogonalAxis = function(e, t) {
    var r = u.normalize(e, Kl);
    return u.abs(r, r), r.x <= r.y ? r.x <= r.z ? t = u.clone(u.UNIT_X, t) : t = u.clone(u.UNIT_Z, t) : r.y <= r.z ? t = u.clone(u.UNIT_Y, t) : t = u.clone(u.UNIT_Z, t), t
};
u.projectVector = function(e, t, r) {
    var n = u.dot(e, t) / u.dot(t, t);
    return u.multiplyByScalar(t, n, r)
};
u.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.x === t.x && e.y === t.y && e.z === t.z
};
u.equalsArray = function(e, t, r) {
    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2]
};
u.equalsEpsilon = function(e, t, r, n) {
    return e === t || c(e) && c(t) && p.equalsEpsilon(e.x, t.x, r, n) && p.equalsEpsilon(e.y, t.y, r, n) && p.equalsEpsilon(e.z, t.z, r, n)
};
u.cross = function(e, t, r) {
    var n = e.x,
        i = e.y,
        a = e.z,
        o = t.x,
        s = t.y,
        h = t.z,
        f = i * h - a * s,
        l = a * o - n * h,
        d = n * s - i * o;
    return r.x = f, r.y = l, r.z = d, r
};
u.midpoint = function(e, t, r) {
    return r.x = (e.x + t.x) * .5, r.y = (e.y + t.y) * .5, r.z = (e.z + t.z) * .5, r
};
u.fromDegrees = function(e, t, r, n, i) {
    return e = p.toRadians(e), t = p.toRadians(t), u.fromRadians(e, t, r, n, i)
};
var hr = new u,
    Kn = new u,
    Ql = new u(6378137 * 6378137, 6378137 * 6378137, 6356752314245179e-9 * 6356752314245179e-9);
u.fromRadians = function(e, t, r, n, i) {
    r = v(r, 0);
    var a = c(n) ? n.radiiSquared : Ql,
        o = Math.cos(t);
    hr.x = o * Math.cos(e), hr.y = o * Math.sin(e), hr.z = Math.sin(t), hr = u.normalize(hr, hr), u.multiplyComponents(a, hr, Kn);
    var s = Math.sqrt(u.dot(hr, Kn));
    return Kn = u.divideByScalar(Kn, s, Kn), hr = u.multiplyByScalar(hr, r, hr), c(i) || (i = new u), u.add(Kn, hr, i)
};
u.fromDegreesArray = function(e, t, r) {
    var n = e.length;
    c(r) ? r.length = n / 2 : r = new Array(n / 2);
    for (var i = 0; i < n; i += 2) {
        var a = e[i],
            o = e[i + 1],
            s = i / 2;
        r[s] = u.fromDegrees(a, o, 0, t, r[s])
    }
    return r
};
u.fromRadiansArray = function(e, t, r) {
    var n = e.length;
    c(r) ? r.length = n / 2 : r = new Array(n / 2);
    for (var i = 0; i < n; i += 2) {
        var a = e[i],
            o = e[i + 1],
            s = i / 2;
        r[s] = u.fromRadians(a, o, 0, t, r[s])
    }
    return r
};
u.fromDegreesArrayHeights = function(e, t, r) {
    var n = e.length;
    c(r) ? r.length = n / 3 : r = new Array(n / 3);
    for (var i = 0; i < n; i += 3) {
        var a = e[i],
            o = e[i + 1],
            s = e[i + 2],
            h = i / 3;
        r[h] = u.fromDegrees(a, o, s, t, r[h])
    }
    return r
};
u.fromRadiansArrayHeights = function(e, t, r) {
    var n = e.length;
    c(r) ? r.length = n / 3 : r = new Array(n / 3);
    for (var i = 0; i < n; i += 3) {
        var a = e[i],
            o = e[i + 1],
            s = e[i + 2],
            h = i / 3;
        r[h] = u.fromRadians(a, o, s, t, r[h])
    }
    return r
};
u.ZERO = Object.freeze(new u(0, 0, 0));
u.UNIT_X = Object.freeze(new u(1, 0, 0));
u.UNIT_Y = Object.freeze(new u(0, 1, 0));
u.UNIT_Z = Object.freeze(new u(0, 0, 1));
u.prototype.clone = function(e) {
    return u.clone(this, e)
};
u.prototype.equals = function(e) {
    return u.equals(this, e)
};
u.prototype.equalsEpsilon = function(e, t, r) {
    return u.equalsEpsilon(this, e, t, r)
};
u.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")"
};
var $l = {
    LEFT_DOWN: 0,
    LEFT_UP: 1,
    LEFT_CLICK: 2,
    LEFT_DOUBLE_CLICK: 3,
    RIGHT_DOWN: 5,
    RIGHT_UP: 6,
    RIGHT_CLICK: 7,
    MIDDLE_DOWN: 10,
    MIDDLE_UP: 11,
    MIDDLE_CLICK: 12,
    MOUSE_MOVE: 15,
    WHEEL: 16,
    PINCH_START: 17,
    PINCH_END: 18,
    PINCH_MOVE: 19
};
const Pe = Object.freeze($l);

function Jl() {
    return !0
}

function Je(e, t) {
    function r() {}
    for (var n in e) typeof e[n] == "function" && (e[n] = r);
    e.isDestroyed = Jl
}
var ed = {
    SHIFT: 0,
    CTRL: 1,
    ALT: 2
};
const rn = Object.freeze(ed);

function mn() {
    this._array = [], this._hash = {}
}
Object.defineProperties(mn.prototype, {
    length: {
        get: function() {
            return this._array.length
        }
    },
    values: {
        get: function() {
            return this._array
        }
    }
});
mn.prototype.contains = function(e) {
    return c(this._hash[e])
};
mn.prototype.set = function(e, t) {
    var r = this._hash[e];
    t !== r && (this.remove(e), this._hash[e] = t, this._array.push(t))
};
mn.prototype.get = function(e) {
    return this._hash[e]
};
mn.prototype.remove = function(e) {
    var t = this._hash[e],
        r = c(t);
    if (r) {
        var n = this._array;
        n.splice(n.indexOf(t), 1), delete this._hash[e]
    }
    return r
};
mn.prototype.removeAll = function() {
    var e = this._array;
    e.length > 0 && (this._hash = {}, e.length = 0)
};
const td = {
    supportsFullscreen: E("Fullscreen.supportsFullscreen")
};
var Ot;
typeof navigator < "u" ? Ot = navigator : Ot = {};

function Ln(e) {
    for (var t = e.split("."), r = 0, n = t.length; r < n; ++r) t[r] = parseInt(t[r], 10);
    return t
}
var oa, Ch;

function nu() {
    if (!c(oa) && (oa = !1, !co())) {
        var e = / Chrome\/([\.0-9]+)/.exec(Ot.userAgent);
        e !== null && (oa = !0, Ch = Ln(e[1]))
    }
    return oa
}

function rd() {
    return nu() && Ch
}
var sa, Ah;

function wh() {
    if (!c(sa) && (sa = !1, !nu() && !co() && / Safari\/[\.0-9]+/.test(Ot.userAgent))) {
        var e = / Version\/([\.0-9]+)/.exec(Ot.userAgent);
        e !== null && (sa = !0, Ah = Ln(e[1]))
    }
    return sa
}

function nd() {
    return wh() && Ah
}
var ua, Is;

function Rh() {
    if (!c(ua)) {
        ua = !1;
        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(Ot.userAgent);
        e !== null && (ua = !0, Is = Ln(e[1]), Is.isNightly = !!e[2])
    }
    return ua
}

function id() {
    return Rh() && Is
}
var Ii, Os;

function xh() {
    if (!c(Ii)) {
        Ii = !1;
        var e;
        Ot.appName === "Microsoft Internet Explorer" ? (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Ot.userAgent), e !== null && (Ii = !0, Os = Ln(e[1]))) : Ot.appName === "Netscape" && (e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Ot.userAgent), e !== null && (Ii = !0, Os = Ln(e[1])))
    }
    return Ii
}

function ad() {
    return xh() && Os
}
var ca, Sh;

function co() {
    if (!c(ca)) {
        ca = !1;
        var e = / Edge\/([\.0-9]+)/.exec(Ot.userAgent);
        e !== null && (ca = !0, Sh = Ln(e[1]))
    }
    return ca
}

function od() {
    return co() && Sh
}
var ha, Ih;

function iu() {
    if (!c(ha)) {
        ha = !1;
        var e = /Firefox\/([\.0-9]+)/.exec(Ot.userAgent);
        e !== null && (ha = !0, Ih = Ln(e[1]))
    }
    return ha
}
var Mo;

function sd() {
    return c(Mo) || (Mo = /Windows/i.test(Ot.appVersion)), Mo
}

function ud() {
    return iu() && Ih
}
var Do;

function cd() {
    return c(Do) || (Do = !iu() && typeof PointerEvent < "u" && (!c(Ot.pointerEnabled) || Ot.pointerEnabled)), Do
}
var Oh, fa;

function Ph() {
    if (!c(fa)) {
        var e = document.createElement("canvas");
        e.setAttribute("style", "image-rendering: -moz-crisp-edges;image-rendering: pixelated;");
        var t = e.style.imageRendering;
        fa = c(t) && t !== "", fa && (Oh = t)
    }
    return fa
}

function hd() {
    return Ph() ? Oh : void 0
}
const fd = E("FeatureDetection.supportsWebP");
var Ga = [];
typeof ArrayBuffer < "u" && (Ga.push(Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array), typeof Uint8ClampedArray < "u" && Ga.push(Uint8ClampedArray), typeof Uint8ClampedArray < "u" && Ga.push(Uint8ClampedArray));
var an = {
    isChrome: nu,
    chromeVersion: rd,
    isSafari: wh,
    safariVersion: nd,
    isWebkit: Rh,
    webkitVersion: id,
    isInternetExplorer: xh,
    internetExplorerVersion: ad,
    isEdge: co,
    edgeVersion: od,
    isFirefox: iu,
    firefoxVersion: ud,
    isWindows: sd,
    hardwareConcurrency: v(Ot.hardwareConcurrency, 3),
    supportsPointerEvents: cd,
    supportsImageRenderingPixelated: Ph,
    supportsWebP: fd,
    imageRenderingValue: hd,
    typedArrayTypes: Ga
};
an.supportsFullscreen = function() {
    return td.supportsFullscreen()
};
an.supportsTypedArrays = function() {
    return typeof ArrayBuffer < "u"
};
an.supportsWebWorkers = function() {
    return typeof Worker < "u"
};
an.supportsWebAssembly = function() {
    return typeof WebAssembly < "u" && !an.isEdge()
};
var Ps;
typeof performance < "u" && typeof performance.now == "function" && isFinite(performance.now()) ? Ps = function() {
    return performance.now()
} : Ps = function() {
    return Date.now()
};
const Xt = Ps;

function gn(e, t, r) {
    var n = e._element;
    if (n === document) return r.x = t.clientX, r.y = t.clientY, r;
    var i = n.getBoundingClientRect();
    return r.x = t.clientX - i.left, r.y = t.clientY - i.top, r
}

function au(e, t) {
    var r = e;
    return c(t) && (r += "+" + t), r
}

function Un(e) {
    if (e.shiftKey) return rn.SHIFT;
    if (e.ctrlKey) return rn.CTRL;
    if (e.altKey) return rn.ALT
}
var ut = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};

function $t(e, t, r, n) {
    function i(a) {
        n(e, a)
    }
    an.isInternetExplorer() ? r.addEventListener(t, i, !1) : r.addEventListener(t, i, {
        capture: !1,
        passive: !1
    }), e._removalFunctions.push(function() {
        r.removeEventListener(t, i, !1)
    })
}

function ld(e) {
    var t = e._element,
        r = c(t.disableRootEvents) ? t : document;
    an.supportsPointerEvents() ? ($t(e, "pointerdown", t, gd), $t(e, "pointerup", t, Hu), $t(e, "pointermove", t, Td), $t(e, "pointercancel", t, Hu)) : ($t(e, "mousedown", t, Nh), $t(e, "mouseup", r, Mh), $t(e, "mousemove", r, Dh), $t(e, "touchstart", t, vd), $t(e, "touchend", r, Bu), $t(e, "touchmove", r, pd), $t(e, "touchcancel", r, Bu)), $t(e, "dblclick", t, _d);
    var n;
    "onwheel" in t ? n = "wheel" : document.onmousewheel !== void 0 ? n = "mousewheel" : n = "DOMMouseScroll", $t(e, n, t, md)
}

function dd(e) {
    for (var t = e._removalFunctions, r = 0; r < t.length; ++r) t[r]()
}
var Du = {
    position: new R
};

function ou(e) {
    e._lastSeenTouchEvent = Xt()
}

function su(e) {
    return Xt() - e._lastSeenTouchEvent > Or.mouseEmulationIgnoreMilliseconds
}

function Ns(e, t, r) {
    var n = e.x - t.x,
        i = e.y - t.y,
        a = Math.sqrt(n * n + i * i);
    return a < r
}

function Nh(e, t) {
    if (su(e)) {
        var r = t.button;
        e._buttonDown[r] = !0;
        var n;
        if (r === ut.LEFT) n = Pe.LEFT_DOWN;
        else if (r === ut.MIDDLE) n = Pe.MIDDLE_DOWN;
        else if (r === ut.RIGHT) n = Pe.RIGHT_DOWN;
        else return;
        var i = gn(e, t, e._primaryPosition);
        R.clone(i, e._primaryStartPosition), R.clone(i, e._primaryPreviousPosition);
        var a = Un(t),
            o = e.getInputAction(n, a);
        c(o) && (R.clone(i, Du.position), o(Du), t.preventDefault())
    }
}
var bu = {
        position: new R
    },
    Lu = {
        position: new R
    };

function bo(e, t, r, n) {
    var i = Un(n),
        a = e.getInputAction(t, i),
        o = e.getInputAction(r, i);
    if (c(a) || c(o)) {
        var s = gn(e, n, e._primaryPosition);
        if (c(a) && (R.clone(s, bu.position), a(bu)), c(o)) {
            var h = e._primaryStartPosition;
            Ns(h, s, e._clickPixelTolerance) && (R.clone(s, Lu.position), o(Lu))
        }
    }
}

function Mh(e, t) {
    if (su(e)) {
        var r = t.button;
        r !== ut.LEFT && r !== ut.MIDDLE && r !== ut.RIGHT || (e._buttonDown[ut.LEFT] && (bo(e, Pe.LEFT_UP, Pe.LEFT_CLICK, t), e._buttonDown[ut.LEFT] = !1), e._buttonDown[ut.MIDDLE] && (bo(e, Pe.MIDDLE_UP, Pe.MIDDLE_CLICK, t), e._buttonDown[ut.MIDDLE] = !1), e._buttonDown[ut.RIGHT] && (bo(e, Pe.RIGHT_UP, Pe.RIGHT_CLICK, t), e._buttonDown[ut.RIGHT] = !1))
    }
}
var Lo = {
    startPosition: new R,
    endPosition: new R
};

function Dh(e, t) {
    if (su(e)) {
        var r = Un(t),
            n = gn(e, t, e._primaryPosition),
            i = e._primaryPreviousPosition,
            a = e.getInputAction(Pe.MOUSE_MOVE, r);
        c(a) && (R.clone(i, Lo.startPosition), R.clone(n, Lo.endPosition), a(Lo)), R.clone(n, i), (e._buttonDown[ut.LEFT] || e._buttonDown[ut.MIDDLE] || e._buttonDown[ut.RIGHT]) && t.preventDefault()
    }
}
var Fu = {
    position: new R
};

function _d(e, t) {
    var r = t.button,
        n;
    if (r === ut.LEFT) n = Pe.LEFT_DOUBLE_CLICK;
    else return;
    var i = Un(t),
        a = e.getInputAction(n, i);
    c(a) && (gn(e, t, Fu.position), a(Fu))
}

function md(e, t) {
    var r;
    if (c(t.deltaY)) {
        var n = t.deltaMode;
        n === t.DOM_DELTA_PIXEL ? r = -t.deltaY : n === t.DOM_DELTA_LINE ? r = -t.deltaY * 40 : r = -t.deltaY * 120
    } else t.detail > 0 ? r = t.detail * -120 : r = t.wheelDelta;
    if (c(r)) {
        var i = Un(t),
            a = e.getInputAction(Pe.WHEEL, i);
        c(a) && (a(r), t.preventDefault())
    }
}

function vd(e, t) {
    ou(e);
    var r = t.changedTouches,
        n, i = r.length,
        a, o, s = e._positions;
    for (n = 0; n < i; ++n) a = r[n], o = a.identifier, s.set(o, gn(e, a, new R));
    ho(e, t);
    var h = e._previousPositions;
    for (n = 0; n < i; ++n) a = r[n], o = a.identifier, h.set(o, R.clone(s.get(o)))
}

function Bu(e, t) {
    ou(e);
    var r = t.changedTouches,
        n, i = r.length,
        a, o, s = e._positions;
    for (n = 0; n < i; ++n) a = r[n], o = a.identifier, s.remove(o);
    ho(e, t);
    var h = e._previousPositions;
    for (n = 0; n < i; ++n) a = r[n], o = a.identifier, h.remove(o)
}
var Uu = {
        position: new R
    },
    Fo = {
        position1: new R,
        position2: new R
    },
    zu = {
        position: new R
    },
    Vu = {
        position: new R
    },
    Gu = {
        position: new R
    };

function ho(e, t) {
    var r = Un(t),
        n = e._positions,
        i = n.length,
        a, o, s = e._isPinching;
    if (i !== 1 && e._buttonDown[ut.LEFT]) {
        if (e._buttonDown[ut.LEFT] = !1, c(e._touchHoldTimer) && (clearTimeout(e._touchHoldTimer), e._touchHoldTimer = void 0), a = e.getInputAction(Pe.LEFT_UP, r), c(a) && (R.clone(e._primaryPosition, zu.position), a(zu)), i === 0 && !e._isTouchHolding && (o = e.getInputAction(Pe.LEFT_CLICK, r), c(o))) {
            var h = e._primaryStartPosition,
                f = e._previousPositions.values[0];
            Ns(h, f, e._clickPixelTolerance) && (R.clone(e._primaryPosition, Vu.position), o(Vu))
        }
        e._isTouchHolding = !1
    }
    if (i === 0 && s && (e._isPinching = !1, a = e.getInputAction(Pe.PINCH_END, r), c(a) && a()), i === 1 && !s) {
        var l = n.values[0];
        R.clone(l, e._primaryPosition), R.clone(l, e._primaryStartPosition), R.clone(l, e._primaryPreviousPosition), e._buttonDown[ut.LEFT] = !0, a = e.getInputAction(Pe.LEFT_DOWN, r), c(a) && (R.clone(l, Uu.position), a(Uu)), e._touchHoldTimer = setTimeout(function() {
            if (!e.isDestroyed() && (e._touchHoldTimer = void 0, e._isTouchHolding = !0, o = e.getInputAction(Pe.RIGHT_CLICK, r), c(o))) {
                var d = e._primaryStartPosition,
                    m = e._previousPositions.values[0];
                Ns(d, m, e._holdPixelTolerance) && (R.clone(e._primaryPosition, Gu.position), o(Gu))
            }
        }, Or.touchHoldDelayMilliseconds), t.preventDefault()
    }
    i === 2 && !s && (e._isPinching = !0, a = e.getInputAction(Pe.PINCH_START, r), c(a) && (R.clone(n.values[0], Fo.position1), R.clone(n.values[1], Fo.position2), a(Fo), t.preventDefault()))
}

function pd(e, t) {
    ou(e);
    var r = t.changedTouches,
        n, i = r.length,
        a, o, s = e._positions;
    for (n = 0; n < i; ++n) {
        a = r[n], o = a.identifier;
        var h = s.get(o);
        c(h) && gn(e, a, h)
    }
    bh(e, t);
    var f = e._previousPositions;
    for (n = 0; n < i; ++n) a = r[n], o = a.identifier, R.clone(s.get(o), f.get(o))
}
var Bo = {
        startPosition: new R,
        endPosition: new R
    },
    Oi = {
        distance: {
            startPosition: new R,
            endPosition: new R
        },
        angleAndHeight: {
            startPosition: new R,
            endPosition: new R
        }
    };

function bh(e, t) {
    var r = Un(t),
        n = e._positions,
        i = e._previousPositions,
        a = n.length,
        o;
    if (a === 1 && e._buttonDown[ut.LEFT]) {
        var s = n.values[0];
        R.clone(s, e._primaryPosition);
        var h = e._primaryPreviousPosition;
        o = e.getInputAction(Pe.MOUSE_MOVE, r), c(o) && (R.clone(h, Bo.startPosition), R.clone(s, Bo.endPosition), o(Bo)), R.clone(s, h), t.preventDefault()
    } else if (a === 2 && e._isPinching && (o = e.getInputAction(Pe.PINCH_MOVE, r), c(o))) {
        var f = n.values[0],
            l = n.values[1],
            d = i.values[0],
            m = i.values[1],
            _ = l.x - f.x,
            g = l.y - f.y,
            T = Math.sqrt(_ * _ + g * g),
            C = m.x - d.x,
            A = m.y - d.y,
            S = Math.sqrt(C * C + A * A),
            x = (l.y + f.y) * .125,
            I = (m.y + d.y) * .125,
            O = Math.atan2(g, _),
            F = Math.atan2(A, C);
        R.fromElements(0, S, Oi.distance.startPosition), R.fromElements(0, T, Oi.distance.endPosition), R.fromElements(F, I, Oi.angleAndHeight.startPosition), R.fromElements(O, x, Oi.angleAndHeight.endPosition), o(Oi)
    }
}

function gd(e, t) {
    if (t.target.setPointerCapture(t.pointerId), t.pointerType === "touch") {
        var r = e._positions,
            n = t.pointerId;
        r.set(n, gn(e, t, new R)), ho(e, t);
        var i = e._previousPositions;
        i.set(n, R.clone(r.get(n)))
    } else Nh(e, t)
}

function Hu(e, t) {
    if (t.pointerType === "touch") {
        var r = e._positions,
            n = t.pointerId;
        r.remove(n), ho(e, t);
        var i = e._previousPositions;
        i.remove(n)
    } else Mh(e, t)
}

function Td(e, t) {
    if (t.pointerType === "touch") {
        var r = e._positions,
            n = t.pointerId,
            i = r.get(n);
        if (!c(i)) return;
        gn(e, t, i), bh(e, t);
        var a = e._previousPositions;
        R.clone(r.get(n), a.get(n))
    } else Dh(e, t)
}

function Or(e) {
    this._inputEvents = {}, this._buttonDown = {
        LEFT: !1,
        MIDDLE: !1,
        RIGHT: !1
    }, this._isPinching = !1, this._isTouchHolding = !1, this._lastSeenTouchEvent = -Or.mouseEmulationIgnoreMilliseconds, this._primaryStartPosition = new R, this._primaryPosition = new R, this._primaryPreviousPosition = new R, this._positions = new mn, this._previousPositions = new mn, this._removalFunctions = [], this._touchHoldTimer = void 0, this._clickPixelTolerance = 5, this._holdPixelTolerance = 25, this._element = v(e, document), ld(this)
}
Or.prototype.setInputAction = function(e, t, r) {
    var n = au(t, r);
    this._inputEvents[n] = e
};
Or.prototype.getInputAction = function(e, t) {
    var r = au(e, t);
    return this._inputEvents[r]
};
Or.prototype.removeInputAction = function(e, t) {
    var r = au(e, t);
    delete this._inputEvents[r]
};
Or.prototype.isDestroyed = function() {
    return !1
};
Or.prototype.destroy = function() {
    return dd(this), Je(this)
};
Or.mouseEmulationIgnoreMilliseconds = 800;
Or.touchHoldDelayMilliseconds = 1500;
var yd = {
    LEFT_DRAG: 0,
    RIGHT_DRAG: 1,
    MIDDLE_DRAG: 2,
    WHEEL: 3,
    PINCH: 4
};
const et = Object.freeze(yd);

function Pt(e, t) {
    var r = e;
    return c(t) && (r += "+" + t), r
}

function Ed(e, t) {
    R.clone(e.distance.startPosition, t.distance.startPosition), R.clone(e.distance.endPosition, t.distance.endPosition), R.clone(e.angleAndHeight.startPosition, t.angleAndHeight.startPosition), R.clone(e.angleAndHeight.endPosition, t.angleAndHeight.endPosition)
}

function Wu(e, t, r) {
    var n = Pt(et.PINCH, t),
        i = e._update,
        a = e._isDown,
        o = e._eventStartPosition,
        s = e._pressTime,
        h = e._releaseTime;
    i[n] = !0, a[n] = !1, o[n] = new R;
    var f = e._movement[n];
    c(f) || (f = e._movement[n] = {}), f.distance = {
        startPosition: new R,
        endPosition: new R
    }, f.angleAndHeight = {
        startPosition: new R,
        endPosition: new R
    }, f.prevAngle = 0, e._eventHandler.setInputAction(function(l) {
        e._buttonsDown++, a[n] = !0, s[n] = new Date, R.lerp(l.position1, l.position2, .5, o[n])
    }, Pe.PINCH_START, t), e._eventHandler.setInputAction(function() {
        e._buttonsDown = Math.max(e._buttonsDown - 1, 0), a[n] = !1, h[n] = new Date
    }, Pe.PINCH_END, t), e._eventHandler.setInputAction(function(l) {
        if (a[n]) {
            i[n] ? (Ed(l, f), i[n] = !1, f.prevAngle = f.angleAndHeight.startPosition.x) : (R.clone(l.distance.endPosition, f.distance.endPosition), R.clone(l.angleAndHeight.endPosition, f.angleAndHeight.endPosition));
            for (var d = f.angleAndHeight.endPosition.x, m = f.prevAngle, _ = Math.PI * 2; d >= m + Math.PI;) d -= _;
            for (; d < m - Math.PI;) d += _;
            f.angleAndHeight.endPosition.x = -d * r.clientWidth / 12, f.angleAndHeight.startPosition.x = -m * r.clientWidth / 12
        }
    }, Pe.PINCH_MOVE, t)
}

function qu(e, t) {
    var r = Pt(et.WHEEL, t),
        n = e._update;
    n[r] = !0;
    var i = e._movement[r];
    c(i) || (i = e._movement[r] = {}), i.startPosition = new R, i.endPosition = new R, e._eventHandler.setInputAction(function(a) {
        var o = 15 * p.toRadians(a);
        n[r] ? (R.clone(R.ZERO, i.startPosition), i.endPosition.x = 0, i.endPosition.y = o, n[r] = !1) : i.endPosition.y = i.endPosition.y + o
    }, Pe.WHEEL, t)
}

function Qn(e, t, r) {
    var n = Pt(r, t),
        i = e._isDown,
        a = e._eventStartPosition,
        o = e._pressTime,
        s = e._releaseTime;
    i[n] = !1, a[n] = new R;
    var h = e._lastMovement[n];
    c(h) || (h = e._lastMovement[n] = {
        startPosition: new R,
        endPosition: new R,
        valid: !1
    });
    var f, l;
    r === et.LEFT_DRAG ? (f = Pe.LEFT_DOWN, l = Pe.LEFT_UP) : r === et.RIGHT_DRAG ? (f = Pe.RIGHT_DOWN, l = Pe.RIGHT_UP) : r === et.MIDDLE_DRAG && (f = Pe.MIDDLE_DOWN, l = Pe.MIDDLE_UP), e._eventHandler.setInputAction(function(d) {
        e._buttonsDown++, h.valid = !1, i[n] = !0, o[n] = new Date, R.clone(d.position, a[n])
    }, f, t), e._eventHandler.setInputAction(function() {
        e._buttonsDown = Math.max(e._buttonsDown - 1, 0), i[n] = !1, s[n] = new Date
    }, l, t)
}

function ku(e, t) {
    R.clone(e.startPosition, t.startPosition), R.clone(e.endPosition, t.endPosition)
}

function Yu(e, t) {
    var r = e._update,
        n = e._movement,
        i = e._lastMovement,
        a = e._isDown;
    for (var o in et)
        if (et.hasOwnProperty(o)) {
            var s = et[o];
            if (c(s)) {
                var h = Pt(s, t);
                r[h] = !0, c(e._lastMovement[h]) || (e._lastMovement[h] = {
                    startPosition: new R,
                    endPosition: new R,
                    valid: !1
                }), c(e._movement[h]) || (e._movement[h] = {
                    startPosition: new R,
                    endPosition: new R
                })
            }
        } e._eventHandler.setInputAction(function(f) {
        for (var l in et)
            if (et.hasOwnProperty(l)) {
                var d = et[l];
                if (c(d)) {
                    var m = Pt(d, t);
                    a[m] && (r[m] ? (ku(n[m], i[m]), i[m].valid = !0, ku(f, n[m]), r[m] = !1) : R.clone(f.endPosition, n[m].endPosition))
                }
            } R.clone(f.endPosition, e._currentMousePosition)
    }, Pe.MOUSE_MOVE, t)
}

function Pr(e) {
    this._eventHandler = new Or(e), this._update = {}, this._movement = {}, this._lastMovement = {}, this._isDown = {}, this._eventStartPosition = {}, this._pressTime = {}, this._releaseTime = {}, this._buttonsDown = 0, this._currentMousePosition = new R, qu(this, void 0), Wu(this, void 0, e), Qn(this, void 0, et.LEFT_DRAG), Qn(this, void 0, et.RIGHT_DRAG), Qn(this, void 0, et.MIDDLE_DRAG), Yu(this, void 0);
    for (var t in rn)
        if (rn.hasOwnProperty(t)) {
            var r = rn[t];
            c(r) && (qu(this, r), Wu(this, r, e), Qn(this, r, et.LEFT_DRAG), Qn(this, r, et.RIGHT_DRAG), Qn(this, r, et.MIDDLE_DRAG), Yu(this, r))
        }
}
Object.defineProperties(Pr.prototype, {
    currentMousePosition: {
        get: function() {
            return this._currentMousePosition
        }
    },
    anyButtonDown: {
        get: function() {
            var e = !this._update[Pt(et.WHEEL)] || !this._update[Pt(et.WHEEL, rn.SHIFT)] || !this._update[Pt(et.WHEEL, rn.CTRL)] || !this._update[Pt(et.WHEEL, rn.ALT)];
            return this._buttonsDown > 0 || e
        }
    }
});
Pr.prototype.isMoving = function(e, t) {
    var r = Pt(e, t);
    return !this._update[r]
};
Pr.prototype.getMovement = function(e, t) {
    var r = Pt(e, t),
        n = this._movement[r];
    return n
};
Pr.prototype.getLastMovement = function(e, t) {
    var r = Pt(e, t),
        n = this._lastMovement[r];
    if (n.valid) return n
};
Pr.prototype.isButtonDown = function(e, t) {
    var r = Pt(e, t);
    return this._isDown[r]
};
Pr.prototype.getStartMousePosition = function(e, t) {
    if (e === et.WHEEL) return this._currentMousePosition;
    var r = Pt(e, t);
    return this._eventStartPosition[r]
};
Pr.prototype.getButtonPressTime = function(e, t) {
    var r = Pt(e, t);
    return this._pressTime[r]
};
Pr.prototype.getButtonReleaseTime = function(e, t) {
    var r = Pt(e, t);
    return this._releaseTime[r]
};
Pr.prototype.reset = function() {
    for (var e in this._update) this._update.hasOwnProperty(e) && (this._update[e] = !0)
};
Pr.prototype.isDestroyed = function() {
    return !1
};
Pr.prototype.destroy = function() {
    return this._eventHandler = this._eventHandler && this._eventHandler.destroy(), Je(this)
};

function Pn(e, t) {
    this.start = v(e, 0), this.stop = v(t, 0)
}

function P(e, t, r, n, i, a, o, s, h) {
    this[0] = v(e, 0), this[1] = v(n, 0), this[2] = v(o, 0), this[3] = v(t, 0), this[4] = v(i, 0), this[5] = v(s, 0), this[6] = v(r, 0), this[7] = v(a, 0), this[8] = v(h, 0)
}
P.packedLength = 9;
P.pack = E("pack");
P.unpack = E("unpack");
P.clone = function(e, t) {
    if (c(e)) return c(t) ? (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t) : new P(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
};
P.fromArray = E("fromArray");
P.fromColumnMajorArray = E("fromColumnMajorArray");
P.fromRowMajorArray = E("fromRowMajorArray");
P.fromQuaternion = function(e, t) {
    var r = e.x * e.x,
        n = e.x * e.y,
        i = e.x * e.z,
        a = e.x * e.w,
        o = e.y * e.y,
        s = e.y * e.z,
        h = e.y * e.w,
        f = e.z * e.z,
        l = e.z * e.w,
        d = e.w * e.w,
        m = r - o - f + d,
        _ = 2 * (n - l),
        g = 2 * (i + h),
        T = 2 * (n + l),
        C = -r + o - f + d,
        A = 2 * (s - a),
        S = 2 * (i - h),
        x = 2 * (s + a),
        I = -r - o + f + d;
    return c(t) ? (t[0] = m, t[1] = T, t[2] = S, t[3] = _, t[4] = C, t[5] = x, t[6] = g, t[7] = A, t[8] = I, t) : new P(m, _, g, T, C, A, S, x, I)
};
P.fromHeadingPitchRoll = E("fromHeadingPitchRoll");
P.fromScale = E("fromScale");
P.fromUniformScale = E("fromUniformScale");
P.fromCrossProduct = E("fromCrossProduct");
P.fromRotationX = E("fromRotationX");
P.fromRotationY = E("fromRotationY");
P.fromRotationZ = E("fromRotationZ");
P.toArray = E("toArray");
P.getElementIndex = E("getElementIndex");
P.getColumn = function(e, t, r) {
    var n = t * 3,
        i = e[n],
        a = e[n + 1],
        o = e[n + 2];
    return r.x = i, r.y = a, r.z = o, r
};
P.setColumn = function(e, t, r, n) {
    n = P.clone(e, n);
    var i = t * 3;
    return n[i] = r.x, n[i + 1] = r.y, n[i + 2] = r.z, n
};
P.getRow = E("getRow");
P.setRow = E("setRow");
P.getScale = E("getScale");
P.getMaximumScale = E("getMaximumScale");
P.multiply = E("multiply");
P.add = E("add");
P.subtract = E("subtract");
P.multiplyByVector = function(e, t, r) {
    var n = t.x,
        i = t.y,
        a = t.z,
        o = e[0] * n + e[3] * i + e[6] * a,
        s = e[1] * n + e[4] * i + e[7] * a,
        h = e[2] * n + e[5] * i + e[8] * a;
    return r.x = o, r.y = s, r.z = h, r
};
P.multiplyByScalar = E("multiplyByScalar");
P.multiplyByScale = function(e, t, r) {
    return r[0] = e[0] * t.x, r[1] = e[1] * t.x, r[2] = e[2] * t.x, r[3] = e[3] * t.y, r[4] = e[4] * t.y, r[5] = e[5] * t.y, r[6] = e[6] * t.z, r[7] = e[7] * t.z, r[8] = e[8] * t.z, r
};
P.negate = E("negate");
P.transpose = E("transpose");
P.getRotation = E("getRotation");
P.computeEigenDecomposition = E("computeEigenDecomposition");
P.abs = E("abs");
P.determinant = E("determinant");
P.inverse = E("inverse");
P.inverseTranspose = E("inverseTranspose");
P.equals = E("equals");
P.equalsEpsilon = E("equalsEpsilon");
P.IDENTITY = Object.freeze(new P(1, 0, 0, 0, 1, 0, 0, 0, 1));
P.ZERO = Object.freeze(new P(0, 0, 0, 0, 0, 0, 0, 0, 0));
P.COLUMN0ROW0 = 0;
P.COLUMN0ROW1 = 1;
P.COLUMN0ROW2 = 2;
P.COLUMN1ROW0 = 3;
P.COLUMN1ROW1 = 4;
P.COLUMN1ROW2 = 5;
P.COLUMN2ROW0 = 6;
P.COLUMN2ROW1 = 7;
P.COLUMN2ROW2 = 8;
Object.defineProperties(P.prototype, {
    length: {
        get: function() {
            return P.packedLength
        }
    }
});
P.prototype.clone = function(e) {
    return P.clone(this, e)
};
P.prototype.equals = function(e) {
    return P.equals(this, e)
};
P.equalsArray = function(e, t, r) {
    return e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3] && e[4] === t[r + 4] && e[5] === t[r + 5] && e[6] === t[r + 6] && e[7] === t[r + 7] && e[8] === t[r + 8]
};
P.prototype.equalsEpsilon = function(e, t) {
    return P.equalsEpsilon(this, e, t)
};
P.prototype.toString = function() {
    return "(" + this[0] + ", " + this[3] + ", " + this[6] + ")\n(" + this[1] + ", " + this[4] + ", " + this[7] + ")\n(" + this[2] + ", " + this[5] + ", " + this[8] + ")"
};

function ae(e, t) {
    this.center = u.clone(v(e, u.ZERO)), this.radius = v(t, 0)
}
var Cd = 4 / 3 * p.PI;
ae.fromPoints = E("BoundingSphere.fromPoints");
ae.fromRectangle2D = E("fromRectangle2D");
ae.fromRectangleWithHeights2D = E("fromRectangleWithHeights2D");
ae.fromRectangle3D = E("fromRectangle3D");
ae.fromVertices = E("fromVertices");
ae.fromEncodedCartesianVertices = E("fromEncodedCartesianVertices");
ae.fromCornerPoints = E("fromCornerPoints");
ae.fromEllipsoid = E("fromEllipsoid");
ae.fromBoundingSpheres = E("fromBoundingSpheres");
var Ad = new u,
    wd = new u,
    Rd = new u;
ae.fromOrientedBoundingBox = function(e, t) {
    c(t) || (t = new ae);
    var r = e.halfAxes,
        n = P.getColumn(r, 0, Ad),
        i = P.getColumn(r, 1, wd),
        a = P.getColumn(r, 2, Rd);
    return u.add(n, i, n), u.add(n, a, n), t.center = u.clone(e.center, t.center), t.radius = u.magnitude(n), t
};
ae.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.center = u.clone(e.center, t.center), t.radius = e.radius, t) : new ae(e.center, e.radius)
};
ae.packedLength = 4;
ae.pack = E("pack");
ae.unpack = E("unpack");
ae.union = E("union");
ae.expand = E("BoundingSphere.expand");
ae.intersectPlane = E("BoundingSphere.intersectPlane");
ae.transform = E("BoundingSphere.transform");
var xd = new u;
ae.distanceSquaredTo = function(e, t) {
    var r = u.subtract(e.center, t, xd);
    return u.magnitudeSquared(r) - e.radius * e.radius
};
ae.transformWithoutScale = E("transformWithoutScale");
var Sd = new u;
ae.computePlaneDistances = function(e, t, r, n) {
    c(n) || (n = new Pn);
    var i = u.subtract(e.center, t, Sd),
        a = u.dot(r, i);
    return n.start = a - e.radius, n.stop = a + e.radius, n
};
ae.projectTo2D = E("projectTo2D");
ae.isOccluded = function(e, t) {
    return !t.isBoundingSphereVisible(e)
};
ae.equals = function(e, t) {
    return e === t || c(e) && c(t) && u.equals(e.center, t.center) && e.radius === t.radius
};
ae.prototype.intersectPlane = function(e) {
    return ae.intersectPlane(this, e)
};
ae.prototype.distanceSquaredTo = function(e) {
    return ae.distanceSquaredTo(this, e)
};
ae.prototype.computePlaneDistances = function(e, t, r) {
    return ae.computePlaneDistances(this, e, t, r)
};
ae.prototype.isOccluded = function(e) {
    return ae.isOccluded(this, e)
};
ae.prototype.equals = E("equals");
ae.prototype.clone = function(e) {
    return ae.clone(this, e)
};
ae.prototype.volume = function() {
    var e = this.radius;
    return Cd * e * e * e
};
var Id = new u,
    Od = new u;

function Lh(e, t, r, n, i) {
    var a = e.x,
        o = e.y,
        s = e.z,
        h = t.x,
        f = t.y,
        l = t.z,
        d = a * a * h * h,
        m = o * o * f * f,
        _ = s * s * l * l,
        g = d + m + _,
        T = Math.sqrt(1 / g),
        C = u.multiplyByScalar(e, T, Id);
    if (g < n) return isFinite(T) ? u.clone(C, i) : void 0;
    var A = r.x,
        S = r.y,
        x = r.z,
        I = Od;
    I.x = C.x * A * 2, I.y = C.y * S * 2, I.z = C.z * x * 2;
    var O = (1 - T) * u.magnitude(e) / (.5 * u.magnitude(I)),
        F = 0,
        b, N, D, V, M, W, G, U, q, Y, j;
    do {
        O -= F, D = 1 / (1 + O * A), V = 1 / (1 + O * S), M = 1 / (1 + O * x), W = D * D, G = V * V, U = M * M, q = W * D, Y = G * V, j = U * M, b = d * W + m * G + _ * U - 1, N = d * q * A + m * Y * S + _ * j * x;
        var Z = -2 * N;
        F = b / Z
    } while (Math.abs(b) > p.EPSILON12);
    return c(i) ? (i.x = a * D, i.y = o * V, i.z = s * M, i) : new u(a * D, o * V, s * M)
}

function re(e, t, r) {
    this.longitude = v(e, 0), this.latitude = v(t, 0), this.height = v(r, 0)
}
re.fromRadians = function(e, t, r, n) {
    return r = v(r, 0), c(n) ? (n.longitude = e, n.latitude = t, n.height = r, n) : new re(e, t, r)
};
re.fromDegrees = function(e, t, r, n) {
    return e = p.toRadians(e), t = p.toRadians(t), re.fromRadians(e, t, r, n)
};
var Pd = new u,
    Nd = new u,
    Md = new u,
    Dd = new u(1 / 6378137, 1 / 6378137, 1 / 6356752314245179e-9),
    bd = new u(1 / (6378137 * 6378137), 1 / (6378137 * 6378137), 1 / (6356752314245179e-9 * 6356752314245179e-9)),
    Ld = p.EPSILON1;
re.fromCartesian = function(e, t, r) {
    var n = c(t) ? t.oneOverRadii : Dd,
        i = c(t) ? t.oneOverRadiiSquared : bd,
        a = c(t) ? t._centerToleranceSquared : Ld,
        o = Lh(e, n, i, a, Nd);
    if (c(o)) {
        var s = u.multiplyComponents(o, i, Pd);
        s = u.normalize(s, s);
        var h = u.subtract(e, o, Md),
            f = Math.atan2(s.y, s.x),
            l = Math.asin(s.z),
            d = p.sign(u.dot(h, e)) * u.magnitude(h);
        return c(r) ? (r.longitude = f, r.latitude = l, r.height = d, r) : new re(f, l, d)
    }
};
re.toCartesian = function(e, t, r) {
    return u.fromRadians(e.longitude, e.latitude, e.height, t, r)
};
re.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.longitude = e.longitude, t.latitude = e.latitude, t.height = e.height, t) : new re(e.longitude, e.latitude, e.height)
};
re.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.longitude === t.longitude && e.latitude === t.latitude && e.height === t.height
};
re.equalsEpsilon = function(e, t, r) {
    return r = v(r, 0), e === t || c(e) && c(t) && Math.abs(e.longitude - t.longitude) <= r && Math.abs(e.latitude - t.latitude) <= r && Math.abs(e.height - t.height) <= r
};
re.ZERO = Object.freeze(new re(0, 0, 0));
re.prototype.clone = function(e) {
    return re.clone(this, e)
};
re.prototype.equals = function(e) {
    return re.equals(this, e)
};
re.prototype.equalsEpsilon = function(e, t) {
    return re.equalsEpsilon(this, e, t)
};
re.prototype.toString = function() {
    return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")"
};

function H(e, t, r, n) {
    this.red = v(e, 1), this.green = v(t, 1), this.blue = v(r, 1), this.alpha = v(n, 1)
}
H.fromCartesian4 = function(e, t) {
    return c(t) ? (t.red = e.x, t.green = e.y, t.blue = e.z, t.alpha = e.w, t) : new H(e.x, e.y, e.z, e.w)
};
H.fromBytes = function(e, t, r, n, i) {
    return e = H.byteToFloat(v(e, 255)), t = H.byteToFloat(v(t, 255)), r = H.byteToFloat(v(r, 255)), n = H.byteToFloat(v(n, 255)), c(i) ? (i.red = e, i.green = t, i.blue = r, i.alpha = n, i) : new H(e, t, r, n)
};
H.fromAlpha = E("Color.fromAlpha");
H.fromRgba = E("Color.fromRgba");
H.fromHsl = E("Color.fromHsl");
H.fromRandom = E("Color.fromRandom");
var Fd = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    Bd = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    Ud = /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
    zd = /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
H.fromCssColorString = function(e, t) {
    c(t) || (t = new H), e = e.replace(/\s/g, "");
    var r = H[e.toUpperCase()];
    if (c(r)) return H.clone(r, t), t;
    var n = Fd.exec(e);
    return n !== null ? (t.red = parseInt(n[1], 16) / 15, t.green = parseInt(n[2], 16) / 15, t.blue = parseInt(n[3], 16) / 15, t.alpha = parseInt(v(n[4], "f"), 16) / 15, t) : (n = Bd.exec(e), n !== null ? (t.red = parseInt(n[1], 16) / 255, t.green = parseInt(n[2], 16) / 255, t.blue = parseInt(n[3], 16) / 255, t.alpha = parseInt(v(n[4], "ff"), 16) / 255, t) : (n = Ud.exec(e), n !== null ? (t.red = parseFloat(n[1]) / (n[1].substr(-1) === "%" ? 100 : 255), t.green = parseFloat(n[2]) / (n[2].substr(-1) === "%" ? 100 : 255), t.blue = parseFloat(n[3]) / (n[3].substr(-1) === "%" ? 100 : 255), t.alpha = parseFloat(v(n[4], "1.0")), t) : (n = zd.exec(e), n !== null ? H.fromHsl(parseFloat(n[1]) / 360, parseFloat(n[2]) / 100, parseFloat(n[3]) / 100, parseFloat(v(n[4], "1.0")), t) : (t = void 0, t))))
};
H.packedLength = 4;
H.pack = E("Color.pack");
H.unpack = E("Color.unpack");
H.byteToFloat = function(e) {
    return e / 255
};
H.floatToByte = function(e) {
    return e === 1 ? 255 : e * 256 | 0
};
H.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.red = e.red, t.green = e.green, t.blue = e.blue, t.alpha = e.alpha, t) : new H(e.red, e.green, e.blue, e.alpha)
};
H.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.red === t.red && e.green === t.green && e.blue === t.blue && e.alpha === t.alpha
};
H.equalsArray = function(e, t, r) {
    return e.red === t[r] && e.green === t[r + 1] && e.blue === t[r + 2] && e.alpha === t[r + 3]
};
H.prototype.clone = function(e) {
    return H.clone(this, e)
};
H.prototype.equals = function(e) {
    return H.equals(this, e)
};
H.prototype.equalsEpsilon = function(e, t) {
    return this === e || c(e) && Math.abs(this.red - e.red) <= t && Math.abs(this.green - e.green) <= t && Math.abs(this.blue - e.blue) <= t && Math.abs(this.alpha - e.alpha) <= t
};
H.prototype.toString = function() {
    return "(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")"
};
H.prototype.toCssColorString = function() {
    var e = H.floatToByte(this.red),
        t = H.floatToByte(this.green),
        r = H.floatToByte(this.blue);
    return this.alpha === 1 ? "rgb(" + e + "," + t + "," + r + ")" : "rgba(" + e + "," + t + "," + r + "," + this.alpha + ")"
};
H.prototype.toCssHexString = E("Color.prototype.toCssHexString");
H.prototype.toBytes = E("Color.prototype.toBytes");
H.prototype.toRgba = function() {
    return scratchUint8Array[0] = H.floatToByte(this.red), scratchUint8Array[1] = H.floatToByte(this.green), scratchUint8Array[2] = H.floatToByte(this.blue), scratchUint8Array[3] = H.floatToByte(this.alpha), scratchUint32Array[0]
};
H.prototype.brighten = E("Color.prototype.brighten");
H.prototype.darken = E("Color.prototype.darken");
H.prototype.withAlpha = E("Color.prototype.withAlpha");
H.add = function(e, t, r) {
    return r.red = e.red + t.red, r.green = e.green + t.green, r.blue = e.blue + t.blue, r.alpha = e.alpha + t.alpha, r
};
H.subtract = E("Color.subtract");
H.multiply = E("Color.multiply");
H.divide = E("Color.divide");
H.mod = E("Color.mod");
H.lerp = E("Color.lerp");
H.multiplyByScalar = E("Color.multiplyByScalar");
H.divideByScalar = E("Color.divideByScalar");
H.WHITE = Object.freeze(H.fromCssColorString("#FFFFFF"));
var de = {
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    INT: 5124,
    UNSIGNED_INT: 5125,
    FLOAT: 5126,
    DOUBLE: 5130
};
de.getSizeInBytes = function(e) {
    switch (e) {
        case de.BYTE:
            return Int8Array.BYTES_PER_ELEMENT;
        case de.UNSIGNED_BYTE:
            return Uint8Array.BYTES_PER_ELEMENT;
        case de.SHORT:
            return Int16Array.BYTES_PER_ELEMENT;
        case de.UNSIGNED_SHORT:
            return Uint16Array.BYTES_PER_ELEMENT;
        case de.INT:
            return Int32Array.BYTES_PER_ELEMENT;
        case de.UNSIGNED_INT:
            return Uint32Array.BYTES_PER_ELEMENT;
        case de.FLOAT:
            return Float32Array.BYTES_PER_ELEMENT;
        case de.DOUBLE:
            return Float64Array.BYTES_PER_ELEMENT
    }
};
de.fromTypedArray = E("ComponentDatatype.fromTypedArray");
de.validate = function(e) {
    return c(e) && (e === de.BYTE || e === de.UNSIGNED_BYTE || e === de.SHORT || e === de.UNSIGNED_SHORT || e === de.INT || e === de.UNSIGNED_INT || e === de.FLOAT || e === de.DOUBLE)
};
de.createTypedArray = function(e, t) {
    switch (e) {
        case de.BYTE:
            return new Int8Array(t);
        case de.UNSIGNED_BYTE:
            return new Uint8Array(t);
        case de.SHORT:
            return new Int16Array(t);
        case de.UNSIGNED_SHORT:
            return new Uint16Array(t);
        case de.INT:
            return new Int32Array(t);
        case de.UNSIGNED_INT:
            return new Uint32Array(t);
        case de.FLOAT:
            return new Float32Array(t);
        case de.DOUBLE:
            return new Float64Array(t)
    }
};
de.createArrayBufferView = function(e, t, r, n) {
    switch (r = v(r, 0), n = v(n, (t.byteLength - r) / de.getSizeInBytes(e)), e) {
        case de.BYTE:
            return new Int8Array(t, r, n);
        case de.UNSIGNED_BYTE:
            return new Uint8Array(t, r, n);
        case de.SHORT:
            return new Int16Array(t, r, n);
        case de.UNSIGNED_SHORT:
            return new Uint16Array(t, r, n);
        case de.INT:
            return new Int32Array(t, r, n);
        case de.UNSIGNED_INT:
            return new Uint32Array(t, r, n);
        case de.FLOAT:
            return new Float32Array(t, r, n);
        case de.DOUBLE:
            return new Float64Array(t, r, n)
    }
};
de.fromName = E("ComponentDatatype.fromName");
const Be = Object.freeze(de);

function Fh(e, t, r, n) {
    t = v(t, 0), r = v(r, 0), n = v(n, 0), e._radii = new u(t, r, n), e._radiiSquared = new u(t * t, r * r, n * n), e._radiiToTheFourth = new u(t * t * t * t, r * r * r * r, n * n * n * n), e._oneOverRadii = new u(t === 0 ? 0 : 1 / t, r === 0 ? 0 : 1 / r, n === 0 ? 0 : 1 / n), e._oneOverRadiiSquared = new u(t === 0 ? 0 : 1 / (t * t), r === 0 ? 0 : 1 / (r * r), n === 0 ? 0 : 1 / (n * n)), e._minimumRadius = Math.min(t, r, n), e._maximumRadius = Math.max(t, r, n), e._centerToleranceSquared = p.EPSILON1, e._radiiSquared.z !== 0 && (e._squaredXOverSquaredZ = e._radiiSquared.x / e._radiiSquared.z)
}

function se(e, t, r) {
    this._radii = void 0, this._radiiSquared = void 0, this._radiiToTheFourth = void 0, this._oneOverRadii = void 0, this._oneOverRadiiSquared = void 0, this._minimumRadius = void 0, this._maximumRadius = void 0, this._centerToleranceSquared = void 0, this._squaredXOverSquaredZ = void 0, Fh(this, e, t, r)
}
Object.defineProperties(se.prototype, {
    radii: {
        get: function() {
            return this._radii
        }
    },
    radiiSquared: {
        get: function() {
            return this._radiiSquared
        }
    },
    radiiToTheFourth: {
        get: function() {
            return this._radiiToTheFourth
        }
    },
    oneOverRadii: {
        get: function() {
            return this._oneOverRadii
        }
    },
    oneOverRadiiSquared: {
        get: function() {
            return this._oneOverRadiiSquared
        }
    },
    minimumRadius: {
        get: function() {
            return this._minimumRadius
        }
    },
    maximumRadius: {
        get: function() {
            return this._maximumRadius
        }
    }
});
se.clone = function(e, t) {
    if (c(e)) {
        var r = e._radii;
        return c(t) ? (u.clone(r, t._radii), u.clone(e._radiiSquared, t._radiiSquared), u.clone(e._radiiToTheFourth, t._radiiToTheFourth), u.clone(e._oneOverRadii, t._oneOverRadii), u.clone(e._oneOverRadiiSquared, t._oneOverRadiiSquared), t._minimumRadius = e._minimumRadius, t._maximumRadius = e._maximumRadius, t._centerToleranceSquared = e._centerToleranceSquared, t) : new se(r.x, r.y, r.z)
    }
};
se.fromCartesian3 = function(e, t) {
    return c(t) || (t = new se), c(e) && Fh(t, e.x, e.y, e.z), t
};
se.WGS84 = Object.freeze(new se(6378137, 6378137, 6356752314245179e-9));
se.UNIT_SPHERE = Object.freeze(new se(1, 1, 1));
se.MOON = Object.freeze(new se(p.LUNAR_RADIUS, p.LUNAR_RADIUS, p.LUNAR_RADIUS));
se.prototype.clone = function(e) {
    return se.clone(this, e)
};
se.packedLength = u.packedLength;
se.pack = function(e, t, r) {
    return r = v(r, 0), u.pack(e._radii, t, r), t
};
se.unpack = function(e, t, r) {
    t = v(t, 0);
    var n = u.unpack(e, t);
    return se.fromCartesian3(n, r)
};
se.prototype.geocentricSurfaceNormal = u.normalize;
se.prototype.geodeticSurfaceNormalCartographic = function(e, t) {
    var r = e.longitude,
        n = e.latitude,
        i = Math.cos(n),
        a = i * Math.cos(r),
        o = i * Math.sin(r),
        s = Math.sin(n);
    return c(t) || (t = new u), t.x = a, t.y = o, t.z = s, u.normalize(t, t)
};
se.prototype.geodeticSurfaceNormal = function(e, t) {
    if (!u.equalsEpsilon(e, u.ZERO, p.EPSILON14)) return c(t) || (t = new u), t = u.multiplyComponents(e, this._oneOverRadiiSquared, t), u.normalize(t, t)
};
var Vd = new u,
    Gd = new u;
se.prototype.cartographicToCartesian = function(e, t) {
    var r = Vd,
        n = Gd;
    this.geodeticSurfaceNormalCartographic(e, r), u.multiplyComponents(this._radiiSquared, r, n);
    var i = Math.sqrt(u.dot(r, n));
    return u.divideByScalar(n, i, n), u.multiplyByScalar(r, e.height, r), c(t) || (t = new u), u.add(n, r, t)
};
se.prototype.cartographicArrayToCartesianArray = E("Ellipsoid.prototype.cartographicArrayToCartesianArray");
var Hd = new u,
    Wd = new u,
    qd = new u;
se.prototype.cartesianToCartographic = function(e, t) {
    var r = this.scaleToGeodeticSurface(e, Wd);
    if (c(r)) {
        var n = this.geodeticSurfaceNormal(r, Hd),
            i = u.subtract(e, r, qd),
            a = Math.atan2(n.y, n.x),
            o = Math.asin(n.z),
            s = p.sign(u.dot(i, e)) * u.magnitude(i);
        return c(t) ? (t.longitude = a, t.latitude = o, t.height = s, t) : new re(a, o, s)
    }
};
se.prototype.cartesianArrayToCartographicArray = E("Ellipsoid.prototype.cartesianArrayToCartographicArray");
se.prototype.scaleToGeodeticSurface = function(e, t) {
    return Lh(e, this._oneOverRadii, this._oneOverRadiiSquared, this._centerToleranceSquared, t)
};
se.prototype.scaleToGeocentricSurface = function(e, t) {
    c(t) || (t = new u);
    var r = e.x,
        n = e.y,
        i = e.z,
        a = this._oneOverRadiiSquared,
        o = 1 / Math.sqrt(r * r * a.x + n * n * a.y + i * i * a.z);
    return u.multiplyByScalar(e, o, t)
};
se.prototype.transformPositionToScaledSpace = function(e, t) {
    return c(t) || (t = new u), u.multiplyComponents(e, this._oneOverRadii, t)
};
se.prototype.transformPositionFromScaledSpace = function(e, t) {
    return c(t) || (t = new u), u.multiplyComponents(e, this._radii, t)
};
se.prototype.equals = function(e) {
    return this === e || c(e) && u.equals(this._radii, e._radii)
};
se.prototype.toString = function() {
    return this._radii.toString()
};
se.prototype.getSurfaceNormalIntersectionWithZAxis = function(e, t, r) {
    t = v(t, 0);
    var n = this._squaredXOverSquaredZ;
    if (c(r) || (r = new u), r.x = 0, r.y = 0, r.z = e.z * (1 - n), !(Math.abs(r.z) >= this._radii.z - t)) return r
};
se.prototype.surfaceArea = E("Ellipsoid.prototype.surfaceArea");

function xr() {
    this.high = u.clone(u.ZERO), this.low = u.clone(u.ZERO)
}
xr.encode = function(e, t) {
    c(t) || (t = {
        high: 0,
        low: 0
    });
    var r;
    return e >= 0 ? (r = Math.floor(e / 65536) * 65536, t.high = r, t.low = e - r) : (r = Math.floor(-e / 65536) * 65536, t.high = -r, t.low = e + r), t
};
var $r = {
    high: 0,
    low: 0
};
xr.fromCartesian = function(e, t) {
    c(t) || (t = new xr);
    var r = t.high,
        n = t.low;
    return xr.encode(e.x, $r), r.x = $r.high, n.x = $r.low, xr.encode(e.y, $r), r.y = $r.high, n.y = $r.low, xr.encode(e.z, $r), r.z = $r.high, n.z = $r.low, t
};
var Uo = new xr;
xr.writeElements = function(e, t, r) {
    xr.fromCartesian(e, Uo);
    var n = Uo.high,
        i = Uo.low;
    t[r] = n.x, t[r + 1] = n.y, t[r + 2] = n.z, t[r + 3] = i.x, t[r + 4] = i.y, t[r + 5] = i.z
};
var kd = {
    DEPTH_BUFFER_BIT: 256,
    STENCIL_BUFFER_BIT: 1024,
    COLOR_BUFFER_BIT: 16384,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    ZERO: 0,
    ONE: 1,
    SRC_COLOR: 768,
    ONE_MINUS_SRC_COLOR: 769,
    SRC_ALPHA: 770,
    ONE_MINUS_SRC_ALPHA: 771,
    DST_ALPHA: 772,
    ONE_MINUS_DST_ALPHA: 773,
    DST_COLOR: 774,
    ONE_MINUS_DST_COLOR: 775,
    SRC_ALPHA_SATURATE: 776,
    FUNC_ADD: 32774,
    BLEND_EQUATION: 32777,
    BLEND_EQUATION_RGB: 32777,
    BLEND_EQUATION_ALPHA: 34877,
    FUNC_SUBTRACT: 32778,
    FUNC_REVERSE_SUBTRACT: 32779,
    BLEND_DST_RGB: 32968,
    BLEND_SRC_RGB: 32969,
    BLEND_DST_ALPHA: 32970,
    BLEND_SRC_ALPHA: 32971,
    CONSTANT_COLOR: 32769,
    ONE_MINUS_CONSTANT_COLOR: 32770,
    CONSTANT_ALPHA: 32771,
    ONE_MINUS_CONSTANT_ALPHA: 32772,
    BLEND_COLOR: 32773,
    ARRAY_BUFFER: 34962,
    ELEMENT_ARRAY_BUFFER: 34963,
    ARRAY_BUFFER_BINDING: 34964,
    ELEMENT_ARRAY_BUFFER_BINDING: 34965,
    STREAM_DRAW: 35040,
    STATIC_DRAW: 35044,
    DYNAMIC_DRAW: 35048,
    BUFFER_SIZE: 34660,
    BUFFER_USAGE: 34661,
    CURRENT_VERTEX_ATTRIB: 34342,
    FRONT: 1028,
    BACK: 1029,
    FRONT_AND_BACK: 1032,
    CULL_FACE: 2884,
    BLEND: 3042,
    DITHER: 3024,
    STENCIL_TEST: 2960,
    DEPTH_TEST: 2929,
    SCISSOR_TEST: 3089,
    POLYGON_OFFSET_FILL: 32823,
    SAMPLE_ALPHA_TO_COVERAGE: 32926,
    SAMPLE_COVERAGE: 32928,
    NO_ERROR: 0,
    INVALID_ENUM: 1280,
    INVALID_VALUE: 1281,
    INVALID_OPERATION: 1282,
    OUT_OF_MEMORY: 1285,
    CW: 2304,
    CCW: 2305,
    LINE_WIDTH: 2849,
    ALIASED_POINT_SIZE_RANGE: 33901,
    ALIASED_LINE_WIDTH_RANGE: 33902,
    CULL_FACE_MODE: 2885,
    FRONT_FACE: 2886,
    DEPTH_RANGE: 2928,
    DEPTH_WRITEMASK: 2930,
    DEPTH_CLEAR_VALUE: 2931,
    DEPTH_FUNC: 2932,
    STENCIL_CLEAR_VALUE: 2961,
    STENCIL_FUNC: 2962,
    STENCIL_FAIL: 2964,
    STENCIL_PASS_DEPTH_FAIL: 2965,
    STENCIL_PASS_DEPTH_PASS: 2966,
    STENCIL_REF: 2967,
    STENCIL_VALUE_MASK: 2963,
    STENCIL_WRITEMASK: 2968,
    STENCIL_BACK_FUNC: 34816,
    STENCIL_BACK_FAIL: 34817,
    STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
    STENCIL_BACK_PASS_DEPTH_PASS: 34819,
    STENCIL_BACK_REF: 36003,
    STENCIL_BACK_VALUE_MASK: 36004,
    STENCIL_BACK_WRITEMASK: 36005,
    VIEWPORT: 2978,
    SCISSOR_BOX: 3088,
    COLOR_CLEAR_VALUE: 3106,
    COLOR_WRITEMASK: 3107,
    UNPACK_ALIGNMENT: 3317,
    PACK_ALIGNMENT: 3333,
    MAX_TEXTURE_SIZE: 3379,
    MAX_VIEWPORT_DIMS: 3386,
    SUBPIXEL_BITS: 3408,
    RED_BITS: 3410,
    GREEN_BITS: 3411,
    BLUE_BITS: 3412,
    ALPHA_BITS: 3413,
    DEPTH_BITS: 3414,
    STENCIL_BITS: 3415,
    POLYGON_OFFSET_UNITS: 10752,
    POLYGON_OFFSET_FACTOR: 32824,
    TEXTURE_BINDING_2D: 32873,
    SAMPLE_BUFFERS: 32936,
    SAMPLES: 32937,
    SAMPLE_COVERAGE_VALUE: 32938,
    SAMPLE_COVERAGE_INVERT: 32939,
    COMPRESSED_TEXTURE_FORMATS: 34467,
    DONT_CARE: 4352,
    FASTEST: 4353,
    NICEST: 4354,
    GENERATE_MIPMAP_HINT: 33170,
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    INT: 5124,
    UNSIGNED_INT: 5125,
    FLOAT: 5126,
    DEPTH_COMPONENT: 6402,
    ALPHA: 6406,
    RGB: 6407,
    RGBA: 6408,
    LUMINANCE: 6409,
    LUMINANCE_ALPHA: 6410,
    UNSIGNED_SHORT_4_4_4_4: 32819,
    UNSIGNED_SHORT_5_5_5_1: 32820,
    UNSIGNED_SHORT_5_6_5: 33635,
    FRAGMENT_SHADER: 35632,
    VERTEX_SHADER: 35633,
    MAX_VERTEX_ATTRIBS: 34921,
    MAX_VERTEX_UNIFORM_VECTORS: 36347,
    MAX_VARYING_VECTORS: 36348,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
    MAX_TEXTURE_IMAGE_UNITS: 34930,
    MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
    SHADER_TYPE: 35663,
    DELETE_STATUS: 35712,
    LINK_STATUS: 35714,
    VALIDATE_STATUS: 35715,
    ATTACHED_SHADERS: 35717,
    ACTIVE_UNIFORMS: 35718,
    ACTIVE_ATTRIBUTES: 35721,
    SHADING_LANGUAGE_VERSION: 35724,
    CURRENT_PROGRAM: 35725,
    NEVER: 512,
    LESS: 513,
    EQUAL: 514,
    LEQUAL: 515,
    GREATER: 516,
    NOTEQUAL: 517,
    GEQUAL: 518,
    ALWAYS: 519,
    KEEP: 7680,
    REPLACE: 7681,
    INCR: 7682,
    DECR: 7683,
    INVERT: 5386,
    INCR_WRAP: 34055,
    DECR_WRAP: 34056,
    VENDOR: 7936,
    RENDERER: 7937,
    VERSION: 7938,
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987,
    TEXTURE_MAG_FILTER: 10240,
    TEXTURE_MIN_FILTER: 10241,
    TEXTURE_WRAP_S: 10242,
    TEXTURE_WRAP_T: 10243,
    TEXTURE_2D: 3553,
    TEXTURE: 5890,
    TEXTURE_CUBE_MAP: 34067,
    TEXTURE_BINDING_CUBE_MAP: 34068,
    TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
    MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
    TEXTURE0: 33984,
    TEXTURE1: 33985,
    TEXTURE2: 33986,
    TEXTURE3: 33987,
    TEXTURE4: 33988,
    TEXTURE5: 33989,
    TEXTURE6: 33990,
    TEXTURE7: 33991,
    TEXTURE8: 33992,
    TEXTURE9: 33993,
    TEXTURE10: 33994,
    TEXTURE11: 33995,
    TEXTURE12: 33996,
    TEXTURE13: 33997,
    TEXTURE14: 33998,
    TEXTURE15: 33999,
    TEXTURE16: 34e3,
    TEXTURE17: 34001,
    TEXTURE18: 34002,
    TEXTURE19: 34003,
    TEXTURE20: 34004,
    TEXTURE21: 34005,
    TEXTURE22: 34006,
    TEXTURE23: 34007,
    TEXTURE24: 34008,
    TEXTURE25: 34009,
    TEXTURE26: 34010,
    TEXTURE27: 34011,
    TEXTURE28: 34012,
    TEXTURE29: 34013,
    TEXTURE30: 34014,
    TEXTURE31: 34015,
    ACTIVE_TEXTURE: 34016,
    REPEAT: 10497,
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    INT_VEC2: 35667,
    INT_VEC3: 35668,
    INT_VEC4: 35669,
    BOOL: 35670,
    BOOL_VEC2: 35671,
    BOOL_VEC3: 35672,
    BOOL_VEC4: 35673,
    FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    SAMPLER_2D: 35678,
    SAMPLER_CUBE: 35680,
    VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
    VERTEX_ATTRIB_ARRAY_SIZE: 34339,
    VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
    VERTEX_ATTRIB_ARRAY_TYPE: 34341,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
    VERTEX_ATTRIB_ARRAY_POINTER: 34373,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
    IMPLEMENTATION_COLOR_READ_TYPE: 35738,
    IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
    COMPILE_STATUS: 35713,
    LOW_FLOAT: 36336,
    MEDIUM_FLOAT: 36337,
    HIGH_FLOAT: 36338,
    LOW_INT: 36339,
    MEDIUM_INT: 36340,
    HIGH_INT: 36341,
    FRAMEBUFFER: 36160,
    RENDERBUFFER: 36161,
    RGBA4: 32854,
    RGB5_A1: 32855,
    RGB565: 36194,
    DEPTH_COMPONENT16: 33189,
    STENCIL_INDEX: 6401,
    STENCIL_INDEX8: 36168,
    DEPTH_STENCIL: 34041,
    RENDERBUFFER_WIDTH: 36162,
    RENDERBUFFER_HEIGHT: 36163,
    RENDERBUFFER_INTERNAL_FORMAT: 36164,
    RENDERBUFFER_RED_SIZE: 36176,
    RENDERBUFFER_GREEN_SIZE: 36177,
    RENDERBUFFER_BLUE_SIZE: 36178,
    RENDERBUFFER_ALPHA_SIZE: 36179,
    RENDERBUFFER_DEPTH_SIZE: 36180,
    RENDERBUFFER_STENCIL_SIZE: 36181,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
    COLOR_ATTACHMENT0: 36064,
    DEPTH_ATTACHMENT: 36096,
    STENCIL_ATTACHMENT: 36128,
    DEPTH_STENCIL_ATTACHMENT: 33306,
    NONE: 0,
    FRAMEBUFFER_COMPLETE: 36053,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
    FRAMEBUFFER_UNSUPPORTED: 36061,
    FRAMEBUFFER_BINDING: 36006,
    RENDERBUFFER_BINDING: 36007,
    MAX_RENDERBUFFER_SIZE: 34024,
    INVALID_FRAMEBUFFER_OPERATION: 1286,
    UNPACK_FLIP_Y_WEBGL: 37440,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
    CONTEXT_LOST_WEBGL: 37442,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
    BROWSER_DEFAULT_WEBGL: 37444,
    COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
    COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
    COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
    COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
    COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
    COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
    COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
    COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
    COMPRESSED_RGB_ETC1_WEBGL: 36196,
    HALF_FLOAT_OES: 36193,
    DOUBLE: 5130,
    READ_BUFFER: 3074,
    UNPACK_ROW_LENGTH: 3314,
    UNPACK_SKIP_ROWS: 3315,
    UNPACK_SKIP_PIXELS: 3316,
    PACK_ROW_LENGTH: 3330,
    PACK_SKIP_ROWS: 3331,
    PACK_SKIP_PIXELS: 3332,
    COLOR: 6144,
    DEPTH: 6145,
    STENCIL: 6146,
    RED: 6403,
    RGB8: 32849,
    RGBA8: 32856,
    RGB10_A2: 32857,
    TEXTURE_BINDING_3D: 32874,
    UNPACK_SKIP_IMAGES: 32877,
    UNPACK_IMAGE_HEIGHT: 32878,
    TEXTURE_3D: 32879,
    TEXTURE_WRAP_R: 32882,
    MAX_3D_TEXTURE_SIZE: 32883,
    UNSIGNED_INT_2_10_10_10_REV: 33640,
    MAX_ELEMENTS_VERTICES: 33e3,
    MAX_ELEMENTS_INDICES: 33001,
    TEXTURE_MIN_LOD: 33082,
    TEXTURE_MAX_LOD: 33083,
    TEXTURE_BASE_LEVEL: 33084,
    TEXTURE_MAX_LEVEL: 33085,
    MIN: 32775,
    MAX: 32776,
    DEPTH_COMPONENT24: 33190,
    MAX_TEXTURE_LOD_BIAS: 34045,
    TEXTURE_COMPARE_MODE: 34892,
    TEXTURE_COMPARE_FUNC: 34893,
    CURRENT_QUERY: 34917,
    QUERY_RESULT: 34918,
    QUERY_RESULT_AVAILABLE: 34919,
    STREAM_READ: 35041,
    STREAM_COPY: 35042,
    STATIC_READ: 35045,
    STATIC_COPY: 35046,
    DYNAMIC_READ: 35049,
    DYNAMIC_COPY: 35050,
    MAX_DRAW_BUFFERS: 34852,
    DRAW_BUFFER0: 34853,
    DRAW_BUFFER1: 34854,
    DRAW_BUFFER2: 34855,
    DRAW_BUFFER3: 34856,
    DRAW_BUFFER4: 34857,
    DRAW_BUFFER5: 34858,
    DRAW_BUFFER6: 34859,
    DRAW_BUFFER7: 34860,
    DRAW_BUFFER8: 34861,
    DRAW_BUFFER9: 34862,
    DRAW_BUFFER10: 34863,
    DRAW_BUFFER11: 34864,
    DRAW_BUFFER12: 34865,
    DRAW_BUFFER13: 34866,
    DRAW_BUFFER14: 34867,
    DRAW_BUFFER15: 34868,
    MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
    MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
    SAMPLER_3D: 35679,
    SAMPLER_2D_SHADOW: 35682,
    FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
    PIXEL_PACK_BUFFER: 35051,
    PIXEL_UNPACK_BUFFER: 35052,
    PIXEL_PACK_BUFFER_BINDING: 35053,
    PIXEL_UNPACK_BUFFER_BINDING: 35055,
    FLOAT_MAT2x3: 35685,
    FLOAT_MAT2x4: 35686,
    FLOAT_MAT3x2: 35687,
    FLOAT_MAT3x4: 35688,
    FLOAT_MAT4x2: 35689,
    FLOAT_MAT4x3: 35690,
    SRGB: 35904,
    SRGB8: 35905,
    SRGB8_ALPHA8: 35907,
    COMPARE_REF_TO_TEXTURE: 34894,
    RGBA32F: 34836,
    RGB32F: 34837,
    RGBA16F: 34842,
    RGB16F: 34843,
    VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
    MAX_ARRAY_TEXTURE_LAYERS: 35071,
    MIN_PROGRAM_TEXEL_OFFSET: 35076,
    MAX_PROGRAM_TEXEL_OFFSET: 35077,
    MAX_VARYING_COMPONENTS: 35659,
    TEXTURE_2D_ARRAY: 35866,
    TEXTURE_BINDING_2D_ARRAY: 35869,
    R11F_G11F_B10F: 35898,
    UNSIGNED_INT_10F_11F_11F_REV: 35899,
    RGB9_E5: 35901,
    UNSIGNED_INT_5_9_9_9_REV: 35902,
    TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
    MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
    TRANSFORM_FEEDBACK_VARYINGS: 35971,
    TRANSFORM_FEEDBACK_BUFFER_START: 35972,
    TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
    TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
    RASTERIZER_DISCARD: 35977,
    MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
    MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
    INTERLEAVED_ATTRIBS: 35980,
    SEPARATE_ATTRIBS: 35981,
    TRANSFORM_FEEDBACK_BUFFER: 35982,
    TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
    RGBA32UI: 36208,
    RGB32UI: 36209,
    RGBA16UI: 36214,
    RGB16UI: 36215,
    RGBA8UI: 36220,
    RGB8UI: 36221,
    RGBA32I: 36226,
    RGB32I: 36227,
    RGBA16I: 36232,
    RGB16I: 36233,
    RGBA8I: 36238,
    RGB8I: 36239,
    RED_INTEGER: 36244,
    RGB_INTEGER: 36248,
    RGBA_INTEGER: 36249,
    SAMPLER_2D_ARRAY: 36289,
    SAMPLER_2D_ARRAY_SHADOW: 36292,
    SAMPLER_CUBE_SHADOW: 36293,
    UNSIGNED_INT_VEC2: 36294,
    UNSIGNED_INT_VEC3: 36295,
    UNSIGNED_INT_VEC4: 36296,
    INT_SAMPLER_2D: 36298,
    INT_SAMPLER_3D: 36299,
    INT_SAMPLER_CUBE: 36300,
    INT_SAMPLER_2D_ARRAY: 36303,
    UNSIGNED_INT_SAMPLER_2D: 36306,
    UNSIGNED_INT_SAMPLER_3D: 36307,
    UNSIGNED_INT_SAMPLER_CUBE: 36308,
    UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
    DEPTH_COMPONENT32F: 36012,
    DEPTH32F_STENCIL8: 36013,
    FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
    FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
    FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
    FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
    FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
    FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
    FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
    FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
    FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
    FRAMEBUFFER_DEFAULT: 33304,
    UNSIGNED_INT_24_8: 34042,
    DEPTH24_STENCIL8: 35056,
    UNSIGNED_NORMALIZED: 35863,
    DRAW_FRAMEBUFFER_BINDING: 36006,
    READ_FRAMEBUFFER: 36008,
    DRAW_FRAMEBUFFER: 36009,
    READ_FRAMEBUFFER_BINDING: 36010,
    RENDERBUFFER_SAMPLES: 36011,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
    MAX_COLOR_ATTACHMENTS: 36063,
    COLOR_ATTACHMENT1: 36065,
    COLOR_ATTACHMENT2: 36066,
    COLOR_ATTACHMENT3: 36067,
    COLOR_ATTACHMENT4: 36068,
    COLOR_ATTACHMENT5: 36069,
    COLOR_ATTACHMENT6: 36070,
    COLOR_ATTACHMENT7: 36071,
    COLOR_ATTACHMENT8: 36072,
    COLOR_ATTACHMENT9: 36073,
    COLOR_ATTACHMENT10: 36074,
    COLOR_ATTACHMENT11: 36075,
    COLOR_ATTACHMENT12: 36076,
    COLOR_ATTACHMENT13: 36077,
    COLOR_ATTACHMENT14: 36078,
    COLOR_ATTACHMENT15: 36079,
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
    MAX_SAMPLES: 36183,
    HALF_FLOAT: 5131,
    RG: 33319,
    RG_INTEGER: 33320,
    R8: 33321,
    RG8: 33323,
    R16F: 33325,
    R32F: 33326,
    RG16F: 33327,
    RG32F: 33328,
    R8I: 33329,
    R8UI: 33330,
    R16I: 33331,
    R16UI: 33332,
    R32I: 33333,
    R32UI: 33334,
    RG8I: 33335,
    RG8UI: 33336,
    RG16I: 33337,
    RG16UI: 33338,
    RG32I: 33339,
    RG32UI: 33340,
    VERTEX_ARRAY_BINDING: 34229,
    R8_SNORM: 36756,
    RG8_SNORM: 36757,
    RGB8_SNORM: 36758,
    RGBA8_SNORM: 36759,
    SIGNED_NORMALIZED: 36764,
    COPY_READ_BUFFER: 36662,
    COPY_WRITE_BUFFER: 36663,
    COPY_READ_BUFFER_BINDING: 36662,
    COPY_WRITE_BUFFER_BINDING: 36663,
    UNIFORM_BUFFER: 35345,
    UNIFORM_BUFFER_BINDING: 35368,
    UNIFORM_BUFFER_START: 35369,
    UNIFORM_BUFFER_SIZE: 35370,
    MAX_VERTEX_UNIFORM_BLOCKS: 35371,
    MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
    MAX_COMBINED_UNIFORM_BLOCKS: 35374,
    MAX_UNIFORM_BUFFER_BINDINGS: 35375,
    MAX_UNIFORM_BLOCK_SIZE: 35376,
    MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
    MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
    UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
    ACTIVE_UNIFORM_BLOCKS: 35382,
    UNIFORM_TYPE: 35383,
    UNIFORM_SIZE: 35384,
    UNIFORM_BLOCK_INDEX: 35386,
    UNIFORM_OFFSET: 35387,
    UNIFORM_ARRAY_STRIDE: 35388,
    UNIFORM_MATRIX_STRIDE: 35389,
    UNIFORM_IS_ROW_MAJOR: 35390,
    UNIFORM_BLOCK_BINDING: 35391,
    UNIFORM_BLOCK_DATA_SIZE: 35392,
    UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
    INVALID_INDEX: 4294967295,
    MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
    MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
    MAX_SERVER_WAIT_TIMEOUT: 37137,
    OBJECT_TYPE: 37138,
    SYNC_CONDITION: 37139,
    SYNC_STATUS: 37140,
    SYNC_FLAGS: 37141,
    SYNC_FENCE: 37142,
    SYNC_GPU_COMMANDS_COMPLETE: 37143,
    UNSIGNALED: 37144,
    SIGNALED: 37145,
    ALREADY_SIGNALED: 37146,
    TIMEOUT_EXPIRED: 37147,
    CONDITION_SATISFIED: 37148,
    WAIT_FAILED: 37149,
    SYNC_FLUSH_COMMANDS_BIT: 1,
    VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
    ANY_SAMPLES_PASSED: 35887,
    ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
    SAMPLER_BINDING: 35097,
    RGB10_A2UI: 36975,
    INT_2_10_10_10_REV: 36255,
    TRANSFORM_FEEDBACK: 36386,
    TRANSFORM_FEEDBACK_PAUSED: 36387,
    TRANSFORM_FEEDBACK_ACTIVE: 36388,
    TRANSFORM_FEEDBACK_BINDING: 36389,
    COMPRESSED_R11_EAC: 37488,
    COMPRESSED_SIGNED_R11_EAC: 37489,
    COMPRESSED_RG11_EAC: 37490,
    COMPRESSED_SIGNED_RG11_EAC: 37491,
    COMPRESSED_RGB8_ETC2: 37492,
    COMPRESSED_SRGB8_ETC2: 37493,
    COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
    COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
    COMPRESSED_RGBA8_ETC2_EAC: 37496,
    COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
    TEXTURE_IMMUTABLE_FORMAT: 37167,
    MAX_ELEMENT_INDEX: 36203,
    TEXTURE_IMMUTABLE_LEVELS: 33503,
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047
};
const w = Object.freeze(kd);
var zt = {
    UNSIGNED_BYTE: w.UNSIGNED_BYTE,
    UNSIGNED_SHORT: w.UNSIGNED_SHORT,
    UNSIGNED_INT: w.UNSIGNED_INT
};
zt.getSizeInBytes = function(e) {
    switch (e) {
        case zt.UNSIGNED_BYTE:
            return Uint8Array.BYTES_PER_ELEMENT;
        case zt.UNSIGNED_SHORT:
            return Uint16Array.BYTES_PER_ELEMENT;
        case zt.UNSIGNED_INT:
            return Uint32Array.BYTES_PER_ELEMENT
    }
};
zt.fromSizeInBytes = function(e) {
    switch (e) {
        case 2:
            return zt.UNSIGNED_SHORT;
        case 4:
            return zt.UNSIGNED_INT;
        case 1:
            return zt.UNSIGNED_BYTE
    }
};
zt.validate = function(e) {
    return c(e) && (e === zt.UNSIGNED_BYTE || e === zt.UNSIGNED_SHORT || e === zt.UNSIGNED_INT)
};
zt.createTypedArray = function(e, t) {
    return e >= p.SIXTY_FOUR_KILOBYTES ? new Uint32Array(t) : new Uint16Array(t)
};
zt.createTypedArrayFromArrayBuffer = function(e, t, r, n) {
    return e >= p.SIXTY_FOUR_KILOBYTES ? new Uint32Array(t, r, n) : new Uint16Array(t, r, n)
};
const si = Object.freeze(zt);
var Ha = {
    STREAM_DRAW: w.STREAM_DRAW,
    STATIC_DRAW: w.STATIC_DRAW,
    DYNAMIC_DRAW: w.DYNAMIC_DRAW,
    validate: function(e) {
        return e === Ha.STREAM_DRAW || e === Ha.STATIC_DRAW || e === Ha.DYNAMIC_DRAW
    }
};
const nn = Object.freeze(Ha);

function nt(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context._gl,
        r = e.bufferTarget,
        n = e.typedArray,
        i = e.sizeInBytes,
        a = e.usage,
        o = c(n);
    o && (i = n.byteLength);
    var s = t.createBuffer();
    t.bindBuffer(r, s), t.bufferData(r, o ? n : i, a), t.bindBuffer(r, null), this._gl = t, this._webgl2 = e.context._webgl2, this._bufferTarget = r, this._sizeInBytes = i, this._usage = a, this._buffer = s, this.vertexArrayDestroyable = !0
}
nt.createVertexBuffer = function(e) {
    return new nt({
        context: e.context,
        bufferTarget: w.ARRAY_BUFFER,
        typedArray: e.typedArray,
        sizeInBytes: e.sizeInBytes,
        usage: e.usage
    })
};
nt.createIndexBuffer = function(e) {
    var t = e.context,
        r = e.indexDatatype,
        n = si.getSizeInBytes(r),
        i = new nt({
            context: t,
            bufferTarget: w.ELEMENT_ARRAY_BUFFER,
            typedArray: e.typedArray,
            sizeInBytes: e.sizeInBytes,
            usage: e.usage
        }),
        a = i.sizeInBytes / n;
    return Object.defineProperties(i, {
        indexDatatype: {
            get: function() {
                return r
            }
        },
        bytesPerIndex: {
            get: function() {
                return n
            }
        },
        numberOfIndices: {
            get: function() {
                return a
            }
        }
    }), i
};
Object.defineProperties(nt.prototype, {
    sizeInBytes: {
        get: function() {
            return this._sizeInBytes
        }
    },
    usage: {
        get: function() {
            return this._usage
        }
    }
});
nt.prototype._getBuffer = function() {
    return this._buffer
};
nt.prototype.copyFromArrayView = function(e, t) {
    t = v(t, 0);
    var r = this._gl,
        n = this._bufferTarget;
    r.bindBuffer(n, this._buffer), r.bufferSubData(n, t, e), r.bindBuffer(n, null)
};
nt.prototype.copyFromBuffer = E("Buffer#copyFromBuffer");
nt.prototype.getBufferData = E("Buffer#getBufferData");
nt.prototype.isDestroyed = function() {
    return !1
};
nt.prototype.destroy = function() {
    return this._gl.deleteBuffer(this._buffer), Je(this)
};
var en = {
    POINTS: w.POINTS,
    LINES: w.LINES,
    LINE_LOOP: w.LINE_LOOP,
    LINE_STRIP: w.LINE_STRIP,
    TRIANGLES: w.TRIANGLES,
    TRIANGLE_STRIP: w.TRIANGLE_STRIP,
    TRIANGLE_FAN: w.TRIANGLE_FAN
};
en.validate = function(e) {
    return e === en.POINTS || e === en.LINES || e === en.LINE_LOOP || e === en.LINE_STRIP || e === en.TRIANGLES || e === en.TRIANGLE_STRIP || e === en.TRIANGLE_FAN
};
const zn = Object.freeze(en);

function Sr(e) {
    e = v(e, v.EMPTY_OBJECT), this._boundingVolume = e.boundingVolume, this._orientedBoundingBox = e.orientedBoundingBox, this._cull = v(e.cull, !0), this._occlude = v(e.occlude, !0), this._modelMatrix = e.modelMatrix, this._primitiveType = v(e.primitiveType, zn.TRIANGLES), this._vertexArray = e.vertexArray, this._count = e.count, this._offset = v(e.offset, 0), this._instanceCount = v(e.instanceCount, 0), this._shaderProgram = e.shaderProgram, this._uniformMap = e.uniformMap, this._renderState = e.renderState, this._framebuffer = e.framebuffer, this._pass = e.pass, this._executeInClosestFrustum = v(e.executeInClosestFrustum, !1), this._owner = e.owner, this._debugShowBoundingVolume = v(e.debugShowBoundingVolume, !1), this._debugOverlappingFrustums = 0, this._castShadows = v(e.castShadows, !1), this._receiveShadows = v(e.receiveShadows, !1), this._pickId = e.pickId, this._pickOnly = v(e.pickOnly, !1), this.dirty = !0, this.lastDirtyTime = 0, this.derivedCommands = {}
}
Object.defineProperties(Sr.prototype, {
    boundingVolume: {
        get: function() {
            return this._boundingVolume
        },
        set: function(e) {
            this._boundingVolume !== e && (this._boundingVolume = e, this.dirty = !0)
        }
    },
    orientedBoundingBox: {
        get: function() {
            return this._orientedBoundingBox
        },
        set: function(e) {
            this._orientedBoundingBox !== e && (this._orientedBoundingBox = e, this.dirty = !0)
        }
    },
    cull: {
        get: function() {
            return this._cull
        },
        set: function(e) {
            this._cull !== e && (this._cull = e, this.dirty = !0)
        }
    },
    occlude: {
        get: function() {
            return this._occlude
        },
        set: function(e) {
            this._occlude !== e && (this._occlude = e, this.dirty = !0)
        }
    },
    modelMatrix: {
        get: function() {
            return this._modelMatrix
        },
        set: function(e) {
            this._modelMatrix !== e && (this._modelMatrix = e, this.dirty = !0)
        }
    },
    primitiveType: {
        get: function() {
            return this._primitiveType
        },
        set: function(e) {
            this._primitiveType !== e && (this._primitiveType = e, this.dirty = !0)
        }
    },
    vertexArray: {
        get: function() {
            return this._vertexArray
        },
        set: function(e) {
            this._vertexArray !== e && (this._vertexArray = e, this.dirty = !0)
        }
    },
    count: {
        get: function() {
            return this._count
        },
        set: function(e) {
            this._count !== e && (this._count = e, this.dirty = !0)
        }
    },
    offset: {
        get: function() {
            return this._offset
        },
        set: function(e) {
            this._offset !== e && (this._offset = e, this.dirty = !0)
        }
    },
    instanceCount: {
        get: function() {
            return this._instanceCount
        },
        set: function(e) {
            this._instanceCount !== e && (this._instanceCount = e, this.dirty = !0)
        }
    },
    shaderProgram: {
        get: function() {
            return this._shaderProgram
        },
        set: function(e) {
            this._shaderProgram !== e && (this._shaderProgram = e, this.dirty = !0)
        }
    },
    castShadows: {
        get: function() {
            return this._castShadows
        },
        set: function(e) {
            this._castShadows !== e && (this._castShadows = e, this.dirty = !0)
        }
    },
    receiveShadows: {
        get: function() {
            return this._receiveShadows
        },
        set: function(e) {
            this._receiveShadows !== e && (this._receiveShadows = e, this.dirty = !0)
        }
    },
    uniformMap: {
        get: function() {
            return this._uniformMap
        },
        set: function(e) {
            this._uniformMap !== e && (this._uniformMap = e, this.dirty = !0)
        }
    },
    renderState: {
        get: function() {
            return this._renderState
        },
        set: function(e) {
            this._renderState !== e && (this._renderState = e, this.dirty = !0)
        }
    },
    framebuffer: {
        get: function() {
            return this._framebuffer
        },
        set: function(e) {
            this._framebuffer !== e && (this._framebuffer = e, this.dirty = !0)
        }
    },
    pass: {
        get: function() {
            return this._pass
        },
        set: function(e) {
            this._pass !== e && (this._pass = e, this.dirty = !0)
        }
    },
    executeInClosestFrustum: {
        get: function() {
            return this._executeInClosestFrustum
        },
        set: function(e) {
            this._executeInClosestFrustum !== e && (this._executeInClosestFrustum = e, this.dirty = !0)
        }
    },
    owner: {
        get: function() {
            return this._owner
        },
        set: function(e) {
            this._owner !== e && (this._owner = e, this.dirty = !0)
        }
    },
    debugShowBoundingVolume: {
        get: function() {
            return this._debugShowBoundingVolume
        },
        set: function(e) {
            this._debugShowBoundingVolume !== e && (this._debugShowBoundingVolume = e, this.dirty = !0)
        }
    },
    debugOverlappingFrustums: {
        get: function() {
            return this._debugOverlappingFrustums
        },
        set: function(e) {
            this._debugOverlappingFrustums !== e && (this._debugOverlappingFrustums = e, this.dirty = !0)
        }
    },
    pickId: {
        get: function() {
            return this._pickId
        },
        set: function(e) {
            this._pickId !== e && (this._pickId = e, this.dirty = !0)
        }
    },
    pickOnly: {
        get: function() {
            return this._pickOnly
        },
        set: function(e) {
            this._pickOnly !== e && (this._pickOnly = e, this.dirty = !0)
        }
    }
});
Sr.shallowClone = function(e, t) {
    if (c(e)) return c(t) || (t = new Sr), t._boundingVolume = e._boundingVolume, t._orientedBoundingBox = e._orientedBoundingBox, t._cull = e._cull, t._occlude = e._occlude, t._modelMatrix = e._modelMatrix, t._primitiveType = e._primitiveType, t._vertexArray = e._vertexArray, t._count = e._count, t._offset = e._offset, t._instanceCount = e._instanceCount, t._shaderProgram = e._shaderProgram, t._uniformMap = e._uniformMap, t._renderState = e._renderState, t._framebuffer = e._framebuffer, t._pass = e._pass, t._executeInClosestFrustum = e._executeInClosestFrustum, t._owner = e._owner, t._debugShowBoundingVolume = e._debugShowBoundingVolume, t._debugOverlappingFrustums = e._debugOverlappingFrustums, t._castShadows = e._castShadows, t._receiveShadows = e._receiveShadows, t._pickId = e._pickId, t._pickOnly = e._pickOnly, t.dirty = !0, t.lastDirtyTime = 0, t
};
Sr.prototype.execute = function(e, t) {
    e.draw(this, t)
};
var Yd = {
    ENVIRONMENT: 0,
    COMPUTE: 1,
    GLOBE: 2,
    TERRAIN_CLASSIFICATION: 3,
    CESIUM_3D_TILE: 4,
    CESIUM_3D_TILE_CLASSIFICATION: 5,
    CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW: 6,
    OPAQUE: 7,
    TRANSLUCENT: 8,
    OVERLAY: 9,
    NUMBER_OF_PASSES: 10
};
const ue = Object.freeze(Yd);

function Re(e, t, r, n) {
    this.x = v(e, 0), this.y = v(t, 0), this.width = v(r, 0), this.height = v(n, 0)
}
Re.packedLength = 4;
Re.pack = E("BoundingRectangle.pack");
Re.unpack = E("BoundingRectangle.unpack");
Re.fromPoints = E("BoundingRectangle.fromPoints");
Re.fromRectangle = E("BoundingRectangle.fromRectangle");
Re.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height, t) : new Re(e.x, e.y, e.width, e.height)
};
Re.union = E("BoundingRectangle.union");
Re.expand = E("BoundingRectangle.expand");
Re.intersect = E("BoundingRectangle.intersect");
Re.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
};
Re.prototype.clone = function(e) {
    return Re.clone(this, e)
};
Re.prototype.intersect = function(e) {
    return Re.intersect(this, e)
};
Re.prototype.equals = function(e) {
    return Re.equals(this, e)
};
var Wa = {
    CLOCKWISE: w.CW,
    COUNTER_CLOCKWISE: w.CCW
};
Wa.validate = function(e) {
    return e === Wa.CLOCKWISE || e === Wa.COUNTER_CLOCKWISE
};
const jd = Object.freeze(Wa);
var oe = {
    _maximumCombinedTextureImageUnits: 0,
    _maximumCubeMapSize: 0,
    _maximumFragmentUniformVectors: 0,
    _maximumTextureImageUnits: 0,
    _maximumRenderbufferSize: 0,
    _maximumTextureSize: 0,
    _maximumVaryingVectors: 0,
    _maximumVertexAttributes: 0,
    _maximumVertexTextureImageUnits: 0,
    _maximumVertexUniformVectors: 0,
    _minimumAliasedLineWidth: 0,
    _maximumAliasedLineWidth: 0,
    _minimumAliasedPointSize: 0,
    _maximumAliasedPointSize: 0,
    _maximumViewportWidth: 0,
    _maximumViewportHeight: 0,
    _maximumTextureFilterAnisotropy: 0,
    _maximumDrawBuffers: 0,
    _maximumColorAttachments: 0,
    _highpFloatSupported: !1,
    _highpIntSupported: !1
};
Object.defineProperties(oe, {
    maximumCombinedTextureImageUnits: {
        get: function() {
            return oe._maximumCombinedTextureImageUnits
        }
    },
    maximumCubeMapSize: {
        get: function() {
            return oe._maximumCubeMapSize
        }
    },
    maximumFragmentUniformVectors: {
        get: function() {
            return oe._maximumFragmentUniformVectors
        }
    },
    maximumTextureImageUnits: {
        get: function() {
            return oe._maximumTextureImageUnits
        }
    },
    maximumRenderbufferSize: {
        get: function() {
            return oe._maximumRenderbufferSize
        }
    },
    maximumTextureSize: {
        get: function() {
            return oe._maximumTextureSize
        }
    },
    maximumVaryingVectors: {
        get: function() {
            return oe._maximumVaryingVectors
        }
    },
    maximumVertexAttributes: {
        get: function() {
            return oe._maximumVertexAttributes
        }
    },
    maximumVertexTextureImageUnits: {
        get: function() {
            return oe._maximumVertexTextureImageUnits
        }
    },
    maximumVertexUniformVectors: {
        get: function() {
            return oe._maximumVertexUniformVectors
        }
    },
    minimumAliasedLineWidth: {
        get: function() {
            return oe._minimumAliasedLineWidth
        }
    },
    maximumAliasedLineWidth: {
        get: function() {
            return oe._maximumAliasedLineWidth
        }
    },
    minimumAliasedPointSize: {
        get: function() {
            return oe._minimumAliasedPointSize
        }
    },
    maximumAliasedPointSize: {
        get: function() {
            return oe._maximumAliasedPointSize
        }
    },
    maximumViewportWidth: {
        get: function() {
            return oe._maximumViewportWidth
        }
    },
    maximumViewportHeight: {
        get: function() {
            return oe._maximumViewportHeight
        }
    },
    maximumTextureFilterAnisotropy: {
        get: function() {
            return oe._maximumTextureFilterAnisotropy
        }
    },
    maximumDrawBuffers: {
        get: function() {
            return oe._maximumDrawBuffers
        }
    },
    maximumColorAttachments: {
        get: function() {
            return oe._maximumColorAttachments
        }
    },
    highpFloatSupported: {
        get: function() {
            return oe._highpFloatSupported
        }
    },
    highpIntSupported: {
        get: function() {
            return oe._highpIntSupported
        }
    }
});

function Xe(e) {
    var t = v(e, v.EMPTY_OBJECT),
        r = v(t.cull, v.EMPTY_OBJECT),
        n = v(t.polygonOffset, v.EMPTY_OBJECT),
        i = v(t.scissorTest, v.EMPTY_OBJECT),
        a = v(i.rectangle, v.EMPTY_OBJECT),
        o = v(t.depthRange, v.EMPTY_OBJECT),
        s = v(t.depthTest, v.EMPTY_OBJECT),
        h = v(t.colorMask, v.EMPTY_OBJECT),
        f = v(t.blending, v.EMPTY_OBJECT),
        l = v(f.color, v.EMPTY_OBJECT),
        d = v(t.stencilTest, v.EMPTY_OBJECT),
        m = v(d.frontOperation, v.EMPTY_OBJECT),
        _ = v(d.backOperation, v.EMPTY_OBJECT),
        g = v(t.sampleCoverage, v.EMPTY_OBJECT),
        T = t.viewport;
    this.frontFace = v(t.frontFace, jd.COUNTER_CLOCKWISE), this.cull = {
        enabled: v(r.enabled, !1),
        face: v(r.face, w.BACK)
    }, this.lineWidth = v(t.lineWidth, 1), this.polygonOffset = {
        enabled: v(n.enabled, !1),
        factor: v(n.factor, 0),
        units: v(n.units, 0)
    }, this.scissorTest = {
        enabled: v(i.enabled, !1),
        rectangle: Re.clone(a)
    }, this.depthRange = {
        near: v(o.near, 0),
        far: v(o.far, 1)
    }, this.depthTest = {
        enabled: v(s.enabled, !1),
        func: v(s.func, w.LESS)
    }, this.colorMask = {
        red: v(h.red, !0),
        green: v(h.green, !0),
        blue: v(h.blue, !0),
        alpha: v(h.alpha, !0)
    }, this.depthMask = v(t.depthMask, !0), this.stencilMask = v(t.stencilMask, -1), this.blending = {
        enabled: v(f.enabled, !1),
        color: new H(v(l.red, 0), v(l.green, 0), v(l.blue, 0), v(l.alpha, 0)),
        equationRgb: v(f.equationRgb, w.FUNC_ADD),
        equationAlpha: v(f.equationAlpha, w.FUNC_ADD),
        functionSourceRgb: v(f.functionSourceRgb, w.ONE),
        functionSourceAlpha: v(f.functionSourceAlpha, w.ONE),
        functionDestinationRgb: v(f.functionDestinationRgb, w.ZERO),
        functionDestinationAlpha: v(f.functionDestinationAlpha, w.ZERO)
    }, this.stencilTest = {
        enabled: v(d.enabled, !1),
        frontFunction: v(d.frontFunction, w.ALWAYS),
        backFunction: v(d.backFunction, w.ALWAYS),
        reference: v(d.reference, 0),
        mask: v(d.mask, -1),
        frontOperation: {
            fail: v(m.fail, w.KEEP),
            zFail: v(m.zFail, w.KEEP),
            zPass: v(m.zPass, w.KEEP)
        },
        backOperation: {
            fail: v(_.fail, w.KEEP),
            zFail: v(_.zFail, w.KEEP),
            zPass: v(_.zPass, w.KEEP)
        }
    }, this.sampleCoverage = {
        enabled: v(g.enabled, !1),
        value: v(g.value, 1),
        invert: v(g.invert, !1)
    }, this.viewport = c(T) ? new Re(T.x, T.y, T.width, T.height) : void 0, this.id = 0, this._applyFunctions = []
}
var Xd = 0,
    Gr = {};
Xe.fromCache = function(e) {
    var t = JSON.stringify(e),
        r = Gr[t];
    if (c(r)) return ++r.referenceCount, r.state;
    var n = new Xe(e),
        i = JSON.stringify(n);
    return r = Gr[i], c(r) || (n.id = Xd++, r = {
        referenceCount: 0,
        state: n
    }, Gr[i] = r), ++r.referenceCount, Gr[t] = {
        referenceCount: 1,
        state: r.state
    }, r.state
};
Xe.removeFromCache = function(e) {
    var t = new Xe(e),
        r = JSON.stringify(t),
        n = Gr[r],
        i = JSON.stringify(e),
        a = Gr[i];
    c(a) && (--a.referenceCount, a.referenceCount === 0 && (delete Gr[i], c(n) && --n.referenceCount)), c(n) && n.referenceCount === 0 && delete Gr[r]
};
Xe.getCache = function() {
    return Gr
};
Xe.clearCache = function() {
    Gr = {}
};

function Vn(e, t, r) {
    r ? e.enable(t) : e.disable(t)
}

function Bh(e, t) {
    e.frontFace(t.frontFace)
}

function Uh(e, t) {
    var r = t.cull,
        n = r.enabled;
    Vn(e, e.CULL_FACE, n), n && e.cullFace(r.face)
}

function zh(e, t) {
    e.lineWidth(t.lineWidth)
}

function Vh(e, t) {
    var r = t.polygonOffset,
        n = r.enabled;
    Vn(e, e.POLYGON_OFFSET_FILL, n), n && e.polygonOffset(r.factor, r.units)
}

function Gh(e, t, r) {
    var n = t.scissorTest,
        i = c(r.scissorTest) ? r.scissorTest.enabled : n.enabled;
    if (Vn(e, e.SCISSOR_TEST, i), i) {
        var a = c(r.scissorTest) ? r.scissorTest.rectangle : n.rectangle;
        e.scissor(a.x, a.y, a.width, a.height)
    }
}

function Hh(e, t) {
    var r = t.depthRange;
    e.depthRange(r.near, r.far)
}

function Wh(e, t) {
    var r = t.depthTest,
        n = r.enabled;
    Vn(e, e.DEPTH_TEST, n), n && e.depthFunc(r.func)
}

function qh(e, t) {
    var r = t.colorMask;
    e.colorMask(r.red, r.green, r.blue, r.alpha)
}

function kh(e, t) {
    e.depthMask(t.depthMask)
}

function Yh(e, t) {
    e.stencilMask(t.stencilMask)
}

function Zd(e, t) {
    e.blendColor(t.red, t.green, t.blue, t.alpha)
}

function jh(e, t, r) {
    var n = t.blending,
        i = c(r.blendingEnabled) ? r.blendingEnabled : n.enabled;
    Vn(e, e.BLEND, i), i && (Zd(e, n.color), e.blendEquationSeparate(n.equationRgb, n.equationAlpha), e.blendFuncSeparate(n.functionSourceRgb, n.functionDestinationRgb, n.functionSourceAlpha, n.functionDestinationAlpha))
}

function Xh(e, t) {
    var r = t.stencilTest,
        n = r.enabled;
    if (Vn(e, e.STENCIL_TEST, n), n) {
        var i = r.frontFunction,
            a = r.backFunction,
            o = r.reference,
            s = r.mask;
        e.stencilFunc(i, o, s), e.stencilFuncSeparate(e.BACK, a, o, s), e.stencilFuncSeparate(e.FRONT, i, o, s);
        var h = r.frontOperation,
            f = h.fail,
            l = h.zFail,
            d = h.zPass;
        e.stencilOpSeparate(e.FRONT, f, l, d);
        var m = r.backOperation,
            _ = m.fail,
            g = m.zFail,
            T = m.zPass;
        e.stencilOpSeparate(e.BACK, _, g, T)
    }
}

function Zh(e, t) {
    var r = t.sampleCoverage,
        n = r.enabled;
    Vn(e, e.SAMPLE_COVERAGE, n), n && e.sampleCoverage(r.value, r.invert)
}
var Kd = new Re;

function Kh(e, t, r) {
    var n = v(t.viewport, r.viewport);
    c(n) || (n = Kd, n.width = r.context.drawingBufferWidth, n.height = r.context.drawingBufferHeight), r.context.uniformState.viewport = n, e.viewport(n.x, n.y, n.width, n.height)
}
Xe.apply = function(e, t, r) {
    Bh(e, t), Uh(e, t), zh(e, t), Vh(e, t), Hh(e, t), Wh(e, t), qh(e, t), kh(e, t), Yh(e, t), Xh(e, t), Zh(e, t), Gh(e, t, r), jh(e, t, r), Kh(e, t, r)
};

function Qd(e, t) {
    var r = [];
    return e.frontFace !== t.frontFace && r.push(Bh), (e.cull.enabled !== t.cull.enabled || e.cull.face !== t.cull.face) && r.push(Uh), e.lineWidth !== t.lineWidth && r.push(zh), (e.polygonOffset.enabled !== t.polygonOffset.enabled || e.polygonOffset.factor !== t.polygonOffset.factor || e.polygonOffset.units !== t.polygonOffset.units) && r.push(Vh), (e.depthRange.near !== t.depthRange.near || e.depthRange.far !== t.depthRange.far) && r.push(Hh), (e.depthTest.enabled !== t.depthTest.enabled || e.depthTest.func !== t.depthTest.func) && r.push(Wh), (e.colorMask.red !== t.colorMask.red || e.colorMask.green !== t.colorMask.green || e.colorMask.blue !== t.colorMask.blue || e.colorMask.alpha !== t.colorMask.alpha) && r.push(qh), e.depthMask !== t.depthMask && r.push(kh), e.stencilMask !== t.stencilMask && r.push(Yh), (e.stencilTest.enabled !== t.stencilTest.enabled || e.stencilTest.frontFunction !== t.stencilTest.frontFunction || e.stencilTest.backFunction !== t.stencilTest.backFunction || e.stencilTest.reference !== t.stencilTest.reference || e.stencilTest.mask !== t.stencilTest.mask || e.stencilTest.frontOperation.fail !== t.stencilTest.frontOperation.fail || e.stencilTest.frontOperation.zFail !== t.stencilTest.frontOperation.zFail || e.stencilTest.backOperation.fail !== t.stencilTest.backOperation.fail || e.stencilTest.backOperation.zFail !== t.stencilTest.backOperation.zFail || e.stencilTest.backOperation.zPass !== t.stencilTest.backOperation.zPass) && r.push(Xh), (e.sampleCoverage.enabled !== t.sampleCoverage.enabled || e.sampleCoverage.value !== t.sampleCoverage.value || e.sampleCoverage.invert !== t.sampleCoverage.invert) && r.push(Zh), r
}
Xe.partialApply = function(e, t, r, n, i, a) {
    if (t !== r) {
        var o = r._applyFunctions[t.id];
        c(o) || (o = Qd(t, r), r._applyFunctions[t.id] = o);
        for (var s = o.length, h = 0; h < s; ++h) o[h](e, r)
    }
    var f = c(n.scissorTest) ? n.scissorTest : t.scissorTest,
        l = c(i.scissorTest) ? i.scissorTest : r.scissorTest;
    (f !== l || a) && Gh(e, r, i);
    var d = c(n.blendingEnabled) ? n.blendingEnabled : t.blending.enabled,
        m = c(i.blendingEnabled) ? i.blendingEnabled : r.blending.enabled;
    (d !== m || m && t.blending !== r.blending) && jh(e, r, i), (t !== r || n !== i || n.context !== i.context) && Kh(e, r, i)
};
Xe.getState = E("RenderState.getState");

function lt(e) {
    this.name = "RuntimeError", this.message = e;
    var t;
    try {
        throw new Error
    } catch (r) {
        t = r.stack
    }
    this.stack = t
}
c(Object.create) && (lt.prototype = Object.create(Error.prototype), lt.prototype.constructor = lt);
lt.prototype.toString = function() {
    var e = this.name + ": " + this.message;
    return c(this.stack) && (e += "\n" + this.stack.toString()), e
};

function B(e, t, r, n) {
    this.x = v(e, 0), this.y = v(t, 0), this.z = v(r, 0), this.w = v(n, 0)
}
B.fromElements = function(e, t, r, n, i) {
    return c(i) ? (i.x = e, i.y = t, i.z = r, i.w = n, i) : new B(e, t, r, n)
};
B.fromColor = function(e, t) {
    return c(t) ? (t.x = e.red, t.y = e.green, t.z = e.blue, t.w = e.alpha, t) : new B(e.red, e.green, e.blue, e.alpha)
};
B.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t) : new B(e.x, e.y, e.z, e.w)
};
B.packedLength = 4;
B.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.x, t[r++] = e.y, t[r++] = e.z, t[r] = e.w, t
};
B.unpack = E("Cartesian4.unpack");
B.packArray = E("Cartesian4.packArray");
B.unpackArray = E("Cartesian4.unpackArray");
B.fromArray = B.unpack;
B.maximumComponent = E("Cartesian4.maximumComponent");
B.minimumComponent = E("Cartesian4.minimumComponent");
B.minimumByComponent = E("Cartesian4.minimumByComponent");
B.maximumByComponent = E("Cartesian4.maximumByComponent");
B.magnitudeSquared = E("Cartesian4.magnitudeSquared");
B.magnitude = E("Cartesian4.magnitude");
B.distance = E("Cartesian4.distance");
B.distanceSquared = E("Cartesian4.distanceSquared");
B.normalize = E("Cartesian4.normalize");
B.dot = E("Cartesian4.dot");
B.multiplyComponents = E("Cartesian4.multiplyComponents");
B.divideComponents = E("Cartesian4.divideComponents");
B.add = E("Cartesian4.add");
B.subtract = E("Cartesian4.subtract");
B.multiplyByScalar = E("Cartesian4.multiplyByScalar");
B.divideByScalar = E("Cartesian4.divideByScalar");
B.negate = E("Cartesian4.negate");
B.abs = E("Cartesian4.abs");
B.lerp = E("Cartesian4.lerp");
B.mostOrthogonalAxis = E("Cartesian4.mostOrthogonalAxis");
B.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w
};
B.equalsArray = function(e, t, r) {
    return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2] && e.w === t[r + 3]
};
B.equalsEpsilon = function(e, t, r, n) {
    return e === t || c(e) && c(t) && p.equalsEpsilon(e.x, t.x, r, n) && p.equalsEpsilon(e.y, t.y, r, n) && p.equalsEpsilon(e.z, t.z, r, n) && p.equalsEpsilon(e.w, t.w, r, n)
};
B.ZERO = Object.freeze(new B(0, 0, 0, 0));
B.UNIT_X = Object.freeze(new B(1, 0, 0, 0));
B.UNIT_Y = Object.freeze(new B(0, 1, 0, 0));
B.UNIT_Z = Object.freeze(new B(0, 0, 1, 0));
B.UNIT_W = Object.freeze(new B(0, 0, 0, 1));
B.prototype.clone = function(e) {
    return B.clone(this, e)
};
B.prototype.equals = function(e) {
    return B.equals(this, e)
};
B.prototype.equalsEpsilon = function(e, t, r) {
    return B.equalsEpsilon(this, e, t, r)
};
B.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
};
B.packFloat = E("Cartesian4.packFloat");
B.unpackFloat = E("Cartesian4.unpackFloat");

function y(e, t, r, n, i, a, o, s, h, f, l, d, m, _, g, T) {
    this[0] = v(e, 0), this[1] = v(i, 0), this[2] = v(h, 0), this[3] = v(m, 0), this[4] = v(t, 0), this[5] = v(a, 0), this[6] = v(f, 0), this[7] = v(_, 0), this[8] = v(r, 0), this[9] = v(o, 0), this[10] = v(l, 0), this[11] = v(g, 0), this[12] = v(n, 0), this[13] = v(s, 0), this[14] = v(d, 0), this[15] = v(T, 0)
}
y.packedLength = 16;
y.pack = E("pack");
y.unpack = E("unpack");
y.clone = function(e, t) {
    if (c(e)) return c(t) ? (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t) : new y(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
};
y.fromArray = y.unpack;
y.fromColumnMajorArray = E("fromColumnMajorArray");
y.fromRowMajorArray = E("fromRowMajorArray");
y.fromRotationTranslation = function(e, t, r) {
    return t = v(t, u.ZERO), c(r) ? (r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = 0, r[4] = e[3], r[5] = e[4], r[6] = e[5], r[7] = 0, r[8] = e[6], r[9] = e[7], r[10] = e[8], r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, r) : new y(e[0], e[3], e[6], t.x, e[1], e[4], e[7], t.y, e[2], e[5], e[8], t.z, 0, 0, 0, 1)
};
y.fromTranslationQuaternionRotationScale = E("fromTranslationQuaternionRotationScale");
y.fromTranslationRotationScale = E("fromTranslationRotationScale");
y.fromTranslation = function(e, t) {
    return y.fromRotationTranslation(P.IDENTITY, e, t)
};
y.fromScale = function(e, t) {
    return c(t) ? (t[0] = e.x, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e.y, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e.z, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t) : new y(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1)
};
y.fromUniformScale = E("fromUniformScale");
y.fromCamera = E("fromCamera");
y.computePerspectiveFieldOfView = E("computePerspectiveFieldOfView");
y.computeOrthographicOffCenter = function(e, t, r, n, i, a, o) {
    var s = 1 / (t - e),
        h = 1 / (n - r),
        f = 1 / (a - i),
        l = -(t + e) * s,
        d = -(n + r) * h,
        m = -(a + i) * f;
    return s *= 2, h *= 2, f *= -2, o[0] = s, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = h, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = f, o[11] = 0, o[12] = l, o[13] = d, o[14] = m, o[15] = 1, o
};
y.computePerspectiveOffCenter = function(e, t, r, n, i, a, o) {
    var s = 2 * i / (t - e),
        h = 2 * i / (n - r),
        f = (t + e) / (t - e),
        l = (n + r) / (n - r),
        d = -(a + i) / (a - i),
        m = -1,
        _ = -2 * a * i / (a - i);
    return o[0] = s, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = h, o[6] = 0, o[7] = 0, o[8] = f, o[9] = l, o[10] = d, o[11] = m, o[12] = 0, o[13] = 0, o[14] = _, o[15] = 0, o
};
y.computeInfinitePerspectiveOffCenter = function(e, t, r, n, i, a) {
    var o = 2 * i / (t - e),
        s = 2 * i / (n - r),
        h = (t + e) / (t - e),
        f = (n + r) / (n - r),
        l = -1,
        d = -1,
        m = -2 * i;
    return a[0] = o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = s, a[6] = 0, a[7] = 0, a[8] = h, a[9] = f, a[10] = l, a[11] = d, a[12] = 0, a[13] = 0, a[14] = m, a[15] = 0, a
};
y.computeViewportTransformation = function(e, t, r, n) {
    c(n) || (n = new y), e = v(e, v.EMPTY_OBJECT);
    var i = v(e.x, 0),
        a = v(e.y, 0),
        o = v(e.width, 0),
        s = v(e.height, 0);
    t = v(t, 0), r = v(r, 1);
    var h = o * .5,
        f = s * .5,
        l = (r - t) * .5,
        d = h,
        m = f,
        _ = l,
        g = i + h,
        T = a + f,
        C = t + l,
        A = 1;
    return n[0] = d, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = m, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = _, n[11] = 0, n[12] = g, n[13] = T, n[14] = C, n[15] = A, n
};
y.computeView = function(e, t, r, n, i) {
    return i[0] = n.x, i[1] = r.x, i[2] = -t.x, i[3] = 0, i[4] = n.y, i[5] = r.y, i[6] = -t.y, i[7] = 0, i[8] = n.z, i[9] = r.z, i[10] = -t.z, i[11] = 0, i[12] = -u.dot(n, e), i[13] = -u.dot(r, e), i[14] = u.dot(t, e), i[15] = 1, i
};
y.toArray = function(e, t) {
    return c(t) ? (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t) : [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
};
y.getElementIndex = E("getElementIndex");
y.getColumn = function(e, t, r) {
    var n = t * 4,
        i = e[n],
        a = e[n + 1],
        o = e[n + 2],
        s = e[n + 3];
    return r.x = i, r.y = a, r.z = o, r.w = s, r
};
y.setColumn = E("setColumn");
y.setTranslation = function(e, t, r) {
    return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = e[15], r
};
y.setScale = E("setScale");
y.getRow = E("getRow");
y.setRow = E("setRow");
var zo = new u;
y.getScale = function(e, t) {
    return t.x = u.magnitude(u.fromElements(e[0], e[1], e[2], zo)), t.y = u.magnitude(u.fromElements(e[4], e[5], e[6], zo)), t.z = u.magnitude(u.fromElements(e[8], e[9], e[10], zo)), t
};
var ju = new u;
y.getMaximumScale = function(e) {
    return y.getScale(e, ju), u.maximumComponent(ju)
};
y.multiply = function(e, t, r) {
    var n = e[0],
        i = e[1],
        a = e[2],
        o = e[3],
        s = e[4],
        h = e[5],
        f = e[6],
        l = e[7],
        d = e[8],
        m = e[9],
        _ = e[10],
        g = e[11],
        T = e[12],
        C = e[13],
        A = e[14],
        S = e[15],
        x = t[0],
        I = t[1],
        O = t[2],
        F = t[3],
        b = t[4],
        N = t[5],
        D = t[6],
        V = t[7],
        M = t[8],
        W = t[9],
        G = t[10],
        U = t[11],
        q = t[12],
        Y = t[13],
        j = t[14],
        Z = t[15],
        le = n * x + s * I + d * O + T * F,
        ne = i * x + h * I + m * O + C * F,
        he = a * x + f * I + _ * O + A * F,
        De = o * x + l * I + g * O + S * F,
        fe = n * b + s * N + d * D + T * V,
        at = i * b + h * N + m * D + C * V,
        qe = a * b + f * N + _ * D + A * V,
        Fe = o * b + l * N + g * D + S * V,
        Te = n * M + s * W + d * G + T * U,
        rt = i * M + h * W + m * G + C * U,
        be = a * M + f * W + _ * G + A * U,
        te = o * M + l * W + g * G + S * U,
        vt = n * q + s * Y + d * j + T * Z,
        Ee = i * q + h * Y + m * j + C * Z,
        sr = a * q + f * Y + _ * j + A * Z,
        Gt = o * q + l * Y + g * j + S * Z;
    return r[0] = le, r[1] = ne, r[2] = he, r[3] = De, r[4] = fe, r[5] = at, r[6] = qe, r[7] = Fe, r[8] = Te, r[9] = rt, r[10] = be, r[11] = te, r[12] = vt, r[13] = Ee, r[14] = sr, r[15] = Gt, r
};
y.add = E("add");
y.subtract = E("subtract");
y.multiplyTransformation = function(e, t, r) {
    var n = e[0],
        i = e[1],
        a = e[2],
        o = e[4],
        s = e[5],
        h = e[6],
        f = e[8],
        l = e[9],
        d = e[10],
        m = e[12],
        _ = e[13],
        g = e[14],
        T = t[0],
        C = t[1],
        A = t[2],
        S = t[4],
        x = t[5],
        I = t[6],
        O = t[8],
        F = t[9],
        b = t[10],
        N = t[12],
        D = t[13],
        V = t[14],
        M = n * T + o * C + f * A,
        W = i * T + s * C + l * A,
        G = a * T + h * C + d * A,
        U = n * S + o * x + f * I,
        q = i * S + s * x + l * I,
        Y = a * S + h * x + d * I,
        j = n * O + o * F + f * b,
        Z = i * O + s * F + l * b,
        le = a * O + h * F + d * b,
        ne = n * N + o * D + f * V + m,
        he = i * N + s * D + l * V + _,
        De = a * N + h * D + d * V + g;
    return r[0] = M, r[1] = W, r[2] = G, r[3] = 0, r[4] = U, r[5] = q, r[6] = Y, r[7] = 0, r[8] = j, r[9] = Z, r[10] = le, r[11] = 0, r[12] = ne, r[13] = he, r[14] = De, r[15] = 1, r
};
y.multiplyByMatrix3 = E("multiplyByMatrix3");
y.multiplyByTranslation = E("multiplyByTranslation");
y.multiplyByUniformScale = E("multiplyByUniformScale");
y.multiplyByScale = E("multiplyByScale");
y.multiplyByVector = function(e, t, r) {
    var n = t.x,
        i = t.y,
        a = t.z,
        o = t.w,
        s = e[0] * n + e[4] * i + e[8] * a + e[12] * o,
        h = e[1] * n + e[5] * i + e[9] * a + e[13] * o,
        f = e[2] * n + e[6] * i + e[10] * a + e[14] * o,
        l = e[3] * n + e[7] * i + e[11] * a + e[15] * o;
    return r.x = s, r.y = h, r.z = f, r.w = l, r
};
y.multiplyByPointAsVector = function(e, t, r) {
    var n = t.x,
        i = t.y,
        a = t.z,
        o = e[0] * n + e[4] * i + e[8] * a,
        s = e[1] * n + e[5] * i + e[9] * a,
        h = e[2] * n + e[6] * i + e[10] * a;
    return r.x = o, r.y = s, r.z = h, r
};
y.multiplyByPoint = function(e, t, r) {
    var n = t.x,
        i = t.y,
        a = t.z,
        o = e[0] * n + e[4] * i + e[8] * a + e[12],
        s = e[1] * n + e[5] * i + e[9] * a + e[13],
        h = e[2] * n + e[6] * i + e[10] * a + e[14];
    return r.x = o, r.y = s, r.z = h, r
};
y.multiplyByScalar = E("multiplyByScalar");
y.negate = E("negate");
y.transpose = E("transpose");
y.abs = E("abs");
y.equals = function(e, t) {
    return e === t || c(e) && c(t) && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[3] === t[3] && e[7] === t[7] && e[11] === t[11] && e[15] === t[15]
};
y.equalsEpsilon = function(e, t, r) {
    return r = v(r, 0), e === t || c(e) && c(t) && Math.abs(e[0] - t[0]) <= r && Math.abs(e[1] - t[1]) <= r && Math.abs(e[2] - t[2]) <= r && Math.abs(e[3] - t[3]) <= r && Math.abs(e[4] - t[4]) <= r && Math.abs(e[5] - t[5]) <= r && Math.abs(e[6] - t[6]) <= r && Math.abs(e[7] - t[7]) <= r && Math.abs(e[8] - t[8]) <= r && Math.abs(e[9] - t[9]) <= r && Math.abs(e[10] - t[10]) <= r && Math.abs(e[11] - t[11]) <= r && Math.abs(e[12] - t[12]) <= r && Math.abs(e[13] - t[13]) <= r && Math.abs(e[14] - t[14]) <= r && Math.abs(e[15] - t[15]) <= r
};
y.getTranslation = function(e, t) {
    return t.x = e[12], t.y = e[13], t.z = e[14], t
};
y.getMatrix3 = function(e, t) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
};
var $d = new P,
    Jd = new P,
    e_ = new B,
    t_ = new B(0, 0, 0, 1);
y.inverse = function(e, t) {
    var r = e[0],
        n = e[4],
        i = e[8],
        a = e[12],
        o = e[1],
        s = e[5],
        h = e[9],
        f = e[13],
        l = e[2],
        d = e[6],
        m = e[10],
        _ = e[14],
        g = e[3],
        T = e[7],
        C = e[11],
        A = e[15],
        S = m * A,
        x = _ * C,
        I = d * A,
        O = _ * T,
        F = d * C,
        b = m * T,
        N = l * A,
        D = _ * g,
        V = l * C,
        M = m * g,
        W = l * T,
        G = d * g,
        U = S * s + O * h + F * f - (x * s + I * h + b * f),
        q = x * o + N * h + M * f - (S * o + D * h + V * f),
        Y = I * o + D * s + W * f - (O * o + N * s + G * f),
        j = b * o + V * s + G * h - (F * o + M * s + W * h),
        Z = x * n + I * i + b * a - (S * n + O * i + F * a),
        le = S * r + D * i + V * a - (x * r + N * i + M * a),
        ne = O * r + N * n + G * a - (I * r + D * n + W * a),
        he = F * r + M * n + W * i - (b * r + V * n + G * i);
    S = i * f, x = a * h, I = n * f, O = a * s, F = n * h, b = i * s, N = r * f, D = a * o, V = r * h, M = i * o, W = r * s, G = n * o;
    var De = S * T + O * C + F * A - (x * T + I * C + b * A),
        fe = x * g + N * C + M * A - (S * g + D * C + V * A),
        at = I * g + D * T + W * A - (O * g + N * T + G * A),
        qe = b * g + V * T + G * C - (F * g + M * T + W * C),
        Fe = I * m + b * _ + x * d - (F * _ + S * d + O * m),
        Te = V * _ + S * l + D * m - (N * m + M * _ + x * l),
        rt = N * d + G * _ + O * l - (W * _ + I * l + D * d),
        be = W * m + F * l + M * d - (V * d + G * m + b * l),
        te = r * U + n * q + i * Y + a * j;
    if (Math.abs(te) < p.EPSILON21) {
        if (P.equalsEpsilon(y.getMatrix3(e, $d), Jd, p.EPSILON7) && B.equals(y.getRow(e, 3, e_), t_)) return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 0, t[11] = 0, t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = 1, t;
        throw new lt("matrix is not invertible because its determinate is zero.")
    }
    return te = 1 / te, t[0] = U * te, t[1] = q * te, t[2] = Y * te, t[3] = j * te, t[4] = Z * te, t[5] = le * te, t[6] = ne * te, t[7] = he * te, t[8] = De * te, t[9] = fe * te, t[10] = at * te, t[11] = qe * te, t[12] = Fe * te, t[13] = Te * te, t[14] = rt * te, t[15] = be * te, t
};
y.inverseTransformation = function(e, t) {
    var r = e[0],
        n = e[1],
        i = e[2],
        a = e[4],
        o = e[5],
        s = e[6],
        h = e[8],
        f = e[9],
        l = e[10],
        d = e[12],
        m = e[13],
        _ = e[14],
        g = -r * d - n * m - i * _,
        T = -a * d - o * m - s * _,
        C = -h * d - f * m - l * _;
    return t[0] = r, t[1] = a, t[2] = h, t[3] = 0, t[4] = n, t[5] = o, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = g, t[13] = T, t[14] = C, t[15] = 1, t
};
var r_ = new y;
y.inverseTranspose = function(e, t) {
    return y.inverse(y.transpose(e, r_), t)
};
y.IDENTITY = Object.freeze(new y(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
y.ZERO = Object.freeze(new y(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
y.COLUMN0ROW0 = 0;
y.COLUMN0ROW1 = 1;
y.COLUMN0ROW2 = 2;
y.COLUMN0ROW3 = 3;
y.COLUMN1ROW0 = 4;
y.COLUMN1ROW1 = 5;
y.COLUMN1ROW2 = 6;
y.COLUMN1ROW3 = 7;
y.COLUMN2ROW0 = 8;
y.COLUMN2ROW1 = 9;
y.COLUMN2ROW2 = 10;
y.COLUMN2ROW3 = 11;
y.COLUMN3ROW0 = 12;
y.COLUMN3ROW1 = 13;
y.COLUMN3ROW2 = 14;
y.COLUMN3ROW3 = 15;
Object.defineProperties(y.prototype, {
    length: {
        get: function() {
            return y.packedLength
        }
    }
});
y.prototype.clone = function(e) {
    return y.clone(this, e)
};
y.prototype.equals = function(e) {
    return y.equals(this, e)
};
y.equalsArray = function(e, t, r) {
    return e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3] && e[4] === t[r + 4] && e[5] === t[r + 5] && e[6] === t[r + 6] && e[7] === t[r + 7] && e[8] === t[r + 8] && e[9] === t[r + 9] && e[10] === t[r + 10] && e[11] === t[r + 11] && e[12] === t[r + 12] && e[13] === t[r + 13] && e[14] === t[r + 14] && e[15] === t[r + 15]
};
y.prototype.equalsEpsilon = function(e, t) {
    return y.equalsEpsilon(this, e, t)
};
y.prototype.toString = E("toString");
var n_ = new u;

function X(e) {
    this._size = e.size, this._datatype = e.datatype, this.getValue = e.getValue
}
var wt = {};
wt[w.FLOAT] = "float";
wt[w.FLOAT_VEC2] = "vec2";
wt[w.FLOAT_VEC3] = "vec3";
wt[w.FLOAT_VEC4] = "vec4";
wt[w.INT] = "int";
wt[w.INT_VEC2] = "ivec2";
wt[w.INT_VEC3] = "ivec3";
wt[w.INT_VEC4] = "ivec4";
wt[w.BOOL] = "bool";
wt[w.BOOL_VEC2] = "bvec2";
wt[w.BOOL_VEC3] = "bvec3";
wt[w.BOOL_VEC4] = "bvec4";
wt[w.FLOAT_MAT2] = "mat2";
wt[w.FLOAT_MAT3] = "mat3";
wt[w.FLOAT_MAT4] = "mat4";
wt[w.SAMPLER_2D] = "sampler2D";
wt[w.SAMPLER_CUBE] = "samplerCube";
X.prototype.getDeclaration = function(e) {
    var t = "uniform " + wt[this._datatype] + " " + e,
        r = this._size;
    return r === 1 ? t += ";" : t += "[" + r.toString() + "];", t
};
var qa = {
    czm_viewport: new X({
        size: 1,
        datatype: w.FLOAT_VEC4,
        getValue: function(e) {
            return e.viewportCartesian4
        }
    }),
    czm_viewportOrthographic: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.viewportOrthographic
        }
    }),
    czm_viewportTransformation: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.viewportTransformation
        }
    }),
    czm_globeDepthTexture: new X({
        size: 1,
        datatype: w.SAMPLER_2D,
        getValue: function(e) {
            return e.globeDepthTexture
        }
    }),
    czm_model: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.model
        }
    }),
    czm_inverseModel: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseModel
        }
    }),
    czm_view: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.view
        }
    }),
    czm_view3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.view3D
        }
    }),
    czm_viewRotation: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.viewRotation
        }
    }),
    czm_viewRotation3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.viewRotation3D
        }
    }),
    czm_inverseView: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseView
        }
    }),
    czm_inverseView3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseView3D
        }
    }),
    czm_inverseViewRotation: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.inverseViewRotation
        }
    }),
    czm_inverseViewRotation3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.inverseViewRotation3D
        }
    }),
    czm_projection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.projection
        }
    }),
    czm_inverseProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseProjection
        }
    }),
    czm_infiniteProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.infiniteProjection
        }
    }),
    czm_modelView: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelView
        }
    }),
    czm_modelView3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelView3D
        }
    }),
    czm_modelViewRelativeToEye: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelViewRelativeToEye
        }
    }),
    czm_inverseModelView: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseModelView
        }
    }),
    czm_inverseModelView3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseModelView3D
        }
    }),
    czm_viewProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.viewProjection
        }
    }),
    czm_inverseViewProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseViewProjection
        }
    }),
    czm_modelViewProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelViewProjection
        }
    }),
    czm_inverseModelViewProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.inverseModelViewProjection
        }
    }),
    czm_modelViewProjectionRelativeToEye: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelViewProjectionRelativeToEye
        }
    }),
    czm_modelViewInfiniteProjection: new X({
        size: 1,
        datatype: w.FLOAT_MAT4,
        getValue: function(e) {
            return e.modelViewInfiniteProjection
        }
    }),
    czm_orthographicIn3D: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.orthographicIn3D ? 1 : 0
        }
    }),
    czm_normal: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.normal
        }
    }),
    czm_normal3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.normal3D
        }
    }),
    czm_inverseNormal: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.inverseNormal
        }
    }),
    czm_inverseNormal3D: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.inverseNormal3D
        }
    }),
    czm_eyeHeight: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.eyeHeight
        }
    }),
    czm_eyeHeight2D: new X({
        size: 1,
        datatype: w.FLOAT_VEC2,
        getValue: function(e) {
            return e.eyeHeight2D
        }
    }),
    czm_entireFrustum: new X({
        size: 1,
        datatype: w.FLOAT_VEC2,
        getValue: function(e) {
            return e.entireFrustum
        }
    }),
    czm_currentFrustum: new X({
        size: 1,
        datatype: w.FLOAT_VEC2,
        getValue: function(e) {
            return e.currentFrustum
        }
    }),
    czm_frustumPlanes: new X({
        size: 1,
        datatype: w.FLOAT_VEC4,
        getValue: function(e) {
            return e.frustumPlanes
        }
    }),
    czm_farDepthFromNearPlusOne: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.farDepthFromNearPlusOne
        }
    }),
    czm_log2FarDepthFromNearPlusOne: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.log2FarDepthFromNearPlusOne
        }
    }),
    czm_oneOverLog2FarDepthFromNearPlusOne: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.oneOverLog2FarDepthFromNearPlusOne
        }
    }),
    czm_sunPositionWC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.sunPositionWC
        }
    }),
    czm_sunPositionColumbusView: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.sunPositionColumbusView
        }
    }),
    czm_sunDirectionEC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.sunDirectionEC
        }
    }),
    czm_sunDirectionWC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.sunDirectionWC
        }
    }),
    czm_moonDirectionEC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.moonDirectionEC
        }
    }),
    czm_lightDirectionEC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.lightDirectionEC
        }
    }),
    czm_lightDirectionWC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.lightDirectionWC
        }
    }),
    czm_lightColor: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.lightColor
        }
    }),
    czm_lightColorHdr: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.lightColorHdr
        }
    }),
    czm_encodedCameraPositionMCHigh: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.encodedCameraPositionMCHigh
        }
    }),
    czm_encodedCameraPositionMCLow: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.encodedCameraPositionMCLow
        }
    }),
    czm_viewerPositionWC: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return y.getTranslation(e.inverseView, n_)
        }
    }),
    czm_frameNumber: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.frameState.frameNumber
        }
    }),
    czm_morphTime: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.frameState.morphTime
        }
    }),
    czm_sceneMode: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.frameState.mode
        }
    }),
    czm_pass: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.pass
        }
    }),
    czm_backgroundColor: new X({
        size: 1,
        datatype: w.FLOAT_VEC4,
        getValue: function(e) {
            return e.backgroundColor
        }
    }),
    czm_brdfLut: new X({
        size: 1,
        datatype: w.SAMPLER_2D,
        getValue: function(e) {
            return e.brdfLut
        }
    }),
    czm_environmentMap: new X({
        size: 1,
        datatype: w.SAMPLER_CUBE,
        getValue: function(e) {
            return e.environmentMap
        }
    }),
    czm_specularEnvironmentMaps: new X({
        size: 1,
        datatype: w.SAMPLER_2D,
        getValue: function(e) {
            return e.specularEnvironmentMaps
        }
    }),
    czm_specularEnvironmentMapSize: new X({
        size: 1,
        datatype: w.FLOAT_VEC2,
        getValue: function(e) {
            return e.specularEnvironmentMapsDimensions
        }
    }),
    czm_specularEnvironmentMapsMaximumLOD: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.specularEnvironmentMapsMaximumLOD
        }
    }),
    czm_sphericalHarmonicCoefficients: new X({
        size: 9,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.sphericalHarmonicCoefficients
        }
    }),
    czm_temeToPseudoFixed: new X({
        size: 1,
        datatype: w.FLOAT_MAT3,
        getValue: function(e) {
            return e.temeToPseudoFixedMatrix
        }
    }),
    czm_pixelRatio: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.pixelRatio
        }
    }),
    czm_fogDensity: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.fogDensity
        }
    }),
    czm_imagerySplitPosition: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.imagerySplitPosition
        }
    }),
    czm_geometricToleranceOverMeter: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.geometricToleranceOverMeter
        }
    }),
    czm_minimumDisableDepthTestDistance: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.minimumDisableDepthTestDistance
        }
    }),
    czm_invertClassificationColor: new X({
        size: 1,
        datatype: w.FLOAT_VEC4,
        getValue: function(e) {
            return e.invertClassificationColor
        }
    }),
    czm_gamma: new X({
        size: 1,
        datatype: w.FLOAT,
        getValue: function(e) {
            return e.gamma
        }
    }),
    czm_ellipsoidRadii: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.ellipsoid.radii
        }
    }),
    czm_ellipsoidInverseRadii: new X({
        size: 1,
        datatype: w.FLOAT_VEC3,
        getValue: function(e) {
            return e.ellipsoid.oneOverRadii
        }
    })
};

function ee(e, t, r, n) {
    this[0] = v(e, 0), this[1] = v(r, 0), this[2] = v(t, 0), this[3] = v(n, 0)
}
ee.packedLength = 4;
ee.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e[0], t[r++] = e[1], t[r++] = e[2], t[r++] = e[3], t
};
ee.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new ee), r[0] = e[t++], r[1] = e[t++], r[2] = e[t++], r[3] = e[t++], r
};
ee.clone = function(e, t) {
    if (c(e)) return c(t) ? (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t) : new ee(e[0], e[2], e[1], e[3])
};
ee.fromArray = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new ee), r[0] = e[t], r[1] = e[t + 1], r[2] = e[t + 2], r[3] = e[t + 3], r
};
ee.fromColumnMajorArray = function(e, t) {
    return ee.clone(e, t)
};
ee.fromRowMajorArray = function(e, t) {
    return c(t) ? (t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3], t) : new ee(e[0], e[1], e[2], e[3])
};
ee.fromScale = function(e, t) {
    return c(t) ? (t[0] = e.x, t[1] = 0, t[2] = 0, t[3] = e.y, t) : new ee(e.x, 0, 0, e.y)
};
ee.fromUniformScale = function(e, t) {
    return c(t) ? (t[0] = e, t[1] = 0, t[2] = 0, t[3] = e, t) : new ee(e, 0, 0, e)
};
ee.fromRotation = function(e, t) {
    var r = Math.cos(e),
        n = Math.sin(e);
    return c(t) ? (t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t) : new ee(r, -n, n, r)
};
ee.toArray = function(e, t) {
    return c(t) ? (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t) : [e[0], e[1], e[2], e[3]]
};
ee.getElementIndex = function(e, t) {
    return e * 2 + t
};
ee.getColumn = function(e, t, r) {
    var n = t * 2,
        i = e[n],
        a = e[n + 1];
    return r.x = i, r.y = a, r
};
ee.setColumn = function(e, t, r, n) {
    n = ee.clone(e, n);
    var i = t * 2;
    return n[i] = r.x, n[i + 1] = r.y, n
};
ee.getRow = function(e, t, r) {
    var n = e[t],
        i = e[t + 2];
    return r.x = n, r.y = i, r
};
ee.setRow = function(e, t, r, n) {
    return n = ee.clone(e, n), n[t] = r.x, n[t + 2] = r.y, n
};
var Xu = new R;
ee.getScale = function(e, t) {
    return t.x = R.magnitude(R.fromElements(e[0], e[1], Xu)), t.y = R.magnitude(R.fromElements(e[2], e[3], Xu)), t
};
var Zu = new R;
ee.getMaximumScale = function(e) {
    return ee.getScale(e, Zu), R.maximumComponent(Zu)
};
ee.multiply = function(e, t, r) {
    var n = e[0] * t[0] + e[2] * t[1],
        i = e[0] * t[2] + e[2] * t[3],
        a = e[1] * t[0] + e[3] * t[1],
        o = e[1] * t[2] + e[3] * t[3];
    return r[0] = n, r[1] = a, r[2] = i, r[3] = o, r
};
ee.add = function(e, t, r) {
    return r[0] = e[0] + t[0], r[1] = e[1] + t[1], r[2] = e[2] + t[2], r[3] = e[3] + t[3], r
};
ee.subtract = function(e, t, r) {
    return r[0] = e[0] - t[0], r[1] = e[1] - t[1], r[2] = e[2] - t[2], r[3] = e[3] - t[3], r
};
ee.multiplyByVector = function(e, t, r) {
    var n = e[0] * t.x + e[2] * t.y,
        i = e[1] * t.x + e[3] * t.y;
    return r.x = n, r.y = i, r
};
ee.multiplyByScalar = function(e, t, r) {
    return r[0] = e[0] * t, r[1] = e[1] * t, r[2] = e[2] * t, r[3] = e[3] * t, r
};
ee.multiplyByScale = function(e, t, r) {
    return r[0] = e[0] * t.x, r[1] = e[1] * t.x, r[2] = e[2] * t.y, r[3] = e[3] * t.y, r
};
ee.negate = function(e, t) {
    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
};
ee.transpose = function(e, t) {
    var r = e[0],
        n = e[2],
        i = e[1],
        a = e[3];
    return t[0] = r, t[1] = n, t[2] = i, t[3] = a, t
};
ee.abs = function(e, t) {
    return t[0] = Math.abs(e[0]), t[1] = Math.abs(e[1]), t[2] = Math.abs(e[2]), t[3] = Math.abs(e[3]), t
};
ee.equals = function(e, t) {
    return e === t || c(e) && c(t) && e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
};
ee.equalsArray = function(e, t, r) {
    return e[0] === t[r] && e[1] === t[r + 1] && e[2] === t[r + 2] && e[3] === t[r + 3]
};
ee.equalsEpsilon = function(e, t, r) {
    return r = v(r, 0), e === t || c(e) && c(t) && Math.abs(e[0] - t[0]) <= r && Math.abs(e[1] - t[1]) <= r && Math.abs(e[2] - t[2]) <= r && Math.abs(e[3] - t[3]) <= r
};
ee.IDENTITY = Object.freeze(new ee(1, 0, 0, 1));
ee.ZERO = Object.freeze(new ee(0, 0, 0, 0));
ee.COLUMN0ROW0 = 0;
ee.COLUMN0ROW1 = 1;
ee.COLUMN1ROW0 = 2;
ee.COLUMN1ROW1 = 3;
Object.defineProperties(ee.prototype, {
    length: {
        get: function() {
            return ee.packedLength
        }
    }
});
ee.prototype.clone = function(e) {
    return ee.clone(this, e)
};
ee.prototype.equals = function(e) {
    return ee.equals(this, e)
};
ee.prototype.equalsEpsilon = function(e, t) {
    return ee.equalsEpsilon(this, e, t)
};
ee.prototype.toString = function() {
    return "(" + this[0] + ", " + this[2] + ")\n(" + this[1] + ", " + this[3] + ")"
};

function i_(e, t, r, n) {
    switch (t.type) {
        case e.FLOAT:
            return new Qh(e, t, r, n);
        case e.FLOAT_VEC2:
            return new $h(e, t, r, n);
        case e.FLOAT_VEC3:
            return new Jh(e, t, r, n);
        case e.FLOAT_VEC4:
            return new ef(e, t, r, n);
        case e.SAMPLER_2D:
        case e.SAMPLER_CUBE:
            return new uu(e, t, r, n);
        case e.INT:
        case e.BOOL:
            return new tf(e, t, r, n);
        case e.INT_VEC2:
        case e.BOOL_VEC2:
            return new rf(e, t, r, n);
        case e.INT_VEC3:
        case e.BOOL_VEC3:
            return new nf(e, t, r, n);
        case e.INT_VEC4:
        case e.BOOL_VEC4:
            return new af(e, t, r, n);
        case e.FLOAT_MAT2:
            return new of(e, t, r, n);
        case e.FLOAT_MAT3:
            return new sf(e, t, r, n);
        case e.FLOAT_MAT4:
            return new uf(e, t, r, n);
        default:
            throw new lt("Unrecognized uniform type: " + t.type + ' for uniform "' + r + '".')
    }
}

function Qh(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = 0, this._gl = e, this._location = n
}
Qh.prototype.set = function() {
    this.value !== this._value && (this._value = this.value, this._gl.uniform1f(this._location, this.value))
};

function $h(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new R, this._gl = e, this._location = n
}
$h.prototype.set = function() {
    var e = this.value;
    R.equals(e, this._value) || (R.clone(e, this._value), this._gl.uniform2f(this._location, e.x, e.y))
};

function Jh(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = void 0, this._gl = e, this._location = n
}
Jh.prototype.set = function() {
    var e = this.value;
    c(e.red) ? H.equals(e, this._value) || (this._value = H.clone(e, this._value), this._gl.uniform3f(this._location, e.red, e.green, e.blue)) : c(e.x) && (u.equals(e, this._value) || (this._value = u.clone(e, this._value), this._gl.uniform3f(this._location, e.x, e.y, e.z)))
};

function ef(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = void 0, this._gl = e, this._location = n
}
ef.prototype.set = function() {
    var e = this.value;
    c(e.red) ? H.equals(e, this._value) || (this._value = H.clone(e, this._value), this._gl.uniform4f(this._location, e.red, e.green, e.blue, e.alpha)) : c(e.x) && (B.equals(e, this._value) || (this._value = B.clone(e, this._value), this._gl.uniform4f(this._location, e.x, e.y, e.z, e.w)))
};

function uu(e, t, r, n) {
    this.name = r, this.value = void 0, this._gl = e, this._location = n, this.textureUnitIndex = void 0
}
uu.prototype.set = function() {
    var e = this._gl;
    e.activeTexture(e.TEXTURE0 + this.textureUnitIndex);
    var t = this.value;
    e.bindTexture(t._target, t._texture)
};
uu.prototype._setSampler = function(e) {
    return this.textureUnitIndex = e, this._gl.uniform1i(this._location, e), e + 1
};

function tf(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = 0, this._gl = e, this._location = n
}
tf.prototype.set = function() {
    this.value !== this._value && (this._value = this.value, this._gl.uniform1i(this._location, this.value))
};

function rf(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new R, this._gl = e, this._location = n
}
rf.prototype.set = function() {
    var e = this.value;
    R.equals(e, this._value) || (R.clone(e, this._value), this._gl.uniform2i(this._location, e.x, e.y))
};

function nf(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new u, this._gl = e, this._location = n
}
nf.prototype.set = function() {
    var e = this.value;
    u.equals(e, this._value) || (u.clone(e, this._value), this._gl.uniform3i(this._location, e.x, e.y, e.z))
};

function af(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new B, this._gl = e, this._location = n
}
af.prototype.set = function() {
    var e = this.value;
    B.equals(e, this._value) || (B.clone(e, this._value), this._gl.uniform4i(this._location, e.x, e.y, e.z, e.w))
};
var a_ = new Float32Array(4);

function of(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new ee, this._gl = e, this._location = n
}
of.prototype.set = function() {
    if (!ee.equalsArray(this.value, this._value, 0)) {
        ee.clone(this.value, this._value);
        var e = ee.toArray(this.value, a_);
        this._gl.uniformMatrix2fv(this._location, !1, e)
    }
};
var o_ = new Float32Array(9);

function sf(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new P, this._gl = e, this._location = n
}
sf.prototype.set = function() {
    if (!P.equalsArray(this.value, this._value, 0)) {
        P.clone(this.value, this._value);
        var e = P.toArray(this.value, o_);
        this._gl.uniformMatrix3fv(this._location, !1, e)
    }
};
var s_ = new Float32Array(16);

function uf(e, t, r, n) {
    this.name = r, this.value = void 0, this._value = new y, this._gl = e, this._location = n
}
uf.prototype.set = function() {
    if (!y.equalsArray(this.value, this._value, 0)) {
        y.clone(this.value, this._value);
        var e = y.toArray(this.value, s_);
        this._gl.uniformMatrix4fv(this._location, !1, e)
    }
};

function u_(e, t, r, n) {
    switch (t.type) {
        case e.FLOAT:
            return new cf(e, t, r, n);
        case e.FLOAT_VEC2:
            return new hf(e, t, r, n);
        case e.FLOAT_VEC3:
            return new ff(e, t, r, n);
        case e.FLOAT_VEC4:
            return new lf(e, t, r, n);
        case e.SAMPLER_2D:
        case e.SAMPLER_CUBE:
            return new cu(e, t, r, n);
        case e.INT:
        case e.BOOL:
            return new df(e, t, r, n);
        case e.INT_VEC2:
        case e.BOOL_VEC2:
            return new _f(e, t, r, n);
        case e.INT_VEC3:
        case e.BOOL_VEC3:
            return new mf(e, t, r, n);
        case e.INT_VEC4:
        case e.BOOL_VEC4:
            return new vf(e, t, r, n);
        case e.FLOAT_MAT2:
            return new pf(e, t, r, n);
        case e.FLOAT_MAT3:
            return new gf(e, t, r, n);
        case e.FLOAT_MAT4:
            return new Tf(e, t, r, n);
        default:
            throw new lt("Unrecognized uniform type: " + t.type + ' for uniform "' + r + '".')
    }
}

function cf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i), this._gl = e, this._location = n[0]
}
cf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0; i < t; ++i) {
        var a = e[i];
        a !== r[i] && (r[i] = a, n = !0)
    }
    n && this._gl.uniform1fv(this._location, r)
};

function hf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 2), this._gl = e, this._location = n[0]
}
hf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        R.equalsArray(o, r, i) || (R.pack(o, r, i), n = !0), i += 2
    }
    n && this._gl.uniform2fv(this._location, r)
};

function ff(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 3), this._gl = e, this._location = n[0]
}
ff.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        c(o.red) ? (o.red !== r[i] || o.green !== r[i + 1] || o.blue !== r[i + 2]) && (r[i] = o.red, r[i + 1] = o.green, r[i + 2] = o.blue, n = !0) : c(o.x) && (u.equalsArray(o, r, i) || (u.pack(o, r, i), n = !0)), i += 3
    }
    n && this._gl.uniform3fv(this._location, r)
};

function lf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 4), this._gl = e, this._location = n[0]
}
lf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        c(o.red) ? H.equalsArray(o, r, i) || (H.pack(o, r, i), n = !0) : c(o.x) && (B.equalsArray(o, r, i) || (B.pack(o, r, i), n = !0)), i += 4
    }
    n && this._gl.uniform4fv(this._location, r)
};

function cu(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i), this._gl = e, this._locations = n, this.textureUnitIndex = void 0
}
cu.prototype.set = function() {
    for (var e = this._gl, t = e.TEXTURE0 + this.textureUnitIndex, r = this.value, n = r.length, i = 0; i < n; ++i) {
        var a = r[i];
        e.activeTexture(t + i), e.bindTexture(a._target, a._texture)
    }
};
cu.prototype._setSampler = function(e) {
    this.textureUnitIndex = e;
    for (var t = this._locations, r = t.length, n = 0; n < r; ++n) {
        var i = e + n;
        this._gl.uniform1i(t[n], i)
    }
    return e + r
};

function df(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Int32Array(i), this._gl = e, this._location = n[0]
}
df.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0; i < t; ++i) {
        var a = e[i];
        a !== r[i] && (r[i] = a, n = !0)
    }
    n && this._gl.uniform1iv(this._location, r)
};

function _f(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Int32Array(i * 2), this._gl = e, this._location = n[0]
}
_f.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        R.equalsArray(o, r, i) || (R.pack(o, r, i), n = !0), i += 2
    }
    n && this._gl.uniform2iv(this._location, r)
};

function mf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Int32Array(i * 3), this._gl = e, this._location = n[0]
}
mf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        u.equalsArray(o, r, i) || (u.pack(o, r, i), n = !0), i += 3
    }
    n && this._gl.uniform3iv(this._location, r)
};

function vf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Int32Array(i * 4), this._gl = e, this._location = n[0]
}
vf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        B.equalsArray(o, r, i) || (B.pack(o, r, i), n = !0), i += 4
    }
    n && this._gl.uniform4iv(this._location, r)
};

function pf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 4), this._gl = e, this._location = n[0]
}
pf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        ee.equalsArray(o, r, i) || (ee.pack(o, r, i), n = !0), i += 4
    }
    n && this._gl.uniformMatrix2fv(this._location, !1, r)
};

function gf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 9), this._gl = e, this._location = n[0]
}
gf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        P.equalsArray(o, r, i) || (P.pack(o, r, i), n = !0), i += 9
    }
    n && this._gl.uniformMatrix3fv(this._location, !1, r)
};

function Tf(e, t, r, n) {
    var i = n.length;
    this.name = r, this.value = new Array(i), this._value = new Float32Array(i * 16), this._gl = e, this._location = n[0]
}
Tf.prototype.set = function() {
    for (var e = this.value, t = e.length, r = this._value, n = !1, i = 0, a = 0; a < t; ++a) {
        var o = e[a];
        y.equalsArray(o, r, i) || (y.pack(o, r, i), n = !0), i += 16
    }
    n && this._gl.uniformMatrix4fv(this._location, !1, r)
};
var c_ = 0;

function Vt(e) {
    var t = e.vertexShaderText,
        r = e.fragmentShaderText;
    typeof spector < "u" && (t = t.replace(/^#line/gm, "//#line"), r = r.replace(/^#line/gm, "//#line"));
    var n = h_(t, r);
    this._gl = e.gl, this._logShaderCompilation = e.logShaderCompilation, this._debugShaders = e.debugShaders, this._attributeLocations = e.attributeLocations, this._program = void 0, this._numberOfVertexAttributes = void 0, this._vertexAttributes = void 0, this._uniformsByName = void 0, this._uniforms = void 0, this._automaticUniforms = void 0, this._manualUniforms = void 0, this._duplicateUniformNames = n.duplicateUniformNames, this._cachedShader = void 0, this.maximumTextureUnitIndex = void 0, this._vertexShaderSource = e.vertexShaderSource, this._vertexShaderText = e.vertexShaderText, this._fragmentShaderSource = e.fragmentShaderSource, this._fragmentShaderText = n.fragmentShaderText, this.id = c_++
}
Vt.fromCache = function(e) {
    return e = v(e, v.EMPTY_OBJECT), e.context.shaderCache.getShaderProgram(e)
};
Vt.replaceCache = function(e) {
    return e = v(e, v.EMPTY_OBJECT), e.context.shaderCache.replaceShaderProgram(e)
};
Object.defineProperties(Vt.prototype, {
    vertexShaderSource: {
        get: function() {
            return this._vertexShaderSource
        }
    },
    fragmentShaderSource: {
        get: function() {
            return this._fragmentShaderSource
        }
    },
    vertexAttributes: {
        get: function() {
            return ka(this), this._vertexAttributes
        }
    },
    numberOfVertexAttributes: {
        get: function() {
            return ka(this), this._numberOfVertexAttributes
        }
    },
    allUniforms: {
        get: function() {
            return ka(this), this._uniformsByName
        }
    }
});

function Ku(e) {
    var t = [],
        r = e.match(/uniform.*?(?![^{]*})(?=[=\[;])/g);
    if (c(r))
        for (var n = r.length, i = 0; i < n; i++) {
            var a = r[i].trim(),
                o = a.slice(a.lastIndexOf(" ") + 1);
            t.push(o)
        }
    return t
}

function h_(e, t) {
    var r = {};
    if (!oe.highpFloatSupported || !oe.highpIntSupported) {
        var n, i, a, o, s = Ku(e),
            h = Ku(t),
            f = s.length,
            l = h.length;
        for (n = 0; n < f; n++)
            for (i = 0; i < l; i++)
                if (s[n] === h[i]) {
                    a = s[n], o = "czm_mediump_" + a;
                    var d = new RegExp(a + "\\b", "g");
                    t = t.replace(d, o), r[o] = a
                }
    }
    return {
        fragmentShaderText: t,
        duplicateUniformNames: r
    }
}
var fr = "[Cesium WebGL] ";

function f_(e, t) {
    var r = t._vertexShaderText,
        n = t._fragmentShaderText,
        i = e.createShader(e.VERTEX_SHADER);
    e.shaderSource(i, r), e.compileShader(i);
    var a = e.createShader(e.FRAGMENT_SHADER);
    e.shaderSource(a, n), e.compileShader(a);
    var o = e.createProgram();
    e.attachShader(o, i), e.attachShader(o, a), e.deleteShader(i), e.deleteShader(a);
    var s = t._attributeLocations;
    if (c(s))
        for (var h in s) s.hasOwnProperty(h) && e.bindAttribLocation(o, s[h], h);
    e.linkProgram(o);
    var f;
    if (!e.getProgramParameter(o, e.LINK_STATUS)) {
        var l = t._debugShaders;
        if (!e.getShaderParameter(a, e.COMPILE_STATUS)) {
            if (f = e.getShaderInfoLog(a), console.error(fr + "Fragment shader compile log: " + f), c(l)) {
                var d = l.getTranslatedShaderSource(a);
                console.error(d !== "" ? fr + "Translated fragment shader source:\n" + d : fr + "Fragment shader translation failed.")
            }
            throw e.deleteProgram(o), new lt("Fragment shader failed to compile.  Compile log: " + f)
        }
        if (!e.getShaderParameter(i, e.COMPILE_STATUS)) {
            if (f = e.getShaderInfoLog(i), console.error(fr + "Vertex shader compile log: " + f), c(l)) {
                var m = l.getTranslatedShaderSource(i);
                console.error(m !== "" ? fr + "Translated vertex shader source:\n" + m : fr + "Vertex shader translation failed.")
            }
            throw e.deleteProgram(o), new lt("Vertex shader failed to compile.  Compile log: " + f)
        }
        throw f = e.getProgramInfoLog(o), console.error(fr + "Shader program link log: " + f), c(l) && (console.error(fr + "Translated vertex shader source:\n" + l.getTranslatedShaderSource(i)), console.error(fr + "Translated fragment shader source:\n" + l.getTranslatedShaderSource(a))), e.deleteProgram(o), new lt("Program failed to link.  Link log: " + f)
    }
    var _ = t._logShaderCompilation;
    return _ && (f = e.getShaderInfoLog(i), c(f) && f.length > 0 && console.log(fr + "Vertex shader compile log: " + f)), _ && (f = e.getShaderInfoLog(a), c(f) && f.length > 0 && console.log(fr + "Fragment shader compile log: " + f)), _ && (f = e.getProgramInfoLog(o), c(f) && f.length > 0 && console.log(fr + "Shader program link log: " + f)), o
}

function l_(e, t, r) {
    for (var n = {}, i = 0; i < r; ++i) {
        var a = e.getActiveAttrib(t, i),
            o = e.getAttribLocation(t, a.name);
        n[a.name] = {
            name: a.name,
            type: a.type,
            index: o
        }
    }
    return n
}

function d_(e, t) {
    for (var r = {}, n = [], i = [], a = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), o = 0; o < a; ++o) {
        var s = e.getActiveUniform(t, o),
            h = "[0]",
            f = s.name.indexOf(h, s.name.length - h.length) !== -1 ? s.name.slice(0, s.name.length - 3) : s.name;
        if (f.indexOf("gl_") !== 0)
            if (s.name.indexOf("[") < 0) {
                var l = e.getUniformLocation(t, f);
                if (l !== null) {
                    var d = i_(e, s, f, l);
                    r[f] = d, n.push(d), d._setSampler && i.push(d)
                }
            } else {
                var m, _, g, T, C = f.indexOf("[");
                if (C >= 0) {
                    if (m = r[f.slice(0, C)], !c(m)) continue;
                    _ = m._locations, _.length <= 1 && (g = m.value, T = e.getUniformLocation(t, f), T !== null && (_.push(T), g.push(e.getUniform(t, T))))
                } else {
                    _ = [];
                    for (var A = 0; A < s.size; ++A) T = e.getUniformLocation(t, f + "[" + A + "]"), T !== null && _.push(T);
                    m = u_(e, s, f, _), r[f] = m, n.push(m), m._setSampler && i.push(m)
                }
            }
    }
    return {
        uniformsByName: r,
        uniforms: n,
        samplerUniforms: i
    }
}

function __(e, t) {
    var r = [],
        n = [];
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var a = t[i],
                o = i,
                s = e._duplicateUniformNames[o];
            c(s) && (a.name = s, o = s);
            var h = qa[o];
            c(h) ? r.push({
                uniform: a,
                automaticUniform: h
            }) : n.push(a)
        } return {
        automaticUniforms: r,
        manualUniforms: n
    }
}

function m_(e, t, r) {
    e.useProgram(t);
    for (var n = 0, i = r.length, a = 0; a < i; ++a) n = r[a]._setSampler(n);
    return e.useProgram(null), n
}

function ka(e) {
    c(e._program) || yf(e)
}

function yf(e) {
    var t = e._program,
        r = e._gl,
        n = f_(r, e, e._debugShaders),
        i = r.getProgramParameter(n, r.ACTIVE_ATTRIBUTES),
        a = d_(r, n),
        o = __(e, a.uniformsByName);
    e._program = n, e._numberOfVertexAttributes = i, e._vertexAttributes = l_(r, n, i), e._uniformsByName = a.uniformsByName, e._uniforms = a.uniforms, e._automaticUniforms = o.automaticUniforms, e._manualUniforms = o.manualUniforms, e.maximumTextureUnitIndex = m_(r, n, a.samplerUniforms), t && e._gl.deleteProgram(t), typeof spector < "u" && (e._program.__SPECTOR_rebuildProgram = function(s, h, f, l) {
        var d = e._vertexShaderText,
            m = e._fragmentShaderText,
            _ = / ! = /g;
        e._vertexShaderText = s.replace(_, " != "), e._fragmentShaderText = h.replace(_, " != ");
        try {
            yf(e), f(e._program)
        } catch (C) {
            e._vertexShaderText = d, e._fragmentShaderText = m;
            var g = /(?:Compile|Link) error: ([^]*)/,
                T = g.exec(C.message);
            l(T ? T[1] : C.message)
        }
    })
}
Vt.prototype._bind = function() {
    ka(this), this._gl.useProgram(this._program)
};
Vt.prototype._setUniforms = function(e, t, r) {
    var n, i;
    if (c(e)) {
        var a = this._manualUniforms;
        for (n = a.length, i = 0; i < n; ++i) {
            var o = a[i];
            o.value = e[o.name]()
        }
    }
    var s = this._automaticUniforms;
    for (n = s.length, i = 0; i < n; ++i) {
        var h = s[i];
        h.uniform.value = h.automaticUniform.getValue(t)
    }
    var f = this._uniforms;
    for (n = f.length, i = 0; i < n; ++i) f[i].set();
    if (r) {
        var l = this._gl,
            d = this._program;
        l.validateProgram(d)
    }
};
Vt.prototype.isDestroyed = function() {
    return !1
};
Vt.prototype.destroy = function() {
    this._cachedShader.cache.releaseShaderProgram(this)
};
Vt.prototype.finalDestroy = function() {
    return this._gl.deleteProgram(this._program), Je(this)
};

function v_(e, t) {
    var r = /#define OUTPUT_DECLARATION/,
        n = e.split("\n");
    if (/#version 300 es/g.test(e)) return e;
    var i = -1,
        a, o;
    for (a = 0; a < n.length; ++a)
        if (o = n[a], r.test(o)) {
            i = a;
            break
        } if (i === -1) throw new ye("Could not find a #define OUTPUT_DECLARATION!");
    var s = [];
    for (a = 0; a < 10; a++) {
        var h = "gl_FragData\\[" + a + "\\]",
            f = "czm_out" + a,
            l = new RegExp(h, "g");
        l.test(e) && (Qu(f, s), zr(h, f, n), n.splice(i, 0, "layout(location = " + a + ") out vec4 " + f + ";"), i += 1)
    }
    var d = "czm_fragColor";
    g_("gl_FragColor", n) && (Qu(d, s), zr("gl_FragColor", d, n), n.splice(i, 0, "layout(location = 0) out vec4 czm_fragColor;"), i += 1);
    var m = y_(s, n),
        _ = {};
    for (a = 0; a < n.length; a++) {
        o = n[a];
        for (var g in m)
            if (m.hasOwnProperty(g)) {
                var T = new RegExp("(layout)[^]+(out)[^]+(" + g + ")[^]+", "g");
                T.test(o) && (_[o] = g)
            }
    }
    for (var C in _)
        if (_.hasOwnProperty(C)) {
            var A = _[C],
                S = n.indexOf(C),
                x = m[A],
                I = x.length,
                O;
            for (O = 0; O < I; O++) n.splice(S, 0, x[O]);
            for (S += I + 1, O = I - 1; O >= 0; O--) n.splice(S, 0, "#endif //" + x[O])
        } var F = "WEBGL_2",
        b = "#define " + F,
        N = "#version 300 es",
        D = !1;
    for (a = 0; a < n.length; a++)
        if (/#version/.test(n[a])) {
            n[a] = N, D = !0;
            break
        } return D || n.splice(0, 0, N), n.splice(1, 0, b), Vo("EXT_draw_buffers", F, n), Vo("EXT_frag_depth", F, n), Vo("OES_standard_derivatives", F, n), zr("texture2D", "texture", n), zr("texture3D", "texture", n), zr("textureCube", "texture", n), zr("gl_FragDepthEXT", "gl_FragDepth", n), t ? zr("varying", "in", n) : (zr("attribute", "in", n), zr("varying", "out", n)), T_(n)
}

function zr(e, t, r) {
    for (var n = "(^|[^\\w])(" + e + ")($|[^\\w])", i = new RegExp(n, "g"), a = r.length, o = 0; o < a; ++o) {
        var s = r[o];
        r[o] = s.replace(i, "$1" + t + "$3")
    }
}

function p_(e, t, r) {
    for (var n = r.length, i = 0; i < n; ++i) {
        var a = r[i];
        r[i] = a.replace(e, t)
    }
}

function g_(e, t) {
    for (var r = "(^|[^\\w])(" + e + ")($|[^\\w])", n = new RegExp(r, "g"), i = t.length, a = 0; a < i; ++a) {
        var o = t[a];
        if (n.test(o)) return !0
    }
    return !1
}

function T_(e) {
    for (var t = "", r = e.length, n = 0; n < r; ++n) t += e[n] + "\n";
    return t
}

function Qu(e, t) {
    t.indexOf(e) === -1 && t.push(e)
}

function y_(e, t) {
    for (var r = {}, n = e.length, i = [], a = 0; a < t.length; ++a) {
        var o = t[a],
            s = /(#ifdef|#if)/g.test(o),
            h = /#else/g.test(o),
            f = /#endif/g.test(o);
        if (s) i.push(o);
        else if (h) {
            var l = i[i.length - 1],
                d = l.replace("ifdef", "ifndef");
            /if/g.test(d) && (d = d.replace(/(#if\s+)(\S*)([^]*)/, "$1!($2)$3")), i.pop(), i.push(d)
        } else if (f) i.pop();
        else if (!/layout/g.test(o))
            for (var m = 0; m < n; ++m) {
                var _ = e[m];
                o.indexOf(_) !== -1 && (c(r[_]) ? r[_] = r[_].filter(function(g) {
                    return i.indexOf(g) >= 0
                }) : r[_] = i.slice())
            }
    }
    return r
}

function Vo(e, t, r) {
    var n = "#extension\\s+GL_" + e + "\\s+:\\s+[a-zA-Z0-9]+\\s*$";
    p_(new RegExp(n, "g"), "", r), zr("GL_" + e, t, r)
}
var E_ = "const float czm_epsilon1=0.1;",
    C_ = "const float czm_epsilon2=0.01;",
    A_ = "const float czm_epsilon3=0.001;",
    w_ = "const float czm_epsilon4=0.0001;",
    R_ = "const float czm_epsilon5=0.00001;",
    x_ = "const float czm_epsilon6=0.000001;",
    S_ = "const float czm_epsilon7=0.0000001;",
    I_ = "const float czm_infinity=5906376272000.0;",
    O_ = "const float czm_oneOverPi=0.3183098861837907;",
    P_ = "const float czm_oneOverTwoPi=0.15915494309189535;",
    N_ = "const float czm_pi=3.141592653589793;",
    M_ = "const float czm_piOverFour=0.7853981633974483;",
    D_ = "const float czm_piOverSix=0.5235987755982988;",
    b_ = "const float czm_piOverThree=1.0471975511965976;",
    L_ = "const float czm_piOverTwo=1.5707963267948966;",
    F_ = "const float czm_radiansPerDegree=0.017453292519943295;",
    B_ = "const float czm_sceneMode2D=2.0;",
    U_ = "const float czm_sceneMode3D=3.0;",
    z_ = "const float czm_sceneModeColumbusView=1.0;",
    V_ = "const float czm_sceneModeMorphing=0.0;",
    G_ = "const float czm_threePiOver2=4.71238898038469;",
    H_ = "const float czm_twoPi=6.283185307179586;",
    W_ = "const float czm_webMercatorMaxLatitude=1.4844222297453324;",
    q_ = "const vec4 K_HSB2RGB=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 czm_HSBToRGB(vec3 hsb){vec3 p=abs(fract(hsb.xxx+K_HSB2RGB.xyz)*6.0-K_HSB2RGB.www);return hsb.z*mix(K_HSB2RGB.xxx,clamp(p-K_HSB2RGB.xxx,0.0,1.0),hsb.y);}",
    k_ = "vec3 hueToRGB(float hue){float r=abs(hue*6.0-3.0)-1.0;float g=2.0-abs(hue*6.0-2.0);float b=2.0-abs(hue*6.0-4.0);return clamp(vec3(r,g,b),0.0,1.0);}vec3 czm_HSLToRGB(vec3 hsl){vec3 rgb=hueToRGB(hsl.x);float c=(1.0-abs(2.0*hsl.z-1.0))*hsl.y;return(rgb-0.5)*c+hsl.z;}",
    Y_ = "const vec4 K_RGB2HSB=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec3 czm_RGBToHSB(vec3 rgb){vec4 p=mix(vec4(rgb.bg,K_RGB2HSB.wz),vec4(rgb.gb,K_RGB2HSB.xy),step(rgb.b,rgb.g));vec4 q=mix(vec4(p.xyw,rgb.r),vec4(rgb.r,p.yzx),step(p.x,rgb.r));float d=q.x-min(q.w,q.y);return vec3(abs(q.z+(q.w-q.y)/(6.0*d+czm_epsilon7)),d/(q.x+czm_epsilon7),q.x);}",
    j_ = "vec3 RGBtoHCV(vec3 rgb){vec4 p=(rgb.g<rgb.b)? vec4(rgb.bg,-1.0,2.0/3.0): vec4(rgb.gb,0.0,-1.0/3.0);vec4 q=(rgb.r<p.x)? vec4(p.xyw,rgb.r): vec4(rgb.r,p.yzx);float c=q.x-min(q.w,q.y);float h=abs((q.w-q.y)/(6.0*c+czm_epsilon7)+q.z);return vec3(h,c,q.x);}vec3 czm_RGBToHSL(vec3 rgb){vec3 hcv=RGBtoHCV(rgb);float l=hcv.z-hcv.y*0.5;float s=hcv.y/(1.0-abs(l*2.0-1.0)+czm_epsilon7);return vec3(hcv.x,s,l);}",
    X_ = "vec3 czm_RGBToXYZ(vec3 rgb){const mat3 RGB2XYZ=mat3(0.4124,0.2126,0.0193,0.3576,0.7152,0.1192,0.1805,0.0722,0.9505);vec3 xyz=RGB2XYZ*rgb;vec3 Yxy;Yxy.r=xyz.g;float temp=dot(vec3(1.0),xyz);Yxy.gb=xyz.rg/temp;return Yxy;}",
    Z_ = "vec3 czm_XYZToRGB(vec3 Yxy){const mat3 XYZ2RGB=mat3(3.2405,-0.9693,0.0556,-1.5371,1.8760,-0.2040,-0.4985,0.0416,1.0572);vec3 xyz;xyz.r=Yxy.r*Yxy.g/Yxy.b;xyz.g=Yxy.r;xyz.b=Yxy.r*(1.0-Yxy.g-Yxy.b)/Yxy.b;return XYZ2RGB*xyz;}",
    K_ = "float czm_alphaWeight(float a){float z=(gl_FragCoord.z-czm_viewportTransformation[3][2])/czm_viewportTransformation[2][2];return pow(a+0.01,4.0)+max(1e-2,min(3.0*1e3,0.003/(1e-5+pow(abs(z)/200.0,4.0))));}",
    Q_ = "vec4 czm_antialias(vec4 color1,vec4 color2,vec4 currentColor,float dist,float fuzzFactor){float val1=clamp(dist/fuzzFactor,0.0,1.0);float val2=clamp((dist-0.5)/fuzzFactor,0.0,1.0);val1=val1*(1.0-val2);val1=val1*val1*(3.0-(2.0*val1));val1=pow(val1,0.5);vec4 midColor=(color1+color2)*0.5;return mix(midColor,currentColor,val1);}vec4 czm_antialias(vec4 color1,vec4 color2,vec4 currentColor,float dist){return czm_antialias(color1,color2,currentColor,dist,0.1);}",
    $_ = "vec2 czm_approximateSphericalCoordinates(vec3 normal){float latitudeApproximation=czm_fastApproximateAtan(sqrt(normal.x*normal.x+normal.y*normal.y),normal.z);float longitudeApproximation=czm_fastApproximateAtan(normal.x,normal.y);return vec2(latitudeApproximation,longitudeApproximation);}",
    J_ = "bool czm_backFacing(){return gl_FrontFacing==false;}",
    em = "float czm_branchFreeTernary(bool comparison,float a,float b){float useA=float(comparison);return a*useA+b*(1.0-useA);}/***Branchless ternary operator to be used when it's inexpensive to explicitly*evaluate both possibilities for a vec2 expression.**@name czm_branchFreeTernary*@glslFunction**@param{bool}comparison A comparison statement*@param{vec2}a Value to return if the comparison is true.*@param{vec2}b Value to return if the comparison is false.**@returns{vec2}equivalent of comparison ? a : b*/vec2 czm_branchFreeTernary(bool comparison,vec2 a,vec2 b){float useA=float(comparison);return a*useA+b*(1.0-useA);}/***Branchless ternary operator to be used when it's inexpensive to explicitly*evaluate both possibilities for a vec3 expression.**@name czm_branchFreeTernary*@glslFunction**@param{bool}comparison A comparison statement*@param{vec3}a Value to return if the comparison is true.*@param{vec3}b Value to return if the comparison is false.**@returns{vec3}equivalent of comparison ? a : b*/vec3 czm_branchFreeTernary(bool comparison,vec3 a,vec3 b){float useA=float(comparison);return a*useA+b*(1.0-useA);}/***Branchless ternary operator to be used when it's inexpensive to explicitly*evaluate both possibilities for a vec4 expression.**@name czm_branchFreeTernary*@glslFunction**@param{bool}comparison A comparison statement*@param{vec3}a Value to return if the comparison is true.*@param{vec3}b Value to return if the comparison is false.**@returns{vec3}equivalent of comparison ? a : b*/vec4 czm_branchFreeTernary(bool comparison,vec4 a,vec4 b){float useA=float(comparison);return a*useA+b*(1.0-useA);}",
    tm = "vec4 czm_columbusViewMorph(vec4 position2D,vec4 position3D,float time){vec3 p=mix(position2D.xyz,position3D.xyz,time);return vec4(p,1.0);}",
    rm = "vec3 czm_gammaCorrect(vec3 color){\n#ifdef HDR\ncolor=pow(color,vec3(czm_gamma));\n#endif\nreturn color;}vec4 czm_gammaCorrect(vec4 color){\n#ifdef HDR\ncolor.rgb=pow(color.rgb,vec3(czm_gamma));\n#endif\nreturn color;}",
    nm = "struct czm_depthRangeStruct{float near;float far;};",
    im = "struct czm_ray{vec3 origin;vec3 direction;};",
    am = "struct czm_raySegment{float start;float stop;};/***DOC_TBA**@name czm_emptyRaySegment*@glslConstant*/const czm_raySegment czm_emptyRaySegment=czm_raySegment(-czm_infinity,-czm_infinity);/***DOC_TBA**@name czm_fullRaySegment*@glslConstant*/const czm_raySegment czm_fullRaySegment=czm_raySegment(0.0,czm_infinity);",
    om = "bool czm_isEmpty(czm_raySegment interval){return(interval.stop<0.0);}",
    sm = "bool czm_isFull(czm_raySegment interval){return(interval.start==0.0&&interval.stop==czm_infinity);}",
    um = "float czm_latitudeToWebMercatorFraction(float latitude,float southMercatorY,float oneOverMercatorHeight){float sinLatitude=sin(latitude);float mercatorY=0.5*log((1.0+sinLatitude)/(1.0-sinLatitude));return(mercatorY-southMercatorY)*oneOverMercatorHeight;}",
    cm = "float czm_metersPerPixel(vec4 positionEC,float pixelRatio){float width=czm_viewport.z;float height=czm_viewport.w;float pixelWidth;float pixelHeight;float top=czm_frustumPlanes.x;float bottom=czm_frustumPlanes.y;float left=czm_frustumPlanes.z;float right=czm_frustumPlanes.w;if(czm_sceneMode==czm_sceneMode2D||czm_orthographicIn3D==1.0){float frustumWidth=right-left;float frustumHeight=top-bottom;pixelWidth=frustumWidth/width;pixelHeight=frustumHeight/height;}else{float distanceToPixel=-positionEC.z;float inverseNear=1.0/czm_currentFrustum.x;float tanTheta=top*inverseNear;pixelHeight=2.0*distanceToPixel*tanTheta/height;tanTheta=right*inverseNear;pixelWidth=2.0*distanceToPixel*tanTheta/width;}return max(pixelWidth,pixelHeight)*pixelRatio;}/***Computes the size of a pixel in meters at a distance from the eye.*<p>*Use this version when scaling by pixel ratio.*</p>*@name czm_metersPerPixel*@glslFunction**@param{vec3}positionEC The position to get the meters per pixel in eye coordinates.**@returns{float}The meters per pixel at positionEC.*/float czm_metersPerPixel(vec4 positionEC){return czm_metersPerPixel(positionEC,czm_pixelRatio);}",
    hm = "vec3 czm_multiplyWithColorBalance(vec3 left,vec3 right){const vec3 W=vec3(0.2125,0.7154,0.0721);vec3 target=left*right;float leftLuminance=dot(left,W);float rightLuminance=dot(right,W);float targetLuminance=dot(target,W);return((leftLuminance+rightLuminance)/(2.0*targetLuminance))*target;}",
    fm = "float czm_nearFarScalar(vec4 nearFarScalar,float cameraDistSq){float valueAtMin=nearFarScalar.y;float valueAtMax=nearFarScalar.w;float nearDistanceSq=nearFarScalar.x*nearFarScalar.x;float farDistanceSq=nearFarScalar.z*nearFarScalar.z;float t=(cameraDistSq-nearDistanceSq)/(farDistanceSq-nearDistanceSq);t=pow(clamp(t,0.0,1.0),0.2);return mix(valueAtMin,valueAtMax,t);}",
    lm = "vec4 czm_packDepth(float depth){vec4 enc=vec4(1.0,255.0,65025.0,16581375.0)*depth;enc=fract(enc);enc-=enc.yzww*vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);return enc;}",
    dm = "czm_raySegment czm_rayEllipsoidIntersectionInterval(czm_ray ray,vec3 ellipsoid_center,vec3 ellipsoid_inverseRadii){vec3 q=ellipsoid_inverseRadii*(czm_inverseModelView*vec4(ray.origin,1.0)).xyz;vec3 w=ellipsoid_inverseRadii*(czm_inverseModelView*vec4(ray.direction,0.0)).xyz;q=q-ellipsoid_inverseRadii*(czm_inverseModelView*vec4(ellipsoid_center,1.0)).xyz;float q2=dot(q,q);float qw=dot(q,w);if(q2>1.0){if(qw>=0.0){return czm_emptyRaySegment;}else{float qw2=qw*qw;float difference=q2-1.0;float w2=dot(w,w);float product=w2*difference;if(qw2<product){return czm_emptyRaySegment;}else if(qw2>product){float discriminant=qw*qw-product;float temp=-qw+sqrt(discriminant);float root0=temp/w2;float root1=difference/temp;if(root0<root1){czm_raySegment i=czm_raySegment(root0,root1);return i;}else{czm_raySegment i=czm_raySegment(root1,root0);return i;}}else{float root=sqrt(difference/w2);czm_raySegment i=czm_raySegment(root,root);return i;}}}else if(q2<1.0){float difference=q2-1.0;float w2=dot(w,w);float product=w2*difference;float discriminant=qw*qw-product;float temp=-qw+sqrt(discriminant);czm_raySegment i=czm_raySegment(0.0,temp/w2);return i;}else{if(qw<0.0){float w2=dot(w,w);czm_raySegment i=czm_raySegment(0.0,-qw/w2);return i;}else{return czm_emptyRaySegment;}}}",
    _m = "vec4 czm_translateRelativeToEye(vec3 high,vec3 low){vec3 highDifference=high-czm_encodedCameraPositionMCHigh;vec3 lowDifference=low-czm_encodedCameraPositionMCLow;return vec4(highDifference+lowDifference,1.0);}",
    mm = "vec2 czm_decompressTextureCoordinates(float encoded){float temp=encoded/4096.0;float xZeroTo4095=floor(temp);float stx=xZeroTo4095/4095.0;float sty=(encoded-xZeroTo4095*4096.0)/4095.0;return vec2(stx,sty);}",
    vm = "#ifdef LOG_DEPTH\nvarying float v_depthFromNearPlusOne;\n#ifdef SHADOW_MAP\nvarying vec3 v_logPositionEC;\n#endif\n#endif\nvec4 czm_updatePositionDepth(vec4 coords){\n#if defined(LOG_DEPTH)\n#ifdef SHADOW_MAP\nvec3 logPositionEC=(czm_inverseProjection*coords).xyz;v_logPositionEC=logPositionEC;\n#endif\ncoords.z=clamp(coords.z/coords.w,-1.0,1.0)*coords.w;\n#endif\nreturn coords;}void czm_vertexLogDepth(){\n#ifdef LOG_DEPTH\nv_depthFromNearPlusOne=(gl_Position.w-czm_currentFrustum.x)+1.0;gl_Position=czm_updatePositionDepth(gl_Position);\n#endif\n}/***Writes the logarithmic depth to gl_Position using the provided clip coordinates.*<p>*An example use case for this function would be moving the vertex in window coordinates*before converting back to clip coordinates. Use the original vertex clip coordinates.*</p>*@name czm_vertexLogDepth*@glslFunction**@param{vec4}clipCoords The vertex in clip coordinates.**@example*czm_vertexLogDepth(czm_projection*vec4(positionEyeCoordinates,1.0));*/void czm_vertexLogDepth(vec4 clipCoords){\n#ifdef LOG_DEPTH\nv_depthFromNearPlusOne=(clipCoords.w-czm_currentFrustum.x)+1.0;czm_updatePositionDepth(clipCoords);\n#endif\n}",
    pm = "#ifdef LOG_DEPTH\nvarying float v_depthFromNearPlusOne;\n#ifdef POLYGON_OFFSET\nuniform vec2 u_polygonOffset;\n#endif\n#endif\nvoid czm_writeLogDepth(float depth){\n#if defined(GL_EXT_frag_depth) && defined(LOG_DEPTH)\nif(depth<=0.9999999||depth>czm_farDepthFromNearPlusOne){discard;}\n#ifdef POLYGON_OFFSET\nfloat factor=u_polygonOffset[0];float units=u_polygonOffset[1];\n#ifdef GL_OES_standard_derivatives\nfloat x=dFdx(depth);float y=dFdy(depth);float m=sqrt(x*x+y*y);depth+=m*factor;\n#endif\n#endif\ngl_FragDepthEXT=log2(depth)*czm_oneOverLog2FarDepthFromNearPlusOne;\n#ifdef POLYGON_OFFSET\ngl_FragDepthEXT+=czm_epsilon7*units;\n#endif\n#endif\n}/***Writes the fragment depth to the logarithmic depth buffer.*<p>*Use this when the vertex shader calls{@link czm_vertexlogDepth}.*</p>**@name czm_writeLogDepth*@glslFunction*/void czm_writeLogDepth(){\n#ifdef LOG_DEPTH\nczm_writeLogDepth(v_depthFromNearPlusOne);\n#endif\n}";
const Go = {
    czm_epsilon1: E_,
    czm_epsilon2: C_,
    czm_epsilon3: A_,
    czm_epsilon4: w_,
    czm_epsilon5: R_,
    czm_epsilon6: x_,
    czm_epsilon7: S_,
    czm_infinity: I_,
    czm_oneOverPi: O_,
    czm_oneOverTwoPi: P_,
    czm_pi: N_,
    czm_piOverFour: M_,
    czm_piOverSix: D_,
    czm_piOverThree: b_,
    czm_piOverTwo: L_,
    czm_radiansPerDegree: F_,
    czm_sceneMode2D: B_,
    czm_sceneMode3D: U_,
    czm_sceneModeColumbusView: z_,
    czm_sceneModeMorphing: V_,
    czm_threePiOver2: G_,
    czm_twoPi: H_,
    czm_webMercatorMaxLatitude: W_,
    czm_depthRangeStruct: nm,
    czm_ray: im,
    czm_raySegment: am,
    czm_HSBToRGB: q_,
    czm_HSLToRGB: k_,
    czm_RGBToHSB: Y_,
    czm_RGBToHSL: j_,
    czm_RGBToXYZ: X_,
    czm_XYZToRGB: Z_,
    czm_alphaWeight: K_,
    czm_antialias: Q_,
    czm_approximateSphericalCoordinates: $_,
    czm_backFacing: J_,
    czm_branchFreeTernary: em,
    czm_columbusViewMorph: tm,
    czm_decompressTextureCoordinates: mm,
    czm_gammaCorrect: rm,
    czm_isEmpty: om,
    czm_isFull: sm,
    czm_latitudeToWebMercatorFraction: um,
    czm_metersPerPixel: cm,
    czm_multiplyWithColorBalance: hm,
    czm_nearFarScalar: fm,
    czm_packDepth: lm,
    czm_rayEllipsoidIntersectionInterval: dm,
    czm_translateRelativeToEye: _m,
    czm_vertexLogDepth: vm,
    czm_writeLogDepth: pm
};

function Ef(e) {
    return e = e.replace(/\/\/.*/g, ""), e.replace(/\/\*\*[\s\S]*?\*\//gm, function(t) {
        var a, o;
        for (var r = (o = (a = t.match(/\n/gm)) == null ? void 0 : a.length) != null ? o : 1, n = "", i = 0; i < r; ++i) n += "\n";
        return n
    })
}

function Cf(e, t, r) {
    for (var n, i = 0; i < r.length; ++i) r[i].name === e && (n = r[i]);
    return c(n) || (t = Ef(t), n = {
        name: e,
        glslSource: t,
        dependsOn: [],
        requiredBy: [],
        evaluated: !1
    }, r.push(n)), n
}

function Af(e, t) {
    if (!e.evaluated) {
        e.evaluated = !0;
        var r = e.glslSource.match(/\bczm_[a-zA-Z0-9_]*/g);
        c(r) && r !== null && (r = r.filter(function(n, i) {
            return r.indexOf(n) === i
        }), r.forEach(function(n) {
            if (n !== e.name && Ie._czmBuiltinsAndUniforms.hasOwnProperty(n)) {
                var i = Cf(n, Ie._czmBuiltinsAndUniforms[n], t);
                e.dependsOn.push(i), i.requiredBy.push(e), Af(i, t)
            }
        }))
    }
}

function gm(e) {
    for (var t = [], r = []; e.length > 0;) {
        var n = e.pop();
        r.push(n), n.requiredBy.length === 0 && t.push(n)
    }
    for (; t.length > 0;) {
        var i = t.shift();
        e.push(i);
        for (var a = 0; a < i.dependsOn.length; ++a) {
            var o = i.dependsOn[a],
                s = o.requiredBy.indexOf(i);
            o.requiredBy.splice(s, 1), o.requiredBy.length === 0 && t.push(o)
        }
    }
    for (var h = 0; h < r.length; ++h) r[h].requiredBy.length
}

function Tm(e) {
    var t = [],
        r = Cf("main", e, t);
    Af(r, t), gm(t);
    for (var n = "", i = t.length - 1; i >= 0; --i) n = n + t[i].glslSource + "\n";
    return n.replace(r.glslSource, "")
}

function wf(e, t, r) {
    var n, i, a = "",
        o = e.sources;
    if (c(o))
        for (n = 0, i = o.length; n < i; ++n) a += "\n#line 0\n" + o[n];
    a = Ef(a);
    var s;
    a = a.replace(/#version\s+(.*?)\n/gm, function(g, T) {
        return s = T, "\n"
    });
    var h = [];
    a = a.replace(/#extension.*\n/gm, function(g) {
        return h.push(g), "\n"
    }), a = a.replace(/precision\s(lowp|mediump|highp)\s(float|int);/, "");
    var f = e.pickColorQualifier;
    c(f) && (a = Ie.createPickFragmentShaderSource(a, f));
    var l = "";
    c(s) && (l = "#version " + s + "\n");
    var d = h.length;
    for (n = 0; n < d; n++) l += h[n];
    t && (l += "#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n    #define highp mediump\n#endif\n\n");
    var m = e.defines;
    if (c(m))
        for (n = 0, i = m.length; n < i; ++n) {
            var _ = m[n];
            _.length !== 0 && (l += "#define " + _ + "\n")
        }
    return r.webgl2 && (l += "#define OUTPUT_DECLARATION\n\n"), r.textureFloatLinear && (l += "#define OES_texture_float_linear\n\n"), r.floatingPointTexture && (l += "#define OES_texture_float\n\n"), e.includeBuiltIns && (l += Tm(a)), l += "\n#line 0\n", l += a, r.webgl2 && (l = v_(l, t)), l
}

function Ie(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.pickColorQualifier;
    this.defines = c(e.defines) ? e.defines.slice(0) : [], this.sources = c(e.sources) ? e.sources.slice(0) : [], this.pickColorQualifier = t, this.includeBuiltIns = v(e.includeBuiltIns, !0)
}
Ie.prototype.clone = function() {
    return new Ie({
        sources: this.sources,
        defines: this.defines,
        pickColorQualifier: this.pickColorQualifier,
        includeBuiltIns: this.includeBuiltIns
    })
};
Ie.replaceMain = function(e, t) {
    return t = "void " + t + "()", e.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g, t)
};
Ie.prototype.createCombinedVertexShader = function(e) {
    return wf(this, !1, e)
};
Ie.prototype.createCombinedFragmentShader = function(e) {
    return wf(this, !0, e)
};
Ie._czmBuiltinsAndUniforms = {};
for (var Ho in Go) Go.hasOwnProperty(Ho) && (Ie._czmBuiltinsAndUniforms[Ho] = Go[Ho]);
for (var la in qa)
    if (qa.hasOwnProperty(la)) {
        var $u = qa[la];
        typeof $u.getDeclaration == "function" && (Ie._czmBuiltinsAndUniforms[la] = $u.getDeclaration(la))
    } Ie.createPickVertexShaderSource = E("ShaderSource.createPickVertexShaderSource");
Ie.createPickFragmentShaderSource = E("ShaderSource.createPickFragmentShaderSource");
Ie.findVarying = function(e, t) {
    for (var r = e.sources, n = t.length, i = 0; i < n; ++i)
        for (var a = t[i], o = r.length, s = 0; s < o; ++s)
            if (r[s].indexOf(a) !== -1) return a
};
var ym = ["v_normalEC", "v_normal"];
Ie.findNormalVarying = function(e) {
    return Ie.findVarying(e, ym)
};
var Em = ["v_positionEC"];
Ie.findPositionVarying = function(e) {
    return Ie.findVarying(e, Em)
};

function fo() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = Math.random() * 16 | 0,
            r = e === "x" ? t : t & 3 | 8;
        return r.toString(16)
    })
}
var pe = {
    UNSIGNED_BYTE: w.UNSIGNED_BYTE,
    UNSIGNED_SHORT: w.UNSIGNED_SHORT,
    UNSIGNED_INT: w.UNSIGNED_INT,
    FLOAT: w.FLOAT,
    HALF_FLOAT: w.HALF_FLOAT_OES,
    UNSIGNED_INT_24_8: w.UNSIGNED_INT_24_8,
    UNSIGNED_SHORT_4_4_4_4: w.UNSIGNED_SHORT_4_4_4_4,
    UNSIGNED_SHORT_5_5_5_1: w.UNSIGNED_SHORT_5_5_5_1,
    UNSIGNED_SHORT_5_6_5: w.UNSIGNED_SHORT_5_6_5
};
pe.toWebGLConstant = function(e, t) {
    switch (e) {
        case pe.UNSIGNED_BYTE:
            return w.UNSIGNED_BYTE;
        case pe.UNSIGNED_SHORT:
            return w.UNSIGNED_SHORT;
        case pe.UNSIGNED_INT:
            return w.UNSIGNED_INT;
        case pe.FLOAT:
            return w.FLOAT;
        case pe.HALF_FLOAT:
            return t.webgl2 ? w.HALF_FLOAT : w.HALF_FLOAT_OES;
        case pe.UNSIGNED_INT_24_8:
            return w.UNSIGNED_INT_24_8;
        case pe.UNSIGNED_SHORT_4_4_4_4:
            return w.UNSIGNED_SHORT_4_4_4_4;
        case pe.UNSIGNED_SHORT_5_5_5_1:
            return w.UNSIGNED_SHORT_5_5_5_1;
        case pe.UNSIGNED_SHORT_5_6_5:
            return pe.UNSIGNED_SHORT_5_6_5
    }
};
pe.isPacked = function(e) {
    return e === pe.UNSIGNED_INT_24_8 || e === pe.UNSIGNED_SHORT_4_4_4_4 || e === pe.UNSIGNED_SHORT_5_5_5_1 || e === pe.UNSIGNED_SHORT_5_6_5
};
pe.sizeInBytes = function(e) {
    switch (e) {
        case pe.UNSIGNED_BYTE:
            return 1;
        case pe.UNSIGNED_SHORT:
        case pe.UNSIGNED_SHORT_4_4_4_4:
        case pe.UNSIGNED_SHORT_5_5_5_1:
        case pe.UNSIGNED_SHORT_5_6_5:
        case pe.HALF_FLOAT:
            return 2;
        case pe.UNSIGNED_INT:
        case pe.FLOAT:
        case pe.UNSIGNED_INT_24_8:
            return 4
    }
};
pe.validate = function(e) {
    return e === pe.UNSIGNED_BYTE || e === pe.UNSIGNED_SHORT || e === pe.UNSIGNED_INT || e === pe.FLOAT || e === pe.HALF_FLOAT || e === pe.UNSIGNED_INT_24_8 || e === pe.UNSIGNED_SHORT_4_4_4_4 || e === pe.UNSIGNED_SHORT_5_5_5_1 || e === pe.UNSIGNED_SHORT_5_6_5
};
const Me = Object.freeze(pe);
var K = {
    DEPTH_COMPONENT: w.DEPTH_COMPONENT,
    DEPTH_STENCIL: w.DEPTH_STENCIL,
    ALPHA: w.ALPHA,
    RGB: w.RGB,
    RGBA: w.RGBA,
    LUMINANCE: w.LUMINANCE,
    LUMINANCE_ALPHA: w.LUMINANCE_ALPHA,
    RGB_DXT1: w.COMPRESSED_RGB_S3TC_DXT1_EXT,
    RGBA_DXT1: w.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    RGBA_DXT3: w.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    RGBA_DXT5: w.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    RGB_PVRTC_4BPPV1: w.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
    RGB_PVRTC_2BPPV1: w.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
    RGBA_PVRTC_4BPPV1: w.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
    RGBA_PVRTC_2BPPV1: w.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
    RGB_ETC1: w.COMPRESSED_RGB_ETC1_WEBGL
};
K.componentsLength = function(e) {
    switch (e) {
        case K.RGB:
            return 3;
        case K.RGBA:
            return 4;
        case K.LUMINANCE_ALPHA:
            return 2;
        case K.ALPHA:
        case K.LUMINANCE:
            return 1;
        default:
            return 1
    }
};
K.validate = function(e) {
    return e === K.DEPTH_COMPONENT || e === K.DEPTH_STENCIL || e === K.ALPHA || e === K.RGB || e === K.RGBA || e === K.LUMINANCE || e === K.LUMINANCE_ALPHA || e === K.RGB_DXT1 || e === K.RGBA_DXT1 || e === K.RGBA_DXT3 || e === K.RGBA_DXT5 || e === K.RGB_PVRTC_4BPPV1 || e === K.RGB_PVRTC_2BPPV1 || e === K.RGBA_PVRTC_4BPPV1 || e === K.RGBA_PVRTC_2BPPV1 || e === K.RGB_ETC1
};
K.isColorFormat = function(e) {
    return e === K.ALPHA || e === K.RGB || e === K.RGBA || e === K.LUMINANCE || e === K.LUMINANCE_ALPHA
};
K.isDepthFormat = function(e) {
    return e === K.DEPTH_COMPONENT || e === K.DEPTH_STENCIL
};
K.isCompressedFormat = function(e) {
    return e === K.RGB_DXT1 || e === K.RGBA_DXT1 || e === K.RGBA_DXT3 || e === K.RGBA_DXT5 || e === K.RGB_PVRTC_4BPPV1 || e === K.RGB_PVRTC_2BPPV1 || e === K.RGBA_PVRTC_4BPPV1 || e === K.RGBA_PVRTC_2BPPV1 || e === K.RGB_ETC1
};
K.isDXTFormat = function(e) {
    return e === K.RGB_DXT1 || e === K.RGBA_DXT1 || e === K.RGBA_DXT3 || e === K.RGBA_DXT5
};
K.isPVRTCFormat = function(e) {
    return e === K.RGB_PVRTC_4BPPV1 || e === K.RGB_PVRTC_2BPPV1 || e === K.RGBA_PVRTC_4BPPV1 || e === K.RGBA_PVRTC_2BPPV1
};
K.isETC1Format = function(e) {
    return e === K.RGB_ETC1
};
K.compressedTextureSizeInBytes = E("PixelFormat.compressedTextureSizeInBytes");
K.textureSizeInBytes = function(e, t, r, n) {
    var i = K.componentsLength(e);
    return Me.isPacked(t) && (i = 1), i * Me.sizeInBytes(t) * r * n
};
K.alignmentInBytes = function(e, t, r) {
    var n = K.textureSizeInBytes(e, t, r, 1) % 4;
    return n === 0 ? 4 : n === 2 ? 2 : 1
};
K.createTypedArray = E("PixelFormat.createTypedArray");
K.flipY = E("PixelFormat.flipY");
K.toInternalFormat = function(e, t, r) {
    if (!r.webgl2) return e;
    if (e === K.DEPTH_STENCIL) return w.DEPTH24_STENCIL8;
    if (e === K.DEPTH_COMPONENT) {
        if (t === Me.UNSIGNED_SHORT) return w.DEPTH_COMPONENT16;
        if (t === Me.UNSIGNED_INT) return w.DEPTH_COMPONENT24
    }
    if (t === Me.FLOAT) switch (e) {
        case K.RGBA:
            return w.RGBA32F;
        case K.RGB:
            return w.RGB32F;
        case K.RG:
            return w.RG32F;
        case K.R:
            return w.R32F
    }
    if (t === Me.HALF_FLOAT) switch (e) {
        case K.RGBA:
            return w.RGBA16F;
        case K.RGB:
            return w.RGB16F;
        case K.RG:
            return w.RG16F;
        case K.R:
            return w.R16F
    }
    return e
};
const je = Object.freeze(K);
var Ya = {
    DONT_CARE: w.DONT_CARE,
    FASTEST: w.FASTEST,
    NICEST: w.NICEST,
    validate: function(e) {
        return e === Ya.DONT_CARE || e === Ya.FASTEST || e === Ya.NICEST
    }
};
const hu = Object.freeze(Ya);
var ja = {
    NEAREST: w.NEAREST,
    LINEAR: w.LINEAR
};
ja.validate = function(e) {
    return e === ja.NEAREST || e === ja.LINEAR
};
const vn = Object.freeze(ja);
var _n = {
    NEAREST: w.NEAREST,
    LINEAR: w.LINEAR,
    NEAREST_MIPMAP_NEAREST: w.NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST: w.LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR: w.NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR: w.LINEAR_MIPMAP_LINEAR
};
_n.validate = function(e) {
    return e === _n.NEAREST || e === _n.LINEAR || e === _n.NEAREST_MIPMAP_NEAREST || e === _n.LINEAR_MIPMAP_NEAREST || e === _n.NEAREST_MIPMAP_LINEAR || e === _n.LINEAR_MIPMAP_LINEAR
};
const Yt = Object.freeze(_n);
var Xa = {
    CLAMP_TO_EDGE: w.CLAMP_TO_EDGE,
    REPEAT: w.REPEAT,
    MIRRORED_REPEAT: w.MIRRORED_REPEAT,
    validate: function(e) {
        return e === Xa.CLAMP_TO_EDGE || e === Xa.REPEAT || e === Xa.MIRRORED_REPEAT
    }
};
const mr = Object.freeze(Xa);

function yt(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = v(e.wrapS, mr.CLAMP_TO_EDGE),
        r = v(e.wrapT, mr.CLAMP_TO_EDGE),
        n = v(e.minificationFilter, Yt.LINEAR),
        i = v(e.magnificationFilter, vn.LINEAR),
        a = c(e.maximumAnisotropy) ? e.maximumAnisotropy : 1;
    this._wrapS = t, this._wrapT = r, this._minificationFilter = n, this._magnificationFilter = i, this._maximumAnisotropy = a
}
Object.defineProperties(yt.prototype, {
    wrapS: {
        get: function() {
            return this._wrapS
        }
    },
    wrapT: {
        get: function() {
            return this._wrapT
        }
    },
    minificationFilter: {
        get: function() {
            return this._minificationFilter
        }
    },
    magnificationFilter: {
        get: function() {
            return this._magnificationFilter
        }
    },
    maximumAnisotropy: {
        get: function() {
            return this._maximumAnisotropy
        }
    }
});
yt.equals = function(e, t) {
    return e === t || c(e) && c(t) && e._wrapS === t._wrapS && e._wrapT === t._wrapT && e._minificationFilter === t._minificationFilter && e._magnificationFilter === t._magnificationFilter && e._maximumAnisotropy === t._maximumAnisotropy
};
yt.NEAREST = Object.freeze(new yt({
    wrapS: mr.CLAMP_TO_EDGE,
    wrapT: mr.CLAMP_TO_EDGE,
    minificationFilter: Yt.NEAREST,
    magnificationFilter: vn.NEAREST
}));

function Ze(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context,
        r = e.width,
        n = e.height,
        i = e.source;
    c(i) && (c(r) || (r = v(i.videoWidth, i.width)), c(n) || (n = v(i.videoHeight, i.height)));
    var a = v(e.pixelFormat, je.RGBA),
        o = v(e.pixelDatatype, Me.UNSIGNED_BYTE),
        s = je.toInternalFormat(a, o, t),
        h = je.isCompressedFormat(s),
        f = e.preMultiplyAlpha || a === je.RGB || a === je.LUMINANCE,
        l = v(e.flipY, !0),
        d = !0,
        m = t._gl,
        _ = m.TEXTURE_2D,
        g = m.createTexture();
    m.activeTexture(m.TEXTURE0), m.bindTexture(_, g);
    var T = 4;
    if (c(i) && c(i.arrayBufferView) && !h && (T = je.alignmentInBytes(a, o, r)), m.pixelStorei(m.UNPACK_ALIGNMENT, T), c(i))
        if (c(i.arrayBufferView)) {
            m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, !1);
            var C = i.arrayBufferView;
            if (h) m.compressedTexImage2D(_, 0, s, r, n, 0, C);
            else if (l && (C = je.flipY(C, a, o, r, n)), m.texImage2D(_, 0, s, r, n, 0, a, Me.toWebGLConstant(o, t), C), c(i.mipLevels))
                for (var A = r, S = n, x = 0; x < i.mipLevels.length; ++x) A = Math.floor(A / 2) | 0, A < 1 && (A = 1), S = Math.floor(S / 2) | 0, S < 1 && (S = 1), m.texImage2D(_, x + 1, s, A, S, 0, a, Me.toWebGLConstant(o, t), i.mipLevels[x])
        } else c(i.framebuffer) ? (m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, !1), i.framebuffer !== t.defaultFramebuffer && i.framebuffer._bind(), m.copyTexImage2D(_, 0, s, i.xOffset, i.yOffset, r, n, 0), i.framebuffer !== t.defaultFramebuffer && i.framebuffer._unBind()) : (m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, f), m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, l), m.texImage2D(_, 0, s, a, Me.toWebGLConstant(o, t), i));
    else m.texImage2D(_, 0, s, r, n, 0, a, Me.toWebGLConstant(o, t), null), d = !1;
    m.bindTexture(_, null);
    var I;
    h ? I = je.compressedTextureSizeInBytes(a, r, n) : I = je.textureSizeInBytes(a, o, r, n), this._id = fo(), this._context = t, this._textureFilterAnisotropic = t._textureFilterAnisotropic, this._textureTarget = _, this._texture = g, this._internalFormat = s, this._pixelFormat = a, this._pixelDatatype = o, this._width = r, this._height = n, this._dimensions = new R(r, n), this._hasMipmap = !1, this._sizeInBytes = I, this._preMultiplyAlpha = f, this._flipY = l, this._initialized = d, this._sampler = void 0, this.sampler = c(e.sampler) ? e.sampler : new yt
}
Ze.create = function(e) {
    return new Ze(e)
};
Ze.fromFramebuffer = E("Texture.fromFramebuffer");
Object.defineProperties(Ze.prototype, {
    id: {
        get: function() {
            return this._id
        }
    },
    sampler: {
        get: function() {
            return this._sampler
        },
        set: function(e) {
            var t = e.minificationFilter,
                r = e.magnificationFilter,
                n = this._context,
                i = this._pixelFormat,
                a = this._pixelDatatype,
                o = t === Yt.NEAREST_MIPMAP_NEAREST || t === Yt.NEAREST_MIPMAP_LINEAR || t === Yt.LINEAR_MIPMAP_NEAREST || t === Yt.LINEAR_MIPMAP_LINEAR;
            (a === Me.FLOAT && !n.textureFloatLinear || a === Me.HALF_FLOAT && !n.textureHalfFloatLinear) && (t = o ? Yt.NEAREST_MIPMAP_NEAREST : Yt.NEAREST, r = vn.NEAREST), n.webgl2 && je.isDepthFormat(i) && (t = Yt.NEAREST, r = vn.NEAREST);
            var s = n._gl,
                h = this._textureTarget;
            s.activeTexture(s.TEXTURE0), s.bindTexture(h, this._texture), s.texParameteri(h, s.TEXTURE_MIN_FILTER, t), s.texParameteri(h, s.TEXTURE_MAG_FILTER, r), s.texParameteri(h, s.TEXTURE_WRAP_S, e.wrapS), s.texParameteri(h, s.TEXTURE_WRAP_T, e.wrapT), c(this._textureFilterAnisotropic) && s.texParameteri(h, this._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, e.maximumAnisotropy), s.bindTexture(h, null), this._sampler = e
        }
    },
    pixelFormat: {
        get: function() {
            return this._pixelFormat
        }
    },
    pixelDatatype: {
        get: function() {
            return this._pixelDatatype
        }
    },
    dimensions: {
        get: function() {
            return this._dimensions
        }
    },
    preMultiplyAlpha: {
        get: function() {
            return this._preMultiplyAlpha
        }
    },
    flipY: {
        get: function() {
            return this._flipY
        }
    },
    width: {
        get: function() {
            return this._width
        }
    },
    height: {
        get: function() {
            return this._height
        }
    },
    sizeInBytes: {
        get: function() {
            return this._hasMipmap ? Math.floor(this._sizeInBytes * 4 / 3) : this._sizeInBytes
        }
    },
    _target: {
        get: function() {
            return this._textureTarget
        }
    }
});
Ze.prototype.copyFrom = E("Texture#copyFrom");
Ze.prototype.copyFromFramebuffer = E("Texture.prototype.copyFromFramebuffer");
Ze.prototype.generateMipmap = function(e) {
    e = v(e, hu.DONT_CARE), this._hasMipmap = !0;
    var t = this._context._gl,
        r = this._textureTarget;
    t.hint(t.GENERATE_MIPMAP_HINT, e), t.activeTexture(t.TEXTURE0), t.bindTexture(r, this._texture), t.generateMipmap(r), t.bindTexture(r, null)
};
Ze.prototype.isDestroyed = function() {
    return !1
};
Ze.prototype.destroy = function() {
    return this._context._gl.deleteTexture(this._texture), Je(this)
};
var Cm = {
    NONE: 0,
    TRIANGLES: 1,
    LINES: 2,
    POLYLINES: 3
};
const Am = Object.freeze(Cm);

function z(e, t, r, n) {
    this.x = v(e, 0), this.y = v(t, 0), this.z = v(r, 0), this.w = v(n, 0)
}
var Pi = new u;
z.fromAxisAngle = function(e, t, r) {
    var n = t / 2,
        i = Math.sin(n);
    Pi = u.normalize(e, Pi);
    var a = Pi.x * i,
        o = Pi.y * i,
        s = Pi.z * i,
        h = Math.cos(n);
    return c(r) ? (r.x = a, r.y = o, r.z = s, r.w = h, r) : new z(a, o, s, h)
};
var wm = [1, 2, 0],
    Rm = new Array(3);
z.fromRotationMatrix = function(e, t) {
    var r, n, i, a, o, s = e[P.COLUMN0ROW0],
        h = e[P.COLUMN1ROW1],
        f = e[P.COLUMN2ROW2],
        l = s + h + f;
    if (l > 0) r = Math.sqrt(l + 1), o = .5 * r, r = .5 / r, n = (e[P.COLUMN1ROW2] - e[P.COLUMN2ROW1]) * r, i = (e[P.COLUMN2ROW0] - e[P.COLUMN0ROW2]) * r, a = (e[P.COLUMN0ROW1] - e[P.COLUMN1ROW0]) * r;
    else {
        var d = wm,
            m = 0;
        h > s && (m = 1), f > s && f > h && (m = 2);
        var _ = d[m],
            g = d[_];
        r = Math.sqrt(e[P.getElementIndex(m, m)] - e[P.getElementIndex(_, _)] - e[P.getElementIndex(g, g)] + 1);
        var T = Rm;
        T[m] = .5 * r, r = .5 / r, o = (e[P.getElementIndex(g, _)] - e[P.getElementIndex(_, g)]) * r, T[_] = (e[P.getElementIndex(_, m)] + e[P.getElementIndex(m, _)]) * r, T[g] = (e[P.getElementIndex(g, m)] + e[P.getElementIndex(m, g)]) * r, n = -T[0], i = -T[1], a = -T[2]
    }
    return c(t) ? (t.x = n, t.y = i, t.z = a, t.w = o, t) : new z(n, i, a, o)
};
var Ju = new z,
    ec = new z,
    Wo = new z,
    tc = new z;
z.fromHeadingPitchRoll = function(e, t) {
    return tc = z.fromAxisAngle(u.UNIT_X, e.roll, Ju), Wo = z.fromAxisAngle(u.UNIT_Y, -e.pitch, t), t = z.multiply(Wo, tc, Wo), ec = z.fromAxisAngle(u.UNIT_Z, -e.heading, Ju), z.multiply(ec, t, t)
};
var da = new u,
    qo = new u,
    Rr = new z,
    rc = new z,
    _a = new z;
z.packedLength = 4;
z.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.x, t[r++] = e.y, t[r++] = e.z, t[r] = e.w, t
};
z.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new z), r.x = e[t], r.y = e[t + 1], r.z = e[t + 2], r.w = e[t + 3], r
};
z.packedInterpolationLength = 3;
z.convertPackedArrayForInterpolation = function(e, t, r, n) {
    z.unpack(e, r * 4, _a), z.conjugate(_a, _a);
    for (var i = 0, a = r - t + 1; i < a; i++) {
        var o = i * 3;
        z.unpack(e, (t + i) * 4, Rr), z.multiply(Rr, _a, Rr), Rr.w < 0 && z.negate(Rr, Rr), z.computeAxis(Rr, da);
        var s = z.computeAngle(Rr);
        c(n) || (n = []), n[o] = da.x * s, n[o + 1] = da.y * s, n[o + 2] = da.z * s
    }
};
z.unpackInterpolationResult = function(e, t, r, n, i) {
    c(i) || (i = new z), u.fromArray(e, 0, qo);
    var a = u.magnitude(qo);
    return z.unpack(t, n * 4, rc), a === 0 ? z.clone(z.IDENTITY, Rr) : z.fromAxisAngle(qo, a, Rr), z.multiply(Rr, rc, i)
};
z.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t) : new z(e.x, e.y, e.z, e.w)
};
z.conjugate = function(e, t) {
    return t.x = -e.x, t.y = -e.y, t.z = -e.z, t.w = e.w, t
};
z.magnitudeSquared = function(e) {
    return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
};
z.magnitude = function(e) {
    return Math.sqrt(z.magnitudeSquared(e))
};
z.normalize = function(e, t) {
    var r = 1 / z.magnitude(e),
        n = e.x * r,
        i = e.y * r,
        a = e.z * r,
        o = e.w * r;
    return t.x = n, t.y = i, t.z = a, t.w = o, t
};
z.inverse = function(e, t) {
    var r = z.magnitudeSquared(e);
    return t = z.conjugate(e, t), z.multiplyByScalar(t, 1 / r, t)
};
z.add = function(e, t, r) {
    return r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r.w = e.w + t.w, r
};
z.subtract = function(e, t, r) {
    return r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z, r.w = e.w - t.w, r
};
z.negate = function(e, t) {
    return t.x = -e.x, t.y = -e.y, t.z = -e.z, t.w = -e.w, t
};
z.dot = function(e, t) {
    return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
};
z.multiply = function(e, t, r) {
    var n = e.x,
        i = e.y,
        a = e.z,
        o = e.w,
        s = t.x,
        h = t.y,
        f = t.z,
        l = t.w,
        d = o * s + n * l + i * f - a * h,
        m = o * h - n * f + i * l + a * s,
        _ = o * f + n * h - i * s + a * l,
        g = o * l - n * s - i * h - a * f;
    return r.x = d, r.y = m, r.z = _, r.w = g, r
};
z.multiplyByScalar = function(e, t, r) {
    return r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r.w = e.w * t, r
};
z.divideByScalar = function(e, t, r) {
    return r.x = e.x / t, r.y = e.y / t, r.z = e.z / t, r.w = e.w / t, r
};
z.computeAxis = function(e, t) {
    var r = e.w;
    if (Math.abs(r - 1) < p.EPSILON6) return t.x = t.y = t.z = 0, t;
    var n = 1 / Math.sqrt(1 - r * r);
    return t.x = e.x * n, t.y = e.y * n, t.z = e.z * n, t
};
z.computeAngle = function(e) {
    return Math.abs(e.w - 1) < p.EPSILON6 ? 0 : 2 * Math.acos(e.w)
};
var ko = new z;
z.lerp = function(e, t, r, n) {
    return ko = z.multiplyByScalar(t, r, ko), n = z.multiplyByScalar(e, 1 - r, n), z.add(ko, n, n)
};
var nc = new z,
    Yo = new z,
    jo = new z;
z.slerp = function(e, t, r, n) {
    var i = z.dot(e, t),
        a = t;
    if (i < 0 && (i = -i, a = nc = z.negate(t, nc)), 1 - i < p.EPSILON6) return z.lerp(e, a, r, n);
    var o = Math.acos(i);
    return Yo = z.multiplyByScalar(e, Math.sin((1 - r) * o), Yo), jo = z.multiplyByScalar(a, Math.sin(r * o), jo), n = z.add(Yo, jo, n), z.multiplyByScalar(n, 1 / Math.sin(o), n)
};
z.log = function(e, t) {
    var r = p.acosClamped(e.w),
        n = 0;
    return r !== 0 && (n = r / Math.sin(r)), u.multiplyByScalar(e, n, t)
};
z.exp = function(e, t) {
    var r = u.magnitude(e),
        n = 0;
    return r !== 0 && (n = Math.sin(r) / r), t.x = e.x * n, t.y = e.y * n, t.z = e.z * n, t.w = Math.cos(r), t
};
var xm = new u,
    Sm = new u,
    Gi = new z,
    ii = new z;
z.computeInnerQuadrangle = function(e, t, r, n) {
    var i = z.conjugate(t, Gi);
    z.multiply(i, r, ii);
    var a = z.log(ii, xm);
    z.multiply(i, e, ii);
    var o = z.log(ii, Sm);
    return u.add(a, o, a), u.multiplyByScalar(a, .25, a), u.negate(a, a), z.exp(a, Gi), z.multiply(t, Gi, n)
};
z.squad = function(e, t, r, n, i, a) {
    var o = z.slerp(e, t, i, Gi),
        s = z.slerp(r, n, i, ii);
    return z.slerp(o, s, 2 * i * (1 - i), a)
};
z.fastSlerp = E("Quaternion.fastSlerp");
z.fastSquad = function(e, t, r, n, i, a) {
    var o = z.fastSlerp(e, t, i, Gi),
        s = z.fastSlerp(r, n, i, ii);
    return z.fastSlerp(o, s, 2 * i * (1 - i), a)
};
z.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w
};
z.equalsEpsilon = function(e, t, r) {
    return r = v(r, 0), e === t || c(e) && c(t) && Math.abs(e.x - t.x) <= r && Math.abs(e.y - t.y) <= r && Math.abs(e.z - t.z) <= r && Math.abs(e.w - t.w) <= r
};
z.ZERO = Object.freeze(new z(0, 0, 0, 0));
z.IDENTITY = Object.freeze(new z(0, 0, 0, 1));
z.prototype.clone = function(e) {
    return z.clone(this, e)
};
z.prototype.equals = function(e) {
    return z.equals(this, e)
};
z.prototype.equalsEpsilon = function(e, t) {
    return z.equalsEpsilon(this, e, t)
};
z.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
};

function Zi(e) {
    e = v(e, v.EMPTY_OBJECT), this.attributes = e.attributes, this.indices = e.indices, this.primitiveType = v(e.primitiveType, zn.TRIANGLES), this.boundingSphere = e.boundingSphere, this.geometryType = v(e.geometryType, Am.NONE), this.boundingSphereCV = e.boundingSphereCV, this.offsetAttribute = e.offsetAttribute
}
Zi.computeNumberOfVertices = function(e) {
    var t = -1;
    for (var r in e.attributes)
        if (e.attributes.hasOwnProperty(r) && c(e.attributes[r]) && c(e.attributes[r].values)) {
            var n = e.attributes[r],
                i = n.values.length / n.componentsPerAttribute;
            t = i
        } return t
};
Zi._textureCoordinateRotationPoints = E("Geometry._textureCoordinateRotationPoints");

function Im(e, t, r, n) {
    var i = c(t.vertexBuffer),
        a = c(t.value),
        o = t.value ? t.value.length : t.componentsPerAttribute,
        s = {
            index: v(t.index, r),
            enabled: v(t.enabled, !0),
            vertexBuffer: t.vertexBuffer,
            value: a ? t.value.slice(0) : void 0,
            componentsPerAttribute: o,
            componentDatatype: v(t.componentDatatype, Be.FLOAT),
            normalize: v(t.normalize, !1),
            offsetInBytes: v(t.offsetInBytes, 0),
            strideInBytes: v(t.strideInBytes, 0),
            instanceDivisor: v(t.instanceDivisor, 0)
        };
    if (i) s.vertexAttrib = function(h) {
        var f = this.index;
        h.bindBuffer(h.ARRAY_BUFFER, this.vertexBuffer._getBuffer()), h.vertexAttribPointer(f, this.componentsPerAttribute, this.componentDatatype, this.normalize, this.strideInBytes, this.offsetInBytes), h.enableVertexAttribArray(f), this.instanceDivisor > 0 && (n.glVertexAttribDivisor(f, this.instanceDivisor), n._vertexAttribDivisors[f] = this.instanceDivisor, n._previousDrawInstanced = !0)
    }, s.disableVertexAttribArray = function(h) {
        h.disableVertexAttribArray(this.index), this.instanceDivisor > 0 && n.glVertexAttribDivisor(r, 0)
    };
    else {
        switch (s.componentsPerAttribute) {
            case 1:
                s.vertexAttrib = function(h) {
                    h.vertexAttrib1fv(this.index, this.value)
                };
                break;
            case 2:
                s.vertexAttrib = function(h) {
                    h.vertexAttrib2fv(this.index, this.value)
                };
                break;
            case 3:
                s.vertexAttrib = function(h) {
                    h.vertexAttrib3fv(this.index, this.value)
                };
                break;
            case 4:
                s.vertexAttrib = function(h) {
                    h.vertexAttrib4fv(this.index, this.value)
                };
                break
        }
        s.disableVertexAttribArray = function(h) {}
    }
    e.push(s)
}

function Rf(e, t, r) {
    for (var n = 0; n < t.length; ++n) {
        var i = t[n];
        i.enabled && i.vertexAttrib(e)
    }
    c(r) && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r._getBuffer())
}

function ar(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context,
        r = t._gl,
        n = e.attributes,
        i = e.indexBuffer,
        a, o = [],
        s = 1,
        h = !1,
        f = !1,
        l = n.length;
    for (a = 0; a < l; ++a) Im(o, n[a], a, t);
    for (l = o.length, a = 0; a < l; ++a) {
        var d = o[a];
        if (c(d.vertexBuffer) && d.instanceDivisor === 0) {
            var m = d.strideInBytes || d.componentsPerAttribute * Be.getSizeInBytes(d.componentDatatype);
            s = d.vertexBuffer.sizeInBytes / m;
            break
        }
    }
    for (a = 0; a < l; ++a) o[a].instanceDivisor > 0 && (h = !0), c(o[a].value) && (f = !0);
    var _;
    t.vertexArrayObject && (_ = t.glCreateVertexArray(), t.glBindVertexArray(_), Rf(r, o, i), t.glBindVertexArray(null)), this._numberOfVertices = s, this._hasInstancedAttributes = h, this._hasConstantAttributes = f, this._context = t, this._gl = r, this._vao = _, this._attributes = o, this._indexBuffer = i
}

function ic(e) {
    return e.values.length / e.componentsPerAttribute
}

function Om(e) {
    return Be.getSizeInBytes(e.componentDatatype) * e.componentsPerAttribute
}

function Pm(e) {
    var t, r, n, i = [];
    for (r in e) e.hasOwnProperty(r) && c(e[r]) && c(e[r].values) && (i.push(r), e[r].componentDatatype === Be.DOUBLE && (e[r].componentDatatype = Be.FLOAT, e[r].values = Be.createTypedArray(Be.FLOAT, e[r].values)));
    var a, o = i.length;
    if (o > 0)
        for (a = ic(e[i[0]]), t = 1; t < o; ++t) {
            var s = ic(e[i[t]]);
            if (s !== a) throw new lt("Each attribute list must have the same number of vertices.  Attribute " + i[t] + " has a different number of vertices (" + s.toString() + ") than attribute " + i[0] + " (" + a.toString() + ").")
        }
    i.sort(function(F, b) {
        return Be.getSizeInBytes(e[b].componentDatatype) - Be.getSizeInBytes(e[F].componentDatatype)
    });
    var h = 0,
        f = {};
    for (t = 0; t < o; ++t) r = i[t], n = e[r], f[r] = h, h += Om(n);
    if (h > 0) {
        var l = Be.getSizeInBytes(e[i[0]].componentDatatype),
            d = h % l;
        d !== 0 && (h += l - d);
        var m = a * h,
            _ = new ArrayBuffer(m),
            g = {};
        for (t = 0; t < o; ++t) {
            r = i[t];
            var T = Be.getSizeInBytes(e[r].componentDatatype);
            g[r] = {
                pointer: Be.createTypedArray(e[r].componentDatatype, _),
                index: f[r] / T,
                strideInComponentType: h / T
            }
        }
        for (t = 0; t < a; ++t)
            for (var C = 0; C < o; ++C) {
                r = i[C], n = e[r];
                for (var A = n.values, S = g[r], x = S.pointer, I = n.componentsPerAttribute, O = 0; O < I; ++O) x[S.index + O] = A[t * I + O];
                S.index += S.strideInComponentType
            }
        return {
            buffer: _,
            offsetsInBytes: f,
            vertexSizeInBytes: h
        }
    }
}
ar.fromGeometry = function(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context,
        r = v(e.geometry, v.EMPTY_OBJECT),
        n = v(e.bufferUsage, nn.DYNAMIC_DRAW),
        i = v(e.attributeLocations, v.EMPTY_OBJECT),
        a = v(e.interleave, !1),
        o = e.vertexArrayAttributes,
        s, h, f, l = c(o) ? o : [],
        d = r.attributes;
    if (a) {
        var m = Pm(d);
        if (c(m)) {
            f = nt.createVertexBuffer({
                context: t,
                typedArray: m.buffer,
                usage: n
            });
            var _ = m.offsetsInBytes,
                g = m.vertexSizeInBytes;
            for (s in d) d.hasOwnProperty(s) && c(d[s]) && (h = d[s], c(h.values) ? l.push({
                index: i[s],
                vertexBuffer: f,
                componentDatatype: h.componentDatatype,
                componentsPerAttribute: h.componentsPerAttribute,
                normalize: h.normalize,
                offsetInBytes: _[s],
                strideInBytes: g
            }) : l.push({
                index: i[s],
                value: h.value,
                componentDatatype: h.componentDatatype,
                normalize: h.normalize
            }))
        }
    } else
        for (s in d)
            if (d.hasOwnProperty(s) && c(d[s])) {
                h = d[s];
                var T = h.componentDatatype;
                T === Be.DOUBLE && (T = Be.FLOAT), f = void 0, c(h.values) && (f = nt.createVertexBuffer({
                    context: t,
                    typedArray: Be.createTypedArray(T, h.values),
                    usage: n
                })), l.push({
                    index: i[s],
                    vertexBuffer: f,
                    value: h.value,
                    componentDatatype: T,
                    componentsPerAttribute: h.componentsPerAttribute,
                    normalize: h.normalize
                })
            } var C, A = r.indices;
    return c(A) && (Zi.computeNumberOfVertices(r) >= p.SIXTY_FOUR_KILOBYTES && t.elementIndexUint ? C = nt.createIndexBuffer({
        context: t,
        typedArray: new Uint32Array(A),
        usage: n,
        indexDatatype: si.UNSIGNED_INT
    }) : C = nt.createIndexBuffer({
        context: t,
        typedArray: new Uint16Array(A),
        usage: n,
        indexDatatype: si.UNSIGNED_SHORT
    })), new ar({
        context: t,
        attributes: l,
        indexBuffer: C
    })
};
Object.defineProperties(ar.prototype, {
    numberOfAttributes: {
        get: function() {
            return this._attributes.length
        }
    },
    numberOfVertices: {
        get: function() {
            return this._numberOfVertices
        }
    },
    indexBuffer: {
        get: function() {
            return this._indexBuffer
        }
    }
});
ar.prototype.getAttribute = function(e) {
    return this._attributes[e]
};

function Nm(e) {
    var t = e._context,
        r = e._hasInstancedAttributes;
    if (!(!r && !t._previousDrawInstanced)) {
        t._previousDrawInstanced = r;
        var n = t._vertexAttribDivisors,
            i = e._attributes,
            a = oe.maximumVertexAttributes,
            o;
        if (r) {
            var s = i.length;
            for (o = 0; o < s; ++o) {
                var h = i[o];
                if (h.enabled) {
                    var f = h.instanceDivisor,
                        l = h.index;
                    f !== n[l] && (t.glVertexAttribDivisor(l, f), n[l] = f)
                }
            }
        } else
            for (o = 0; o < a; ++o) n[o] > 0 && (t.glVertexAttribDivisor(o, 0), n[o] = 0)
    }
}

function Mm(e, t) {
    for (var r = e._attributes, n = r.length, i = 0; i < n; ++i) {
        var a = r[i];
        a.enabled && c(a.value) && a.vertexAttrib(t)
    }
}
ar.prototype._bind = function() {
    c(this._vao) ? (this._context.glBindVertexArray(this._vao), this._context.instancedArrays && Nm(this), this._hasConstantAttributes && Mm(this, this._gl)) : Rf(this._gl, this._attributes, this._indexBuffer)
};
ar.prototype._unBind = function() {
    if (c(this._vao)) this._context.glBindVertexArray(null);
    else {
        for (var e = this._attributes, t = this._gl, r = 0; r < e.length; ++r) {
            var n = e[r];
            n.enabled && n.disableVertexAttribArray(t)
        }
        this._indexBuffer && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
    }
};
ar.prototype.isDestroyed = function() {
    return !1
};
ar.prototype.destroy = function() {
    for (var e = this._attributes, t = 0; t < e.length; ++t) {
        var r = e[t].vertexBuffer;
        c(r) && !r.isDestroyed() && r.vertexArrayDestroyable && r.destroy()
    }
    var n = this._indexBuffer;
    return c(n) && !n.isDestroyed() && n.vertexArrayDestroyable && n.destroy(), c(this._vao) && this._context.glDeleteVertexArray(this._vao), Je(this)
};

function Et(e, t, r, n) {
    var i = Et._verifyAttributes(t);
    r = v(r, 0);
    for (var a = [], o = {}, s, h, f = i.length, l = 0; l < f; ++l) {
        var d = i[l];
        if (d.vertexBuffer) {
            a.push(d);
            continue
        }
        h = d.usage, s = o[h], c(s) || (s = o[h] = []), s.push(d)
    }

    function m(C, A) {
        return Be.getSizeInBytes(A.componentDatatype) - Be.getSizeInBytes(C.componentDatatype)
    }
    this._allBuffers = [];
    for (h in o)
        if (o.hasOwnProperty(h)) {
            s = o[h], s.sort(m);
            var _ = Et._vertexSizeInBytes(s),
                g = s[0].usage,
                T = {
                    vertexSizeInBytes: _,
                    vertexBuffer: void 0,
                    usage: g,
                    needsCommit: !1,
                    arrayBuffer: void 0,
                    arrayViews: Et._createArrayViews(s, _)
                };
            this._allBuffers.push(T)
        } this._size = 0, this._instanced = v(n, !1), this._precreated = a, this._context = e, this.writers = void 0, this.va = void 0, this.resize(r)
}
Et._verifyAttributes = function(e) {
    for (var t = [], r = 0; r < e.length; ++r) {
        var n = e[r],
            i = {
                index: v(n.index, r),
                enabled: v(n.enabled, !0),
                componentsPerAttribute: n.componentsPerAttribute,
                componentDatatype: v(n.componentDatatype, Be.FLOAT),
                normalize: v(n.normalize, !1),
                vertexBuffer: n.vertexBuffer,
                usage: v(n.usage, nn.STATIC_DRAW)
            };
        t.push(i)
    }
    for (var a = new Array(t.length), o = 0; o < t.length; ++o) {
        var s = t[o],
            h = s.index;
        a[h] = !0
    }
    return t
};
Et._vertexSizeInBytes = function(e) {
    for (var t = 0, r = e.length, n = 0; n < r; ++n) {
        var i = e[n];
        t += i.componentsPerAttribute * Be.getSizeInBytes(i.componentDatatype)
    }
    var a = r > 0 ? Be.getSizeInBytes(e[0].componentDatatype) : 0,
        o = a > 0 ? t % a : 0,
        s = o === 0 ? 0 : a - o;
    return t += s, t
};
Et._createArrayViews = function(e, t) {
    for (var r = [], n = 0, i = e.length, a = 0; a < i; ++a) {
        var o = e[a],
            s = o.componentDatatype;
        r.push({
            index: o.index,
            enabled: o.enabled,
            componentsPerAttribute: o.componentsPerAttribute,
            componentDatatype: s,
            normalize: o.normalize,
            offsetInBytes: n,
            vertexSizeInComponentType: t / Be.getSizeInBytes(s),
            view: void 0
        }), n += o.componentsPerAttribute * Be.getSizeInBytes(s)
    }
    return r
};
Et.prototype.resize = function(e) {
    this._size = e;
    var t = this._allBuffers;
    this.writers = [];
    for (var r = 0, n = t.length; r < n; ++r) {
        var i = t[r];
        Et._resize(i, this._size), Et._appendWriters(this.writers, i)
    }
    fu(this)
};
Et._resize = function(e, t) {
    if (e.vertexSizeInBytes > 0) {
        var r = new ArrayBuffer(t * e.vertexSizeInBytes);
        if (c(e.arrayBuffer))
            for (var n = new Uint8Array(r), i = new Uint8Array(e.arrayBuffer), a = i.length, o = 0; o < a; ++o) n[o] = i[o];
        for (var s = e.arrayViews, h = s.length, f = 0; f < h; ++f) {
            var l = s[f];
            l.view = Be.createArrayBufferView(l.componentDatatype, r, l.offsetInBytes)
        }
        e.arrayBuffer = r
    }
};
var Dm = [function(e, t, r) {
    return function(n, i) {
        t[n * r] = i, e.needsCommit = !0
    }
}, function(e, t, r) {
    return function(n, i, a) {
        var o = n * r;
        t[o] = i, t[o + 1] = a, e.needsCommit = !0
    }
}, function(e, t, r) {
    return function(n, i, a, o) {
        var s = n * r;
        t[s] = i, t[s + 1] = a, t[s + 2] = o, e.needsCommit = !0
    }
}, function(e, t, r) {
    return function(n, i, a, o, s) {
        var h = n * r;
        t[h] = i, t[h + 1] = a, t[h + 2] = o, t[h + 3] = s, e.needsCommit = !0
    }
}];
Et._appendWriters = function(e, t) {
    for (var r = t.arrayViews, n = r.length, i = 0; i < n; ++i) {
        var a = r[i];
        e[a.index] = Dm[a.componentsPerAttribute - 1](t, a.view, a.vertexSizeInComponentType)
    }
};
Et.prototype.commit = function(e) {
    var t = !1,
        r = this._allBuffers,
        n, i, a;
    for (i = 0, a = r.length; i < a; ++i) n = r[i], t = bm(this, n) || t;
    if (t || !c(this.va)) {
        fu(this);
        for (var o = this.va = [], s = p.SIXTY_FOUR_KILOBYTES - 4, h = c(e) && !this._instanced ? Math.ceil(this._size / s) : 1, f = 0; f < h; ++f) {
            var l = [];
            for (i = 0, a = r.length; i < a; ++i) {
                n = r[i];
                var d = f * (n.vertexSizeInBytes * s);
                Et._appendAttributes(l, n, d, this._instanced)
            }
            l = l.concat(this._precreated), o.push({
                va: new ar({
                    context: this._context,
                    attributes: l,
                    indexBuffer: e
                }),
                indicesCount: 1.5 * (f !== h - 1 ? s : this._size % s)
            })
        }
    }
};

function bm(e, t) {
    if (t.needsCommit && t.vertexSizeInBytes > 0) {
        t.needsCommit = !1;
        var r = t.vertexBuffer,
            n = e._size * t.vertexSizeInBytes,
            i = c(r);
        if (!i || r.sizeInBytes < n) return i && r.destroy(), t.vertexBuffer = nt.createVertexBuffer({
            context: e._context,
            typedArray: t.arrayBuffer,
            usage: t.usage
        }), t.vertexBuffer.vertexArrayDestroyable = !1, !0;
        t.vertexBuffer.copyFromArrayView(t.arrayBuffer)
    }
    return !1
}
Et._appendAttributes = function(e, t, r, n) {
    for (var i = t.arrayViews, a = i.length, o = 0; o < a; ++o) {
        var s = i[o];
        e.push({
            index: s.index,
            enabled: s.enabled,
            componentsPerAttribute: s.componentsPerAttribute,
            componentDatatype: s.componentDatatype,
            normalize: s.normalize,
            vertexBuffer: t.vertexBuffer,
            offsetInBytes: r + s.offsetInBytes,
            strideInBytes: t.vertexSizeInBytes,
            instanceDivisor: n ? 1 : 0
        })
    }
};
Et.prototype.subCommit = E("VertexArrayFacade#subCommit");
Et.prototype.endSubCommits = function() {
    for (var e = this._allBuffers, t = 0, r = e.length; t < r; ++t) e[t].needsCommit = !1
};

function fu(e) {
    var t = e.va;
    if (c(t)) {
        for (var r = t.length, n = 0; n < r; ++n) t[n].va.destroy();
        e.va = void 0
    }
}
Et.prototype.isDestroyed = function() {
    return !1
};
Et.prototype.destroy = function() {
    for (var e = this._allBuffers, t = 0, r = e.length; t < r; ++t) {
        var n = e[t];
        n.vertexBuffer = n.vertexBuffer && n.vertexBuffer.destroy()
    }
    return fu(this), Je(this)
};
var Lm = {
    ADD: w.FUNC_ADD,
    SUBTRACT: w.FUNC_SUBTRACT,
    REVERSE_SUBTRACT: w.FUNC_REVERSE_SUBTRACT,
    MIN: w.MIN,
    MAX: w.MAX
};
const $n = Object.freeze(Lm);
var Fm = {
    ZERO: w.ZERO,
    ONE: w.ONE,
    SOURCE_COLOR: w.SRC_COLOR,
    ONE_MINUS_SOURCE_COLOR: w.ONE_MINUS_SRC_COLOR,
    DESTINATION_COLOR: w.DST_COLOR,
    ONE_MINUS_DESTINATION_COLOR: w.ONE_MINUS_DST_COLOR,
    SOURCE_ALPHA: w.SRC_ALPHA,
    ONE_MINUS_SOURCE_ALPHA: w.ONE_MINUS_SRC_ALPHA,
    DESTINATION_ALPHA: w.DST_ALPHA,
    ONE_MINUS_DESTINATION_ALPHA: w.ONE_MINUS_DST_ALPHA,
    CONSTANT_COLOR: w.CONSTANT_COLOR,
    ONE_MINUS_CONSTANT_COLOR: w.ONE_MINUS_CONSTANT_COLOR,
    CONSTANT_ALPHA: w.CONSTANT_ALPHA,
    ONE_MINUS_CONSTANT_ALPHA: w.ONE_MINUS_CONSTANT_ALPHA,
    SOURCE_ALPHA_SATURATE: w.SRC_ALPHA_SATURATE
};
const lr = Object.freeze(Fm);
var Bm = {
    DISABLED: Object.freeze({
        enabled: !1
    }),
    ALPHA_BLEND: Object.freeze({
        enabled: !0,
        equationRgb: $n.ADD,
        equationAlpha: $n.ADD,
        functionSourceRgb: lr.SOURCE_ALPHA,
        functionSourceAlpha: lr.ONE,
        functionDestinationRgb: lr.ONE_MINUS_SOURCE_ALPHA,
        functionDestinationAlpha: lr.ONE_MINUS_SOURCE_ALPHA
    }),
    PRE_MULTIPLIED_ALPHA_BLEND: Object.freeze({
        enabled: !0,
        equationRgb: $n.ADD,
        equationAlpha: $n.ADD,
        functionSourceRgb: lr.ONE,
        functionSourceAlpha: lr.ONE,
        functionDestinationRgb: lr.ONE_MINUS_SOURCE_ALPHA,
        functionDestinationAlpha: lr.ONE_MINUS_SOURCE_ALPHA
    }),
    ADDITIVE_BLEND: Object.freeze({
        enabled: !0,
        equationRgb: $n.ADD,
        equationAlpha: $n.ADD,
        functionSourceRgb: lr.SOURCE_ALPHA,
        functionSourceAlpha: lr.ONE,
        functionDestinationRgb: lr.ONE,
        functionDestinationAlpha: lr.ONE
    })
};
const xf = Object.freeze(Bm);

function vr(e, t, r) {
    r = v(r, !1);
    var n = {},
        i = c(e),
        a = c(t),
        o, s, h;
    if (i)
        for (o in e) e.hasOwnProperty(o) && (s = e[o], a && r && typeof s == "object" && t.hasOwnProperty(o) ? (h = t[o], typeof h == "object" ? n[o] = vr(s, h, r) : n[o] = s) : n[o] = s);
    if (a)
        for (o in t) t.hasOwnProperty(o) && !n.hasOwnProperty(o) && (h = t[o], n[o] = h);
    return n
}

function ze() {
    this._listeners = [], this._scopes = [], this._toRemove = [], this._insideRaiseEvent = !1
}
Object.defineProperties(ze.prototype, {
    numberOfListeners: {
        get: function() {
            return this._listeners.length - this._toRemove.length
        }
    }
});
ze.prototype.addEventListener = function(e, t) {
    this._listeners.push(e), this._scopes.push(t);
    var r = this;
    return function() {
        r.removeEventListener(e, t)
    }
};
ze.prototype.removeEventListener = function(e, t) {
    for (var r = this._listeners, n = this._scopes, i = -1, a = 0; a < r.length; a++)
        if (r[a] === e && n[a] === t) {
            i = a;
            break
        } return i !== -1 ? (this._insideRaiseEvent ? (this._toRemove.push(i), r[i] = void 0, n[i] = void 0) : (r.splice(i, 1), n.splice(i, 1)), !0) : !1
};

function Um(e, t) {
    return t - e
}
ze.prototype.raiseEvent = function() {
    this._insideRaiseEvent = !0;
    var e, t = this._listeners,
        r = this._scopes,
        n = t.length;
    for (e = 0; e < n; e++) {
        var i = t[e];
        c(i) && t[e].apply(r[e], arguments)
    }
    var a = this._toRemove;
    if (n = a.length, n > 0) {
        for (a.sort(Um), e = 0; e < n; e++) {
            var o = a[e];
            t.splice(o, 1), r.splice(o, 1)
        }
        a.length = 0
    }
    this._insideRaiseEvent = !1
};

function jr(e) {
    this._ellipsoid = v(e, se.WGS84), this._semimajorAxis = this._ellipsoid.maximumRadius, this._oneOverSemimajorAxis = 1 / this._semimajorAxis
}
Object.defineProperties(jr.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    }
});
jr.prototype.project = function(e, t) {
    var r = this._semimajorAxis,
        n = e.longitude * r,
        i = e.latitude * r,
        a = e.height;
    return c(t) ? (t.x = n, t.y = i, t.z = a, t) : new u(n, i, a)
};
jr.prototype.unproject = E("GeographicProjection#unproject");

function L(e, t, r, n) {
    this.west = v(e, 0), this.south = v(t, 0), this.east = v(r, 0), this.north = v(n, 0)
}
Object.defineProperties(L.prototype, {
    width: {
        get: function() {
            return L.computeWidth(this)
        }
    },
    height: {
        get: function() {
            return L.computeHeight(this)
        }
    }
});
L.packedLength = 4;
L.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.west, t[r++] = e.south, t[r++] = e.east, t[r] = e.north, t
};
L.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new L), r.west = e[t++], r.south = e[t++], r.east = e[t++], r.north = e[t], r
};
L.computeWidth = function(e) {
    var t = e.east,
        r = e.west;
    return t < r && (t += p.TWO_PI), t - r
};
L.computeHeight = function(e) {
    return e.north - e.south
};
L.fromDegrees = function(e, t, r, n, i) {
    return e = p.toRadians(v(e, 0)), t = p.toRadians(v(t, 0)), r = p.toRadians(v(r, 0)), n = p.toRadians(v(n, 0)), c(i) ? (i.west = e, i.south = t, i.east = r, i.north = n, i) : new L(e, t, r, n)
};
L.fromRadians = function(e, t, r, n, i) {
    return c(i) ? (i.west = v(e, 0), i.south = v(t, 0), i.east = v(r, 0), i.north = v(n, 0), i) : new L(e, t, r, n)
};
L.fromCartographicArray = function(e, t) {
    for (var r = Number.MAX_VALUE, n = -Number.MAX_VALUE, i = Number.MAX_VALUE, a = -Number.MAX_VALUE, o = Number.MAX_VALUE, s = -Number.MAX_VALUE, h = 0, f = e.length; h < f; h++) {
        var l = e[h];
        r = Math.min(r, l.longitude), n = Math.max(n, l.longitude), o = Math.min(o, l.latitude), s = Math.max(s, l.latitude);
        var d = l.longitude >= 0 ? l.longitude : l.longitude + p.TWO_PI;
        i = Math.min(i, d), a = Math.max(a, d)
    }
    return n - r > a - i && (r = i, n = a, n > p.PI && (n = n - p.TWO_PI), r > p.PI && (r = r - p.TWO_PI)), c(t) ? (t.west = r, t.south = o, t.east = n, t.north = s, t) : new L(r, o, n, s)
};
L.fromCartesianArray = E("Rectangle.fromCartesianArray");
L.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.west = e.west, t.south = e.south, t.east = e.east, t.north = e.north, t) : new L(e.west, e.south, e.east, e.north)
};
L.equalsEpsilon = function(e, t, r) {
    return r = v(r, 0), e === t || c(e) && c(t) && Math.abs(e.west - t.west) <= r && Math.abs(e.south - t.south) <= r && Math.abs(e.east - t.east) <= r && Math.abs(e.north - t.north) <= r
};
L.prototype.clone = function(e) {
    return L.clone(this, e)
};
L.prototype.equals = function(e) {
    return L.equals(this, e)
};
L.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.west === t.west && e.south === t.south && e.east === t.east && e.north === t.north
};
L.prototype.equalsEpsilon = function(e, t) {
    return L.equalsEpsilon(this, e, t)
};
L.validate = E("Rectangle.validate");
L.southwest = function(e, t) {
    return c(t) ? (t.longitude = e.west, t.latitude = e.south, t.height = 0, t) : new re(e.west, e.south)
};
L.northwest = function(e, t) {
    return c(t) ? (t.longitude = e.west, t.latitude = e.north, t.height = 0, t) : new re(e.west, e.north)
};
L.northeast = function(e, t) {
    return c(t) ? (t.longitude = e.east, t.latitude = e.north, t.height = 0, t) : new re(e.east, e.north)
};
L.southeast = function(e, t) {
    return c(t) ? (t.longitude = e.east, t.latitude = e.south, t.height = 0, t) : new re(e.east, e.south)
};
L.center = function(e, t) {
    var r = e.east,
        n = e.west;
    r < n && (r += p.TWO_PI);
    var i = p.negativePiToPi((n + r) * .5),
        a = (e.south + e.north) * .5;
    return c(t) ? (t.longitude = i, t.latitude = a, t.height = 0, t) : new re(i, a)
};
L.intersection = function(e, t, r) {
    var n = e.east,
        i = e.west,
        a = t.east,
        o = t.west;
    n < i && a > 0 ? n += p.TWO_PI : a < o && n > 0 && (a += p.TWO_PI), n < i && o < 0 ? o += p.TWO_PI : a < o && i < 0 && (i += p.TWO_PI);
    var s = p.negativePiToPi(Math.max(i, o)),
        h = p.negativePiToPi(Math.min(n, a));
    if (!((e.west < e.east || t.west < t.east) && h <= s)) {
        var f = Math.max(e.south, t.south),
            l = Math.min(e.north, t.north);
        if (!(f >= l)) return c(r) ? (r.west = s, r.south = f, r.east = h, r.north = l, r) : new L(s, f, h, l)
    }
};
L.simpleIntersection = function(e, t, r) {
    var n = Math.max(e.west, t.west),
        i = Math.max(e.south, t.south),
        a = Math.min(e.east, t.east),
        o = Math.min(e.north, t.north);
    if (!(i >= o || n >= a)) return c(r) ? (r.west = n, r.south = i, r.east = a, r.north = o, r) : new L(n, i, a, o)
};
L.union = function(e, t, r) {
    c(r) || (r = new L);
    var n = e.east,
        i = e.west,
        a = t.east,
        o = t.west;
    n < i && a > 0 ? n += p.TWO_PI : a < o && n > 0 && (a += p.TWO_PI), n < i && o < 0 ? o += p.TWO_PI : a < o && i < 0 && (i += p.TWO_PI);
    var s = p.convertLongitudeRange(Math.min(i, o)),
        h = p.convertLongitudeRange(Math.max(n, a));
    return r.west = s, r.south = Math.min(e.south, t.south), r.east = h, r.north = Math.max(e.north, t.north), r
};
L.expand = function(e, t, r) {
    return c(r) || (r = new L), r.west = Math.min(e.west, t.longitude), r.south = Math.min(e.south, t.latitude), r.east = Math.max(e.east, t.longitude), r.north = Math.max(e.north, t.latitude), r
};
L.contains = function(e, t) {
    var r = t.longitude,
        n = t.latitude,
        i = e.west,
        a = e.east;
    return a < i && (a += p.TWO_PI, r < 0 && (r += p.TWO_PI)), (r > i || p.equalsEpsilon(r, i, p.EPSILON14)) && (r < a || p.equalsEpsilon(r, a, p.EPSILON14)) && n >= e.south && n <= e.north
};
L.subsample = E("Rectangle.subsample");
L.MAX_VALUE = Object.freeze(new L(-Math.PI, -p.PI_OVER_TWO, Math.PI, p.PI_OVER_TWO));
/**
 * @license
 *
 * Grauw URI utilities
 *
 * See: http://hg.grauw.nl/grauw-lib/file/tip/src/uri.js
 *
 * @author Laurens Holst (http://www.grauw.nl/)
 *
 *   Copyright 2012 Laurens Holst
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
function Oe(e) {
    if (e instanceof Oe) this.scheme = e.scheme, this.authority = e.authority, this.path = e.path, this.query = e.query, this.fragment = e.fragment;
    else if (e) {
        var t = zm.exec(e);
        this.scheme = t[1], this.authority = t[2], this.path = t[3], this.query = t[4], this.fragment = t[5]
    }
}
Oe.prototype.scheme = null;
Oe.prototype.authority = null;
Oe.prototype.path = "";
Oe.prototype.query = null;
Oe.prototype.fragment = null;
var zm = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
Oe.prototype.getScheme = function() {
    return this.scheme
};
Oe.prototype.getAuthority = function() {
    return this.authority
};
Oe.prototype.getPath = function() {
    return this.path
};
Oe.prototype.getQuery = function() {
    return this.query
};
Oe.prototype.getFragment = function() {
    return this.fragment
};
Oe.prototype.isAbsolute = function() {
    return !!this.scheme && !this.fragment
};
Oe.prototype.isSameDocumentAs = function(e) {
    return e.scheme == this.scheme && e.authority == this.authority && e.path == this.path && e.query == this.query
};
Oe.prototype.equals = function(e) {
    return this.isSameDocumentAs(e) && e.fragment == this.fragment
};
Oe.prototype.normalize = function() {
    this.removeDotSegments(), this.scheme && (this.scheme = this.scheme.toLowerCase()), this.authority && (this.authority = this.authority.replace(Gm, Hm).replace(ma, va)), this.path && (this.path = this.path.replace(ma, va)), this.query && (this.query = this.query.replace(ma, va)), this.fragment && (this.fragment = this.fragment.replace(ma, va))
};
var ma = /%[0-9a-z]{2}/gi,
    Vm = /[a-zA-Z0-9\-\._~]/,
    Gm = /(.*@)?([^@:]*)(:.*)?/;

function va(e) {
    var t = unescape(e);
    return Vm.test(t) ? t : e.toUpperCase()
}

function Hm(e, t, r, n) {
    return (t || "") + r.toLowerCase() + (n || "")
}
Oe.prototype.resolve = function(e) {
    var t = new Oe;
    return this.scheme ? (t.scheme = this.scheme, t.authority = this.authority, t.path = this.path, t.query = this.query) : (t.scheme = e.scheme, this.authority ? (t.authority = this.authority, t.path = this.path, t.query = this.query) : (t.authority = e.authority, this.path == "" ? (t.path = e.path, t.query = this.query || e.query) : (this.path.charAt(0) == "/" ? (t.path = this.path, t.removeDotSegments()) : (e.authority && e.path == "" ? t.path = "/" + this.path : t.path = e.path.substring(0, e.path.lastIndexOf("/") + 1) + this.path, t.removeDotSegments()), t.query = this.query))), t.fragment = this.fragment, t
};
Oe.prototype.removeDotSegments = function() {
    var e = this.path.split("/"),
        t = [],
        r, n = e[0] == "";
    for (n && e.shift(), e[0] == "" && e.shift(); e.length;) r = e.shift(), r == ".." ? t.pop() : r != "." && t.push(r);
    (r == "." || r == "..") && t.push(""), n && t.unshift(""), this.path = t.join("/")
};
Oe.prototype.toString = function() {
    var e = "";
    return this.scheme && (e += this.scheme + ":"), this.authority && (e += "//" + this.authority), e += this.path, this.query && (e += "?" + this.query), this.fragment && (e += "#" + this.fragment), e
};
/**
  @license
  when.js - https://github.com/cujojs/when
  MIT License (c) copyright B Cavalier & J Hann
 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */
var Ms;
ge.defer = lu;
ge.resolve = ui;
ge.reject = Wm;
ge.join = E("join");
ge.all = E("all");
ge.map = E("map");
ge.reduce = E("reduce");
ge.any = E("any");
ge.some = E("some");
ge.chain = E("chain");
ge.isPromise = Sf;

function ge(e, t, r, n) {
    return ui(e).then(t, r, n)
}

function ui(e) {
    var t, r;
    return e instanceof Ki ? t = e : Sf(e) ? (r = lu(), e.then(function(n) {
        r.resolve(n)
    }, function(n) {
        r.reject(n)
    }, function(n) {
        r.progress(n)
    }), t = r.promise) : t = qm(e), t
}

function Wm(e) {
    return ge(e, Wi)
}

function Ki(e) {
    this.then = e
}
Ki.prototype = {
    always: function(e, t) {
        return this.then(e, e, t)
    },
    otherwise: function(e) {
        return this.then(Ms, e)
    },
    yield: function(e) {
        return this.then(function() {
            return e
        })
    },
    spread: function(e) {
        return this.then(function(t) {
            return all(t, function(r) {
                return e.apply(Ms, r)
            })
        })
    }
};

function qm(e) {
    var t = new Ki(function(r) {
        try {
            return ui(r ? r(e) : e)
        } catch (n) {
            return Wi(n)
        }
    });
    return t
}

function Wi(e) {
    var t = new Ki(function(r, n) {
        try {
            return n ? ui(n(e)) : Wi(e)
        } catch (i) {
            return Wi(i)
        }
    });
    return t
}

function lu() {
    var e, t, r, n, i, a, o;
    return t = new Ki(s), e = {
        then: s,
        resolve: h,
        reject: f,
        progress: l,
        promise: t,
        resolver: {
            resolve: h,
            reject: f,
            progress: l
        }
    }, r = [], n = [], i = function(d, m, _) {
        var g, T;
        return g = lu(), T = typeof _ == "function" ? function(C) {
            try {
                g.progress(_(C))
            } catch (A) {
                g.progress(A)
            }
        } : function(C) {
            g.progress(C)
        }, r.push(function(C) {
            C.then(d, m).then(g.resolve, g.reject, T)
        }), n.push(T), g.promise
    }, a = function(d) {
        return ac(n, d), d
    }, o = function(d) {
        return d = ui(d), i = d.then, o = ui, a = km, ac(r, d), n = r = Ms, d
    }, e;

    function s(d, m, _) {
        return i(d, m, _)
    }

    function h(d) {
        return o(d)
    }

    function f(d) {
        return o(Wi(d))
    }

    function l(d) {
        return a(d)
    }
}

function Sf(e) {
    return e && typeof e.then == "function"
}
E("when.some");
E("when.any");

function ac(e, t) {
    for (var r, n = 0; r = e[n++];) r(t)
}

function km() {}

function Ym(e) {
    return (e.length === 0 || e[e.length - 1] !== "/") && (e = e + "/"), e
}

function nr(e, t) {
    if (e === null || typeof e != "object") return e;
    t = v(t, !1);
    var r = new e.constructor;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = e[n];
            t && (i = nr(i, t)), r[n] = i
        } return r
}

function lo(e, t) {
    var r;
    return typeof document < "u" && (r = document), lo._implementation(e, t, r)
}
lo._implementation = function(e, t, r) {
    if (!c(t)) {
        if (typeof r > "u") return e;
        t = v(r.baseURI, r.location.href)
    }
    var n = new Oe(t),
        i = new Oe(e);
    return i.resolve(n).toString()
};

function jm(e, t) {
    var r = "",
        n = e.lastIndexOf("/");
    return n !== -1 && (r = e.substring(0, n + 1)), t && (e = new Oe(e), c(e.query) && (r += "?" + e.query), c(e.fragment) && (r += "#" + e.fragment)), r
}

function Xm(e) {
    var t = new Oe(e);
    t.normalize();
    var r = t.path,
        n = r.lastIndexOf("/");
    return n !== -1 && (r = r.substr(n + 1)), n = r.lastIndexOf("."), n === -1 ? r = "" : r = r.substr(n + 1), r
}
var Zm = /^blob:/i;

function If(e) {
    return Zm.test(e)
}
var Ur;

function Km(e) {
    c(Ur) || (Ur = document.createElement("a")), Ur.href = window.location.href;
    var t = Ur.host,
        r = Ur.protocol;
    return Ur.href = e, Ur.href = Ur.href, r !== Ur.protocol || t !== Ur.host
}
var Qm = /^data:/i;

function Of(e) {
    return Qm.test(e)
}

function $m(e) {
    var t = ge.defer(),
        r = document.createElement("script");
    r.async = !0, r.src = e;
    var n = document.getElementsByTagName("head")[0];
    return r.onload = function() {
        r.onload = void 0, n.removeChild(r), t.resolve()
    }, r.onerror = function(i) {
        t.reject(i)
    }, n.appendChild(r), t.promise
}

function Jm(e) {
    var t = "";
    for (var r in e)
        if (e.hasOwnProperty(r)) {
            var n = e[r],
                i = encodeURIComponent(r) + "=";
            if (Array.isArray(n))
                for (var a = 0, o = n.length; a < o; ++a) t += i + encodeURIComponent(n[a]) + "&";
            else t += i + encodeURIComponent(n) + "&"
        } return t = t.slice(0, -1), t
}

function ev(e) {
    var t = {};
    if (e === "") return t;
    for (var r = e.replace(/\+/g, "%20").split(/[&;]/), n = 0, i = r.length; n < i; ++n) {
        var a = r[n].split("="),
            o = decodeURIComponent(a[0]),
            s = a[1];
        c(s) ? s = decodeURIComponent(s) : s = "";
        var h = t[o];
        typeof h == "string" ? t[o] = [h, s] : Array.isArray(h) ? h.push(s) : t[o] = s
    }
    return t
}
var tv = {
    UNISSUED: 0,
    ISSUED: 1,
    ACTIVE: 2,
    RECEIVED: 3,
    CANCELLED: 4,
    FAILED: 5
};
const it = Object.freeze(tv);
var rv = {
    TERRAIN: 0,
    IMAGERY: 1,
    TILES3D: 2,
    OTHER: 3
};
const du = Object.freeze(rv);

function ci(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = v(e.throttleByServer, !1),
        r = v(e.throttle, !1);
    this.url = e.url, this.requestFunction = e.requestFunction, this.cancelFunction = e.cancelFunction, this.priorityFunction = e.priorityFunction, this.priority = v(e.priority, 0), this.throttle = r, this.throttleByServer = t, this.type = v(e.type, du.OTHER), this.serverKey = void 0, this.state = it.UNISSUED, this.deferred = void 0, this.cancelled = !1
}
ci.prototype.cancel = function() {
    this.cancelled = !0
};
ci.prototype.clone = function(e) {
    return c(e) ? (e.url = this.url, e.requestFunction = this.requestFunction, e.cancelFunction = this.cancelFunction, e.priorityFunction = this.priorityFunction, e.priority = this.priority, e.throttle = this.throttle, e.throttleByServer = this.throttleByServer, e.type = this.type, e.serverKey = this.serverKey, e.state = this.RequestState.UNISSUED, e.deferred = void 0, e.cancelled = !1, e) : new ci(this)
};

function nv(e) {
    var t = {};
    if (!e) return t;
    for (var r = e.split("\r\n"), n = 0; n < r.length; ++n) {
        var i = r[n],
            a = i.indexOf(": ");
        if (a > 0) {
            var o = i.substring(0, a),
                s = i.substring(a + 2);
            t[o] = s
        }
    }
    return t
}

function qi(e, t, r) {
    this.statusCode = e, this.response = t, this.responseHeaders = r, typeof this.responseHeaders == "string" && (this.responseHeaders = nv(this.responseHeaders))
}
qi.prototype.toString = function() {
    var e = "Request has failed.";
    return c(this.statusCode) && (e += " Status Code: " + this.statusCode), e
};

function Gn(e) {
    this._comparator = e.comparator, this._array = [], this._length = 0, this._maximumLength = void 0
}
Object.defineProperties(Gn.prototype, {
    length: {
        get: function() {
            return this._length
        }
    },
    internalArray: {
        get: function() {
            return this._array
        }
    },
    maximumLength: {
        get: function() {
            return this._maximumLength
        },
        set: function(e) {
            var t = this._length;
            if (e < t) {
                for (var r = this._array, n = e; n < t; ++n) r[n] = void 0;
                this._length = e, r.length = e
            }
            this._maximumLength = e
        }
    },
    comparator: {
        get: function() {
            return this._comparator
        }
    }
});

function _u(e, t, r) {
    var n = e[t];
    e[t] = e[r], e[r] = n
}
Gn.prototype.reserve = function(e) {
    e = v(e, this._length), this._array.length = e
};
Gn.prototype.heapify = function(e) {
    e = v(e, 0);
    for (var t = this._length, r = this._comparator, n = this._array, i = -1, a = !0; a;) {
        var o = 2 * (e + 1),
            s = o - 1;
        s < t && r(n[s], n[e]) < 0 ? i = s : i = e, o < t && r(n[o], n[i]) < 0 && (i = o), i !== e ? (_u(n, i, e), e = i) : a = !1
    }
};
Gn.prototype.resort = function() {
    for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) this.heapify(t)
};
Gn.prototype.insert = function(e) {
    var t = this._array,
        r = this._comparator,
        n = this._maximumLength,
        i = this._length++;
    for (i < t.length ? t[i] = e : t.push(e); i !== 0;) {
        var a = Math.floor((i - 1) / 2);
        if (r(t[i], t[a]) < 0) _u(t, i, a), i = a;
        else break
    }
    var o;
    return c(n) && this._length > n && (o = t[n], this._length = n), o
};
Gn.prototype.pop = function(e) {
    if (e = v(e, 0), this._length !== 0) {
        var t = this._array,
            r = t[e];
        return _u(t, e, --this._length), this.heapify(e), t[this._length] = void 0, r
    }
};

function iv(e, t) {
    return e.priority - t.priority
}
var we = {
        numberOfAttemptedRequests: 0,
        numberOfActiveRequests: 0,
        numberOfCancelledRequests: 0,
        numberOfCancelledActiveRequests: 0,
        numberOfFailedRequests: 0,
        numberOfActiveRequestsEver: 0,
        lastNumberOfActiveRequests: 0
    },
    Hi = 20,
    Ft = new Gn({
        comparator: iv
    });
Ft.maximumLength = Hi;
Ft.reserve(Hi);
var Vr = [],
    on = {},
    av = typeof document < "u" ? new Oe(document.location.href) : new Oe,
    _o = new ze;

function ke() {}
ke.maximumRequests = 50;
ke.maximumRequestsPerServer = 18;
ke.requestsByServer = {
    "api.cesium.com:443": 18,
    "assets.cesium.com:443": 18
};
ke.throttleRequests = !0;
ke.debugShowStatistics = !1;
ke.requestCompletedEvent = _o;
Object.defineProperties(ke, {
    statistics: {
        get: function() {
            return we
        }
    },
    priorityHeapLength: {
        get: function() {
            return Hi
        },
        set: function(e) {
            if (e < Hi)
                for (; Ft.length > e;) {
                    var t = Ft.pop();
                    bn(t)
                }
            Hi = e, Ft.maximumLength = e, Ft.reserve(e)
        }
    }
});

function Pf(e) {
    c(e.priorityFunction) && (e.priority = e.priorityFunction())
}

function Nf(e) {
    var t = v(ke.requestsByServer[e], ke.maximumRequestsPerServer);
    return on[e] < t
}

function Mf(e) {
    return e.state === it.UNISSUED && (e.state = it.ISSUED, e.deferred = ge.defer()), e.deferred.promise
}

function ov(e) {
    return function(t) {
        if (e.state !== it.CANCELLED) {
            var r = e.deferred;
            --we.numberOfActiveRequests, --on[e.serverKey], _o.raiseEvent(), e.state = it.RECEIVED, e.deferred = void 0, r.resolve(t)
        }
    }
}

function sv(e) {
    return function(t) {
        e.state !== it.CANCELLED && (++we.numberOfFailedRequests, --we.numberOfActiveRequests, --on[e.serverKey], _o.raiseEvent(t), e.state = it.FAILED, e.deferred.reject(t))
    }
}

function Df(e) {
    var t = Mf(e);
    return e.state = it.ACTIVE, Vr.push(e), ++we.numberOfActiveRequests, ++we.numberOfActiveRequestsEver, ++on[e.serverKey], e.requestFunction().then(ov(e)).otherwise(sv(e)), t
}

function bn(e) {
    var t = e.state === it.ACTIVE;
    if (e.state = it.CANCELLED, ++we.numberOfCancelledRequests, c(e.deferred)) {
        var r = e.deferred;
        e.deferred = void 0, r.reject()
    }
    t && (--we.numberOfActiveRequests, --on[e.serverKey], ++we.numberOfCancelledActiveRequests), c(e.cancelFunction) && e.cancelFunction()
}
ke.update = function() {
    var e, t, r = 0,
        n = Vr.length;
    for (e = 0; e < n; ++e) {
        if (t = Vr[e], t.cancelled && bn(t), t.state !== it.ACTIVE) {
            ++r;
            continue
        }
        r > 0 && (Vr[e - r] = t)
    }
    Vr.length -= r;
    var i = Ft.internalArray,
        a = Ft.length;
    for (e = 0; e < a; ++e) Pf(i[e]);
    Ft.resort();
    for (var o = Math.max(ke.maximumRequests - Vr.length, 0), s = 0; s < o && Ft.length > 0;) {
        if (t = Ft.pop(), t.cancelled) {
            bn(t);
            continue
        }
        if (t.throttleByServer && !Nf(t.serverKey)) {
            bn(t);
            continue
        }
        Df(t), ++s
    }
    uv()
};
ke.getServerKey = function(e) {
    var t = new Oe(e).resolve(av);
    t.normalize();
    var r = t.authority;
    /:/.test(r) || (r = r + ":" + (t.scheme === "https" ? "443" : "80"));
    var n = on[r];
    return c(n) || (on[r] = 0), r
};
ke.request = function(e) {
    if (Of(e.url) || If(e.url)) return _o.raiseEvent(), e.state = it.RECEIVED, e.requestFunction();
    if (++we.numberOfAttemptedRequests, c(e.serverKey) || (e.serverKey = ke.getServerKey(e.url)), !(ke.throttleRequests && e.throttleByServer && !Nf(e.serverKey))) {
        if (!ke.throttleRequests || !e.throttle) return Df(e);
        if (!(Vr.length >= ke.maximumRequests)) {
            Pf(e);
            var t = Ft.insert(e);
            if (c(t)) {
                if (t === e) return;
                bn(t)
            }
            return Mf(e)
        }
    }
};

function uv() {
    ke.debugShowStatistics && (we.numberOfActiveRequests === 0 && we.lastNumberOfActiveRequests > 0 && (we.numberOfAttemptedRequests > 0 && (console.log("Number of attempted requests: " + we.numberOfAttemptedRequests), we.numberOfAttemptedRequests = 0), we.numberOfCancelledRequests > 0 && (console.log("Number of cancelled requests: " + we.numberOfCancelledRequests), we.numberOfCancelledRequests = 0), we.numberOfCancelledActiveRequests > 0 && (console.log("Number of cancelled active requests: " + we.numberOfCancelledActiveRequests), we.numberOfCancelledActiveRequests = 0), we.numberOfFailedRequests > 0 && (console.log("Number of failed requests: " + we.numberOfFailedRequests), we.numberOfFailedRequests = 0)), we.lastNumberOfActiveRequests = we.numberOfActiveRequests)
}
ke.clearForSpecs = function() {
    for (; Ft.length > 0;) {
        var e = Ft.pop();
        bn(e)
    }
    for (var t = Vr.length, r = 0; r < t; ++r) bn(Vr[r]);
    Vr.length = 0, on = {}, we.numberOfAttemptedRequests = 0, we.numberOfActiveRequests = 0, we.numberOfCancelledRequests = 0, we.numberOfCancelledActiveRequests = 0, we.numberOfFailedRequests = 0, we.numberOfActiveRequestsEver = 0, we.lastNumberOfActiveRequests = 0
};
ke.numberOfActiveRequestsByServer = function(e) {
    return on[e]
};
ke.requestHeap = Ft;
var _i = {},
    hi = {};
_i.add = function(e, t) {
    var r = e.toLowerCase() + ":" + t;
    c(hi[r]) || (hi[r] = !0)
};
_i.remove = function(e, t) {
    var r = e.toLowerCase() + ":" + t;
    c(hi[r]) && delete hi[r]
};

function cv(e) {
    var t = new Oe(e);
    t.normalize();
    var r = t.getAuthority();
    if (c(r)) {
        if (r.indexOf("@") !== -1) {
            var n = r.split("@");
            r = n[1]
        }
        if (r.indexOf(":") === -1) {
            var i = t.getScheme();
            if (c(i) || (i = window.location.protocol, i = i.substring(0, i.length - 1)), i === "http") r += ":80";
            else if (i === "https") r += ":443";
            else return
        }
        return r
    }
}
_i.contains = function(e) {
    var t = cv(e);
    return !!(c(t) && c(hi[t]))
};
_i.clear = function() {
    hi = {}
};
var bf = function() {
    try {
        var e = new XMLHttpRequest;
        return e.open("GET", "#", !0), e.responseType = "blob", e.responseType === "blob"
    } catch (t) {
        return !1
    }
}();

function mu(e, t, r, n) {
    var i = e.query;
    if (!c(i) || i.length === 0) return {};
    var a;
    if (i.indexOf("=") === -1) {
        var o = {};
        o[i] = void 0, a = o
    } else a = ev(i);
    r ? t._queryParameters = ro(a, t._queryParameters, n) : t._queryParameters = a, e.query = void 0
}

function hv(e, t) {
    var r = t._queryParameters,
        n = Object.keys(r);
    n.length === 1 && !c(r[n[0]]) ? e.query = n[0] : e.query = Jm(r)
}

function Wr(e, t) {
    return c(e) ? c(e.clone) ? e.clone() : nr(e) : t
}

function Lf(e) {
    if (e.state === it.ISSUED || e.state === it.ACTIVE) throw new lt("The Resource is already being fetched.");
    e.state = it.UNISSUED, e.deferred = void 0
}

function ro(e, t, r) {
    if (!r) return vr(e, t);
    var n = nr(e, !0);
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var a = n[i],
                o = t[i];
            c(a) ? (Array.isArray(a) || (a = n[i] = [a]), n[i] = a.concat(o)) : n[i] = Array.isArray(o) ? o.slice() : o
        } return n
}

function k(e) {
    e = v(e, v.EMPTY_OBJECT), typeof e == "string" && (e = {
        url: e
    }), this._url = void 0, this._templateValues = Wr(e.templateValues, {}), this._queryParameters = Wr(e.queryParameters, {}), this.headers = Wr(e.headers, {}), this.request = v(e.request, new ci), this.proxy = e.proxy, this.retryCallback = e.retryCallback, this.retryAttempts = v(e.retryAttempts, 0), this._retryCount = 0;
    var t = new Oe(e.url);
    mu(t, this, !0, !0), t.fragment = void 0, this._url = t.toString()
}
k.createIfNeeded = function(e) {
    return e instanceof k ? e.getDerivedResource({
        request: e.request
    }) : typeof e != "string" ? e : new k({
        url: e
    })
};
var Jn;
k.supportsImageBitmapOptions = function() {
    if (c(Jn)) return Jn;
    if (typeof createImageBitmap != "function") return Jn = ge.resolve(!1), Jn;
    var e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg==";
    return Jn = k.fetchBlob({
        url: e
    }).then(function(t) {
        return createImageBitmap(t, {
            imageOrientation: "flipY",
            premultiplyAlpha: "none"
        })
    }).then(function(t) {
        return !0
    }).otherwise(function() {
        return !1
    }), Jn
};
Object.defineProperties(k, {
    isBlobSupported: {
        get: function() {
            return bf
        }
    }
});
Object.defineProperties(k.prototype, {
    queryParameters: {
        get: function() {
            return this._queryParameters
        }
    },
    templateValues: {
        get: function() {
            return this._templateValues
        }
    },
    url: {
        get: function() {
            return this.getUrlComponent(!0, !0)
        },
        set: function(e) {
            var t = new Oe(e);
            mu(t, this, !1), t.fragment = void 0, this._url = t.toString()
        }
    },
    extension: {
        get: function() {
            return Xm(this._url)
        }
    },
    isDataUri: {
        get: function() {
            return Of(this._url)
        }
    },
    isBlobUri: {
        get: function() {
            return If(this._url)
        }
    },
    isCrossOriginUrl: {
        get: function() {
            return Km(this._url)
        }
    },
    hasHeaders: {
        get: function() {
            return Object.keys(this.headers).length > 0
        }
    }
});
k.prototype.toString = function() {
    return this.getUrlComponent(!0, !0)
};
k.prototype.getUrlComponent = function(e, t) {
    if (this.isDataUri) return this._url;
    var r = new Oe(this._url);
    e && hv(r, this);
    var n = r.toString().replace(/%7B/g, "{").replace(/%7D/g, "}"),
        i = this._templateValues;
    return n = n.replace(/{(.*?)}/g, function(a, o) {
        var s = i[o];
        return c(s) ? encodeURIComponent(s) : a
    }), t && c(this.proxy) && (n = this.proxy.getURL(n)), n
};
k.prototype.setQueryParameters = function(e, t) {
    t ? this._queryParameters = ro(this._queryParameters, e, !1) : this._queryParameters = ro(e, this._queryParameters, !1)
};
k.prototype.appendQueryParameters = function(e) {
    this._queryParameters = ro(e, this._queryParameters, !0)
};
k.prototype.setTemplateValues = function(e, t) {
    t ? this._templateValues = vr(this._templateValues, e) : this._templateValues = vr(e, this._templateValues)
};
k.prototype.getDerivedResource = function(e) {
    var t = this.clone();
    if (t._retryCount = 0, c(e.url)) {
        var r = new Oe(e.url),
            n = v(e.preserveQueryParameters, !1);
        mu(r, t, !0, n), r.fragment = void 0, t._url = r.resolve(new Oe(lo(this._url))).toString()
    }
    return c(e.queryParameters) && (t._queryParameters = vr(e.queryParameters, t._queryParameters)), c(e.templateValues) && (t._templateValues = vr(e.templateValues, t.templateValues)), c(e.headers) && (t.headers = vr(e.headers, t.headers)), c(e.proxy) && (t.proxy = e.proxy), c(e.request) && (t.request = e.request), c(e.retryCallback) && (t.retryCallback = e.retryCallback), c(e.retryAttempts) && (t.retryAttempts = e.retryAttempts), t
};
k.prototype.retryOnError = function(e) {
    var t = this.retryCallback;
    if (typeof t != "function" || this._retryCount >= this.retryAttempts) return ge(!1);
    var r = this;
    return ge(t(this, e)).then(function(n) {
        return ++r._retryCount, n
    })
};
k.prototype.clone = function(e) {
    return c(e) || (e = new k({
        url: this._url
    })), e._url = this._url, e._queryParameters = nr(this._queryParameters), e._templateValues = nr(this._templateValues), e.headers = nr(this.headers), e.proxy = this.proxy, e.retryCallback = this.retryCallback, e.retryAttempts = this.retryAttempts, e._retryCount = 0, e.request = this.request.clone(), e
};
k.prototype.getBaseUri = function(e) {
    return jm(this.getUrlComponent(e), e)
};
k.prototype.appendForwardSlash = function() {
    this._url = Ym(this._url)
};
k.prototype.fetchArrayBuffer = function() {
    return this.fetch({
        responseType: "arraybuffer"
    })
};
k.fetchArrayBuffer = function(e) {
    var t = new k(e);
    return t.fetchArrayBuffer()
};
k.prototype.fetchBlob = function() {
    return this.fetch({
        responseType: "blob"
    })
};
k.fetchBlob = function(e) {
    var t = new k(e);
    return t.fetchBlob()
};
k.prototype.fetchImage = function(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = v(e.preferImageBitmap, !1),
        r = v(e.preferBlob, !1),
        n = v(e.flipY, !1);
    if (Lf(this.request), !bf || this.isDataUri || this.isBlobUri || !this.hasHeaders && !r) return Ds({
        resource: this,
        flipY: n,
        preferImageBitmap: t
    });
    var i = this.fetchBlob();
    if (c(i)) {
        var a, o, s, h;
        return k.supportsImageBitmapOptions().then(function(f) {
            return a = f, o = a && t, i
        }).then(function(f) {
            if (c(f)) {
                if (h = f, o) return k.createImageBitmapFromBlob(f, {
                    flipY: n,
                    premultiplyAlpha: !1
                });
                var l = window.URL.createObjectURL(f);
                return s = new k({
                    url: l
                }), Ds({
                    resource: s,
                    flipY: n,
                    preferImageBitmap: !1
                })
            }
        }).then(function(f) {
            if (c(f)) return f.blob = h, o || window.URL.revokeObjectURL(s.url), f
        }).otherwise(function(f) {
            return c(s) && window.URL.revokeObjectURL(s.url), f.blob = h, ge.reject(f)
        })
    }
};

function Ds(e) {
    var t = e.resource,
        r = e.flipY,
        n = e.preferImageBitmap,
        i = t.request;
    i.url = t.url, i.requestFunction = function() {
        var o = !1;
        !t.isDataUri && !t.isBlobUri && (o = t.isCrossOriginUrl);
        var s = ge.defer();
        return k._Implementations.createImage(i, o, s, r, n), s.promise
    };
    var a = ke.request(i);
    if (c(a)) return a.otherwise(function(o) {
        return i.state !== it.FAILED ? ge.reject(o) : t.retryOnError(o).then(function(s) {
            return s ? (i.state = it.UNISSUED, i.deferred = void 0, Ds({
                resource: t,
                flipY: r,
                preferImageBitmap: n
            })) : ge.reject(o)
        })
    })
}
k.fetchImage = function(e) {
    var t = new k(e);
    return t.fetchImage({
        flipY: e.flipY,
        preferBlob: e.preferBlob,
        preferImageBitmap: e.preferImageBitmap
    })
};
k.prototype.fetchText = function() {
    return this.fetch({
        responseType: "text"
    })
};
k.fetchText = function(e) {
    var t = new k(e);
    return t.fetchText()
};
k.prototype.fetchJson = E("Resource#fetchJson");
k.fetchJson = function(e) {
    var t = new k(e);
    return t.fetchJson()
};
k.prototype.fetchXML = function() {
    return this.fetch({
        responseType: "document",
        overrideMimeType: "text/xml"
    })
};
k.fetchXML = function(e) {
    var t = new k(e);
    return t.fetchXML()
};
k.prototype.fetchJsonp = E("Resource#fetchJsonp");
k.fetchJsonp = function(e) {
    var t = new k(e);
    return t.fetchJsonp(e.callbackParameterName)
};
k.prototype._makeRequest = function(e) {
    var t = this;
    Lf(t.request);
    var r = t.request;
    r.url = t.url, r.requestFunction = function() {
        var i = e.responseType,
            a = vr(e.headers, t.headers),
            o = e.overrideMimeType,
            s = e.method,
            h = e.data,
            f = ge.defer(),
            l = k._Implementations.loadWithXhr(t.url, i, s, h, a, f, o);
        return c(l) && c(l.abort) && (r.cancelFunction = function() {
            l.abort()
        }), f.promise
    };
    var n = ke.request(r);
    if (c(n)) return n.then(function(i) {
        return r.cancelFunction = void 0, i
    }).otherwise(function(i) {
        return r.cancelFunction = void 0, r.state !== it.FAILED ? ge.reject(i) : t.retryOnError(i).then(function(a) {
            return a ? (r.state = it.UNISSUED, r.deferred = void 0, t.fetch(e)) : ge.reject(i)
        })
    })
};
var fv = /^data:(.*?)(;base64)?,(.*)$/;

function Za(e, t) {
    var r = decodeURIComponent(t);
    return e ? atob(r) : r
}

function oc(e, t) {
    for (var r = Za(e, t), n = new ArrayBuffer(r.length), i = new Uint8Array(n), a = 0; a < r.length; a++) i[a] = r.charCodeAt(a);
    return n
}

function lv(e, t) {
    t = v(t, "");
    var r = e[1],
        n = !!e[2],
        i = e[3];
    switch (t) {
        case "":
        case "text":
            return Za(n, i);
        case "arraybuffer":
            return oc(n, i);
        case "blob":
            var a = oc(n, i);
            return new Blob([a], {
                type: r
            });
        case "document":
            var o = new DOMParser;
            return o.parseFromString(Za(n, i), r);
        case "json":
            return JSON.parse(Za(n, i))
    }
}
k.prototype.fetch = function(e) {
    return e = Wr(e, {}), e.method = "GET", this._makeRequest(e)
};
k.fetch = function(e) {
    var t = new k(e);
    return t.fetch({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k.prototype.delete = function(e) {
    return e = Wr(e, {}), e.method = "DELETE", this._makeRequest(e)
};
k.delete = function(e) {
    var t = new k(e);
    return t.delete({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType,
        data: e.data
    })
};
k.prototype.head = function(e) {
    return e = Wr(e, {}), e.method = "HEAD", this._makeRequest(e)
};
k.head = function(e) {
    var t = new k(e);
    return t.head({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k.prototype.options = function(e) {
    return e = Wr(e, {}), e.method = "OPTIONS", this._makeRequest(e)
};
k.options = function(e) {
    var t = new k(e);
    return t.options({
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k.prototype.post = function(e, t) {
    return Ke.defined("data", e), t = Wr(t, {}), t.method = "POST", t.data = e, this._makeRequest(t)
};
k.post = function(e) {
    var t = new k(e);
    return t.post(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k.prototype.put = function(e, t) {
    return Ke.defined("data", e), t = Wr(t, {}), t.method = "PUT", t.data = e, this._makeRequest(t)
};
k.put = function(e) {
    var t = new k(e);
    return t.put(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k.prototype.patch = function(e, t) {
    return Ke.defined("data", e), t = Wr(t, {}), t.method = "PATCH", t.data = e, this._makeRequest(t)
};
k.patch = function(e) {
    var t = new k(e);
    return t.patch(e.data, {
        responseType: e.responseType,
        overrideMimeType: e.overrideMimeType
    })
};
k._Implementations = {};

function dv(e, t, r) {
    var n = new Image;
    n.onload = function() {
        r.resolve(n)
    }, n.onerror = function(i) {
        r.reject(i)
    }, t && (_i.contains(e) ? n.crossOrigin = "use-credentials" : n.crossOrigin = ""), n.src = e
}
k._Implementations.createImage = function(e, t, r, n, i) {
    var a = e.url;
    k.supportsImageBitmapOptions().then(function(o) {
        if (!(o && i)) {
            dv(a, t, r);
            return
        }
        var s = "blob",
            h = "GET",
            f = ge.defer(),
            l = k._Implementations.loadWithXhr(a, s, h, void 0, void 0, f, void 0, void 0, void 0);
        return c(l) && c(l.abort) && (e.cancelFunction = function() {
            l.abort()
        }), f.promise.then(function(d) {
            if (!c(d)) {
                r.reject(new lt("Successfully retrieved " + a + " but it contained no content."));
                return
            }
            return k.createImageBitmapFromBlob(d, {
                flipY: n,
                premultiplyAlpha: !1
            })
        }).then(r.resolve)
    }).otherwise(r.reject)
};
k.createImageBitmapFromBlob = function(e, t) {
    return Ke.defined("options", t), Ke.typeOf.bool("options.flipY", t.flipY), Ke.typeOf.bool("options.premultiplyAlpha", t.premultiplyAlpha), createImageBitmap(e, {
        imageOrientation: t.flipY ? "flipY" : "none",
        premultiplyAlpha: t.premultiplyAlpha ? "premultiply" : "none"
    })
};

function sc(e, t) {
    switch (t) {
        case "text":
            return e.toString("utf8");
        case "json":
            return JSON.parse(e.toString("utf8"));
        default:
            return new Uint8Array(e).buffer
    }
}

function _v(e, t, r, n, i, a, o) {
    var s = require("url").parse(e),
        h = s.protocol === "https:" ? require("https") : require("http"),
        f = require("zlib"),
        l = {
            protocol: s.protocol,
            hostname: s.hostname,
            port: s.port,
            path: s.path,
            query: s.query,
            method: r,
            headers: i
        };
    h.request(l).on("response", function(d) {
        if (d.statusCode < 200 || d.statusCode >= 300) {
            a.reject(new qi(d.statusCode, d, d.headers));
            return
        }
        var m = [];
        d.on("data", function(_) {
            m.push(_)
        }), d.on("end", function() {
            var _ = Buffer.concat(m);
            d.headers["content-encoding"] === "gzip" ? f.gunzip(_, function(g, T) {
                g ? a.reject(new lt("Error decompressing response.")) : a.resolve(sc(T, t))
            }) : a.resolve(sc(_, t))
        })
    }).on("error", function(d) {
        a.reject(new qi)
    }).end()
}
var mv = typeof XMLHttpRequest > "u";
k._Implementations.loadWithXhr = function(e, t, r, n, i, a, o) {
    var s = fv.exec(e);
    if (s !== null) {
        a.resolve(lv(s, t));
        return
    }
    if (mv) {
        _v(e, t, r, n, i, a);
        return
    }
    var h = new XMLHttpRequest;
    if (_i.contains(e) && (h.withCredentials = !0), h.open(r, e, !0), c(o) && c(h.overrideMimeType) && h.overrideMimeType(o), c(i))
        for (var f in i) i.hasOwnProperty(f) && h.setRequestHeader(f, i[f]);
    c(t) && (h.responseType = t);
    var l = !1;
    return typeof e == "string" && (l = e.indexOf("file://") === 0 || typeof window < "u" && window.location.origin === "file://"), h.onload = function() {
        if ((h.status < 200 || h.status >= 300) && !(l && h.status === 0)) {
            a.reject(new qi(h.status, h.response, h.getAllResponseHeaders()));
            return
        }
        var d = h.response,
            m = h.responseType;
        if (r === "HEAD" || r === "OPTIONS") {
            var _ = h.getAllResponseHeaders(),
                g = _.trim().split(/[\r\n]+/),
                T = {};
            g.forEach(function(C) {
                var A = C.split(": "),
                    S = A.shift();
                T[S] = A.join(": ")
            }), a.resolve(T);
            return
        }
        if (h.status === 204) a.resolve();
        else if (c(d) && (!c(t) || m === t)) a.resolve(d);
        else if (t === "json" && typeof d == "string") try {
            a.resolve(JSON.parse(d))
        } catch (C) {
            a.reject(C)
        } else(m === "" || m === "document") && c(h.responseXML) && h.responseXML.hasChildNodes() ? a.resolve(h.responseXML) : (m === "" || m === "text") && c(h.responseText) ? a.resolve(h.responseText) : a.reject(new lt("Invalid XMLHttpRequest response type."))
    }, h.onerror = function(d) {
        a.reject(new qi)
    }, h.send(n), h
};
k._Implementations.loadAndExecuteScript = function(e, t, r) {
    return $m(e).otherwise(r.reject)
};
k._DefaultImplementations = {};
k._DefaultImplementations.createImage = k._Implementations.createImage;
k._DefaultImplementations.loadWithXhr = k._Implementations.loadWithXhr;
k._DefaultImplementations.loadAndExecuteScript = k._Implementations.loadAndExecuteScript;
k.DEFAULT = Object.freeze(new k({
    url: typeof document > "u" ? "" : document.location.href.split("?")[0]
}));

function Ve(e) {
    this._ellipsoid = v(e, se.WGS84), this._semimajorAxis = this._ellipsoid.maximumRadius, this._oneOverSemimajorAxis = 1 / this._semimajorAxis
}
Object.defineProperties(Ve.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    }
});
Ve.mercatorAngleToGeodeticLatitude = function(e) {
    return p.PI_OVER_TWO - 2 * Math.atan(Math.exp(-e))
};
const Xo = Ve.geodeticLatitudeToMercatorAngle = function(e) {
    e > Ve.MaximumLatitude ? e = Ve.MaximumLatitude : e < -Ve.MaximumLatitude && (e = -Ve.MaximumLatitude);
    var t = Math.sin(e);
    return .5 * Math.log((1 + t) / (1 - t))
};
Ve.MaximumLatitude = Ve.mercatorAngleToGeodeticLatitude(Math.PI);
Ve.prototype.project = function(e, t) {
    var r = this._semimajorAxis,
        n = e.longitude * r,
        i = Ve.geodeticLatitudeToMercatorAngle(e.latitude) * r,
        a = e.height;
    return c(t) ? (t.x = n, t.y = i, t.z = a, t) : new u(n, i, a)
};
Ve.prototype.unproject = function(e, t) {
    var r = this._oneOverSemimajorAxis,
        n = e.x * r,
        i = Ve.mercatorAngleToGeodeticLatitude(e.y * r),
        a = e.z;
    return c(t) ? (t.longitude = n, t.latitude = i, t.height = a, t) : new re(n, i, a)
};

function Tn(e) {
    if (e = v(e, v.EMPTY_OBJECT), this._ellipsoid = v(e.ellipsoid, se.WGS84), this._numberOfLevelZeroTilesX = v(e.numberOfLevelZeroTilesX, 1), this._numberOfLevelZeroTilesY = v(e.numberOfLevelZeroTilesY, 1), this._projection = new Ve(this._ellipsoid), c(e.rectangleSouthwestInMeters) && c(e.rectangleNortheastInMeters)) this._rectangleSouthwestInMeters = e.rectangleSouthwestInMeters, this._rectangleNortheastInMeters = e.rectangleNortheastInMeters;
    else {
        var t = this._ellipsoid.maximumRadius * Math.PI;
        this._rectangleSouthwestInMeters = new R(-t, -t), this._rectangleNortheastInMeters = new R(t, t)
    }
    var r = this._projection.unproject(this._rectangleSouthwestInMeters),
        n = this._projection.unproject(this._rectangleNortheastInMeters);
    this._rectangle = new L(r.longitude, r.latitude, n.longitude, n.latitude)
}
Object.defineProperties(Tn.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    },
    projection: {
        get: function() {
            return this._projection
        }
    }
});
Tn.prototype.getNumberOfXTilesAtLevel = function(e) {
    return this._numberOfLevelZeroTilesX << e
};
Tn.prototype.getNumberOfYTilesAtLevel = function(e) {
    return this._numberOfLevelZeroTilesY << e
};
Tn.prototype.rectangleToNativeRectangle = function(e, t) {
    var r = this._projection,
        n = r.project(L.southwest(e)),
        i = r.project(L.northeast(e));
    return c(t) ? (t.west = n.x, t.south = n.y, t.east = i.x, t.north = i.y, t) : new L(n.x, n.y, i.x, i.y)
};
Tn.prototype.tileXYToNativeRectangle = function(e, t, r, n) {
    var i = this.getNumberOfXTilesAtLevel(r),
        a = this.getNumberOfYTilesAtLevel(r),
        o = (this._rectangleNortheastInMeters.x - this._rectangleSouthwestInMeters.x) / i,
        s = this._rectangleSouthwestInMeters.x + e * o,
        h = this._rectangleSouthwestInMeters.x + (e + 1) * o,
        f = (this._rectangleNortheastInMeters.y - this._rectangleSouthwestInMeters.y) / a,
        l = this._rectangleNortheastInMeters.y - t * f,
        d = this._rectangleNortheastInMeters.y - (t + 1) * f;
    return c(n) ? (n.west = s, n.south = d, n.east = h, n.north = l, n) : new L(s, d, h, l)
};
Tn.prototype.tileXYToRectangle = function(e, t, r, n) {
    var i = this.tileXYToNativeRectangle(e, t, r, n),
        a = this._projection,
        o = a.unproject(new R(i.west, i.south)),
        s = a.unproject(new R(i.east, i.north));
    return i.west = o.longitude, i.south = o.latitude, i.east = s.longitude, i.north = s.latitude, i
};
Tn.prototype.positionToTileXY = function(e, t, r) {
    var n = this._rectangle;
    if (L.contains(n, e)) {
        var i = this.getNumberOfXTilesAtLevel(t),
            a = this.getNumberOfYTilesAtLevel(t),
            o = this._rectangleNortheastInMeters.x - this._rectangleSouthwestInMeters.x,
            s = o / i,
            h = this._rectangleNortheastInMeters.y - this._rectangleSouthwestInMeters.y,
            f = h / a,
            l = this._projection,
            d = l.project(e),
            m = d.x - this._rectangleSouthwestInMeters.x,
            _ = this._rectangleNortheastInMeters.y - d.y,
            g = m / s | 0;
        g >= i && (g = i - 1);
        var T = _ / f | 0;
        return T >= a && (T = a - 1), c(r) ? (r.x = g, r.y = T, r) : new R(g, T)
    }
};
const Ff = {};
Ff.loadImage = function(e, t) {
    var r = k.createIfNeeded(t);
    return r.fetchImage({
        preferImageBitmap: !0,
        flipY: !0
    })
};

function vv() {
    return E(this.constructor.name)
}
var pv = /{[^}]+}/g,
    Bf = {
        x: yv,
        y: Cv,
        z: Rv,
        s: xv,
        reverseX: Ev,
        reverseY: Av,
        reverseZ: wv,
        westDegrees: Sv,
        southDegrees: Iv,
        eastDegrees: Ov,
        northDegrees: Pv,
        westProjected: Nv,
        southProjected: Mv,
        eastProjected: Dv,
        northProjected: bv,
        width: Lv,
        height: Fv
    },
    gv = vr(Bf, {
        i: Bv,
        j: Uv,
        reverseI: zv,
        reverseJ: Vv,
        longitudeDegrees: Hv,
        latitudeDegrees: Wv,
        longitudeProjected: qv,
        latitudeProjected: kv,
        format: jv
    });

function Qi(e) {
    this._errorEvent = new ze, this._resource = void 0, this._urlSchemeZeroPadding = void 0, this._pickFeaturesResource = void 0, this._tileWidth = void 0, this._tileHeight = void 0, this._maximumLevel = void 0, this._minimumLevel = void 0, this._tilingScheme = void 0, this._rectangle = void 0, this._tileDiscardPolicy = void 0, this._credit = void 0, this._hasAlphaChannel = void 0, this._readyPromise = void 0, this._tags = void 0, this._pickFeaturesTags = void 0, this.defaultAlpha = void 0, this.defaultNightAlpha = void 0, this.defaultDayAlpha = void 0, this.defaultBrightness = void 0, this.defaultContrast = void 0, this.defaultHue = void 0, this.defaultSaturation = void 0, this.defaultGamma = void 0, this.defaultMinificationFilter = void 0, this.defaultMagnificationFilter = void 0, this.enablePickFeatures = !0, this.reinitialize(e)
}
Object.defineProperties(Qi.prototype, {
    url: {
        get: function() {
            return this._resource.url
        }
    },
    urlSchemeZeroPadding: {
        get: function() {
            return this._urlSchemeZeroPadding
        }
    },
    pickFeaturesUrl: {
        get: function() {
            return this._pickFeaturesResource.url
        }
    },
    proxy: {
        get: function() {
            return this._resource.proxy
        }
    },
    tileWidth: {
        get: function() {
            return this._tileWidth
        }
    },
    tileHeight: {
        get: function() {
            return this._tileHeight
        }
    },
    maximumLevel: {
        get: function() {
            return this._maximumLevel
        }
    },
    minimumLevel: {
        get: function() {
            return this._minimumLevel
        }
    },
    tilingScheme: {
        get: function() {
            return this._tilingScheme
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    },
    tileDiscardPolicy: {
        get: function() {
            return this._tileDiscardPolicy
        }
    },
    errorEvent: {
        get: function() {
            return this._errorEvent
        }
    },
    ready: {
        get: function() {
            return c(this._resource)
        }
    },
    readyPromise: {
        get: function() {
            return this._readyPromise
        }
    },
    credit: {
        get: function() {
            return this._credit
        }
    },
    hasAlphaChannel: {
        get: function() {
            return this._hasAlphaChannel
        }
    }
});
Qi.prototype.reinitialize = function(e) {
    var t = this;
    t._readyPromise = ge(e).then(function(r) {
        var n = r.customTags,
            i = vr(Bf, n),
            a = vr(gv, n),
            o = k.createIfNeeded(r.url),
            s = k.createIfNeeded(r.pickFeaturesUrl);
        t.enablePickFeatures = v(r.enablePickFeatures, t.enablePickFeatures), t._urlSchemeZeroPadding = v(r.urlSchemeZeroPadding, t.urlSchemeZeroPadding), t._tileDiscardPolicy = r.tileDiscardPolicy, t._getFeatureInfoFormats = r.getFeatureInfoFormats, t._subdomains = r.subdomains, Array.isArray(t._subdomains) ? t._subdomains = t._subdomains.slice() : c(t._subdomains) && t._subdomains.length > 0 ? t._subdomains = t._subdomains.split("") : t._subdomains = ["a", "b", "c"], t._tileWidth = v(r.tileWidth, 256), t._tileHeight = v(r.tileHeight, 256), t._minimumLevel = v(r.minimumLevel, 0), t._maximumLevel = r.maximumLevel, t._tilingScheme = v(r.tilingScheme, new Tn({
            ellipsoid: r.ellipsoid
        })), t._rectangle = v(r.rectangle, t._tilingScheme.rectangle), t._rectangle = L.intersection(t._rectangle, t._tilingScheme.rectangle), t._hasAlphaChannel = v(r.hasAlphaChannel, !0);
        var h = r.credit;
        return typeof h == "string" && (h = new vv), t._credit = h, t._resource = o, t._tags = i, t._pickFeaturesResource = s, t._pickFeaturesTags = a, !0
    })
};
Qi.prototype.getTileCredits = function(e, t, r) {};
Qi.prototype.requestImage = function(e, t, r, n) {
    return Ff.loadImage(this, Tv(this, e, t, r, n))
};
Qi.prototype.pickFeatures = E("UrlTemplateImageryProvider#pickFeatures");
var bs = !1,
    er = new L,
    Ls = !1,
    $i = new L;

function Tv(e, t, r, n, i) {
    bs = !1, Ls = !1;
    var a = e._resource,
        o = a.getUrlComponent(!0),
        s = e._tags,
        h = {},
        f = o.match(pv);
    return c(f) && f.forEach(function(l) {
        var d = l.substring(1, l.length - 1);
        c(s[d]) && (h[d] = s[d](e, t, r, n))
    }), a.getDerivedResource({
        request: i,
        templateValues: h
    })
}
var uc = !1,
    fi = new R,
    cc = !1;

function mi(e, t, r) {
    if (e && e.urlSchemeZeroPadding && e.urlSchemeZeroPadding.hasOwnProperty(t)) {
        var n = e.urlSchemeZeroPadding[t];
        if (typeof n == "string") {
            var i = n.length;
            i > 1 && (r = r.length >= i ? r : new Array(i - r.toString().length + 1).join("0") + r)
        }
    }
    return r
}

function yv(e, t, r, n) {
    return mi(e, "{x}", t)
}

function Ev(e, t, r, n) {
    var i = e.tilingScheme.getNumberOfXTilesAtLevel(n) - t - 1;
    return mi(e, "{reverseX}", i)
}

function Cv(e, t, r, n) {
    return mi(e, "{y}", r)
}

function Av(e, t, r, n) {
    var i = e.tilingScheme.getNumberOfYTilesAtLevel(n) - r - 1;
    return mi(e, "{reverseY}", i)
}

function wv(e, t, r, n) {
    var i = e.maximumLevel,
        a = c(i) && n < i ? i - n - 1 : n;
    return mi(e, "{reverseZ}", a)
}

function Rv(e, t, r, n) {
    return mi(e, "{z}", n)
}

function xv(e, t, r, n) {
    var i = (t + r + n) % e._subdomains.length;
    return e._subdomains[i]
}

function mo(e, t, r, n) {
    bs || (e.tilingScheme.tileXYToRectangle(t, r, n, er), er.west = p.toDegrees(er.west), er.south = p.toDegrees(er.south), er.east = p.toDegrees(er.east), er.north = p.toDegrees(er.north), bs = !0)
}

function Sv(e, t, r, n) {
    return mo(e, t, r, n), er.west
}

function Iv(e, t, r, n) {
    return mo(e, t, r, n), er.south
}

function Ov(e, t, r, n) {
    return mo(e, t, r, n), er.east
}

function Pv(e, t, r, n) {
    return mo(e, t, r, n), er.north
}

function vo(e, t, r, n) {
    Ls || (e.tilingScheme.tileXYToNativeRectangle(t, r, n, $i), Ls = !0)
}

function Nv(e, t, r, n) {
    return vo(e, t, r, n), $i.west
}

function Mv(e, t, r, n) {
    return vo(e, t, r, n), $i.south
}

function Dv(e, t, r, n) {
    return vo(e, t, r, n), $i.east
}

function bv(e, t, r, n) {
    return vo(e, t, r, n), $i.north
}

function Lv(e, t, r, n) {
    return e.tileWidth
}

function Fv(e, t, r, n) {
    return e.tileHeight
}

function Bv(e, t, r, n, i, a, o) {
    return po(e, t, r, n, i, a), fi.x
}

function Uv(e, t, r, n, i, a, o) {
    return po(e, t, r, n, i, a), fi.y
}

function zv(e, t, r, n, i, a, o) {
    return po(e, t, r, n, i, a), e.tileWidth - fi.x - 1
}

function Vv(e, t, r, n, i, a, o) {
    return po(e, t, r, n, i, a), e.tileHeight - fi.y - 1
}
var Gv = new L,
    ai = new u;

function po(e, t, r, n, i, a, o) {
    if (!uc) {
        vu(e, t, r, n, i, a);
        var s = ai,
            h = e.tilingScheme.tileXYToNativeRectangle(t, r, n, Gv);
        fi.x = e.tileWidth * (s.x - h.west) / h.width | 0, fi.y = e.tileHeight * (h.north - s.y) / h.height | 0, uc = !0
    }
}

function Hv(e, t, r, n, i, a, o) {
    return p.toDegrees(i)
}

function Wv(e, t, r, n, i, a, o) {
    return p.toDegrees(a)
}

function qv(e, t, r, n, i, a, o) {
    return vu(e, t, r, n, i, a), ai.x
}

function kv(e, t, r, n, i, a, o) {
    return vu(e, t, r, n, i, a), ai.y
}
var Yv = new re;

function vu(e, t, r, n, i, a, o) {
    if (!cc) {
        if (e.tilingScheme.projection instanceof jr) ai.x = p.toDegrees(i), ai.y = p.toDegrees(a);
        else {
            var s = Yv;
            s.longitude = i, s.latitude = a, e.tilingScheme.projection.project(s, ai)
        }
        cc = !0
    }
}

function jv(e, t, r, n, i, a, o) {
    return o
}

function Ct(e, t, r) {
    this.heading = v(e, 0), this.pitch = v(t, 0), this.roll = v(r, 0)
}
Ct.fromQuaternion = function(e, t) {
    c(t) || (t = new Ct);
    var r = 2 * (e.w * e.y - e.z * e.x),
        n = 1 - 2 * (e.x * e.x + e.y * e.y),
        i = 2 * (e.w * e.x + e.y * e.z),
        a = 1 - 2 * (e.y * e.y + e.z * e.z),
        o = 2 * (e.w * e.z + e.x * e.y);
    return t.heading = -Math.atan2(o, a), t.roll = Math.atan2(i, n), t.pitch = -p.asinClamped(r), t
};
Ct.fromDegrees = function(e, t, r, n) {
    return c(n) || (n = new Ct), n.heading = e * p.RADIANS_PER_DEGREE, n.pitch = t * p.RADIANS_PER_DEGREE, n.roll = r * p.RADIANS_PER_DEGREE, n
};
Ct.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.heading = e.heading, t.pitch = e.pitch, t.roll = e.roll, t) : new Ct(e.heading, e.pitch, e.roll)
};
Ct.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.heading === t.heading && e.pitch === t.pitch && e.roll === t.roll
};
Ct.equalsEpsilon = function(e, t, r, n) {
    return e === t || c(e) && c(t) && p.equalsEpsilon(e.heading, t.heading, r, n) && p.equalsEpsilon(e.pitch, t.pitch, r, n) && p.equalsEpsilon(e.roll, t.roll, r, n)
};
Ct.prototype.clone = function(e) {
    return Ct.clone(this, e)
};
Ct.prototype.equals = function(e) {
    return Ct.equals(this, e)
};
Ct.prototype.equalsEpsilon = function(e, t, r) {
    return Ct.equalsEpsilon(this, e, t, r)
};
Ct.prototype.toString = function() {
    return "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")"
};

function Ir(e, t) {
    t = u.clone(v(t, u.ZERO)), u.equals(t, u.ZERO) || u.normalize(t, t), this.origin = u.clone(v(e, u.ZERO)), this.direction = t
}
Ir.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.origin = u.clone(e.origin), t.direction = u.clone(e.direction), t) : new Ir(e.origin, e.direction)
};
Ir.getPoint = function(e, t, r) {
    return c(r) || (r = new u), r = u.multiplyByScalar(e.direction, t, r), u.add(e.origin, r, r)
};
var Xv = {
    OUTSIDE: -1,
    INTERSECTING: 0,
    INSIDE: 1
};
const ft = Object.freeze(Xv);

function Ne(e, t) {
    this.normal = u.clone(e), this.distance = t
}
Ne.fromPointNormal = function(e, t, r) {
    var n = -u.dot(t, e);
    return c(r) ? (u.clone(t, r.normal), r.distance = n, r) : new Ne(t, n)
};
var Zv = new u;
Ne.fromCartesian4 = function(e, t) {
    var r = u.fromCartesian4(e, Zv),
        n = e.w;
    return c(t) ? (u.clone(r, t.normal), t.distance = n, t) : new Ne(r, n)
};
Ne.getPointDistance = function(e, t) {
    return u.dot(e.normal, t) + e.distance
};
var Kv = new u;
Ne.projectPointOntoPlane = function(e, t, r) {
    c(r) || (r = new u);
    var n = Ne.getPointDistance(e, t),
        i = u.multiplyByScalar(e.normal, n, Kv);
    return u.subtract(t, i, r)
};
var Qv = new y,
    $v = new B,
    Jv = new u;
Ne.transform = function(e, t, r) {
    var n = e.normal,
        i = e.distance,
        a = y.inverseTranspose(t, Qv),
        o = B.fromElements(n.x, n.y, n.z, i, $v);
    o = y.multiplyByVector(a, o, o);
    var s = u.fromCartesian4(o, Jv);
    return o = B.divideByScalar(o, u.magnitude(s), o), Ne.fromCartesian4(o, r)
};
Ne.clone = function(e, t) {
    return c(t) ? (u.clone(e.normal, t.normal), t.distance = e.distance, t) : new Ne(e.normal, e.distance)
};
Ne.equals = function(e, t) {
    return e.distance === t.distance && u.equals(e.normal, t.normal)
};
Ne.ORIGIN_XY_PLANE = Object.freeze(new Ne(u.UNIT_Z, 0));
Ne.ORIGIN_YZ_PLANE = Object.freeze(new Ne(u.UNIT_X, 0));
Ne.ORIGIN_ZX_PLANE = Object.freeze(new Ne(u.UNIT_Y, 0));

function Bt(e) {
    this.planes = v(e, [])
}
var ki = [new u, new u, new u];
u.clone(u.UNIT_X, ki[0]);
u.clone(u.UNIT_Y, ki[1]);
u.clone(u.UNIT_Z, ki[2]);
var cn = new u,
    ep = new u,
    Uf = new Ne(new u(1, 0, 0), 0);
Bt.fromBoundingSphere = function(e, t) {
    c(t) || (t = new Bt);
    var r = ki.length,
        n = t.planes;
    n.length = 2 * r;
    for (var i = e.center, a = e.radius, o = 0, s = 0; s < r; ++s) {
        var h = ki[s],
            f = n[o],
            l = n[o + 1];
        c(f) || (f = n[o] = new B), c(l) || (l = n[o + 1] = new B), u.multiplyByScalar(h, -a, cn), u.add(i, cn, cn), f.x = h.x, f.y = h.y, f.z = h.z, f.w = -u.dot(h, cn), u.multiplyByScalar(h, a, cn), u.add(i, cn, cn), l.x = -h.x, l.y = -h.y, l.z = -h.z, l.w = -u.dot(u.negate(h, ep), cn), o += 2
    }
    return t
};
Bt.prototype.computeVisibility = function(e) {
    for (var t = this.planes, r = !1, n = 0, i = t.length; n < i; ++n) {
        var a = e.intersectPlane(Ne.fromCartesian4(t[n], Uf));
        if (a === ft.OUTSIDE) return ft.OUTSIDE;
        a === ft.INTERSECTING && (r = !0)
    }
    return r ? ft.INTERSECTING : ft.INSIDE
};
Bt.prototype.computeVisibilityWithPlaneMask = function(e, t) {
    if (t === Bt.MASK_OUTSIDE || t === Bt.MASK_INSIDE) return t;
    for (var r = Bt.MASK_INSIDE, n = this.planes, i = 0, a = n.length; i < a; ++i) {
        var o = i < 31 ? 1 << i : 0;
        if (!(i < 31 && !(t & o))) {
            var s = e.intersectPlane(Ne.fromCartesian4(n[i], Uf));
            if (s === ft.OUTSIDE) return Bt.MASK_OUTSIDE;
            s === ft.INTERSECTING && (r |= o)
        }
    }
    return r
};
Bt.MASK_OUTSIDE = 4294967295;
Bt.MASK_INSIDE = 0;
Bt.MASK_INDETERMINATE = 2147483647;

function Zt(e) {
    e = v(e, v.EMPTY_OBJECT), this.left = e.left, this._left = void 0, this.right = e.right, this._right = void 0, this.top = e.top, this._top = void 0, this.bottom = e.bottom, this._bottom = void 0, this.near = v(e.near, 1), this._near = this.near, this.far = v(e.far, 5e8), this._far = this.far, this._cullingVolume = new Bt, this._orthographicMatrix = new y
}

function zf(e) {
    (e.top !== e._top || e.bottom !== e._bottom || e.left !== e._left || e.right !== e._right || e.near !== e._near || e.far !== e._far) && (e._left = e.left, e._right = e.right, e._top = e.top, e._bottom = e.bottom, e._near = e.near, e._far = e.far, e._orthographicMatrix = y.computeOrthographicOffCenter(e.left, e.right, e.bottom, e.top, e.near, e.far, e._orthographicMatrix))
}
Object.defineProperties(Zt.prototype, {
    projectionMatrix: {
        get: function() {
            return zf(this), this._orthographicMatrix
        }
    }
});
var tp = new u,
    rp = new u,
    np = new u,
    Zo = new u;
Zt.prototype.computeCullingVolume = function(e, t, r) {
    var n = this._cullingVolume.planes,
        i = this.top,
        a = this.bottom,
        o = this.right,
        s = this.left,
        h = this.near,
        f = this.far,
        l = u.cross(t, r, tp);
    u.normalize(l, l);
    var d = rp;
    u.multiplyByScalar(t, h, d), u.add(e, d, d);
    var m = np;
    u.multiplyByScalar(l, s, m), u.add(d, m, m);
    var _ = n[0];
    return c(_) || (_ = n[0] = new B), _.x = l.x, _.y = l.y, _.z = l.z, _.w = -u.dot(l, m), u.multiplyByScalar(l, o, m), u.add(d, m, m), _ = n[1], c(_) || (_ = n[1] = new B), _.x = -l.x, _.y = -l.y, _.z = -l.z, _.w = -u.dot(u.negate(l, Zo), m), u.multiplyByScalar(r, a, m), u.add(d, m, m), _ = n[2], c(_) || (_ = n[2] = new B), _.x = r.x, _.y = r.y, _.z = r.z, _.w = -u.dot(r, m), u.multiplyByScalar(r, i, m), u.add(d, m, m), _ = n[3], c(_) || (_ = n[3] = new B), _.x = -r.x, _.y = -r.y, _.z = -r.z, _.w = -u.dot(u.negate(r, Zo), m), _ = n[4], c(_) || (_ = n[4] = new B), _.x = t.x, _.y = t.y, _.z = t.z, _.w = -u.dot(t, d), u.multiplyByScalar(t, f, m), u.add(e, m, m), _ = n[5], c(_) || (_ = n[5] = new B), _.x = -t.x, _.y = -t.y, _.z = -t.z, _.w = -u.dot(u.negate(t, Zo), m), this._cullingVolume
};
Zt.prototype.getPixelDimensions = function(e, t, r, n, i) {
    zf(this);
    var a = this.right - this.left,
        o = this.top - this.bottom,
        s = n * a / e,
        h = n * o / t;
    return i.x = s, i.y = h, i
};
Zt.prototype.clone = function(e) {
    return c(e) || (e = new Zt), e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e._left = void 0, e._right = void 0, e._top = void 0, e._bottom = void 0, e._near = void 0, e._far = void 0, e
};
Zt.prototype.equals = function(e) {
    return c(e) && e instanceof Zt && this.right === e.right && this.left === e.left && this.top === e.top && this.bottom === e.bottom && this.near === e.near && this.far === e.far
};
Zt.prototype.equalsEpsilon = function(e, t, r) {
    return e === this || c(e) && e instanceof Zt && p.equalsEpsilon(this.right, e.right, t, r) && p.equalsEpsilon(this.left, e.left, t, r) && p.equalsEpsilon(this.top, e.top, t, r) && p.equalsEpsilon(this.bottom, e.bottom, t, r) && p.equalsEpsilon(this.near, e.near, t, r) && p.equalsEpsilon(this.far, e.far, t, r)
};

function $e(e) {
    e = v(e, v.EMPTY_OBJECT), this._offCenterFrustum = new Zt, this.width = e.width, this._width = void 0, this.aspectRatio = e.aspectRatio, this._aspectRatio = void 0, this.near = v(e.near, 1), this._near = this.near, this.far = v(e.far, 5e8), this._far = this.far
}
$e.packedLength = 4;
$e.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.width, t[r++] = e.aspectRatio, t[r++] = e.near, t[r] = e.far, t
};
$e.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new $e), r.width = e[t++], r.aspectRatio = e[t++], r.near = e[t++], r.far = e[t], r
};

function Fn(e) {
    var t = e._offCenterFrustum;
    if (e.width !== e._width || e.aspectRatio !== e._aspectRatio || e.near !== e._near || e.far !== e._far) {
        e._aspectRatio = e.aspectRatio, e._width = e.width, e._near = e.near, e._far = e.far;
        var r = 1 / e.aspectRatio;
        t.right = e.width * .5, t.left = -t.right, t.top = r * t.right, t.bottom = -t.top, t.near = e.near, t.far = e.far
    }
}
Object.defineProperties($e.prototype, {
    projectionMatrix: {
        get: function() {
            return Fn(this), this._offCenterFrustum.projectionMatrix
        }
    }
});
$e.prototype.computeCullingVolume = function(e, t, r) {
    return Fn(this), this._offCenterFrustum.computeCullingVolume(e, t, r)
};
$e.prototype.getPixelDimensions = function(e, t, r, n, i) {
    return Fn(this), this._offCenterFrustum.getPixelDimensions(e, t, r, n, i)
};
$e.prototype.clone = function(e) {
    return c(e) || (e = new $e), e.aspectRatio = this.aspectRatio, e.width = this.width, e.near = this.near, e.far = this.far, e._aspectRatio = void 0, e._width = void 0, e._near = void 0, e._far = void 0, this._offCenterFrustum.clone(e._offCenterFrustum), e
};
$e.prototype.equals = function(e) {
    return !c(e) || !(e instanceof $e) ? !1 : (Fn(this), Fn(e), this.width === e.width && this.aspectRatio === e.aspectRatio && this._offCenterFrustum.equals(e._offCenterFrustum))
};
$e.prototype.equalsEpsilon = function(e, t, r) {
    return !c(e) || !(e instanceof $e) ? !1 : (Fn(this), Fn(e), p.equalsEpsilon(this.width, e.width, t, r) && p.equalsEpsilon(this.aspectRatio, e.aspectRatio, t, r) && this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum, t, r))
};

function no() {
    return E(this.constructor.name)
}

function ip() {
    return E(this.constructor.name)
}
var We = {},
    Ko = {
        up: {
            south: "east",
            north: "west",
            west: "south",
            east: "north"
        },
        down: {
            south: "west",
            north: "east",
            west: "north",
            east: "south"
        },
        south: {
            up: "west",
            down: "east",
            west: "down",
            east: "up"
        },
        north: {
            up: "east",
            down: "west",
            west: "up",
            east: "down"
        },
        west: {
            up: "north",
            down: "south",
            north: "down",
            south: "up"
        },
        east: {
            up: "south",
            down: "north",
            north: "up",
            south: "down"
        }
    },
    ei = {
        north: [-1, 0, 0],
        east: [0, 1, 0],
        up: [0, 0, 1],
        south: [1, 0, 0],
        west: [0, -1, 0],
        down: [0, 0, -1]
    },
    Qo = {},
    qt = {
        east: new u,
        north: new u,
        up: new u,
        west: new u,
        south: new u,
        down: new u
    },
    hn = new u,
    fn = new u,
    ln = new u;
const go = We.localFrameToFixedFrameGenerator = function(e, t) {
        if (!Ko.hasOwnProperty(e) || !Ko[e].hasOwnProperty(t)) throw new ye("firstAxis and secondAxis must be east, north, up, west, south or down.");
        var r = Ko[e][t],
            n, i = e + t;
        return c(Qo[i]) ? n = Qo[i] : (n = function(a, o, s) {
            if (c(s) || (s = new y), u.equalsEpsilon(a, u.ZERO, p.EPSILON14)) u.unpack(ei[e], 0, hn), u.unpack(ei[t], 0, fn), u.unpack(ei[r], 0, ln);
            else if (p.equalsEpsilon(a.x, 0, p.EPSILON14) && p.equalsEpsilon(a.y, 0, p.EPSILON14)) {
                var h = p.sign(a.z);
                u.unpack(ei[e], 0, hn), e !== "east" && e !== "west" && u.multiplyByScalar(hn, h, hn), u.unpack(ei[t], 0, fn), t !== "east" && t !== "west" && u.multiplyByScalar(fn, h, fn), u.unpack(ei[r], 0, ln), r !== "east" && r !== "west" && u.multiplyByScalar(ln, h, ln)
            } else {
                o = v(o, se.WGS84), o.geodeticSurfaceNormal(a, qt.up);
                var f = qt.up,
                    l = qt.east;
                l.x = -a.y, l.y = a.x, l.z = 0, u.normalize(l, qt.east), u.cross(f, l, qt.north), u.multiplyByScalar(qt.up, -1, qt.down), u.multiplyByScalar(qt.east, -1, qt.west), u.multiplyByScalar(qt.north, -1, qt.south), hn = qt[e], fn = qt[t], ln = qt[r]
            }
            return s[0] = hn.x, s[1] = hn.y, s[2] = hn.z, s[3] = 0, s[4] = fn.x, s[5] = fn.y, s[6] = fn.z, s[7] = 0, s[8] = ln.x, s[9] = ln.y, s[10] = ln.z, s[11] = 0, s[12] = a.x, s[13] = a.y, s[14] = a.z, s[15] = 1, s
        }, Qo[i] = n), n
    },
    ap = We.eastNorthUpToFixedFrame = go("east", "north");
We.northEastDownToFixedFrame = go("north", "east");
We.northUpEastToFixedFrame = go("north", "up");
We.northWestUpToFixedFrame = go("north", "west");
We.headingPitchRollToFixedFrame = E("Transforms.headingPitchRollToFixedFrame");
var op = new y,
    sp = new P;
We.headingPitchRollQuaternion = function(e, t, r, n, i) {
    var a = We.headingPitchRollToFixedFrame(e, t, r, n, op),
        o = y.getMatrix3(a, sp);
    return no.fromRotationMatrix(o, i)
};
var up = new u(1, 1, 1),
    cp = new u,
    hc = new y,
    hp = new y,
    fp = new P,
    lp = new no;
We.fixedFrameToHeadingPitchRoll = function(e, t, r, n) {
    t = v(t, se.WGS84), r = v(r, We.eastNorthUpToFixedFrame), c(n) || (n = new Ct);
    var i = y.getTranslation(e, cp);
    if (u.equals(i, u.ZERO)) return n.heading = 0, n.pitch = 0, n.roll = 0, n;
    var a = y.inverseTransformation(r(i, t, hc), hc),
        o = y.setScale(e, up, hp);
    o = y.setTranslation(o, u.ZERO, o), a = y.multiply(a, o, a);
    var s = no.fromRotationMatrix(y.getMatrix3(a, fp), lp);
    return s = no.normalize(s, s), Ct.fromQuaternion(s, n)
};
We.computeTemeToPseudoFixedMatrix = E("Transforms.computeTemeToPseudoFixedMatrix");
We.iau2006XysData = E("new Iau2006XysData()");
We.preloadIcrfFixed = E("Transforms.preloadIcrfFixed");
We.computeIcrfToFixedMatrix = E("Transforms.computeIcrfToFixedMatrix");
new ip;
We.computeFixedToIcrfMatrix = E("Transforms.computeFixedToIcrfMatrix");
We.pointToWindowCoordinates = E("Transforms.pointToWindowCoordinates");
We.pointToGLWindowCoordinates = E("Transforms.pointToGLWindowCoordinates");
We.rotationMatrixFromPositionVelocity = E("Transforms.rotationMatrixFromPositionVelocity");
We.basisTo2D = E("Transforms.basisTo2D");
We.wgs84To2DModelMatrix = E("Transforms.wgs84To2DModelMatrix");
var Ka = {
    MORPHING: 0,
    COLUMBUS_VIEW: 1,
    SCENE2D: 2,
    SCENE3D: 3
};
Ka.getMorphTime = function(e) {
    return e === Ka.SCENE3D ? 1 : e === Ka.MORPHING ? void 0 : 0
};
const Q = Object.freeze(Ka);
var dp = new B(0, 0, 0, 1),
    St = new B,
    _p = new Re,
    $o = new R,
    Jo = new R;
const qC = function(e, t, r) {
    return gp(e, t, u.ZERO, r)
};
var fc = new B,
    lc = new u;

function Ni(e, t, r, n) {
    var i = r.viewMatrix,
        a = y.multiplyByVector(i, B.fromElements(e.x, e.y, e.z, 1, fc), fc),
        o = u.multiplyComponents(t, u.normalize(a, lc), lc);
    return a.x += t.x + o.x, a.y += t.y + o.y, a.z += o.z, y.multiplyByVector(r.frustum.projectionMatrix, a, n)
}
var mp = new re(Math.PI, p.PI_OVER_TWO),
    vp = new u,
    pp = new u;
const gp = function(e, t, r, n) {
    var i = e.frameState,
        a = yp(i, t, dp);
    if (c(a)) {
        var o = e.canvas,
            s = _p;
        s.x = 0, s.y = 0, s.width = o.clientWidth, s.height = o.clientHeight;
        var h = e.camera,
            f = !1;
        if (i.mode === Q.SCENE2D) {
            var l = e.mapProjection,
                d = mp,
                m = l.project(d, vp),
                _ = u.clone(h.position, pp),
                g = h.frustum.clone(),
                T = y.computeViewportTransformation(s, 0, 1, new y),
                C = h.frustum.projectionMatrix,
                A = h.positionWC.y,
                S = u.fromElements(p.sign(A) * m.x - A, 0, -h.positionWC.x),
                x = We.pointToGLWindowCoordinates(C, T, S);
            if (A === 0 || x.x <= 0 || x.x >= o.clientWidth) f = !0;
            else {
                if (x.x > o.clientWidth * .5) {
                    s.width = x.x, h.frustum.right = m.x - A, St = Ni(a, r, h, St), Mi(s, St, $o), s.x += x.x, h.position.x = -h.position.x;
                    var I = h.frustum.right;
                    h.frustum.right = -h.frustum.left, h.frustum.left = -I, St = Ni(a, r, h, St), Mi(s, St, Jo)
                } else {
                    s.x += x.x, s.width -= x.x, h.frustum.left = -m.x - A, St = Ni(a, r, h, St), Mi(s, St, $o), s.x = s.x - s.width, h.position.x = -h.position.x;
                    var O = h.frustum.left;
                    h.frustum.left = -h.frustum.right, h.frustum.right = -O, St = Ni(a, r, h, St), Mi(s, St, Jo)
                }
                u.clone(_, h.position), h.frustum = g.clone(), n = R.clone($o, n), (n.x < 0 || n.x > o.clientWidth) && (n.x = Jo.x)
            }
        }
        if (i.mode !== Q.SCENE2D || f) {
            if (St = Ni(a, r, h, St), St.z < 0 && !(h.frustum instanceof $e) && !(h.frustum instanceof Zt)) return;
            n = Mi(s, St, n)
        }
        return n.y = o.clientHeight - n.y, n
    }
};
var Jr = new u,
    Tp = new re;
const yp = function(e, t, r) {
    var n = e.mode;
    if (n === Q.SCENE3D) return u.clone(t, r);
    var i = e.mapProjection,
        a = i.ellipsoid.cartesianToCartographic(t, Tp);
    if (c(a)) {
        if (i.project(a, Jr), n === Q.COLUMBUS_VIEW) return u.fromElements(Jr.z, Jr.x, Jr.y, r);
        if (n === Q.SCENE2D) return u.fromElements(0, Jr.x, Jr.y, r);
        var o = e.morphTime;
        return u.fromElements(p.lerp(Jr.z, t.x, o), p.lerp(Jr.x, t.y, o), p.lerp(Jr.y, t.z, o), r)
    }
};
var dc = new u,
    _c = new u,
    mc = new y;
const Mi = function(e, t, r) {
    return u.divideByScalar(t, t.w, dc), y.computeViewportTransformation(e, 0, 1, mc), y.multiplyByPoint(mc, dc, _c), R.fromCartesian3(_c, r)
};

function yn(e) {
    e = v(e, v.EMPTY_OBJECT), this._ellipsoid = v(e.ellipsoid, se.WGS84), this._rectangle = v(e.rectangle, L.MAX_VALUE), this._projection = new jr(this._ellipsoid), this._numberOfLevelZeroTilesX = v(e.numberOfLevelZeroTilesX, 2), this._numberOfLevelZeroTilesY = v(e.numberOfLevelZeroTilesY, 1)
}
Object.defineProperties(yn.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    },
    projection: {
        get: function() {
            return this._projection
        }
    }
});
yn.prototype.getNumberOfXTilesAtLevel = function(e) {
    return this._numberOfLevelZeroTilesX << e
};
yn.prototype.getNumberOfYTilesAtLevel = function(e) {
    return this._numberOfLevelZeroTilesY << e
};
yn.prototype.rectangleToNativeRectangle = function(e, t) {
    var r = p.toDegrees(e.west),
        n = p.toDegrees(e.south),
        i = p.toDegrees(e.east),
        a = p.toDegrees(e.north);
    return c(t) ? (t.west = r, t.south = n, t.east = i, t.north = a, t) : new L(r, n, i, a)
};
yn.prototype.tileXYToNativeRectangle = function(e, t, r, n) {
    var i = this.tileXYToRectangle(e, t, r, n);
    return i.west = p.toDegrees(i.west), i.south = p.toDegrees(i.south), i.east = p.toDegrees(i.east), i.north = p.toDegrees(i.north), i
};
yn.prototype.tileXYToRectangle = function(e, t, r, n) {
    var i = this._rectangle,
        a = this.getNumberOfXTilesAtLevel(r),
        o = this.getNumberOfYTilesAtLevel(r),
        s = i.width / a,
        h = e * s + i.west,
        f = (e + 1) * s + i.west,
        l = i.height / o,
        d = i.north - t * l,
        m = i.north - (t + 1) * l;
    return c(n) || (n = new L(h, m, f, d)), n.west = h, n.south = m, n.east = f, n.north = d, n
};
yn.prototype.positionToTileXY = function(e, t, r) {
    var n = this._rectangle;
    if (L.contains(n, e)) {
        var i = this.getNumberOfXTilesAtLevel(t),
            a = this.getNumberOfYTilesAtLevel(t),
            o = n.width / i,
            s = n.height / a,
            h = e.longitude;
        n.east < n.west && (h += p.TWO_PI);
        var f = (h - n.west) / o | 0;
        f >= i && (f = i - 1);
        var l = (n.north - e.latitude) / s | 0;
        return l >= a && (l = a - 1), c(r) ? (r.x = f, r.y = l, r) : new R(f, l)
    }
};
var Ep = {
    NONE: 0,
    LERC: 1
};
const Cp = Object.freeze(Ep);

function or(e, t, r) {
    this.minimum = u.clone(v(e, u.ZERO)), this.maximum = u.clone(v(t, u.ZERO)), c(r) ? r = u.clone(r) : r = u.midpoint(this.minimum, this.maximum, new u), this.center = r
}
or.fromPoints = E("AxisAlignedBoundingBox.fromPoints");
or.clone = E("AxisAlignedBoundingBox.clone");
or.equals = function(e, t) {
    return e === t || c(e) && c(t) && u.equals(e.center, t.center) && u.equals(e.minimum, t.minimum) && u.equals(e.maximum, t.maximum)
};
var pa = new u;
or.intersectPlane = function(e, t) {
    pa = u.subtract(e.maximum, e.minimum, pa);
    var r = u.multiplyByScalar(pa, .5, pa),
        n = t.normal,
        i = r.x * Math.abs(n.x) + r.y * Math.abs(n.y) + r.z * Math.abs(n.z),
        a = u.dot(e.center, n) + t.distance;
    return a - i > 0 ? ft.INSIDE : a + i < 0 ? ft.OUTSIDE : ft.INTERSECTING
};
or.prototype.clone = function(e) {
    return or.clone(this, e)
};
or.prototype.intersectPlane = function(e) {
    return or.intersectPlane(this, e)
};
or.prototype.equals = function(e) {
    return or.equals(this, e)
};

function Nr(e, t) {
    this._ellipsoid = e, this._cameraPosition = new u, this._cameraPositionInScaledSpace = new u, this._distanceToLimbInScaledSpaceSquared = 0, c(t) && (this.cameraPosition = t)
}
Object.defineProperties(Nr.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    cameraPosition: {
        get: function() {
            return this._cameraPosition
        },
        set: function(e) {
            var t = this._ellipsoid,
                r = t.transformPositionToScaledSpace(e, this._cameraPositionInScaledSpace),
                n = u.magnitudeSquared(r) - 1;
            u.clone(e, this._cameraPosition), this._cameraPositionInScaledSpace = r, this._distanceToLimbInScaledSpaceSquared = n
        }
    }
});
var Vf = new u;
Nr.prototype.isPointVisible = function(e) {
    var t = this._ellipsoid,
        r = t.transformPositionToScaledSpace(e, Vf);
    return pu(r, this._cameraPositionInScaledSpace, this._distanceToLimbInScaledSpaceSquared)
};
Nr.prototype.isScaledSpacePointVisible = function(e) {
    return pu(e, this._cameraPositionInScaledSpace, this._distanceToLimbInScaledSpaceSquared)
};
var Ap = new u;
Nr.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid = function(e, t) {
    var r = this._ellipsoid,
        n, i;
    return c(t) && t < 0 && r.minimumRadius > -t ? (i = Ap, i.x = this._cameraPosition.x / (r.radii.x + t), i.y = this._cameraPosition.y / (r.radii.y + t), i.z = this._cameraPosition.z / (r.radii.z + t), n = i.x * i.x + i.y * i.y + i.z * i.z - 1) : (i = this._cameraPositionInScaledSpace, n = this._distanceToLimbInScaledSpaceSquared), pu(e, i, n)
};
Nr.prototype.computeHorizonCullingPoint = function(e, t, r) {
    return Wf(this._ellipsoid, e, t, r)
};
var Gf = se.clone(se.UNIT_SPHERE);
Nr.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid = function(e, t, r, n) {
    var i = Hf(this._ellipsoid, r, Gf);
    return Wf(i, e, t, n)
};
Nr.prototype.computeHorizonCullingPointFromVertices = function(e, t, r, n, i) {
    return qf(this._ellipsoid, e, t, r, n, i)
};
Nr.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid = function(e, t, r, n, i, a) {
    var o = Hf(this._ellipsoid, i, Gf);
    return qf(o, e, t, r, n, a)
};
Nr.prototype.computeHorizonCullingPointFromRectangle = E("EllipsoidalOccluder.prototype.computeHorizonCullingPointFromRectangle");
var wp = new u;

function Hf(e, t, r) {
    if (c(t) && t < 0 && e.minimumRadius > -t) {
        var n = u.fromElements(e.radii.x + t, e.radii.y + t, e.radii.z + t, wp);
        e = se.fromCartesian3(n, r)
    }
    return e
}

function Wf(e, t, r, n) {
    c(n) || (n = new u);
    for (var i = jf(e, t), a = 0, o = 0, s = r.length; o < s; ++o) {
        var h = r[o],
            f = kf(e, h, i);
        if (f < 0) return;
        a = Math.max(a, f)
    }
    return Yf(i, a, n)
}
var ga = new u;

function qf(e, t, r, n, i, a) {
    c(a) || (a = new u), n = v(n, 3), i = v(i, u.ZERO);
    for (var o = jf(e, t), s = 0, h = 0, f = r.length; h < f; h += n) {
        ga.x = r[h] + i.x, ga.y = r[h + 1] + i.y, ga.z = r[h + 2] + i.z;
        var l = kf(e, ga, o);
        if (l < 0) return;
        s = Math.max(s, l)
    }
    return Yf(o, s, a)
}

function pu(e, t, r) {
    var n = t,
        i = r,
        a = u.subtract(e, n, Vf),
        o = -u.dot(a, n),
        s = i < 0 ? o > 0 : o > i && o * o / u.magnitudeSquared(a) > i;
    return !s
}
var Rp = new u,
    xp = new u;

function kf(e, t, r) {
    var n = e.transformPositionToScaledSpace(t, Rp),
        i = u.magnitudeSquared(n),
        a = Math.sqrt(i),
        o = u.divideByScalar(n, a, xp);
    i = Math.max(1, i), a = Math.max(1, a);
    var s = u.dot(o, r),
        h = u.magnitude(u.cross(o, r, o)),
        f = 1 / a,
        l = Math.sqrt(i - 1) * f;
    return 1 / (s * f - h * l)
}

function Yf(e, t, r) {
    if (!(t <= 0 || t === 1 / 0 || t !== t)) return u.multiplyByScalar(e, t, r)
}
var es = new u;

function jf(e, t) {
    return u.equals(t, u.ZERO) ? t : (e.transformPositionToScaledSpace(t, es), u.normalize(es, es))
}
var vc = 1 / 256,
    Se = {};
Se.octEncodeInRange = function(e, t, r) {
    if (r.x = e.x / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z)), r.y = e.y / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z)), e.z < 0) {
        var n = r.x,
            i = r.y;
        r.x = (1 - Math.abs(i)) * p.signNotZero(n), r.y = (1 - Math.abs(n)) * p.signNotZero(i)
    }
    return r.x = p.toSNorm(r.x, t), r.y = p.toSNorm(r.y, t), r
};
Se.octEncode = function(e, t) {
    return Se.octEncodeInRange(e, 255, t)
};
var Di = new R,
    pc = new Uint8Array(1);

function Ta(e) {
    return pc[0] = e, pc[0]
}
Se.octEncodeToCartesian4 = function(e, t) {
    return Se.octEncodeInRange(e, 65535, Di), t.x = Ta(Di.x * vc), t.y = Ta(Di.x), t.z = Ta(Di.y * vc), t.w = Ta(Di.y), t
};
Se.octDecodeInRange = function(e, t, r, n) {
    if (n.x = p.fromSNorm(e, r), n.y = p.fromSNorm(t, r), n.z = 1 - (Math.abs(n.x) + Math.abs(n.y)), n.z < 0) {
        var i = n.x;
        n.x = (1 - Math.abs(n.y)) * p.signNotZero(i), n.y = (1 - Math.abs(i)) * p.signNotZero(n.y)
    }
    return u.normalize(n, n)
};
Se.octDecode = function(e, t, r) {
    return Se.octDecodeInRange(e, t, 255, r)
};
Se.octDecodeFromCartesian4 = E("AttributeCompression.octDecodeFromCartesian4");
const Sp = Se.octPackFloat = function(e) {
    return 256 * e.x + e.y
};
var Fs = new R;
Se.octEncodeFloat = function(e) {
    return Se.octEncode(e, Fs), Se.octPackFloat(Fs)
};
Se.octDecodeFloat = function(e, t) {
    var r = e / 256,
        n = Math.floor(r),
        i = (r - n) * 256;
    return Se.octDecode(n, i, t)
};
Se.octPack = function(e, t, r, n) {
    var i = Se.octEncodeFloat(e),
        a = Se.octEncodeFloat(t),
        o = Se.octEncode(r, Fs);
    return n.x = 65536 * o.x + i, n.y = 65536 * o.y + a, n
};
Se.octUnpack = function(e, t, r, n) {
    var i = e.x / 65536,
        a = Math.floor(i),
        o = (i - a) * 65536;
    i = e.y / 65536;
    var s = Math.floor(i),
        h = (i - s) * 65536;
    Se.octDecodeFloat(o, t), Se.octDecodeFloat(h, r), Se.octDecode(a, s, n)
};
const ya = Se.compressTextureCoordinates = function(e) {
        var t = e.x * 4095 | 0,
            r = e.y * 4095 | 0;
        return 4096 * t + r
    },
    Yi = Se.decompressTextureCoordinates = function(e, t) {
        var r = e / 4096,
            n = Math.floor(r);
        return t.x = n / 4095, t.y = (e - n * 4096) / 4095, t
    };
Se.zigZagDeltaDecode = E("AttributeCompression.zigZagDeltaDecode");
var Ip = {
    NONE: 0,
    BITS12: 1
};
const ir = Object.freeze(Ip);
var In = new u,
    Op = new u,
    _r = new R,
    Ea = new y,
    Pp = new y,
    Np = Math.pow(2, 12);

function Kt(e, t, r, n, i, a) {
    var o = ir.NONE,
        s, h, f;
    if (c(e) && c(t) && c(r) && c(n)) {
        var l = e.minimum,
            d = e.maximum,
            m = u.subtract(d, l, Op),
            _ = r - t,
            g = Math.max(u.maximumComponent(m), _);
        g < Np - 1 ? o = ir.BITS12 : o = ir.NONE, s = e.center, h = y.inverseTransformation(n, new y);
        var T = u.negate(l, In);
        y.multiply(y.fromTranslation(T, Ea), h, h);
        var C = In;
        C.x = 1 / m.x, C.y = 1 / m.y, C.z = 1 / m.z, y.multiply(y.fromScale(C, Ea), h, h), f = y.clone(n), y.setTranslation(f, u.ZERO, f), n = y.clone(n, new y);
        var A = y.fromTranslation(l, Ea),
            S = y.fromScale(m, Pp),
            x = y.multiply(A, S, Ea);
        y.multiply(n, x, n), y.multiply(f, x, f)
    }
    this.quantization = o, this.minimumHeight = t, this.maximumHeight = r, this.center = s, this.toScaledENU = h, this.fromScaledENU = n, this.matrix = f, this.hasVertexNormals = i, this.hasWebMercatorT = v(a, !1)
}
Kt.prototype.encode = function(e, t, r, n, i, a, o) {
    var s = n.x,
        h = n.y;
    if (this.quantization === ir.BITS12) {
        r = y.multiplyByPoint(this.toScaledENU, r, In), r.x = p.clamp(r.x, 0, 1), r.y = p.clamp(r.y, 0, 1), r.z = p.clamp(r.z, 0, 1);
        var f = this.maximumHeight - this.minimumHeight,
            l = p.clamp((i - this.minimumHeight) / f, 0, 1);
        R.fromElements(r.x, r.y, _r);
        var d = ya(_r);
        R.fromElements(r.z, l, _r);
        var m = ya(_r);
        R.fromElements(s, h, _r);
        var _ = ya(_r);
        if (e[t++] = d, e[t++] = m, e[t++] = _, this.hasWebMercatorT) {
            R.fromElements(o, 0, _r);
            var g = ya(_r);
            e[t++] = g
        }
    } else u.subtract(r, this.center, In), e[t++] = In.x, e[t++] = In.y, e[t++] = In.z, e[t++] = i, e[t++] = s, e[t++] = h, this.hasWebMercatorT && (e[t++] = o);
    return this.hasVertexNormals && (e[t++] = Sp(a)), t
};
Kt.prototype.decodePosition = function(e, t, r) {
    if (c(r) || (r = new u), t *= this.getStride(), this.quantization === ir.BITS12) {
        var n = Yi(e[t], _r);
        r.x = n.x, r.y = n.y;
        var i = Yi(e[t + 1], _r);
        return r.z = i.x, y.multiplyByPoint(this.fromScaledENU, r, r)
    }
    return r.x = e[t], r.y = e[t + 1], r.z = e[t + 2], u.add(r, this.center, r)
};
Kt.prototype.decodeTextureCoordinates = function(e, t, r) {
    return c(r) || (r = new R), t *= this.getStride(), this.quantization === ir.BITS12 ? Yi(e[t + 2], r) : R.fromElements(e[t + 4], e[t + 5], r)
};
Kt.prototype.decodeHeight = function(e, t) {
    if (t *= this.getStride(), this.quantization === ir.BITS12) {
        var r = Yi(e[t + 1], _r);
        return r.y * (this.maximumHeight - this.minimumHeight) + this.minimumHeight
    }
    return e[t + 3]
};
Kt.prototype.decodeWebMercatorT = function(e, t) {
    return t *= this.getStride(), this.quantization === ir.BITS12 ? Yi(e[t + 3], _r).x : e[t + 6]
};
Kt.prototype.getOctEncodedNormal = function(e, t, r) {
    var n = this.getStride();
    t = (t + 1) * n - 1;
    var i = e[t] / 256,
        a = Math.floor(i),
        o = (i - a) * 256;
    return R.fromElements(a, o, r)
};
Kt.prototype.getStride = function() {
    var e;
    switch (this.quantization) {
        case ir.BITS12:
            e = 3;
            break;
        default:
            e = 6
    }
    return this.hasWebMercatorT && ++e, this.hasVertexNormals && ++e, e
};
var Bs = {
        position3DAndHeight: 0,
        textureCoordAndEncodedNormals: 1
    },
    Qa = {
        compressed0: 0,
        compressed1: 1
    };
Kt.prototype.getAttributes = function(e) {
    var t = Be.FLOAT,
        r = Be.getSizeInBytes(t),
        n;
    if (this.quantization === ir.NONE) {
        var i = 4,
            a = 2;
        return this.hasWebMercatorT && ++a, this.hasVertexNormals && ++a, n = (i + a) * r, [{
            index: Bs.position3DAndHeight,
            vertexBuffer: e,
            componentDatatype: t,
            componentsPerAttribute: i,
            offsetInBytes: 0,
            strideInBytes: n
        }, {
            index: Bs.textureCoordAndEncodedNormals,
            vertexBuffer: e,
            componentDatatype: t,
            componentsPerAttribute: a,
            offsetInBytes: i * r,
            strideInBytes: n
        }]
    }
    var o = 3,
        s = 0;
    return (this.hasWebMercatorT || this.hasVertexNormals) && ++o, this.hasWebMercatorT && this.hasVertexNormals ? (++s, n = (o + s) * r, [{
        index: Qa.compressed0,
        vertexBuffer: e,
        componentDatatype: t,
        componentsPerAttribute: o,
        offsetInBytes: 0,
        strideInBytes: n
    }, {
        index: Qa.compressed1,
        vertexBuffer: e,
        componentDatatype: t,
        componentsPerAttribute: s,
        offsetInBytes: o * r,
        strideInBytes: n
    }]) : [{
        index: Qa.compressed0,
        vertexBuffer: e,
        componentDatatype: t,
        componentsPerAttribute: o
    }]
};
Kt.prototype.getAttributeLocations = function() {
    return this.quantization === ir.NONE ? Bs : Qa
};
Kt.clone = function(e, t) {
    return c(t) || (t = new Kt), t.quantization = e.quantization, t.minimumHeight = e.minimumHeight, t.maximumHeight = e.maximumHeight, t.center = u.clone(e.center), t.toScaledENU = y.clone(e.toScaledENU), t.fromScaledENU = y.clone(e.fromScaledENU), t.matrix = y.clone(e.matrix), t.hasVertexNormals = e.hasVertexNormals, t.hasWebMercatorT = e.hasWebMercatorT, t
};
const Mp = function(e) {
        var t = e.east,
            r = e.west;
        return t < r && (t += p.TWO_PI), t - r
    },
    Dp = function(e) {
        return e.north - e.south
    };
var Nn = {};
Nn.DEFAULT_STRUCTURE = Object.freeze({
    heightScale: 1,
    heightOffset: 0,
    elementsPerHeight: 1,
    stride: 1,
    elementMultiplier: 256,
    isBigEndian: !1
});
var ts = new u,
    bp = new y,
    Lp = new u,
    Fp = new u;
Nn.computeVertices = function(e) {
    var t = Math.cos,
        r = Math.sin,
        n = Math.sqrt,
        i = Math.atan,
        a = Math.exp,
        o = p.PI_OVER_TWO,
        s = p.toRadians,
        h = e.width,
        f = e.height,
        l = e.skirtHeight,
        d = v(e.isGeographic, !0),
        m = v(e.ellipsoid, se.WGS84),
        _ = 1 / m.maximumRadius,
        g = e.nativeRectangle,
        T, C, A, S, x = e.rectangle;
    T = x.west, C = x.south, A = x.east, S = x.north;
    var I = e.relativeToCenter,
        O = c(I);
    I = O ? I : u.ZERO;
    var F = v(e.exaggeration, 1),
        b = v(e.includeWebMercatorT, !1),
        N = v(e.structure, Nn.DEFAULT_STRUCTURE),
        D = v(N.heightScale, Nn.DEFAULT_STRUCTURE.heightScale),
        V = v(N.heightOffset, Nn.DEFAULT_STRUCTURE.heightOffset),
        M = Mp(g),
        W = Dp(g),
        G = M / (h - 1),
        U = W / (f - 1);
    d || (M *= _, W *= _);
    var q = m.radiiSquared,
        Y = q.x,
        j = q.y,
        Z = q.z,
        le = 65536,
        ne = -65536,
        he = ap(I, m),
        De = y.inverseTransformation(he, bp),
        fe, at;
    b && (fe = Xo(C), at = 1 / (Xo(S) - fe));
    var qe = Lp;
    qe.x = Number.POSITIVE_INFINITY, qe.y = Number.POSITIVE_INFINITY, qe.z = Number.POSITIVE_INFINITY;
    var Fe = Fp;
    Fe.x = Number.NEGATIVE_INFINITY, Fe.y = Number.NEGATIVE_INFINITY, Fe.z = Number.NEGATIVE_INFINITY;
    var Te = Number.POSITIVE_INFINITY,
        rt = h * f,
        be = l > 0 ? h * 2 + f * 2 : 0,
        te = rt + be,
        vt = new Array(te),
        Ee = new Array(te),
        sr = new Array(te),
        Gt = b ? new Array(te) : [],
        ve = 0,
        Zr = f,
        Cr = 0,
        br = h;
    l > 0 && (--ve, ++Zr, --Cr, ++br);
    for (var sn = 1e-5, Qt = ve; Qt < Zr; ++Qt) {
        var bt = Qt;
        bt < 0 && (bt = 0), bt >= f && (bt = f - 1);
        var ur = g.north - U * bt;
        d ? ur = s(ur) : ur = o - 2 * i(a(-ur * _));
        var qn = (ur - C) / (S - C);
        qn = p.clamp(qn, 0, 1);
        var Cn = Qt === ve,
            kn = Qt === Zr - 1;
        l > 0 && (Cn ? ur += sn * W : kn && (ur -= sn * W));
        var ra = t(ur),
            An = r(ur),
            Ae = Z * An,
            Ue;
        b && (Ue = (Xo(ur) - fe) * at);
        for (var Ar = Cr; Ar < br; ++Ar) {
            var J = Ar;
            J < 0 && (J = 0), J >= h && (J = h - 1);
            var xt = 0;
            xt = (xt * D + V) * F, ne = Math.max(ne, xt), le = Math.min(le, xt);
            var Ht = g.west + G * J;
            d ? Ht = s(Ht) : Ht = Ht * _;
            var Yn = (Ht - T) / (A - T);
            Yn = p.clamp(Yn, 0, 1);
            var Wt = bt * h + J;
            if (l > 0) {
                var un = Ar === Cr,
                    Kr = Ar === br - 1,
                    jn = Cn || kn || un || Kr,
                    pt = (Cn || kn) && (un || Kr);
                if (pt) continue;
                jn && (xt -= l, un ? (Wt = rt + (f - bt - 1), Ht -= sn * M) : kn ? Wt = rt + f + (h - J - 1) : Kr ? (Wt = rt + f + h + bt, Ht += sn * M) : Cn && (Wt = rt + f + h + f + J))
            }
            var Lr = ra * t(Ht),
                Fr = ra * r(Ht),
                Ti = Y * Lr,
                Xn = j * Fr,
                yi = n(Ti * Lr + Xn * Fr + Ae * An),
                wn = 1 / yi,
                Ei = Ti * wn,
                Ci = Xn * wn,
                Ai = Ae * wn,
                wr = new u;
            wr.x = Ei + Lr * xt, wr.y = Ci + Fr * xt, wr.z = Ai + An * xt, vt[Wt] = wr, Ee[Wt] = xt, sr[Wt] = new R(Yn, qn), b && (Gt[Wt] = Ue), y.multiplyByPoint(De, wr, ts), u.minimumByComponent(ts, qe, qe), u.maximumByComponent(ts, Fe, Fe), Te = Math.min(Te, xt)
        }
    }
    var Zn;
    if (O) {
        var wi = new Nr(m);
        Zn = wi.computeHorizonCullingPointPossiblyUnderEllipsoid(I, vt, le)
    }
    for (var Ri = new or(qe, Fe, I), cr = new Kt(Ri, Te, ne, he, !1, b), Br = new Float32Array(te * cr.getStride()), na = 0, Qe = 0; Qe < te; ++Qe) na = cr.encode(Br, na, vt[Qe], sr[Qe], Ee[Qe], void 0, Gt[Qe]);
    return {
        vertices: Br,
        maximumHeight: ne,
        minimumHeight: le,
        encoding: cr,
        occludeePointInScaledSpace: Zn
    }
};
var At = {};
At.rayPlane = function(e, t, r) {
    c(r) || (r = new u);
    var n = e.origin,
        i = e.direction,
        a = t.normal,
        o = u.dot(a, i);
    if (!(Math.abs(o) < p.EPSILON15)) {
        var s = (-t.distance - u.dot(a, n)) / o;
        if (!(s < 0)) return r = u.multiplyByScalar(i, s, r), u.add(n, r, r)
    }
};
var Bp = new u,
    Up = new u,
    zp = new u,
    gc = new u,
    Tc = new u;
At.rayTriangleParametric = function(e, t, r, n, i) {
    i = v(i, !1);
    var a = e.origin,
        o = e.direction,
        s = u.subtract(r, t, Bp),
        h = u.subtract(n, t, Up),
        f = u.cross(o, h, zp),
        l = u.dot(s, f),
        d, m, _, g, T;
    if (i) {
        if (l < p.EPSILON6 || (d = u.subtract(a, t, gc), _ = u.dot(d, f), _ < 0 || _ > l) || (m = u.cross(d, s, Tc), g = u.dot(o, m), g < 0 || _ + g > l)) return;
        T = u.dot(h, m) / l
    } else {
        if (Math.abs(l) < p.EPSILON6) return;
        var C = 1 / l;
        if (d = u.subtract(a, t, gc), _ = u.dot(d, f) * C, _ < 0 || _ > 1 || (m = u.cross(d, s, Tc), g = u.dot(o, m) * C, g < 0 || _ + g > 1)) return;
        T = u.dot(h, m) * C
    }
    return T
};
At.rayTriangle = E("rayTriangle");
At.lineSegmentTriangle = E("lineSegmentTriangle");
At.raySphere = E("raySphere");
At.lineSegmentSphere = E("lineSegmentSphere");
var Vp = new u,
    Gp = new u;
At.rayEllipsoid = function(e, t) {
    var r = t.oneOverRadii,
        n = u.multiplyComponents(r, e.origin, Vp),
        i = u.multiplyComponents(r, e.direction, Gp),
        a = u.magnitudeSquared(n),
        o = u.dot(n, i),
        s, h, f, l, d;
    if (a > 1) {
        if (o >= 0) return;
        var m = o * o;
        if (s = a - 1, h = u.magnitudeSquared(i), f = h * s, m < f) return;
        if (m > f) {
            l = o * o - f, d = -o + Math.sqrt(l);
            var _ = d / h,
                g = s / d;
            return _ < g ? new Pn(_, g) : {
                start: g,
                stop: _
            }
        }
        var T = Math.sqrt(s / h);
        return new Pn(T, T)
    } else if (a < 1) return s = a - 1, h = u.magnitudeSquared(i), f = h * s, l = o * o - f, d = -o + Math.sqrt(l), new Pn(0, d / h);
    if (o < 0) return h = u.magnitudeSquared(i), new Pn(0, -o / h)
};
E("addWithCancellationCheck");
At.grazingAltitudeLocation = E("grazingAltitudeLocation");
At.lineSegmentPlane = E("lineSegmentPlane");
At.trianglePlaneIntersection = E("trianglePlaneIntersection");
var rs = new B;

function kr(e, t) {
    t = v(t, se.WGS84), e = t.scaleToGeodeticSurface(e);
    var r = We.eastNorthUpToFixedFrame(e, t);
    this._ellipsoid = t, this._origin = e, this._xAxis = u.fromCartesian4(y.getColumn(r, 0, rs)), this._yAxis = u.fromCartesian4(y.getColumn(r, 1, rs));
    var n = u.fromCartesian4(y.getColumn(r, 2, rs));
    this._plane = Ne.fromPointNormal(e, n)
}
Object.defineProperties(kr.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    origin: {
        get: function() {
            return this._origin
        }
    },
    plane: {
        get: function() {
            return this._plane
        }
    },
    xAxis: {
        get: function() {
            return this._xAxis
        }
    },
    yAxis: {
        get: function() {
            return this._yAxis
        }
    },
    zAxis: {
        get: function() {
            return this._plane.normal
        }
    }
});
var Hp = new or;
kr.fromPoints = function(e, t) {
    var r = or.fromPoints(e, Hp);
    return new kr(r.center, t)
};
var Xf = new Ir,
    io = new u;
kr.prototype.projectPointOntoPlane = function(e, t) {
    var r = Xf;
    r.origin = e, u.normalize(e, r.direction);
    var n = At.rayPlane(r, this._plane, io);
    if (c(n) || (u.negate(r.direction, r.direction), n = At.rayPlane(r, this._plane, io)), c(n)) {
        var i = u.subtract(n, this._origin, n),
            a = u.dot(this._xAxis, i),
            o = u.dot(this._yAxis, i);
        return c(t) ? (t.x = a, t.y = o, t) : new R(a, o)
    }
};
kr.prototype.projectPointsOntoPlane = function(e, t) {
    c(t) || (t = []);
    for (var r = 0, n = e.length, i = 0; i < n; i++) {
        var a = this.projectPointOntoPlane(e[i], t[r]);
        c(a) && (t[r] = a, r++)
    }
    return t.length = r, t
};
kr.prototype.projectPointToNearestOnPlane = function(e, t) {
    c(t) || (t = new R);
    var r = Xf;
    r.origin = e, u.clone(this._plane.normal, r.direction);
    var n = At.rayPlane(r, this._plane, io);
    c(n) || (u.negate(r.direction, r.direction), n = At.rayPlane(r, this._plane, io));
    var i = u.subtract(n, this._origin, n),
        a = u.dot(this._xAxis, i),
        o = u.dot(this._yAxis, i);
    return t.x = a, t.y = o, t
};
kr.prototype.projectPointsToNearestOnPlane = function(e, t) {
    c(t) || (t = []);
    var r = e.length;
    t.length = r;
    for (var n = 0; n < r; n++) t[n] = this.projectPointToNearestOnPlane(e[n], t[n]);
    return t
};
var Wp = new u;
kr.prototype.projectPointOntoEllipsoid = function(e, t) {
    c(t) || (t = new u);
    var r = this._ellipsoid,
        n = this._origin,
        i = this._xAxis,
        a = this._yAxis,
        o = Wp;
    return u.multiplyByScalar(i, e.x, o), t = u.add(n, o, t), u.multiplyByScalar(a, e.y, o), u.add(t, o, t), r.scaleToGeocentricSurface(t, t), t
};
kr.prototype.projectPointsOntoEllipsoid = function(e, t) {
    var r = e.length;
    c(t) ? t.length = r : t = new Array(r);
    for (var n = 0; n < r; ++n) t[n] = this.projectPointOntoEllipsoid(e[n], t[n]);
    return t
};

function xe(e, t) {
    this.center = u.clone(v(e, u.ZERO)), this.halfAxes = P.clone(v(t, P.ZERO))
}
xe.packedLength = u.packedLength + P.packedLength;
xe.pack = function(e, t, r) {
    return r = v(r, 0), u.pack(e.center, t, r), P.pack(e.halfAxes, t, r + u.packedLength), t
};
xe.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new xe), u.unpack(e, t, r.center), P.unpack(e, t + u.packedLength, r.halfAxes), r
};
var qp = new u,
    kp = new u,
    Yp = new u,
    jp = new u,
    Xp = new u,
    Zp = new u,
    Kp = new P,
    Qp = {
        unitary: new P,
        diagonal: new P
    };
xe.fromPoints = function(e, t) {
    if (c(t) || (t = new xe), !c(e) || e.length === 0) return t.halfAxes = P.ZERO, t.center = u.ZERO, t;
    var r, n = e.length,
        i = u.clone(e[0], qp);
    for (r = 1; r < n; r++) u.add(i, e[r], i);
    var a = 1 / n;
    u.multiplyByScalar(i, a, i);
    var o = 0,
        s = 0,
        h = 0,
        f = 0,
        l = 0,
        d = 0,
        m;
    for (r = 0; r < n; r++) m = u.subtract(e[r], i, kp), o += m.x * m.x, s += m.x * m.y, h += m.x * m.z, f += m.y * m.y, l += m.y * m.z, d += m.z * m.z;
    o *= a, s *= a, h *= a, f *= a, l *= a, d *= a;
    var _ = Kp;
    _[0] = o, _[1] = s, _[2] = h, _[3] = s, _[4] = f, _[5] = l, _[6] = h, _[7] = l, _[8] = d;
    var g = P.computeEigenDecomposition(_, Qp),
        T = P.clone(g.unitary, t.halfAxes),
        C = P.getColumn(T, 0, jp),
        A = P.getColumn(T, 1, Xp),
        S = P.getColumn(T, 2, Zp),
        x = -Number.MAX_VALUE,
        I = -Number.MAX_VALUE,
        O = -Number.MAX_VALUE,
        F = Number.MAX_VALUE,
        b = Number.MAX_VALUE,
        N = Number.MAX_VALUE;
    for (r = 0; r < n; r++) m = e[r], x = Math.max(u.dot(C, m), x), I = Math.max(u.dot(A, m), I), O = Math.max(u.dot(S, m), O), F = Math.min(u.dot(C, m), F), b = Math.min(u.dot(A, m), b), N = Math.min(u.dot(S, m), N);
    C = u.multiplyByScalar(C, .5 * (F + x), C), A = u.multiplyByScalar(A, .5 * (b + I), A), S = u.multiplyByScalar(S, .5 * (N + O), S);
    var D = u.add(C, A, t.center);
    u.add(D, S, D);
    var V = Yp;
    return V.x = x - F, V.y = I - b, V.z = O - N, u.multiplyByScalar(V, .5, V), P.multiplyByScale(t.halfAxes, V, t.halfAxes), t
};
var Zf = new u,
    $p = new u;

function yc(e, t, r, n, i, a, o, s, h, f, l) {
    c(l) || (l = new xe);
    var d = l.halfAxes;
    P.setColumn(d, 0, t, d), P.setColumn(d, 1, r, d), P.setColumn(d, 2, n, d);
    var m = Zf;
    m.x = (i + a) / 2, m.y = (o + s) / 2, m.z = (h + f) / 2;
    var _ = $p;
    _.x = (a - i) / 2, _.y = (s - o) / 2, _.z = (f - h) / 2;
    var g = l.center;
    return m = P.multiplyByVector(d, m, m), u.add(e, m, g), P.multiplyByScale(d, _, d), l
}
var Ec = new re,
    Jp = new u,
    e0 = new re,
    t0 = new re,
    r0 = new re,
    n0 = new re,
    i0 = new re,
    a0 = new u,
    Cc = new u,
    o0 = new u,
    Ac = new u,
    s0 = new u,
    u0 = new R,
    c0 = new R,
    h0 = new R,
    f0 = new R,
    l0 = new R,
    d0 = new u,
    _0 = new u,
    m0 = new u,
    v0 = new u,
    p0 = new R,
    g0 = new u,
    T0 = new u,
    y0 = new u,
    E0 = new Ne(u.UNIT_X, 0);
xe.fromRectangle = function(e, t, r, n, i) {
    t = v(t, 0), r = v(r, 0), n = v(n, se.WGS84);
    var a, o, s, h, f, l, d;
    if (e.width <= p.PI) {
        var m = L.center(e, Ec),
            _ = n.cartographicToCartesian(m, Jp),
            g = new kr(_, n);
        d = g.plane;
        var T = m.longitude,
            C = e.south < 0 && e.north > 0 ? 0 : m.latitude,
            A = re.fromRadians(T, e.north, r, e0),
            S = re.fromRadians(e.west, e.north, r, t0),
            x = re.fromRadians(e.west, C, r, r0),
            I = re.fromRadians(e.west, e.south, r, n0),
            O = re.fromRadians(T, e.south, r, i0),
            F = n.cartographicToCartesian(A, a0),
            b = n.cartographicToCartesian(S, Cc),
            N = n.cartographicToCartesian(x, o0),
            D = n.cartographicToCartesian(I, Ac),
            V = n.cartographicToCartesian(O, s0),
            M = g.projectPointToNearestOnPlane(F, u0),
            W = g.projectPointToNearestOnPlane(b, c0),
            G = g.projectPointToNearestOnPlane(N, h0),
            U = g.projectPointToNearestOnPlane(D, f0),
            q = g.projectPointToNearestOnPlane(V, l0);
        return a = Math.min(W.x, G.x, U.x), o = -a, h = Math.max(W.y, M.y), s = Math.min(U.y, q.y), S.height = I.height = t, b = n.cartographicToCartesian(S, Cc), D = n.cartographicToCartesian(I, Ac), f = Math.min(Ne.getPointDistance(d, b), Ne.getPointDistance(d, D)), l = r, yc(g.origin, g.xAxis, g.yAxis, g.zAxis, a, o, s, h, f, l, i)
    }
    var Y = e.south > 0,
        j = e.north < 0,
        Z = Y ? e.south : j ? e.north : 0,
        le = L.center(e, Ec).longitude,
        ne = u.fromRadians(le, Z, r, n, d0);
    ne.z = 0;
    var he = Math.abs(ne.x) < p.EPSILON10 && Math.abs(ne.y) < p.EPSILON10,
        De = he ? u.UNIT_X : u.normalize(ne, _0),
        fe = u.UNIT_Z,
        at = u.cross(De, fe, m0);
    d = Ne.fromPointNormal(ne, De, E0);
    var qe = u.fromRadians(le + p.PI_OVER_TWO, Z, r, n, v0);
    o = u.dot(Ne.projectPointOntoPlane(d, qe, p0), at), a = -o, h = u.fromRadians(0, e.north, j ? t : r, n, g0).z, s = u.fromRadians(0, e.south, Y ? t : r, n, T0).z;
    var Fe = u.fromRadians(e.east, Z, r, n, y0);
    return f = Ne.getPointDistance(d, Fe), l = 0, yc(ne, at, fe, De, a, o, s, h, f, l, i)
};
xe.clone = function(e, t) {
    if (c(e)) return c(t) ? (u.clone(e.center, t.center), P.clone(e.halfAxes, t.halfAxes), t) : new xe(e.center, e.halfAxes)
};
xe.intersectPlane = function(e, t) {
    var r = e.center,
        n = t.normal,
        i = e.halfAxes,
        a = n.x,
        o = n.y,
        s = n.z,
        h = Math.abs(a * i[P.COLUMN0ROW0] + o * i[P.COLUMN0ROW1] + s * i[P.COLUMN0ROW2]) + Math.abs(a * i[P.COLUMN1ROW0] + o * i[P.COLUMN1ROW1] + s * i[P.COLUMN1ROW2]) + Math.abs(a * i[P.COLUMN2ROW0] + o * i[P.COLUMN2ROW1] + s * i[P.COLUMN2ROW2]),
        f = u.dot(n, r) + t.distance;
    return f <= -h ? ft.OUTSIDE : f >= h ? ft.INSIDE : ft.INTERSECTING
};
var Kf = new u,
    Qf = new u,
    $f = new u,
    C0 = new u;
xe.distanceSquaredTo = function(e, t) {
    var r = u.subtract(t, e.center, Zf),
        n = e.halfAxes,
        i = P.getColumn(n, 0, Kf),
        a = P.getColumn(n, 1, Qf),
        o = P.getColumn(n, 2, $f),
        s = u.magnitude(i),
        h = u.magnitude(a),
        f = u.magnitude(o);
    u.normalize(i, i), u.normalize(a, a), u.normalize(o, o);
    var l = C0;
    l.x = u.dot(r, i), l.y = u.dot(r, a), l.z = u.dot(r, o);
    var d = 0,
        m;
    return l.x < -s ? (m = l.x + s, d += m * m) : l.x > s && (m = l.x - s, d += m * m), l.y < -h ? (m = l.y + h, d += m * m) : l.y > h && (m = l.y - h, d += m * m), l.z < -f ? (m = l.z + f, d += m * m) : l.z > f && (m = l.z - f, d += m * m), d
};
var A0 = new u,
    w0 = new u;
xe.computePlaneDistances = function(e, t, r, n) {
    c(n) || (n = new Pn);
    var i = Number.POSITIVE_INFINITY,
        a = Number.NEGATIVE_INFINITY,
        o = e.center,
        s = e.halfAxes,
        h = P.getColumn(s, 0, Kf),
        f = P.getColumn(s, 1, Qf),
        l = P.getColumn(s, 2, $f),
        d = u.add(h, f, A0);
    u.add(d, l, d), u.add(d, o, d);
    var m = u.subtract(d, t, w0),
        _ = u.dot(r, m);
    return i = Math.min(_, i), a = Math.max(_, a), u.add(o, h, d), u.add(d, f, d), u.subtract(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.add(o, h, d), u.subtract(d, f, d), u.add(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.add(o, h, d), u.subtract(d, f, d), u.subtract(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.subtract(o, h, d), u.add(d, f, d), u.add(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.subtract(o, h, d), u.add(d, f, d), u.subtract(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.subtract(o, h, d), u.subtract(d, f, d), u.add(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), u.subtract(o, h, d), u.subtract(d, f, d), u.subtract(d, l, d), u.subtract(d, t, m), _ = u.dot(r, m), i = Math.min(_, i), a = Math.max(_, a), n.start = i, n.stop = a, n
};
var R0 = new ae;
xe.isOccluded = function(e, t) {
    var r = ae.fromOrientedBoundingBox(e, R0);
    return !t.isBoundingSphereVisible(r)
};
xe.prototype.intersectPlane = function(e) {
    return xe.intersectPlane(this, e)
};
xe.prototype.distanceSquaredTo = function(e) {
    return xe.distanceSquaredTo(this, e)
};
xe.prototype.computePlaneDistances = function(e, t, r) {
    return xe.computePlaneDistances(this, e, t, r)
};
xe.prototype.isOccluded = function(e) {
    return xe.isOccluded(this, e)
};
xe.equals = function(e, t) {
    return e === t || c(e) && c(t) && u.equals(e.center, t.center) && P.equals(e.halfAxes, t.halfAxes)
};
xe.prototype.clone = function(e) {
    return xe.clone(this, e)
};
xe.prototype.equals = function(e) {
    return xe.equals(this, e)
};
var Jf = /((?:.*\/)|^)Cesium\.js(?:\?|\#|$)/;

function x0() {
    for (var e = document.getElementsByTagName("script"), t = 0, r = e.length; t < r; ++t) {
        var n = e[t].getAttribute("src"),
            i = Jf.exec(n);
        if (i !== null) return i[1]
    }
}
var ti;

function S0(e) {
    return typeof document > "u" ? e : (c(ti) || (ti = document.createElement("a")), ti.href = e, ti.href = ti.href, ti.href)
}
var On;

function el() {
    if (c(On)) return On;
    var e;
    return typeof CESIUM_BASE_URL < "u" ? e = CESIUM_BASE_URL : typeof define == "object" && c(define.amd) && !define.amd.toUrlUndefined && c(require.toUrl) ? e = lo("..", pn("Core/buildModuleUrl.js")) : e = x0(), On = new k({
        url: S0(e)
    }), On.appendForwardSlash(), On
}

function tl(e) {
    var t = el().getDerivedResource({
        url: e
    });
    return t.url
}
var ns;

function pn(e) {
    c(ns) || (ns = tl);
    var t = ns(e);
    return t
}
pn._cesiumScriptRegex = Jf;
pn._buildModuleUrlFromBaseUrl = tl;
pn._clearBaseResource = function() {
    On = void 0
};
pn.setBaseUrl = function(e) {
    On = k.DEFAULT.getDerivedResource({
        url: e
    })
};
pn.getCesiumBaseUrl = el;

function I0() {
    if (!c(Tt._canTransferArrayBuffer)) {
        var e = new Worker(URL.createObjectURL(new Blob(['"undefined"==typeof self&&(self={}),self.onmessage=function(e){"use strict";var s=e.data.array,a=self.webkitPostMessage||self.postMessage;try{a({array:s},[s.buffer])}catch(e){a({})}};'], {
            type: "application/javascript"
        })));
        e.postMessage = v(e.webkitPostMessage, e.postMessage);
        var t = 99,
            r = new Int8Array([t]);
        try {
            e.postMessage({
                array: r
            }, [r.buffer])
        } catch (i) {
            return Tt._canTransferArrayBuffer = !1, Tt._canTransferArrayBuffer
        }
        var n = ge.defer();
        e.onmessage = function(i) {
            var a = i.data.array,
                o = c(a) && a[0] === t;
            n.resolve(o), e.terminate(), Tt._canTransferArrayBuffer = o
        }, Tt._canTransferArrayBuffer = n.promise
    }
    return Tt._canTransferArrayBuffer
}
var Us = new ze;

function O0(e, t) {
    --e._activeTasks;
    var r = t.id;
    if (c(r)) {
        var n = e._deferreds,
            i = n[r];
        if (c(t.error)) {
            var a = t.error;
            a.name === "RuntimeError" ? (a = new lt(t.error.message), a.stack = t.error.stack) : a.name === "DeveloperError" && (a = new ye(t.error.message), a.stack = t.error.stack), Us.raiseEvent(a), i.reject(a)
        } else Us.raiseEvent(), i.resolve(t.result);
        delete n[r]
    }
}

function P0(e) {
    var t = function() {
        let n, i = 'self.module=self.module||{};const n=new Set(["nodeType","toString","valueOf","toJSON"]);function t(t){if(!t)throw new Error("Path is required");const r=new Proxy(()=>{},{get:function(t,e){if("symbol"!=typeof e&&!n.has(e))return r},apply:function(t,e,n){return r}});return r}function Et(t){return null!=t}function u(t){var e;this.name="DeveloperError",this.message=t;try{throw new Error}catch(t){e=t.stack}this.stack=e}Et(Object.create)&&(u.prototype=Object.create(Error.prototype),u.prototype.constructor=u),u.prototype.toString=function(){var t=this.name+": "+this.message;return Et(this.stack)&&(t+="\\n"+this.stack.toString()),t},u.throwInstantiationError=function(){throw new u("This function defines an interface and should not be called directly.")};var i={};function r(t){return t+" is required, actual value was undefined"}function a(t,e,n){return"Expected "+n+" to be typeof "+e+", actual typeof was "+t}function Ot(t,e){return null!=t?t:e}function e(){return t(this.constructor.name)}i.typeOf={},i.defined=function(t,e){if(!Et(e))throw new u(r(t))},i.typeOf.func=function(t,e){if("function"!=typeof e)throw new u(a(typeof e,"function",t))},i.typeOf.string=function(t,e){if("string"!=typeof e)throw new u(a(typeof e,"string",t))},i.typeOf.number=function(t,e){if("number"!=typeof e)throw new u(a(typeof e,"number",t))},i.typeOf.number.lessThan=function(t,e,n){if(i.typeOf.number(t,e),n<=e)throw new u("Expected "+t+" to be less than "+n+", actual value was "+e)},i.typeOf.number.lessThanOrEquals=function(t,e,n){if(i.typeOf.number(t,e),n<e)throw new u("Expected "+t+" to be less than or equal to "+n+", actual value was "+e)},i.typeOf.number.greaterThan=function(t,e,n){if(i.typeOf.number(t,e),e<=n)throw new u("Expected "+t+" to be greater than "+n+", actual value was "+e)},i.typeOf.number.greaterThanOrEquals=function(t,e,n){if(i.typeOf.number(t,e),e<n)throw new u("Expected "+t+" to be greater than or equal to"+n+", actual value was "+e)},i.typeOf.object=function(t,e){if("object"!=typeof e)throw new u(a(typeof e,"object",t))},i.typeOf.bool=function(t,e){if("boolean"!=typeof e)throw new u(a(typeof e,"boolean",t))},i.typeOf.number.equals=function(t,e,n,r){if(i.typeOf.number(t,n),i.typeOf.number(e,r),n!==r)throw new u(t+" must be equal to "+e+", the actual values are "+n+" and "+r)},Ot.EMPTY_OBJECT=Object.freeze({});var Tt={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296};Tt.sign=Ot(Math.sign,function(t){return 0===(t=+t)||t!=t?t:0<t?1:-1}),Tt.signNotZero=function(t){return t<0?-1:1},Tt.toSNorm=function(t,e){return e=Ot(e,255),Math.round((.5*Tt.clamp(t,-1,1)+.5)*e)},Tt.fromSNorm=function(t,e){return e=Ot(e,255),Tt.clamp(t,0,e)/e*2-1},Tt.normalize=function(t,e,n){return 0===(n=Math.max(n-e,0))?0:Tt.clamp((t-e)/n,0,1)},Tt.sinh=Ot(Math.sinh,function(t){return(Math.exp(t)-Math.exp(-t))/2}),Tt.cosh=Ot(Math.cosh,function(t){return(Math.exp(t)+Math.exp(-t))/2}),Tt.lerp=function(t,e,n){return(1-n)*t+n*e},Tt.PI=Math.PI,Tt.ONE_OVER_PI=1/Math.PI,Tt.PI_OVER_TWO=Math.PI/2,Tt.PI_OVER_THREE=Math.PI/3,Tt.PI_OVER_FOUR=Math.PI/4,Tt.PI_OVER_SIX=Math.PI/6,Tt.THREE_PI_OVER_TWO=3*Math.PI/2,Tt.TWO_PI=2*Math.PI,Tt.ONE_OVER_TWO_PI=1/(2*Math.PI),Tt.RADIANS_PER_DEGREE=Math.PI/180,Tt.DEGREES_PER_RADIAN=180/Math.PI,Tt.RADIANS_PER_ARCSECOND=Tt.RADIANS_PER_DEGREE/3600,Tt.toRadians=function(t){return t*Tt.RADIANS_PER_DEGREE},Tt.toDegrees=function(t){return t*Tt.DEGREES_PER_RADIAN},Tt.convertLongitudeRange=function(t){var e=Tt.TWO_PI,t=t-Math.floor(t/e)*e;return t<-Math.PI?t+e:t>=Math.PI?t-e:t},Tt.clampToLatitudeRange=function(t){return Tt.clamp(t,-1*Tt.PI_OVER_TWO,Tt.PI_OVER_TWO)},Tt.negativePiToPi=function(t){return Tt.zeroToTwoPi(t+Tt.PI)-Tt.PI},Tt.zeroToTwoPi=function(t){var e=Tt.mod(t,Tt.TWO_PI);return Math.abs(e)<Tt.EPSILON14&&Math.abs(t)>Tt.EPSILON14?Tt.TWO_PI:e},Tt.mod=function(t,e){return(t%e+e)%e},Tt.equalsEpsilon=function(t,e,n,r){n=Ot(n,0),r=Ot(r,n);var i=Math.abs(t-e);return i<=r||i<=n*Math.max(Math.abs(t),Math.abs(e))},Tt.lessThan=function(t,e,n){return t-e<-n},Tt.lessThanOrEquals=function(t,e,n){return t-e<n},Tt.greaterThan=function(t,e,n){return n<t-e},Tt.greaterThanOrEquals=function(t,e,n){return-n<t-e};var o=[1];Tt.factorial=function(t){var e=o.length;if(e<=t)for(var n=o[e-1],r=e;r<=t;r++){var i=n*r;o.push(i),n=i}return o[t]},Tt.incrementWrap=function(t,e,n){return n=Ot(n,0),t=e<++t?n:t},Tt.isPowerOfTwo=function(t){return 0!==t&&0==(t&t-1)},Tt.nextPowerOfTwo=function(t){return--t,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},Tt.clamp=function(t,e,n){return t<e?e:n<t?n:t};var s=new e;function It(t,e,n){this.x=Ot(t,0),this.y=Ot(e,0),this.z=Ot(n,0)}Tt.setRandomNumberSeed=function(t){s=new e(t)},Tt.nextRandomNumber=function(){return s.random()},Tt.randomBetween=function(t,e){return Tt.nextRandomNumber()*(e-t)+t},Tt.acosClamped=function(t){return Math.acos(Tt.clamp(t,-1,1))},Tt.asinClamped=function(t){return Math.asin(Tt.clamp(t,-1,1))},Tt.chordLength=function(t,e){return 2*e*Math.sin(.5*t)},Tt.logBase=function(t,e){return Math.log(t)/Math.log(e)},Tt.cbrt=Ot(Math.cbrt,function(t){var e=Math.pow(Math.abs(t),1/3);return t<0?-e:e}),Tt.log2=Ot(Math.log2,function(t){return Math.log(t)*Math.LOG2E}),Tt.fog=function(t,e){e*=t;return 1-Math.exp(-e*e)},Tt.fastApproximateAtan=function(t){return t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)},Tt.fastApproximateAtan2=function(t,e){var n=Math.abs(t),r=Math.abs(e),i=Math.max(n,r),i=Math.min(n,r)/i,n=Tt.fastApproximateAtan(i);return n=Math.abs(e)>Math.abs(t)?Tt.PI_OVER_TWO-n:n,n=t<0?Tt.PI-n:n,n=e<0?-n:n},It.fromSpherical=function(t,e){Et(e)||(e=new It);var n=t.clock,r=t.cone,i=Ot(t.magnitude,1),t=i*Math.sin(r);return e.x=t*Math.cos(n),e.y=t*Math.sin(n),e.z=i*Math.cos(r),e},It.fromElements=function(t,e,n,r){return Et(r)?(r.x=t,r.y=e,r.z=n,r):new It(t,e,n)},It.clone=function(t,e){if(Et(t))return Et(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e):new It(t.x,t.y,t.z)},It.fromCartesian4=It.clone,It.packedLength=3,It.pack=function(t,e,n){return n=Ot(n,0),e[n++]=t.x,e[n++]=t.y,e[n]=t.z,e},It.unpack=function(t,e,n){return e=Ot(e,0),(n=!Et(n)?new It:n).x=t[e++],n.y=t[e++],n.z=t[e],n},It.packArray=function(t,e){var n=t.length,r=3*n;if(Et(e)){if(!Array.isArray(e)&&e.length!==r)throw new u("If result is a typed array, it must have exactly array.length * 3 elements");e.length!==r&&(e.length=r)}else e=new Array(r);for(var i=0;i<n;++i)It.pack(t[i],e,3*i);return e},It.unpackArray=function(t,e){var n=t.length;Et(e)?e.length=n/3:e=new Array(n/3);for(var r=0;r<n;r+=3){var i=r/3;e[i]=It.unpack(t,r,e[i])}return e},It.fromArray=It.unpack,It.maximumComponent=function(t){return Math.max(t.x,t.y,t.z)},It.minimumComponent=function(t){return Math.min(t.x,t.y,t.z)},It.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n.z=Math.min(t.z,e.z),n},It.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n.z=Math.max(t.z,e.z),n},It.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y+t.z*t.z},It.magnitude=function(t){return Math.sqrt(It.magnitudeSquared(t))};var c=new It;It.distance=function(t,e){return It.subtract(t,e,c),It.magnitude(c)},It.distanceSquared=function(t,e){return It.subtract(t,e,c),It.magnitudeSquared(c)},It.normalize=function(t,e){var n=It.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e.z=t.z/n,e},It.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},It.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n.z=t.z*e.z,n},It.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n.z=t.z/e.z,n},It.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n.z=t.z+e.z,n},It.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n.z=t.z-e.z,n},It.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n.z=t.z*e,n},It.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n.z=t.z/e,n},It.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e},It.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e.z=Math.abs(t.z),e};var l=new It;It.lerp=function(t,e,n,r){return It.multiplyByScalar(e,n,l),r=It.multiplyByScalar(t,1-n,r),It.add(l,r,r)};var m=new It,h=new It;It.angleBetween=function(t,e){It.normalize(t,m),It.normalize(e,h);t=It.dot(m,h),e=It.magnitude(It.cross(m,h,m));return Math.atan2(e,t)};var f=new It;It.mostOrthogonalAxis=function(t,e){t=It.normalize(t,f);return It.abs(t,t),e=t.x<=t.y?t.x<=t.z?It.clone(It.UNIT_X,e):It.clone(It.UNIT_Z,e):t.y<=t.z?It.clone(It.UNIT_Y,e):It.clone(It.UNIT_Z,e)},It.projectVector=function(t,e,n){t=It.dot(t,e)/It.dot(e,e);return It.multiplyByScalar(e,t,n)},It.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z},It.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]&&t.z===e[n+2]},It.equalsEpsilon=function(t,e,n,r){return t===e||Et(t)&&Et(e)&&Tt.equalsEpsilon(t.x,e.x,n,r)&&Tt.equalsEpsilon(t.y,e.y,n,r)&&Tt.equalsEpsilon(t.z,e.z,n,r)},It.cross=function(t,e,n){var r=t.x,i=t.y,a=t.z,o=e.x,u=e.y,t=e.z,e=i*t-a*u,t=a*o-r*t,o=r*u-i*o;return n.x=e,n.y=t,n.z=o,n},It.midpoint=function(t,e,n){return n.x=.5*(t.x+e.x),n.y=.5*(t.y+e.y),n.z=.5*(t.z+e.z),n},It.fromDegrees=function(t,e,n,r,i){return t=Tt.toRadians(t),e=Tt.toRadians(e),It.fromRadians(t,e,n,r,i)};var p=new It,y=new It,d=new It(40680631590769,40680631590769,40408299984661.445);It.fromRadians=function(t,e,n,r,i){n=Ot(n,0);var a=Et(r)?r.radiiSquared:d,r=Math.cos(e);p.x=r*Math.cos(t),p.y=r*Math.sin(t),p.z=Math.sin(e),p=It.normalize(p,p),It.multiplyComponents(a,p,y);a=Math.sqrt(It.dot(p,y));return y=It.divideByScalar(y,a,y),p=It.multiplyByScalar(p,n,p),Et(i)||(i=new It),It.add(y,p,i)},It.fromDegreesArray=function(t,e,n){var r=t.length;Et(n)?n.length=r/2:n=new Array(r/2);for(var i=0;i<r;i+=2){var a=t[i],o=t[i+1],u=i/2;n[u]=It.fromDegrees(a,o,0,e,n[u])}return n},It.fromRadiansArray=function(t,e,n){var r=t.length;Et(n)?n.length=r/2:n=new Array(r/2);for(var i=0;i<r;i+=2){var a=t[i],o=t[i+1],u=i/2;n[u]=It.fromRadians(a,o,0,e,n[u])}return n},It.fromDegreesArrayHeights=function(t,e,n){var r=t.length;Et(n)?n.length=r/3:n=new Array(r/3);for(var i=0;i<r;i+=3){var a=t[i],o=t[i+1],u=t[i+2],s=i/3;n[s]=It.fromDegrees(a,o,u,e,n[s])}return n},It.fromRadiansArrayHeights=function(t,e,n){var r=t.length;Et(n)?n.length=r/3:n=new Array(r/3);for(var i=0;i<r;i+=3){var a=t[i],o=t[i+1],u=t[i+2],s=i/3;n[s]=It.fromRadians(a,o,u,e,n[s])}return n},It.ZERO=Object.freeze(new It(0,0,0)),It.UNIT_X=Object.freeze(new It(1,0,0)),It.UNIT_Y=Object.freeze(new It(0,1,0)),It.UNIT_Z=Object.freeze(new It(0,0,1)),It.prototype.clone=function(t){return It.clone(this,t)},It.prototype.equals=function(t){return It.equals(this,t)},It.prototype.equalsEpsilon=function(t,e,n){return It.equalsEpsilon(this,t,e,n)},It.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"};var v=new It,M=new It;function x(t,e,n,r,i){var a=t.x,o=t.y,u=t.z,s=e.x,c=e.y,e=e.z,l=a*a*s*s,m=o*o*c*c,h=u*u*e*e,s=l+m+h,c=Math.sqrt(1/s),e=It.multiplyByScalar(t,c,v);if(s<r)return isFinite(c)?It.clone(e,i):void 0;var f=n.x,p=n.y,y=n.z,n=M;n.x=e.x*f*2,n.y=e.y*p*2,n.z=e.z*y*2;var d,x,g,S,w,E,O,T=(1-c)*It.magnitude(t)/(.5*It.magnitude(n)),I=0;do{I=(d=l*(w=(x=1/(1+(T-=I)*f))*x)+m*(E=(g=1/(1+T*p))*g)+h*(O=(S=1/(1+T*y))*S)-1)/(-2*(l*(w*x)*f+m*(E*g)*p+h*(O*S)*y))}while(Math.abs(d)>Tt.EPSILON12);return Et(i)?(i.x=a*x,i.y=o*g,i.z=u*S,i):new It(a*x,o*g,u*S)}function g(t,e,n){this.longitude=Ot(t,0),this.latitude=Ot(e,0),this.height=Ot(n,0)}g.fromRadians=function(t,e,n,r){return n=Ot(n,0),Et(r)?(r.longitude=t,r.latitude=e,r.height=n,r):new g(t,e,n)},g.fromDegrees=function(t,e,n,r){return t=Tt.toRadians(t),e=Tt.toRadians(e),g.fromRadians(t,e,n,r)};var S=new It,w=new It,E=new It,O=new It(1/6378137,1/6378137,1/6356752.314245179),T=new It(1/40680631590769,1/40680631590769,1/40408299984661.445),I=Tt.EPSILON1;function N(t,e,n,r){e=Ot(e,0),n=Ot(n,0),r=Ot(r,0),t._radii=new It(e,n,r),t._radiiSquared=new It(e*e,n*n,r*r),t._radiiToTheFourth=new It(e*e*e*e,n*n*n*n,r*r*r*r),t._oneOverRadii=new It(0===e?0:1/e,0===n?0:1/n,0===r?0:1/r),t._oneOverRadiiSquared=new It(0===e?0:1/(e*e),0===n?0:1/(n*n),0===r?0:1/(r*r)),t._minimumRadius=Math.min(e,n,r),t._maximumRadius=Math.max(e,n,r),t._centerToleranceSquared=Tt.EPSILON1,0!==t._radiiSquared.z&&(t._squaredXOverSquaredZ=t._radiiSquared.x/t._radiiSquared.z)}function vt(t,e,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,N(this,t,e,n)}g.fromCartesian=function(t,e,n){var r=Et(e)?e.oneOverRadii:O,i=Et(e)?e.oneOverRadiiSquared:T,r=x(t,r,i,Et(e)?e._centerToleranceSquared:I,w);if(Et(r)){e=It.multiplyComponents(r,i,S),e=It.normalize(e,e),i=It.subtract(t,r,E),r=Math.atan2(e.y,e.x),e=Math.asin(e.z),i=Tt.sign(It.dot(i,t))*It.magnitude(i);return Et(n)?(n.longitude=r,n.latitude=e,n.height=i,n):new g(r,e,i)}},g.toCartesian=function(t,e,n){return It.fromRadians(t.longitude,t.latitude,t.height,e,n)},g.clone=function(t,e){if(Et(t))return Et(e)?(e.longitude=t.longitude,e.latitude=t.latitude,e.height=t.height,e):new g(t.longitude,t.latitude,t.height)},g.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t.longitude===e.longitude&&t.latitude===e.latitude&&t.height===e.height},g.equalsEpsilon=function(t,e,n){return n=Ot(n,0),t===e||Et(t)&&Et(e)&&Math.abs(t.longitude-e.longitude)<=n&&Math.abs(t.latitude-e.latitude)<=n&&Math.abs(t.height-e.height)<=n},g.ZERO=Object.freeze(new g(0,0,0)),g.prototype.clone=function(t){return g.clone(this,t)},g.prototype.equals=function(t){return g.equals(this,t)},g.prototype.equalsEpsilon=function(t,e){return g.equalsEpsilon(this,t,e)},g.prototype.toString=function(){return"("+this.longitude+", "+this.latitude+", "+this.height+")"},Object.defineProperties(vt.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}}),vt.clone=function(t,e){if(Et(t)){var n=t._radii;return Et(e)?(It.clone(n,e._radii),It.clone(t._radiiSquared,e._radiiSquared),It.clone(t._radiiToTheFourth,e._radiiToTheFourth),It.clone(t._oneOverRadii,e._oneOverRadii),It.clone(t._oneOverRadiiSquared,e._oneOverRadiiSquared),e._minimumRadius=t._minimumRadius,e._maximumRadius=t._maximumRadius,e._centerToleranceSquared=t._centerToleranceSquared,e):new vt(n.x,n.y,n.z)}},vt.fromCartesian3=function(t,e){return Et(e)||(e=new vt),Et(t)&&N(e,t.x,t.y,t.z),e},vt.WGS84=Object.freeze(new vt(6378137,6378137,6356752.314245179)),vt.UNIT_SPHERE=Object.freeze(new vt(1,1,1)),vt.MOON=Object.freeze(new vt(Tt.LUNAR_RADIUS,Tt.LUNAR_RADIUS,Tt.LUNAR_RADIUS)),vt.prototype.clone=function(t){return vt.clone(this,t)},vt.packedLength=It.packedLength,vt.pack=function(t,e,n){return n=Ot(n,0),It.pack(t._radii,e,n),e},vt.unpack=function(t,e,n){e=Ot(e,0);e=It.unpack(t,e);return vt.fromCartesian3(e,n)},vt.prototype.geocentricSurfaceNormal=It.normalize,vt.prototype.geodeticSurfaceNormalCartographic=function(t,e){var n=t.longitude,r=t.latitude,i=Math.cos(r),t=i*Math.cos(n),n=i*Math.sin(n),r=Math.sin(r);return(e=!Et(e)?new It:e).x=t,e.y=n,e.z=r,It.normalize(e,e)},vt.prototype.geodeticSurfaceNormal=function(t,e){if(!It.equalsEpsilon(t,It.ZERO,Tt.EPSILON14))return Et(e)||(e=new It),e=It.multiplyComponents(t,this._oneOverRadiiSquared,e),It.normalize(e,e)};var z=new It,R=new It;vt.prototype.cartographicToCartesian=function(t,e){var n=z,r=R;this.geodeticSurfaceNormalCartographic(t,n),It.multiplyComponents(this._radiiSquared,n,r);var i=Math.sqrt(It.dot(n,r));return It.divideByScalar(r,i,r),It.multiplyByScalar(n,t.height,n),Et(e)||(e=new It),It.add(r,n,e)},vt.prototype.cartographicArrayToCartesianArray=t("Ellipsoid.prototype.cartographicArrayToCartesianArray");var _=new It,b=new It,A=new It;vt.prototype.cartesianToCartographic=function(t,e){var n=this.scaleToGeodeticSurface(t,b);if(Et(n)){var r=this.geodeticSurfaceNormal(n,_),i=It.subtract(t,n,A),n=Math.atan2(r.y,r.x),r=Math.asin(r.z),i=Tt.sign(It.dot(i,t))*It.magnitude(i);return Et(e)?(e.longitude=n,e.latitude=r,e.height=i,e):new g(n,r,i)}},vt.prototype.cartesianArrayToCartographicArray=t("Ellipsoid.prototype.cartesianArrayToCartographicArray"),vt.prototype.scaleToGeodeticSurface=function(t,e){return x(t,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,e)},vt.prototype.scaleToGeocentricSurface=function(t,e){Et(e)||(e=new It);var n=t.x,r=t.y,i=t.z,a=this._oneOverRadiiSquared,a=1/Math.sqrt(n*n*a.x+r*r*a.y+i*i*a.z);return It.multiplyByScalar(t,a,e)},vt.prototype.transformPositionToScaledSpace=function(t,e){return Et(e)||(e=new It),It.multiplyComponents(t,this._oneOverRadii,e)},vt.prototype.transformPositionFromScaledSpace=function(t,e){return Et(e)||(e=new It),It.multiplyComponents(t,this._radii,e)},vt.prototype.equals=function(t){return this===t||Et(t)&&It.equals(this._radii,t._radii)},vt.prototype.toString=function(){return this._radii.toString()},vt.prototype.getSurfaceNormalIntersectionWithZAxis=function(t,e,n){e=Ot(e,0);var r=this._squaredXOverSquaredZ;if((n=!Et(n)?new It:n).x=0,n.y=0,n.z=t.z*(1-r),!(Math.abs(n.z)>=this._radii.z-e))return n},vt.prototype.surfaceArea=t("Ellipsoid.prototype.surfaceArea");var P={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},q=Object.freeze(P);function Mt(t,e,n){this.minimum=It.clone(Ot(t,It.ZERO)),this.maximum=It.clone(Ot(e,It.ZERO)),n=Et(n)?It.clone(n):It.midpoint(this.minimum,this.maximum,new It),this.center=n}Mt.fromPoints=t("AxisAlignedBoundingBox.fromPoints"),Mt.clone=t("AxisAlignedBoundingBox.clone"),Mt.equals=function(t,e){return t===e||Et(t)&&Et(e)&&It.equals(t.center,e.center)&&It.equals(t.minimum,e.minimum)&&It.equals(t.maximum,e.maximum)};var C=new It;function Nt(t,e){this.x=Ot(t,0),this.y=Ot(e,0)}Mt.intersectPlane=function(t,e){C=It.subtract(t.maximum,t.minimum,C);var n=It.multiplyByScalar(C,.5,C),r=e.normal,n=n.x*Math.abs(r.x)+n.y*Math.abs(r.y)+n.z*Math.abs(r.z),e=It.dot(t.center,r)+e.distance;return 0<e-n?q.INSIDE:e+n<0?q.OUTSIDE:q.INTERSECTING},Mt.prototype.clone=function(t){return Mt.clone(this,t)},Mt.prototype.intersectPlane=function(t){return Mt.intersectPlane(this,t)},Mt.prototype.equals=function(t){return Mt.equals(this,t)},Nt.fromElements=function(t,e,n){return Et(n)?(n.x=t,n.y=e,n):new Nt(t,e)},Nt.clone=function(t,e){if(Et(t))return Et(e)?(e.x=t.x,e.y=t.y,e):new Nt(t.x,t.y)},Nt.fromCartesian3=Nt.clone,Nt.fromCartesian4=Nt.clone,Nt.packedLength=2,Nt.pack=function(t,e,n){return n=Ot(n,0),e[n++]=t.x,e[n]=t.y,e},Nt.unpack=function(t,e,n){return e=Ot(e,0),(n=!Et(n)?new Nt:n).x=t[e++],n.y=t[e],n},Nt.packArray=function(t,e){var n=t.length,r=2*n;if(Et(e)){if(!Array.isArray(e)&&e.length!==r)throw new u("If result is a typed array, it must have exactly array.length * 2 elements");e.length!==r&&(e.length=r)}else e=new Array(r);for(var i=0;i<n;++i)Nt.pack(t[i],e,2*i);return e},Nt.unpackArray=function(t,e){var n=t.length;Et(e)?e.length=n/2:e=new Array(n/2);for(var r=0;r<n;r+=2){var i=r/2;e[i]=Nt.unpack(t,r,e[i])}return e},Nt.fromArray=Nt.unpack,Nt.maximumComponent=function(t){return Math.max(t.x,t.y)},Nt.minimumComponent=function(t){return Math.min(t.x,t.y)},Nt.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n},Nt.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n},Nt.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},Nt.magnitude=function(t){return Math.sqrt(Nt.magnitudeSquared(t))};var B=new Nt;Nt.distance=function(t,e){return Nt.subtract(t,e,B),Nt.magnitude(B)},Nt.distanceSquared=function(t,e){return Nt.subtract(t,e,B),Nt.magnitudeSquared(B)},Nt.normalize=function(t,e){var n=Nt.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e},Nt.dot=function(t,e){return t.x*e.x+t.y*e.y},Nt.cross=function(t,e){return t.x*e.y-t.y*e.x},Nt.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n},Nt.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n},Nt.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n},Nt.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n},Nt.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n},Nt.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n},Nt.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e},Nt.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e};var L=new Nt;Nt.lerp=function(t,e,n,r){return Nt.multiplyByScalar(e,n,L),r=Nt.multiplyByScalar(t,1-n,r),Nt.add(L,r,r)};var U=new Nt,D=new Nt;Nt.angleBetween=function(t,e){return Nt.normalize(t,U),Nt.normalize(e,D),Tt.acosClamped(Nt.dot(U,D))};var k=new Nt;function zt(t,e){this._ellipsoid=t,this._cameraPosition=new It,this._cameraPositionInScaledSpace=new It,this._distanceToLimbInScaledSpaceSquared=0,Et(e)&&(this.cameraPosition=e)}Nt.mostOrthogonalAxis=function(t,e){t=Nt.normalize(t,k);return Nt.abs(t,t),e=t.x<=t.y?Nt.clone(Nt.UNIT_X,e):Nt.clone(Nt.UNIT_Y,e)},Nt.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t.x===e.x&&t.y===e.y},Nt.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]},Nt.equalsEpsilon=function(t,e,n,r){return t===e||Et(t)&&Et(e)&&Tt.equalsEpsilon(t.x,e.x,n,r)&&Tt.equalsEpsilon(t.y,e.y,n,r)},Nt.ZERO=Object.freeze(new Nt(0,0)),Nt.UNIT_X=Object.freeze(new Nt(1,0)),Nt.UNIT_Y=Object.freeze(new Nt(0,1)),Nt.prototype.clone=function(t){return Nt.clone(this,t)},Nt.prototype.equals=function(t){return Nt.equals(this,t)},Nt.prototype.equalsEpsilon=function(t,e,n){return Nt.equalsEpsilon(this,t,e,n)},Nt.prototype.toString=function(){return"("+this.x+", "+this.y+")"},Object.defineProperties(zt.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){var e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),n=It.magnitudeSquared(e)-1;It.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=n}}});var W=new It;zt.prototype.isPointVisible=function(t){return X(this._ellipsoid.transformPositionToScaledSpace(t,W),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},zt.prototype.isScaledSpacePointVisible=function(t){return X(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var j=new It;zt.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){var n,r=this._ellipsoid,e=Et(e)&&e<0&&r.minimumRadius>-e?((n=j).x=this._cameraPosition.x/(r.radii.x+e),n.y=this._cameraPosition.y/(r.radii.y+e),n.z=this._cameraPosition.z/(r.radii.z+e),n.x*n.x+n.y*n.y+n.z*n.z-1):(n=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared);return X(t,n,e)},zt.prototype.computeHorizonCullingPoint=function(t,e,n){return G(this._ellipsoid,t,e,n)};var F=vt.clone(vt.UNIT_SPHERE);zt.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,n,r){return G(V(this._ellipsoid,n,F),t,e,r)},zt.prototype.computeHorizonCullingPointFromVertices=function(t,e,n,r,i){return Z(this._ellipsoid,t,e,n,r,i)},zt.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,n,r,i,a){return Z(V(this._ellipsoid,i,F),t,e,n,r,a)},zt.prototype.computeHorizonCullingPointFromRectangle=t("EllipsoidalOccluder.prototype.computeHorizonCullingPointFromRectangle");var H=new It;function V(t,e,n){return Et(e)&&e<0&&t.minimumRadius>-e&&(e=It.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,H),t=vt.fromCartesian3(e,n)),t}function G(t,e,n,r){Et(r)||(r=new It);for(var i=et(t,e),a=0,o=0,u=n.length;o<u;++o){var s=K(t,n[o],i);if(s<0)return;a=Math.max(a,s)}return $(i,a,r)}var Y=new It;function Z(t,e,n,r,i,a){Et(a)||(a=new It),r=Ot(r,3),i=Ot(i,It.ZERO);for(var o=et(t,e),u=0,s=0,c=n.length;s<c;s+=r){Y.x=n[s]+i.x,Y.y=n[s+1]+i.y,Y.z=n[s+2]+i.z;var l=K(t,Y,o);if(l<0)return;u=Math.max(u,l)}return $(o,u,a)}function X(t,e,n){t=It.subtract(t,e,W),e=-It.dot(t,e);return!(n<0?0<e:n<e&&e*e/It.magnitudeSquared(t)>n)}var J=new It,Q=new It;function K(t,e,n){var r=t.transformPositionToScaledSpace(e,J),t=It.magnitudeSquared(r),e=Math.sqrt(t),r=It.divideByScalar(r,e,Q),t=Math.max(1,t),e=1/(e=Math.max(1,e));return 1/(It.dot(r,n)*e-It.magnitude(It.cross(r,n,r))*(Math.sqrt(t-1)*e))}function $(t,e,n){if(!(e<=0||e===1/0||e!=e))return It.multiplyByScalar(t,e,n)}var tt=new It;function et(t,e){return It.equals(e,It.ZERO)?e:(t.transformPositionToScaledSpace(e,tt),It.normalize(tt,tt))}function nt(t,e,n,r){this.x=Ot(t,0),this.y=Ot(e,0),this.z=Ot(n,0),this.w=Ot(r,0)}function rt(t,e,n,r,i,a,o,u,s){this[0]=Ot(t,0),this[1]=Ot(r,0),this[2]=Ot(o,0),this[3]=Ot(e,0),this[4]=Ot(i,0),this[5]=Ot(u,0),this[6]=Ot(n,0),this[7]=Ot(a,0),this[8]=Ot(s,0)}function it(t){var e;this.name="RuntimeError",this.message=t;try{throw new Error}catch(t){e=t.stack}this.stack=e}function Rt(t,e,n,r,i,a,o,u,s,c,l,m,h,f,p,y){this[0]=Ot(t,0),this[1]=Ot(i,0),this[2]=Ot(s,0),this[3]=Ot(h,0),this[4]=Ot(e,0),this[5]=Ot(a,0),this[6]=Ot(c,0),this[7]=Ot(f,0),this[8]=Ot(n,0),this[9]=Ot(o,0),this[10]=Ot(l,0),this[11]=Ot(p,0),this[12]=Ot(r,0),this[13]=Ot(u,0),this[14]=Ot(m,0),this[15]=Ot(y,0)}nt.fromElements=function(t,e,n,r,i){return Et(i)?(i.x=t,i.y=e,i.z=n,i.w=r,i):new nt(t,e,n,r)},nt.fromColor=function(t,e){return Et(e)?(e.x=t.red,e.y=t.green,e.z=t.blue,e.w=t.alpha,e):new nt(t.red,t.green,t.blue,t.alpha)},nt.clone=function(t,e){if(Et(t))return Et(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e):new nt(t.x,t.y,t.z,t.w)},nt.packedLength=4,nt.pack=function(t,e,n){return n=Ot(n,0),e[n++]=t.x,e[n++]=t.y,e[n++]=t.z,e[n]=t.w,e},nt.unpack=t("Cartesian4.unpack"),nt.packArray=t("Cartesian4.packArray"),nt.unpackArray=t("Cartesian4.unpackArray"),nt.fromArray=nt.unpack,nt.maximumComponent=t("Cartesian4.maximumComponent"),nt.minimumComponent=t("Cartesian4.minimumComponent"),nt.minimumByComponent=t("Cartesian4.minimumByComponent"),nt.maximumByComponent=t("Cartesian4.maximumByComponent"),nt.magnitudeSquared=t("Cartesian4.magnitudeSquared"),nt.magnitude=t("Cartesian4.magnitude"),nt.distance=t("Cartesian4.distance"),nt.distanceSquared=t("Cartesian4.distanceSquared"),nt.normalize=t("Cartesian4.normalize"),nt.dot=t("Cartesian4.dot"),nt.multiplyComponents=t("Cartesian4.multiplyComponents"),nt.divideComponents=t("Cartesian4.divideComponents"),nt.add=t("Cartesian4.add"),nt.subtract=t("Cartesian4.subtract"),nt.multiplyByScalar=t("Cartesian4.multiplyByScalar"),nt.divideByScalar=t("Cartesian4.divideByScalar"),nt.negate=t("Cartesian4.negate"),nt.abs=t("Cartesian4.abs"),nt.lerp=t("Cartesian4.lerp"),nt.mostOrthogonalAxis=t("Cartesian4.mostOrthogonalAxis"),nt.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w},nt.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]&&t.z===e[n+2]&&t.w===e[n+3]},nt.equalsEpsilon=function(t,e,n,r){return t===e||Et(t)&&Et(e)&&Tt.equalsEpsilon(t.x,e.x,n,r)&&Tt.equalsEpsilon(t.y,e.y,n,r)&&Tt.equalsEpsilon(t.z,e.z,n,r)&&Tt.equalsEpsilon(t.w,e.w,n,r)},nt.ZERO=Object.freeze(new nt(0,0,0,0)),nt.UNIT_X=Object.freeze(new nt(1,0,0,0)),nt.UNIT_Y=Object.freeze(new nt(0,1,0,0)),nt.UNIT_Z=Object.freeze(new nt(0,0,1,0)),nt.UNIT_W=Object.freeze(new nt(0,0,0,1)),nt.prototype.clone=function(t){return nt.clone(this,t)},nt.prototype.equals=function(t){return nt.equals(this,t)},nt.prototype.equalsEpsilon=function(t,e,n){return nt.equalsEpsilon(this,t,e,n)},nt.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+", "+this.w+")"},nt.packFloat=t("Cartesian4.packFloat"),nt.unpackFloat=t("Cartesian4.unpackFloat"),rt.packedLength=9,rt.pack=t("pack"),rt.unpack=t("unpack"),rt.clone=function(t,e){if(Et(t))return Et(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e):new rt(t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8])},rt.fromArray=t("fromArray"),rt.fromColumnMajorArray=t("fromColumnMajorArray"),rt.fromRowMajorArray=t("fromRowMajorArray"),rt.fromQuaternion=function(t,e){var n=t.x*t.x,r=t.x*t.y,i=t.x*t.z,a=t.x*t.w,o=t.y*t.y,u=t.y*t.z,s=t.y*t.w,c=t.z*t.z,l=t.z*t.w,m=t.w*t.w,h=n-o-c+m,f=2*(r-l),p=2*(i+s),t=2*(r+l),r=o-n-c+m,l=2*(u-a),s=2*(i-s),a=2*(u+a),m=-n-o+c+m;return Et(e)?(e[0]=h,e[1]=t,e[2]=s,e[3]=f,e[4]=r,e[5]=a,e[6]=p,e[7]=l,e[8]=m,e):new rt(h,f,p,t,r,l,s,a,m)},rt.fromHeadingPitchRoll=t("fromHeadingPitchRoll"),rt.fromScale=t("fromScale"),rt.fromUniformScale=t("fromUniformScale"),rt.fromCrossProduct=t("fromCrossProduct"),rt.fromRotationX=t("fromRotationX"),rt.fromRotationY=t("fromRotationY"),rt.fromRotationZ=t("fromRotationZ"),rt.toArray=t("toArray"),rt.getElementIndex=t("getElementIndex"),rt.getColumn=function(t,e,n){var r=3*e,i=t[r],e=t[1+r],r=t[2+r];return n.x=i,n.y=e,n.z=r,n},rt.setColumn=function(t,e,n,r){e*=3;return(r=rt.clone(t,r))[e]=n.x,r[1+e]=n.y,r[2+e]=n.z,r},rt.getRow=t("getRow"),rt.setRow=t("setRow"),rt.getScale=t("getScale"),rt.getMaximumScale=t("getMaximumScale"),rt.multiply=t("multiply"),rt.add=t("add"),rt.subtract=t("subtract"),rt.multiplyByVector=function(t,e,n){var r=e.x,i=e.y,a=e.z,o=t[0]*r+t[3]*i+t[6]*a,e=t[1]*r+t[4]*i+t[7]*a,a=t[2]*r+t[5]*i+t[8]*a;return n.x=o,n.y=e,n.z=a,n},rt.multiplyByScalar=t("multiplyByScalar"),rt.multiplyByScale=function(t,e,n){return n[0]=t[0]*e.x,n[1]=t[1]*e.x,n[2]=t[2]*e.x,n[3]=t[3]*e.y,n[4]=t[4]*e.y,n[5]=t[5]*e.y,n[6]=t[6]*e.z,n[7]=t[7]*e.z,n[8]=t[8]*e.z,n},rt.negate=t("negate"),rt.transpose=t("transpose"),rt.getRotation=t("getRotation"),rt.computeEigenDecomposition=t("computeEigenDecomposition"),rt.abs=t("abs"),rt.determinant=t("determinant"),rt.inverse=t("inverse"),rt.inverseTranspose=t("inverseTranspose"),rt.equals=t("equals"),rt.equalsEpsilon=t("equalsEpsilon"),rt.IDENTITY=Object.freeze(new rt(1,0,0,0,1,0,0,0,1)),rt.ZERO=Object.freeze(new rt(0,0,0,0,0,0,0,0,0)),rt.COLUMN0ROW0=0,rt.COLUMN0ROW1=1,rt.COLUMN0ROW2=2,rt.COLUMN1ROW0=3,rt.COLUMN1ROW1=4,rt.COLUMN1ROW2=5,rt.COLUMN2ROW0=6,rt.COLUMN2ROW1=7,rt.COLUMN2ROW2=8,Object.defineProperties(rt.prototype,{length:{get:function(){return rt.packedLength}}}),rt.prototype.clone=function(t){return rt.clone(this,t)},rt.prototype.equals=function(t){return rt.equals(this,t)},rt.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]&&t[4]===e[n+4]&&t[5]===e[n+5]&&t[6]===e[n+6]&&t[7]===e[n+7]&&t[8]===e[n+8]},rt.prototype.equalsEpsilon=function(t,e){return rt.equalsEpsilon(this,t,e)},rt.prototype.toString=function(){return"("+this[0]+", "+this[3]+", "+this[6]+")\\n("+this[1]+", "+this[4]+", "+this[7]+")\\n("+this[2]+", "+this[5]+", "+this[8]+")"},Et(Object.create)&&(it.prototype=Object.create(Error.prototype),it.prototype.constructor=it),it.prototype.toString=function(){var t=this.name+": "+this.message;return Et(this.stack)&&(t+="\\n"+this.stack.toString()),t},Rt.packedLength=16,Rt.pack=t("pack"),Rt.unpack=t("unpack"),Rt.clone=function(t,e){if(Et(t))return Et(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):new Rt(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15])},Rt.fromArray=Rt.unpack,Rt.fromColumnMajorArray=t("fromColumnMajorArray"),Rt.fromRowMajorArray=t("fromRowMajorArray"),Rt.fromRotationTranslation=function(t,e,n){return e=Ot(e,It.ZERO),Et(n)?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=0,n[4]=t[3],n[5]=t[4],n[6]=t[5],n[7]=0,n[8]=t[6],n[9]=t[7],n[10]=t[8],n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,n):new Rt(t[0],t[3],t[6],e.x,t[1],t[4],t[7],e.y,t[2],t[5],t[8],e.z,0,0,0,1)},Rt.fromTranslationQuaternionRotationScale=t("fromTranslationQuaternionRotationScale"),Rt.fromTranslationRotationScale=t("fromTranslationRotationScale"),Rt.fromTranslation=function(t,e){return Rt.fromRotationTranslation(rt.IDENTITY,t,e)},Rt.fromScale=function(t,e){return Et(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t.y,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t.z,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):new Rt(t.x,0,0,0,0,t.y,0,0,0,0,t.z,0,0,0,0,1)},Rt.fromUniformScale=t("fromUniformScale"),Rt.fromCamera=t("fromCamera"),Rt.computePerspectiveFieldOfView=t("computePerspectiveFieldOfView"),Rt.computeOrthographicOffCenter=function(t,e,n,r,i,a,o){var u=1/(e-t),s=1/(r-n),c=1/(a-i),t=-(e+t)*u,n=-(r+n)*s,i=-(a+i)*c;return u*=2,s*=2,c*=-2,o[0]=u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=c,o[11]=0,o[12]=t,o[13]=n,o[14]=i,o[15]=1,o},Rt.computePerspectiveOffCenter=function(t,e,n,r,i,a,o){var u=2*i/(e-t),s=2*i/(r-n),t=(e+t)/(e-t),r=(r+n)/(r-n),n=-(a+i)/(a-i),i=-2*a*i/(a-i);return o[0]=u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s,o[6]=0,o[7]=0,o[8]=t,o[9]=r,o[10]=n,o[11]=-1,o[12]=0,o[13]=0,o[14]=i,o[15]=0,o},Rt.computeInfinitePerspectiveOffCenter=function(t,e,n,r,i,a){var o=2*i/(e-t),u=2*i/(r-n),t=(e+t)/(e-t),n=(r+n)/(r-n),i=-2*i;return a[0]=o,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=u,a[6]=0,a[7]=0,a[8]=t,a[9]=n,a[10]=-1,a[11]=-1,a[12]=0,a[13]=0,a[14]=i,a[15]=0,a},Rt.computeViewportTransformation=function(t,e,n,r){Et(r)||(r=new Rt),t=Ot(t,Ot.EMPTY_OBJECT);var i=Ot(t.x,0),a=Ot(t.y,0),o=Ot(t.width,0),u=Ot(t.height,0);e=Ot(e,0);var s=.5*o,t=.5*u,o=.5*((n=Ot(n,1))-e),u=t,n=o,i=i+s,t=a+t,o=e+o;return r[0]=s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=u,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=n,r[11]=0,r[12]=i,r[13]=t,r[14]=o,r[15]=1,r},Rt.computeView=function(t,e,n,r,i){return i[0]=r.x,i[1]=n.x,i[2]=-e.x,i[3]=0,i[4]=r.y,i[5]=n.y,i[6]=-e.y,i[7]=0,i[8]=r.z,i[9]=n.z,i[10]=-e.z,i[11]=0,i[12]=-It.dot(r,t),i[13]=-It.dot(n,t),i[14]=It.dot(e,t),i[15]=1,i},Rt.toArray=function(t,e){return Et(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]},Rt.getElementIndex=t("getElementIndex"),Rt.getColumn=function(t,e,n){var r=4*e,i=t[r],a=t[1+r],e=t[2+r],r=t[3+r];return n.x=i,n.y=a,n.z=e,n.w=r,n},Rt.setColumn=t("setColumn"),Rt.setTranslation=function(t,e,n){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=t[15],n},Rt.setScale=t("setScale"),Rt.getRow=t("getRow"),Rt.setRow=t("setRow");var at=new It;Rt.getScale=function(t,e){return e.x=It.magnitude(It.fromElements(t[0],t[1],t[2],at)),e.y=It.magnitude(It.fromElements(t[4],t[5],t[6],at)),e.z=It.magnitude(It.fromElements(t[8],t[9],t[10],at)),e};var ot=new It;Rt.getMaximumScale=function(t){return Rt.getScale(t,ot),It.maximumComponent(ot)},Rt.multiply=function(t,e,n){var r=t[0],i=t[1],a=t[2],o=t[3],u=t[4],s=t[5],c=t[6],l=t[7],m=t[8],h=t[9],f=t[10],p=t[11],y=t[12],d=t[13],x=t[14],g=t[15],S=e[0],w=e[1],E=e[2],O=e[3],T=e[4],I=e[5],v=e[6],M=e[7],N=e[8],z=e[9],R=e[10],_=e[11],b=e[12],A=e[13],P=e[14],q=e[15],C=r*S+u*w+m*E+y*O,t=i*S+s*w+h*E+d*O,e=a*S+c*w+f*E+x*O,S=o*S+l*w+p*E+g*O,w=r*T+u*I+m*v+y*M,E=i*T+s*I+h*v+d*M,O=a*T+c*I+f*v+x*M,T=o*T+l*I+p*v+g*M,I=r*N+u*z+m*R+y*_,v=i*N+s*z+h*R+d*_,M=a*N+c*z+f*R+x*_,_=o*N+l*z+p*R+g*_,y=r*b+u*A+m*P+y*q,d=i*b+s*A+h*P+d*q,x=a*b+c*A+f*P+x*q,q=o*b+l*A+p*P+g*q;return n[0]=C,n[1]=t,n[2]=e,n[3]=S,n[4]=w,n[5]=E,n[6]=O,n[7]=T,n[8]=I,n[9]=v,n[10]=M,n[11]=_,n[12]=y,n[13]=d,n[14]=x,n[15]=q,n},Rt.add=t("add"),Rt.subtract=t("subtract"),Rt.multiplyTransformation=function(t,e,n){var r=t[0],i=t[1],a=t[2],o=t[4],u=t[5],s=t[6],c=t[8],l=t[9],m=t[10],h=t[12],f=t[13],p=t[14],y=e[0],d=e[1],x=e[2],g=e[4],S=e[5],w=e[6],E=e[8],O=e[9],T=e[10],I=e[12],v=e[13],M=e[14],t=r*y+o*d+c*x,e=i*y+u*d+l*x,y=a*y+s*d+m*x,d=r*g+o*S+c*w,x=i*g+u*S+l*w,g=a*g+s*S+m*w,S=r*E+o*O+c*T,w=i*E+u*O+l*T,T=a*E+s*O+m*T,h=r*I+o*v+c*M+h,f=i*I+u*v+l*M+f,p=a*I+s*v+m*M+p;return n[0]=t,n[1]=e,n[2]=y,n[3]=0,n[4]=d,n[5]=x,n[6]=g,n[7]=0,n[8]=S,n[9]=w,n[10]=T,n[11]=0,n[12]=h,n[13]=f,n[14]=p,n[15]=1,n},Rt.multiplyByMatrix3=t("multiplyByMatrix3"),Rt.multiplyByTranslation=t("multiplyByTranslation"),Rt.multiplyByUniformScale=t("multiplyByUniformScale"),Rt.multiplyByScale=t("multiplyByScale"),Rt.multiplyByVector=function(t,e,n){var r=e.x,i=e.y,a=e.z,o=e.w,u=t[0]*r+t[4]*i+t[8]*a+t[12]*o,s=t[1]*r+t[5]*i+t[9]*a+t[13]*o,e=t[2]*r+t[6]*i+t[10]*a+t[14]*o,o=t[3]*r+t[7]*i+t[11]*a+t[15]*o;return n.x=u,n.y=s,n.z=e,n.w=o,n},Rt.multiplyByPointAsVector=function(t,e,n){var r=e.x,i=e.y,a=e.z,o=t[0]*r+t[4]*i+t[8]*a,e=t[1]*r+t[5]*i+t[9]*a,a=t[2]*r+t[6]*i+t[10]*a;return n.x=o,n.y=e,n.z=a,n},Rt.multiplyByPoint=function(t,e,n){var r=e.x,i=e.y,a=e.z,o=t[0]*r+t[4]*i+t[8]*a+t[12],e=t[1]*r+t[5]*i+t[9]*a+t[13],t=t[2]*r+t[6]*i+t[10]*a+t[14];return n.x=o,n.y=e,n.z=t,n},Rt.multiplyByScalar=t("multiplyByScalar"),Rt.negate=t("negate"),Rt.transpose=t("transpose"),Rt.abs=t("abs"),Rt.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[3]===e[3]&&t[7]===e[7]&&t[11]===e[11]&&t[15]===e[15]},Rt.equalsEpsilon=function(t,e,n){return n=Ot(n,0),t===e||Et(t)&&Et(e)&&Math.abs(t[0]-e[0])<=n&&Math.abs(t[1]-e[1])<=n&&Math.abs(t[2]-e[2])<=n&&Math.abs(t[3]-e[3])<=n&&Math.abs(t[4]-e[4])<=n&&Math.abs(t[5]-e[5])<=n&&Math.abs(t[6]-e[6])<=n&&Math.abs(t[7]-e[7])<=n&&Math.abs(t[8]-e[8])<=n&&Math.abs(t[9]-e[9])<=n&&Math.abs(t[10]-e[10])<=n&&Math.abs(t[11]-e[11])<=n&&Math.abs(t[12]-e[12])<=n&&Math.abs(t[13]-e[13])<=n&&Math.abs(t[14]-e[14])<=n&&Math.abs(t[15]-e[15])<=n},Rt.getTranslation=function(t,e){return e.x=t[12],e.y=t[13],e.z=t[14],e},Rt.getMatrix3=function(t,e){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};var ut=new rt,st=new rt,ct=new nt,lt=new nt(0,0,0,1);Rt.inverse=function(t,e){var n=t[0],r=t[4],i=t[8],a=t[12],o=t[1],u=t[5],s=t[9],c=t[13],l=t[2],m=t[6],h=t[10],f=t[14],p=t[3],y=t[7],d=t[11],x=t[15],g=h*x,S=f*d,w=m*x,E=f*y,O=m*d,T=h*y,I=l*x,v=f*p,M=l*d,N=h*p,z=l*y,R=m*p,_=g*u+E*s+O*c-(S*u+w*s+T*c),b=S*o+I*s+N*c-(g*o+v*s+M*c),A=w*o+v*u+z*c-(E*o+I*u+R*c),P=T*o+M*u+R*s-(O*o+N*u+z*s),q=S*r+w*i+T*a-(g*r+E*i+O*a),C=g*n+v*i+M*a-(S*n+I*i+N*a),B=E*n+I*r+R*a-(w*n+v*r+z*a),L=O*n+N*r+z*i-(T*n+M*r+R*i),U=(g=i*c)*y+(E=a*u)*d+(O=r*s)*x-((S=a*s)*y+(w=r*c)*d+(T=i*u)*x),s=S*p+(I=n*c)*d+(N=i*o)*x-(g*p+(v=a*o)*d+(M=n*s)*x),x=w*p+v*y+(z=n*u)*x-(E*p+I*y+(R=r*o)*x),y=T*p+M*y+R*d-(O*p+N*y+z*d),d=w*h+T*f+S*m-(O*f+g*m+E*h),S=M*f+g*l+v*h-(I*h+N*f+S*l),v=I*m+R*f+E*l-(z*f+w*l+v*m),l=z*h+O*l+N*m-(M*m+R*h+T*l),a=n*_+r*b+i*A+a*P;if(Math.abs(a)<Tt.EPSILON21){if(rt.equalsEpsilon(Rt.getMatrix3(t,ut),st,Tt.EPSILON7)&&nt.equals(Rt.getRow(t,3,ct),lt))return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=0,e[11]=0,e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=1,e;throw new it("matrix is not invertible because its determinate is zero.")}return a=1/a,e[0]=_*a,e[1]=b*a,e[2]=A*a,e[3]=P*a,e[4]=q*a,e[5]=C*a,e[6]=B*a,e[7]=L*a,e[8]=U*a,e[9]=s*a,e[10]=x*a,e[11]=y*a,e[12]=d*a,e[13]=S*a,e[14]=v*a,e[15]=l*a,e},Rt.inverseTransformation=function(t,e){var n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],u=t[6],s=t[8],c=t[9],l=t[10],m=t[12],h=t[13],f=t[14],p=-n*m-r*h-i*f,t=-a*m-o*h-u*f,f=-s*m-c*h-l*f;return e[0]=n,e[1]=a,e[2]=s,e[3]=0,e[4]=r,e[5]=o,e[6]=c,e[7]=0,e[8]=i,e[9]=u,e[10]=l,e[11]=0,e[12]=p,e[13]=t,e[14]=f,e[15]=1,e};var mt=new Rt;Rt.inverseTranspose=function(t,e){return Rt.inverse(Rt.transpose(t,mt),e)},Rt.IDENTITY=Object.freeze(new Rt(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)),Rt.ZERO=Object.freeze(new Rt(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),Rt.COLUMN0ROW0=0,Rt.COLUMN0ROW1=1,Rt.COLUMN0ROW2=2,Rt.COLUMN0ROW3=3,Rt.COLUMN1ROW0=4,Rt.COLUMN1ROW1=5,Rt.COLUMN1ROW2=6,Rt.COLUMN1ROW3=7,Rt.COLUMN2ROW0=8,Rt.COLUMN2ROW1=9,Rt.COLUMN2ROW2=10,Rt.COLUMN2ROW3=11,Rt.COLUMN3ROW0=12,Rt.COLUMN3ROW1=13,Rt.COLUMN3ROW2=14,Rt.COLUMN3ROW3=15,Object.defineProperties(Rt.prototype,{length:{get:function(){return Rt.packedLength}}}),Rt.prototype.clone=function(t){return Rt.clone(this,t)},Rt.prototype.equals=function(t){return Rt.equals(this,t)},Rt.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]&&t[4]===e[n+4]&&t[5]===e[n+5]&&t[6]===e[n+6]&&t[7]===e[n+7]&&t[8]===e[n+8]&&t[9]===e[n+9]&&t[10]===e[n+10]&&t[11]===e[n+11]&&t[12]===e[n+12]&&t[13]===e[n+13]&&t[14]===e[n+14]&&t[15]===e[n+15]},Rt.prototype.equalsEpsilon=function(t,e){return Rt.equalsEpsilon(this,t,e)},Rt.prototype.toString=t("toString"),t("AttributeCompression.octDecodeFromCartesian4");const ht=function(t){return 256*t.x+t.y},ft=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},pt=function(t,e){var n=t/4096,n=Math.floor(n);return e.x=n/4095,e.y=(t-4096*n)/4095,e};t("AttributeCompression.zigZagDeltaDecode");var yt={BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DOUBLE:5130,getSizeInBytes:function(t){switch(t){case yt.BYTE:return Int8Array.BYTES_PER_ELEMENT;case yt.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case yt.SHORT:return Int16Array.BYTES_PER_ELEMENT;case yt.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case yt.INT:return Int32Array.BYTES_PER_ELEMENT;case yt.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case yt.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case yt.DOUBLE:return Float64Array.BYTES_PER_ELEMENT}}};yt.fromTypedArray=t("ComponentDatatype.fromTypedArray"),yt.validate=function(t){return Et(t)&&(t===yt.BYTE||t===yt.UNSIGNED_BYTE||t===yt.SHORT||t===yt.UNSIGNED_SHORT||t===yt.INT||t===yt.UNSIGNED_INT||t===yt.FLOAT||t===yt.DOUBLE)},yt.createTypedArray=function(t,e){switch(t){case yt.BYTE:return new Int8Array(e);case yt.UNSIGNED_BYTE:return new Uint8Array(e);case yt.SHORT:return new Int16Array(e);case yt.UNSIGNED_SHORT:return new Uint16Array(e);case yt.INT:return new Int32Array(e);case yt.UNSIGNED_INT:return new Uint32Array(e);case yt.FLOAT:return new Float32Array(e);case yt.DOUBLE:return new Float64Array(e)}},yt.createArrayBufferView=function(t,e,n,r){switch(n=Ot(n,0),r=Ot(r,(e.byteLength-n)/yt.getSizeInBytes(t)),t){case yt.BYTE:return new Int8Array(e,n,r);case yt.UNSIGNED_BYTE:return new Uint8Array(e,n,r);case yt.SHORT:return new Int16Array(e,n,r);case yt.UNSIGNED_SHORT:return new Uint16Array(e,n,r);case yt.INT:return new Int32Array(e,n,r);case yt.UNSIGNED_INT:return new Uint32Array(e,n,r);case yt.FLOAT:return new Float32Array(e,n,r);case yt.DOUBLE:return new Float64Array(e,n,r)}},yt.fromName=t("ComponentDatatype.fromName");var dt=Object.freeze(yt),xt={NONE:0,BITS12:1},gt=Object.freeze(xt),St=new It,wt=new It,_t=new Nt,bt=new Rt,At=new Rt,Pt=Math.pow(2,12);function qt(t,e,n,r,i,a){var o,u,s,c,l,m=gt.NONE;Et(t)&&Et(e)&&Et(n)&&Et(r)&&(c=t.minimum,u=t.maximum,l=It.subtract(u,c,wt),s=n-e,m=Math.max(It.maximumComponent(l),s)<Pt-1?gt.BITS12:gt.NONE,o=t.center,u=Rt.inverseTransformation(r,new Rt),s=It.negate(c,St),Rt.multiply(Rt.fromTranslation(s,bt),u,u),(s=St).x=1/l.x,s.y=1/l.y,s.z=1/l.z,Rt.multiply(Rt.fromScale(s,bt),u,u),s=Rt.clone(r),Rt.setTranslation(s,It.ZERO,s),r=Rt.clone(r,new Rt),c=Rt.fromTranslation(c,bt),l=Rt.fromScale(l,At),l=Rt.multiply(c,l,bt),Rt.multiply(r,l,r),Rt.multiply(s,l,s)),this.quantization=m,this.minimumHeight=e,this.maximumHeight=n,this.center=o,this.toScaledENU=u,this.fromScaledENU=r,this.matrix=s,this.hasVertexNormals=i,this.hasWebMercatorT=Ot(a,!1)}qt.prototype.encode=function(t,e,n,r,i,a,o){var u,s,c=r.x,l=r.y;return this.quantization===gt.BITS12?((n=Rt.multiplyByPoint(this.toScaledENU,n,St)).x=Tt.clamp(n.x,0,1),n.y=Tt.clamp(n.y,0,1),n.z=Tt.clamp(n.z,0,1),u=this.maximumHeight-this.minimumHeight,s=Tt.clamp((i-this.minimumHeight)/u,0,1),Nt.fromElements(n.x,n.y,_t),r=ft(_t),Nt.fromElements(n.z,s,_t),u=ft(_t),Nt.fromElements(c,l,_t),s=ft(_t),t[e++]=r,t[e++]=u,t[e++]=s,this.hasWebMercatorT&&(Nt.fromElements(o,0,_t),s=ft(_t),t[e++]=s)):(It.subtract(n,this.center,St),t[e++]=St.x,t[e++]=St.y,t[e++]=St.z,t[e++]=i,t[e++]=c,t[e++]=l,this.hasWebMercatorT&&(t[e++]=o)),this.hasVertexNormals&&(t[e++]=ht(a)),e},qt.prototype.decodePosition=function(t,e,n){if(Et(n)||(n=new It),e*=this.getStride(),this.quantization!==gt.BITS12)return n.x=t[e],n.y=t[e+1],n.z=t[e+2],It.add(n,this.center,n);var r=pt(t[e],_t);n.x=r.x,n.y=r.y;e=pt(t[e+1],_t);return n.z=e.x,Rt.multiplyByPoint(this.fromScaledENU,n,n)},qt.prototype.decodeTextureCoordinates=function(t,e,n){return Et(n)||(n=new Nt),e*=this.getStride(),this.quantization===gt.BITS12?pt(t[e+2],n):Nt.fromElements(t[e+4],t[e+5],n)},qt.prototype.decodeHeight=function(t,e){return e*=this.getStride(),this.quantization!==gt.BITS12?t[e+3]:pt(t[e+1],_t).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},qt.prototype.decodeWebMercatorT=function(t,e){return e*=this.getStride(),this.quantization===gt.BITS12?pt(t[e+3],_t).x:t[e+6]},qt.prototype.getOctEncodedNormal=function(t,e,n){t=t[e=(e+1)*this.getStride()-1]/256,e=Math.floor(t),t=256*(t-e);return Nt.fromElements(e,t,n)},qt.prototype.getStride=function(){var t=this.quantization===gt.BITS12?3:6;return this.hasWebMercatorT&&++t,this.hasVertexNormals&&++t,t};var Ct={position3DAndHeight:0,textureCoordAndEncodedNormals:1},Bt={compressed0:0,compressed1:1};function Lt(t,e,n){this.heading=Ot(t,0),this.pitch=Ot(e,0),this.roll=Ot(n,0)}function Ut(){return t(this.constructor.name)}function Dt(){return t(this.constructor.name)}qt.prototype.getAttributes=function(t){var e,n=dt.FLOAT,r=dt.getSizeInBytes(n);if(this.quantization===gt.NONE){var i=2;return this.hasWebMercatorT&&++i,this.hasVertexNormals&&++i,e=(4+i)*r,[{index:Ct.position3DAndHeight,vertexBuffer:t,componentDatatype:n,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:e},{index:Ct.textureCoordAndEncodedNormals,vertexBuffer:t,componentDatatype:n,componentsPerAttribute:i,offsetInBytes:4*r,strideInBytes:e}]}var a=3,i=0;return(this.hasWebMercatorT||this.hasVertexNormals)&&++a,this.hasWebMercatorT&&this.hasVertexNormals?(++i,e=(a+1)*r,[{index:Bt.compressed0,vertexBuffer:t,componentDatatype:n,componentsPerAttribute:a,offsetInBytes:0,strideInBytes:e},{index:Bt.compressed1,vertexBuffer:t,componentDatatype:n,componentsPerAttribute:1,offsetInBytes:a*r,strideInBytes:e}]):[{index:Bt.compressed0,vertexBuffer:t,componentDatatype:n,componentsPerAttribute:a}]},qt.prototype.getAttributeLocations=function(){return this.quantization===gt.NONE?Ct:Bt},qt.clone=function(t,e){return(e=!Et(e)?new qt:e).quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=It.clone(t.center),e.toScaledENU=Rt.clone(t.toScaledENU),e.fromScaledENU=Rt.clone(t.fromScaledENU),e.matrix=Rt.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e},Lt.fromQuaternion=function(t,e){Et(e)||(e=new Lt);var n=2*(t.w*t.y-t.z*t.x),r=1-2*(t.x*t.x+t.y*t.y),i=2*(t.w*t.x+t.y*t.z),a=1-2*(t.y*t.y+t.z*t.z),t=2*(t.w*t.z+t.x*t.y);return e.heading=-Math.atan2(t,a),e.roll=Math.atan2(i,r),e.pitch=-Tt.asinClamped(n),e},Lt.fromDegrees=function(t,e,n,r){return(r=!Et(r)?new Lt:r).heading=t*Tt.RADIANS_PER_DEGREE,r.pitch=e*Tt.RADIANS_PER_DEGREE,r.roll=n*Tt.RADIANS_PER_DEGREE,r},Lt.clone=function(t,e){if(Et(t))return Et(e)?(e.heading=t.heading,e.pitch=t.pitch,e.roll=t.roll,e):new Lt(t.heading,t.pitch,t.roll)},Lt.equals=function(t,e){return t===e||Et(t)&&Et(e)&&t.heading===e.heading&&t.pitch===e.pitch&&t.roll===e.roll},Lt.equalsEpsilon=function(t,e,n,r){return t===e||Et(t)&&Et(e)&&Tt.equalsEpsilon(t.heading,e.heading,n,r)&&Tt.equalsEpsilon(t.pitch,e.pitch,n,r)&&Tt.equalsEpsilon(t.roll,e.roll,n,r)},Lt.prototype.clone=function(t){return Lt.clone(this,t)},Lt.prototype.equals=function(t){return Lt.equals(this,t)},Lt.prototype.equalsEpsilon=function(t,e,n){return Lt.equalsEpsilon(this,t,e,n)},Lt.prototype.toString=function(){return"("+this.heading+", "+this.pitch+", "+this.roll+")"};var kt={up:{south:"east",north:"west",west:"south",east:"north"},down:{south:"west",north:"east",west:"north",east:"south"},south:{up:"west",down:"east",west:"down",east:"up"},north:{up:"east",down:"west",west:"up",east:"down"},west:{up:"north",down:"south",north:"down",south:"up"},east:{up:"south",down:"north",north:"up",south:"down"}},Wt={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]},jt={},Ft={east:new It,north:new It,up:new It,west:new It,south:new It,down:new It},Ht=new It,Vt=new It,Gt=new It;const Yt=function(i,a){if(!kt.hasOwnProperty(i)||!kt[i].hasOwnProperty(a))throw new u("firstAxis and secondAxis must be east, north, up, west, south or down.");var t,o=kt[i][a],e=i+a;return Et(jt[e])?t=jt[e]:(t=function(t,e,n){var r;return Et(n)||(n=new Rt),It.equalsEpsilon(t,It.ZERO,Tt.EPSILON14)?(It.unpack(Wt[i],0,Ht),It.unpack(Wt[a],0,Vt),It.unpack(Wt[o],0,Gt)):Tt.equalsEpsilon(t.x,0,Tt.EPSILON14)&&Tt.equalsEpsilon(t.y,0,Tt.EPSILON14)?(r=Tt.sign(t.z),It.unpack(Wt[i],0,Ht),"east"!==i&&"west"!==i&&It.multiplyByScalar(Ht,r,Ht),It.unpack(Wt[a],0,Vt),"east"!==a&&"west"!==a&&It.multiplyByScalar(Vt,r,Vt),It.unpack(Wt[o],0,Gt),"east"!==o&&"west"!==o&&It.multiplyByScalar(Gt,r,Gt)):((e=Ot(e,vt.WGS84)).geodeticSurfaceNormal(t,Ft.up),r=Ft.up,(e=Ft.east).x=-t.y,e.y=t.x,e.z=0,It.normalize(e,Ft.east),It.cross(r,e,Ft.north),It.multiplyByScalar(Ft.up,-1,Ft.down),It.multiplyByScalar(Ft.east,-1,Ft.west),It.multiplyByScalar(Ft.north,-1,Ft.south),Ht=Ft[i],Vt=Ft[a],Gt=Ft[o]),n[0]=Ht.x,n[1]=Ht.y,n[2]=Ht.z,n[3]=0,n[4]=Vt.x,n[5]=Vt.y,n[6]=Vt.z,n[7]=0,n[8]=Gt.x,n[9]=Gt.y,n[10]=Gt.z,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,n},jt[e]=t),t},Zt=Yt("east","north");function Xt(t){this._ellipsoid=Ot(t,vt.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Yt("north","east"),Yt("north","up"),Yt("north","west"),t("Transforms.headingPitchRollToFixedFrame"),new Ut,t("Transforms.computeTemeToPseudoFixedMatrix"),t("new Iau2006XysData()"),t("Transforms.preloadIcrfFixed"),t("Transforms.computeIcrfToFixedMatrix"),new Dt(0,0,0,0,0,0),t("Transforms.computeFixedToIcrfMatrix"),t("Transforms.pointToWindowCoordinates"),t("Transforms.pointToGLWindowCoordinates"),t("Transforms.rotationMatrixFromPositionVelocity"),t("Transforms.basisTo2D"),t("Transforms.wgs84To2DModelMatrix"),Object.defineProperties(Xt.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),Xt.mercatorAngleToGeodeticLatitude=function(t){return Tt.PI_OVER_TWO-2*Math.atan(Math.exp(-t))};const Jt=Xt.geodeticLatitudeToMercatorAngle=function(t){t>Xt.MaximumLatitude?t=Xt.MaximumLatitude:t<-Xt.MaximumLatitude&&(t=-Xt.MaximumLatitude);t=Math.sin(t);return.5*Math.log((1+t)/(1-t))};Xt.MaximumLatitude=Xt.mercatorAngleToGeodeticLatitude(Math.PI),Xt.prototype.project=function(t,e){var n=this._semimajorAxis,r=t.longitude*n,n=Xt.geodeticLatitudeToMercatorAngle(t.latitude)*n,t=t.height;return Et(e)?(e.x=r,e.y=n,e.z=t,e):new It(r,n,t)},Xt.prototype.unproject=function(t,e){var n=this._oneOverSemimajorAxis,r=t.x*n,n=Xt.mercatorAngleToGeodeticLatitude(t.y*n),t=t.z;return Et(e)?(e.longitude=r,e.latitude=n,e.height=t,e):new g(r,n,t)};const Qt=function(t){var e=t.east,t=t.west;return e<t&&(e+=Tt.TWO_PI),e-t},Kt=function(t){return t.north-t.south};var $t={};$t.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var te=new It,ee=new Rt,ne=new It,re=new It;function ie(t){var e=t.name,n=t.message,n=Et(e)&&Et(n)?e+": "+n:t.toString(),t=t.stack;return Et(t)&&(n+="\\n"+t),n}function ae(t,e,n){try{return t(e,n)}catch(t){return Promise.reject(t)}}function oe(i){var a;return async function(t){var e=t.data,n=[],r={id:e.id,result:void 0,error:void 0};try{r.result=await ae(i,e.parameters,n)}catch(t){console.log(t),t instanceof Error?r.error={name:t.name,message:t.message,stack:t.stack}:r.error=t}finally{Et(a)||(a=Ot(self.webkitPostMessage,self.postMessage)),e.canTransferArrayBuffer||(n.length=0);try{a(r,n)}catch(t){r.result=void 0,r.error="postMessage failed with error: "+ie(t)+"\\n  with responseMessage: "+JSON.stringify(r),a(r)}}}}function ue(t,e){if(t){t.ellipsoid=vt.clone(t.ellipsoid);var n=$t.computeVertices(t),r=n.vertices;return e.push(r.buffer),{vertices:r.buffer,numberOfAttributes:n.encoding.getStride(),minimumHeight:n.minimumHeight,maximumHeight:n.maximumHeight,gridWidth:t.width,gridHeight:t.height,orientedBoundingBox:n.orientedBoundingBox,occludeePointInScaledSpace:n.occludeePointInScaledSpace,encoding:n.encoding,westIndicesSouthToNorth:n.westIndicesSouthToNorth,southIndicesEastToWest:n.southIndicesEastToWest,eastIndicesNorthToSouth:n.eastIndicesNorthToSouth,northIndicesWestToEast:n.northIndicesWestToEast}}}$t.computeVertices=function(t){var e=Math.cos,n=Math.sin,r=Math.sqrt,i=Math.atan,a=Math.exp,o=Tt.PI_OVER_TWO,u=Tt.toRadians,s=t.width,c=t.height,l=t.skirtHeight,m=Ot(t.isGeographic,!0),h=Ot(t.ellipsoid,vt.WGS84),f=1/h.maximumRadius,p=t.nativeRectangle,y=t.rectangle,d=y.west,x=y.south,g=y.east,S=y.north,y=Et(w=t.relativeToCenter),w=y?w:It.ZERO,E=Ot(t.exaggeration,1),O=Ot(t.includeWebMercatorT,!1),t=Ot(t.structure,$t.DEFAULT_STRUCTURE),T=Ot(t.heightScale,$t.DEFAULT_STRUCTURE.heightScale),I=Ot(t.heightOffset,$t.DEFAULT_STRUCTURE.heightOffset),v=Qt(p),M=Kt(p),N=v/(s-1),z=M/(c-1);m||(v*=f,M*=f);var R,_,t=h.radiiSquared,b=t.x,A=t.y,P=t.z,q=65536,C=-65536,t=Zt(w,h),B=Rt.inverseTransformation(t,ee);O&&(R=Jt(x),_=1/(Jt(S)-R));var L=ne;L.x=Number.POSITIVE_INFINITY,L.y=Number.POSITIVE_INFINITY,L.z=Number.POSITIVE_INFINITY;var U=re;U.x=Number.NEGATIVE_INFINITY,U.y=Number.NEGATIVE_INFINITY,U.z=Number.NEGATIVE_INFINITY;var D=Number.POSITIVE_INFINITY,k=s*c,W=k+(0<l?2*s+2*c:0),j=new Array(W),F=new Array(W),H=new Array(W),V=O?new Array(W):[],G=0,Y=c,Z=0,X=s;0<l&&(--G,++Y,--Z,++X);for(var J,Q=G;Q<Y;++Q){var K=Q;c<=(K=K<0?0:K)&&(K=c-1);var $=p.north-z*K,tt=(($=m?u($):o-2*i(a(-$*f)))-x)/(S-x),tt=Tt.clamp(tt,0,1),et=Q===G,nt=Q===Y-1;0<l&&(et?$+=1e-5*M:nt&&($-=1e-5*M));var rt,it=e($),at=n($),ot=P*at;O&&(rt=(Jt($)-R)*_);for(var ut=Z;ut<X;++ut){var st=ut;s<=(st=st<0?0:st)&&(st=s-1);var ct=((ct=0)*T+I)*E,C=Math.max(C,ct),q=Math.min(q,ct),lt=p.west+N*st;m?lt=u(lt):lt*=f;var mt=(lt-d)/(g-d),mt=Tt.clamp(mt,0,1),ht=K*s+st;if(0<l){var ft=ut===Z,pt=ut===X-1,yt=et||nt||ft||pt;if((et||nt)&&(ft||pt))continue;yt&&(ct-=l,ft?(ht=c-K-1+k,lt-=1e-5*v):nt?ht=k+c+(s-st-1):pt?(ht=k+c+s+K,lt+=1e-5*v):et&&(ht=k+c+s+c+st))}var dt=it*e(lt),yt=it*n(lt),ft=b*dt,pt=A*yt,st=1/r(ft*dt+pt*yt+ot*at),lt=ft*st,ft=pt*st,pt=ot*st,st=new It;st.x=lt+dt*ct,st.y=ft+yt*ct,st.z=pt+at*ct,j[ht]=st,F[ht]=ct,H[ht]=new Nt(mt,tt),O&&(V[ht]=rt),Rt.multiplyByPoint(B,st,te),It.minimumByComponent(te,L,L),It.maximumByComponent(te,U,U),D=Math.min(D,ct)}}y&&(J=new zt(h).computeHorizonCullingPointPossiblyUnderEllipsoid(w,j,q));for(var xt=new qt(new Mt(L,U,w),D,C,t,!1,O),gt=new Float32Array(W*xt.getStride()),St=0,wt=0;wt<W;++wt)St=xt.encode(gt,St,j[wt],H[wt],F[wt],void 0,V[wt]);return{vertices:gt,maximumHeight:C,minimumHeight:q,encoding:xt,occludeePointInScaledSpace:J}};var se=oe(ue);cesiumWorkers={createVerticesFromHeightmap:se,createTaskProcessorWorker:oe};\n\nself.CESIUM_BASE_URL = "/";\n\nself.cesiumWorkers = cesiumWorkers;\n\nonmessage = function(event) {\n  if (event.data.CESIUM_BASE_URL) {\n    self.CESIUM_BASE_URL = event.data.CESIUM_BASE_URL;\n  }\n  if (event.data.XYS2006_samples) {\n    self.XYS2006_samples = event.data.XYS2006_samples;\n  }\n  if (event.data.approximateTerrainHeights) {\n    self.approximateTerrainHeights = event.data.approximateTerrainHeights;\n  }\n  if (event.data.location) {\n    globalThis.location = event.data.location;\n  }\n  var data = event.data;\n\n  var dd = data.workerModule.split(/\\//g);\n  var wModule = dd[dd.length - 1];\n\n  self.onmessage = cesiumWorkers[wModule];\n};\n';
        try {
            n = new Blob([i], {
                type: "application/javascript"
            })
        } catch (s) {
            var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                o = new a;
            o.append(i), n = o.getBlob("application/javascript")
        }
        return new Worker(URL.createObjectURL(n))
    }();
    t.postMessage = v(t.webkitPostMessage, t.postMessage);
    var r = {
        loaderConfig: {
            paths: {
                Workers: pn("Workers")
            },
            baseUrl: pn.getCesiumBaseUrl().url
        },
        workerModule: Tt._workerModulePrefix + e._workerName
    };
    return t.postMessage(r), t.onmessage = function(n) {
        O0(e, n.data)
    }, t
}

function Tt(e, t) {
    this._workerName = e, this._maximumActiveTasks = v(t, 5), this._activeTasks = 0, this._deferreds = {}, this._nextID = 0
}
var N0 = [];
Tt.prototype.scheduleTask = function(e, t) {
    if (c(this._worker) || (this._worker = P0(this)), !(this._activeTasks >= this._maximumActiveTasks)) {
        ++this._activeTasks;
        var r = this;
        return ge(I0(), function(n) {
            c(t) ? n || (t.length = 0) : t = N0;
            var i = r._nextID++,
                a = ge.defer();
            return r._deferreds[i] = a, r._worker.postMessage({
                id: i,
                parameters: e,
                canTransferArrayBuffer: n
            }, t), a.promise
        })
    }
};
Tt.prototype.initWebAssemblyModule = E("TaskProcessor.prototype.initWebAssemblyModule");
Tt.prototype.isDestroyed = function() {
    return !1
};
Tt.prototype.destroy = function() {
    return c(this._worker) && this._worker.terminate(), Je(this)
};
Tt.taskCompletedEvent = Us;
Tt._defaultWorkerModulePrefix = "Workers/";
Tt._workerModulePrefix = Tt._defaultWorkerModulePrefix;
Tt._canTransferArrayBuffer = void 0;

function gu(e, t, r, n, i, a, o, s, h, f, l, d, m, _, g, T, C) {
    this.center = e, this.vertices = t, this.stride = v(f, 6), this.indices = r, this.indexCountWithoutSkirts = n, this.vertexCountWithoutSkirts = i, this.minimumHeight = a, this.maximumHeight = o, this.boundingSphere3D = s, this.occludeePointInScaledSpace = h, this.orientedBoundingBox = l, this.encoding = d, this.exaggeration = m, this.westIndicesSouthToNorth = _, this.southIndicesEastToWest = g, this.eastIndicesNorthToSouth = T, this.northIndicesWestToEast = C
}

function tt() {
    ye.throwInstantiationError()
}
Object.defineProperties(tt.prototype, {
    errorEvent: {
        get: ye.throwInstantiationError
    },
    credit: {
        get: ye.throwInstantiationError
    },
    tilingScheme: {
        get: ye.throwInstantiationError
    },
    ready: {
        get: ye.throwInstantiationError
    },
    readyPromise: {
        get: ye.throwInstantiationError
    },
    hasWaterMask: {
        get: ye.throwInstantiationError
    },
    hasVertexNormals: {
        get: ye.throwInstantiationError
    },
    availability: {
        get: ye.throwInstantiationError
    }
});
var wc = [];
tt.getRegularGridIndices = function(e, t) {
    var r = wc[e];
    c(r) || (wc[e] = r = []);
    var n = r[t];
    return c(n) || (e * t < p.SIXTY_FOUR_KILOBYTES ? n = r[t] = new Uint16Array((e - 1) * (t - 1) * 6) : n = r[t] = new Uint32Array((e - 1) * (t - 1) * 6), nl(e, t, n, 0)), n
};
var Rc = [];
tt.getRegularGridIndicesAndEdgeIndices = function(e, t) {
    var r = Rc[e];
    c(r) || (Rc[e] = r = []);
    var n = r[t];
    if (!c(n)) {
        var i = tt.getRegularGridIndices(e, t),
            a = rl(e, t),
            o = a.westIndicesSouthToNorth,
            s = a.southIndicesEastToWest,
            h = a.eastIndicesNorthToSouth,
            f = a.northIndicesWestToEast;
        n = r[t] = {
            indices: i,
            westIndicesSouthToNorth: o,
            southIndicesEastToWest: s,
            eastIndicesNorthToSouth: h,
            northIndicesWestToEast: f
        }
    }
    return n
};
var xc = [];
tt.getRegularGridAndSkirtIndicesAndEdgeIndices = function(e, t) {
    var r = xc[e];
    c(r) || (xc[e] = r = []);
    var n = r[t];
    if (!c(n)) {
        var i = e * t,
            a = (e - 1) * (t - 1) * 6,
            o = e * 2 + t * 2,
            s = Math.max(0, o - 4) * 6,
            h = i + o,
            f = a + s,
            l = rl(e, t),
            d = l.westIndicesSouthToNorth,
            m = l.southIndicesEastToWest,
            _ = l.eastIndicesNorthToSouth,
            g = l.northIndicesWestToEast,
            T = si.createTypedArray(h, f);
        nl(e, t, T, 0), tt.addSkirtIndices(d, m, _, g, i, T, a), n = r[t] = {
            indices: T,
            westIndicesSouthToNorth: d,
            southIndicesEastToWest: m,
            eastIndicesNorthToSouth: _,
            northIndicesWestToEast: g,
            indexCountWithoutSkirts: a
        }
    }
    return n
};
tt.addSkirtIndices = function(e, t, r, n, i, a, o) {
    var s = i;
    o = Ca(e, s, a, o), s += e.length, o = Ca(t, s, a, o), s += t.length, o = Ca(r, s, a, o), s += r.length, Ca(n, s, a, o)
};

function rl(e, t) {
    var r = new Array(t),
        n = new Array(e),
        i = new Array(t),
        a = new Array(e),
        o;
    for (o = 0; o < e; ++o) a[o] = o, n[o] = e * t - 1 - o;
    for (o = 0; o < t; ++o) i[o] = (o + 1) * e - 1, r[o] = (t - o - 1) * e;
    return {
        westIndicesSouthToNorth: r,
        southIndicesEastToWest: n,
        eastIndicesNorthToSouth: i,
        northIndicesWestToEast: a
    }
}

function nl(e, t, r, n) {
    for (var i = 0, a = 0; a < t - 1; ++a) {
        for (var o = 0; o < e - 1; ++o) {
            var s = i,
                h = s + e,
                f = h + 1,
                l = s + 1;
            r[n++] = s, r[n++] = h, r[n++] = l, r[n++] = l, r[n++] = h, r[n++] = f, ++i
        }++i
    }
}

function Ca(e, t, r, n) {
    for (var i = e[0], a = e.length, o = 1; o < a; ++o) {
        var s = e[o];
        r[n++] = i, r[n++] = s, r[n++] = t, r[n++] = t, r[n++] = s, r[n++] = t + 1, i = s, ++t
    }
    return n
}
tt.heightmapTerrainQuality = .25;
tt.getEstimatedLevelZeroGeometricErrorForAHeightmap = function(e, t, r) {
    return e.maximumRadius * 2 * Math.PI * tt.heightmapTerrainQuality / (t * r)
};
tt.prototype.requestTileGeometry = ye.throwInstantiationError;
tt.prototype.getLevelMaximumGeometricError = ye.throwInstantiationError;
tt.prototype.getTileDataAvailable = ye.throwInstantiationError;
tt.prototype.loadTileDataAvailability = ye.throwInstantiationError;

function Yr(e) {
    this._buffer = e.buffer, this._width = e.width, this._height = e.height, this._childTileMask = v(e.childTileMask, 15), this._encoding = v(e.encoding, Cp.NONE);
    var t = Nn.DEFAULT_STRUCTURE,
        r = e.structure;
    c(r) ? r !== t && (r.heightScale = v(r.heightScale, t.heightScale), r.heightOffset = v(r.heightOffset, t.heightOffset), r.elementsPerHeight = v(r.elementsPerHeight, t.elementsPerHeight), r.stride = v(r.stride, t.stride), r.elementMultiplier = v(r.elementMultiplier, t.elementMultiplier), r.isBigEndian = v(r.isBigEndian, t.isBigEndian)) : r = t, this._structure = r, this._createdByUpsampling = v(e.createdByUpsampling, !1), this._waterMask = e.waterMask, this._skirtHeight = void 0, this._mesh = void 0
}
Object.defineProperties(Yr.prototype, {
    credits: {
        get: function() {}
    },
    waterMask: {
        get: function() {
            return this._waterMask
        }
    },
    childTileMask: {
        get: function() {
            return this._childTileMask
        }
    }
});
var M0 = new Tt("createVerticesFromHeightmap");
Yr.prototype.createMesh = function(e, t, r, n, i) {
    var a = e.ellipsoid,
        o = e.tileXYToNativeRectangle(t, r, n),
        s = e.tileXYToRectangle(t, r, n);
    i = v(i, 1);
    var h = a.cartographicToCartesian(L.center(s)),
        f = this._structure,
        l = tt.getEstimatedLevelZeroGeometricErrorForAHeightmap(a, this._width, e.getNumberOfXTilesAtLevel(0)),
        d = l / (1 << n);
    this._skirtHeight = Math.min(d * 4, 1e3);
    var m = M0.scheduleTask({
        heightmap: this._buffer,
        structure: f,
        includeWebMercatorT: !0,
        width: this._width,
        height: this._height,
        nativeRectangle: o,
        rectangle: s,
        relativeToCenter: h,
        ellipsoid: a,
        skirtHeight: this._skirtHeight,
        isGeographic: e.projection instanceof jr,
        exaggeration: i,
        encoding: this._encoding
    });
    if (c(m)) {
        var _ = this;
        return ge(m, function(g) {
            var T;
            _._skirtHeight > 0 ? T = tt.getRegularGridAndSkirtIndicesAndEdgeIndices(g.gridWidth, g.gridHeight) : T = tt.getRegularGridIndicesAndEdgeIndices(g.gridWidth, g.gridHeight);
            var C = g.gridWidth * g.gridHeight;
            return _._mesh = new gu(h, new Float32Array(g.vertices), T.indices, T.indexCountWithoutSkirts, C, g.minimumHeight, g.maximumHeight, ae.clone(g.boundingSphere3D), u.clone(g.occludeePointInScaledSpace), g.numberOfAttributes, xe.clone(g.orientedBoundingBox), Kt.clone(g.encoding), i, T.westIndicesSouthToNorth, T.southIndicesEastToWest, T.eastIndicesNorthToSouth, T.northIndicesWestToEast), _._buffer = void 0, _._mesh
        })
    }
};
Yr.prototype._createMeshSync = function(e, t, r, n, i) {
    var a = e.ellipsoid,
        o = e.tileXYToNativeRectangle(t, r, n),
        s = e.tileXYToRectangle(t, r, n);
    i = v(i, 1);
    var h = a.cartographicToCartesian(L.center(s)),
        f = this._structure,
        l = tt.getEstimatedLevelZeroGeometricErrorForAHeightmap(a, this._width, e.getNumberOfXTilesAtLevel(0)),
        d = l / (1 << n);
    this._skirtHeight = Math.min(d * 4, 1e3);
    var m = Nn.computeVertices({
        structure: f,
        includeWebMercatorT: !0,
        width: this._width,
        height: this._height,
        nativeRectangle: o,
        rectangle: s,
        relativeToCenter: h,
        ellipsoid: a,
        skirtHeight: this._skirtHeight,
        isGeographic: e.projection instanceof jr,
        exaggeration: i
    });
    this._buffer = void 0;
    var _;
    this._skirtHeight > 0 ? _ = tt.getRegularGridAndSkirtIndicesAndEdgeIndices(this._width, this._height) : _ = tt.getRegularGridIndicesAndEdgeIndices(this._width, this._height);
    var g = m.gridWidth * m.gridHeight;
    return new gu(h, m.vertices, _.indices, _.indexCountWithoutSkirts, g, m.minimumHeight, m.maximumHeight, m.boundingSphere3D, m.occludeePointInScaledSpace, m.encoding.getStride(), m.orientedBoundingBox, m.encoding, i, _.westIndicesSouthToNorth, _.southIndicesEastToWest, _.eastIndicesNorthToSouth, _.northIndicesWestToEast)
};
Yr.prototype.interpolateHeight = function(e, t, r) {
    var n = this._width,
        i = this._height,
        a = this._structure,
        o = a.stride,
        s = a.elementsPerHeight,
        h = a.elementMultiplier,
        f = a.isBigEndian,
        l = a.heightOffset,
        d = a.heightScale,
        m;
    if (c(this._mesh)) {
        var _ = this._mesh.vertices,
            g = this._mesh.encoding,
            T = this._mesh.exaggeration;
        m = il(_, g, l, d, e, n, i, t, r, T)
    } else m = D0(this._buffer, s, h, o, f, e, n, i, t, r), m = m * d + l;
    return m
};
Yr.prototype.upsample = function(e, t, r, n, i, a, o) {
    var s = this._mesh;
    if (c(s)) {
        for (var h = this._width, f = this._height, l = this._structure, d = l.stride, m = new this._bufferType(h * f * d), _ = s.vertices, g = s.encoding, T = e.tileXYToRectangle(t, r, n), C = e.tileXYToRectangle(i, a, o), A = l.heightOffset, S = l.heightScale, x = s.exaggeration, I = l.elementsPerHeight, O = l.elementMultiplier, F = l.isBigEndian, b = Math.pow(O, I - 1), N = 0; N < f; ++N)
            for (var D = p.lerp(C.north, C.south, N / (f - 1)), V = 0; V < h; ++V) {
                var M = p.lerp(C.west, C.east, V / (h - 1)),
                    W = il(_, g, A, S, T, h, f, M, D, x);
                W = W < l.lowestEncodedHeight ? l.lowestEncodedHeight : W, W = W > l.highestEncodedHeight ? l.highestEncodedHeight : W, b0(m, I, O, b, d, F, N * h + V, W)
            }
        return new Yr({
            buffer: m,
            width: h,
            height: f,
            childTileMask: 0,
            structure: this._structure,
            createdByUpsampling: !0
        })
    }
};
Yr.prototype.isChildAvailable = function(e, t, r, n) {
    var i = 2;
    return r !== e * 2 && ++i, n !== t * 2 && (i -= 2), (this._childTileMask & 1 << i) !== 0
};
Yr.prototype.wasCreatedByUpsampling = function() {
    return this._createdByUpsampling
};

function D0(e, t, r, n, i, a, o, s, h, f) {
    var l = (h - a.west) * (o - 1) / (a.east - a.west),
        d = (f - a.south) * (s - 1) / (a.north - a.south),
        m = l | 0,
        _ = m + 1;
    _ >= o && (_ = o - 1, m = o - 2);
    var g = d | 0,
        T = g + 1;
    T >= s && (T = s - 1, g = s - 2);
    var C = l - m,
        A = d - g;
    g = s - 1 - g, T = s - 1 - T;
    var S = Aa(e, t, r, n, i, g * o + m),
        x = Aa(e, t, r, n, i, g * o + _),
        I = Aa(e, t, r, n, i, T * o + m),
        O = Aa(e, t, r, n, i, T * o + _);
    return al(C, A, S, x, I, O)
}

function il(e, t, r, n, i, a, o, s, h, f) {
    var l = (s - i.west) * (a - 1) / (i.east - i.west),
        d = (h - i.south) * (o - 1) / (i.north - i.south),
        m = l | 0,
        _ = m + 1;
    _ >= a && (_ = a - 1, m = a - 2);
    var g = d | 0,
        T = g + 1;
    T >= o && (T = o - 1, g = o - 2);
    var C = l - m,
        A = d - g;
    g = o - 1 - g, T = o - 1 - T;
    var S = (t.decodeHeight(e, g * a + m) / f - r) / n,
        x = (t.decodeHeight(e, g * a + _) / f - r) / n,
        I = (t.decodeHeight(e, T * a + m) / f - r) / n,
        O = (t.decodeHeight(e, T * a + _) / f - r) / n;
    return al(C, A, S, x, I, O)
}

function al(e, t, r, n, i, a) {
    return t < e ? r + e * (n - r) + t * (a - n) : r + e * (a - i) + t * (i - r)
}

function Aa(e, t, r, n, i, a) {
    a *= n;
    var o = 0,
        s;
    if (i)
        for (s = 0; s < t; ++s) o = o * r + e[a + s];
    else
        for (s = t - 1; s >= 0; --s) o = o * r + e[a + s];
    return o
}

function b0(e, t, r, n, i, a, o, s) {
    o *= i;
    var h;
    if (a)
        for (h = 0; h < t - 1; ++h) e[o + h] = s / n | 0, s -= e[o + h] * n, n /= r;
    else
        for (h = t - 1; h > 0; --h) e[o + h] = s / n | 0, s -= e[o + h] * n, n /= r;
    e[o + h] = s
}

function vi(e) {
    e = v(e, v.EMPTY_OBJECT), this._tilingScheme = e.tilingScheme, c(this._tilingScheme) || (this._tilingScheme = new yn({
        ellipsoid: v(e.ellipsoid, se.WGS84)
    })), this._levelZeroMaximumGeometricError = tt.getEstimatedLevelZeroGeometricErrorForAHeightmap(this._tilingScheme.ellipsoid, 64, this._tilingScheme.getNumberOfXTilesAtLevel(0)), this._errorEvent = new ze, this._readyPromise = ge.resolve(!0)
}
Object.defineProperties(vi.prototype, {
    errorEvent: {
        get: function() {
            return this._errorEvent
        }
    },
    credit: {
        get: function() {}
    },
    tilingScheme: {
        get: function() {
            return this._tilingScheme
        }
    },
    ready: {
        get: function() {
            return !0
        }
    },
    readyPromise: {
        get: function() {
            return this._readyPromise
        }
    },
    hasWaterMask: {
        get: function() {
            return !1
        }
    },
    hasVertexNormals: {
        get: function() {
            return !1
        }
    },
    availability: {
        get: function() {}
    }
});
vi.prototype.requestTileGeometry = function(e, t, r, n) {
    var i = 16,
        a = 16;
    return ge.resolve(new Yr({
        width: i,
        height: a
    }))
};
vi.prototype.getLevelMaximumGeometricError = function(e) {
    return this._levelZeroMaximumGeometricError / (1 << e)
};
vi.prototype.getTileDataAvailable = function(e, t, r) {};
vi.prototype.loadTileDataAvailability = function(e, t, r) {};

function dt(e, t, r, n) {
    this.near = v(e, 0), this.nearValue = v(t, 0), this.far = v(r, 1), this.farValue = v(n, 0)
}
dt.clone = function(e, t) {
    if (c(e)) return c(t) ? (t.near = e.near, t.nearValue = e.nearValue, t.far = e.far, t.farValue = e.farValue, t) : new dt(e.near, e.nearValue, e.far, e.farValue)
};
dt.packedLength = 4;
dt.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.near, t[r++] = e.nearValue, t[r++] = e.far, t[r] = e.farValue, t
};
dt.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new dt), r.near = e[t++], r.nearValue = e[t++], r.far = e[t++], r.farValue = e[t], r
};
dt.equals = function(e, t) {
    return e === t || c(e) && c(t) && e.near === t.near && e.nearValue === t.nearValue && e.far === t.far && e.farValue === t.farValue
};
dt.prototype.clone = function(e) {
    return dt.clone(this, e)
};
dt.prototype.equals = function(e) {
    return dt.equals(this, e)
};
var L0 = "uniform vec4 u_initialColor;\n#if TEXTURE_UNITS > 0\nuniform sampler2D u_dayTextures[TEXTURE_UNITS];uniform vec4 u_dayTextureTranslationAndScale[TEXTURE_UNITS];uniform bool u_dayTextureUseWebMercatorT[TEXTURE_UNITS];\n#ifdef APPLY_ALPHA\nuniform float u_dayTextureAlpha[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_DAY_NIGHT_ALPHA\nuniform float u_dayTextureNightAlpha[TEXTURE_UNITS];uniform float u_dayTextureDayAlpha[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_SPLIT\nuniform float u_dayTextureSplit[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_BRIGHTNESS\nuniform float u_dayTextureBrightness[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_CONTRAST\nuniform float u_dayTextureContrast[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_HUE\nuniform float u_dayTextureHue[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_SATURATION\nuniform float u_dayTextureSaturation[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_GAMMA\nuniform float u_dayTextureOneOverGamma[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_IMAGERY_CUTOUT\nuniform vec4 u_dayTextureCutoutRectangles[TEXTURE_UNITS];\n#endif\n#ifdef APPLY_COLOR_TO_ALPHA\nuniform vec4 u_colorsToAlpha[TEXTURE_UNITS];\n#endif\nuniform vec4 u_dayTextureTexCoordsRectangle[TEXTURE_UNITS];\n#endif\n#ifdef SHOW_REFLECTIVE_OCEAN\nuniform sampler2D u_waterMask;uniform vec4 u_waterMaskTranslationAndScale;uniform float u_zoomedOutOceanSpecularIntensity;\n#endif\n#ifdef SHOW_OCEAN_WAVES\nuniform sampler2D u_oceanNormalMap;\n#endif\n#if defined(ENABLE_DAYNIGHT_SHADING) || defined(GROUND_ATMOSPHERE)\nuniform vec2 u_lightingFadeDistance;\n#endif\n#ifdef TILE_LIMIT_RECTANGLE\nuniform vec4 u_cartographicLimitRectangle;\n#endif\n#ifdef GROUND_ATMOSPHERE\nuniform vec2 u_nightFadeDistance;\n#endif\n#ifdef ENABLE_CLIPPING_PLANES\nuniform highp sampler2D u_clippingPlanes;uniform mat4 u_clippingPlanesMatrix;uniform vec4 u_clippingPlanesEdgeStyle;\n#endif\n#if defined(FOG) && defined(DYNAMIC_ATMOSPHERE_LIGHTING) && (defined(ENABLE_VERTEX_LIGHTING) || defined(ENABLE_DAYNIGHT_SHADING))\nuniform float u_minimumBrightness;\n#endif\n#ifdef COLOR_CORRECT\nuniform vec3 u_hsbShift;\n#endif\n#ifdef HIGHLIGHT_FILL_TILE\nuniform vec4 u_fillHighlightColor;\n#endif\n#ifdef TRANSLUCENT\nuniform vec4 u_frontFaceAlphaByDistance;uniform vec4 u_backFaceAlphaByDistance;uniform vec4 u_translucencyRectangle;\n#endif\n#ifdef UNDERGROUND_COLOR\nuniform vec4 u_undergroundColor;uniform vec4 u_undergroundColorAlphaByDistance;\n#endif\nvarying vec3 v_positionMC;varying vec3 v_positionEC;varying vec3 v_textureCoordinates;varying vec3 v_normalMC;varying vec3 v_normalEC;\n#ifdef APPLY_MATERIAL\nvarying float v_height;varying float v_slope;varying float v_aspect;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE) || defined(UNDERGROUND_COLOR) || defined(TRANSLUCENT)\nvarying float v_distance;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE)\nvarying vec3 v_fogRayleighColor;varying vec3 v_fogMieColor;\n#endif\n#ifdef GROUND_ATMOSPHERE\nvarying vec3 v_rayleighColor;varying vec3 v_mieColor;\n#endif\n#if defined(UNDERGROUND_COLOR) || defined(TRANSLUCENT)\nfloat interpolateByDistance(vec4 nearFarScalar,float distance){float startDistance=nearFarScalar.x;float startValue=nearFarScalar.y;float endDistance=nearFarScalar.z;float endValue=nearFarScalar.w;float t=clamp((distance-startDistance)/(endDistance-startDistance),0.0,1.0);return mix(startValue,endValue,t);}\n#endif\n#if defined(UNDERGROUND_COLOR) || defined(TRANSLUCENT) || defined(APPLY_MATERIAL)\nvec4 alphaBlend(vec4 sourceColor,vec4 destinationColor){return sourceColor*vec4(sourceColor.aaa,1.0)+destinationColor*(1.0-sourceColor.a);}\n#endif\n#ifdef TRANSLUCENT\nbool inTranslucencyRectangle(){returnv_textureCoordinates.x>u_translucencyRectangle.x&&v_textureCoordinates.x<u_translucencyRectangle.z&&v_textureCoordinates.y>u_translucencyRectangle.y&&v_textureCoordinates.y<u_translucencyRectangle.w;}\n#endif\nvec4 sampleAndBlend(vec4 previousColor,sampler2D textureToSample,vec2 tileTextureCoordinates,vec4 textureCoordinateRectangle,vec4 textureCoordinateTranslationAndScale,float textureAlpha,float textureNightAlpha,float textureDayAlpha,float textureBrightness,float textureContrast,float textureHue,float textureSaturation,float textureOneOverGamma,float split,vec4 colorToAlpha,float nightBlend){vec2 alphaMultiplier=step(textureCoordinateRectangle.st,tileTextureCoordinates);textureAlpha=textureAlpha*alphaMultiplier.x*alphaMultiplier.y;alphaMultiplier=step(vec2(0.0),textureCoordinateRectangle.pq-tileTextureCoordinates);textureAlpha=textureAlpha*alphaMultiplier.x*alphaMultiplier.y;\n#if defined(APPLY_DAY_NIGHT_ALPHA) && defined(ENABLE_DAYNIGHT_SHADING)\ntextureAlpha*=mix(textureDayAlpha,textureNightAlpha,nightBlend);\n#endif\nvec2 translation=textureCoordinateTranslationAndScale.xy;vec2 scale=textureCoordinateTranslationAndScale.zw;vec2 textureCoordinates=tileTextureCoordinates*scale+translation;vec4 value=texture2D(textureToSample,textureCoordinates);vec3 color=value.rgb;float alpha=value.a;\n#ifdef APPLY_COLOR_TO_ALPHA\nvec3 colorDiff=abs(color.rgb-colorToAlpha.rgb);colorDiff.r=max(max(colorDiff.r,colorDiff.g),colorDiff.b);alpha=czm_branchFreeTernary(colorDiff.r<colorToAlpha.a,0.0,alpha);\n#endif\n#if !defined(APPLY_GAMMA)\nvec4 tempColor=czm_gammaCorrect(vec4(color,alpha));color=tempColor.rgb;alpha=tempColor.a;\n#else\ncolor=pow(color,vec3(textureOneOverGamma));\n#endif\n#ifdef APPLY_SPLIT\nfloat splitPosition=czm_imagerySplitPosition;if(split<0.0&&gl_FragCoord.x>splitPosition){alpha=0.0;}else if(split>0.0&&gl_FragCoord.x<splitPosition){alpha=0.0;}\n#endif\n#ifdef APPLY_BRIGHTNESS\ncolor=mix(vec3(0.0),color,textureBrightness);\n#endif\n#ifdef APPLY_CONTRAST\ncolor=mix(vec3(0.5),color,textureContrast);\n#endif\n#ifdef APPLY_HUE\ncolor=czm_hue(color,textureHue);\n#endif\n#ifdef APPLY_SATURATION\ncolor=czm_saturation(color,textureSaturation);\n#endif\nfloat sourceAlpha=alpha*textureAlpha;float outAlpha=mix(previousColor.a,1.0,sourceAlpha);outAlpha+=sign(outAlpha)-1.0;vec3 outColor=mix(previousColor.rgb*previousColor.a,color,sourceAlpha)/outAlpha;return vec4(outColor,max(outAlpha,0.0));}vec3 colorCorrect(vec3 rgb){\n#ifdef COLOR_CORRECT\nvec3 hsb=czm_RGBToHSB(rgb);hsb.x+=u_hsbShift.x;hsb.y=clamp(hsb.y+u_hsbShift.y,0.0,1.0);hsb.z=hsb.z>czm_epsilon7 ? hsb.z+u_hsbShift.z : 0.0;rgb=czm_HSBToRGB(hsb);\n#endif\nreturn rgb;}vec4 computeDayColor(vec4 initialColor,vec3 textureCoordinates,float nightBlend);vec4 computeWaterColor(vec3 positionEyeCoordinates,vec2 textureCoordinates,mat3 enuToEye,vec4 imageryColor,float specularMapValue,float fade);\n#ifdef GROUND_ATMOSPHERE\nvec3 computeGroundAtmosphereColor(vec3 fogColor,vec4 finalColor,vec3 atmosphereLightDirection,float cameraDist);\n#endif\nconst float fExposure=2.0;void main(){\n#ifdef TILE_LIMIT_RECTANGLE\nif(v_textureCoordinates.x<u_cartographicLimitRectangle.x||u_cartographicLimitRectangle.z<v_textureCoordinates.x||v_textureCoordinates.y<u_cartographicLimitRectangle.y||u_cartographicLimitRectangle.w<v_textureCoordinates.y){discard;}\n#endif\n#ifdef ENABLE_CLIPPING_PLANES\nfloat clipDistance=clip(gl_FragCoord,u_clippingPlanes,u_clippingPlanesMatrix);\n#endif\n#if defined(SHOW_REFLECTIVE_OCEAN) || defined(ENABLE_DAYNIGHT_SHADING) || defined(HDR)\nvec3 normalMC=czm_geodeticSurfaceNormal(v_positionMC,vec3(0.0),vec3(1.0));vec3 normalEC=czm_normal3D*normalMC;\n#endif\n#if defined(APPLY_DAY_NIGHT_ALPHA) && defined(ENABLE_DAYNIGHT_SHADING)\nfloat nightBlend=1.0-clamp(czm_getLambertDiffuse(czm_lightDirectionEC,normalEC)*5.0,0.0,1.0);\n#else\nfloat nightBlend=0.0;\n#endif\nvec4 color=computeDayColor(u_initialColor,clamp(v_textureCoordinates,0.0,1.0),nightBlend);\n#ifdef SHOW_TILE_BOUNDARIES\nif(v_textureCoordinates.x<(1.0/256.0)||v_textureCoordinates.x>(255.0/256.0)||v_textureCoordinates.y<(1.0/256.0)||v_textureCoordinates.y>(255.0/256.0)){color=vec4(1.0,0.0,0.0,1.0);}\n#endif\n#if defined(ENABLE_DAYNIGHT_SHADING) || defined(GROUND_ATMOSPHERE)\nfloat cameraDist;if(czm_sceneMode==czm_sceneMode2D){cameraDist=max(czm_frustumPlanes.x-czm_frustumPlanes.y,czm_frustumPlanes.w-czm_frustumPlanes.z)*0.5;}else if(czm_sceneMode==czm_sceneModeColumbusView){cameraDist=-czm_view[3].z;}else{cameraDist=length(czm_view[3]);}float fadeOutDist=u_lightingFadeDistance.x;float fadeInDist=u_lightingFadeDistance.y;if(czm_sceneMode!=czm_sceneMode3D){vec3 radii=czm_ellipsoidRadii;float maxRadii=max(radii.x,max(radii.y,radii.z));fadeOutDist-=maxRadii;fadeInDist-=maxRadii;}float fade=clamp((cameraDist-fadeOutDist)/(fadeInDist-fadeOutDist),0.0,1.0);\n#else\nfloat fade=0.0;\n#endif\n#ifdef SHOW_REFLECTIVE_OCEAN\nvec2 waterMaskTranslation=u_waterMaskTranslationAndScale.xy;vec2 waterMaskScale=u_waterMaskTranslationAndScale.zw;vec2 waterMaskTextureCoordinates=v_textureCoordinates.xy*waterMaskScale+waterMaskTranslation;waterMaskTextureCoordinates.y=1.0-waterMaskTextureCoordinates.y;float mask=texture2D(u_waterMask,waterMaskTextureCoordinates).r;if(mask>0.0){mat3 enuToEye=czm_eastNorthUpToEyeCoordinates(v_positionMC,normalEC);vec2 ellipsoidTextureCoordinates=czm_ellipsoidWgs84TextureCoordinates(normalMC);vec2 ellipsoidFlippedTextureCoordinates=czm_ellipsoidWgs84TextureCoordinates(normalMC.zyx);vec2 textureCoordinates=mix(ellipsoidTextureCoordinates,ellipsoidFlippedTextureCoordinates,czm_morphTime*smoothstep(0.9,0.95,normalMC.z));color=computeWaterColor(v_positionEC,textureCoordinates,enuToEye,color,mask,fade);}\n#endif\n#ifdef APPLY_MATERIAL\nczm_materialInput materialInput;materialInput.st=v_textureCoordinates.st;materialInput.normalEC=normalize(v_normalEC);materialInput.slope=v_slope;materialInput.height=v_height;materialInput.aspect=v_aspect;czm_material material=czm_getMaterial(materialInput);vec4 materialColor=vec4(material.diffuse,material.alpha);color=alphaBlend(materialColor,color);\n#endif\n#ifdef ENABLE_VERTEX_LIGHTING\nfloat diffuseIntensity=clamp(czm_getLambertDiffuse(czm_lightDirectionEC,normalize(v_normalEC))*0.9+0.3,0.0,1.0);vec4 finalColor=vec4(color.rgb*czm_lightColor*diffuseIntensity,color.a);\n#elif defined(ENABLE_DAYNIGHT_SHADING)\nfloat diffuseIntensity=clamp(czm_getLambertDiffuse(czm_lightDirectionEC,normalEC)*5.0+0.3,0.0,1.0);diffuseIntensity=mix(1.0,diffuseIntensity,fade);vec4 finalColor=vec4(color.rgb*czm_lightColor*diffuseIntensity,color.a);\n#else\nvec4 finalColor=color;\n#endif\n#ifdef ENABLE_CLIPPING_PLANES\nvec4 clippingPlanesEdgeColor=vec4(1.0);clippingPlanesEdgeColor.rgb=u_clippingPlanesEdgeStyle.rgb;float clippingPlanesEdgeWidth=u_clippingPlanesEdgeStyle.a;if(clipDistance<clippingPlanesEdgeWidth){finalColor=clippingPlanesEdgeColor;}\n#endif\n#ifdef HIGHLIGHT_FILL_TILE\nfinalColor=vec4(mix(finalColor.rgb,u_fillHighlightColor.rgb,u_fillHighlightColor.a),finalColor.a);\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE)\nvec3 fogColor=colorCorrect(v_fogMieColor)+finalColor.rgb*colorCorrect(v_fogRayleighColor);\n#ifndef HDR\nfogColor=vec3(1.0)-exp(-fExposure*fogColor);\n#endif\n#endif\n#if defined(DYNAMIC_ATMOSPHERE_LIGHTING_FROM_SUN)\nvec3 atmosphereLightDirection=czm_sunDirectionWC;\n#else\nvec3 atmosphereLightDirection=czm_lightDirectionWC;\n#endif\n#ifdef FOG\n#if defined(DYNAMIC_ATMOSPHERE_LIGHTING) && (defined(ENABLE_VERTEX_LIGHTING) || defined(ENABLE_DAYNIGHT_SHADING))\nfloat darken=clamp(dot(normalize(czm_viewerPositionWC),atmosphereLightDirection),u_minimumBrightness,1.0);fogColor*=darken;\n#endif\n#ifdef HDR\nconst float modifier=0.15;finalColor=vec4(czm_fog(v_distance,finalColor.rgb,fogColor,modifier),finalColor.a);\n#else\nfinalColor=vec4(czm_fog(v_distance,finalColor.rgb,fogColor),finalColor.a);\n#endif\n#endif\n#ifdef GROUND_ATMOSPHERE\nif(!czm_backFacing()){vec3 groundAtmosphereColor=computeGroundAtmosphereColor(fogColor,finalColor,atmosphereLightDirection,cameraDist);finalColor=vec4(mix(finalColor.rgb,groundAtmosphereColor,fade),finalColor.a);}\n#endif\n#ifdef UNDERGROUND_COLOR\nif(czm_backFacing()){float distanceFromEllipsoid=max(czm_eyeHeight,0.0);float distance=max(v_distance-distanceFromEllipsoid,0.0);float blendAmount=interpolateByDistance(u_undergroundColorAlphaByDistance,distance);vec4 undergroundColor=vec4(u_undergroundColor.rgb,u_undergroundColor.a*blendAmount);finalColor=alphaBlend(undergroundColor,finalColor);}\n#endif\n#ifdef TRANSLUCENT\nif(inTranslucencyRectangle()){vec4 alphaByDistance=gl_FrontFacing ? u_frontFaceAlphaByDistance : u_backFaceAlphaByDistance;finalColor.a*=interpolateByDistance(alphaByDistance,v_distance);}\n#endif\ngl_FragColor=finalColor;}\n#ifdef GROUND_ATMOSPHERE\nvec3 computeGroundAtmosphereColor(vec3 fogColor,vec4 finalColor,vec3 atmosphereLightDirection,float cameraDist){\n#if defined(PER_FRAGMENT_GROUND_ATMOSPHERE) && defined(DYNAMIC_ATMOSPHERE_LIGHTING) && (defined(ENABLE_DAYNIGHT_SHADING) || defined(ENABLE_VERTEX_LIGHTING))\nfloat mpp=czm_metersPerPixel(vec4(0.0,0.0,-czm_currentFrustum.x,1.0),1.0);vec2 xy=gl_FragCoord.xy/czm_viewport.zw*2.0-vec2(1.0);xy*=czm_viewport.zw*mpp*0.5;vec3 direction=normalize(vec3(xy,-czm_currentFrustum.x));czm_ray ray=czm_ray(vec3(0.0),direction);vec3 ellipsoid_center=czm_view[3].xyz;czm_raySegment intersection=czm_rayEllipsoidIntersectionInterval(ray,ellipsoid_center,czm_ellipsoidInverseRadii);vec3 ellipsoidPosition=czm_pointAlongRay(ray,intersection.start);ellipsoidPosition=(czm_inverseView*vec4(ellipsoidPosition,1.0)).xyz;AtmosphereColor atmosColor=computeGroundAtmosphereFromSpace(ellipsoidPosition,true,atmosphereLightDirection);vec3 groundAtmosphereColor=colorCorrect(atmosColor.mie)+finalColor.rgb*colorCorrect(atmosColor.rayleigh);\n#ifndef HDR\ngroundAtmosphereColor=vec3(1.0)-exp(-fExposure*groundAtmosphereColor);\n#endif\nfloat fadeInDist=u_nightFadeDistance.x;float fadeOutDist=u_nightFadeDistance.y;float sunlitAtmosphereIntensity=clamp((cameraDist-fadeOutDist)/(fadeInDist-fadeOutDist),0.0,1.0);\n#ifdef HDR\nsunlitAtmosphereIntensity=max(sunlitAtmosphereIntensity*sunlitAtmosphereIntensity,0.03);\n#endif\ngroundAtmosphereColor=mix(groundAtmosphereColor,fogColor,sunlitAtmosphereIntensity);\n#else\nvec3 groundAtmosphereColor=fogColor;\n#endif\n#ifdef HDR\ngroundAtmosphereColor=czm_saturation(groundAtmosphereColor,1.6);\n#endif\nreturn groundAtmosphereColor;}\n#endif\n#ifdef SHOW_REFLECTIVE_OCEAN\nfloat waveFade(float edge0,float edge1,float x){float y=clamp((x-edge0)/(edge1-edge0),0.0,1.0);return pow(1.0-y,5.0);}float linearFade(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}const float oceanFrequencyLowAltitude=825000.0;const float oceanAnimationSpeedLowAltitude=0.004;const float oceanOneOverAmplitudeLowAltitude=1.0/2.0;const float oceanSpecularIntensity=0.5;const float oceanFrequencyHighAltitude=125000.0;const float oceanAnimationSpeedHighAltitude=0.008;const float oceanOneOverAmplitudeHighAltitude=1.0/2.0;vec4 computeWaterColor(vec3 positionEyeCoordinates,vec2 textureCoordinates,mat3 enuToEye,vec4 imageryColor,float maskValue,float fade){vec3 positionToEyeEC=-positionEyeCoordinates;float positionToEyeECLength=length(positionToEyeEC);vec3 normalizedPositionToEyeEC=normalize(normalize(positionToEyeEC));float waveIntensity=waveFade(70000.0,1000000.0,positionToEyeECLength);\n#ifdef SHOW_OCEAN_WAVES\nfloat time=czm_frameNumber*oceanAnimationSpeedHighAltitude;vec4 noise=czm_getWaterNoise(u_oceanNormalMap,textureCoordinates*oceanFrequencyHighAltitude,time,0.0);vec3 normalTangentSpaceHighAltitude=vec3(noise.xy,noise.z*oceanOneOverAmplitudeHighAltitude);time=czm_frameNumber*oceanAnimationSpeedLowAltitude;noise=czm_getWaterNoise(u_oceanNormalMap,textureCoordinates*oceanFrequencyLowAltitude,time,0.0);vec3 normalTangentSpaceLowAltitude=vec3(noise.xy,noise.z*oceanOneOverAmplitudeLowAltitude);float highAltitudeFade=linearFade(0.0,60000.0,positionToEyeECLength);float lowAltitudeFade=1.0-linearFade(20000.0,60000.0,positionToEyeECLength);vec3 normalTangentSpace=(highAltitudeFade*normalTangentSpaceHighAltitude)+(lowAltitudeFade*normalTangentSpaceLowAltitude);normalTangentSpace=normalize(normalTangentSpace);normalTangentSpace.xy*=waveIntensity;normalTangentSpace=normalize(normalTangentSpace);\n#else\nvec3 normalTangentSpace=vec3(0.0,0.0,1.0);\n#endif\nvec3 normalEC=enuToEye*normalTangentSpace;const vec3 waveHighlightColor=vec3(0.3,0.45,0.6);float diffuseIntensity=czm_getLambertDiffuse(czm_lightDirectionEC,normalEC)*maskValue;vec3 diffuseHighlight=waveHighlightColor*diffuseIntensity*(1.0-fade);\n#ifdef SHOW_OCEAN_WAVES\nfloat tsPerturbationRatio=normalTangentSpace.z;vec3 nonDiffuseHighlight=mix(waveHighlightColor*5.0*(1.0-tsPerturbationRatio),vec3(0.0),diffuseIntensity);\n#else\nvec3 nonDiffuseHighlight=vec3(0.0);\n#endif\nfloat specularIntensity=czm_getSpecular(czm_lightDirectionEC,normalizedPositionToEyeEC,normalEC,10.0);float surfaceReflectance=mix(0.0,mix(u_zoomedOutOceanSpecularIntensity,oceanSpecularIntensity,waveIntensity),maskValue);float specular=specularIntensity*surfaceReflectance;\n#ifdef HDR\nspecular*=1.4;float e=0.2;float d=3.3;float c=1.7;vec3 color=imageryColor.rgb+(c*(vec3(e)+imageryColor.rgb*d)*(diffuseHighlight+nonDiffuseHighlight+specular));\n#else\nvec3 color=imageryColor.rgb+diffuseHighlight+nonDiffuseHighlight+specular;\n#endif\nreturn vec4(color,imageryColor.a);}\n#endif\n",
    F0 = "#ifdef QUANTIZATION_BITS12\nattribute vec4 compressed0;attribute float compressed1;\n#else\nattribute vec4 position3DAndHeight;attribute vec4 textureCoordAndEncodedNormals;\n#endif\nuniform vec3 u_center3D;uniform mat4 u_modifiedModelView;uniform mat4 u_modifiedModelViewProjection;uniform vec4 u_tileRectangle;uniform vec2 u_southAndNorthLatitude;uniform vec2 u_southMercatorYAndOneOverHeight;varying vec3 v_positionMC;varying vec3 v_positionEC;varying vec3 v_textureCoordinates;varying vec3 v_normalMC;varying vec3 v_normalEC;\n#ifdef APPLY_MATERIAL\nvarying float v_slope;varying float v_aspect;varying float v_height;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE) || defined(UNDERGROUND_COLOR) || defined(TRANSLUCENT)\nvarying float v_distance;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE)\nvarying vec3 v_fogMieColor;varying vec3 v_fogRayleighColor;\n#endif\nvec4 getPosition(vec3 position,float height,vec2 textureCoordinates);float get2DYPositionFraction(vec2 textureCoordinates);vec4 getPosition3DMode(vec3 position,float height,vec2 textureCoordinates){return u_modifiedModelViewProjection*vec4(position,1.0);}float get2DMercatorYPositionFraction(vec2 textureCoordinates){const float maxTileWidth=0.003068;float positionFraction=textureCoordinates.y;float southLatitude=u_southAndNorthLatitude.x;float northLatitude=u_southAndNorthLatitude.y;if(northLatitude-southLatitude>maxTileWidth){float southMercatorY=u_southMercatorYAndOneOverHeight.x;float oneOverMercatorHeight=u_southMercatorYAndOneOverHeight.y;float currentLatitude=mix(southLatitude,northLatitude,textureCoordinates.y);currentLatitude=clamp(currentLatitude,-czm_webMercatorMaxLatitude,czm_webMercatorMaxLatitude);positionFraction=czm_latitudeToWebMercatorFraction(currentLatitude,southMercatorY,oneOverMercatorHeight);}return positionFraction;}float get2DGeographicYPositionFraction(vec2 textureCoordinates){return textureCoordinates.y;}vec4 getPositionPlanarEarth(vec3 position,float height,vec2 textureCoordinates){float yPositionFraction=get2DYPositionFraction(textureCoordinates);vec4 rtcPosition2D=vec4(height,mix(u_tileRectangle.st,u_tileRectangle.pq,vec2(textureCoordinates.x,yPositionFraction)),1.0);return u_modifiedModelViewProjection*rtcPosition2D;}vec4 getPosition2DMode(vec3 position,float height,vec2 textureCoordinates){return getPositionPlanarEarth(position,0.0,textureCoordinates);}vec4 getPositionColumbusViewMode(vec3 position,float height,vec2 textureCoordinates){return getPositionPlanarEarth(position,height,textureCoordinates);}vec4 getPositionMorphingMode(vec3 position,float height,vec2 textureCoordinates){vec3 position3DWC=position+u_center3D;float yPositionFraction=get2DYPositionFraction(textureCoordinates);vec4 position2DWC=vec4(height,mix(u_tileRectangle.st,u_tileRectangle.pq,vec2(textureCoordinates.x,yPositionFraction)),1.0);vec4 morphPosition=czm_columbusViewMorph(position2DWC,vec4(position3DWC,1.0),czm_morphTime);return czm_modelViewProjection*morphPosition;}\n#ifdef QUANTIZATION_BITS12\nuniform vec2 u_minMaxHeight;uniform mat4 u_scaleAndBias;\n#endif\nvoid main(){\n#ifdef QUANTIZATION_BITS12\nvec2 xy=czm_decompressTextureCoordinates(compressed0.x);vec2 zh=czm_decompressTextureCoordinates(compressed0.y);vec3 position=vec3(xy,zh.x);float height=zh.y;vec2 textureCoordinates=czm_decompressTextureCoordinates(compressed0.z);height=height*(u_minMaxHeight.y-u_minMaxHeight.x)+u_minMaxHeight.x;position=(u_scaleAndBias*vec4(position,1.0)).xyz;\n#if (defined(ENABLE_VERTEX_LIGHTING) || defined(GENERATE_POSITION_AND_NORMAL)) && defined(INCLUDE_WEB_MERCATOR_Y)\nfloat webMercatorT=czm_decompressTextureCoordinates(compressed0.w).x;float encodedNormal=compressed1;\n#elif defined(INCLUDE_WEB_MERCATOR_Y)\nfloat webMercatorT=czm_decompressTextureCoordinates(compressed0.w).x;float encodedNormal=0.0;\n#elif defined(ENABLE_VERTEX_LIGHTING) || defined(GENERATE_POSITION_AND_NORMAL)\nfloat webMercatorT=textureCoordinates.y;float encodedNormal=compressed0.w;\n#else\nfloat webMercatorT=textureCoordinates.y;float encodedNormal=0.0;\n#endif\n#else\nvec3 position=position3DAndHeight.xyz;float height=position3DAndHeight.w;vec2 textureCoordinates=textureCoordAndEncodedNormals.xy;\n#if (defined(ENABLE_VERTEX_LIGHTING) || defined(GENERATE_POSITION_AND_NORMAL) || defined(APPLY_MATERIAL)) && defined(INCLUDE_WEB_MERCATOR_Y)\nfloat webMercatorT=textureCoordAndEncodedNormals.z;float encodedNormal=textureCoordAndEncodedNormals.w;\n#elif defined(ENABLE_VERTEX_LIGHTING) || defined(GENERATE_POSITION_AND_NORMAL) || defined(APPLY_MATERIAL)\nfloat webMercatorT=textureCoordinates.y;float encodedNormal=textureCoordAndEncodedNormals.z;\n#elif defined(INCLUDE_WEB_MERCATOR_Y)\nfloat webMercatorT=textureCoordAndEncodedNormals.z;float encodedNormal=0.0;\n#else\nfloat webMercatorT=textureCoordinates.y;float encodedNormal=0.0;\n#endif\n#endif\nvec3 position3DWC=position+u_center3D;gl_Position=getPosition(position,height,textureCoordinates);v_textureCoordinates=vec3(textureCoordinates,webMercatorT);\n#if defined(ENABLE_VERTEX_LIGHTING) || defined(GENERATE_POSITION_AND_NORMAL) || defined(APPLY_MATERIAL)\nv_positionEC=(u_modifiedModelView*vec4(position,1.0)).xyz;v_positionMC=position3DWC;vec3 normalMC=czm_octDecode(encodedNormal);v_normalMC=normalMC;v_normalEC=czm_normal3D*v_normalMC;\n#elif defined(SHOW_REFLECTIVE_OCEAN) || defined(ENABLE_DAYNIGHT_SHADING) || defined(GENERATE_POSITION) || defined(HDR)\nv_positionEC=(u_modifiedModelView*vec4(position,1.0)).xyz;v_positionMC=position3DWC;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE)\nAtmosphereColor atmosFogColor=computeGroundAtmosphereFromSpace(position3DWC,false,vec3(0.0));v_fogMieColor=atmosFogColor.mie;v_fogRayleighColor=atmosFogColor.rayleigh;\n#endif\n#if defined(FOG) || defined(GROUND_ATMOSPHERE) || defined(UNDERGROUND_COLOR) || defined(TRANSLUCENT)\nv_distance=length((czm_modelView3D*vec4(position3DWC,1.0)).xyz);\n#endif\n#ifdef APPLY_MATERIAL\nfloat northPoleZ=czm_ellipsoidRadii.z;vec3 northPolePositionMC=vec3(0.0,0.0,northPoleZ);vec3 ellipsoidNormal=normalize(v_positionMC);vec3 vectorEastMC=normalize(cross(northPolePositionMC-v_positionMC,ellipsoidNormal));float dotProd=abs(dot(ellipsoidNormal,v_normalMC));v_slope=acos(dotProd);vec3 normalRejected=ellipsoidNormal*dotProd;vec3 normalProjected=v_normalMC-normalRejected;vec3 aspectVector=normalize(normalProjected);v_aspect=acos(dot(aspectVector,vectorEastMC));float determ=dot(cross(vectorEastMC,aspectVector),ellipsoidNormal);v_aspect=czm_branchFreeTernary(determ<0.0,2.0*czm_pi-v_aspect,v_aspect);v_height=height;\n#endif\n}";
const zs = E("ClippingPlaneCollection");
var B0 = new R;

function U0(e, t) {
    var r = e.unionClippingRegions,
        n = e.length,
        i = zs.useFloatTexture(t),
        a = zs.getTextureResolution(e, t, B0),
        o = a.x,
        s = a.y,
        h = i ? G0(o, s) : H0(o, s);
    return h += "\n", h += r ? z0(n) : V0(n), h
}

function z0(e) {
    var t = "float clip(vec4 fragCoord, sampler2D clippingPlanes, mat4 clippingPlanesMatrix)\n{\n    vec4 position = czm_windowToEyeCoordinates(fragCoord);\n    vec3 clipNormal = vec3(0.0);\n    vec3 clipPosition = vec3(0.0);\n    float clipAmount;\n    float pixelWidth = czm_metersPerPixel(position);\n    bool breakAndDiscard = false;\n    for (int i = 0; i < " + e + "; ++i)\n    {\n        vec4 clippingPlane = getClippingPlane(clippingPlanes, i, clippingPlanesMatrix);\n        clipNormal = clippingPlane.xyz;\n        clipPosition = -clippingPlane.w * clipNormal;\n        float amount = dot(clipNormal, (position.xyz - clipPosition)) / pixelWidth;\n        clipAmount = czm_branchFreeTernary(i == 0, amount, min(amount, clipAmount));\n        if (amount <= 0.0)\n        {\n           breakAndDiscard = true;\n           break;\n        }\n    }\n    if (breakAndDiscard) {\n        discard;\n    }\n    return clipAmount;\n}\n";
    return t
}

function V0(e) {
    var t = "float clip(vec4 fragCoord, sampler2D clippingPlanes, mat4 clippingPlanesMatrix)\n{\n    bool clipped = true;\n    vec4 position = czm_windowToEyeCoordinates(fragCoord);\n    vec3 clipNormal = vec3(0.0);\n    vec3 clipPosition = vec3(0.0);\n    float clipAmount = 0.0;\n    float pixelWidth = czm_metersPerPixel(position);\n    for (int i = 0; i < " + e + "; ++i)\n    {\n        vec4 clippingPlane = getClippingPlane(clippingPlanes, i, clippingPlanesMatrix);\n        clipNormal = clippingPlane.xyz;\n        clipPosition = -clippingPlane.w * clipNormal;\n        float amount = dot(clipNormal, (position.xyz - clipPosition)) / pixelWidth;\n        clipAmount = max(amount, clipAmount);\n        clipped = clipped && (amount <= 0.0);\n    }\n    if (clipped)\n    {\n        discard;\n    }\n    return clipAmount;\n}\n";
    return t
}

function G0(e, t) {
    var r = 1 / e,
        n = 1 / t,
        i = r + "";
    i.indexOf(".") === -1 && (i += ".0");
    var a = n + "";
    a.indexOf(".") === -1 && (a += ".0");
    var o = "vec4 getClippingPlane(highp sampler2D packedClippingPlanes, int clippingPlaneNumber, mat4 transform)\n{\n    int pixY = clippingPlaneNumber / " + e + ";\n    int pixX = clippingPlaneNumber - (pixY * " + e + ");\n    float u = (float(pixX) + 0.5) * " + i + ";\n    float v = (float(pixY) + 0.5) * " + a + ";\n    vec4 plane = texture2D(packedClippingPlanes, vec2(u, v));\n    return czm_transformPlane(plane, transform);\n}\n";
    return o
}

function H0(e, t) {
    var r = 1 / e,
        n = 1 / t,
        i = r + "";
    i.indexOf(".") === -1 && (i += ".0");
    var a = n + "";
    a.indexOf(".") === -1 && (a += ".0");
    var o = "vec4 getClippingPlane(highp sampler2D packedClippingPlanes, int clippingPlaneNumber, mat4 transform)\n{\n    int clippingPlaneStartIndex = clippingPlaneNumber * 2;\n    int pixY = clippingPlaneStartIndex / " + e + ";\n    int pixX = clippingPlaneStartIndex - (pixY * " + e + ");\n    float u = (float(pixX) + 0.5) * " + i + ";\n    float v = (float(pixY) + 0.5) * " + a + ";\n    vec4 oct32 = texture2D(packedClippingPlanes, vec2(u, v)) * 255.0;\n    vec2 oct = vec2(oct32.x * 256.0 + oct32.y, oct32.z * 256.0 + oct32.w);\n    vec4 plane;\n    plane.xyz = czm_octDecode(oct, 65535.0);\n    plane.w = czm_unpackFloat(texture2D(packedClippingPlanes, vec2(u + " + i + ", v)));\n    return czm_transformPlane(plane, transform);\n}\n";
    return o
}

function W0(e, t, r, n, i) {
    this.numberOfDayTextures = e, this.flags = t, this.material = r, this.shaderProgram = n, this.clippingShaderState = i
}

function Tu() {
    this.baseVertexShaderSource = void 0, this.baseFragmentShaderSource = void 0, this._shadersByTexturesFlags = [], this.material = void 0
}

function q0(e) {
    var t = "vec4 getPosition(vec3 position, float height, vec2 textureCoordinates) { return getPosition3DMode(position, height, textureCoordinates); }",
        r = "vec4 getPosition(vec3 position, float height, vec2 textureCoordinates) { return getPositionColumbusViewMode(position, height, textureCoordinates); }",
        n = "vec4 getPosition(vec3 position, float height, vec2 textureCoordinates) { return getPositionMorphingMode(position, height, textureCoordinates); }",
        i;
    switch (e) {
        case Q.SCENE3D:
            i = t;
            break;
        case Q.SCENE2D:
        case Q.COLUMBUS_VIEW:
            i = r;
            break;
        case Q.MORPHING:
            i = n;
            break
    }
    return i
}

function k0(e) {
    var t = "float get2DYPositionFraction(vec2 textureCoordinates) { return get2DGeographicYPositionFraction(textureCoordinates); }",
        r = "float get2DYPositionFraction(vec2 textureCoordinates) { return get2DMercatorYPositionFraction(textureCoordinates); }";
    return e ? r : t
}
Tu.prototype.getShaderProgram = function(e) {
    var t = e.frameState,
        r = e.surfaceTile,
        n = e.numberOfDayTextures,
        i = e.applyBrightness,
        a = e.applyContrast,
        o = e.applyHue,
        s = e.applySaturation,
        h = e.applyGamma,
        f = e.applyAlpha,
        l = e.applyDayNightAlpha,
        d = e.applySplit,
        m = e.showReflectiveOcean,
        _ = e.showOceanWaves,
        g = e.enableLighting,
        T = e.dynamicAtmosphereLighting,
        C = e.dynamicAtmosphereLightingFromSun,
        A = e.showGroundAtmosphere,
        S = e.perFragmentGroundAtmosphere,
        x = e.hasVertexNormals,
        I = e.useWebMercatorProjection,
        O = e.enableFog,
        F = e.enableClippingPlanes,
        b = e.clippingPlanes,
        N = e.clippedByBoundaries,
        D = e.hasImageryLayerCutout,
        V = e.colorCorrect,
        M = e.highlightFillTile,
        W = e.colorToAlpha,
        G = e.showUndergroundColor,
        U = e.translucent,
        q = 0,
        Y = "",
        j = r.renderedMesh,
        Z = j.encoding,
        le = Z.quantization;
    le === ir.BITS12 && (q = 1, Y = "QUANTIZATION_BITS12");
    var ne = 0,
        he = "";
    N && (ne = 1, he = "TILE_LIMIT_RECTANGLE");
    var De = 0,
        fe = "";
    D && (De = 1, fe = "APPLY_IMAGERY_CUTOUT");
    var at = t.mode,
        qe = at | i << 2 | a << 3 | o << 4 | s << 5 | h << 6 | f << 7 | m << 8 | _ << 9 | g << 10 | T << 11 | C << 12 | A << 13 | S << 14 | x << 15 | I << 16 | O << 17 | q << 18 | d << 19 | F << 20 | ne << 21 | De << 22 | V << 23 | M << 24 | W << 25 | G << 26 | U << 27 | l << 28,
        Fe = 0;
    c(b) && b.length > 0 && (Fe = F ? b.clippingPlanesState : 0);
    var Te = r.surfaceShader;
    if (c(Te) && Te.numberOfDayTextures === n && Te.flags === qe && Te.material === this.material && Te.clippingShaderState === Fe) return Te.shaderProgram;
    var rt = this._shadersByTexturesFlags[n];
    if (c(rt) || (rt = this._shadersByTexturesFlags[n] = []), Te = rt[qe], !c(Te) || Te.material !== this.material || Te.clippingShaderState !== Fe) {
        var be = this.baseVertexShaderSource.clone(),
            te = this.baseFragmentShaderSource.clone();
        Fe !== 0 && te.sources.unshift(U0(b, t.context)), be.defines.push(Y), te.defines.push("TEXTURE_UNITS " + n, he, fe), i && te.defines.push("APPLY_BRIGHTNESS"), a && te.defines.push("APPLY_CONTRAST"), o && te.defines.push("APPLY_HUE"), s && te.defines.push("APPLY_SATURATION"), h && te.defines.push("APPLY_GAMMA"), f && te.defines.push("APPLY_ALPHA"), l && te.defines.push("APPLY_DAY_NIGHT_ALPHA"), m && (te.defines.push("SHOW_REFLECTIVE_OCEAN"), be.defines.push("SHOW_REFLECTIVE_OCEAN")), _ && te.defines.push("SHOW_OCEAN_WAVES"), W && te.defines.push("APPLY_COLOR_TO_ALPHA"), G && (be.defines.push("UNDERGROUND_COLOR"), te.defines.push("UNDERGROUND_COLOR")), U && (be.defines.push("TRANSLUCENT"), te.defines.push("TRANSLUCENT")), g && (x ? (be.defines.push("ENABLE_VERTEX_LIGHTING"), te.defines.push("ENABLE_VERTEX_LIGHTING")) : (be.defines.push("ENABLE_DAYNIGHT_SHADING"), te.defines.push("ENABLE_DAYNIGHT_SHADING"))), T && (te.defines.push("DYNAMIC_ATMOSPHERE_LIGHTING"), C && te.defines.push("DYNAMIC_ATMOSPHERE_LIGHTING_FROM_SUN")), A && (be.defines.push("GROUND_ATMOSPHERE"), te.defines.push("GROUND_ATMOSPHERE"), S && te.defines.push("PER_FRAGMENT_GROUND_ATMOSPHERE")), be.defines.push("INCLUDE_WEB_MERCATOR_Y"), te.defines.push("INCLUDE_WEB_MERCATOR_Y"), O && (be.defines.push("FOG"), te.defines.push("FOG")), d && te.defines.push("APPLY_SPLIT"), F && te.defines.push("ENABLE_CLIPPING_PLANES"), V && te.defines.push("COLOR_CORRECT"), M && te.defines.push("HIGHLIGHT_FILL_TILE");
        var vt = "    vec4 computeDayColor(vec4 initialColor, vec3 textureCoordinates, float nightBlend)\n    {\n        vec4 color = initialColor;\n";
        D && (vt += "        vec4 cutoutAndColorResult;\n        bool texelUnclipped;\n");
        for (var Ee = 0; Ee < n; ++Ee) D ? vt += "        cutoutAndColorResult = u_dayTextureCutoutRectangles[" + Ee + "];\n        texelUnclipped = v_textureCoordinates.x < cutoutAndColorResult.x || cutoutAndColorResult.z < v_textureCoordinates.x || v_textureCoordinates.y < cutoutAndColorResult.y || cutoutAndColorResult.w < v_textureCoordinates.y;\n        cutoutAndColorResult = sampleAndBlend(\n" : vt += "        color = sampleAndBlend(\n", vt += "            color,\n            u_dayTextures[" + Ee + "],\n            u_dayTextureUseWebMercatorT[" + Ee + "] ? textureCoordinates.xz : textureCoordinates.xy,\n            u_dayTextureTexCoordsRectangle[" + Ee + "],\n            u_dayTextureTranslationAndScale[" + Ee + "],\n            " + (f ? "u_dayTextureAlpha[" + Ee + "]" : "1.0") + ",\n            " + (l ? "u_dayTextureNightAlpha[" + Ee + "]" : "1.0") + ",\n" + (l ? "u_dayTextureDayAlpha[" + Ee + "]" : "1.0") + ",\n" + (i ? "u_dayTextureBrightness[" + Ee + "]" : "0.0") + ",\n            " + (a ? "u_dayTextureContrast[" + Ee + "]" : "0.0") + ",\n            " + (o ? "u_dayTextureHue[" + Ee + "]" : "0.0") + ",\n            " + (s ? "u_dayTextureSaturation[" + Ee + "]" : "0.0") + ",\n            " + (h ? "u_dayTextureOneOverGamma[" + Ee + "]" : "0.0") + ",\n            " + (d ? "u_dayTextureSplit[" + Ee + "]" : "0.0") + ",\n            " + (W ? "u_colorsToAlpha[" + Ee + "]" : "vec4(0.0)") + ",\n        nightBlend        );\n", D && (vt += "        color = czm_branchFreeTernary(texelUnclipped, cutoutAndColorResult, color);\n");
        vt += "        return color;\n    }", te.sources.push(vt), be.sources.push(q0(at)), be.sources.push(k0(I));
        var sr = Vt.fromCache({
            context: t.context,
            vertexShaderSource: be,
            fragmentShaderSource: te,
            attributeLocations: Z.getAttributeLocations()
        });
        Te = rt[qe] = new W0(n, qe, this.material, sr, Fe)
    }
    return r.surfaceShader = Te, Te.shaderProgram
};
Tu.prototype.destroy = function() {
    var e, t, r = this._shadersByTexturesFlags;
    for (var n in r)
        if (r.hasOwnProperty(n)) {
            var i = r[n];
            if (!c(i)) continue;
            for (e in i) i.hasOwnProperty(e) && (t = i[e], c(t) && t.shaderProgram.destroy())
        } return Je(this)
};
E("GeometryPipeline");
var Y0 = {
    NONE: -1,
    PARTIAL: 0,
    FULL: 1
};
const ht = Object.freeze(Y0);
var j0 = {
    NEVER: w.NEVER,
    LESS: w.LESS,
    EQUAL: w.EQUAL,
    LESS_OR_EQUAL: w.LEQUAL,
    GREATER: w.GREATER,
    NOT_EQUAL: w.NOTEQUAL,
    GREATER_OR_EQUAL: w.GEQUAL,
    ALWAYS: w.ALWAYS
};
const Sc = Object.freeze(j0);

function X0(e) {
    var t, r = e.name,
        n = e.message;
    c(r) && c(n) ? t = r + ": " + n : t = e.toString();
    var i = e.stack;
    return c(i) && (t += "\n" + i), t
}

function li(e, t, r, n, i, a, o) {
    this.provider = e, this.message = t, this.x = r, this.y = n, this.level = i, this.timesRetried = v(a, 0), this.retry = !1, this.error = o
}
li.handleError = function(e, t, r, n, i, a, o, s, h) {
    var f = e;
    return c(e) ? (f.provider = t, f.message = n, f.x = i, f.y = a, f.level = o, f.retry = !1, f.error = h, ++f.timesRetried) : f = new li(t, n, i, a, o, 0, h), r.numberOfListeners > 0 ? r.raiseEvent(f) : console.log('An error occurred in "' + t.constructor.name + '": ' + X0(n)), f.retry && c(s) && s(), f
};
li.handleSuccess = function(e) {
    c(e) && (e.timesRetried = -1)
};
var Z0 = {
    UNLOADED: 0,
    TRANSITIONING: 1,
    RECEIVED: 2,
    TEXTURE_LOADED: 3,
    READY: 4,
    FAILED: 5,
    INVALID: 6,
    PLACEHOLDER: 7
};
const Ce = Object.freeze(Z0);
var K0 = {
    START: 0,
    LOADING: 1,
    DONE: 2,
    FAILED: 3
};
const pr = Object.freeze(K0);
var Q0 = {
    FAILED: 0,
    UNLOADED: 1,
    RECEIVING: 2,
    RECEIVED: 3,
    TRANSFORMING: 4,
    TRANSFORMED: 5,
    READY: 6
};
const Ge = Object.freeze(Q0);

function Ye() {
    this.imagery = [], this.waterMaskTexture = void 0, this.waterMaskTranslationAndScale = new B(0, 0, 1, 1), this.terrainData = void 0, this.vertexArray = void 0, this.orientedBoundingBox = void 0, this.boundingVolumeSourceTile = void 0, this.tileBoundingRegion = void 0, this.occludeePointInScaledSpace = new u, this.terrainState = Ge.UNLOADED, this.mesh = void 0, this.fill = void 0, this.pickBoundingSphere = new ae, this.surfaceShader = void 0, this.isClipped = !0, this.clippedByBoundaries = !1
}
Object.defineProperties(Ye.prototype, {
    eligibleForUnloading: {
        get: function() {
            for (var e = this.terrainState, t = e === Ge.RECEIVING || e === Ge.TRANSFORMING, r = !t, n = this.imagery, i = 0, a = n.length; r && i < a; ++i) {
                var o = n[i];
                r = !c(o.loadingImagery) || o.loadingImagery.state !== Ce.TRANSITIONING
            }
            return r
        }
    },
    renderedMesh: {
        get: function() {
            if (c(this.vertexArray)) return this.mesh;
            if (c(this.fill)) return this.fill.mesh
        }
    }
});

function is(e, t, r, n, i, a) {
    if (e.decodePosition(n, i, a), c(t) && t !== Q.SCENE3D) {
        var o = r.ellipsoid,
            s = o.cartesianToCartographic(a);
        r.project(s, a), u.fromElements(a.z, a.x, a.y, a)
    }
    return a
}
var $0 = new u,
    J0 = new u,
    eg = new u;
Ye.prototype.pick = function(e, t, r, n, i) {
    var a = this.renderedMesh;
    if (c(a)) {
        for (var o = a.vertices, s = a.indices, h = a.encoding, f = s.length, l = Number.MAX_VALUE, d = 0; d < f; d += 3) {
            var m = s[d],
                _ = s[d + 1],
                g = s[d + 2],
                T = is(h, t, r, o, m, $0),
                C = is(h, t, r, o, _, J0),
                A = is(h, t, r, o, g, eg),
                S = At.rayTriangleParametric(e, T, C, A, n);
            c(S) && S < l && S >= 0 && (l = S)
        }
        return l !== Number.MAX_VALUE ? Ir.getPoint(e, l, i) : void 0
    }
};
Ye.prototype.freeResources = function() {
    c(this.waterMaskTexture) && (--this.waterMaskTexture.referenceCount, this.waterMaskTexture.referenceCount === 0 && this.waterMaskTexture.destroy(), this.waterMaskTexture = void 0), this.terrainData = void 0, this.terrainState = Ge.UNLOADED, this.mesh = void 0, this.fill = this.fill && this.fill.destroy();
    for (var e = this.imagery, t = 0, r = e.length; t < r; ++t) e[t].freeResources();
    this.imagery.length = 0, this.freeVertexArray()
};
Ye.prototype.freeVertexArray = function() {
    Ye._freeVertexArray(this.vertexArray), this.vertexArray = void 0, Ye._freeVertexArray(this.wireframeVertexArray), this.wireframeVertexArray = void 0
};
Ye.initialize = function(e, t, r) {
    var n = e.data;
    c(n) || (n = e.data = new Ye), e.state === pr.START && (tg(e, t, r), e.state = pr.LOADING)
};
Ye.processStateMachine = function(e, t, r, n, i, a) {
    Ye.initialize(e, r, n);
    var o = e.data;
    if (e.state === pr.LOADING && rg(e, t, r, n, i), !a) {
        var s = e.renderable;
        e.renderable = c(o.vertexArray);
        var h = o.terrainState === Ge.READY;
        e.upsampledFromParent = c(o.terrainData) && o.terrainData.wasCreatedByUpsampling();
        var f = o.processImagery(e, r, t);
        if (h && f) {
            var l = e._loadedCallbacks,
                d = {};
            for (var m in l) l.hasOwnProperty(m) && (l[m](e) || (d[m] = l[m]));
            e._loadedCallbacks = d, e.state = pr.DONE
        }
        s && (e.renderable = !0)
    }
};
Ye.prototype.processImagery = function(e, t, r, n) {
    var i = e.data,
        a = e.upsampledFromParent,
        o = !1,
        s = !0,
        h = i.imagery,
        f, l;
    for (f = 0, l = h.length; f < l; ++f) {
        var d = h[f];
        if (!c(d.loadingImagery)) {
            a = !1;
            continue
        }
        if (d.loadingImagery.state === Ce.PLACEHOLDER) {
            var m = d.loadingImagery.imageryLayer;
            if (m.imageryProvider.ready) {
                d.freeResources(), h.splice(f, 1), m._createTileImagerySkeletons(e, t, f), --f, l = h.length;
                continue
            } else a = !1
        }
        var _ = d.processStateMachine(e, r, n);
        s = s && _, o = o || _ || c(d.readyImagery), a = a && c(d.loadingImagery) && (d.loadingImagery.state === Ce.FAILED || d.loadingImagery.state === Ce.INVALID)
    }
    return e.upsampledFromParent = a, e.renderable = e.renderable && (o || s), s
};

function tg(e, t, r) {
    var n = t.getTileDataAvailable(e.x, e.y, e.level);
    if (!c(n) && c(e.parent)) {
        var i = e.parent,
            a = i.data;
        c(a) && c(a.terrainData) && (n = a.terrainData.isChildAvailable(i.x, i.y, e.x, e.y))
    }
    n === !1 && (e.data.terrainState = Ge.FAILED);
    for (var o = 0, s = r.length; o < s; ++o) {
        var h = r.get(o);
        h.show && h._createTileImagerySkeletons(e, t)
    }
}

function rg(e, t, r, n, i) {
    var a = e.data,
        o = e.parent;
    if (a.terrainState === Ge.FAILED && o !== void 0) {
        var s = o.data !== void 0 && o.data.terrainData !== void 0 && o.data.terrainData.canUpsample !== !1;
        s || Ye.processStateMachine(o, t, r, n, !0)
    }
    if (a.terrainState === Ge.FAILED && ng(a, e, t, r, e.x, e.y, e.level), a.terrainState === Ge.UNLOADED && ig(a, r, e.x, e.y, e.level), a.terrainState === Ge.RECEIVED && ag(a, t, r, e.x, e.y, e.level), a.terrainState === Ge.TRANSFORMED && og(a, t.context, r, e.x, e.y, e.level, i), a.terrainState >= Ge.RECEIVED && a.waterMaskTexture === void 0 && r.hasWaterMask) {
        var h = a.terrainData;
        if (h.waterMask !== void 0) ug(t.context, a);
        else {
            var f = a._findAncestorTileWithTerrainData(e);
            c(f) && c(f.data.waterMaskTexture) && (a.waterMaskTexture = f.data.waterMaskTexture, ++a.waterMaskTexture.referenceCount, a._computeWaterMaskTranslationAndScale(e, f, a.waterMaskTranslationAndScale))
        }
    }
}

function ng(e, t, r, n, i, a, o) {
    var s = t.parent;
    if (!s) {
        t.state = pr.FAILED;
        return
    }
    var h = s.data.terrainData,
        f = s.x,
        l = s.y,
        d = s.level;
    if (c(h)) {
        var m = h.upsample(n.tilingScheme, f, l, d, i, a, o);
        c(m) && (e.terrainState = Ge.RECEIVING, ge(m, function(_) {
            e.terrainData = _, e.terrainState = Ge.RECEIVED
        }, function() {
            e.terrainState = Ge.FAILED
        }))
    }
}

function ig(e, t, r, n, i) {
    function a(h) {
        e.terrainData = h, e.terrainState = Ge.RECEIVED, e.request = void 0
    }

    function o() {
        if (e.request.state === it.CANCELLED) {
            e.terrainData = void 0, e.terrainState = Ge.UNLOADED, e.request = void 0;
            return
        }
        e.terrainState = Ge.FAILED, e.request = void 0;
        var h = "Failed to obtain terrain tile X: " + r + " Y: " + n + " Level: " + i + ".";
        t._requestError = li.handleError(t._requestError, t, t.errorEvent, h, r, n, i, s)
    }

    function s() {
        var h = new ci({
            throttle: !1,
            throttleByServer: !0,
            type: du.TERRAIN
        });
        e.request = h;
        var f = t.requestTileGeometry(r, n, i, h);
        c(f) ? (e.terrainState = Ge.RECEIVING, ge(f, a, o)) : (e.terrainState = Ge.UNLOADED, e.request = void 0)
    }
    s()
}

function ag(e, t, r, n, i, a) {
    var o = r.tilingScheme,
        s = e.terrainData,
        h = s.createMesh(o, n, i, a, t.terrainExaggeration);
    c(h) && (e.terrainState = Ge.TRANSFORMING, ge(h, function(f) {
        e.mesh = f, e.orientedBoundingBox = xe.clone(f.orientedBoundingBox, e.orientedBoundingBox), e.occludeePointInScaledSpace = u.clone(f.occludeePointInScaledSpace, e.occludeePointInScaledSpace), e.terrainState = Ge.TRANSFORMED
    }, function() {
        e.terrainState = Ge.FAILED
    }))
}
Ye._createVertexArrayForMesh = function(e, t) {
    var r = t.vertices,
        n = nt.createVertexBuffer({
            context: e,
            typedArray: r,
            usage: nn.STATIC_DRAW
        }),
        i = t.encoding.getAttributes(n),
        a = t.indices.indexBuffers || {},
        o = a[e.id];
    if (!c(o) || o.isDestroyed()) {
        var s = t.indices;
        o = nt.createIndexBuffer({
            context: e,
            typedArray: s,
            usage: nn.STATIC_DRAW,
            indexDatatype: si.fromSizeInBytes(s.BYTES_PER_ELEMENT)
        }), o.vertexArrayDestroyable = !1, o.referenceCount = 1, a[e.id] = o, t.indices.indexBuffers = a
    } else ++o.referenceCount;
    return new ar({
        context: e,
        attributes: i,
        indexBuffer: o
    })
};
Ye._freeVertexArray = function(e) {
    if (c(e)) {
        var t = e.indexBuffer;
        e.destroy(), c(t) && !t.isDestroyed() && c(t.referenceCount) && (--t.referenceCount, t.referenceCount === 0 && t.destroy())
    }
};

function og(e, t, r, n, i, a, o) {
    e.vertexArray = Ye._createVertexArrayForMesh(t, e.mesh), e.terrainState = Ge.READY, e.fill = e.fill && e.fill.destroy(o)
}

function sg(e) {
    var t = e.cache.tile_waterMaskData;
    if (!c(t)) {
        var r = Ze.create({
            context: e,
            pixelFormat: je.LUMINANCE,
            pixelDatatype: Me.UNSIGNED_BYTE,
            source: {
                arrayBufferView: new Uint8Array([255]),
                width: 1,
                height: 1
            }
        });
        r.referenceCount = 1;
        var n = new yt({
            wrapS: mr.CLAMP_TO_EDGE,
            wrapT: mr.CLAMP_TO_EDGE,
            minificationFilter: Yt.LINEAR,
            magnificationFilter: vn.LINEAR
        });
        t = {
            allWaterTexture: r,
            sampler: n,
            destroy: function() {
                this.allWaterTexture.destroy()
            }
        }, e.cache.tile_waterMaskData = t
    }
    return t
}

function ug(e, t) {
    var r = t.terrainData.waterMask,
        n = sg(e),
        i, a = r.length;
    if (a === 1)
        if (r[0] !== 0) i = n.allWaterTexture;
        else return;
    else {
        var o = Math.sqrt(a);
        i = Ze.create({
            context: e,
            pixelFormat: je.LUMINANCE,
            pixelDatatype: Me.UNSIGNED_BYTE,
            source: {
                width: o,
                height: o,
                arrayBufferView: r
            },
            sampler: n.sampler,
            flipY: !1
        }), i.referenceCount = 0
    }++i.referenceCount, t.waterMaskTexture = i, B.fromElements(0, 0, 1, 1, t.waterMaskTranslationAndScale)
}
Ye.prototype._findAncestorTileWithTerrainData = function(e) {
    for (var t = e.parent; c(t) && (!c(t.data) || !c(t.data.terrainData) || t.data.terrainData.wasCreatedByUpsampling());) t = t.parent;
    return t
};
Ye.prototype._computeWaterMaskTranslationAndScale = function(e, t, r) {
    var n = t.rectangle,
        i = e.rectangle,
        a = i.width,
        o = i.height,
        s = a / n.width,
        h = o / n.height;
    return r.x = s * (i.west - n.west) / a, r.y = h * (i.south - n.south) / o, r.z = s, r.w = h, r
};

function ol(e) {
    e = v(e, v.EMPTY_OBJECT), this.vertexArray = e.vertexArray, this.fragmentShaderSource = e.fragmentShaderSource, this.shaderProgram = e.shaderProgram, this.uniformMap = e.uniformMap, this.outputTexture = e.outputTexture, this.preExecute = e.preExecute, this.postExecute = e.postExecute, this.canceled = e.canceled, this.persists = v(e.persists, !1), this.pass = ue.COMPUTE, this.owner = e.owner
}
ol.prototype.execute = function(e) {
    e.execute(this)
};
var cg = "uniform sampler2D u_texture;varying vec2 v_textureCoordinates;void main(){gl_FragColor=texture2D(u_texture,v_textureCoordinates);}",
    hg = "attribute vec4 position;attribute float webMercatorT;uniform vec2 u_textureDimensions;varying vec2 v_textureCoordinates;void main(){v_textureCoordinates=vec2(position.x,webMercatorT);gl_Position=czm_viewportOrthographic*(position*vec4(u_textureDimensions,1.0,1.0));}";

function Bn(e, t, r, n, i) {
    if (this.imageryLayer = e, this.x = t, this.y = r, this.level = n, this.request = void 0, n !== 0) {
        var a = t / 2 | 0,
            o = r / 2 | 0,
            s = n - 1;
        this.parent = e.getImageryFromCache(a, o, s)
    }
    if (this.state = Ce.UNLOADED, this.imageUrl = void 0, this.image = void 0, this.texture = void 0, this.textureWebMercator = void 0, this.credits = void 0, this.referenceCount = 0, !c(i) && e.imageryProvider.ready) {
        var h = e.imageryProvider.tilingScheme;
        i = h.tileXYToRectangle(t, r, n)
    }
    this.rectangle = i
}
Bn.createPlaceholder = function(e) {
    var t = new Bn(e, 0, 0, 0);
    return t.addReference(), t.state = Ce.PLACEHOLDER, t
};
Bn.prototype.addReference = function() {
    ++this.referenceCount
};
Bn.prototype.releaseReference = function() {
    return --this.referenceCount, this.referenceCount === 0 ? (this.imageryLayer.removeImageryFromCache(this), c(this.parent) && this.parent.releaseReference(), c(this.image) && c(this.image.destroy) && this.image.destroy(), c(this.texture) && this.texture.destroy(), c(this.textureWebMercator) && this.texture !== this.textureWebMercator && this.textureWebMercator.destroy(), Je(this), 0) : this.referenceCount
};
Bn.prototype.processStateMachine = function(e, t, r) {
    this.state === Ce.UNLOADED && !r && (this.state = Ce.TRANSITIONING, this.imageryLayer._requestImagery(this)), this.state === Ce.RECEIVED && (this.state = Ce.TRANSITIONING, this.imageryLayer._createTexture(e.context, this));
    var n = this.state === Ce.READY && t && !this.texture;
    (this.state === Ce.TEXTURE_LOADED || n) && (this.state = Ce.TRANSITIONING, this.imageryLayer._reprojectTexture(e, this, t))
};
var fg = {
    LEFT: -1,
    NONE: 0,
    RIGHT: 1
};
const lg = Object.freeze(fg);

function To(e, t, r) {
    this.readyImagery = void 0, this.loadingImagery = e, this.textureCoordinateRectangle = t, this.textureTranslationAndScale = void 0, this.useWebMercatorT = r
}
To.prototype.freeResources = function() {
    c(this.readyImagery) && this.readyImagery.releaseReference(), c(this.loadingImagery) && this.loadingImagery.releaseReference()
};
To.prototype.processStateMachine = function(e, t, r) {
    var n = this.loadingImagery,
        i = n.imageryLayer;
    if (n.processStateMachine(t, !this.useWebMercatorT, r), n.state === Ce.READY) return c(this.readyImagery) && this.readyImagery.releaseReference(), this.readyImagery = this.loadingImagery, this.loadingImagery = void 0, this.textureTranslationAndScale = i._calculateTextureTranslationAndScale(e, this), !0;
    for (var a = n.parent, o; c(a) && (a.state !== Ce.READY || !this.useWebMercatorT && !c(a.texture));) a.state !== Ce.FAILED && a.state !== Ce.INVALID && (o = o || a), a = a.parent;
    return this.readyImagery !== a && (c(this.readyImagery) && this.readyImagery.releaseReference(), this.readyImagery = a, c(a) && (a.addReference(), this.textureTranslationAndScale = i._calculateTextureTranslationAndScale(e, this))), n.state === Ce.FAILED || n.state === Ce.INVALID ? c(o) ? (o.processStateMachine(t, !this.useWebMercatorT, r), !1) : !0 : !1
};

function _e(e, t) {
    this._imageryProvider = e, t = v(t, v.EMPTY_OBJECT), this.alpha = v(t.alpha, v(e.defaultAlpha, 1)), this.nightAlpha = v(t.nightAlpha, v(e.defaultNightAlpha, 1)), this.dayAlpha = v(t.dayAlpha, v(e.defaultDayAlpha, 1)), this.brightness = v(t.brightness, v(e.defaultBrightness, _e.DEFAULT_BRIGHTNESS)), this.contrast = v(t.contrast, v(e.defaultContrast, _e.DEFAULT_CONTRAST)), this.hue = v(t.hue, v(e.defaultHue, _e.DEFAULT_HUE)), this.saturation = v(t.saturation, v(e.defaultSaturation, _e.DEFAULT_SATURATION)), this.gamma = v(t.gamma, v(e.defaultGamma, _e.DEFAULT_GAMMA)), this.splitDirection = v(t.splitDirection, v(e.defaultSplit, _e.DEFAULT_SPLIT)), this.minificationFilter = v(t.minificationFilter, v(e.defaultMinificationFilter, _e.DEFAULT_MINIFICATION_FILTER)), this.magnificationFilter = v(t.magnificationFilter, v(e.defaultMagnificationFilter, _e.DEFAULT_MAGNIFICATION_FILTER)), this.show = v(t.show, !0), this._minimumTerrainLevel = t.minimumTerrainLevel, this._maximumTerrainLevel = t.maximumTerrainLevel, this._rectangle = v(t.rectangle, L.MAX_VALUE), this._maximumAnisotropy = t.maximumAnisotropy, this._imageryCache = {}, this._skeletonPlaceholder = new To(Bn.createPlaceholder(this)), this._show = !0, this._layerIndex = -1, this._isBaseLayer = !1, this._requestImageError = void 0, this._reprojectComputeCommands = [], this.cutoutRectangle = t.cutoutRectangle, this.colorToAlpha = t.colorToAlpha, this.colorToAlphaThreshold = v(t.colorToAlphaThreshold, _e.DEFAULT_APPLY_COLOR_TO_ALPHA_THRESHOLD)
}
Object.defineProperties(_e.prototype, {
    imageryProvider: {
        get: function() {
            return this._imageryProvider
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    }
});
_e.DEFAULT_BRIGHTNESS = 1;
_e.DEFAULT_CONTRAST = 1;
_e.DEFAULT_HUE = 0;
_e.DEFAULT_SATURATION = 1;
_e.DEFAULT_GAMMA = 1;
_e.DEFAULT_SPLIT = lg.NONE;
_e.DEFAULT_MINIFICATION_FILTER = Yt.LINEAR;
_e.DEFAULT_MAGNIFICATION_FILTER = vn.LINEAR;
_e.DEFAULT_APPLY_COLOR_TO_ALPHA_THRESHOLD = .004;
_e.prototype.isBaseLayer = function() {
    return this._isBaseLayer
};
_e.prototype.isDestroyed = function() {
    return !1
};
_e.prototype.destroy = function() {
    return Je(this)
};
var sl = new L,
    Ic = new L,
    as = new L,
    ul = new L;
_e.prototype.getViewableRectangle = function() {
    var e = this._imageryProvider,
        t = this._rectangle;
    return e.readyPromise.then(function() {
        return L.intersection(e.rectangle, t)
    })
};
_e.prototype._createTileImagerySkeletons = function(e, t, r) {
    var n = e.data;
    if (c(this._minimumTerrainLevel) && e.level < this._minimumTerrainLevel || c(this._maximumTerrainLevel) && e.level > this._maximumTerrainLevel) return !1;
    var i = this._imageryProvider;
    if (c(r) || (r = n.imagery.length), !i.ready) return this._skeletonPlaceholder.loadingImagery.addReference(), n.imagery.splice(r, 0, this._skeletonPlaceholder), !0;
    var a = i.tilingScheme.projection instanceof Ve && e.rectangle.north < Ve.MaximumLatitude && e.rectangle.south > -Ve.MaximumLatitude,
        o = L.intersection(i.rectangle, this._rectangle, sl),
        s = L.intersection(e.rectangle, o, Ic);
    if (!c(s)) {
        if (!this.isBaseLayer()) return !1;
        var h = o,
            f = e.rectangle;
        s = Ic, f.south >= h.north ? s.north = s.south = h.north : f.north <= h.south ? s.north = s.south = h.south : (s.south = Math.max(f.south, h.south), s.north = Math.min(f.north, h.north)), f.west >= h.east ? s.west = s.east = h.east : f.east <= h.west ? s.west = s.east = h.west : (s.west = Math.max(f.west, h.west), s.east = Math.min(f.east, h.east))
    }
    var l = 0;
    s.south > 0 ? l = s.south : s.north < 0 && (l = s.north);
    var d = 1,
        m = d * t.getLevelMaximumGeometricError(e.level),
        _ = mg(this, m, l);
    _ = Math.max(0, _);
    var g = i.maximumLevel;
    if (_ > g && (_ = g), c(i.minimumLevel)) {
        var T = i.minimumLevel;
        _ < T && (_ = T)
    }
    var C = i.tilingScheme,
        A = C.positionToTileXY(L.northwest(s), _),
        S = C.positionToTileXY(L.southeast(s), _),
        x = e.rectangle.width / 512,
        I = e.rectangle.height / 512,
        O = C.tileXYToRectangle(A.x, A.y, _);
    Math.abs(O.south - e.rectangle.north) < I && A.y < S.y && ++A.y, Math.abs(O.east - e.rectangle.west) < x && A.x < S.x && ++A.x;
    var F = C.tileXYToRectangle(S.x, S.y, _);
    Math.abs(F.north - e.rectangle.south) < I && S.y > A.y && --S.y, Math.abs(F.west - e.rectangle.east) < x && S.x > A.x && --S.x;
    var b = L.clone(e.rectangle, ul),
        N = C.tileXYToRectangle(A.x, A.y, _),
        D = L.intersection(N, o, as),
        V;
    a ? (C.rectangleToNativeRectangle(b, b), C.rectangleToNativeRectangle(N, N), C.rectangleToNativeRectangle(D, D), C.rectangleToNativeRectangle(o, o), V = C.tileXYToNativeRectangle.bind(C), x = b.width / 512, I = b.height / 512) : V = C.tileXYToRectangle.bind(C);
    var M, W = 0,
        G = 1,
        U;
    !this.isBaseLayer() && Math.abs(D.west - b.west) >= x && (W = Math.min(1, (D.west - b.west) / b.width)), !this.isBaseLayer() && Math.abs(D.north - b.north) >= I && (G = Math.max(0, (D.north - b.south) / b.height));
    for (var q = G, Y = A.x; Y <= S.x; Y++)
        if (M = W, N = V(Y, A.y, _), D = L.simpleIntersection(N, o, as), !!c(D)) {
            W = Math.min(1, (D.east - b.west) / b.width), Y === S.x && (this.isBaseLayer() || Math.abs(D.east - b.east) < x) && (W = 1), G = q;
            for (var j = A.y; j <= S.y; j++)
                if (U = G, N = V(Y, j, _), D = L.simpleIntersection(N, o, as), !!c(D)) {
                    G = Math.max(0, (D.south - b.south) / b.height), j === S.y && (this.isBaseLayer() || Math.abs(D.south - b.south) < I) && (G = 0);
                    var Z = new B(M, G, W, U),
                        le = this.getImageryFromCache(Y, j, _);
                    n.imagery.splice(r, 0, new To(le, Z, a)), ++r
                }
        } return !0
};
_e.prototype._calculateTextureTranslationAndScale = function(e, t) {
    var r = t.readyImagery.rectangle,
        n = e.rectangle;
    if (t.useWebMercatorT) {
        var i = t.readyImagery.imageryLayer.imageryProvider.tilingScheme;
        r = i.rectangleToNativeRectangle(r, sl), n = i.rectangleToNativeRectangle(n, ul)
    }
    var a = n.width,
        o = n.height,
        s = a / r.width,
        h = o / r.height;
    return new B(s * (n.west - r.west) / a, h * (n.south - r.south) / o, s, h)
};
_e.prototype._requestImagery = function(e) {
    var t = this._imageryProvider,
        r = this;

    function n(o) {
        if (!c(o)) return i();
        e.image = o, e.state = Ce.RECEIVED, e.request = void 0, li.handleSuccess(r._requestImageError)
    }

    function i(o) {
        if (e.request.state === it.CANCELLED) {
            e.state = Ce.UNLOADED, e.request = void 0;
            return
        }
        e.state = Ce.FAILED, e.request = void 0;
        var s = "Failed to obtain image tile X: " + e.x + " Y: " + e.y + " Level: " + e.level + ".";
        r._requestImageError = li.handleError(r._requestImageError, t, t.errorEvent, s, e.x, e.y, e.level, a, o)
    }

    function a() {
        var o = new ci({
            throttle: !1,
            throttleByServer: !0,
            type: du.IMAGERY
        });
        e.request = o, e.state = Ce.TRANSITIONING;
        var s = t.requestImage(e.x, e.y, e.level, o);
        if (!c(s)) {
            e.state = Ce.UNLOADED, e.request = void 0;
            return
        }
        c(t.getTileCredits) && (e.credits = t.getTileCredits(e.x, e.y, e.level)), ge(s, n, i)
    }
    a()
};
_e.prototype._createTextureWebGL = function(e, t) {
    var r = new yt({
            minificationFilter: this.minificationFilter,
            magnificationFilter: this.magnificationFilter
        }),
        n = t.image;
    return c(n.internalFormat) ? new Ze({
        context: e,
        pixelFormat: n.internalFormat,
        width: n.width,
        height: n.height,
        source: {
            arrayBufferView: n.bufferView
        },
        sampler: r
    }) : new Ze({
        context: e,
        source: n,
        pixelFormat: this._imageryProvider.hasAlphaChannel ? je.RGBA : je.RGB,
        sampler: r
    })
};
_e.prototype._createTexture = function(e, t) {
    var r = this._imageryProvider,
        n = t.image;
    if (c(r.tileDiscardPolicy)) {
        var i = r.tileDiscardPolicy;
        if (c(i)) {
            if (!i.isReady()) {
                t.state = Ce.RECEIVED;
                return
            }
            if (i.shouldDiscardImage(n)) {
                t.state = Ce.INVALID;
                return
            }
        }
    }
    var a = this._createTextureWebGL(e, t);
    r.tilingScheme.projection instanceof Ve ? t.textureWebMercator = a : t.texture = a, t.image = void 0, t.state = Ce.TEXTURE_LOADED
};

function Oc(e, t, r) {
    return e + ":" + t + ":" + r
}
_e.prototype._finalizeReprojectTexture = function(e, t) {
    var r = this.minificationFilter,
        n = this.magnificationFilter,
        i = r === Yt.LINEAR && n === vn.LINEAR;
    if (i && !je.isCompressedFormat(t.pixelFormat) && p.isPowerOfTwo(t.width) && p.isPowerOfTwo(t.height)) {
        r = Yt.LINEAR_MIPMAP_LINEAR;
        var a = oe.maximumTextureFilterAnisotropy,
            o = Math.min(a, v(this._maximumAnisotropy, a)),
            s = Oc(r, n, o),
            h = e.cache.imageryLayerMipmapSamplers;
        c(h) || (h = {}, e.cache.imageryLayerMipmapSamplers = h);
        var f = h[s];
        c(f) || (f = h[s] = new yt({
            wrapS: mr.CLAMP_TO_EDGE,
            wrapT: mr.CLAMP_TO_EDGE,
            minificationFilter: r,
            magnificationFilter: n,
            maximumAnisotropy: o
        })), t.generateMipmap(hu.NICEST), t.sampler = f
    } else {
        var l = Oc(r, n, 0),
            d = e.cache.imageryLayerNonMipmapSamplers;
        c(d) || (d = {}, e.cache.imageryLayerNonMipmapSamplers = d);
        var m = d[l];
        c(m) || (m = d[l] = new yt({
            wrapS: mr.CLAMP_TO_EDGE,
            wrapT: mr.CLAMP_TO_EDGE,
            minificationFilter: r,
            magnificationFilter: n
        })), t.sampler = m
    }
};
_e.prototype._reprojectTexture = function(e, t, r) {
    var n = t.textureWebMercator || t.texture,
        i = t.rectangle,
        a = e.context;
    if (r = v(r, !0), r && !(this._imageryProvider.tilingScheme.projection instanceof jr) && i.width / n.width > 1e-5) {
        var o = this;
        t.addReference();
        var s = new ol({
            persists: !0,
            owner: this,
            preExecute: function(h) {
                _g(h, a, n, t.rectangle)
            },
            postExecute: function(h) {
                t.texture = h, o._finalizeReprojectTexture(a, h), t.state = Ce.READY, t.releaseReference()
            },
            canceled: function() {
                t.state = Ce.TEXTURE_LOADED, t.releaseReference()
            }
        });
        this._reprojectComputeCommands.push(s)
    } else r && (t.texture = n), this._finalizeReprojectTexture(a, n), t.state = Ce.READY
};
_e.prototype.queueReprojectionCommands = function(e) {
    for (var t = this._reprojectComputeCommands, r = t.length, n = 0; n < r; ++n) e.commandList.push(t[n]);
    t.length = 0
};
_e.prototype.cancelReprojections = function() {
    this._reprojectComputeCommands.forEach(function(e) {
        c(e.canceled) && e.canceled()
    }), this._reprojectComputeCommands.length = 0
};
_e.prototype.getImageryFromCache = function(e, t, r, n) {
    var i = cl(e, t, r),
        a = this._imageryCache[i];
    return c(a) || (a = new Bn(this, e, t, r, n), this._imageryCache[i] = a), a.addReference(), a
};
_e.prototype.removeImageryFromCache = function(e) {
    var t = cl(e.x, e.y, e.level);
    delete this._imageryCache[t]
};

function cl(e, t, r) {
    return JSON.stringify([e, t, r])
}
var wa = {
        u_textureDimensions: function() {
            return this.textureDimensions
        },
        u_texture: function() {
            return this.texture
        },
        textureDimensions: new R,
        texture: void 0
    },
    dg = an.supportsTypedArrays() ? new Float32Array(2 * 64) : void 0;

function _g(e, t, r, n) {
    var i = t.cache.imageryLayer_reproject;
    if (!c(i)) {
        i = t.cache.imageryLayer_reproject = {
            vertexArray: void 0,
            shaderProgram: void 0,
            sampler: void 0,
            destroy: function() {
                c(this.framebuffer) && this.framebuffer.destroy(), c(this.vertexArray) && this.vertexArray.destroy(), c(this.shaderProgram) && this.shaderProgram.destroy()
            }
        };
        for (var a = new Float32Array(2 * 64 * 2), o = 0, s = 0; s < 64; ++s) {
            var h = s / 63;
            a[o++] = 0, a[o++] = h, a[o++] = 1, a[o++] = h
        }
        var f = {
                position: 0,
                webMercatorT: 1
            },
            l = tt.getRegularGridIndices(2, 64),
            d = nt.createIndexBuffer({
                context: t,
                typedArray: l,
                usage: nn.STATIC_DRAW,
                indexDatatype: si.UNSIGNED_SHORT
            });
        i.vertexArray = new ar({
            context: t,
            attributes: [{
                index: f.position,
                vertexBuffer: nt.createVertexBuffer({
                    context: t,
                    typedArray: a,
                    usage: nn.STATIC_DRAW
                }),
                componentsPerAttribute: 2
            }, {
                index: f.webMercatorT,
                vertexBuffer: nt.createVertexBuffer({
                    context: t,
                    sizeInBytes: 64 * 2 * 4,
                    usage: nn.STREAM_DRAW
                }),
                componentsPerAttribute: 1
            }],
            indexBuffer: d
        });
        var m = new Ie({
            sources: [hg]
        });
        i.shaderProgram = Vt.fromCache({
            context: t,
            vertexShaderSource: m,
            fragmentShaderSource: cg,
            attributeLocations: f
        }), i.sampler = new yt({
            wrapS: mr.CLAMP_TO_EDGE,
            wrapT: mr.CLAMP_TO_EDGE,
            minificationFilter: Yt.LINEAR,
            magnificationFilter: vn.LINEAR
        })
    }
    r.sampler = i.sampler;
    var _ = r.width,
        g = r.height;
    wa.textureDimensions.x = _, wa.textureDimensions.y = g, wa.texture = r;
    var T = Math.sin(n.south),
        C = .5 * Math.log((1 + T) / (1 - T));
    T = Math.sin(n.north);
    var A = .5 * Math.log((1 + T) / (1 - T)),
        S = 1 / (A - C),
        x = new Ze({
            context: t,
            width: _,
            height: g,
            pixelFormat: r.pixelFormat,
            pixelDatatype: r.pixelDatatype,
            preMultiplyAlpha: r.preMultiplyAlpha
        });
    p.isPowerOfTwo(_) && p.isPowerOfTwo(g) && x.generateMipmap(hu.NICEST);
    for (var I = n.south, O = n.north, F = dg, b = 0, N = 0; N < 64; ++N) {
        var D = N / 63,
            V = p.lerp(I, O, D);
        T = Math.sin(V);
        var M = .5 * Math.log((1 + T) / (1 - T)),
            W = (M - C) * S;
        F[b++] = W, F[b++] = W
    }
    i.vertexArray.getAttribute(1).vertexBuffer.copyFromArrayView(F), e.shaderProgram = i.shaderProgram, e.outputTexture = x, e.uniformMap = wa, e.vertexArray = i.vertexArray
}

function mg(e, t, r) {
    var n = e._imageryProvider,
        i = n.tilingScheme,
        a = i.ellipsoid,
        o = e._imageryProvider.tilingScheme.projection instanceof jr ? 1 : Math.cos(r),
        s = i.rectangle,
        h = a.maximumRadius * s.width * o / (n.tileWidth * i.getNumberOfXTilesAtLevel(0)),
        f = h / t,
        l = Math.log(f) / Math.log(2),
        d = Math.round(l);
    return d | 0
}
var rr = {
    DISABLED: 0,
    ENABLED: 1,
    CAST_ONLY: 2,
    RECEIVE_ONLY: 3
};
rr.NUMBER_OF_SHADOW_MODES = 4;
rr.castShadows = function(e) {
    return e === rr.ENABLED || e === rr.CAST_ONLY
};
rr.receiveShadows = function(e) {
    return e === rr.ENABLED || e === rr.RECEIVE_ONLY
};
rr.fromCastReceive = function(e, t) {
    return e && t ? rr.ENABLED : e ? rr.CAST_ONLY : t ? rr.RECEIVE_ONLY : rr.DISABLED
};
const ao = Object.freeze(rr);

function vg(e, t, r) {
    for (var n = 0, i = e.length - 1, a, o; n <= i;) {
        if (a = ~~((n + i) / 2), o = r(e[a], t), o < 0) {
            n = a + 1;
            continue
        }
        if (o > 0) {
            i = a - 1;
            continue
        }
        return a
    }
    return ~(i + 1)
}

function En() {
    this._array = [], this._offset = 0, this._length = 0
}
Object.defineProperties(En.prototype, {
    length: {
        get: function() {
            return this._length
        }
    }
});
En.prototype.enqueue = function(e) {
    this._array.push(e), this._length++
};
En.prototype.dequeue = function() {
    if (this._length !== 0) {
        var e = this._array,
            t = this._offset,
            r = e[t];
        return e[t] = void 0, t++, t > 10 && t * 2 > e.length && (this._array = e.slice(t), t = 0), this._offset = t, this._length--, r
    }
};
En.prototype.peek = function() {
    if (this._length !== 0) return this._array[this._offset]
};
En.prototype.contains = function(e) {
    return this._array.indexOf(e) !== -1
};
En.prototype.clear = function() {
    this._array.length = this._offset = this._length = 0
};
En.prototype.sort = function(e) {
    this._offset > 0 && (this._array = this._array.slice(this._offset), this._offset = 0), this._array.sort(e)
};
var ie = {
        WEST: 0,
        NORTH: 1,
        EAST: 2,
        SOUTH: 3,
        NORTHWEST: 4,
        NORTHEAST: 5,
        SOUTHWEST: 6,
        SOUTHEAST: 7
    },
    me = {
        NONE: 0,
        CULLED: 1,
        RENDERED: 2,
        REFINED: 3,
        RENDERED_AND_KICKED: 6,
        REFINED_AND_KICKED: 7,
        CULLED_BUT_NEEDED: 9,
        wasKicked: function(e) {
            return e >= me.RENDERED_AND_KICKED
        },
        originalResult: function(e) {
            return e & 3
        },
        kick: function(e) {
            return e | 4
        }
    };

function pi(e) {
    this.tile = e, this.frameLastUpdated = void 0, this.westMeshes = [], this.westTiles = [], this.southMeshes = [], this.southTiles = [], this.eastMeshes = [], this.eastTiles = [], this.northMeshes = [], this.northTiles = [], this.southwestMesh = void 0, this.southwestTile = void 0, this.southeastMesh = void 0, this.southeastTile = void 0, this.northwestMesh = void 0, this.northwestTile = void 0, this.northeastMesh = void 0, this.northeastTile = void 0, this.changedThisFrame = !0, this.visitedFrame = void 0, this.enqueuedFrame = void 0, this.mesh = void 0, this.vertexArray = void 0, this.waterMaskTexture = void 0, this.waterMaskTranslationAndScale = new B
}
pi.prototype.update = function(e, t, r) {
    this.changedThisFrame && (hl(e, t, this.tile, r), this.changedThisFrame = !1)
};
pi.prototype.destroy = function(e) {
    c(this.vertexArray) && (c(e) ? e.push(this.vertexArray) : Ye._freeVertexArray(this.vertexArray, e), this.vertexArray = void 0), c(this.waterMaskTexture) && (--this.waterMaskTexture.referenceCount, this.waterMaskTexture.referenceCount === 0 && this.waterMaskTexture.destroy(), this.waterMaskTexture = void 0)
};
var pg = new En;
pi.updateFillTiles = function(e, t, r, n) {
    var i = e._quadtree,
        a = i._levelZeroTiles,
        o = i._lastSelectionFrameNumber,
        s = pg;
    s.clear();
    for (var h = 0; h < t.length; ++h) {
        var f = t[h];
        c(f.data.vertexArray) && s.enqueue(t[h])
    }
    for (var l = s.dequeue(); l !== void 0;) {
        var d = l.findTileToWest(a),
            m = l.findTileToSouth(a),
            _ = l.findTileToEast(a),
            g = l.findTileToNorth(a);
        st(e, r, l, d, o, ie.EAST, !1, s, n), st(e, r, l, m, o, ie.NORTH, !1, s, n), st(e, r, l, _, o, ie.WEST, !1, s, n), st(e, r, l, g, o, ie.SOUTH, !1, s, n);
        var T = d.findTileToNorth(a),
            C = d.findTileToSouth(a),
            A = _.findTileToNorth(a),
            S = _.findTileToSouth(a);
        st(e, r, l, T, o, ie.SOUTHEAST, !1, s, n), st(e, r, l, A, o, ie.SOUTHWEST, !1, s, n), st(e, r, l, C, o, ie.NORTHEAST, !1, s, n), st(e, r, l, S, o, ie.NORTHWEST, !1, s, n), l = s.dequeue()
    }
};

function st(e, t, r, n, i, a, o, s, h) {
    if (n !== void 0) {
        for (var f = n; f && (f._lastSelectionResultFrame !== i || me.wasKicked(f._lastSelectionResult) || me.originalResult(f._lastSelectionResult) === me.CULLED);) {
            if (o) return;
            var l = f.parent;
            if (a >= ie.NORTHWEST && l !== void 0) switch (a) {
                case ie.NORTHWEST:
                    f = f === l.northwestChild ? l : void 0;
                    break;
                case ie.NORTHEAST:
                    f = f === l.northeastChild ? l : void 0;
                    break;
                case ie.SOUTHWEST:
                    f = f === l.southwestChild ? l : void 0;
                    break;
                case ie.SOUTHEAST:
                    f = f === l.southeastChild ? l : void 0;
                    break
            } else f = l
        }
        if (f !== void 0) {
            if (f._lastSelectionResult === me.RENDERED) {
                if (c(f.data.vertexArray)) return;
                gg(e, t, r, f, a, i, s, h);
                return
            }
            if (me.originalResult(n._lastSelectionResult) !== me.CULLED) switch (a) {
                case ie.WEST:
                    st(e, t, r, n.northwestChild, i, a, !0, s, h), st(e, t, r, n.southwestChild, i, a, !0, s, h);
                    break;
                case ie.EAST:
                    st(e, t, r, n.southeastChild, i, a, !0, s, h), st(e, t, r, n.northeastChild, i, a, !0, s, h);
                    break;
                case ie.SOUTH:
                    st(e, t, r, n.southwestChild, i, a, !0, s, h), st(e, t, r, n.southeastChild, i, a, !0, s, h);
                    break;
                case ie.NORTH:
                    st(e, t, r, n.northeastChild, i, a, !0, s, h), st(e, t, r, n.northwestChild, i, a, !0, s, h);
                    break;
                case ie.NORTHWEST:
                    st(e, t, r, n.northwestChild, i, a, !0, s, h);
                    break;
                case ie.NORTHEAST:
                    st(e, t, r, n.northeastChild, i, a, !0, s, h);
                    break;
                case ie.SOUTHWEST:
                    st(e, t, r, n.southwestChild, i, a, !0, s, h);
                    break;
                case ie.SOUTHEAST:
                    st(e, t, r, n.southeastChild, i, a, !0, s, h);
                    break;
                default:
                    throw new ye("Invalid edge")
            }
        }
    }
}

function gg(e, t, r, n, i, a, o, s) {
    var h = n.data;
    if (h.fill === void 0) h.fill = new pi(n);
    else if (h.fill.visitedFrame === a) return;
    h.fill.enqueuedFrame !== a && (h.fill.enqueuedFrame = a, h.fill.changedThisFrame = !1, o.enqueue(n)), Tg(e, t, r, n, i, s)
}

function Tg(e, t, r, n, i, a) {
    var o = n.data.fill,
        s, h = r.data.fill;
    c(h) ? (h.visitedFrame = t.frameNumber, h.changedThisFrame && (hl(e, t, r, a), h.changedThisFrame = !1), s = r.data.fill.mesh) : s = r.data.mesh;
    var f, l;
    switch (i) {
        case ie.WEST:
            f = o.westMeshes, l = o.westTiles;
            break;
        case ie.SOUTH:
            f = o.southMeshes, l = o.southTiles;
            break;
        case ie.EAST:
            f = o.eastMeshes, l = o.eastTiles;
            break;
        case ie.NORTH:
            f = o.northMeshes, l = o.northTiles;
            break;
        case ie.NORTHWEST:
            o.changedThisFrame = o.changedThisFrame || o.northwestMesh !== s, o.northwestMesh = s, o.northwestTile = r;
            return;
        case ie.NORTHEAST:
            o.changedThisFrame = o.changedThisFrame || o.northeastMesh !== s, o.northeastMesh = s, o.northeastTile = r;
            return;
        case ie.SOUTHWEST:
            o.changedThisFrame = o.changedThisFrame || o.southwestMesh !== s, o.southwestMesh = s, o.southwestTile = r;
            return;
        case ie.SOUTHEAST:
            o.changedThisFrame = o.changedThisFrame || o.southeastMesh !== s, o.southeastMesh = s, o.southeastTile = r;
            return
    }
    if (r.level <= n.level) {
        o.changedThisFrame = o.changedThisFrame || f[0] !== s || f.length !== 1, f[0] = s, l[0] = r, f.length = 1, l.length = 1;
        return
    }
    var d, m, _, g, T = r.rectangle,
        C, A = n.rectangle;
    switch (i) {
        case ie.WEST:
            for (C = (A.north - A.south) * p.EPSILON5, d = 0; d < l.length && (_ = l[d], g = _.rectangle, !p.greaterThan(T.north, g.south, C)); ++d);
            for (m = d; m < l.length && (_ = l[m], g = _.rectangle, !p.greaterThanOrEquals(T.south, g.north, C)); ++m);
            break;
        case ie.SOUTH:
            for (C = (A.east - A.west) * p.EPSILON5, d = 0; d < l.length && (_ = l[d], g = _.rectangle, !p.lessThan(T.west, g.east, C)); ++d);
            for (m = d; m < l.length && (_ = l[m], g = _.rectangle, !p.lessThanOrEquals(T.east, g.west, C)); ++m);
            break;
        case ie.EAST:
            for (C = (A.north - A.south) * p.EPSILON5, d = 0; d < l.length && (_ = l[d], g = _.rectangle, !p.lessThan(T.south, g.north, C)); ++d);
            for (m = d; m < l.length && (_ = l[m], g = _.rectangle, !p.lessThanOrEquals(T.north, g.south, C)); ++m);
            break;
        case ie.NORTH:
            for (C = (A.east - A.west) * p.EPSILON5, d = 0; d < l.length && (_ = l[d], g = _.rectangle, !p.greaterThan(T.east, g.west, C)); ++d);
            for (m = d; m < l.length && (_ = l[m], g = _.rectangle, !p.greaterThanOrEquals(T.west, g.east, C)); ++m);
            break
    }
    m - d === 1 ? (o.changedThisFrame = o.changedThisFrame || f[d] !== s, f[d] = s, l[d] = r) : (o.changedThisFrame = !0, f.splice(d, m - d, s), l.splice(d, m - d, r))
}
var Mn = new re,
    yg = new re,
    oi = new u,
    Pc = new u,
    Vs = new R,
    Gs = new R,
    tr = new R;

function yo() {
    this.height = 0, this.encodedNormal = new R
}

function Ra(e, t, r, n, i, a, o, s, h) {
    if (c(i)) return i;
    var f;
    if (c(a) && c(o)) f = (a.height + o.height) * .5;
    else if (c(a)) f = a.height;
    else if (c(o)) f = o.height;
    else if (c(s)) f = s.height;
    else {
        var l = e.tile.data,
            d = l.tileBoundingRegion,
            m = 0,
            _ = 0;
        c(d) && (m = d.minimumHeight, _ = d.maximumHeight), f = (m + _) * .5
    }
    return fl(e, t, r, n, f, h), h
}
var Eg = {
        minimumHeight: 0,
        maximumHeight: 0
    },
    Nc = new yo,
    Mc = new yo,
    Dc = new yo,
    bc = new yo,
    Cg = typeof Uint8Array < "u" ? new Uint8Array(9 * 9) : void 0;

function hl(e, t, r, n) {
    Ye.initialize(r, e.terrainProvider, e._imageryLayers);
    var i = r.data,
        a = i.fill,
        o = r.rectangle,
        s = r.tilingScheme.ellipsoid,
        h = Sa(a, s, 0, 1, a.northwestTile, a.northwestMesh, a.northTiles, a.northMeshes, a.westTiles, a.westMeshes, Dc),
        f = Sa(a, s, 0, 0, a.southwestTile, a.southwestMesh, a.westTiles, a.westMeshes, a.southTiles, a.southMeshes, Nc),
        l = Sa(a, s, 1, 0, a.southeastTile, a.southeastMesh, a.southTiles, a.southMeshes, a.eastTiles, a.eastMeshes, Mc),
        d = Sa(a, s, 1, 1, a.northeastTile, a.northeastMesh, a.eastTiles, a.eastMeshes, a.northTiles, a.northMeshes, bc);
    h = Ra(a, s, 0, 1, h, f, d, l, Dc), f = Ra(a, s, 0, 0, f, h, l, d, Nc), l = Ra(a, s, 1, 1, l, f, d, h, Mc), d = Ra(a, s, 1, 1, d, l, h, f, bc);
    var m = f.height,
        _ = l.height,
        g = h.height,
        T = d.height,
        C = Math.min(m, _, g, T),
        A = Math.max(m, _, g, T),
        S = (C + A) * .5,
        x, I, O = e.getLevelMaximumGeometricError(r.level),
        F = s.maximumRadius - O,
        b = Math.acos(F / s.maximumRadius) * 4;
    if (b *= 1.5, o.width > b && A - C <= O) {
        var N = new Yr({
            width: 9,
            height: 9,
            buffer: Cg,
            structure: {
                heightOffset: A
            }
        });
        a.mesh = N._createMeshSync(r.tilingScheme, r.x, r.y, r.level, 1)
    } else {
        var D = new Kt(void 0, void 0, void 0, void 0, !0, !0),
            V = yg;
        V.longitude = (o.east + o.west) * .5, V.latitude = (o.north + o.south) * .5, V.height = S, D.center = s.cartographicToCartesian(V, D.center);
        var M = 5,
            W;
        for (W = a.westMeshes, x = 0, I = W.length; x < I; ++x) M += W[x].eastIndicesNorthToSouth.length;
        for (W = a.southMeshes, x = 0, I = W.length; x < I; ++x) M += W[x].northIndicesWestToEast.length;
        for (W = a.eastMeshes, x = 0, I = W.length; x < I; ++x) M += W[x].westIndicesSouthToNorth.length;
        for (W = a.northMeshes, x = 0, I = W.length; x < I; ++x) M += W[x].southIndicesEastToWest.length;
        var G = Eg;
        G.minimumHeight = C, G.maximumHeight = A;
        var U = D.getStride(),
            q = new Float32Array(M * U),
            Y = 0,
            j = Y;
        Y = xa(s, o, D, q, Y, 0, 1, h.height, h.encodedNormal, 1, G), Y = Oa(a, s, D, q, Y, a.westTiles, a.westMeshes, ie.EAST, G);
        var Z = Y;
        Y = xa(s, o, D, q, Y, 0, 0, f.height, f.encodedNormal, 0, G), Y = Oa(a, s, D, q, Y, a.southTiles, a.southMeshes, ie.NORTH, G);
        var le = Y;
        Y = xa(s, o, D, q, Y, 1, 0, l.height, l.encodedNormal, 0, G), Y = Oa(a, s, D, q, Y, a.eastTiles, a.eastMeshes, ie.WEST, G);
        var ne = Y;
        Y = xa(s, o, D, q, Y, 1, 1, d.height, d.encodedNormal, 1, G), Y = Oa(a, s, D, q, Y, a.northTiles, a.northMeshes, ie.SOUTH, G), C = G.minimumHeight, A = G.maximumHeight;
        var he = xe.fromRectangle(o, C, A, r.tilingScheme.ellipsoid),
            De = Ve.geodeticLatitudeToMercatorAngle(o.south),
            fe = 1 / (Ve.geodeticLatitudeToMercatorAngle(o.north) - De),
            at = (Ve.geodeticLatitudeToMercatorAngle(V.latitude) - De) * fe;
        s.geodeticSurfaceNormalCartographic(Mn, Pc);
        var qe = Se.octEncode(Pc, Vs),
            Fe = Y;
        D.encode(q, Y * U, he.center, R.fromElements(.5, .5, tr), S, qe, at), ++Y;
        var Te = Y,
            rt = Te < 256 ? 1 : 2,
            be = (Te - 1) * 3,
            te = be * rt,
            vt = (q.length - Te * U) * Float32Array.BYTES_PER_ELEMENT,
            Ee;
        if (vt >= te) {
            var sr = Te * U * Float32Array.BYTES_PER_ELEMENT;
            Ee = Te < 256 ? new Uint8Array(q.buffer, sr, be) : new Uint16Array(q.buffer, sr, be)
        } else Ee = Te < 256 ? new Uint8Array(be) : new Uint16Array(be);
        q = new Float32Array(q.buffer, 0, Te * U);
        var Gt = 0;
        for (x = 0; x < Te - 2; ++x) Ee[Gt++] = Fe, Ee[Gt++] = x, Ee[Gt++] = x + 1;
        Ee[Gt++] = Fe, Ee[Gt++] = x, Ee[Gt++] = 0;
        var ve = [];
        for (x = Z; x >= j; --x) ve.push(x);
        var Zr = [];
        for (x = le; x >= Z; --x) Zr.push(x);
        var Cr = [];
        for (x = ne; x >= le; --x) Cr.push(x);
        var br = [];
        for (br.push(0), x = Fe - 1; x >= ne; --x) br.push(x);
        a.mesh = new gu(D.center, q, Ee, be, Te, C, A, ae.fromOrientedBoundingBox(he), Og(e, he.center, o, C, A), D.getStride(), he, D, t.terrainExaggeration, ve, Zr, Cr, br)
    }
    var sn = t.context;
    c(a.vertexArray) && (c(n) ? n.push(a.vertexArray) : Ye._freeVertexArray(a.vertexArray)), a.vertexArray = Ye._createVertexArrayForMesh(sn, a.mesh), i.processImagery(r, e.terrainProvider, t, !0);
    var Qt = a.waterMaskTexture;
    if (a.waterMaskTexture = void 0, e.terrainProvider.hasWaterMask) {
        var bt = i._findAncestorTileWithTerrainData(r);
        c(bt) && c(bt.data.waterMaskTexture) && (a.waterMaskTexture = bt.data.waterMaskTexture, ++a.waterMaskTexture.referenceCount, i._computeWaterMaskTranslationAndScale(r, bt, a.waterMaskTranslationAndScale))
    }
    c(Qt) && (--Qt.referenceCount, Qt.referenceCount === 0 && Qt.destroy())
}

function xa(e, t, r, n, i, a, o, s, h, f, l) {
    var d = Mn;
    d.longitude = p.lerp(t.west, t.east, a), d.latitude = p.lerp(t.south, t.north, o), d.height = s;
    var m = e.cartographicToCartesian(d, oi),
        _ = Gs;
    return _.x = a, _.y = o, r.encode(n, i * r.getStride(), m, _, s, h, f), l.minimumHeight = Math.min(l.minimumHeight, s), l.maximumHeight = Math.max(l.maximumHeight, s), i + 1
}
var oo = new L;

function ji(e, t, r, n) {
    var i = e.rectangle,
        a = t.rectangle;
    t.x === 0 && r.x === 1 && e.x === e.tilingScheme.getNumberOfXTilesAtLevel(e.level) - 1 ? (i = L.clone(e.rectangle, oo), i.west -= p.TWO_PI, i.east -= p.TWO_PI) : e.x === 0 && r.x === 0 && t.x === t.tilingScheme.getNumberOfXTilesAtLevel(t.level) - 1 && (i = L.clone(e.rectangle, oo), i.west += p.TWO_PI, i.east += p.TWO_PI);
    var o = i.east - i.west,
        s = (a.west - i.west) / o,
        h = (a.east - i.west) / o,
        f = i.north - i.south,
        l = (a.south - i.south) / f,
        d = (a.north - i.south) / f,
        m = (r.x - s) / (h - s),
        _ = (r.y - l) / (d - l);
    return Math.abs(m) < Math.EPSILON5 ? m = 0 : Math.abs(m - 1) < Math.EPSILON5 && (m = 1), Math.abs(_) < Math.EPSILON5 ? _ = 0 : Math.abs(_ - 1) < Math.EPSILON5 && (_ = 1), n.x = m, n.y = _, n
}
var Ag = new R;

function Hs(e, t, r, n, i) {
    var a = e.encoding,
        o = e.vertices;
    if (i.height = a.decodeHeight(o, t), a.hasVertexNormals) a.getOctEncodedNormal(o, t, i.encodedNormal);
    else {
        var s = i.encodedNormal;
        s.x = 0, s.y = 0
    }
}
var wg = new R,
    Rg = new u;

function xg(e, t, r, n, i, a, o, s, h, f) {
    var l = n.encoding,
        d = n.vertices,
        m = ji(t, r, l.decodeTextureCoordinates(d, i, tr), tr),
        _ = ji(t, r, l.decodeTextureCoordinates(d, a, Gs), Gs),
        g;
    h ? g = (o - m.x) / (_.x - m.x) : g = (s - m.y) / (_.y - m.y);
    var T = l.decodeHeight(d, i),
        C = l.decodeHeight(d, a),
        A = r.rectangle;
    Mn.longitude = p.lerp(A.west, A.east, o), Mn.latitude = p.lerp(A.south, A.north, s), f.height = Mn.height = p.lerp(T, C, g);
    var S;
    if (l.hasVertexNormals) {
        var x = l.getOctEncodedNormal(d, i, Ag),
            I = l.getOctEncodedNormal(d, a, wg),
            O = Se.octDecode(x.x, x.y, oi),
            F = Se.octDecode(I.x, I.y, Rg);
        S = u.lerp(O, F, g, oi), u.normalize(S, S), Se.octEncode(S, f.encodedNormal)
    } else S = e.geodeticSurfaceNormalCartographic(Mn, oi), Se.octEncode(S, f.encodedNormal)
}

function fl(e, t, r, n, i, a) {
    a.height = i;
    var o = t.geodeticSurfaceNormalCartographic(Mn, oi);
    Se.octEncode(o, a.encodedNormal)
}

function Sa(e, t, r, n, i, a, o, s, h, f, l) {
    var d = Fc(e, t, s, o, !1, r, n, l) || Fc(e, t, f, h, !0, r, n, l);
    if (d) return l;
    var m;
    if (yu(i, a)) return r === 0 ? n === 0 ? m = a.eastIndicesNorthToSouth[0] : m = a.southIndicesEastToWest[0] : n === 0 ? m = a.northIndicesWestToEast[0] : m = a.westIndicesSouthToNorth[0], Hs(a, m, r, n, l), l;
    var _;
    if (r === 0 ? n === 0 ? _ = Ia(e.westMeshes, e.westTiles, ie.EAST, e.southMeshes, e.southTiles, ie.NORTH) : _ = Ia(e.northMeshes, e.northTiles, ie.SOUTH, e.westMeshes, e.westTiles, ie.EAST) : n === 0 ? _ = Ia(e.southMeshes, e.southTiles, ie.NORTH, e.eastMeshes, e.eastTiles, ie.WEST) : _ = Ia(e.eastMeshes, e.eastTiles, ie.WEST, e.northMeshes, e.northTiles, ie.SOUTH), c(_)) return fl(e, t, r, n, _, l), l
}

function Ia(e, t, r, n, i, a, o, s) {
    var h = Lc(e, t, !1, r),
        f = Lc(n, i, !0, a);
    return c(h) && c(f) ? (h + f) * .5 : c(h) ? h : f
}

function Oa(e, t, r, n, i, a, o, s, h) {
    for (var f = 0; f < a.length; ++f) i = Sg(e, t, r, n, i, a[f], o[f], s, h);
    return i
}

function Sg(e, t, r, n, i, a, o, s, h) {
    var f = a.rectangle;
    s === ie.EAST && e.tile.x === 0 ? (f = L.clone(a.rectangle, oo), f.west -= p.TWO_PI, f.east -= p.TWO_PI) : s === ie.WEST && a.x === 0 && (f = L.clone(a.rectangle, oo), f.west += p.TWO_PI, f.east += p.TWO_PI);
    var l = e.tile.rectangle,
        d, m;
    i > 0 && (r.decodeTextureCoordinates(n, i - 1, tr), d = tr.x, m = tr.y);
    var _, g;
    switch (s) {
        case ie.WEST:
            _ = o.westIndicesSouthToNorth, g = !1;
            break;
        case ie.NORTH:
            _ = o.northIndicesWestToEast, g = !0;
            break;
        case ie.EAST:
            _ = o.eastIndicesNorthToSouth, g = !1;
            break;
        case ie.SOUTH:
            _ = o.southIndicesEastToWest, g = !0;
            break
    }
    var T = a,
        C = e.tile,
        A = o.encoding,
        S = o.vertices,
        x = r.getStride(),
        I, O;
    A.hasWebMercatorT && (I = Ve.geodeticLatitudeToMercatorAngle(l.south), O = 1 / (Ve.geodeticLatitudeToMercatorAngle(l.north) - I));
    for (var F = 0; F < _.length; ++F) {
        var b = _[F],
            N = A.decodeTextureCoordinates(S, b, tr);
        ji(T, C, N, N);
        var D = N.x,
            V = N.y,
            M = g ? D : V;
        if (!(M < 0 || M > 1) && !(Math.abs(D - d) < p.EPSILON5 && Math.abs(V - m) < p.EPSILON5)) {
            var W = Math.abs(D) < p.EPSILON5 || Math.abs(D - 1) < p.EPSILON5,
                G = Math.abs(V) < p.EPSILON5 || Math.abs(V - 1) < p.EPSILON5;
            if (!(W && G)) {
                var U = A.decodePosition(S, b, oi),
                    q = A.decodeHeight(S, b),
                    Y;
                A.hasVertexNormals ? Y = A.getOctEncodedNormal(S, b, Vs) : (Y = Vs, Y.x = 0, Y.y = 0);
                var j = V;
                if (A.hasWebMercatorT) {
                    var Z = p.lerp(l.south, l.north, V);
                    j = (Ve.geodeticLatitudeToMercatorAngle(Z) - I) * O
                }
                r.encode(n, i * x, U, N, q, Y, j), h.minimumHeight = Math.min(h.minimumHeight, q), h.maximumHeight = Math.max(h.maximumHeight, q), ++i
            }
        }
    }
    return i
}

function Lc(e, t, r, n, i, a) {
    var o, s, h;
    r ? (o = 0, s = e.length, h = 1) : (o = e.length - 1, s = -1, h = -1);
    for (var f = o; f !== s; f += h) {
        var l = e[f],
            d = t[f];
        if (yu(d, l)) {
            var m;
            switch (n) {
                case ie.WEST:
                    m = l.westIndicesSouthToNorth;
                    break;
                case ie.SOUTH:
                    m = l.southIndicesEastToWest;
                    break;
                case ie.EAST:
                    m = l.eastIndicesNorthToSouth;
                    break;
                case ie.NORTH:
                    m = l.northIndicesWestToEast;
                    break
            }
            var _ = m[r ? 0 : m.length - 1];
            if (c(_)) return l.encoding.decodeHeight(l.vertices, _)
        }
    }
}

function yu(e, t) {
    return c(t) && (!c(e.data.fill) || !e.data.fill.changedThisFrame)
}

function Fc(e, t, r, n, i, a, o, s) {
    var h, f, l, d, m, _ = n[i ? 0 : r.length - 1],
        g = r[i ? 0 : r.length - 1];
    if (yu(_, g) && (a === 0 ? o === 0 ? (h = i ? g.northIndicesWestToEast : g.eastIndicesNorthToSouth, f = i, l = i) : (h = i ? g.eastIndicesNorthToSouth : g.southIndicesEastToWest, f = !i, l = !1) : o === 0 ? (h = i ? g.westIndicesSouthToNorth : g.northIndicesWestToEast, f = !i, l = !0) : (h = i ? g.southIndicesEastToWest : g.westIndicesSouthToNorth, f = i, l = !i), h.length > 0)) {
        d = i ? 0 : h.length - 1, m = h[d], g.encoding.decodeTextureCoordinates(g.vertices, m, tr);
        var T = ji(_, e.tile, tr, tr);
        if (T.x === a && T.y === o) return Hs(g, m, a, o, s), !0;
        if (d = vg(h, f ? a : o, function(C, A) {
                g.encoding.decodeTextureCoordinates(g.vertices, C, tr);
                var S = ji(_, e.tile, tr, tr);
                return l ? f ? S.x - a : S.y - o : f ? a - S.x : o - S.y
            }), d < 0) {
            if (d = ~d, d > 0 && d < h.length) return xg(t, _, e.tile, g, h[d - 1], h[d], a, o, f, s), !0
        } else return Hs(g, h[d], a, o, s), !0
    }
    return !1
}
var Ig = [new u, new u, new u, new u];

function Og(e, t, r, n, i, a) {
    var o = e.quadtree._occluders.ellipsoid,
        s = o.ellipsoid,
        h = Ig;
    return u.fromRadians(r.west, r.south, i, s, h[0]), u.fromRadians(r.east, r.south, i, s, h[1]), u.fromRadians(r.west, r.north, i, s, h[2]), u.fromRadians(r.east, r.north, i, s, h[3]), o.computeHorizonCullingPointPossiblyUnderEllipsoid(t, h, n, a)
}

function Eo(e) {
    this.rectangle = L.clone(e.rectangle), this.minimumHeight = v(e.minimumHeight, 0), this.maximumHeight = v(e.maximumHeight, 0), this.southwestCornerCartesian = new u, this.northeastCornerCartesian = new u, this.westNormal = new u, this.southNormal = new u, this.eastNormal = new u, this.northNormal = new u;
    var t = v(e.ellipsoid, se.WGS84);
    Dg(this, e.rectangle, t), v(e.computeBoundingVolumes, !0) && (this._orientedBoundingBox = xe.fromRectangle(this.rectangle, this.minimumHeight, this.maximumHeight, t), this._boundingSphere = ae.fromOrientedBoundingBox(this._orientedBoundingBox))
}
Object.defineProperties(Eo.prototype, {
    boundingVolume: {
        get: function() {
            return this._orientedBoundingBox
        }
    },
    boundingSphere: {
        get: function() {
            return this._boundingSphere
        }
    }
});
var os = new u,
    Pa = new u,
    Bc = new u,
    Pg = new u,
    Ng = new u,
    Mg = new u,
    dr = new re,
    Uc = new Ne(u.UNIT_X, 0),
    ri = new Ir;

function Dg(e, t, r) {
    r.cartographicToCartesian(L.southwest(t), e.southwestCornerCartesian), r.cartographicToCartesian(L.northeast(t), e.northeastCornerCartesian), dr.longitude = t.west, dr.latitude = (t.south + t.north) * .5, dr.height = 0;
    var n = r.cartographicToCartesian(dr, Ng),
        i = u.cross(n, u.UNIT_Z, os);
    u.normalize(i, e.westNormal), dr.longitude = t.east;
    var a = r.cartographicToCartesian(dr, Mg),
        o = u.cross(u.UNIT_Z, a, os);
    u.normalize(o, e.eastNormal);
    var s = u.subtract(n, a, os),
        h = u.normalize(s, Pg),
        f = t.south,
        l;
    if (f > 0) {
        dr.longitude = (t.west + t.east) * .5, dr.latitude = f;
        var d = r.cartographicToCartesian(dr, ri.origin);
        u.clone(h, ri.direction);
        var m = Ne.fromPointNormal(e.southwestCornerCartesian, e.westNormal, Uc);
        At.rayPlane(ri, m, e.southwestCornerCartesian), l = r.geodeticSurfaceNormal(d, Pa)
    } else l = r.geodeticSurfaceNormalCartographic(L.southeast(t), Pa);
    var _ = u.cross(l, s, Bc);
    u.normalize(_, e.southNormal);
    var g = t.north,
        T;
    if (g < 0) {
        dr.longitude = (t.west + t.east) * .5, dr.latitude = g;
        var C = r.cartographicToCartesian(dr, ri.origin);
        u.negate(h, ri.direction);
        var A = Ne.fromPointNormal(e.northeastCornerCartesian, e.eastNormal, Uc);
        At.rayPlane(ri, A, e.northeastCornerCartesian), T = r.geodeticSurfaceNormal(C, Pa)
    } else T = r.geodeticSurfaceNormalCartographic(L.northwest(t), Pa);
    var S = u.cross(s, T, Bc);
    u.normalize(S, e.northNormal)
}
var bg = new u,
    Lg = new u,
    Fg = new u(0, -1, 0),
    Bg = new u(0, 0, -1),
    zc = new u;
Eo.prototype.distanceToCamera = function(e) {
    var t = e.camera,
        r = t.positionWC,
        n = t.positionCartographic,
        i = 0;
    if (!L.contains(this.rectangle, n)) {
        var a = this.southwestCornerCartesian,
            o = this.northeastCornerCartesian,
            s = this.westNormal,
            h = this.southNormal,
            f = this.eastNormal,
            l = this.northNormal;
        e.mode !== Q.SCENE3D && (a = e.mapProjection.project(L.southwest(this.rectangle), bg), a.z = a.y, a.y = a.x, a.x = 0, o = e.mapProjection.project(L.northeast(this.rectangle), Lg), o.z = o.y, o.y = o.x, o.x = 0, s = Fg, f = u.UNIT_Y, h = Bg, l = u.UNIT_Z);
        var d = u.subtract(r, a, zc),
            m = u.dot(d, s),
            _ = u.dot(d, h),
            g = u.subtract(r, o, zc),
            T = u.dot(g, f),
            C = u.dot(g, l);
        m > 0 ? i += m * m : T > 0 && (i += T * T), _ > 0 ? i += _ * _ : C > 0 && (i += C * C)
    }
    var A, S, x;
    if (e.mode === Q.SCENE3D ? (A = n.height, S = this.minimumHeight, x = this.maximumHeight) : (A = r.x, S = 0, x = 0), A > x) {
        var I = A - x;
        i += I * I
    } else if (A < S) {
        var O = S - A;
        i += O * O
    }
    return Math.sqrt(i)
};
Eo.prototype.intersectPlane = function(e) {
    return this._orientedBoundingBox.intersectPlane(e)
};

function He(e) {
    this.lightingFadeOutDistance = 65e5, this.lightingFadeInDistance = 9e6, this.hasWaterMask = !1, this.oceanNormalMap = void 0, this.zoomedOutOceanSpecularIntensity = .5, this.enableLighting = !1, this.dynamicAtmosphereLighting = !1, this.dynamicAtmosphereLightingFromSun = !1, this.showGroundAtmosphere = !1, this.shadows = ao.RECEIVE_ONLY, this.fillHighlightColor = void 0, this.hueShift = 0, this.saturationShift = 0, this.brightnessShift = 0, this.showSkirts = !0, this.backFaceCulling = !0, this.undergroundColor = void 0, this.undergroundColorAlphaByDistance = void 0, this.materialUniformMap = void 0, this._materialUniformMap = void 0, this._quadtree = void 0, this._terrainProvider = e.terrainProvider, this._imageryLayers = e.imageryLayers, this._surfaceShaderSet = e.surfaceShaderSet, this._renderState = void 0, this._blendRenderState = void 0, this._disableCullingRenderState = void 0, this._disableCullingBlendRenderState = void 0, this._errorEvent = new ze, this._imageryLayers.layerAdded.addEventListener(He.prototype._onLayerAdded, this), this._imageryLayers.layerRemoved.addEventListener(He.prototype._onLayerRemoved, this), this._imageryLayers.layerMoved.addEventListener(He.prototype._onLayerMoved, this), this._imageryLayers.layerShownOrHidden.addEventListener(He.prototype._onLayerShownOrHidden, this), this._imageryLayersUpdatedEvent = new ze, this._layerOrderChanged = !1, this._tilesToRenderByTextureCount = [], this._drawCommands = [], this._uniformMaps = [], this._usedDrawCommands = 0, this._vertexArraysToDestroy = [], this._baseColor = void 0, this._firstPassInitialColor = void 0, this.baseColor = new H(0, 0, .5, 1), this._clippingPlanes = void 0, this.cartographicLimitRectangle = L.clone(L.MAX_VALUE), this._hasLoadedTilesThisFrame = !1, this._hasFillTilesThisFrame = !1
}
Object.defineProperties(He.prototype, {
    baseColor: {
        get: function() {
            return this._baseColor
        },
        set: function(e) {
            this._baseColor = e, this._firstPassInitialColor = B.fromColor(e, this._firstPassInitialColor)
        }
    },
    quadtree: {
        get: function() {
            return this._quadtree
        },
        set: function(e) {
            this._quadtree = e
        }
    },
    ready: {
        get: function() {
            return this._terrainProvider.ready && (this._imageryLayers.length === 0 || this._imageryLayers.get(0).imageryProvider.ready)
        }
    },
    tilingScheme: {
        get: function() {
            return this._terrainProvider.tilingScheme
        }
    },
    errorEvent: {
        get: function() {
            return this._errorEvent
        }
    },
    imageryLayersUpdatedEvent: {
        get: function() {
            return this._imageryLayersUpdatedEvent
        }
    },
    terrainProvider: {
        get: function() {
            return this._terrainProvider
        },
        set: function(e) {
            this._terrainProvider !== e && (this._terrainProvider = e, c(this._quadtree) && this._quadtree.invalidateAllTiles())
        }
    },
    clippingPlanes: {
        get: function() {
            return this._clippingPlanes
        },
        set: function(e) {
            zs.setOwner(e, this, "_clippingPlanes")
        }
    }
});

function Ug(e, t) {
    var r = e.loadingImagery;
    c(r) || (r = e.readyImagery);
    var n = t.loadingImagery;
    return c(n) || (n = t.readyImagery), r.imageryLayer._layerIndex - n.imageryLayer._layerIndex
}
He.prototype.update = function(e) {
    this._imageryLayers._update()
};

function zg(e, t) {
    var r = t.creditDisplay;
    e._terrainProvider.ready && c(e._terrainProvider.credit) && r.addCredit(e._terrainProvider.credit);
    for (var n = e._imageryLayers, i = 0, a = n.length; i < a; ++i) {
        var o = n.get(i).imageryProvider;
        o.ready && c(o.credit) && r.addCredit(o.credit)
    }
}
He.prototype.initialize = function(e) {
    this._imageryLayers.queueReprojectionCommands(e), this._layerOrderChanged && (this._layerOrderChanged = !1, this._quadtree.forEachLoadedTile(function(i) {
        i.data.imagery.sort(Ug)
    })), zg(this, e);
    for (var t = this._vertexArraysToDestroy, r = t.length, n = 0; n < r; ++n) Ye._freeVertexArray(t[n]);
    t.length = 0
};
He.prototype.beginUpdate = function(e) {
    for (var t = this._tilesToRenderByTextureCount, r = 0, n = t.length; r < n; ++r) {
        var i = t[r];
        c(i) && (i.length = 0)
    }
    var a = this._clippingPlanes;
    c(a) && a.enabled && a.update(e), this._usedDrawCommands = 0, this._hasLoadedTilesThisFrame = !1, this._hasFillTilesThisFrame = !1
};
He.prototype.endUpdate = function(e) {
    if (!c(this._renderState)) {
        this._renderState = Xe.fromCache({
            cull: {
                enabled: !0
            },
            depthTest: {
                enabled: !0,
                func: Sc.LESS
            }
        }), this._blendRenderState = Xe.fromCache({
            cull: {
                enabled: !0
            },
            depthTest: {
                enabled: !0,
                func: Sc.LESS_OR_EQUAL
            },
            blending: xf.ALPHA_BLEND
        });
        var t = nr(this._renderState, !0);
        t.cull.enabled = !1, this._disableCullingRenderState = Xe.fromCache(t), t = nr(this._blendRenderState, !0), t.cull.enabled = !1, this._disableCullingBlendRenderState = Xe.fromCache(t)
    }
    this._hasFillTilesThisFrame && this._hasLoadedTilesThisFrame && pi.updateFillTiles(this, this._quadtree._tilesToRender, e, this._vertexArraysToDestroy);
    for (var r = this._tilesToRenderByTextureCount, n = 0, i = r.length; n < i; ++n) {
        var a = r[n];
        if (c(a))
            for (var o = 0, s = a.length; o < s; ++o) {
                var h = a[o],
                    f = h.data.tileBoundingRegion;
                uT(this, h, e), e.minimumTerrainHeight = Math.min(e.minimumTerrainHeight, f.minimumHeight)
            }
    }
};

function ll(e, t) {
    var r = t.globeTranslucencyState;
    if (r.translucent) {
        var n = e.renderState.blending.enabled;
        r.pushDerivedCommands(e, n, t)
    } else t.commandList.push(e)
}
He.prototype.updateForPick = function(e) {
    for (var t = this._drawCommands, r = 0, n = this._usedDrawCommands; r < n; ++r) ll(t[r], e)
};
He.prototype.cancelReprojections = function() {
    this._imageryLayers.cancelReprojections()
};
He.prototype.getLevelMaximumGeometricError = function(e) {
    return this._terrainProvider.getLevelMaximumGeometricError(e)
};
He.prototype.loadTile = function(e, t) {
    var r = t.data,
        n = !0,
        i;
    c(r) && (n = r.boundingVolumeSourceTile !== t || t._lastSelectionResult === me.CULLED_BUT_NEEDED, i = r.terrainState), Ye.processStateMachine(t, e, this.terrainProvider, this._imageryLayers, this._vertexArraysToDestroy, n), r = t.data, n && i !== t.data.terrainState && this.computeTileVisibility(t, e, this.quadtree.occluders) !== ht.NONE && r.boundingVolumeSourceTile === t && (n = !1, Ye.processStateMachine(t, e, this.terrainProvider, this._imageryLayers, this._vertexArraysToDestroy, n))
};
var Vg = new ae,
    dl = new L,
    Gg = new L,
    Hg = new re;

function $a(e, t) {
    if (t.west < t.east) return t;
    var r = L.clone(t, Gg),
        n = L.center(e, Hg);
    return n.longitude > 0 ? r.east = p.PI : r.west = -p.PI, r
}

function _l(e, t) {
    if (t.cameraUnderground || t.globeTranslucencyState.translucent) return !0;
    if (e.backFaceCulling) return !1;
    var r = e._clippingPlanes;
    return !!(c(r) && r.enabled || !L.equals(e.cartographicLimitRectangle, L.MAX_VALUE))
}
He.prototype.computeTileVisibility = function(e, t, r) {
    var n = this.computeDistanceToTile(e, t);
    e._distance = n;
    var i = _l(this, t);
    if (t.fog.enabled && !i && p.fog(n, t.fog.density) >= 1) return ht.NONE;
    var a = e.data,
        o = a.tileBoundingRegion;
    if (a.boundingVolumeSourceTile === void 0) return ht.PARTIAL;
    var s = t.cullingVolume,
        h = a.orientedBoundingBox;
    !c(h) && c(a.renderedMesh) && (h = a.renderedMesh.boundingSphere3D), a.clippedByBoundaries = !1;
    var f = $a(e.rectangle, this.cartographicLimitRectangle),
        l = L.simpleIntersection(f, e.rectangle, dl);
    if (!c(l)) return ht.NONE;
    if (L.equals(l, e.rectangle) || (a.clippedByBoundaries = !0), t.mode !== Q.SCENE3D && (h = Vg, ae.fromRectangleWithHeights2D(e.rectangle, t.mapProjection, o.minimumHeight, o.maximumHeight, h), u.fromElements(h.center.z, h.center.x, h.center.y, h.center), t.mode === Q.MORPHING && c(a.renderedMesh) && (h = ae.union(a.renderedMesh.boundingSphere3D, h, h))), !c(h)) return ht.PARTIAL;
    var d = this._clippingPlanes;
    if (c(d) && d.enabled) {
        var m = d.computeIntersectionWithBoundingVolume(h);
        if (e.isClipped = m !== ft.INSIDE, m === ft.OUTSIDE) return ht.NONE
    }
    var _, g = s.computeVisibility(h);
    if (g === ft.OUTSIDE ? _ = ht.NONE : g === ft.INTERSECTING ? _ = ht.PARTIAL : g === ft.INSIDE && (_ = ht.FULL), _ === ht.NONE) return _;
    var T = t.mode === Q.SCENE3D && t.camera.frustum instanceof $e;
    if (t.mode === Q.SCENE3D && !T && c(r) && !i) {
        var C = a.occludeePointInScaledSpace;
        return !c(C) || r.ellipsoid.isScaledSpacePointVisiblePossiblyUnderEllipsoid(C, o.minimumHeight) ? _ : ht.NONE
    }
    return _
};
He.prototype.canRefine = function(e) {
    if (c(e.data.terrainData)) return !0;
    var t = this.terrainProvider.getTileDataAvailable(e.x * 2, e.y * 2, e.level + 1);
    return t !== void 0
};
var Wg = [],
    qg = [];
He.prototype.canRenderWithoutLosingDetail = function(e, t) {
    var r = e.data,
        n = Wg;
    n.length = this._imageryLayers.length;
    var i = !1,
        a = !1,
        o;
    c(r) && (i = r.terrainState === Ge.READY, a = !0, o = r.imagery);
    var s, h;
    for (s = 0, h = n.length; s < h; ++s) n[s] = a;
    if (c(o))
        for (s = 0, h = o.length; s < h; ++s) {
            var f = o[s],
                l = f.loadingImagery,
                d = !c(l) || l.state === Ce.FAILED || l.state === Ce.INVALID,
                m = (f.loadingImagery || f.readyImagery).imageryLayer._layerIndex;
            n[m] = d && n[m]
        }
    var _ = this.quadtree._lastSelectionFrameNumber,
        g = qg;
    for (g.length = 0, g.push(e.southwestChild, e.southeastChild, e.northwestChild, e.northeastChild); g.length > 0;) {
        var T = g.pop(),
            C = T._lastSelectionResultFrame === _ ? T._lastSelectionResult : me.NONE;
        if (C === me.RENDERED) {
            var A = T.data;
            if (!c(A)) continue;
            if (!i && T.data.terrainState === Ge.READY) return !1;
            var S = T.data.imagery;
            for (s = 0, h = S.length; s < h; ++s) {
                var x = S[s],
                    I = x.loadingImagery,
                    O = !c(I) || I.state === Ce.FAILED || I.state === Ce.INVALID,
                    F = (x.loadingImagery || x.readyImagery).imageryLayer._layerIndex;
                if (O && !n[F]) return !1
            }
        } else C === me.REFINED && g.push(T.southwestChild, T.southeastChild, T.northwestChild, T.northeastChild)
    }
    return !0
};
var kg = new u;
He.prototype.computeTileLoadPriority = function(e, t) {
    var r = e.data;
    if (r === void 0) return 0;
    var n = r.orientedBoundingBox;
    if (n === void 0) return 0;
    var i = t.camera.positionWC,
        a = t.camera.directionWC,
        o = u.subtract(n.center, i, kg),
        s = u.magnitude(o);
    return s < p.EPSILON5 ? 0 : (u.divideByScalar(o, s, o), (1 - u.dot(o, a)) * e._distance)
};
var Vc = new y,
    Na = new y,
    Yg = new B,
    jg = new B,
    Xg = new B,
    Zg = new u,
    Gc = new u,
    Kg = new u,
    Qg = new u;
He.prototype.showTileThisFrame = function(e, t) {
    for (var r = 0, n = e.data.imagery, i = 0, a = n.length; i < a; ++i) {
        var o = n[i];
        c(o.readyImagery) && o.readyImagery.imageryLayer.alpha !== 0 && ++r
    }
    var s = this._tilesToRenderByTextureCount[r];
    c(s) || (s = [], this._tilesToRenderByTextureCount[r] = s), s.push(e);
    var h = e.data;
    c(h.vertexArray) ? this._hasLoadedTilesThisFrame = !0 : this._hasFillTilesThisFrame = !0
};
var $g = [new u, new u, new u, new u];

function Jg(e, t, r, n, i, a) {
    var o = e.quadtree._occluders.ellipsoid,
        s = o.ellipsoid,
        h = $g;
    return u.fromRadians(r.west, r.south, i, s, h[0]), u.fromRadians(r.east, r.south, i, s, h[1]), u.fromRadians(r.west, r.north, i, s, h[2]), u.fromRadians(r.east, r.north, i, s, h[3]), o.computeHorizonCullingPointPossiblyUnderEllipsoid(t, h, n, a)
}
He.prototype.computeDistanceToTile = function(e, t) {
    var r = eT(e, this.terrainProvider, t),
        n = e.data,
        i = n.tileBoundingRegion;
    if (r === void 0) return 9999999999;
    if (n.boundingVolumeSourceTile !== r) {
        n.boundingVolumeSourceTile = r;
        var a = e.rectangle;
        c(a) && (n.orientedBoundingBox = xe.fromRectangle(e.rectangle, i.minimumHeight, i.maximumHeight, e.tilingScheme.ellipsoid, n.orientedBoundingBox), n.occludeePointInScaledSpace = Jg(this, n.orientedBoundingBox.center, e.rectangle, i.minimumHeight, i.maximumHeight, n.occludeePointInScaledSpace))
    }
    var o = i.minimumHeight,
        s = i.maximumHeight;
    if (n.boundingVolumeSourceTile !== e) {
        var h = t.camera.positionCartographic.height,
            f = Math.abs(h - o),
            l = Math.abs(h - s);
        f > l ? (i.minimumHeight = o, i.maximumHeight = o) : (i.minimumHeight = s, i.maximumHeight = s)
    }
    var d = i.distanceToCamera(t);
    return i.minimumHeight = o, i.maximumHeight = s, d
};

function eT(e, t, r) {
    var n = e.data;
    n === void 0 && (n = e.data = new Ye), n.tileBoundingRegion === void 0 && (n.tileBoundingRegion = new Eo({
        computeBoundingVolumes: !1,
        rectangle: e.rectangle,
        ellipsoid: e.tilingScheme.ellipsoid,
        minimumHeight: 0,
        maximumHeight: 0
    }));
    var i = n.terrainData,
        a = n.mesh,
        o = n.tileBoundingRegion;
    if (a !== void 0 && a.minimumHeight !== void 0 && a.maximumHeight !== void 0) return o.minimumHeight = a.minimumHeight, o.maximumHeight = a.maximumHeight, e;
    if (i !== void 0 && i._minimumHeight !== void 0 && i._maximumHeight !== void 0) return o.minimumHeight = i._minimumHeight * r.terrainExaggeration, o.maximumHeight = i._maximumHeight * r.terrainExaggeration, e;
    o.minimumHeight = Number.NaN, o.maximumHeight = Number.NaN;
    for (var s = e.parent; s !== void 0;) {
        var h = s.data;
        if (h !== void 0) {
            var f = h.mesh;
            if (f !== void 0 && f.minimumHeight !== void 0 && f.maximumHeight !== void 0) return o.minimumHeight = f.minimumHeight, o.maximumHeight = f.maximumHeight, s;
            var l = h.terrainData;
            if (l !== void 0 && l._minimumHeight !== void 0 && l._maximumHeight !== void 0) return o.minimumHeight = l._minimumHeight * r.terrainExaggeration, o.maximumHeight = l._maximumHeight * r.terrainExaggeration, s
        }
        s = s.parent
    }
}
He.prototype.isDestroyed = function() {
    return !1
};
He.prototype.destroy = function() {
    return this._tileProvider = this._tileProvider && this._tileProvider.destroy(), this._clippingPlanes = this._clippingPlanes && this._clippingPlanes.destroy(), Je(this)
};

function tT(e, t, r) {
    return function(n) {
        var i, a, o = -1,
            s = n.data.imagery,
            h = s.length,
            f;
        for (f = 0; f < h; ++f)
            if (i = s[f], a = v(i.readyImagery, i.loadingImagery), a.imageryLayer === t) {
                o = f;
                break
            } if (o !== -1) {
            var l = o + e;
            if (i = s[l], a = c(i) ? v(i.readyImagery, i.loadingImagery) : void 0, !c(a) || a.imageryLayer !== t) return !t._createTileImagerySkeletons(n, r, l);
            for (f = o; f < l; ++f) s[f].freeResources();
            s.splice(o, e)
        }
        return !0
    }
}
He.prototype._onLayerAdded = function(e, t) {
    if (e.show) {
        var r = this._terrainProvider,
            n = this,
            i = e.imageryProvider,
            a = this._imageryLayersUpdatedEvent;
        i._reload = function() {
            e._imageryCache = {}, n._quadtree.forEachLoadedTile(function(o) {
                if (!c(o._loadedCallbacks[e._layerIndex])) {
                    var s, h = o.data.imagery,
                        f = h.length,
                        l = -1,
                        d = 0;
                    for (s = 0; s < f; ++s) {
                        var m = h[s],
                            _ = v(m.readyImagery, m.loadingImagery);
                        if (_.imageryLayer === e) l === -1 && (l = s), ++d;
                        else if (l !== -1) break
                    }
                    if (l !== -1) {
                        var g = l + d;
                        e._createTileImagerySkeletons(o, r, g) && (o._loadedCallbacks[e._layerIndex] = tT(d, e, r), o.state = pr.LOADING)
                    }
                }
            })
        }, this._quadtree.forEachLoadedTile(function(o) {
            e._createTileImagerySkeletons(o, r) && (o.state = pr.LOADING, o.level !== 0 && (o._lastSelectionResultFrame !== n.quadtree._lastSelectionFrameNumber || o._lastSelectionResult !== me.RENDERED) && (o.renderable = !1))
        }), this._layerOrderChanged = !0, a.raiseEvent()
    }
};
He.prototype._onLayerRemoved = function(e, t) {
    this._quadtree.forEachLoadedTile(function(r) {
        for (var n = r.data.imagery, i = -1, a = 0, o = 0, s = n.length; o < s; ++o) {
            var h = n[o],
                f = h.loadingImagery;
            if (c(f) || (f = h.readyImagery), f.imageryLayer === e) i === -1 && (i = o), h.freeResources(), ++a;
            else if (i !== -1) break
        }
        i !== -1 && n.splice(i, a)
    }), c(e.imageryProvider) && (e.imageryProvider._reload = void 0), this._imageryLayersUpdatedEvent.raiseEvent()
};
He.prototype._onLayerMoved = function(e, t, r) {
    this._layerOrderChanged = !0, this._imageryLayersUpdatedEvent.raiseEvent()
};
He.prototype._onLayerShownOrHidden = function(e, t, r) {
    r ? this._onLayerAdded(e, t) : this._onLayerRemoved(e, t)
};
var rT = new y,
    nT = new y;

function Hc(e, t) {
    var r = {
        u_initialColor: function() {
            return this.properties.initialColor
        },
        u_fillHighlightColor: function() {
            return this.properties.fillHighlightColor
        },
        u_zoomedOutOceanSpecularIntensity: function() {
            return this.properties.zoomedOutOceanSpecularIntensity
        },
        u_oceanNormalMap: function() {
            return this.properties.oceanNormalMap
        },
        u_lightingFadeDistance: function() {
            return this.properties.lightingFadeDistance
        },
        u_nightFadeDistance: function() {
            return this.properties.nightFadeDistance
        },
        u_center3D: function() {
            return this.properties.center3D
        },
        u_tileRectangle: function() {
            return this.properties.tileRectangle
        },
        u_modifiedModelView: function() {
            var n = e.context.uniformState.view,
                i = y.multiplyByPoint(n, this.properties.rtc, Gc);
            return y.setTranslation(n, i, Vc), Vc
        },
        u_modifiedModelViewProjection: function() {
            var n = e.context.uniformState.view,
                i = e.context.uniformState.projection,
                a = y.multiplyByPoint(n, this.properties.rtc, Gc);
            return y.setTranslation(n, a, Na), y.multiply(i, Na, Na), Na
        },
        u_dayTextures: function() {
            return this.properties.dayTextures
        },
        u_dayTextureTranslationAndScale: function() {
            return this.properties.dayTextureTranslationAndScale
        },
        u_dayTextureTexCoordsRectangle: function() {
            return this.properties.dayTextureTexCoordsRectangle
        },
        u_dayTextureUseWebMercatorT: function() {
            return this.properties.dayTextureUseWebMercatorT
        },
        u_dayTextureAlpha: function() {
            return this.properties.dayTextureAlpha
        },
        u_dayTextureNightAlpha: function() {
            return this.properties.dayTextureNightAlpha
        },
        u_dayTextureDayAlpha: function() {
            return this.properties.dayTextureDayAlpha
        },
        u_dayTextureBrightness: function() {
            return this.properties.dayTextureBrightness
        },
        u_dayTextureContrast: function() {
            return this.properties.dayTextureContrast
        },
        u_dayTextureHue: function() {
            return this.properties.dayTextureHue
        },
        u_dayTextureSaturation: function() {
            return this.properties.dayTextureSaturation
        },
        u_dayTextureOneOverGamma: function() {
            return this.properties.dayTextureOneOverGamma
        },
        u_dayIntensity: function() {
            return this.properties.dayIntensity
        },
        u_southAndNorthLatitude: function() {
            return this.properties.southAndNorthLatitude
        },
        u_southMercatorYAndOneOverHeight: function() {
            return this.properties.southMercatorYAndOneOverHeight
        },
        u_waterMask: function() {
            return this.properties.waterMask
        },
        u_waterMaskTranslationAndScale: function() {
            return this.properties.waterMaskTranslationAndScale
        },
        u_minMaxHeight: function() {
            return this.properties.minMaxHeight
        },
        u_scaleAndBias: function() {
            return this.properties.scaleAndBias
        },
        u_dayTextureSplit: function() {
            return this.properties.dayTextureSplit
        },
        u_dayTextureCutoutRectangles: function() {
            return this.properties.dayTextureCutoutRectangles
        },
        u_clippingPlanes: function() {
            var n = t._clippingPlanes;
            return c(n) && c(n.texture) ? n.texture : e.context.defaultTexture
        },
        u_cartographicLimitRectangle: function() {
            return this.properties.localizedCartographicLimitRectangle
        },
        u_clippingPlanesMatrix: function() {
            var n = t._clippingPlanes,
                i = c(n) ? y.multiply(e.context.uniformState.view, n.modelMatrix, rT) : y.IDENTITY;
            return y.inverseTranspose(i, nT)
        },
        u_clippingPlanesEdgeStyle: function() {
            var n = this.properties.clippingPlanesEdgeColor;
            return n.alpha = this.properties.clippingPlanesEdgeWidth, n
        },
        u_minimumBrightness: function() {
            return e.fog.minimumBrightness
        },
        u_hsbShift: function() {
            return this.properties.hsbShift
        },
        u_colorsToAlpha: function() {
            return this.properties.colorsToAlpha
        },
        u_frontFaceAlphaByDistance: function() {
            return this.properties.frontFaceAlphaByDistance
        },
        u_backFaceAlphaByDistance: function() {
            return this.properties.backFaceAlphaByDistance
        },
        u_translucencyRectangle: function() {
            return this.properties.localizedTranslucencyRectangle
        },
        u_undergroundColor: function() {
            return this.properties.undergroundColor
        },
        u_undergroundColorAlphaByDistance: function() {
            return this.properties.undergroundColorAlphaByDistance
        },
        properties: {
            initialColor: new B(0, 0, .5, 1),
            fillHighlightColor: new H(0, 0, 0, 0),
            zoomedOutOceanSpecularIntensity: .5,
            oceanNormalMap: void 0,
            lightingFadeDistance: new R(65e5, 9e6),
            nightFadeDistance: new R(1e7, 4e7),
            hsbShift: new u,
            center3D: void 0,
            rtc: new u,
            modifiedModelView: new y,
            tileRectangle: new B,
            dayTextures: [],
            dayTextureTranslationAndScale: [],
            dayTextureTexCoordsRectangle: [],
            dayTextureUseWebMercatorT: [],
            dayTextureAlpha: [],
            dayTextureNightAlpha: [],
            dayTextureDayAlpha: [],
            dayTextureBrightness: [],
            dayTextureContrast: [],
            dayTextureHue: [],
            dayTextureSaturation: [],
            dayTextureOneOverGamma: [],
            dayTextureSplit: [],
            dayTextureCutoutRectangles: [],
            dayIntensity: 0,
            colorsToAlpha: [],
            southAndNorthLatitude: new R,
            southMercatorYAndOneOverHeight: new R,
            waterMask: void 0,
            waterMaskTranslationAndScale: new B,
            minMaxHeight: new R,
            scaleAndBias: new y,
            clippingPlanesEdgeColor: H.clone(H.WHITE),
            clippingPlanesEdgeWidth: 0,
            localizedCartographicLimitRectangle: new B,
            frontFaceAlphaByDistance: new B,
            backFaceAlphaByDistance: new B,
            localizedTranslucencyRectangle: new B,
            undergroundColor: H.clone(H.TRANSPARENT),
            undergroundColorAlphaByDistance: new B
        }
    };
    return c(t.materialUniformMap) ? vr(r, t.materialUniformMap) : r
}
var iT = new B(0, 0, 0, 0),
    aT = {
        frameState: void 0,
        surfaceTile: void 0,
        numberOfDayTextures: void 0,
        applyBrightness: void 0,
        applyContrast: void 0,
        applyHue: void 0,
        applySaturation: void 0,
        applyGamma: void 0,
        applyAlpha: void 0,
        applyDayNightAlpha: void 0,
        applySplit: void 0,
        showReflectiveOcean: void 0,
        showOceanWaves: void 0,
        enableLighting: void 0,
        dynamicAtmosphereLighting: void 0,
        dynamicAtmosphereLightingFromSun: void 0,
        showGroundAtmosphere: void 0,
        perFragmentGroundAtmosphere: void 0,
        hasVertexNormals: void 0,
        useWebMercatorProjection: void 0,
        enableFog: void 0,
        enableClippingPlanes: void 0,
        clippingPlanes: void 0,
        clippedByBoundaries: void 0,
        hasImageryLayerCutout: void 0,
        colorCorrect: void 0,
        colorToAlpha: void 0
    },
    oT = H.TRANSPARENT,
    sT = new dt;

function uT(e, t, r) {
    var n = t.data;
    c(n.vertexArray) || (n.fill === void 0 && (n.fill = new pi(t)), n.fill.update(e, r));
    var i = r.creditDisplay,
        a = n.terrainData;
    if (c(a) && c(a.credits))
        for (var o = a.credits, s = 0, h = o.length; s < h; ++s) i.addCredit(o[s]);
    var f = oe.maximumTextureImageUnits,
        l = n.waterMaskTexture,
        d = n.waterMaskTranslationAndScale;
    !c(l) && c(n.fill) && (l = n.fill.waterMaskTexture, d = n.fill.waterMaskTranslationAndScale);
    var m = r.cameraUnderground,
        _ = r.globeTranslucencyState,
        g = _.translucent,
        T = _.frontFaceAlphaByDistance,
        C = _.backFaceAlphaByDistance,
        A = _.rectangle,
        S = v(e.undergroundColor, oT),
        x = v(e.undergroundColorAlphaByDistance, sT),
        I = _l(e, r) && r.mode === Q.SCENE3D && S.alpha > 0 && (x.nearValue > 0 || x.farValue > 0),
        O = e.hasWaterMask && c(l),
        F = e.oceanNormalMap,
        b = O && c(F),
        N = e.terrainProvider.ready && e.terrainProvider.hasVertexNormals,
        D = r.fog.enabled && !m,
        V = e.showGroundAtmosphere && r.mode === Q.SCENE3D,
        M = ao.castShadows(e.shadows) && !g,
        W = ao.receiveShadows(e.shadows) && !g,
        G = e.hueShift,
        U = e.saturationShift,
        q = e.brightnessShift,
        Y = !(p.equalsEpsilon(G, 0, p.EPSILON7) && p.equalsEpsilon(U, 0, p.EPSILON7) && p.equalsEpsilon(q, 0, p.EPSILON7)),
        j = !1;
    if (V) {
        var Z = u.magnitude(r.camera.positionWC),
            le = e.nightFadeOutDistance;
        j = Z > le
    }
    O && --f, b && --f, c(r.shadowState) && r.shadowState.shadowsEnabled && --f, c(e.clippingPlanes) && e.clippingPlanes.enabled && --f, f -= _.numberOfTextureUniforms;
    var ne = n.renderedMesh,
        he = ne.center,
        De = ne.encoding,
        fe = Yg,
        at = 0,
        qe = 0,
        Fe = 0,
        Te = 0,
        rt = !1;
    if (r.mode !== Q.SCENE3D) {
        var be = r.mapProjection,
            te = be.project(L.southwest(t.rectangle), Kg),
            vt = be.project(L.northeast(t.rectangle), Qg);
        if (fe.x = te.x, fe.y = te.y, fe.z = vt.x, fe.w = vt.y, r.mode !== Q.MORPHING && (he = Zg, he.x = 0, he.y = (fe.z + fe.x) * .5, he.z = (fe.w + fe.y) * .5, fe.x -= he.y, fe.y -= he.z, fe.z -= he.y, fe.w -= he.z), r.mode === Q.SCENE2D && De.quantization === ir.BITS12) {
            var Ee = 1 / (Math.pow(2, 12) - 1) * .5,
                sr = (fe.z - fe.x) * Ee,
                Gt = (fe.w - fe.y) * Ee;
            fe.x -= sr, fe.y -= Gt, fe.z += sr, fe.w += Gt
        }
        be instanceof Ve && (at = t.rectangle.south, qe = t.rectangle.north, Fe = Ve.geodeticLatitudeToMercatorAngle(at), Te = 1 / (Ve.geodeticLatitudeToMercatorAngle(qe) - Fe), rt = !0)
    }
    var ve = aT;
    ve.frameState = r, ve.surfaceTile = n, ve.showReflectiveOcean = O, ve.showOceanWaves = b, ve.enableLighting = e.enableLighting, ve.dynamicAtmosphereLighting = e.dynamicAtmosphereLighting, ve.dynamicAtmosphereLightingFromSun = e.dynamicAtmosphereLightingFromSun, ve.showGroundAtmosphere = V, ve.perFragmentGroundAtmosphere = j, ve.hasVertexNormals = N, ve.useWebMercatorProjection = rt, ve.clippedByBoundaries = n.clippedByBoundaries;
    var Zr = n.imagery,
        Cr = 0,
        br = Zr.length,
        sn = e.showSkirts && !m && !g,
        Qt = e.backFaceCulling && !m && !g,
        bt = Qt ? e._renderState : e._disableCullingRenderState,
        ur = Qt ? e._blendRenderState : e._disableCullingBlendRenderState,
        qn = bt,
        Cn = e._firstPassInitialColor;
    r.context;
    var kn = e._materialUniformMap !== e.materialUniformMap;
    if (kn) {
        e._materialUniformMap = e.materialUniformMap;
        for (var ra = e._drawCommands.length, An = 0; An < ra; ++An) e._uniformMaps[An] = Hc(r, e)
    }
    do {
        var Ae = 0,
            Ue, Ar;
        e._drawCommands.length <= e._usedDrawCommands ? (Ue = new Sr, Ue.owner = t, Ue.cull = !1, Ue.boundingVolume = new ae, Ue.orientedBoundingBox = void 0, Ar = Hc(r, e), e._drawCommands.push(Ue), e._uniformMaps.push(Ar)) : (Ue = e._drawCommands[e._usedDrawCommands], Ar = e._uniformMaps[e._usedDrawCommands]), Ue.owner = t, ++e._usedDrawCommands;
        var J = Ar.properties;
        B.clone(Cn, J.initialColor), J.oceanNormalMap = F, J.lightingFadeDistance.x = e.lightingFadeOutDistance, J.lightingFadeDistance.y = e.lightingFadeInDistance, J.nightFadeDistance.x = e.nightFadeOutDistance, J.nightFadeDistance.y = e.nightFadeInDistance, J.zoomedOutOceanSpecularIntensity = e.zoomedOutOceanSpecularIntensity;
        var xt = m ? C : T,
            Ht = m ? T : C;
        c(xt) && (B.fromElements(xt.near, xt.nearValue, xt.far, xt.farValue, J.frontFaceAlphaByDistance), B.fromElements(Ht.near, Ht.nearValue, Ht.far, Ht.farValue, J.backFaceAlphaByDistance)), B.fromElements(x.near, x.nearValue, x.far, x.farValue, J.undergroundColorAlphaByDistance), H.clone(S, J.undergroundColor);
        var Yn = !c(n.vertexArray) && c(e.fillHighlightColor) && e.fillHighlightColor.alpha > 0;
        Yn && H.clone(e.fillHighlightColor, J.fillHighlightColor), J.center3D = ne.center, u.clone(he, J.rtc), B.clone(fe, J.tileRectangle), J.southAndNorthLatitude.x = at, J.southAndNorthLatitude.y = qe, J.southMercatorYAndOneOverHeight.x = Fe, J.southMercatorYAndOneOverHeight.y = Te;
        var Wt = jg,
            un = $a(t.rectangle, e.cartographicLimitRectangle),
            Kr = Xg,
            jn = $a(t.rectangle, A);
        u.fromElements(G, U, q, J.hsbShift);
        var pt = t.rectangle,
            Lr = 1 / pt.width,
            Fr = 1 / pt.height;
        Wt.x = (un.west - pt.west) * Lr, Wt.y = (un.south - pt.south) * Fr, Wt.z = (un.east - pt.west) * Lr, Wt.w = (un.north - pt.south) * Fr, B.clone(Wt, J.localizedCartographicLimitRectangle), Kr.x = (jn.west - pt.west) * Lr, Kr.y = (jn.south - pt.south) * Fr, Kr.z = (jn.east - pt.west) * Lr, Kr.w = (jn.north - pt.south) * Fr, B.clone(Kr, J.localizedTranslucencyRectangle);
        var Ti = D && p.fog(t._distance, r.fog.density) > p.EPSILON3;
        Y = Y && (Ti || V);
        for (var Xn = !1, yi = !1, wn = !1, Ei = !1, Ci = !1, Ai = !1, wr = !1, Zn = !1, wi = !1, Ri = !1; Ae < f && Cr < br;) {
            var cr = Zr[Cr],
                Br = cr.readyImagery;
            if (++Cr, !(!c(Br) || Br.imageryLayer.alpha === 0)) {
                var na = cr.useWebMercatorT ? Br.textureWebMercator : Br.texture,
                    Qe = Br.imageryLayer;
                c(cr.textureTranslationAndScale) || (cr.textureTranslationAndScale = Qe._calculateTextureTranslationAndScale(t, cr)), J.dayTextures[Ae] = na, J.dayTextureTranslationAndScale[Ae] = cr.textureTranslationAndScale, J.dayTextureTexCoordsRectangle[Ae] = cr.textureCoordinateRectangle, J.dayTextureUseWebMercatorT[Ae] = cr.useWebMercatorT, J.dayTextureAlpha[Ae] = Qe.alpha, Ai = Ai || J.dayTextureAlpha[Ae] !== 1, J.dayTextureNightAlpha[Ae] = Qe.nightAlpha, wr = wr || J.dayTextureNightAlpha[Ae] !== 1, J.dayTextureDayAlpha[Ae] = Qe.dayAlpha, wr = wr || J.dayTextureDayAlpha[Ae] !== 1, J.dayTextureBrightness[Ae] = Qe.brightness, Xn = Xn || J.dayTextureBrightness[Ae] !== _e.DEFAULT_BRIGHTNESS, J.dayTextureContrast[Ae] = Qe.contrast, yi = yi || J.dayTextureContrast[Ae] !== _e.DEFAULT_CONTRAST, J.dayTextureHue[Ae] = Qe.hue, wn = wn || J.dayTextureHue[Ae] !== _e.DEFAULT_HUE, J.dayTextureSaturation[Ae] = Qe.saturation, Ei = Ei || J.dayTextureSaturation[Ae] !== _e.DEFAULT_SATURATION, J.dayTextureOneOverGamma[Ae] = 1 / Qe.gamma, Ci = Ci || J.dayTextureOneOverGamma[Ae] !== 1 / _e.DEFAULT_GAMMA, J.dayTextureSplit[Ae] = Qe.splitDirection, Zn = Zn || J.dayTextureSplit[Ae] !== 0;
                var Rn = J.dayTextureCutoutRectangles[Ae];
                if (c(Rn) || (Rn = J.dayTextureCutoutRectangles[Ae] = new B), B.clone(B.ZERO, Rn), c(Qe.cutoutRectangle)) {
                    var xi = $a(pt, Qe.cutoutRectangle),
                        ql = L.simpleIntersection(xi, pt, dl);
                    wi = c(ql) || wi, Rn.x = (xi.west - pt.west) * Lr, Rn.y = (xi.south - pt.south) * Fr, Rn.z = (xi.east - pt.west) * Lr, Rn.w = (xi.north - pt.south) * Fr
                }
                var xn = J.colorsToAlpha[Ae];
                c(xn) || (xn = J.colorsToAlpha[Ae] = new B);
                var wu = c(Qe.colorToAlpha) && Qe.colorToAlphaThreshold > 0;
                if (Ri = Ri || wu, wu) {
                    var Oo = Qe.colorToAlpha;
                    xn.x = Oo.red, xn.y = Oo.green, xn.z = Oo.blue, xn.w = Qe.colorToAlphaThreshold
                } else xn.w = -1;
                if (c(Br.credits))
                    for (var Ru = Br.credits, Po = 0, kl = Ru.length; Po < kl; ++Po) i.addCredit(Ru[Po]);
                ++Ae
            }
        }
        J.dayTextures.length = Ae, J.waterMask = l, B.clone(d, J.waterMaskTranslationAndScale), J.minMaxHeight.x = De.minimumHeight, J.minMaxHeight.y = De.maximumHeight, y.clone(De.matrix, J.scaleAndBias);
        var Si = e._clippingPlanes,
            xu = c(Si) && Si.enabled && t.isClipped;
        xu && (J.clippingPlanesEdgeColor = H.clone(Si.edgeColor, J.clippingPlanesEdgeColor), J.clippingPlanesEdgeWidth = Si.edgeWidth), ve.numberOfDayTextures = Ae, ve.applyBrightness = Xn, ve.applyContrast = yi, ve.applyHue = wn, ve.applySaturation = Ei, ve.applyGamma = Ci, ve.applyAlpha = Ai, ve.applyDayNightAlpha = wr, ve.applySplit = Zn, ve.enableFog = Ti, ve.enableClippingPlanes = xu, ve.clippingPlanes = Si, ve.hasImageryLayerCutout = wi, ve.colorCorrect = Y, ve.highlightFillTile = Yn, ve.colorToAlpha = Ri, ve.showUndergroundColor = I, ve.translucent = g;
        var Su = n.renderedMesh.indices.length;
        sn || (Su = n.renderedMesh.indexCountWithoutSkirts), Ue.shaderProgram = e._surfaceShaderSet.getShaderProgram(ve), Ue.castShadows = M, Ue.receiveShadows = W, Ue.renderState = qn, Ue.primitiveType = zn.TRIANGLES, Ue.vertexArray = n.vertexArray || n.fill.vertexArray, Ue.count = Su, Ue.uniformMap = Ar, Ue.pass = ue.GLOBE;
        var Qr = Ue.boundingVolume,
            Yl = Ue.orientedBoundingBox;
        if (r.mode !== Q.SCENE3D) {
            var Iu = n.tileBoundingRegion;
            ae.fromRectangleWithHeights2D(t.rectangle, r.mapProjection, Iu.minimumHeight, Iu.maximumHeight, Qr), u.fromElements(Qr.center.z, Qr.center.x, Qr.center.y, Qr.center), r.mode === Q.MORPHING && (Qr = ae.union(ne.boundingSphere3D, Qr, Qr))
        } else Ue.boundingVolume = ae.clone(ne.boundingSphere3D, Qr), Ue.orientedBoundingBox = xe.clone(n.orientedBoundingBox, Yl);
        Ue.dirty = !0, g && _.updateDerivedCommands(Ue, r), ll(Ue, r), qn = ur, Cn = iT
    } while (Cr < br)
}

function ml() {
    this._enabled = !1, this._frontFaceAlpha = 1, this._frontFaceAlphaByDistance = void 0, this._backFaceAlpha = 1, this._backFaceAlphaByDistance = void 0, this._rectangle = L.clone(L.MAX_VALUE)
}
Object.defineProperties(ml.prototype, {
    enabled: {
        get: function() {
            return this._enabled
        },
        set: function(e) {
            this._enabled = e
        }
    },
    frontFaceAlpha: {
        get: function() {
            return this._frontFaceAlpha
        },
        set: function(e) {
            this._frontFaceAlpha = e
        }
    },
    frontFaceAlphaByDistance: {
        get: function() {
            return this._frontFaceAlphaByDistance
        },
        set: function(e) {
            this._frontFaceAlphaByDistance = dt.clone(e, this._frontFaceAlphaByDistance)
        }
    },
    backFaceAlpha: {
        get: function() {
            return this._backFaceAlpha
        },
        set: function(e) {
            this._backFaceAlpha = e
        }
    },
    backFaceAlphaByDistance: {
        get: function() {
            return this._backFaceAlphaByDistance
        },
        set: function(e) {
            this._backFaceAlphaByDistance = dt.clone(e, this._backFaceAlphaByDistance)
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        },
        set: function(e) {
            c(e) || (e = L.clone(L.MAX_VALUE)), L.clone(e, this._rectangle)
        }
    }
});

function mt() {
    this._layers = [], this.layerAdded = new ze, this.layerRemoved = new ze, this.layerMoved = new ze, this.layerShownOrHidden = new ze
}
Object.defineProperties(mt.prototype, {
    length: {
        get: function() {
            return this._layers.length
        }
    }
});
mt.prototype.add = function(e, t) {
    var r = c(t);
    r ? this._layers.splice(t, 0, e) : (t = this._layers.length, this._layers.push(e)), this._update(), this.layerAdded.raiseEvent(e, t)
};
mt.prototype.addImageryProvider = function(e, t) {
    var r = new _e(e);
    return this.add(r, t), r
};
mt.prototype.remove = function(e, t) {
    t = v(t, !0);
    var r = this._layers.indexOf(e);
    return r !== -1 ? (this._layers.splice(r, 1), this._update(), this.layerRemoved.raiseEvent(e, r), t && e.destroy(), !0) : !1
};
mt.prototype.removeAll = function(e) {
    e = v(e, !0);
    for (var t = this._layers, r = 0, n = t.length; r < n; r++) {
        var i = t[r];
        this.layerRemoved.raiseEvent(i, r), e && i.destroy()
    }
    this._layers = []
};
mt.prototype.contains = function(e) {
    return this.indexOf(e) !== -1
};
mt.prototype.indexOf = function(e) {
    return this._layers.indexOf(e)
};
mt.prototype.get = function(e) {
    return this._layers[e]
};

function Co(e, t) {
    var r = e.indexOf(t);
    return r
}

function vl(e, t, r) {
    var n = e._layers;
    if (t = p.clamp(t, 0, n.length - 1), r = p.clamp(r, 0, n.length - 1), t !== r) {
        var i = n[t];
        n[t] = n[r], n[r] = i, e._update(), e.layerMoved.raiseEvent(i, r, t)
    }
}
mt.prototype.raise = function(e) {
    var t = Co(this._layers, e);
    vl(this, t, t + 1)
};
mt.prototype.lower = function(e) {
    var t = Co(this._layers, e);
    vl(this, t, t - 1)
};
mt.prototype.raiseToTop = function(e) {
    var t = Co(this._layers, e);
    t !== this._layers.length - 1 && (this._layers.splice(t, 1), this._layers.push(e), this._update(), this.layerMoved.raiseEvent(e, this._layers.length - 1, t))
};
mt.prototype.lowerToBottom = function(e) {
    var t = Co(this._layers, e);
    t !== 0 && (this._layers.splice(t, 1), this._layers.splice(0, 0, e), this._update(), this.layerMoved.raiseEvent(e, 0, t))
};
var cT = new L;
mt.prototype.pickImageryLayerFeatures = function(e, t) {
    var r = t.globe.pick(e, t);
    if (c(r)) {
        for (var n = t.globe.ellipsoid.cartesianToCartographic(r), i = t.globe._surface._tilesToRender, a, o = 0; !c(a) && o < i.length; ++o) {
            var s = i[o];
            L.contains(s.rectangle, n) && (a = s)
        }
        if (c(a)) {
            for (var h = a.data.imagery, f = [], l = [], d = h.length - 1; d >= 0; --d) {
                var m = h[d],
                    _ = m.readyImagery;
                if (c(_)) {
                    var g = _.imageryLayer.imageryProvider;
                    if (c(g.pickFeatures) && L.contains(_.rectangle, n)) {
                        var T = cT,
                            C = 1 / 1024;
                        if (T.west = p.lerp(a.rectangle.west, a.rectangle.east, m.textureCoordinateRectangle.x - C), T.east = p.lerp(a.rectangle.west, a.rectangle.east, m.textureCoordinateRectangle.z + C), T.south = p.lerp(a.rectangle.south, a.rectangle.north, m.textureCoordinateRectangle.y - C), T.north = p.lerp(a.rectangle.south, a.rectangle.north, m.textureCoordinateRectangle.w + C), !!L.contains(T, n)) {
                            var A = g.pickFeatures(_.x, _.y, _.level, n.longitude, n.latitude);
                            c(A) && (f.push(A), l.push(_.imageryLayer))
                        }
                    }
                }
            }
            if (f.length !== 0) return ge.all(f, function(S) {
                for (var x = [], I = 0; I < S.length; ++I) {
                    var O = S[I],
                        F = l[I];
                    if (c(O) && O.length > 0)
                        for (var b = 0; b < O.length; ++b) {
                            var N = O[b];
                            N.imageryLayer = F, c(N.position) || (N.position = n), x.push(N)
                        }
                }
                return x
            })
        }
    }
};
mt.prototype.queueReprojectionCommands = function(e) {
    for (var t = this._layers, r = 0, n = t.length; r < n; ++r) t[r].queueReprojectionCommands(e)
};
mt.prototype.cancelReprojections = function() {
    for (var e = this._layers, t = 0, r = e.length; t < r; ++t) e[t].cancelReprojections()
};
mt.prototype.isDestroyed = function() {
    return !1
};
mt.prototype.destroy = function() {
    return this.removeAll(!0), Je(this)
};
mt.prototype._update = function() {
    var e = !0,
        t = this._layers,
        r, n, i, a;
    for (i = 0, a = t.length; i < a; ++i) n = t[i], n._layerIndex = i, n.show ? (n._isBaseLayer = e, e = !1) : n._isBaseLayer = !1, n.show !== n._show && (c(n._show) && (c(r) || (r = []), r.push(n)), n._show = n.show);
    if (c(r))
        for (i = 0, a = r.length; i < a; ++i) n = r[i], this.layerShownOrHidden.raiseEvent(n, n._layerIndex, n.show)
};

function pl(e) {
    this._ellipsoid = new Nr(e.ellipsoid, u.ZERO)
}
Object.defineProperties(pl.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    }
});

function Ut(e) {
    this._tilingScheme = e.tilingScheme, this._x = e.x, this._y = e.y, this._level = e.level, this._parent = e.parent, this._rectangle = this._tilingScheme.tileXYToRectangle(this._x, this._y, this._level), this._southwestChild = void 0, this._southeastChild = void 0, this._northwestChild = void 0, this._northeastChild = void 0, this.replacementPrevious = void 0, this.replacementNext = void 0, this._distance = 0, this._loadPriority = 0, this._customData = [], this._frameUpdated = void 0, this._lastSelectionResult = me.NONE, this._lastSelectionResultFrame = void 0, this._loadedCallbacks = {}, this.state = pr.START, this.renderable = !1, this.upsampledFromParent = !1, this.data = void 0
}
Ut.createLevelZeroTiles = function(e) {
    for (var t = e.getNumberOfXTilesAtLevel(0), r = e.getNumberOfYTilesAtLevel(0), n = new Array(t * r), i = 0, a = 0; a < r; ++a)
        for (var o = 0; o < t; ++o) n[i++] = new Ut({
            tilingScheme: e,
            x: o,
            y: a,
            level: 0
        });
    return n
};
Ut.prototype._updateCustomData = function(e, t, r) {
    var n = this.customData,
        i, a, o;
    if (c(t) && c(r)) {
        for (n = n.filter(function(f) {
                return r.indexOf(f) === -1
            }), this._customData = n, o = this._rectangle, i = 0; i < t.length; ++i) a = t[i], L.contains(o, a.positionCartographic) && n.push(a);
        this._frameUpdated = e
    } else {
        var s = this._parent;
        if (c(s) && this._frameUpdated !== s._frameUpdated) {
            n.length = 0, o = this._rectangle;
            var h = s.customData;
            for (i = 0; i < h.length; ++i) a = h[i], L.contains(o, a.positionCartographic) && n.push(a);
            this._frameUpdated = s._frameUpdated
        }
    }
};
Object.defineProperties(Ut.prototype, {
    tilingScheme: {
        get: function() {
            return this._tilingScheme
        }
    },
    x: {
        get: function() {
            return this._x
        }
    },
    y: {
        get: function() {
            return this._y
        }
    },
    level: {
        get: function() {
            return this._level
        }
    },
    parent: {
        get: function() {
            return this._parent
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    },
    children: {
        get: function() {
            return [this.northwestChild, this.northeastChild, this.southwestChild, this.southeastChild]
        }
    },
    southwestChild: {
        get: function() {
            return c(this._southwestChild) || (this._southwestChild = new Ut({
                tilingScheme: this.tilingScheme,
                x: this.x * 2,
                y: this.y * 2 + 1,
                level: this.level + 1,
                parent: this
            })), this._southwestChild
        }
    },
    southeastChild: {
        get: function() {
            return c(this._southeastChild) || (this._southeastChild = new Ut({
                tilingScheme: this.tilingScheme,
                x: this.x * 2 + 1,
                y: this.y * 2 + 1,
                level: this.level + 1,
                parent: this
            })), this._southeastChild
        }
    },
    northwestChild: {
        get: function() {
            return c(this._northwestChild) || (this._northwestChild = new Ut({
                tilingScheme: this.tilingScheme,
                x: this.x * 2,
                y: this.y * 2,
                level: this.level + 1,
                parent: this
            })), this._northwestChild
        }
    },
    northeastChild: {
        get: function() {
            return c(this._northeastChild) || (this._northeastChild = new Ut({
                tilingScheme: this.tilingScheme,
                x: this.x * 2 + 1,
                y: this.y * 2,
                level: this.level + 1,
                parent: this
            })), this._northeastChild
        }
    },
    customData: {
        get: function() {
            return this._customData
        }
    },
    needsLoading: {
        get: function() {
            return this.state < pr.DONE
        }
    },
    eligibleForUnloading: {
        get: function() {
            var e = !0;
            return c(this.data) && (e = this.data.eligibleForUnloading, c(e) || (e = !0)), e
        }
    }
});
Ut.prototype.findLevelZeroTile = function(e, t, r) {
    var n = this.tilingScheme.getNumberOfXTilesAtLevel(0);
    if (t < 0 ? t += n : t >= n && (t -= n), !(r < 0 || r >= this.tilingScheme.getNumberOfYTilesAtLevel(0))) return e.filter(function(i) {
        return i.x === t && i.y === r
    })[0]
};
Ut.prototype.findTileToWest = function(e) {
    var t = this.parent;
    if (t === void 0) return this.findLevelZeroTile(e, this.x - 1, this.y);
    if (t.southeastChild === this) return t.southwestChild;
    if (t.northeastChild === this) return t.northwestChild;
    var r = t.findTileToWest(e);
    if (r !== void 0) return t.southwestChild === this ? r.southeastChild : r.northeastChild
};
Ut.prototype.findTileToEast = function(e) {
    var t = this.parent;
    if (t === void 0) return this.findLevelZeroTile(e, this.x + 1, this.y);
    if (t.southwestChild === this) return t.southeastChild;
    if (t.northwestChild === this) return t.northeastChild;
    var r = t.findTileToEast(e);
    if (r !== void 0) return t.southeastChild === this ? r.southwestChild : r.northwestChild
};
Ut.prototype.findTileToSouth = function(e) {
    var t = this.parent;
    if (t === void 0) return this.findLevelZeroTile(e, this.x, this.y + 1);
    if (t.northwestChild === this) return t.southwestChild;
    if (t.northeastChild === this) return t.southeastChild;
    var r = t.findTileToSouth(e);
    if (r !== void 0) return t.southwestChild === this ? r.northwestChild : r.northeastChild
};
Ut.prototype.findTileToNorth = function(e) {
    var t = this.parent;
    if (t === void 0) return this.findLevelZeroTile(e, this.x, this.y - 1);
    if (t.southwestChild === this) return t.northwestChild;
    if (t.southeastChild === this) return t.northeastChild;
    var r = t.findTileToNorth(e);
    if (r !== void 0) return t.northwestChild === this ? r.southwestChild : r.southeastChild
};
Ut.prototype.freeResources = function() {
    this.state = pr.START, this.renderable = !1, this.upsampledFromParent = !1, c(this.data) && c(this.data.freeResources) && this.data.freeResources(), Ma(this._southwestChild), this._southwestChild = void 0, Ma(this._southeastChild), this._southeastChild = void 0, Ma(this._northwestChild), this._northwestChild = void 0, Ma(this._northeastChild), this._northeastChild = void 0
};

function Ma(e) {
    c(e) && e.freeResources()
}

function Ao() {
    this.head = void 0, this.tail = void 0, this.count = 0, this._lastBeforeStartOfFrame = void 0
}
Ao.prototype.markStartOfRenderFrame = function() {
    this._lastBeforeStartOfFrame = this.head
};
Ao.prototype.trimTiles = function(e) {
    for (var t = this.tail, r = !0; r && c(this._lastBeforeStartOfFrame) && this.count > e && c(t);) {
        r = t !== this._lastBeforeStartOfFrame;
        var n = t.replacementPrevious;
        t.eligibleForUnloading && (t.freeResources(), gl(this, t)), t = n
    }
};

function gl(e, t) {
    var r = t.replacementPrevious,
        n = t.replacementNext;
    t === e._lastBeforeStartOfFrame && (e._lastBeforeStartOfFrame = n), t === e.head ? e.head = n : r.replacementNext = n, t === e.tail ? e.tail = r : n.replacementPrevious = r, t.replacementPrevious = void 0, t.replacementNext = void 0, --e.count
}
Ao.prototype.markTileRendered = function(e) {
    var t = this.head;
    if (t === e) {
        e === this._lastBeforeStartOfFrame && (this._lastBeforeStartOfFrame = e.replacementNext);
        return
    }
    if (++this.count, !c(t)) {
        e.replacementPrevious = void 0, e.replacementNext = void 0, this.head = e, this.tail = e;
        return
    }(c(e.replacementPrevious) || c(e.replacementNext)) && gl(this, e), e.replacementPrevious = void 0, e.replacementNext = t, t.replacementPrevious = e, this.head = e
};

function Tr(e) {
    this._tileProvider = e.tileProvider, this._tileProvider.quadtree = this, this._debug = {
        enableDebugOutput: !1,
        maxDepth: 0,
        maxDepthVisited: 0,
        tilesVisited: 0,
        tilesCulled: 0,
        tilesRendered: 0,
        tilesWaitingForChildren: 0,
        lastMaxDepth: -1,
        lastMaxDepthVisited: -1,
        lastTilesVisited: -1,
        lastTilesCulled: -1,
        lastTilesRendered: -1,
        lastTilesWaitingForChildren: -1,
        suspendLodUpdate: !1
    };
    var t = this._tileProvider.tilingScheme,
        r = t.ellipsoid;
    this._tilesToRender = [], this._tileLoadQueueHigh = [], this._tileLoadQueueMedium = [], this._tileLoadQueueLow = [], this._tileReplacementQueue = new Ao, this._levelZeroTiles = void 0, this._loadQueueTimeSlice = 5, this._tilesInvalidated = !1, this._addHeightCallbacks = [], this._removeHeightCallbacks = [], this._tileToUpdateHeights = [], this._lastTileIndex = 0, this._updateHeightsTimeSlice = 2, this._cameraPositionCartographic = void 0, this._cameraReferenceFrameOriginCartographic = void 0, this.maximumScreenSpaceError = v(e.maximumScreenSpaceError, 2), this.tileCacheSize = v(e.tileCacheSize, 100), this.loadingDescendantLimit = 20, this.preloadAncestors = !0, this.preloadSiblings = !1, this._occluders = new pl({
        ellipsoid: r
    }), this._tileLoadProgressEvent = new ze, this._lastTileLoadQueueLength = 0, this._lastSelectionFrameNumber = void 0
}
Object.defineProperties(Tr.prototype, {
    tileProvider: {
        get: function() {
            return this._tileProvider
        }
    },
    tileLoadProgressEvent: {
        get: function() {
            return this._tileLoadProgressEvent
        }
    },
    occluders: {
        get: function() {
            return this._occluders
        }
    }
});
Tr.prototype.invalidateAllTiles = function() {
    this._tilesInvalidated = !0
};

function hT(e) {
    var t = e._tileReplacementQueue;
    t.head = void 0, t.tail = void 0, t.count = 0, Tl(e);
    var r = e._levelZeroTiles;
    if (c(r))
        for (var n = 0; n < r.length; ++n) {
            for (var i = r[n], a = i.customData, o = a.length, s = 0; s < o; ++s) {
                var h = a[s];
                h.level = 0, e._addHeightCallbacks.push(h)
            }
            r[n].freeResources()
        }
    e._levelZeroTiles = void 0, e._tileProvider.cancelReprojections()
}
Tr.prototype.forEachLoadedTile = function(e) {
    for (var t = this._tileReplacementQueue.head; c(t);) t.state !== pr.START && e(t), t = t.replacementNext
};
Tr.prototype.forEachRenderedTile = function(e) {
    for (var t = this._tilesToRender, r = 0, n = t.length; r < n; ++r) e(t[r])
};
Tr.prototype.updateHeight = function(e, t) {
    var r = this,
        n = {
            positionOnEllipsoidSurface: void 0,
            positionCartographic: e,
            level: -1,
            callback: t
        };
    return n.removeFunc = function() {
        for (var i = r._addHeightCallbacks, a = i.length, o = 0; o < a; ++o)
            if (i[o] === n) {
                i.splice(o, 1);
                break
            } r._removeHeightCallbacks.push(n)
    }, r._addHeightCallbacks.push(n), n.removeFunc
};
Tr.prototype.update = function(e) {
    c(this._tileProvider.update) && this._tileProvider.update(e)
};

function Tl(e) {
    var t = e._debug;
    t.maxDepth = 0, t.maxDepthVisited = 0, t.tilesVisited = 0, t.tilesCulled = 0, t.tilesRendered = 0, t.tilesWaitingForChildren = 0, e._tileLoadQueueHigh.length = 0, e._tileLoadQueueMedium.length = 0, e._tileLoadQueueLow.length = 0
}
Tr.prototype.beginFrame = function(e) {
    var t = e.passes;
    t.render && (this._tilesInvalidated && (hT(this), this._tilesInvalidated = !1), this._tileProvider.initialize(e), Tl(this), !this._debug.suspendLodUpdate && this._tileReplacementQueue.markStartOfRenderFrame())
};
Tr.prototype.render = function(e) {
    var t = e.passes,
        r = this._tileProvider;
    t.render && (r.beginUpdate(e), _T(this, e), wT(this, e), r.endUpdate(e)), t.pick && this._tilesToRender.length > 0 && r.updateForPick(e)
};

function fT(e, t) {
    var r = e._tileLoadQueueHigh.length + e._tileLoadQueueMedium.length + e._tileLoadQueueLow.length;
    (r !== e._lastTileLoadQueueLength || e._tilesInvalidated) && (t.afterRender.push(ze.prototype.raiseEvent.bind(e._tileLoadProgressEvent, r)), e._lastTileLoadQueueLength = r);
    var n = e._debug;
    n.enableDebugOutput && !n.suspendLodUpdate && (n.maxDepth = e._tilesToRender.reduce(function(i, a) {
        return Math.max(i, a.level)
    }, -1), n.tilesRendered = e._tilesToRender.length, (n.tilesVisited !== n.lastTilesVisited || n.tilesRendered !== n.lastTilesRendered || n.tilesCulled !== n.lastTilesCulled || n.maxDepth !== n.lastMaxDepth || n.tilesWaitingForChildren !== n.lastTilesWaitingForChildren || n.maxDepthVisited !== n.lastMaxDepthVisited) && (console.log("Visited " + n.tilesVisited + ", Rendered: " + n.tilesRendered + ", Culled: " + n.tilesCulled + ", Max Depth Rendered: " + n.maxDepth + ", Max Depth Visited: " + n.maxDepthVisited + ", Waiting for children: " + n.tilesWaitingForChildren), n.lastTilesVisited = n.tilesVisited, n.lastTilesRendered = n.tilesRendered, n.lastTilesCulled = n.tilesCulled, n.lastMaxDepth = n.maxDepth, n.lastTilesWaitingForChildren = n.tilesWaitingForChildren, n.lastMaxDepthVisited = n.maxDepthVisited))
}
Tr.prototype.endFrame = function(e) {
    var t = e.passes;
    !t.render || e.mode === Q.MORPHING || (yT(this, e), AT(this, e), fT(this, e))
};
Tr.prototype.isDestroyed = function() {
    return !1
};
Tr.prototype.destroy = function() {
    this._tileProvider = this._tileProvider && this._tileProvider.destroy()
};
var zi, Wc = new re;

function lT(e, t) {
    var r = L.center(e.rectangle, Wc),
        n = r.longitude - zi.longitude,
        i = r.latitude - zi.latitude;
    r = L.center(t.rectangle, Wc);
    var a = r.longitude - zi.longitude,
        o = r.latitude - zi.latitude;
    return n * n + i * i - (a * a + o * o)
}
var dT = new u,
    bi = [];

function _T(e, t) {
    var r = e._debug;
    if (!r.suspendLodUpdate) {
        var n = e._tilesToRender;
        n.length = 0;
        var i, a = e._tileProvider;
        if (!c(e._levelZeroTiles))
            if (a.ready) {
                var o = a.tilingScheme;
                e._levelZeroTiles = Ut.createLevelZeroTiles(o);
                var s = e._levelZeroTiles.length;
                if (bi.length < s)
                    for (bi = new Array(s), i = 0; i < s; ++i) bi[i] === void 0 && (bi[i] = new Vi)
            } else return;
        e._occluders.ellipsoid.cameraPosition = t.camera.positionWC;
        var h, f = e._levelZeroTiles,
            l = f.length > 1 ? e._occluders : void 0;
        zi = t.camera.positionCartographic, f.sort(lT);
        var d = e._addHeightCallbacks,
            m = e._removeHeightCallbacks,
            _ = t.frameNumber,
            g;
        if (d.length > 0 || m.length > 0) {
            for (i = 0, g = f.length; i < g; ++i) h = f[i], h._updateCustomData(_, d, m);
            d.length = 0, m.length = 0
        }
        var T = t.camera;
        e._cameraPositionCartographic = T.positionCartographic;
        var C = y.getTranslation(T.transform, dT);
        for (e._cameraReferenceFrameOriginCartographic = e.tileProvider.tilingScheme.ellipsoid.cartesianToCartographic(C, e._cameraReferenceFrameOriginCartographic), i = 0, g = f.length; i < g; ++i) h = f[i], e._tileReplacementQueue.markTileRendered(h), h.renderable ? Rt(e, h, a, t, l, !1, bi[i]) : (tn(e, e._tileLoadQueueHigh, h, t), ++r.tilesWaitingForChildren);
        e._lastSelectionFrameNumber = _
    }
}

function tn(e, t, r, n) {
    r.needsLoading && (e.tileProvider.computeTileLoadPriority !== void 0 && (r._loadPriority = e.tileProvider.computeTileLoadPriority(r, n)), t.push(r))
}

function Vi() {
    this.allAreRenderable = !0, this.anyWereRenderedLastFrame = !1, this.notYetRenderableCount = 0
}

function yl() {
    this.southwest = new Vi, this.southeast = new Vi, this.northwest = new Vi, this.northeast = new Vi
}
yl.prototype.combine = function(e) {
    var t = this.southwest,
        r = this.southeast,
        n = this.northwest,
        i = this.northeast;
    e.allAreRenderable = t.allAreRenderable && r.allAreRenderable && n.allAreRenderable && i.allAreRenderable, e.anyWereRenderedLastFrame = t.anyWereRenderedLastFrame || r.anyWereRenderedLastFrame || n.anyWereRenderedLastFrame || i.anyWereRenderedLastFrame, e.notYetRenderableCount = t.notYetRenderableCount + r.notYetRenderableCount + n.notYetRenderableCount + i.notYetRenderableCount
};
var Ws = new Array(31);
for (var ss = 0; ss < Ws.length; ++ss) Ws[ss] = new yl;

function mT(e, t, r, n, i) {
    var a = e._debug;
    ++a.tilesVisited, e._tileReplacementQueue.markTileRendered(r), r._updateCustomData(t.frameNumber), r.level > a.maxDepthVisited && (a.maxDepthVisited = r.level);
    var o = gT(e, t, r) < e.maximumScreenSpaceError,
        s = r.southwestChild,
        h = r.southeastChild,
        f = r.northwestChild,
        l = r.northeastChild,
        d = e._lastSelectionFrameNumber,
        m = r._lastSelectionResultFrame === d ? r._lastSelectionResult : me.NONE,
        _ = e.tileProvider;
    if (o || n) {
        var g = me.originalResult(m) === me.RENDERED,
            T = me.originalResult(m) === me.CULLED || m === me.NONE,
            C = r.state === pr.DONE,
            A = g || T || C;
        if (A || c(_.canRenderWithoutLosingDetail) && (A = _.canRenderWithoutLosingDetail(r)), A) {
            o && tn(e, e._tileLoadQueueMedium, r, t), Da(e, r), i.allAreRenderable = r.renderable, i.anyWereRenderedLastFrame = m === me.RENDERED, i.notYetRenderableCount = r.renderable ? 0 : 1, r._lastSelectionResultFrame = t.frameNumber, r._lastSelectionResult = me.RENDERED, i.anyWereRenderedLastFrame || e._tileToUpdateHeights.push(r);
            return
        }
        n = !0, o && tn(e, e._tileLoadQueueHigh, r, t)
    }
    if (_.canRefine(r)) {
        var S = s.upsampledFromParent && h.upsampledFromParent && f.upsampledFromParent && l.upsampledFromParent;
        if (S) {
            Da(e, r), tn(e, e._tileLoadQueueMedium, r, t), e._tileReplacementQueue.markTileRendered(s), e._tileReplacementQueue.markTileRendered(h), e._tileReplacementQueue.markTileRendered(f), e._tileReplacementQueue.markTileRendered(l), i.allAreRenderable = r.renderable, i.anyWereRenderedLastFrame = m === me.RENDERED, i.notYetRenderableCount = r.renderable ? 0 : 1, r._lastSelectionResultFrame = t.frameNumber, r._lastSelectionResult = me.RENDERED, i.anyWereRenderedLastFrame || e._tileToUpdateHeights.push(r);
            return
        }
        r._lastSelectionResultFrame = t.frameNumber, r._lastSelectionResult = me.REFINED;
        var x = e._tilesToRender.length,
            I = e._tileLoadQueueLow.length,
            O = e._tileLoadQueueMedium.length,
            F = e._tileLoadQueueHigh.length,
            b = e._tileToUpdateHeights.length;
        if (vT(e, s, h, f, l, t, n, i), x !== e._tilesToRender.length) {
            var N = i.allAreRenderable,
                D = i.anyWereRenderedLastFrame,
                V = i.notYetRenderableCount,
                M = !1;
            if (!N && !D) {
                for (var W = e._tilesToRender, G = x; G < W.length; ++G)
                    for (var U = W[G]; U !== void 0 && U._lastSelectionResult !== me.KICKED && U !== r;) U._lastSelectionResult = me.kick(U._lastSelectionResult), U = U.parent;
                e._tilesToRender.length = x, e._tileToUpdateHeights.length = b, Da(e, r), r._lastSelectionResult = me.RENDERED;
                var q = m === me.RENDERED;
                !q && V > e.loadingDescendantLimit && (e._tileLoadQueueLow.length = I, e._tileLoadQueueMedium.length = O, e._tileLoadQueueHigh.length = F, tn(e, e._tileLoadQueueMedium, r, t), i.notYetRenderableCount = r.renderable ? 0 : 1, M = !0), i.allAreRenderable = r.renderable, i.anyWereRenderedLastFrame = q, q || e._tileToUpdateHeights.push(r), ++a.tilesWaitingForChildren
            }
            e.preloadAncestors && !M && tn(e, e._tileLoadQueueLow, r, t)
        }
        return
    }
    r._lastSelectionResultFrame = t.frameNumber, r._lastSelectionResult = me.RENDERED, Da(e, r), tn(e, e._tileLoadQueueHigh, r, t), i.allAreRenderable = r.renderable, i.anyWereRenderedLastFrame = m === me.RENDERED, i.notYetRenderableCount = r.renderable ? 0 : 1
}

function vT(e, t, r, n, i, a, o, s) {
    var h = a.camera.positionCartographic,
        f = e._tileProvider,
        l = e._occluders,
        d = Ws[t.level],
        m = d.southwest,
        _ = d.southeast,
        g = d.northwest,
        T = d.northeast;
    h.longitude < t.rectangle.east ? h.latitude < t.rectangle.north ? (Rt(e, t, f, a, l, o, m), Rt(e, r, f, a, l, o, _), Rt(e, n, f, a, l, o, g), Rt(e, i, f, a, l, o, T)) : (Rt(e, n, f, a, l, o, g), Rt(e, t, f, a, l, o, m), Rt(e, i, f, a, l, o, T), Rt(e, r, f, a, l, o, _)) : h.latitude < t.rectangle.north ? (Rt(e, r, f, a, l, o, _), Rt(e, t, f, a, l, o, m), Rt(e, i, f, a, l, o, T), Rt(e, n, f, a, l, o, g)) : (Rt(e, i, f, a, l, o, T), Rt(e, n, f, a, l, o, g), Rt(e, r, f, a, l, o, _), Rt(e, t, f, a, l, o, m)), d.combine(s)
}

function pT(e, t) {
    var r = t.rectangle;
    return c(e._cameraPositionCartographic) && L.contains(r, e._cameraPositionCartographic) || c(e._cameraReferenceFrameOriginCartographic) && L.contains(r, e._cameraReferenceFrameOriginCartographic)
}

function Rt(e, t, r, n, i, a, o) {
    if (r.computeTileVisibility(t, n, i) !== ht.NONE) return mT(e, n, t, a, o);
    if (++e._debug.tilesCulled, e._tileReplacementQueue.markTileRendered(t), o.allAreRenderable = !0, o.anyWereRenderedLastFrame = !1, o.notYetRenderableCount = 0, pT(e, t)) {
        (!c(t.data) || !c(t.data.vertexArray)) && tn(e, e._tileLoadQueueMedium, t, n);
        var s = e._lastSelectionFrameNumber,
            h = t._lastSelectionResultFrame === s ? t._lastSelectionResult : me.NONE;
        h !== me.CULLED_BUT_NEEDED && h !== me.RENDERED && e._tileToUpdateHeights.push(t), t._lastSelectionResult = me.CULLED_BUT_NEEDED
    } else(e.preloadSiblings || t.level === 0) && tn(e, e._tileLoadQueueLow, t, n), t._lastSelectionResult = me.CULLED;
    t._lastSelectionResultFrame = n.frameNumber
}

function gT(e, t, r) {
    if (t.mode === Q.SCENE2D || t.camera.frustum instanceof $e || t.camera.frustum instanceof Zt) return TT(e, t, r);
    var n = e._tileProvider.getLevelMaximumGeometricError(r.level),
        i = r._distance,
        a = t.context.drawingBufferHeight,
        o = t.camera.frustum.sseDenominator,
        s = n * a / (i * o);
    return t.fog.enabled && (s -= p.fog(i, t.fog.density) * t.fog.sse), s /= t.pixelRatio, s
}

function TT(e, t, r) {
    var n = t.camera,
        i = n.frustum;
    c(i._offCenterFrustum) && (i = i._offCenterFrustum);
    var a = t.context,
        o = a.drawingBufferWidth,
        s = a.drawingBufferHeight,
        h = e._tileProvider.getLevelMaximumGeometricError(r.level),
        f = Math.max(i.top - i.bottom, i.right - i.left) / Math.max(o, s),
        l = h / f;
    return t.fog.enabled && t.mode !== Q.SCENE2D && (l -= p.fog(r._distance, t.fog.density) * t.fog.sse), l /= t.pixelRatio, l
}

function Da(e, t) {
    e._tilesToRender.push(t)
}

function yT(e, t) {
    var r = e._tileLoadQueueHigh,
        n = e._tileLoadQueueMedium,
        i = e._tileLoadQueueLow;
    if (!(r.length === 0 && n.length === 0 && i.length === 0)) {
        e._tileReplacementQueue.trimTiles(e.tileCacheSize);
        var a = Xt() + e._loadQueueTimeSlice,
            o = e._tileProvider,
            s = us(e, t, o, a, r, !1);
        s = us(e, t, o, a, n, s), us(e, t, o, a, i, s)
    }
}

function ET(e, t) {
    return e._loadPriority - t._loadPriority
}

function us(e, t, r, n, i, a) {
    r.computeTileLoadPriority !== void 0 && i.sort(ET);
    for (var o = 0, s = i.length; o < s && (Xt() < n || !a); ++o) {
        var h = i[o];
        e._tileReplacementQueue.markTileRendered(h), r.loadTile(t, h), a = !0
    }
    return a
}
var ni = new Ir,
    cs = new re,
    dn = new u,
    CT = [];

function AT(e, t) {
    if (e.tileProvider.ready) {
        var r = CT;
        r.length = 0;
        for (var n = e._tileToUpdateHeights, i = e._tileProvider.terrainProvider, a = Xt(), o = e._updateHeightsTimeSlice, s = a + o, h = t.mode, f = t.mapProjection, l = e.tileProvider.tilingScheme.ellipsoid, d; n.length > 0;) {
            var m = n[0];
            if (!c(m.data) || !c(m.data.mesh)) {
                var _ = m._lastSelectionResultFrame === e._lastSelectionFrameNumber ? m._lastSelectionResult : me.NONE;
                (_ === me.RENDERED || _ === me.CULLED_BUT_NEEDED) && r.push(m), n.shift(), e._lastTileIndex = 0;
                continue
            }
            var g = m.customData,
                T = g.length,
                C = !1;
            for (d = e._lastTileIndex; d < T; ++d) {
                var A = g[d];
                if (m.level > A.level) {
                    if (c(A.positionOnEllipsoidSurface) || (A.positionOnEllipsoidSurface = u.fromRadians(A.positionCartographic.longitude, A.positionCartographic.latitude, 0, l)), h === Q.SCENE3D) {
                        var S = l.geodeticSurfaceNormal(A.positionOnEllipsoidSurface, ni.direction),
                            x = l.getSurfaceNormalIntersectionWithZAxis(A.positionOnEllipsoidSurface, 11500, ni.origin);
                        if (!c(x)) {
                            var I;
                            c(m.data.tileBoundingRegion) && (I = m.data.tileBoundingRegion.minimumHeight);
                            var O = Math.min(v(I, 0), -11500),
                                F = u.multiplyByScalar(S, Math.abs(O) + 1, dn);
                            u.subtract(A.positionOnEllipsoidSurface, F, ni.origin)
                        }
                    } else re.clone(A.positionCartographic, cs), cs.height = -11500, f.project(cs, dn), u.fromElements(dn.z, dn.x, dn.y, dn), u.clone(dn, ni.origin), u.clone(u.UNIT_X, ni.direction);
                    var b = m.data.pick(ni, h, f, !1, dn);
                    c(b) && (A.callback(b), A.level = m.level)
                } else if (m.level === A.level) {
                    for (var N = m.children, D = N.length, V, M = 0; M < D && (V = N[M], !L.contains(V.rectangle, A.positionCartographic)); ++M);
                    var W = i.getTileDataAvailable(V.x, V.y, V.level),
                        G = m.parent;
                    (c(W) && !W || c(G) && c(G.data) && c(G.data.terrainData) && !G.data.terrainData.isChildAvailable(G.x, G.y, V.x, V.y)) && A.removeFunc()
                }
                if (Xt() >= s) {
                    C = !0;
                    break
                }
            }
            if (C) {
                e._lastTileIndex = d;
                break
            } else e._lastTileIndex = 0, n.shift()
        }
        for (d = 0; d < r.length; d++) n.push(r[d])
    }
}

function wT(e, t) {
    for (var r = e._tileProvider, n = e._tilesToRender, i = 0, a = n.length; i < a; ++i) {
        var o = n[i];
        r.showTileThisFrame(o, t)
    }
}

function Xr(e) {
    e = v(e, se.WGS84);
    var t = new vi({
            ellipsoid: e
        }),
        r = new mt;
    this._ellipsoid = e, this._imageryLayerCollection = r, this._surfaceShaderSet = new Tu, this._material = void 0, this._surface = new Tr({
        tileProvider: new He({
            terrainProvider: t,
            imageryLayers: r,
            surfaceShaderSet: this._surfaceShaderSet
        })
    }), this._terrainProvider = t, this._terrainProviderChanged = new ze, this._undergroundColor = H.clone(H.BLACK), this._undergroundColorAlphaByDistance = new dt(e.maximumRadius / 1e3, 0, e.maximumRadius / 5, 1), this._translucency = new ml, qs(this), this.show = !0, this.maximumScreenSpaceError = 2, this.tileCacheSize = 100, this.loadingDescendantLimit = 20, this.preloadAncestors = !0, this.preloadSiblings = !1, this.fillHighlightColor = void 0, this.enableLighting = !1, this.dynamicAtmosphereLighting = !0, this.dynamicAtmosphereLightingFromSun = !1, this.showGroundAtmosphere = !0, this.lightingFadeOutDistance = 1e7, this.lightingFadeInDistance = 2e7, this.nightFadeOutDistance = 1e7, this.nightFadeInDistance = 5e7, this.showWaterEffect = !0, this.depthTestAgainstTerrain = !1, this.shadows = ao.RECEIVE_ONLY, this.atmosphereHueShift = 0, this.atmosphereSaturationShift = 0, this.atmosphereBrightnessShift = 0, this.showSkirts = !0, this.backFaceCulling = !0, this._zoomedOutOceanSpecularIntensity = void 0
}
Object.defineProperties(Xr.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    imageryLayers: {
        get: function() {
            return this._imageryLayerCollection
        }
    },
    imageryLayersUpdatedEvent: {
        get: function() {
            return this._surface.tileProvider.imageryLayersUpdatedEvent
        }
    },
    tilesLoaded: {
        get: function() {
            return c(this._surface) ? this._surface.tileProvider.ready && this._surface._tileLoadQueueHigh.length === 0 && this._surface._tileLoadQueueMedium.length === 0 && this._surface._tileLoadQueueLow.length === 0 : !0
        }
    },
    baseColor: {
        get: function() {
            return this._surface.tileProvider.baseColor
        },
        set: function(e) {
            this._surface.tileProvider.baseColor = e
        }
    },
    clippingPlanes: {
        get: function() {
            return this._surface.tileProvider.clippingPlanes
        },
        set: function(e) {
            this._surface.tileProvider.clippingPlanes = e
        }
    },
    cartographicLimitRectangle: {
        get: function() {
            return this._surface.tileProvider.cartographicLimitRectangle
        },
        set: function(e) {
            c(e) || (e = L.clone(L.MAX_VALUE)), this._surface.tileProvider.cartographicLimitRectangle = e
        }
    },
    terrainProvider: {
        get: function() {
            return this._terrainProvider
        },
        set: function(e) {
            e !== this._terrainProvider && (this._terrainProvider = e, this._terrainProviderChanged.raiseEvent(e), c(this._material) && qs(this))
        }
    },
    terrainProviderChanged: {
        get: function() {
            return this._terrainProviderChanged
        }
    },
    tileLoadProgressEvent: {
        get: function() {
            return this._surface.tileLoadProgressEvent
        }
    },
    material: {
        get: function() {
            return this._material
        },
        set: function(e) {
            this._material !== e && (this._material = e, qs(this))
        }
    },
    undergroundColor: {
        get: function() {
            return this._undergroundColor
        },
        set: function(e) {
            this._undergroundColor = H.clone(e, this._undergroundColor)
        }
    },
    undergroundColorAlphaByDistance: {
        get: function() {
            return this._undergroundColorAlphaByDistance
        },
        set: function(e) {
            this._undergroundColorAlphaByDistance = dt.clone(e, this._undergroundColorAlphaByDistance)
        }
    },
    translucency: {
        get: function() {
            return this._translucency
        }
    }
});

function qs(e) {
    var t = [],
        r = c(e._material) && (e._material.shaderSource.match(/slope/) || e._material.shaderSource.match("normalEC")),
        n = [];
    c(e._material) && (!r || e._terrainProvider.requestVertexNormals) ? (n.push(e._material.shaderSource), t.push("APPLY_MATERIAL"), e._surface._tileProvider.materialUniformMap = e._material._uniforms) : e._surface._tileProvider.materialUniformMap = void 0, n.push(L0), e._surfaceShaderSet.baseVertexShaderSource = new Ie({
        sources: [F0],
        defines: t
    }), e._surfaceShaderSet.baseFragmentShaderSource = new Ie({
        sources: n,
        defines: t
    }), e._surfaceShaderSet.material = e._material
}
Xr.prototype.pickWorldCoordinates = E("Globe#pickWorldCoordinates");
var RT = new re;
Xr.prototype.pick = function(e, t, r) {
    if (r = this.pickWorldCoordinates(e, t, !0, r), c(r) && t.mode !== Q.SCENE3D) {
        r = u.fromElements(r.y, r.z, r.x, r);
        var n = t.mapProjection.unproject(r, RT);
        r = t.globe.ellipsoid.cartographicToCartesian(n, r)
    }
    return r
};
var xT = new u,
    qc = new u,
    ST = new re,
    IT = new Ir;

function hs(e, t) {
    return c(e) && L.contains(e.rectangle, t) ? e : void 0
}
Xr.prototype.getHeight = function(e) {
    var t = this._surface._levelZeroTiles;
    if (c(t)) {
        var r, n, i = t.length;
        for (n = 0; n < i && (r = t[n], !L.contains(r.rectangle, e)); ++n);
        if (!(n >= i)) {
            for (var a = r; c(r);) r = hs(r._southwestChild, e) || hs(r._southeastChild, e) || hs(r._northwestChild, e) || r._northeastChild, c(r) && c(r.data) && c(r.data.renderedMesh) && (a = r);
            if (r = a, !(!c(r) || !c(r.data) || !c(r.data.renderedMesh))) {
                var o = this._surface._tileProvider.tilingScheme.ellipsoid,
                    s = u.fromRadians(e.longitude, e.latitude, 0, o, xT),
                    h = IT,
                    f = o.geodeticSurfaceNormal(s, h.direction),
                    l = o.getSurfaceNormalIntersectionWithZAxis(s, 11500, h.origin);
                if (!c(l)) {
                    var d;
                    c(r.data.tileBoundingRegion) && (d = r.data.tileBoundingRegion.minimumHeight);
                    var m = Math.min(v(d, 0), -11500),
                        _ = u.multiplyByScalar(f, Math.abs(m) + 1, qc);
                    u.subtract(s, _, h.origin)
                }
                var g = r.data.pick(h, void 0, void 0, !1, qc);
                if (c(g)) return o.cartesianToCartographic(g, ST).height
            }
        }
    }
};
Xr.prototype.update = function(e) {
    this.show && e.passes.render && this._surface.update(e)
};
Xr.prototype.beginFrame = function(e) {
    var t = this._surface,
        r = t.tileProvider,
        n = e.passes;
    e.mode, n.render && (t.maximumScreenSpaceError = this.maximumScreenSpaceError, t.tileCacheSize = this.tileCacheSize, t.loadingDescendantLimit = this.loadingDescendantLimit, t.preloadAncestors = this.preloadAncestors, t.preloadSiblings = this.preloadSiblings, r.terrainProvider = this.terrainProvider, r.showSkirts = this.showSkirts, r.backFaceCulling = this.backFaceCulling, t.beginFrame(e))
};
Xr.prototype.render = function(e) {
    this.show && (c(this._material) && this._material.update(e.context), this._surface.render(e))
};
Xr.prototype.endFrame = function(e) {
    this.show && e.passes.render && this._surface.endFrame(e)
};
Xr.prototype.isDestroyed = function() {
    return !1
};
Xr.prototype.destroy = function() {
    return this._surfaceShaderSet = this._surfaceShaderSet && this._surfaceShaderSet.destroy(), this._surface = this._surface && this._surface.destroy(), Je(this)
};
var ks = [],
    Ys = [];

function OT(e, t, r, n, i, a) {
    var o = i - n + 1,
        s = a - i,
        h = ks,
        f = Ys,
        l, d;
    for (l = 0; l < o; ++l) h[l] = e[n + l];
    for (d = 0; d < s; ++d) f[d] = e[i + d + 1];
    l = 0, d = 0;
    for (var m = n; m <= a; ++m) {
        var _ = h[l],
            g = f[d];
        l < o && (d >= s || t(_, g, r) <= 0) ? (e[m] = _, ++l) : d < s && (e[m] = g, ++d)
    }
}

function js(e, t, r, n, i) {
    if (!(n >= i)) {
        var a = Math.floor((n + i) * .5);
        js(e, t, r, n, a), js(e, t, r, a + 1, i), OT(e, t, r, n, a, i)
    }
}

function El(e, t, r) {
    var n = e.length,
        i = Math.ceil(n * .5);
    ks.length = i, Ys.length = i, js(e, t, r, 0, n - 1), ks.length = 0, Ys.length = 0
}

function Nt(e, t) {
    this._occluderPosition = u.clone(e.center), this._occluderRadius = e.radius, this._horizonDistance = 0, this._horizonPlaneNormal = void 0, this._horizonPlanePosition = void 0, this._cameraPosition = void 0, this.cameraPosition = t
}
var ba = new u;
Object.defineProperties(Nt.prototype, {
    position: {
        get: function() {
            return this._occluderPosition
        }
    },
    radius: {
        get: function() {
            return this._occluderRadius
        }
    },
    cameraPosition: {
        set: function(e) {
            e = u.clone(e, this._cameraPosition);
            var t = u.subtract(this._occluderPosition, e, ba),
                r = u.magnitudeSquared(t),
                n = this._occluderRadius * this._occluderRadius,
                i, a, o;
            if (r > n) {
                i = Math.sqrt(r - n), r = 1 / Math.sqrt(r), a = u.multiplyByScalar(t, r, ba);
                var s = i * i * r;
                o = u.add(e, u.multiplyByScalar(a, s, ba), ba)
            } else i = Number.MAX_VALUE;
            this._horizonDistance = i, this._horizonPlaneNormal = a, this._horizonPlanePosition = o, this._cameraPosition = e
        }
    }
});
Nt.fromBoundingSphere = function(e, t, r) {
    return c(r) ? (u.clone(e.center, r._occluderPosition), r._occluderRadius = e.radius, r.cameraPosition = t, r) : new Nt(e, t)
};
var Cl = new u;
Nt.prototype.isPointVisible = function(e) {
    if (this._horizonDistance !== Number.MAX_VALUE) {
        var t = u.subtract(e, this._occluderPosition, Cl),
            r = this._occluderRadius;
        if (r = u.magnitudeSquared(t) - r * r, r > 0) return r = Math.sqrt(r) + this._horizonDistance, t = u.subtract(e, this._cameraPosition, t), r * r > u.magnitudeSquared(t)
    }
    return !1
};
var PT = new u;
Nt.prototype.isBoundingSphereVisible = function(e) {
    var t = u.clone(e.center, PT),
        r = e.radius;
    if (this._horizonDistance !== Number.MAX_VALUE) {
        var n = u.subtract(t, this._occluderPosition, Cl),
            i = this._occluderRadius - r;
        if (i = u.magnitudeSquared(n) - i * i, r < this._occluderRadius) return i > 0 ? (i = Math.sqrt(i) + this._horizonDistance, n = u.subtract(t, this._cameraPosition, n), i * i + r * r > u.magnitudeSquared(n)) : !1;
        if (i > 0) {
            n = u.subtract(t, this._cameraPosition, n);
            var a = u.magnitudeSquared(n),
                o = this._occluderRadius * this._occluderRadius,
                s = r * r;
            return (this._horizonDistance * this._horizonDistance + o) * s > a * o ? !0 : (i = Math.sqrt(i) + this._horizonDistance, i * i + s > a)
        }
        return !0
    }
    return !1
};
var NT = new u;
Nt.prototype.computeVisibility = function(e) {
    var t = u.clone(e.center),
        r = e.radius;
    if (r > this._occluderRadius) return ht.FULL;
    if (this._horizonDistance !== Number.MAX_VALUE) {
        var n = u.subtract(t, this._occluderPosition, NT),
            i = this._occluderRadius - r,
            a = u.magnitudeSquared(n);
        if (i = a - i * i, i > 0) {
            i = Math.sqrt(i) + this._horizonDistance, n = u.subtract(t, this._cameraPosition, n);
            var o = u.magnitudeSquared(n);
            return i * i + r * r < o ? ht.NONE : (i = this._occluderRadius + r, i = a - i * i, i > 0 ? (i = Math.sqrt(i) + this._horizonDistance, o < i * i + r * r ? ht.FULL : ht.PARTIAL) : (n = u.subtract(t, this._horizonPlanePosition, n), u.dot(n, this._horizonPlaneNormal) > -r ? ht.PARTIAL : ht.FULL))
        }
    }
    return ht.NONE
};
var La = new u;
Nt.computeOccludeePoint = function(e, t, r) {
    var n = u.clone(t),
        i = u.clone(e.center),
        a = e.radius,
        o = r.length,
        s = u.normalize(u.subtract(n, i, La), La),
        h = -u.dot(s, i),
        f = Nt._anyRotationVector(i, s, h),
        l = Nt._horizonToPlaneNormalDotProduct(e, s, h, f, r[0]);
    if (l) {
        for (var d, m = 1; m < o; ++m) {
            if (d = Nt._horizonToPlaneNormalDotProduct(e, s, h, f, r[m]), !d) return;
            d < l && (l = d)
        }
        if (!(l < .0017453283658983088)) {
            var _ = a / l;
            return u.add(i, u.multiplyByScalar(s, _, La), La)
        }
    }
};
var MT = [];
Nt.computeOccludeePointFromRectangle = function(e, t) {
    t = v(t, se.WGS84);
    var r = L.subsample(e, t, 0, MT),
        n = ae.fromPoints(r),
        i = u.ZERO;
    if (!u.equals(i, n.center)) return Nt.computeOccludeePoint(new ae(i, t.minimumRadius), n.center, r)
};
var DT = new u;
Nt._anyRotationVector = function(e, t, r) {
    var n = u.abs(t, DT),
        i = n.x > n.y ? 0 : 1;
    (i === 0 && n.z > n.x || i === 1 && n.z > n.y) && (i = 2);
    var a = new u,
        o;
    i === 0 ? (n.x = e.x, n.y = e.y + 1, n.z = e.z + 1, o = u.UNIT_X) : i === 1 ? (n.x = e.x + 1, n.y = e.y, n.z = e.z + 1, o = u.UNIT_Y) : (n.x = e.x + 1, n.y = e.y + 1, n.z = e.z, o = u.UNIT_Z);
    var s = (u.dot(t, n) + r) / -u.dot(t, o);
    return u.normalize(u.subtract(u.add(n, u.multiplyByScalar(o, s, a), n), e, n), n)
};
var bT = new u;
Nt._rotationVector = function(e, t, r, n, i) {
    var a = u.subtract(n, e, bT);
    if (a = u.normalize(a, a), u.dot(t, a) < .9999999847691291) {
        var o = u.cross(t, a, a),
            s = u.magnitude(o);
        if (s > p.EPSILON13) return u.normalize(o, new u)
    }
    return i
};
var fs = new u,
    LT = new u,
    Fa = new u,
    kc = new u;
Nt._horizonToPlaneNormalDotProduct = function(e, t, r, n, i) {
    var a = u.clone(i, fs),
        o = u.clone(e.center, LT),
        s = e.radius,
        h = u.subtract(o, a, Fa),
        f = u.magnitudeSquared(h),
        l = s * s;
    if (f < l) return !1;
    var d = f - l,
        m = Math.sqrt(d),
        _ = Math.sqrt(f),
        g = 1 / _,
        T = m * g,
        C = T * m;
    h = u.normalize(h, h);
    var A = u.add(a, u.multiplyByScalar(h, C, kc), kc),
        S = Math.sqrt(d - C * C),
        x = this._rotationVector(o, t, r, a, n),
        I = u.fromElements(x.x * x.x * h.x + (x.x * x.y - x.z) * h.y + (x.x * x.z + x.y) * h.z, (x.x * x.y + x.z) * h.x + x.y * x.y * h.y + (x.y * x.z - x.x) * h.z, (x.x * x.z - x.y) * h.x + (x.y * x.z + x.x) * h.y + x.z * x.z * h.z, fs);
    I = u.normalize(I, I);
    var O = u.multiplyByScalar(I, S, fs);
    x = u.normalize(u.subtract(u.add(A, O, Fa), o, Fa), Fa);
    var F = u.dot(t, x);
    x = u.normalize(u.subtract(u.subtract(A, O, x), o, x), x);
    var b = u.dot(t, x);
    return F < b ? F : b
};

function gr(e) {
    e = v(e, v.EMPTY_OBJECT), this.left = e.left, this._left = void 0, this.right = e.right, this._right = void 0, this.top = e.top, this._top = void 0, this.bottom = e.bottom, this._bottom = void 0, this.near = v(e.near, 1), this._near = this.near, this.far = v(e.far, 5e8), this._far = this.far, this._cullingVolume = new Bt, this._perspectiveMatrix = new y, this._infinitePerspective = new y
}

function Xs(e) {
    var t = e.top,
        r = e.bottom,
        n = e.right,
        i = e.left,
        a = e.near,
        o = e.far;
    (t !== e._top || r !== e._bottom || i !== e._left || n !== e._right || a !== e._near || o !== e._far) && (e._left = i, e._right = n, e._top = t, e._bottom = r, e._near = a, e._far = o, e._perspectiveMatrix = y.computePerspectiveOffCenter(i, n, r, t, a, o, e._perspectiveMatrix), e._infinitePerspective = y.computeInfinitePerspectiveOffCenter(i, n, r, t, a, e._infinitePerspective))
}
Object.defineProperties(gr.prototype, {
    projectionMatrix: {
        get: function() {
            return Xs(this), this._perspectiveMatrix
        }
    },
    infiniteProjectionMatrix: {
        get: function() {
            return Xs(this), this._infinitePerspective
        }
    }
});
var FT = new u,
    BT = new u,
    UT = new u,
    zT = new u;
gr.prototype.computeCullingVolume = function(e, t, r) {
    var n = this._cullingVolume.planes,
        i = this.top,
        a = this.bottom,
        o = this.right,
        s = this.left,
        h = this.near,
        f = this.far,
        l = u.cross(t, r, FT),
        d = BT;
    u.multiplyByScalar(t, h, d), u.add(e, d, d);
    var m = UT;
    u.multiplyByScalar(t, f, m), u.add(e, m, m);
    var _ = zT;
    u.multiplyByScalar(l, s, _), u.add(d, _, _), u.subtract(_, e, _), u.normalize(_, _), u.cross(_, r, _), u.normalize(_, _);
    var g = n[0];
    return c(g) || (g = n[0] = new B), g.x = _.x, g.y = _.y, g.z = _.z, g.w = -u.dot(_, e), u.multiplyByScalar(l, o, _), u.add(d, _, _), u.subtract(_, e, _), u.cross(r, _, _), u.normalize(_, _), g = n[1], c(g) || (g = n[1] = new B), g.x = _.x, g.y = _.y, g.z = _.z, g.w = -u.dot(_, e), u.multiplyByScalar(r, a, _), u.add(d, _, _), u.subtract(_, e, _), u.cross(l, _, _), u.normalize(_, _), g = n[2], c(g) || (g = n[2] = new B), g.x = _.x, g.y = _.y, g.z = _.z, g.w = -u.dot(_, e), u.multiplyByScalar(r, i, _), u.add(d, _, _), u.subtract(_, e, _), u.cross(_, l, _), u.normalize(_, _), g = n[3], c(g) || (g = n[3] = new B), g.x = _.x, g.y = _.y, g.z = _.z, g.w = -u.dot(_, e), g = n[4], c(g) || (g = n[4] = new B), g.x = t.x, g.y = t.y, g.z = t.z, g.w = -u.dot(t, d), u.negate(t, _), g = n[5], c(g) || (g = n[5] = new B), g.x = _.x, g.y = _.y, g.z = _.z, g.w = -u.dot(_, m), this._cullingVolume
};
gr.prototype.getPixelDimensions = function(e, t, r, n, i) {
    Xs(this);
    var a = 1 / this.near,
        o = this.top * a,
        s = 2 * n * r * o / t;
    o = this.right * a;
    var h = 2 * n * r * o / e;
    return i.x = h, i.y = s, i
};
gr.prototype.clone = function(e) {
    return c(e) || (e = new gr), e.right = this.right, e.left = this.left, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e._left = void 0, e._right = void 0, e._top = void 0, e._bottom = void 0, e._near = void 0, e._far = void 0, e
};
gr.prototype.equals = function(e) {
    return c(e) && e instanceof gr && this.right === e.right && this.left === e.left && this.top === e.top && this.bottom === e.bottom && this.near === e.near && this.far === e.far
};
gr.prototype.equalsEpsilon = function(e, t, r) {
    return e === this || c(e) && e instanceof gr && p.equalsEpsilon(this.right, e.right, t, r) && p.equalsEpsilon(this.left, e.left, t, r) && p.equalsEpsilon(this.top, e.top, t, r) && p.equalsEpsilon(this.bottom, e.bottom, t, r) && p.equalsEpsilon(this.near, e.near, t, r) && p.equalsEpsilon(this.far, e.far, t, r)
};

function Mt(e) {
    e = v(e, v.EMPTY_OBJECT), this._offCenterFrustum = new gr, this.fov = e.fov, this._fov = void 0, this._fovy = void 0, this._sseDenominator = void 0, this.aspectRatio = e.aspectRatio, this._aspectRatio = void 0, this.near = v(e.near, 1), this._near = this.near, this.far = v(e.far, 5e8), this._far = this.far, this.xOffset = v(e.xOffset, 0), this._xOffset = this.xOffset, this.yOffset = v(e.yOffset, 0), this._yOffset = this.yOffset
}
Mt.packedLength = 6;
Mt.pack = function(e, t, r) {
    return r = v(r, 0), t[r++] = e.fov, t[r++] = e.aspectRatio, t[r++] = e.near, t[r++] = e.far, t[r++] = e.xOffset, t[r] = e.yOffset, t
};
Mt.unpack = function(e, t, r) {
    return t = v(t, 0), c(r) || (r = new Mt), r.fov = e[t++], r.aspectRatio = e[t++], r.near = e[t++], r.far = e[t++], r.xOffset = e[t++], r.yOffset = e[t], r
};

function Hr(e) {
    var t = e._offCenterFrustum;
    (e.fov !== e._fov || e.aspectRatio !== e._aspectRatio || e.near !== e._near || e.far !== e._far || e.xOffset !== e._xOffset || e.yOffset !== e._yOffset) && (e._aspectRatio = e.aspectRatio, e._fov = e.fov, e._fovy = e.aspectRatio <= 1 ? e.fov : Math.atan(Math.tan(e.fov * .5) / e.aspectRatio) * 2, e._near = e.near, e._far = e.far, e._sseDenominator = 2 * Math.tan(.5 * e._fovy), e._xOffset = e.xOffset, e._yOffset = e.yOffset, t.top = e.near * Math.tan(.5 * e._fovy), t.bottom = -t.top, t.right = e.aspectRatio * t.top, t.left = -t.right, t.near = e.near, t.far = e.far, t.right += e.xOffset, t.left += e.xOffset, t.top += e.yOffset, t.bottom += e.yOffset)
}
Object.defineProperties(Mt.prototype, {
    projectionMatrix: {
        get: function() {
            return Hr(this), this._offCenterFrustum.projectionMatrix
        }
    },
    infiniteProjectionMatrix: {
        get: function() {
            return Hr(this), this._offCenterFrustum.infiniteProjectionMatrix
        }
    },
    fovy: {
        get: function() {
            return Hr(this), this._fovy
        }
    },
    sseDenominator: {
        get: function() {
            return Hr(this), this._sseDenominator
        }
    }
});
Mt.prototype.computeCullingVolume = function(e, t, r) {
    return Hr(this), this._offCenterFrustum.computeCullingVolume(e, t, r)
};
Mt.prototype.getPixelDimensions = function(e, t, r, n, i) {
    return Hr(this), this._offCenterFrustum.getPixelDimensions(e, t, r, n, i)
};
Mt.prototype.clone = function(e) {
    return c(e) || (e = new Mt), e.aspectRatio = this.aspectRatio, e.fov = this.fov, e.near = this.near, e.far = this.far, e._aspectRatio = void 0, e._fov = void 0, e._near = void 0, e._far = void 0, this._offCenterFrustum.clone(e._offCenterFrustum), e
};
Mt.prototype.equals = function(e) {
    return !c(e) || !(e instanceof Mt) ? !1 : (Hr(this), Hr(e), this.fov === e.fov && this.aspectRatio === e.aspectRatio && this._offCenterFrustum.equals(e._offCenterFrustum))
};
Mt.prototype.equalsEpsilon = function(e, t, r) {
    return !c(e) || !(e instanceof Mt) ? !1 : (Hr(this), Hr(e), p.equalsEpsilon(this.fov, e.fov, t, r) && p.equalsEpsilon(this.aspectRatio, e.aspectRatio, t, r) && this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum, t, r))
};

function jt(e) {
    e = v(e, v.EMPTY_OBJECT), this.color = e.color, this.depth = e.depth, this.stencil = e.stencil, this.renderState = e.renderState, this.framebuffer = e.framebuffer, this.owner = e.owner, this.pass = e.pass
}
jt.ALL = Object.freeze(new jt({
    color: new H(0, 0, 0, 0),
    depth: 1,
    stencil: 0
}));
jt.prototype.execute = function(e, t) {
    e.clear(this, t)
};
var Al = "attribute vec4 position;attribute vec2 textureCoordinates;varying vec2 v_textureCoordinates;void main(){gl_Position=position;v_textureCoordinates=textureCoordinates;}";

function ls(e, t, r) {
    var n = e._gl;
    n.framebufferTexture2D(n.FRAMEBUFFER, t, r._target, r._texture, 0)
}

function Ba(e, t, r) {
    var n = e._gl;
    n.framebufferRenderbuffer(n.FRAMEBUFFER, t, n.RENDERBUFFER, r._getRenderbuffer())
}

function Dt(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context,
        r = t._gl;
    oe.maximumColorAttachments, this._gl = r, this._framebuffer = r.createFramebuffer(), this._colorTextures = [], this._colorRenderbuffers = [], this._activeColorAttachments = [], this._depthTexture = void 0, this._depthRenderbuffer = void 0, this._stencilRenderbuffer = void 0, this._depthStencilTexture = void 0, this._depthStencilRenderbuffer = void 0, this.destroyAttachments = v(e.destroyAttachments, !0), c(e.depthTexture) || c(e.depthRenderbuffer), c(e.depthStencilTexture) || c(e.depthStencilRenderbuffer), this._bind();
    var n, i, a, o, s;
    if (c(e.colorTextures)) {
        var h = e.colorTextures;
        for (o = this._colorTextures.length = this._activeColorAttachments.length = h.length, a = 0; a < o; ++a) n = h[a], s = this._gl.COLOR_ATTACHMENT0 + a, ls(this, s, n), this._activeColorAttachments[a] = s, this._colorTextures[a] = n
    }
    if (c(e.colorRenderbuffers)) {
        var f = e.colorRenderbuffers;
        for (o = this._colorRenderbuffers.length = this._activeColorAttachments.length = f.length, a = 0; a < o; ++a) i = f[a], s = this._gl.COLOR_ATTACHMENT0 + a, Ba(this, s, i), this._activeColorAttachments[a] = s, this._colorRenderbuffers[a] = i
    }
    c(e.depthTexture) && (n = e.depthTexture, ls(this, this._gl.DEPTH_ATTACHMENT, n), this._depthTexture = n), c(e.depthRenderbuffer) && (i = e.depthRenderbuffer, Ba(this, this._gl.DEPTH_ATTACHMENT, i), this._depthRenderbuffer = i), c(e.stencilRenderbuffer) && (i = e.stencilRenderbuffer, Ba(this, this._gl.STENCIL_ATTACHMENT, i), this._stencilRenderbuffer = i), c(e.depthStencilTexture) && (n = e.depthStencilTexture, ls(this, this._gl.DEPTH_STENCIL_ATTACHMENT, n), this._depthStencilTexture = n), c(e.depthStencilRenderbuffer) && (i = e.depthStencilRenderbuffer, Ba(this, this._gl.DEPTH_STENCIL_ATTACHMENT, i), this._depthStencilRenderbuffer = i), this._unBind()
}
Object.defineProperties(Dt.prototype, {
    status: {
        get: function() {
            this._bind();
            var e = this._gl.checkFramebufferStatus(this._gl.FRAMEBUFFER);
            return this._unBind(), e
        }
    },
    numberOfColorAttachments: {
        get: function() {
            return this._activeColorAttachments.length
        }
    },
    depthTexture: {
        get: function() {
            return this._depthTexture
        }
    },
    depthRenderbuffer: {
        get: function() {
            return this._depthRenderbuffer
        }
    },
    stencilRenderbuffer: {
        get: function() {
            return this._stencilRenderbuffer
        }
    },
    depthStencilTexture: {
        get: function() {
            return this._depthStencilTexture
        }
    },
    depthStencilRenderbuffer: {
        get: function() {
            return this._depthStencilRenderbuffer
        }
    },
    hasDepthAttachment: {
        get: function() {
            return !!(this.depthTexture || this.depthRenderbuffer || this.depthStencilTexture || this.depthStencilRenderbuffer)
        }
    }
});
Dt.prototype._bind = function() {
    var e = this._gl;
    e.bindFramebuffer(e.FRAMEBUFFER, this._framebuffer)
};
Dt.prototype._unBind = function() {
    var e = this._gl;
    e.bindFramebuffer(e.FRAMEBUFFER, null)
};
Dt.prototype._getActiveColorAttachments = function() {
    return this._activeColorAttachments
};
Dt.prototype.getColorTexture = function(e) {
    return this._colorTextures[e]
};
Dt.prototype.getColorRenderbuffer = function(e) {
    return this._colorRenderbuffers[e]
};
Dt.prototype.isDestroyed = function() {
    return !1
};
Dt.prototype.destroy = function() {
    if (this.destroyAttachments) {
        for (var e = 0, t = this._colorTextures, r = t.length; e < r; ++e) {
            var n = t[e];
            c(n) && n.destroy()
        }
        var i = this._colorRenderbuffers;
        for (r = i.length, e = 0; e < r; ++e) {
            var a = i[e];
            c(a) && a.destroy()
        }
        this._depthTexture = this._depthTexture && this._depthTexture.destroy(), this._depthRenderbuffer = this._depthRenderbuffer && this._depthRenderbuffer.destroy(), this._stencilRenderbuffer = this._stencilRenderbuffer && this._stencilRenderbuffer.destroy(), this._depthStencilTexture = this._depthStencilTexture && this._depthStencilTexture.destroy(), this._depthStencilRenderbuffer = this._depthStencilRenderbuffer && this._depthStencilRenderbuffer.destroy()
    }
    return this._gl.deleteFramebuffer(this._framebuffer), Je(this)
};

function wo(e) {
    this._context = e
}
var Li, VT = new Sr({
        primitiveType: zn.TRIANGLES
    }),
    GT = new jt({
        color: new H(0, 0, 0, 0)
    });

function HT(e, t) {
    return new Dt({
        context: e,
        colorTextures: [t],
        destroyAttachments: !1
    })
}

function WT(e, t) {
    return Vt.fromCache({
        context: e,
        vertexShaderSource: Al,
        fragmentShaderSource: t,
        attributeLocations: {
            position: 0,
            textureCoordinates: 1
        }
    })
}

function qT(e, t) {
    return (!c(Li) || Li.viewport.width !== e || Li.viewport.height !== t) && (Li = Xe.fromCache({
        viewport: new Re(0, 0, e, t)
    })), Li
}
wo.prototype.execute = function(e) {
    c(e.preExecute) && e.preExecute(e);
    var t = e.outputTexture,
        r = t.width,
        n = t.height,
        i = this._context,
        a = c(e.vertexArray) ? e.vertexArray : i.getViewportQuadVertexArray(),
        o = c(e.shaderProgram) ? e.shaderProgram : WT(i, e.fragmentShaderSource),
        s = HT(i, t),
        h = qT(r, n),
        f = e.uniformMap,
        l = GT;
    l.framebuffer = s, l.renderState = h, l.execute(i);
    var d = VT;
    d.vertexArray = a, d.renderState = h, d.shaderProgram = o, d.uniformMap = f, d.framebuffer = s, d.execute(i), s.destroy(), e.persists || (o.destroy(), c(e.vertexArray) && a.destroy()), c(e.postExecute) && e.postExecute(t)
};
wo.prototype.isDestroyed = function() {
    return !1
};
wo.prototype.destroy = function() {
    return Je(this)
};

function Zs(e) {
    e = v(e, v.EMPTY_OBJECT), this.componentDatatype = e.componentDatatype, this.componentsPerAttribute = e.componentsPerAttribute, this.normalize = v(e.normalize, !1), this.values = e.values
}

function wl(e) {
    this.context = e, this.framebuffer = void 0, this.blendingEnabled = void 0, this.scissorTest = void 0, this.viewport = void 0
}

function Mr(e) {
    this._context = e, this._shaders = {}, this._numberOfShaders = 0, this._shadersToRelease = {}
}
Object.defineProperties(Mr.prototype, {
    numberOfShaders: {
        get: function() {
            return this._numberOfShaders
        }
    }
});
Mr.prototype.replaceShaderProgram = function(e) {
    return c(e.shaderProgram) && e.shaderProgram.destroy(), this.getShaderProgram(e)
};
Mr.prototype.getShaderProgram = function(e) {
    var t = e.vertexShaderSource,
        r = e.fragmentShaderSource,
        n = e.attributeLocations;
    typeof t == "string" && (t = new Ie({
        sources: [t]
    })), typeof r == "string" && (r = new Ie({
        sources: [r]
    }));
    var i = t.createCombinedVertexShader(this._context),
        a = r.createCombinedFragmentShader(this._context),
        o = i + a + JSON.stringify(n),
        s;
    if (c(this._shaders[o])) s = this._shaders[o], delete this._shadersToRelease[o];
    else {
        var h = this._context,
            f = new Vt({
                gl: h._gl,
                logShaderCompilation: h.logShaderCompilation,
                debugShaders: h.debugShaders,
                vertexShaderSource: t,
                vertexShaderText: i,
                fragmentShaderSource: r,
                fragmentShaderText: a,
                attributeLocations: n
            });
        s = {
            cache: this,
            shaderProgram: f,
            keyword: o,
            derivedKeywords: [],
            count: 0
        }, f._cachedShader = s, this._shaders[o] = s, ++this._numberOfShaders
    }
    return ++s.count, s.shaderProgram
};
Mr.prototype.replaceDerivedShaderProgram = function(e, t, r) {
    var n = e._cachedShader,
        i = t + n.keyword,
        a = this._shaders[i];
    if (c(a)) {
        Eu(this, a);
        var o = n.derivedKeywords.indexOf(t);
        o > -1 && n.derivedKeywords.splice(o, 1)
    }
    return this.createDerivedShaderProgram(e, t, r)
};
Mr.prototype.getDerivedShaderProgram = function(e, t) {
    var r = e._cachedShader,
        n = t + r.keyword,
        i = this._shaders[n];
    if (c(i)) return i.shaderProgram
};
Mr.prototype.createDerivedShaderProgram = function(e, t, r) {
    var n = e._cachedShader,
        i = t + n.keyword,
        a = r.vertexShaderSource,
        o = r.fragmentShaderSource,
        s = r.attributeLocations;
    typeof a == "string" && (a = new Ie({
        sources: [a]
    })), typeof o == "string" && (o = new Ie({
        sources: [o]
    }));
    var h = this._context,
        f = a.createCombinedVertexShader(h),
        l = o.createCombinedFragmentShader(h),
        d = new Vt({
            gl: h._gl,
            logShaderCompilation: h.logShaderCompilation,
            debugShaders: h.debugShaders,
            vertexShaderSource: a,
            vertexShaderText: f,
            fragmentShaderSource: o,
            fragmentShaderText: l,
            attributeLocations: s
        }),
        m = {
            cache: this,
            shaderProgram: d,
            keyword: i,
            derivedKeywords: [],
            count: 0
        };
    return n.derivedKeywords.push(t), d._cachedShader = m, this._shaders[i] = m, d
};

function Eu(e, t) {
    for (var r = t.derivedKeywords, n = r.length, i = 0; i < n; ++i) {
        var a = r[i] + t.keyword,
            o = e._shaders[a];
        Eu(e, o)
    }
    delete e._shaders[t.keyword], t.shaderProgram.finalDestroy()
}
Mr.prototype.destroyReleasedShaderPrograms = function() {
    var e = this._shadersToRelease;
    for (var t in e)
        if (e.hasOwnProperty(t)) {
            var r = e[t];
            Eu(this, r), --this._numberOfShaders
        } this._shadersToRelease = {}
};
Mr.prototype.releaseShaderProgram = function(e) {
    if (c(e)) {
        var t = e._cachedShader;
        t && --t.count === 0 && (this._shadersToRelease[t.keyword] = t)
    }
};
Mr.prototype.isDestroyed = function() {
    return !1
};
Mr.prototype.destroy = function() {
    var e = this._shaders;
    for (var t in e) e.hasOwnProperty(t) && e[t].shaderProgram.finalDestroy();
    return Je(this)
};

function Rl(e) {
    e = v(e, v.EMPTY_OBJECT), this.color = H.clone(v(e.color, H.WHITE)), this.intensity = v(e.intensity, 2)
}

function gi() {
    this.globeDepthTexture = void 0, this.gamma = void 0, this._viewport = new Re, this._viewportCartesian4 = new B, this._viewportDirty = !1, this._viewportOrthographicMatrix = y.clone(y.IDENTITY), this._viewportTransformation = y.clone(y.IDENTITY), this._model = y.clone(y.IDENTITY), this._view = y.clone(y.IDENTITY), this._inverseView = y.clone(y.IDENTITY), this._projection = y.clone(y.IDENTITY), this._infiniteProjection = y.clone(y.IDENTITY), this._entireFrustum = new R, this._currentFrustum = new R, this._frustumPlanes = new B, this._farDepthFromNearPlusOne = void 0, this._log2FarDepthFromNearPlusOne = void 0, this._oneOverLog2FarDepthFromNearPlusOne = void 0, this._frameState = void 0, this._temeToPseudoFixed = P.clone(y.IDENTITY), this._view3DDirty = !0, this._view3D = new y, this._inverseView3DDirty = !0, this._inverseView3D = new y, this._inverseModelDirty = !0, this._inverseModel = new y, this._inverseTransposeModelDirty = !0, this._inverseTransposeModel = new P, this._viewRotation = new P, this._inverseViewRotation = new P, this._viewRotation3D = new P, this._inverseViewRotation3D = new P, this._inverseProjectionDirty = !0, this._inverseProjection = new y, this._modelViewDirty = !0, this._modelView = new y, this._modelView3DDirty = !0, this._modelView3D = new y, this._modelViewRelativeToEyeDirty = !0, this._modelViewRelativeToEye = new y, this._inverseModelViewDirty = !0, this._inverseModelView = new y, this._inverseModelView3DDirty = !0, this._inverseModelView3D = new y, this._viewProjectionDirty = !0, this._viewProjection = new y, this._inverseViewProjectionDirty = !0, this._inverseViewProjection = new y, this._modelViewProjectionDirty = !0, this._modelViewProjection = new y, this._inverseModelViewProjectionDirty = !0, this._inverseModelViewProjection = new y, this._modelViewProjectionRelativeToEyeDirty = !0, this._modelViewProjectionRelativeToEye = new y, this._modelViewInfiniteProjectionDirty = !0, this._modelViewInfiniteProjection = new y, this._normalDirty = !0, this._normal = new P, this._normal3DDirty = !0, this._normal3D = new P, this._inverseNormalDirty = !0, this._inverseNormal = new P, this._inverseNormal3DDirty = !0, this._inverseNormal3D = new P, this._encodedCameraPositionMCDirty = !0, this._encodedCameraPositionMC = new xr, this._cameraPosition = new u, this._sunPositionWC = new u, this._sunPositionColumbusView = new u, this._sunDirectionWC = new u, this._sunDirectionEC = new u, this._moonDirectionEC = new u, this._lightDirectionWC = new u, this._lightDirectionEC = new u, this._lightColor = new u, this._lightColorHdr = new u, this._pass = void 0, this._mode = void 0, this._mapProjection = void 0, this._ellipsoid = void 0, this._cameraDirection = new u, this._cameraRight = new u, this._cameraUp = new u, this._frustum2DWidth = 0, this._eyeHeight = 0, this._eyeHeight2D = new R, this._pixelRatio = 1, this._orthographicIn3D = !1, this._backgroundColor = new H, this._brdfLut = void 0, this._environmentMap = void 0, this._sphericalHarmonicCoefficients = void 0, this._specularEnvironmentMaps = void 0, this._specularEnvironmentMapsDimensions = new R, this._specularEnvironmentMapsMaximumLOD = void 0, this._fogDensity = void 0, this._invertClassificationColor = void 0, this._imagerySplitPosition = 0, this._pixelSizePerMeter = void 0, this._geometricToleranceOverMeter = void 0, this._minimumDisableDepthTestDistance = void 0
}
Object.defineProperties(gi.prototype, {
    frameState: {
        get: function() {
            return this._frameState
        }
    },
    viewport: {
        get: function() {
            return this._viewport
        },
        set: function(e) {
            if (!Re.equals(e, this._viewport)) {
                Re.clone(e, this._viewport);
                var t = this._viewport,
                    r = this._viewportCartesian4;
                r.x = t.x, r.y = t.y, r.z = t.width, r.w = t.height, this._viewportDirty = !0
            }
        }
    },
    viewportCartesian4: {
        get: function() {
            return this._viewportCartesian4
        }
    },
    viewportOrthographic: {
        get: function() {
            return Yc(this), this._viewportOrthographicMatrix
        }
    },
    viewportTransformation: {
        get: function() {
            return Yc(this), this._viewportTransformation
        }
    },
    model: {
        get: function() {
            return this._model
        },
        set: function(e) {
            y.clone(e, this._model), this._modelView3DDirty = !0, this._inverseModelView3DDirty = !0, this._inverseModelDirty = !0, this._inverseTransposeModelDirty = !0, this._modelViewDirty = !0, this._inverseModelViewDirty = !0, this._modelViewRelativeToEyeDirty = !0, this._inverseModelViewDirty = !0, this._modelViewProjectionDirty = !0, this._inverseModelViewProjectionDirty = !0, this._modelViewProjectionRelativeToEyeDirty = !0, this._modelViewInfiniteProjectionDirty = !0, this._normalDirty = !0, this._inverseNormalDirty = !0, this._normal3DDirty = !0, this._inverseNormal3DDirty = !0, this._encodedCameraPositionMCDirty = !0
        }
    },
    inverseModel: {
        get: function() {
            return this._inverseModelDirty && (this._inverseModelDirty = !1, y.inverse(this._model, this._inverseModel)), this._inverseModel
        }
    },
    inverseTransposeModel: {
        get: function() {
            var e = this._inverseTransposeModel;
            return this._inverseTransposeModelDirty && (this._inverseTransposeModelDirty = !1, y.getMatrix3(this.inverseModel, e), P.transpose(e, e)), e
        }
    },
    view: {
        get: function() {
            return this._view
        }
    },
    view3D: {
        get: function() {
            return ds(this), this._view3D
        }
    },
    viewRotation: {
        get: function() {
            return ds(this), this._viewRotation
        }
    },
    viewRotation3D: {
        get: function() {
            return ds(this), this._viewRotation3D
        }
    },
    inverseView: {
        get: function() {
            return this._inverseView
        }
    },
    inverseView3D: {
        get: function() {
            return Zc(this), this._inverseView3D
        }
    },
    inverseViewRotation: {
        get: function() {
            return this._inverseViewRotation
        }
    },
    inverseViewRotation3D: {
        get: function() {
            return Zc(this), this._inverseViewRotation3D
        }
    },
    projection: {
        get: function() {
            return this._projection
        }
    },
    inverseProjection: {
        get: function() {
            return $T(this), this._inverseProjection
        }
    },
    infiniteProjection: {
        get: function() {
            return this._infiniteProjection
        }
    },
    modelView: {
        get: function() {
            return JT(this), this._modelView
        }
    },
    modelView3D: {
        get: function() {
            return ey(this), this._modelView3D
        }
    },
    modelViewRelativeToEye: {
        get: function() {
            return oy(this), this._modelViewRelativeToEye
        }
    },
    inverseModelView: {
        get: function() {
            return ty(this), this._inverseModelView
        }
    },
    inverseModelView3D: {
        get: function() {
            return ry(this), this._inverseModelView3D
        }
    },
    viewProjection: {
        get: function() {
            return ny(this), this._viewProjection
        }
    },
    inverseViewProjection: {
        get: function() {
            return iy(this), this._inverseViewProjection
        }
    },
    modelViewProjection: {
        get: function() {
            return ay(this), this._modelViewProjection
        }
    },
    inverseModelViewProjection: {
        get: function() {
            return sy(this), this._inverseModelViewProjection
        }
    },
    modelViewProjectionRelativeToEye: {
        get: function() {
            return uy(this), this._modelViewProjectionRelativeToEye
        }
    },
    modelViewInfiniteProjection: {
        get: function() {
            return cy(this), this._modelViewInfiniteProjection
        }
    },
    normal: {
        get: function() {
            return hy(this), this._normal
        }
    },
    normal3D: {
        get: function() {
            return fy(this), this._normal3D
        }
    },
    inverseNormal: {
        get: function() {
            return ly(this), this._inverseNormal
        }
    },
    inverseNormal3D: {
        get: function() {
            return dy(this), this._inverseNormal3D
        }
    },
    entireFrustum: {
        get: function() {
            return this._entireFrustum
        }
    },
    currentFrustum: {
        get: function() {
            return this._currentFrustum
        }
    },
    frustumPlanes: {
        get: function() {
            return this._frustumPlanes
        }
    },
    farDepthFromNearPlusOne: {
        get: function() {
            return this._farDepthFromNearPlusOne
        }
    },
    log2FarDepthFromNearPlusOne: {
        get: function() {
            return this._log2FarDepthFromNearPlusOne
        }
    },
    oneOverLog2FarDepthFromNearPlusOne: {
        get: function() {
            return this._oneOverLog2FarDepthFromNearPlusOne
        }
    },
    eyeHeight: {
        get: function() {
            return this._eyeHeight
        }
    },
    eyeHeight2D: {
        get: function() {
            return this._eyeHeight2D
        }
    },
    sunPositionWC: {
        get: function() {
            return this._sunPositionWC
        }
    },
    sunPositionColumbusView: {
        get: function() {
            return this._sunPositionColumbusView
        }
    },
    sunDirectionWC: {
        get: function() {
            return this._sunDirectionWC
        }
    },
    sunDirectionEC: {
        get: function() {
            return this._sunDirectionEC
        }
    },
    moonDirectionEC: {
        get: function() {
            return this._moonDirectionEC
        }
    },
    lightDirectionWC: {
        get: function() {
            return this._lightDirectionWC
        }
    },
    lightDirectionEC: {
        get: function() {
            return this._lightDirectionEC
        }
    },
    lightColor: {
        get: function() {
            return this._lightColor
        }
    },
    lightColorHdr: {
        get: function() {
            return this._lightColorHdr
        }
    },
    encodedCameraPositionMCHigh: {
        get: function() {
            return Xc(this), this._encodedCameraPositionMC.high
        }
    },
    encodedCameraPositionMCLow: {
        get: function() {
            return Xc(this), this._encodedCameraPositionMC.low
        }
    },
    temeToPseudoFixedMatrix: {
        get: function() {
            return this._temeToPseudoFixed
        }
    },
    pixelRatio: {
        get: function() {
            return this._pixelRatio
        }
    },
    fogDensity: {
        get: function() {
            return this._fogDensity
        }
    },
    geometricToleranceOverMeter: {
        get: function() {
            return this._geometricToleranceOverMeter
        }
    },
    pass: {
        get: function() {
            return this._pass
        }
    },
    backgroundColor: {
        get: function() {
            return this._backgroundColor
        }
    },
    brdfLut: {
        get: function() {
            return this._brdfLut
        }
    },
    environmentMap: {
        get: function() {
            return this._environmentMap
        }
    },
    sphericalHarmonicCoefficients: {
        get: function() {
            return this._sphericalHarmonicCoefficients
        }
    },
    specularEnvironmentMaps: {
        get: function() {
            return this._specularEnvironmentMaps
        }
    },
    specularEnvironmentMapsDimensions: {
        get: function() {
            return this._specularEnvironmentMapsDimensions
        }
    },
    specularEnvironmentMapsMaximumLOD: {
        get: function() {
            return this._specularEnvironmentMapsMaximumLOD
        }
    },
    imagerySplitPosition: {
        get: function() {
            return this._imagerySplitPosition
        }
    },
    minimumDisableDepthTestDistance: {
        get: function() {
            return this._minimumDisableDepthTestDistance
        }
    },
    invertClassificationColor: {
        get: function() {
            return this._invertClassificationColor
        }
    },
    orthographicIn3D: {
        get: function() {
            return this._orthographicIn3D
        }
    },
    ellipsoid: {
        get: function() {
            return v(this._ellipsoid, se.WGS84)
        }
    }
});

function kT(e, t) {
    y.clone(t, e._view), y.getMatrix3(t, e._viewRotation), e._view3DDirty = !0, e._inverseView3DDirty = !0, e._modelViewDirty = !0, e._modelView3DDirty = !0, e._modelViewRelativeToEyeDirty = !0, e._inverseModelViewDirty = !0, e._inverseModelView3DDirty = !0, e._viewProjectionDirty = !0, e._inverseViewProjectionDirty = !0, e._modelViewProjectionDirty = !0, e._modelViewProjectionRelativeToEyeDirty = !0, e._modelViewInfiniteProjectionDirty = !0, e._normalDirty = !0, e._inverseNormalDirty = !0, e._normal3DDirty = !0, e._inverseNormal3DDirty = !0
}

function YT(e, t) {
    y.clone(t, e._inverseView), y.getMatrix3(t, e._inverseViewRotation)
}

function jT(e, t) {
    y.clone(t, e._projection), e._inverseProjectionDirty = !0, e._viewProjectionDirty = !0, e._inverseViewProjectionDirty = !0, e._modelViewProjectionDirty = !0, e._modelViewProjectionRelativeToEyeDirty = !0
}

function XT(e, t) {
    y.clone(t, e._infiniteProjection), e._modelViewInfiniteProjectionDirty = !0
}

function ZT(e, t) {
    u.clone(t.positionWC, e._cameraPosition), u.clone(t.directionWC, e._cameraDirection), u.clone(t.rightWC, e._cameraRight), u.clone(t.upWC, e._cameraUp);
    var r = t.positionCartographic;
    c(r) ? e._eyeHeight = r.height : e._eyeHeight = -e._ellipsoid.maximumRadius, e._encodedCameraPositionMCDirty = !0
}
gi.prototype.updateCamera = function(e) {
    kT(this, e.viewMatrix), YT(this, e.inverseViewMatrix), ZT(this, e), this._entireFrustum.x = e.frustum.near, this._entireFrustum.y = e.frustum.far, this.updateFrustum(e.frustum), this._orthographicIn3D = this._mode !== Q.SCENE2D && e.frustum instanceof $e
};
gi.prototype.updateFrustum = function(e) {
    jT(this, e.projectionMatrix), c(e.infiniteProjectionMatrix) && XT(this, e.infiniteProjectionMatrix), this._currentFrustum.x = e.near, this._currentFrustum.y = e.far, this._farDepthFromNearPlusOne = e.far - e.near + 1, this._log2FarDepthFromNearPlusOne = p.log2(this._farDepthFromNearPlusOne), this._oneOverLog2FarDepthFromNearPlusOne = 1 / this._log2FarDepthFromNearPlusOne, c(e._offCenterFrustum) && (e = e._offCenterFrustum), this._frustumPlanes.x = e.top, this._frustumPlanes.y = e.bottom, this._frustumPlanes.z = e.left, this._frustumPlanes.w = e.right
};
gi.prototype.updatePass = function(e) {
    this._pass = e
};
var KT = [],
    QT = new Rl;
gi.prototype.update = function(e) {
    this._mode = e.mode, this._mapProjection = e.mapProjection, this._ellipsoid = e.mapProjection.ellipsoid, this._pixelRatio = e.pixelRatio;
    var t = e.camera;
    this.updateCamera(t), e.mode === Q.SCENE2D ? (this._frustum2DWidth = t.frustum.right - t.frustum.left, this._eyeHeight2D.x = this._frustum2DWidth * .5, this._eyeHeight2D.y = this._eyeHeight2D.x * this._eyeHeight2D.x) : (this._frustum2DWidth = 0, this._eyeHeight2D.x = 0, this._eyeHeight2D.y = 0);
    var r = v(e.light, QT);
    r instanceof Rl ? (this._lightDirectionWC = u.clone(this._sunDirectionWC, this._lightDirectionWC), this._lightDirectionEC = u.clone(this._sunDirectionEC, this._lightDirectionEC)) : (this._lightDirectionWC = u.normalize(u.negate(r.direction, this._lightDirectionWC), this._lightDirectionWC), this._lightDirectionEC = P.multiplyByVector(this.viewRotation3D, this._lightDirectionWC, this._lightDirectionEC));
    var n = r.color,
        i = u.fromElements(n.red, n.green, n.blue, this._lightColorHdr);
    i = u.multiplyByScalar(i, r.intensity, i);
    var a = u.maximumComponent(i);
    a > 1 ? u.divideByScalar(i, a, this._lightColor) : u.clone(i, this._lightColor), this._environmentMap = v(e.environmentMap, e.context.defaultCubeMap), this._sphericalHarmonicCoefficients = v(e.sphericalHarmonicCoefficients, KT), this._specularEnvironmentMaps = e.specularEnvironmentMaps, this._specularEnvironmentMapsMaximumLOD = e.specularEnvironmentMapsMaximumLOD, c(this._specularEnvironmentMaps) && R.clone(this._specularEnvironmentMaps.dimensions, this._specularEnvironmentMapsDimensions), this._fogDensity = e.fog.density, this._invertClassificationColor = e.invertClassificationColor, this._frameState = e, this._imagerySplitPosition = e.imagerySplitPosition * e.context.drawingBufferWidth;
    var o = t.frustum.fov,
        s = this._viewport,
        h;
    c(o) ? s.height > s.width ? h = Math.tan(.5 * o) * 2 / s.height : h = Math.tan(.5 * o) * 2 / s.width : h = 1 / Math.max(s.width, s.height), this._geometricToleranceOverMeter = h * e.maximumScreenSpaceError, H.clone(e.backgroundColor, this._backgroundColor), this._minimumDisableDepthTestDistance = e.minimumDisableDepthTestDistance, this._minimumDisableDepthTestDistance *= this._minimumDisableDepthTestDistance, this._minimumDisableDepthTestDistance === Number.POSITIVE_INFINITY && (this._minimumDisableDepthTestDistance = -1)
};

function Yc(e) {
    if (e._viewportDirty) {
        var t = e._viewport;
        y.computeOrthographicOffCenter(t.x, t.x + t.width, t.y, t.y + t.height, 0, 1, e._viewportOrthographicMatrix), y.computeViewportTransformation(t, 0, 1, e._viewportTransformation), e._viewportDirty = !1
    }
}

function $T(e) {
    e._inverseProjectionDirty && (e._inverseProjectionDirty = !1, e._mode !== Q.SCENE2D && e._mode !== Q.MORPHING && !e._orthographicIn3D ? y.inverse(e._projection, e._inverseProjection) : y.clone(y.ZERO, e._inverseProjection))
}

function JT(e) {
    e._modelViewDirty && (e._modelViewDirty = !1, y.multiplyTransformation(e._view, e._model, e._modelView))
}

function ey(e) {
    e._modelView3DDirty && (e._modelView3DDirty = !1, y.multiplyTransformation(e.view3D, e._model, e._modelView3D))
}

function ty(e) {
    e._inverseModelViewDirty && (e._inverseModelViewDirty = !1, y.inverse(e.modelView, e._inverseModelView))
}

function ry(e) {
    e._inverseModelView3DDirty && (e._inverseModelView3DDirty = !1, y.inverse(e.modelView3D, e._inverseModelView3D))
}

function ny(e) {
    e._viewProjectionDirty && (e._viewProjectionDirty = !1, y.multiply(e._projection, e._view, e._viewProjection))
}

function iy(e) {
    e._inverseViewProjectionDirty && (e._inverseViewProjectionDirty = !1, y.inverse(e.viewProjection, e._inverseViewProjection))
}

function ay(e) {
    e._modelViewProjectionDirty && (e._modelViewProjectionDirty = !1, y.multiply(e._projection, e.modelView, e._modelViewProjection))
}

function oy(e) {
    if (e._modelViewRelativeToEyeDirty) {
        e._modelViewRelativeToEyeDirty = !1;
        var t = e.modelView,
            r = e._modelViewRelativeToEye;
        r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r[6] = t[6], r[7] = t[7], r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11], r[12] = 0, r[13] = 0, r[14] = 0, r[15] = t[15]
    }
}

function sy(e) {
    e._inverseModelViewProjectionDirty && (e._inverseModelViewProjectionDirty = !1, y.inverse(e.modelViewProjection, e._inverseModelViewProjection))
}

function uy(e) {
    e._modelViewProjectionRelativeToEyeDirty && (e._modelViewProjectionRelativeToEyeDirty = !1, y.multiply(e._projection, e.modelViewRelativeToEye, e._modelViewProjectionRelativeToEye))
}

function cy(e) {
    e._modelViewInfiniteProjectionDirty && (e._modelViewInfiniteProjectionDirty = !1, y.multiply(e._infiniteProjection, e.modelView, e._modelViewInfiniteProjection))
}

function hy(e) {
    if (e._normalDirty) {
        e._normalDirty = !1;
        var t = e._normal;
        y.getMatrix3(e.inverseModelView, t), P.getRotation(t, t), P.transpose(t, t)
    }
}

function fy(e) {
    if (e._normal3DDirty) {
        e._normal3DDirty = !1;
        var t = e._normal3D;
        y.getMatrix3(e.inverseModelView3D, t), P.getRotation(t, t), P.transpose(t, t)
    }
}

function ly(e) {
    e._inverseNormalDirty && (e._inverseNormalDirty = !1, y.getMatrix3(e.inverseModelView, e._inverseNormal), P.getRotation(e._inverseNormal, e._inverseNormal))
}

function dy(e) {
    e._inverseNormal3DDirty && (e._inverseNormal3DDirty = !1, y.getMatrix3(e.inverseModelView3D, e._inverseNormal3D), P.getRotation(e._inverseNormal3D, e._inverseNormal3D))
}
var jc = new u;

function Xc(e) {
    e._encodedCameraPositionMCDirty && (e._encodedCameraPositionMCDirty = !1, y.multiplyByPoint(e.inverseModel, e._cameraPosition, jc), xr.fromCartesian(jc, e._encodedCameraPositionMC))
}

function ds(e) {
    e._view3DDirty && (y.clone(e._view, e._view3D), y.getMatrix3(e._view3D, e._viewRotation3D), e._view3DDirty = !1)
}

function Zc(e) {
    e._inverseView3DDirty && (y.inverseTransformation(e.view3D, e._inverseView3D), y.getMatrix3(e._inverseView3D, e._inverseViewRotation3D), e._inverseView3DDirty = !1)
}

function _y() {
    return E(this.constructor.name)
}

function my(e, t) {
    var r = "WebGL Error:  ";
    switch (t) {
        case e.INVALID_ENUM:
            r += "INVALID_ENUM";
            break;
        case e.INVALID_VALUE:
            r += "INVALID_VALUE";
            break;
        case e.INVALID_OPERATION:
            r += "INVALID_OPERATION";
            break;
        case e.OUT_OF_MEMORY:
            r += "OUT_OF_MEMORY";
            break;
        case e.CONTEXT_LOST_WEBGL:
            r += "CONTEXT_LOST_WEBGL lost";
            break;
        default:
            r += "Unknown (" + t + ")"
    }
    return r
}

function vy(e, t, r, n) {
    for (var i = my(e, n) + ": " + t.name + "(", a = 0; a < r.length; ++a) a !== 0 && (i += ", "), i += r[a];
    return i += ");", i
}

function py(e, t, r) {
    var n = e.getError();
    if (n !== e.NO_ERROR) throw new lt(vy(e, t, r, n))
}

function gy(e, t, r) {
    return {
        get: function() {
            var n = e[t];
            return r(e, "get: " + t, n), e[t]
        },
        set: function(n) {
            e[t] = n, r(e, "set: " + t, n)
        }
    }
}

function Ty(e, t) {
    if (!c(t)) return e;

    function r(o) {
        return function() {
            var s = o.apply(e, arguments);
            return t(e, o, arguments), s
        }
    }
    var n = {};
    for (var i in e) {
        var a = e[i];
        a instanceof Function ? n[i] = r(a) : Object.defineProperty(n, i, gy(e, i, t))
    }
    return n
}

function ot(e, t) {
    for (var r = t.length, n = 0; n < r; ++n) {
        var i = e.getExtension(t[n]);
        if (i) return i
    }
}

function yr(e, t) {
    if (typeof WebGLRenderingContext > "u") throw new lt("The browser does not support WebGL.  Visit http://get.webgl.org.");
    this._canvas = e, t = nr(t, !0), t = v(t, {}), t.allowTextureFilterAnisotropic = v(t.allowTextureFilterAnisotropic, !0);
    var r = v(t.webgl, {});
    r.alpha = v(r.alpha, !1), r.stencil = v(r.stencil, !0);
    var n = v(t.requestWebgl2, !1) && typeof WebGL2RenderingContext < "u",
        i = !1,
        a, o = t.getWebGLStub;
    if (c(o)) a = o(e, r);
    else if (n && (a = e.getContext("webgl2", r) || e.getContext("experimental-webgl2", r) || void 0, c(a) && (i = !0)), c(a) || (a = e.getContext("webgl", r) || e.getContext("experimental-webgl", r) || void 0), !c(a)) throw new lt("The browser supports WebGL, but initialization failed.");
    this._originalGLContext = a, this._gl = a, this._webgl2 = i, this._id = fo(), this.validateFramebuffer = !1, this.validateShaderProgram = !1, this.logShaderCompilation = !1, this._throwOnWebGLError = !1, this._shaderCache = new Mr(this), this._textureCache = new _y;
    var s = a;
    this._stencilBits = s.getParameter(s.STENCIL_BITS), oe._maximumCombinedTextureImageUnits = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS), oe._maximumCubeMapSize = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), oe._maximumFragmentUniformVectors = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), oe._maximumTextureImageUnits = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), oe._maximumRenderbufferSize = s.getParameter(s.MAX_RENDERBUFFER_SIZE), oe._maximumTextureSize = s.getParameter(s.MAX_TEXTURE_SIZE), oe._maximumVaryingVectors = s.getParameter(s.MAX_VARYING_VECTORS), oe._maximumVertexAttributes = s.getParameter(s.MAX_VERTEX_ATTRIBS), oe._maximumVertexTextureImageUnits = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), oe._maximumVertexUniformVectors = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS);
    var h = s.getParameter(s.ALIASED_LINE_WIDTH_RANGE);
    oe._minimumAliasedLineWidth = h[0], oe._maximumAliasedLineWidth = h[1];
    var f = s.getParameter(s.ALIASED_POINT_SIZE_RANGE);
    oe._minimumAliasedPointSize = f[0], oe._maximumAliasedPointSize = f[1];
    var l = s.getParameter(s.MAX_VIEWPORT_DIMS);
    oe._maximumViewportWidth = l[0], oe._maximumViewportHeight = l[1];
    var d = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT);
    oe._highpFloatSupported = d.precision !== 0;
    var m = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_INT);
    oe._highpIntSupported = m.rangeMax !== 0, this._antialias = s.getContextAttributes().antialias, this._standardDerivatives = !!ot(s, ["OES_standard_derivatives"]), this._blendMinmax = !!ot(s, ["EXT_blend_minmax"]), this._elementIndexUint = !!ot(s, ["OES_element_index_uint"]), this._depthTexture = !!ot(s, ["WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"]), this._fragDepth = !!ot(s, ["EXT_frag_depth"]), this._debugShaders = ot(s, ["WEBGL_debug_shaders"]), this._textureFloat = !!ot(s, ["OES_texture_float"]), this._textureHalfFloat = !!ot(s, ["OES_texture_half_float"]), this._textureFloatLinear = !!ot(s, ["OES_texture_float_linear"]), this._textureHalfFloatLinear = !!ot(s, ["OES_texture_half_float_linear"]), this._colorBufferFloat = !!ot(s, ["EXT_color_buffer_float", "WEBGL_color_buffer_float"]), this._floatBlend = !!ot(s, ["EXT_float_blend"]), this._colorBufferHalfFloat = !!ot(s, ["EXT_color_buffer_half_float"]), this._s3tc = !!ot(s, ["WEBGL_compressed_texture_s3tc", "MOZ_WEBGL_compressed_texture_s3tc", "WEBKIT_WEBGL_compressed_texture_s3tc"]), this._pvrtc = !!ot(s, ["WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc"]), this._etc1 = !!ot(s, ["WEBGL_compressed_texture_etc1"]);
    var _ = t.allowTextureFilterAnisotropic ? ot(s, ["EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic"]) : void 0;
    this._textureFilterAnisotropic = _, oe._maximumTextureFilterAnisotropy = c(_) ? s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;
    var g, T, C, A, S, x, I, O, F, b;
    if (i) {
        var N = this;
        g = function() {
            return N._gl.createVertexArray()
        }, T = function(G) {
            N._gl.bindVertexArray(G)
        }, C = function(G) {
            N._gl.deleteVertexArray(G)
        }, A = function(G, U, q, Y, j) {
            s.drawElementsInstanced(G, U, q, Y, j)
        }, S = function(G, U, q, Y) {
            s.drawArraysInstanced(G, U, q, Y)
        }, x = function(G, U) {
            s.vertexAttribDivisor(G, U)
        }, I = function(G) {
            s.drawBuffers(G)
        }
    } else O = ot(s, ["OES_vertex_array_object"]), c(O) && (g = function() {
        return O.createVertexArrayOES()
    }, T = function(G) {
        O.bindVertexArrayOES(G)
    }, C = function(G) {
        O.deleteVertexArrayOES(G)
    }), F = ot(s, ["ANGLE_instanced_arrays"]), c(F) && (A = function(G, U, q, Y, j) {
        F.drawElementsInstancedANGLE(G, U, q, Y, j)
    }, S = function(G, U, q, Y) {
        F.drawArraysInstancedANGLE(G, U, q, Y)
    }, x = function(G, U) {
        F.vertexAttribDivisorANGLE(G, U)
    }), b = ot(s, ["WEBGL_draw_buffers"]), c(b) && (I = function(G) {
        b.drawBuffersWEBGL(G)
    });
    this.glCreateVertexArray = g, this.glBindVertexArray = T, this.glDeleteVertexArray = C, this.glDrawElementsInstanced = A, this.glDrawArraysInstanced = S, this.glVertexAttribDivisor = x, this.glDrawBuffers = I, this._vertexArrayObject = !!O, this._instancedArrays = !!F, this._drawBuffers = !!b, oe._maximumDrawBuffers = this.drawBuffers ? s.getParameter(w.MAX_DRAW_BUFFERS) : 1, oe._maximumColorAttachments = this.drawBuffers ? s.getParameter(w.MAX_COLOR_ATTACHMENTS) : 1, this._clearColor = new H(0, 0, 0, 0), this._clearDepth = 1, this._clearStencil = 0;
    var D = new gi,
        V = new wl(this),
        M = Xe.fromCache();
    this._defaultPassState = V, this._defaultRenderState = M, this._defaultTexture = void 0, this._defaultCubeMap = void 0, this._us = D, this._currentRenderState = M, this._currentPassState = V, this._currentFramebuffer = void 0, this._maxFrameTextureUnitIndex = 0, this._vertexAttribDivisors = [], this._previousDrawInstanced = !1;
    for (var W = 0; W < oe._maximumVertexAttributes; W++) this._vertexAttribDivisors.push(0);
    this._pickObjects = {}, this._nextPickColor = new Uint32Array(1), this.options = t, this.cache = {}, Xe.apply(s, M, V)
}
var yy = {};
Object.defineProperties(yr.prototype, {
    id: {
        get: function() {
            return this._id
        }
    },
    webgl2: {
        get: function() {
            return this._webgl2
        }
    },
    canvas: {
        get: function() {
            return this._canvas
        }
    },
    shaderCache: {
        get: function() {
            return this._shaderCache
        }
    },
    textureCache: {
        get: function() {
            return this._textureCache
        }
    },
    uniformState: {
        get: function() {
            return this._us
        }
    },
    stencilBits: {
        get: function() {
            return this._stencilBits
        }
    },
    stencilBuffer: {
        get: function() {
            return this._stencilBits >= 8
        }
    },
    antialias: {
        get: function() {
            return this._antialias
        }
    },
    standardDerivatives: {
        get: function() {
            return this._standardDerivatives || this._webgl2
        }
    },
    floatBlend: {
        get: function() {
            return this._floatBlend
        }
    },
    blendMinmax: {
        get: function() {
            return this._blendMinmax || this._webgl2
        }
    },
    elementIndexUint: {
        get: function() {
            return this._elementIndexUint || this._webgl2
        }
    },
    depthTexture: {
        get: function() {
            return this._depthTexture || this._webgl2
        }
    },
    floatingPointTexture: {
        get: function() {
            return this._webgl2 || this._textureFloat
        }
    },
    halfFloatingPointTexture: {
        get: function() {
            return this._webgl2 || this._textureHalfFloat
        }
    },
    textureFloatLinear: {
        get: function() {
            return this._textureFloatLinear
        }
    },
    textureHalfFloatLinear: {
        get: function() {
            return this._webgl2 && this._textureFloatLinear || !this._webgl2 && this._textureHalfFloatLinear
        }
    },
    textureFilterAnisotropic: {
        get: function() {
            return !!this._textureFilterAnisotropic
        }
    },
    s3tc: {
        get: function() {
            return this._s3tc
        }
    },
    pvrtc: {
        get: function() {
            return this._pvrtc
        }
    },
    etc1: {
        get: function() {
            return this._etc1
        }
    },
    vertexArrayObject: {
        get: function() {
            return this._vertexArrayObject || this._webgl2
        }
    },
    fragmentDepth: {
        get: function() {
            return this._fragDepth || this._webgl2
        }
    },
    instancedArrays: {
        get: function() {
            return this._instancedArrays || this._webgl2
        }
    },
    colorBufferFloat: {
        get: function() {
            return this._colorBufferFloat
        }
    },
    colorBufferHalfFloat: {
        get: function() {
            return this._webgl2 && this._colorBufferFloat || !this._webgl2 && this._colorBufferHalfFloat
        }
    },
    drawBuffers: {
        get: function() {
            return this._drawBuffers || this._webgl2
        }
    },
    debugShaders: {
        get: function() {
            return this._debugShaders
        }
    },
    throwOnWebGLError: {
        get: function() {
            return this._throwOnWebGLError
        },
        set: function(e) {
            this._throwOnWebGLError = e, this._gl = Ty(this._originalGLContext, e ? py : void 0)
        }
    },
    defaultTexture: {
        get: function() {
            return this._defaultTexture === void 0 && (this._defaultTexture = new Ze({
                context: this,
                source: {
                    width: 1,
                    height: 1,
                    arrayBufferView: new Uint8Array([255, 255, 255, 255])
                },
                flipY: !1
            })), this._defaultTexture
        }
    },
    drawingBufferHeight: {
        get: function() {
            return this._gl.drawingBufferHeight
        }
    },
    drawingBufferWidth: {
        get: function() {
            return this._gl.drawingBufferWidth
        }
    },
    defaultFramebuffer: {
        get: function() {
            return yy
        }
    }
});

function xl(e, t, r, n) {
    var i = e._currentRenderState,
        a = e._currentPassState;
    e._currentRenderState = t, e._currentPassState = r, Xe.partialApply(e._gl, i, t, a, r, n)
}
var Cu;
typeof WebGLRenderingContext < "u" && (Cu = [w.BACK]);

function Sl(e, t) {
    if (t !== e._currentFramebuffer) {
        e._currentFramebuffer = t;
        var r = Cu;
        if (c(t)) t._bind(), r = t._getActiveColorAttachments();
        else {
            var n = e._gl;
            n.bindFramebuffer(n.FRAMEBUFFER, null)
        }
        e.drawBuffers && e.glDrawBuffers(r)
    }
}
var Ey = new jt;
yr.prototype.clear = function(e, t) {
    e = v(e, Ey), t = v(t, this._defaultPassState);
    var r = this._gl,
        n = 0,
        i = e.color,
        a = e.depth,
        o = e.stencil;
    c(i) && (H.equals(this._clearColor, i) || (H.clone(i, this._clearColor), r.clearColor(i.red, i.green, i.blue, i.alpha)), n |= r.COLOR_BUFFER_BIT), c(a) && (a !== this._clearDepth && (this._clearDepth = a, r.clearDepth(a)), n |= r.DEPTH_BUFFER_BIT), c(o) && (o !== this._clearStencil && (this._clearStencil = o, r.clearStencil(o)), n |= r.STENCIL_BUFFER_BIT);
    var s = v(e.renderState, this._defaultRenderState);
    xl(this, s, t, !0);
    var h = v(e.framebuffer, t.framebuffer);
    Sl(this, h), r.clear(n)
};

function Cy(e, t, r, n, i) {
    Sl(e, t), xl(e, i, r, !1), n._bind(), e._maxFrameTextureUnitIndex = Math.max(e._maxFrameTextureUnitIndex, n.maximumTextureUnitIndex)
}

function Ay(e, t, r, n) {
    var i = t._primitiveType,
        a = t._vertexArray,
        o = t._offset,
        s = t._count,
        h = t.instanceCount;
    e._us.model = v(t._modelMatrix, y.IDENTITY), r._setUniforms(n, e._us, e.validateShaderProgram), a._bind();
    var f = a.indexBuffer;
    c(f) ? (o = o * f.bytesPerIndex, s = v(s, f.numberOfIndices), h === 0 ? e._gl.drawElements(i, s, f.indexDatatype, o) : e.glDrawElementsInstanced(i, s, f.indexDatatype, o, h)) : (s = v(s, a.numberOfVertices), h === 0 ? e._gl.drawArrays(i, o, s) : e.glDrawArraysInstanced(i, o, s, h)), a._unBind()
}
yr.prototype.draw = function(e, t, r, n) {
    t = v(t, this._defaultPassState);
    var i = v(e._framebuffer, t.framebuffer),
        a = v(e._renderState, this._defaultRenderState);
    r = v(r, e._shaderProgram), n = v(n, e._uniformMap), Cy(this, i, t, r, a), Ay(this, e, r, n)
};
yr.prototype.endFrame = function() {
    var e = this._gl;
    e.useProgram(null), this._currentFramebuffer = void 0, e.bindFramebuffer(e.FRAMEBUFFER, null);
    var t = Cu;
    this.drawBuffers && this.glDrawBuffers(t);
    var r = this._maxFrameTextureUnitIndex;
    this._maxFrameTextureUnitIndex = 0;
    for (var n = 0; n < r; ++n) e.activeTexture(e.TEXTURE0 + n), e.bindTexture(e.TEXTURE_2D, null), e.bindTexture(e.TEXTURE_CUBE_MAP, null)
};
yr.prototype.readPixels = E("Context#readPixels");
var Il = {
    position: 0,
    textureCoordinates: 1
};
yr.prototype.getViewportQuadVertexArray = function() {
    var e = this.cache.viewportQuad_vertexArray;
    if (!c(e)) {
        var t = new Zi({
            attributes: {
                position: new Zs({
                    componentDatatype: Be.FLOAT,
                    componentsPerAttribute: 2,
                    values: [-1, -1, 1, -1, 1, 1, -1, 1]
                }),
                textureCoordinates: new Zs({
                    componentDatatype: Be.FLOAT,
                    componentsPerAttribute: 2,
                    values: [0, 0, 1, 0, 1, 1, 0, 1]
                })
            },
            indices: new Uint16Array([0, 1, 2, 0, 2, 3]),
            primitiveType: zn.TRIANGLES
        });
        e = ar.fromGeometry({
            context: this,
            geometry: t,
            attributeLocations: Il,
            bufferUsage: nn.STATIC_DRAW,
            interleave: !0
        }), this.cache.viewportQuad_vertexArray = e
    }
    return e
};
yr.prototype.createViewportQuadCommand = function(e, t) {
    return t = v(t, v.EMPTY_OBJECT), new Sr({
        vertexArray: this.getViewportQuadVertexArray(),
        primitiveType: zn.TRIANGLES,
        renderState: t.renderState,
        shaderProgram: Vt.fromCache({
            context: this,
            vertexShaderSource: Al,
            fragmentShaderSource: e,
            attributeLocations: Il
        }),
        uniformMap: t.uniformMap,
        owner: t.owner,
        framebuffer: t.framebuffer,
        pass: t.pass
    })
};
yr.prototype.getObjectByPickColor = E("Context#getObjectByPickColor");
yr.prototype.createPickId = E("Context#createPickId");
yr.prototype.isDestroyed = function() {
    return !1
};
yr.prototype.destroy = function() {
    var e = this.cache;
    for (var t in e)
        if (e.hasOwnProperty(t)) {
            var r = e[t];
            c(r.destroy) && r.destroy()
        } return this._shaderCache = this._shaderCache.destroy(), this._textureCache = this._textureCache.destroy(), this._defaultTexture = this._defaultTexture && this._defaultTexture.destroy(), Je(this)
};

function wy(e) {
    var t = e._uSquared,
        r = e._ellipsoid.maximumRadius,
        n = e._ellipsoid.minimumRadius,
        i = (r - n) / r,
        a = Math.cos(e._startHeading),
        o = Math.sin(e._startHeading),
        s = (1 - i) * Math.tan(e._start.latitude),
        h = 1 / Math.sqrt(1 + s * s),
        f = h * s,
        l = Math.atan2(s, a),
        d = h * o,
        m = d * d,
        _ = 1 - m,
        g = Math.sqrt(_),
        T = t / 4,
        C = T * T,
        A = C * T,
        S = C * C,
        x = 1 + T - 3 * C / 4 + 5 * A / 4 - 175 * S / 64,
        I = 1 - T + 15 * C / 8 - 35 * A / 8,
        O = 1 - 3 * T + 35 * C / 4,
        F = 1 - 5 * T,
        b = x * l - I * Math.sin(2 * l) * T / 2 - O * Math.sin(4 * l) * C / 16 - F * Math.sin(6 * l) * A / 48 - Math.sin(8 * l) * 5 * S / 512,
        N = e._constants;
    N.a = r, N.b = n, N.f = i, N.cosineHeading = a, N.sineHeading = o, N.tanU = s, N.cosineU = h, N.sineU = f, N.sigma = l, N.sineAlpha = d, N.sineSquaredAlpha = m, N.cosineSquaredAlpha = _, N.cosineAlpha = g, N.u2Over4 = T, N.u4Over16 = C, N.u6Over64 = A, N.u8Over256 = S, N.a0 = x, N.a1 = I, N.a2 = O, N.a3 = F, N.distanceRatio = b
}

function Ry(e, t) {
    return e * t * (4 + e * (4 - 3 * t)) / 16
}

function Ol(e, t, r, n, i, a, o) {
    var s = Ry(e, r);
    return (1 - s) * e * t * (n + s * i * (o + s * a * (2 * o * o - 1)))
}

function xy(e, t, r, n, i, a, o) {
    var s = (t - r) / t,
        h = a - n,
        f = Math.atan((1 - s) * Math.tan(i)),
        l = Math.atan((1 - s) * Math.tan(o)),
        d = Math.cos(f),
        m = Math.sin(f),
        _ = Math.cos(l),
        g = Math.sin(l),
        T = d * _,
        C = d * g,
        A = m * g,
        S = m * _,
        x = h,
        I = p.TWO_PI,
        O = Math.cos(x),
        F = Math.sin(x),
        b, N, D, V, M;
    do {
        O = Math.cos(x), F = Math.sin(x);
        var W = C - S * O;
        D = Math.sqrt(_ * _ * F * F + W * W), N = A + T * O, b = Math.atan2(D, N);
        var G;
        D === 0 ? (G = 0, V = 1) : (G = T * F / D, V = 1 - G * G), I = x, M = N - 2 * A / V, isNaN(M) && (M = 0), x = h + Ol(s, G, V, b, D, N, M)
    } while (Math.abs(x - I) > p.EPSILON12);
    var U = V * (t * t - r * r) / (r * r),
        q = 1 + U * (4096 + U * (U * (320 - 175 * U) - 768)) / 16384,
        Y = U * (256 + U * (U * (74 - 47 * U) - 128)) / 1024,
        j = M * M,
        Z = Y * D * (M + Y * (N * (2 * j - 1) - Y * M * (4 * D * D - 3) * (4 * j - 3) / 6) / 4),
        le = r * q * (b - Z),
        ne = Math.atan2(_ * F, C - S * O),
        he = Math.atan2(d * F, C * O - S);
    e._distance = le, e._startHeading = ne, e._endHeading = he, e._uSquared = U
}
var Sy = new u,
    _s = new u;

function Pl(e, t, r, n) {
    u.normalize(n.cartographicToCartesian(t, _s), Sy), u.normalize(n.cartographicToCartesian(r, _s), _s), xy(e, n.maximumRadius, n.minimumRadius, t.longitude, t.latitude, r.longitude, r.latitude), e._start = re.clone(t, e._start), e._end = re.clone(r, e._end), e._start.height = 0, e._end.height = 0, wy(e)
}

function Ji(e, t, r) {
    var n = v(r, se.WGS84);
    this._ellipsoid = n, this._start = new re, this._end = new re, this._constants = {}, this._startHeading = void 0, this._endHeading = void 0, this._distance = void 0, this._uSquared = void 0, c(e) && c(t) && Pl(this, e, t, n)
}
Object.defineProperties(Ji.prototype, {
    ellipsoid: {
        get: function() {
            return this._ellipsoid
        }
    },
    surfaceDistance: {
        get: function() {
            return this._distance
        }
    },
    start: {
        get: function() {
            return this._start
        }
    },
    end: {
        get: function() {
            return this._end
        }
    },
    startHeading: {
        get: function() {
            return this._startHeading
        }
    },
    endHeading: {
        get: function() {
            return this._endHeading
        }
    }
});
Ji.prototype.setEndPoints = function(e, t) {
    Pl(this, e, t, this._ellipsoid)
};
Ji.prototype.interpolateUsingFraction = function(e, t) {
    return this.interpolateUsingSurfaceDistance(this._distance * e, t)
};
Ji.prototype.interpolateUsingSurfaceDistance = function(e, t) {
    var r = this._constants,
        n = r.distanceRatio + e / r.b,
        i = Math.cos(2 * n),
        a = Math.cos(4 * n),
        o = Math.cos(6 * n),
        s = Math.sin(2 * n),
        h = Math.sin(4 * n),
        f = Math.sin(6 * n),
        l = Math.sin(8 * n),
        d = n * n,
        m = n * d,
        _ = r.u8Over256,
        g = r.u2Over4,
        T = r.u6Over64,
        C = r.u4Over16,
        A = 2 * m * _ * i / 3 + n * (1 - g + 7 * C / 4 - 15 * T / 4 + 579 * _ / 64 - (C - 15 * T / 4 + 187 * _ / 16) * i - (5 * T / 4 - 115 * _ / 16) * a - 29 * _ * o / 16) + (g / 2 - C + 71 * T / 32 - 85 * _ / 16) * s + (5 * C / 16 - 5 * T / 4 + 383 * _ / 96) * h - d * ((T - 11 * _ / 2) * s + 5 * _ * h / 2) + (29 * T / 96 - 29 * _ / 16) * f + 539 * _ * l / 1536,
        S = Math.asin(Math.sin(A) * r.cosineAlpha),
        x = Math.atan(r.a / r.b * Math.tan(S));
    A = A - r.sigma;
    var I = Math.cos(2 * r.sigma + A),
        O = Math.sin(A),
        F = Math.cos(A),
        b = r.cosineU * F,
        N = r.sineU * O,
        D = Math.atan2(O * r.sineHeading, b - N * r.cosineHeading),
        V = D - Ol(r.f, r.sineAlpha, r.cosineSquaredAlpha, A, O, F, I);
    return c(t) ? (t.longitude = this._start.longitude + V, t.latitude = x, t.height = 0, t) : new re(this._start.longitude + V, x, 0)
};

function Ks(e, t, r) {
    this.heading = v(e, 0), this.pitch = v(t, 0), this.range = v(r, 0)
}
Ks.clone = function(e, t) {
    if (c(e)) return c(t) || (t = new Ks), t.heading = e.heading, t.pitch = e.pitch, t.range = e.range, t
};
/**
@license
tween.js - https://github.com/sole/tween.js
Copyright (c) 2010-2012 Tween.js authors.
Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
Date.now === void 0 && (Date.now = function() {
    return new Date().valueOf()
});
var ce = ce || function() {
    var e = [];
    return {
        REVISION: "13",
        getAll: function() {
            return e
        },
        removeAll: function() {
            e = []
        },
        add: function(t) {
            e.push(t)
        },
        remove: function(t) {
            var r = e.indexOf(t);
            r !== -1 && e.splice(r, 1)
        },
        update: function(t) {
            if (e.length === 0) return !1;
            var r = 0;
            for (t = t !== void 0 ? t : typeof window < "u" && window.performance !== void 0 && window.performance.now !== void 0 ? window.performance.now() : Date.now(); r < e.length;) e[r].update(t) ? r++ : e.splice(r, 1);
            return !0
        }
    }
}();
ce.Tween = function(e) {
    var t = e,
        r = {},
        n = {},
        i = {},
        a = 1e3,
        o = 0,
        s = !1,
        h = !1,
        f = 0,
        l = null,
        d = ce.Easing.Linear.None,
        m = ce.Interpolation.Linear,
        _ = [],
        g = null,
        T = !1,
        C = null,
        A = null,
        S = null;
    for (var x in e) r[x] = parseFloat(e[x], 10);
    this.to = function(I, O) {
        return O !== void 0 && (a = O), n = I, this
    }, this.start = function(I) {
        ce.add(this), h = !0, T = !1, l = I !== void 0 ? I : typeof window < "u" && window.performance !== void 0 && window.performance.now !== void 0 ? window.performance.now() : Date.now(), l += f;
        for (var O in n) {
            if (n[O] instanceof Array) {
                if (n[O].length === 0) continue;
                n[O] = [t[O]].concat(n[O])
            }
            r[O] = t[O], r[O] instanceof Array || (r[O] *= 1), i[O] = r[O] || 0
        }
        return this
    }, this.stop = function() {
        return h ? (ce.remove(this), h = !1, S !== null && S.call(t), this.stopChainedTweens(), this) : this
    }, this.stopChainedTweens = function() {
        for (var I = 0, O = _.length; I < O; I++) _[I].stop()
    }, this.delay = function(I) {
        return f = I, this
    }, this.repeat = function(I) {
        return o = I, this
    }, this.yoyo = function(I) {
        return s = I, this
    }, this.easing = function(I) {
        return d = I, this
    }, this.interpolation = function(I) {
        return m = I, this
    }, this.chain = function() {
        return _ = arguments, this
    }, this.onStart = function(I) {
        return g = I, this
    }, this.onUpdate = function(I) {
        return C = I, this
    }, this.onComplete = function(I) {
        return A = I, this
    }, this.onStop = function(I) {
        return S = I, this
    }, this.update = function(I) {
        var O;
        if (I < l) return !0;
        T === !1 && (g !== null && g.call(t), T = !0);
        var F = (I - l) / a;
        F = F > 1 ? 1 : F;
        var b = d(F);
        for (O in n) {
            var N = r[O] || 0,
                D = n[O];
            D instanceof Array ? t[O] = m(D, b) : (typeof D == "string" && (D = N + parseFloat(D, 10)), typeof D == "number" && (t[O] = N + (D - N) * b))
        }
        if (C !== null && C.call(t, b), F == 1)
            if (o > 0) {
                isFinite(o) && o--;
                for (O in i) {
                    if (typeof n[O] == "string" && (i[O] = i[O] + parseFloat(n[O], 10)), s) {
                        var V = i[O];
                        i[O] = n[O], n[O] = V
                    }
                    r[O] = i[O]
                }
                return l = I + f, !0
            } else {
                A !== null && A.call(t);
                for (var M = 0, W = _.length; M < W; M++) _[M].start(I);
                return !1
            } return !0
    }
};
ce.Easing = {
    Linear: {
        None: function(e) {
            return e
        }
    },
    Quadratic: {
        In: function(e) {
            return e * e
        },
        Out: function(e) {
            return e * (2 - e)
        },
        InOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        }
    },
    Cubic: {
        In: function(e) {
            return e * e * e
        },
        Out: function(e) {
            return --e * e * e + 1
        },
        InOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        }
    },
    Quartic: {
        In: function(e) {
            return e * e * e * e
        },
        Out: function(e) {
            return 1 - --e * e * e * e
        },
        InOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        }
    },
    Quintic: {
        In: function(e) {
            return e * e * e * e * e
        },
        Out: function(e) {
            return --e * e * e * e * e + 1
        },
        InOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }
    },
    Sinusoidal: {
        In: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        Out: function(e) {
            return Math.sin(e * Math.PI / 2)
        },
        InOut: function(e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        }
    },
    Exponential: {
        In: function(e) {
            return e === 0 ? 0 : Math.pow(1024, e - 1)
        },
        Out: function(e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
        },
        InOut: function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
        }
    },
    Circular: {
        In: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        Out: function(e) {
            return Math.sqrt(1 - --e * e)
        },
        InOut: function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
    },
    Elastic: {
        In: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
        },
        Out: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
        },
        InOut: function(e) {
            var t, r = .1,
                n = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
        }
    },
    Back: {
        In: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        Out: function(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        },
        InOut: function(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
    },
    Bounce: {
        In: function(e) {
            return 1 - ce.Easing.Bounce.Out(1 - e)
        },
        Out: function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        InOut: function(e) {
            return e < .5 ? ce.Easing.Bounce.In(e * 2) * .5 : ce.Easing.Bounce.Out(e * 2 - 1) * .5 + .5
        }
    }
};
ce.Interpolation = {
    Linear: function(e, t) {
        var r = e.length - 1,
            n = r * t,
            i = Math.floor(n),
            a = ce.Interpolation.Utils.Linear;
        return t < 0 ? a(e[0], e[1], n) : t > 1 ? a(e[r], e[r - 1], r - n) : a(e[i], e[i + 1 > r ? r : i + 1], n - i)
    },
    Bezier: function(e, t) {
        var r = 0,
            n = e.length - 1,
            i = Math.pow,
            a = ce.Interpolation.Utils.Bernstein,
            o;
        for (o = 0; o <= n; o++) r += i(1 - t, n - o) * i(t, o) * e[o] * a(n, o);
        return r
    },
    CatmullRom: function(e, t) {
        var r = e.length - 1,
            n = r * t,
            i = Math.floor(n),
            a = ce.Interpolation.Utils.CatmullRom;
        return e[0] === e[r] ? (t < 0 && (i = Math.floor(n = r * (1 + t))), a(e[(i - 1 + r) % r], e[i], e[(i + 1) % r], e[(i + 2) % r], n - i)) : t < 0 ? e[0] - (a(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], n - r) - e[r]) : a(e[i ? i - 1 : 0], e[i], e[r < i + 1 ? r : i + 1], e[r < i + 2 ? r : i + 2], n - i)
    },
    Utils: {
        Linear: function(e, t, r) {
            return (t - e) * r + e
        },
        Bernstein: function(e, t) {
            var r = ce.Interpolation.Utils.Factorial;
            return r(e) / r(t) / r(e - t)
        },
        Factorial: function() {
            var e = [1];
            return function(t) {
                var r = 1,
                    n;
                if (e[t]) return e[t];
                for (n = t; n > 1; n--) r *= n;
                return e[t] = r
            }
        }(),
        CatmullRom: function(e, t, r, n, i) {
            var a = (r - e) * .5,
                o = (n - t) * .5,
                s = i * i,
                h = i * s;
            return (2 * t - 2 * r + a + o) * h + (-3 * t + 3 * r - 2 * a - o) * s + a * i + t
        }
    }
};
var Kc = {};

function ea(e, t) {
    c(Kc[e]) || (Kc[e] = !0, console.warn(v(t, e)))
}
ea.geometryOutlines = "Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.";
ea.geometryZIndex = "Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored";
ea.geometryHeightReference = "Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored";
ea.geometryExtrudedHeightReference = "Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored";

function ms(e, t) {
    ea(e, t)
}
var Nl = {
    LINEAR_NONE: ce.Easing.Linear.None,
    QUADRATIC_IN: ce.Easing.Quadratic.In,
    QUADRATIC_OUT: ce.Easing.Quadratic.Out,
    QUADRATIC_IN_OUT: ce.Easing.Quadratic.InOut,
    CUBIC_IN: ce.Easing.Cubic.In,
    CUBIC_OUT: ce.Easing.Cubic.Out,
    CUBIC_IN_OUT: ce.Easing.Cubic.InOut,
    QUARTIC_IN: ce.Easing.Quartic.In,
    QUARTIC_OUT: ce.Easing.Quartic.Out,
    QUARTIC_IN_OUT: ce.Easing.Quartic.InOut,
    QUINTIC_IN: ce.Easing.Quintic.In,
    QUINTIC_OUT: ce.Easing.Quintic.Out,
    QUINTIC_IN_OUT: ce.Easing.Quintic.InOut,
    SINUSOIDAL_IN: ce.Easing.Sinusoidal.In,
    SINUSOIDAL_OUT: ce.Easing.Sinusoidal.Out,
    SINUSOIDAL_IN_OUT: ce.Easing.Sinusoidal.InOut,
    EXPONENTIAL_IN: ce.Easing.Exponential.In,
    EXPONENTIAL_OUT: ce.Easing.Exponential.Out,
    EXPONENTIAL_IN_OUT: ce.Easing.Exponential.InOut,
    CIRCULAR_IN: ce.Easing.Circular.In,
    CIRCULAR_OUT: ce.Easing.Circular.Out,
    CIRCULAR_IN_OUT: ce.Easing.Circular.InOut,
    ELASTIC_IN: ce.Easing.Elastic.In,
    ELASTIC_OUT: ce.Easing.Elastic.Out,
    ELASTIC_IN_OUT: ce.Easing.Elastic.InOut,
    BACK_IN: ce.Easing.Back.In,
    BACK_OUT: ce.Easing.Back.Out,
    BACK_IN_OUT: ce.Easing.Back.InOut,
    BOUNCE_IN: ce.Easing.Bounce.In,
    BOUNCE_OUT: ce.Easing.Bounce.Out,
    BOUNCE_IN_OUT: ce.Easing.Bounce.InOut
};
Object.defineProperties(Nl, {
    QUADRACTIC_IN: {
        get: function() {
            return ms("QUADRACTIC_IN", "QUADRACTIC_IN is deprecated and will be removed in Cesium 1.79. Use QUADRATIC_IN instead."), ce.Easing.Quadratic.In
        }
    },
    QUADRACTIC_OUT: {
        get: function() {
            return ms("QUADRACTIC_OUT", "QUADRACTIC_OUT is deprecated and will be removed in Cesium 1.79. Use QUADRATIC_OUT instead."), ce.Easing.Quadratic.Out
        }
    },
    QUADRACTIC_IN_OUT: {
        get: function() {
            return ms("QUADRACTIC_IN_OUT", "QUADRACTIC_IN_OUT is deprecated and will be removed in Cesium 1.79. Use QUADRATIC_IN_OUT instead."), ce.Easing.Quadratic.InOut
        }
    }
});
const Qs = Object.freeze(Nl);
var Ml = {};

function Iy(e, t, r) {
    var n, i, a;
    if (e instanceof Mt) {
        var o = Math.tan(.5 * e.fovy);
        return n = e.near, i = e.near * o, a = e.aspectRatio * i, Math.max(t * n / a, r * n / i)
    } else if (e instanceof gr) return n = e.near, i = e.top, a = e.right, Math.max(t * n / a, r * n / i);
    return Math.max(t, r)
}
var Oy = new u,
    Qc = new u;

function Py(e, t, r, n) {
    if (c(n) && r(.5) > n) {
        var i = r(0),
            a = r(1),
            o = r(.5),
            s = o - i,
            h = o - a;
        return function(f) {
            var l = r(f);
            if (f <= .5) {
                var d = (l - i) / s;
                return p.lerp(e, -p.PI_OVER_TWO, d)
            }
            var m = (l - a) / h;
            return p.lerp(-p.PI_OVER_TWO, t, 1 - m)
        }
    }
    return function(f) {
        return p.lerp(e, t, f)
    }
}

function Ny(e, t, r, n, i) {
    var a = i,
        o = Math.max(r, n);
    if (!c(a)) {
        var s = e.position,
            h = t,
            f = e.up,
            l = e.right,
            d = e.frustum,
            m = u.subtract(s, h, Oy),
            _ = u.magnitude(u.multiplyByScalar(f, u.dot(m, f), Qc)),
            g = u.magnitude(u.multiplyByScalar(l, u.dot(m, l), Qc));
        a = Math.min(Iy(d, _, g) * .2, 1e9)
    }
    if (o < a) {
        var T = 8,
            C = 1e6,
            A = -Math.pow((a - r) * C, 1 / T),
            S = Math.pow((a - n) * C, 1 / T);
        return function(x) {
            var I = x * (S - A) + A;
            return -Math.pow(I, T) / C + a
        }
    }
    return function(x) {
        return p.lerp(r, n, x)
    }
}

function $c(e, t) {
    return p.equalsEpsilon(e, p.TWO_PI, p.EPSILON11) && (e = 0), t > e + Math.PI ? e += p.TWO_PI : t < e - Math.PI && (e -= p.TWO_PI), e
}

function My(e, t) {
    e.longitude < t.longitude ? e.longitude += p.TWO_PI : t.longitude += p.TWO_PI
}

function Dy(e, t) {
    var r = e.longitude - t.longitude;
    r < -p.PI ? e.longitude += p.TWO_PI : r > p.PI && (t.longitude += p.TWO_PI)
}
var by = new re,
    Ly = new re;

function Fy(e, t, r, n, i, a, o, s, h, f) {
    var l = e.camera,
        d = e.mapProjection,
        m = d.ellipsoid,
        _ = re.clone(l.positionCartographic, by),
        g = l.pitch,
        T = $c(l.heading, n),
        C = $c(l.roll, a),
        A = m.cartesianToCartographic(r, Ly);
    _.longitude = p.zeroToTwoPi(_.longitude), A.longitude = p.zeroToTwoPi(A.longitude);
    var S = !1;
    if (c(s)) {
        var x = p.zeroToTwoPi(s),
            I = Math.min(_.longitude, A.longitude),
            O = Math.max(_.longitude, A.longitude),
            F = x >= I && x <= O;
        if (c(h)) {
            var b = Math.abs(_.longitude - A.longitude),
                N = p.TWO_PI - b,
                D = F ? b : N,
                V = F ? N : b;
            D < V * h && !F && (S = !0)
        } else F || (S = !0)
    }
    S ? My(_, A) : Dy(_, A);
    var M = Ny(l, r, _.height, A.height, o),
        W = Py(g, i, M, f);

    function G() {
        var U = _.longitude,
            q = A.longitude,
            Y = _.latitude,
            j = A.latitude;
        return function(le) {
            var ne = le.time / t,
                he = u.fromRadians(p.lerp(U, q, ne), p.lerp(Y, j, ne), M(ne));
            l.setView({
                destination: he,
                orientation: {
                    heading: p.lerp(T, n, ne),
                    pitch: W(ne),
                    roll: p.lerp(C, a, ne)
                }
            })
        }
    }
    return G()
}

function Jc(e, t) {
    return {
        startObject: {},
        stopObject: {},
        duration: 0,
        complete: e,
        cancel: t
    }
}

function eh(e, t) {
    function r() {
        typeof t == "function" && t(), e.enableInputs = !0
    }
    return r
}
Ml.createTween = function(e, t) {
    t = v(t, v.EMPTY_OBJECT);
    var r = t.destination,
        n = e.mode;
    v(t.convert, !0);
    var i = e.mapProjection,
        a = i.ellipsoid,
        o = t.maximumHeight,
        s = t.flyOverLongitude,
        h = t.flyOverLongitudeWeight,
        f = t.pitchAdjustHeight,
        l = t.easingFunction,
        d = e.camera,
        m = t.endTransform;
    c(m) && d._setTransform(m);
    var _ = t.duration;
    c(_) || (_ = Math.ceil(u.distance(d.position, r) / 1e6) + 2, _ = Math.min(_, 3));
    var g = v(t.heading, 0),
        T = v(t.pitch, -p.PI_OVER_TWO),
        C = v(t.roll, 0),
        A = e.screenSpaceCameraController;
    A.enableInputs = !1;
    var S = eh(A, t.complete),
        x = eh(A, t.cancel),
        I = d.frustum,
        O = e.mode === Q.SCENE2D;
    if (O = O && R.equalsEpsilon(d.position, r, p.EPSILON6), O = O && p.equalsEpsilon(Math.max(I.right - I.left, I.top - I.bottom), r.z, p.EPSILON6), O = O || e.mode !== Q.SCENE2D && u.equalsEpsilon(r, d.position, p.EPSILON10), O = O && p.equalsEpsilon(p.negativePiToPi(g), p.negativePiToPi(d.heading), p.EPSILON10) && p.equalsEpsilon(p.negativePiToPi(T), p.negativePiToPi(d.pitch), p.EPSILON10) && p.equalsEpsilon(p.negativePiToPi(C), p.negativePiToPi(d.roll), p.EPSILON10), O) return Jc(S, x);
    var F = new Array(4);
    if (F[Q.SCENE3D] = Fy, _ <= 0) {
        var b = function() {
            var M = F[n](e, 1, r, g, T, C, o, s, h, f);
            M({
                time: 1
            }), typeof S == "function" && S()
        };
        return Jc(b, x)
    }
    var N = F[n](e, _, r, g, T, C, o, s, h, f);
    if (!c(l)) {
        var D = d.positionCartographic.height,
            V = n === Q.SCENE3D ? a.cartesianToCartographic(r).height : r.z;
        D > V && D > 11500 ? l = Qs.CUBIC_OUT : l = Qs.QUINTIC_IN_OUT
    }
    return {
        duration: _,
        easingFunction: l,
        startObject: {
            time: 0
        },
        stopObject: {
            time: _
        },
        update: N,
        complete: S,
        cancel: x
    }
};

function $(e) {
    this._scene = e, this._transform = y.clone(y.IDENTITY), this._invTransform = y.clone(y.IDENTITY), this._actualTransform = y.clone(y.IDENTITY), this._actualInvTransform = y.clone(y.IDENTITY), this._transformChanged = !1, this.position = new u, this._position = new u, this._positionWC = new u, this._positionCartographic = new re, this._oldPositionWC = void 0, this.positionWCDeltaMagnitude = 0, this.positionWCDeltaMagnitudeLastFrame = 0, this.timeSinceMoved = 0, this._lastMovedTimestamp = 0, this.direction = new u, this._direction = new u, this._directionWC = new u, this.up = new u, this._up = new u, this._upWC = new u, this.right = new u, this._right = new u, this._rightWC = new u, this.frustum = new Mt, this.frustum.aspectRatio = e.drawingBufferWidth / e.drawingBufferHeight, this.frustum.fov = p.toRadians(60), this.defaultMoveAmount = 1e5, this.defaultLookAmount = Math.PI / 60, this.defaultRotateAmount = Math.PI / 3600, this.defaultZoomAmount = 1e5, this.constrainedAxis = void 0, this.maximumZoomFactor = 1.5, this._moveStart = new ze, this._moveEnd = new ze, this._changed = new ze, this._changedPosition = void 0, this._changedDirection = void 0, this._changedFrustum = void 0, this.percentageChanged = .5, this._viewMatrix = new y, this._invViewMatrix = new y, Dl(this), this._mode = Q.SCENE3D, this._modeChanged = !0;
    var t = e.mapProjection;
    this._projection = t, this._maxCoord = t.project(new re(Math.PI, p.PI_OVER_TWO)), this._max2Dfrustum = void 0, fE(this, $.DEFAULT_VIEW_RECTANGLE, this.position, !0);
    var r = u.magnitude(this.position);
    r += r * $.DEFAULT_VIEW_FACTOR, u.normalize(this.position, this.position), u.multiplyByScalar(this.position, r, this.position)
}
$.TRANSFORM_2D = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1);
$.TRANSFORM_2D_INVERSE = y.inverseTransformation($.TRANSFORM_2D, new y);
$.DEFAULT_VIEW_RECTANGLE = L.fromDegrees(-95, -20, -70, 90);
$.DEFAULT_VIEW_FACTOR = .5;
$.DEFAULT_OFFSET = new Ks(0, -p.PI_OVER_FOUR, 0);

function Dl(e) {
    y.computeView(e._position, e._direction, e._up, e._right, e._viewMatrix), y.multiply(e._viewMatrix, e._actualInvTransform, e._viewMatrix), y.inverseTransformation(e._viewMatrix, e._invViewMatrix)
}

function By(e) {
    if (!c(e._oldPositionWC)) e._oldPositionWC = u.clone(e.positionWC, e._oldPositionWC);
    else {
        e.positionWCDeltaMagnitudeLastFrame = e.positionWCDeltaMagnitude;
        var t = u.subtract(e.positionWC, e._oldPositionWC, e._oldPositionWC);
        e.positionWCDeltaMagnitude = u.magnitude(t), e._oldPositionWC = u.clone(e.positionWC, e._oldPositionWC), e.positionWCDeltaMagnitude > 0 ? (e.timeSinceMoved = 0, e._lastMovedTimestamp = Xt()) : e.timeSinceMoved = Math.max(Xt() - e._lastMovedTimestamp, 0) / 1e3
    }
}
$.prototype.canPreloadFlight = function() {
    return c(this._currentFlight) && this._mode !== Q.SCENE2D
};
$.prototype._updateCameraChanged = function() {
    var e = this;
    if (By(e), e._changed.numberOfListeners !== 0) {
        var t = e.percentageChanged;
        if (!c(e._changedDirection)) {
            e._changedPosition = u.clone(e.positionWC, e._changedPosition), e._changedDirection = u.clone(e.directionWC, e._changedDirection);
            return
        }
        var r = p.acosClamped(u.dot(e.directionWC, e._changedDirection)),
            n;
        c(e.frustum.fovy) ? n = r / (e.frustum.fovy * .5) : n = r;
        var i = u.distance(e.positionWC, e._changedPosition),
            a = i / e.positionCartographic.height;
        (n > t || a > t) && (e._changed.raiseEvent(Math.max(n, a)), e._changedPosition = u.clone(e.positionWC, e._changedPosition), e._changedDirection = u.clone(e.directionWC, e._changedDirection))
    }
};
var vs = new u;

function kt(e) {
    var t = e._mode,
        r = !1,
        n = e._position,
        i = !u.equals(n, e.position) || r;
    i && (n = u.clone(e.position, e._position));
    var a = e._direction,
        o = !u.equals(a, e.direction);
    o && (u.normalize(e.direction, e.direction), a = u.clone(e.direction, e._direction));
    var s = e._up,
        h = !u.equals(s, e.up);
    h && (u.normalize(e.up, e.up), s = u.clone(e.up, e._up));
    var f = e._right,
        l = !u.equals(f, e.right);
    l && (u.normalize(e.right, e.right), f = u.clone(e.right, e._right));
    var d = e._transformChanged || e._modeChanged;
    e._transformChanged = !1, d && (y.inverseTransformation(e._transform, e._invTransform), y.clone(e._transform, e._actualTransform), y.inverseTransformation(e._actualTransform, e._actualInvTransform), e._modeChanged = !1);
    var m = e._actualTransform;
    if (i || d)
        if (e._positionWC = y.multiplyByPoint(m, n, e._positionWC), t === Q.SCENE3D || t === Q.MORPHING) e._positionCartographic = e._projection.ellipsoid.cartesianToCartographic(e._positionWC, e._positionCartographic);
        else {
            var _ = vs;
            _.x = e._positionWC.y, _.y = e._positionWC.z, _.z = e._positionWC.x, e._projection.unproject(_, e._positionCartographic)
        } if (o || h || l) {
        var g = u.dot(a, u.cross(s, f, vs));
        if (Math.abs(1 - g) > p.EPSILON2) {
            var T = 1 / u.magnitudeSquared(s),
                C = u.dot(s, a) * T,
                A = u.multiplyByScalar(a, C, vs);
            s = u.normalize(u.subtract(s, A, e._up), e._up), u.clone(s, e.up), f = u.cross(a, s, e._right), u.clone(f, e.right)
        }
    }(o || d) && (e._directionWC = y.multiplyByPointAsVector(m, a, e._directionWC), u.normalize(e._directionWC, e._directionWC)), (h || d) && (e._upWC = y.multiplyByPointAsVector(m, s, e._upWC), u.normalize(e._upWC, e._upWC)), (l || d) && (e._rightWC = y.multiplyByPointAsVector(m, f, e._rightWC), u.normalize(e._rightWC, e._rightWC)), (i || o || h || l || d) && Dl(e)
}

function Uy(e, t) {
    var r;
    return p.equalsEpsilon(Math.abs(e.z), 1, p.EPSILON3) ? r = Math.atan2(t.y, t.x) - p.PI_OVER_TWO : r = Math.atan2(e.y, e.x) - p.PI_OVER_TWO, p.TWO_PI - p.zeroToTwoPi(r)
}

function zy(e) {
    return p.PI_OVER_TWO - p.acosClamped(e.z)
}

function Vy(e, t, r) {
    var n = 0;
    return p.equalsEpsilon(Math.abs(e.z), 1, p.EPSILON3) || (n = Math.atan2(-r.z, t.z), n = p.zeroToTwoPi(n + p.TWO_PI)), n
}
var ps = new y,
    gs = new y;
Object.defineProperties($.prototype, {
    transform: {
        get: function() {
            return this._transform
        }
    },
    inverseTransform: {
        get: function() {
            return kt(this), this._invTransform
        }
    },
    viewMatrix: {
        get: function() {
            return kt(this), this._viewMatrix
        }
    },
    inverseViewMatrix: {
        get: function() {
            return kt(this), this._invViewMatrix
        }
    },
    positionCartographic: {
        get: function() {
            return kt(this), this._positionCartographic
        }
    },
    positionWC: {
        get: function() {
            return kt(this), this._positionWC
        }
    },
    directionWC: {
        get: function() {
            return kt(this), this._directionWC
        }
    },
    upWC: {
        get: function() {
            return kt(this), this._upWC
        }
    },
    rightWC: {
        get: function() {
            return kt(this), this._rightWC
        }
    },
    heading: {
        get: function() {
            if (this._mode !== Q.MORPHING) {
                var e = this._projection.ellipsoid,
                    t = y.clone(this._transform, ps),
                    r = We.eastNorthUpToFixedFrame(this.positionWC, e, gs);
                this._setTransform(r);
                var n = Uy(this.direction, this.up);
                return this._setTransform(t), n
            }
        }
    },
    pitch: {
        get: function() {
            if (this._mode !== Q.MORPHING) {
                var e = this._projection.ellipsoid,
                    t = y.clone(this._transform, ps),
                    r = We.eastNorthUpToFixedFrame(this.positionWC, e, gs);
                this._setTransform(r);
                var n = zy(this.direction);
                return this._setTransform(t), n
            }
        }
    },
    roll: {
        get: function() {
            if (this._mode !== Q.MORPHING) {
                var e = this._projection.ellipsoid,
                    t = y.clone(this._transform, ps),
                    r = We.eastNorthUpToFixedFrame(this.positionWC, e, gs);
                this._setTransform(r);
                var n = Vy(this.direction, this.up, this.right);
                return this._setTransform(t), n
            }
        }
    },
    moveStart: {
        get: function() {
            return this._moveStart
        }
    },
    moveEnd: {
        get: function() {
            return this._moveEnd
        }
    },
    changed: {
        get: function() {
            return this._changed
        }
    }
});
$.prototype.update = function(e) {
    var t = !1;
    if (e !== this._mode && (this._mode = e, this._modeChanged = e !== Q.MORPHING, t = this._mode === Q.SCENE2D), t) {
        var r = this._max2Dfrustum = this.frustum.clone(),
            n = 2,
            i = r.top / r.right;
        r.right = this._maxCoord.x * n, r.left = -r.right, r.top = i * r.right, r.bottom = -r.top
    }
};
var Gy = new u,
    Hy = new u,
    Wy = new u;
$.prototype._setTransform = function(e) {
    var t = u.clone(this.positionWC, Gy),
        r = u.clone(this.upWC, Hy),
        n = u.clone(this.directionWC, Wy);
    y.clone(e, this._transform), this._transformChanged = !0, kt(this);
    var i = this._actualInvTransform;
    y.multiplyByPoint(i, t, this.position), y.multiplyByPointAsVector(i, n, this.direction), y.multiplyByPointAsVector(i, r, this.up), u.cross(this.direction, this.up, this.right), kt(this)
};
const qy = E("calculateOrthographicFrustumWidth");
$.prototype._adjustOrthographicFrustum = function(e) {
    this.frustum instanceof $e && (!e && this._positionCartographic.height < 15e4 || (this.frustum.width = qy(this)))
};
var th = new u,
    ky = new y,
    Yy = new y,
    jy = new z,
    Xy = new P;

function Zy(e, t, r) {
    var n = y.clone(e.transform, ky),
        i = We.eastNorthUpToFixedFrame(t, e._projection.ellipsoid, Yy);
    e._setTransform(i), u.clone(u.ZERO, e.position), r.heading = r.heading - p.PI_OVER_TWO;
    var a = z.fromHeadingPitchRoll(r, jy),
        o = P.fromQuaternion(a, Xy);
    P.getColumn(o, 0, e.direction), P.getColumn(o, 2, e.up), u.cross(e.direction, e.up, e.right), e._setTransform(n), e._adjustOrthographicFrustum(!0)
}
E("setViewCV");
E("setView2D");
const bl = E("directionUpToHeadingPitchRoll");
var $s = {
        destination: void 0,
        orientation: {
            direction: void 0,
            up: void 0,
            heading: void 0,
            pitch: void 0,
            roll: void 0
        },
        convert: void 0,
        endTransform: void 0
    },
    Ua = new Ct;
$.prototype.setView = function(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = v(e.orientation, v.EMPTY_OBJECT),
        r = this._mode;
    if (r !== Q.MORPHING) {
        c(e.endTransform) && this._setTransform(e.endTransform), v(e.convert, !0);
        var n = v(e.destination, u.clone(this.positionWC, th));
        c(n) && c(n.west) && (n = this.getRectangleCameraCoordinates(n, th)), c(t.direction) && (t = bl(this, n, t, $s.orientation)), Ua.heading = v(t.heading, 0), Ua.pitch = v(t.pitch, -p.PI_OVER_TWO), Ua.roll = v(t.roll, 0), Zy(this, n, Ua)
    }
};
$.prototype.flyHome = E("flyHome");
$.prototype.worldToCameraCoordinates = function(e, t) {
    return c(t) || (t = new B), kt(this), y.multiplyByVector(this._actualInvTransform, e, t)
};
$.prototype.worldToCameraCoordinatesPoint = function(e, t) {
    return c(t) || (t = new u), kt(this), y.multiplyByPoint(this._actualInvTransform, e, t)
};
$.prototype.worldToCameraCoordinatesVector = function(e, t) {
    return c(t) || (t = new u), kt(this), y.multiplyByPointAsVector(this._actualInvTransform, e, t)
};
$.prototype.cameraToWorldCoordinates = E("cameraToWorldCoordinates");
$.prototype.cameraToWorldCoordinatesPoint = function(e, t) {
    return c(t) || (t = new u), kt(this), y.multiplyByPoint(this._actualTransform, e, t)
};
$.prototype.cameraToWorldCoordinatesVector = E("cameraToWorldCoordinatesVector");
E("clampMove2D");
var rh = new u;
$.prototype.move = function(e, t) {
    var r = this.position;
    u.multiplyByScalar(e, t, rh), u.add(r, rh, r), this._adjustOrthographicFrustum(!0)
};
$.prototype.moveForward = E("moveForward");
$.prototype.moveBackward = E("moveBackward");
$.prototype.moveUp = E("moveUp");
$.prototype.moveDown = E("moveDown");
$.prototype.moveRight = E("moveRight");
$.prototype.moveLeft = E("moveLeft");
$.prototype.lookLeft = E("lookLeft");
$.prototype.lookRight = E("lookRight");
$.prototype.lookUp = E("lookUp");
$.prototype.lookDown = E("lookDown");
$.prototype.look = E("look");
$.prototype.twistLeft = E("twistLeft");
$.prototype.twistRight = E("twistRight");
var Ky = new z,
    Qy = new P;
$.prototype.rotate = function(e, t) {
    var r = v(t, this.defaultRotateAmount),
        n = z.fromAxisAngle(e, -r, Ky),
        i = P.fromQuaternion(n, Qy);
    P.multiplyByVector(i, this.position, this.position), P.multiplyByVector(i, this.direction, this.direction), P.multiplyByVector(i, this.up, this.up), u.cross(this.direction, this.up, this.right), u.cross(this.right, this.direction, this.up), this._adjustOrthographicFrustum(!1)
};
$.prototype.rotateDown = E("rotateDown");
$.prototype.rotateUp = function(e) {
    e = v(e, this.defaultRotateAmount), tE(this, -e)
};
var $y = new u,
    Jy = new u,
    eE = new u,
    nh = new u;

function tE(e, t) {
    var r = e.position;
    if (c(e.constrainedAxis) && !u.equalsEpsilon(e.position, u.ZERO, p.EPSILON2)) {
        var n = u.normalize(r, $y),
            i = u.equalsEpsilon(n, e.constrainedAxis, p.EPSILON2),
            a = u.equalsEpsilon(n, u.negate(e.constrainedAxis, nh), p.EPSILON2);
        if (!i && !a) {
            var o = u.normalize(e.constrainedAxis, Jy),
                s = u.dot(n, o),
                h = p.acosClamped(s);
            t > 0 && t > h && (t = h - p.EPSILON4), s = u.dot(n, u.negate(o, nh)), h = p.acosClamped(s), t < 0 && -t > h && (t = -h + p.EPSILON4);
            var f = u.cross(o, n, eE);
            e.rotate(f, t)
        } else(i && t < 0 || a && t > 0) && e.rotate(e.right, t)
    } else e.rotate(e.right, t)
}
$.prototype.rotateRight = function(e) {
    e = v(e, this.defaultRotateAmount), Ll(this, -e)
};
$.prototype.rotateLeft = function(e) {
    e = v(e, this.defaultRotateAmount), Ll(this, e)
};

function Ll(e, t) {
    c(e.constrainedAxis) ? e.rotate(e.constrainedAxis, t) : e.rotate(e.up, t)
}
E("zoom2D");

function Fl(e, t) {
    e.move(e.direction, t)
}
$.prototype.zoomIn = function(e) {
    e = v(e, this.defaultZoomAmount), Fl(this, e)
};
$.prototype.zoomOut = function(e) {
    e = v(e, this.defaultZoomAmount), Fl(this, -e)
};
$.prototype.getMagnitude = function() {
    return u.magnitude(this.position)
};
$.prototype.lookAt = E("lookAt");
E("offsetFromHeadingPitchRange");
$.prototype.lookAtTransform = E("lookAtTransform");
var Fi = new re,
    rE = new re,
    nE = new u,
    iE = new u,
    aE = new u,
    oE = new u,
    sE = new u,
    uE = new u,
    cE = new u,
    Ts = new u,
    hE = {
        direction: new u,
        right: new u,
        up: new u
    },
    ih;

function It(e, t, r, n) {
    var i = Math.abs(u.dot(t, r));
    return i / n - u.dot(e, r)
}

function fE(e, t, r, n) {
    var i = e._projection.ellipsoid,
        a = n ? e : hE,
        o = t.north,
        s = t.south,
        h = t.east,
        f = t.west;
    f > h && (h += p.TWO_PI);
    var l = (f + h) * .5,
        d;
    if (s < -p.PI_OVER_TWO + p.RADIANS_PER_DEGREE && o > p.PI_OVER_TWO - p.RADIANS_PER_DEGREE) d = 0;
    else {
        var m = Fi;
        m.longitude = l, m.latitude = o, m.height = 0;
        var _ = rE;
        _.longitude = l, _.latitude = s, _.height = 0;
        var g = ih;
        (!c(g) || g.ellipsoid !== i) && (ih = g = new Ji(void 0, void 0, i)), g.setEndPoints(m, _), d = g.interpolateUsingFraction(.5, Fi).latitude
    }
    var T = Fi;
    T.longitude = l, T.latitude = d, T.height = 0;
    var C = i.cartographicToCartesian(T, cE),
        A = Fi;
    A.longitude = h, A.latitude = o;
    var S = i.cartographicToCartesian(A, nE);
    A.longitude = f;
    var x = i.cartographicToCartesian(A, aE);
    A.longitude = l;
    var I = i.cartographicToCartesian(A, sE);
    A.latitude = s;
    var O = i.cartographicToCartesian(A, uE);
    A.longitude = h;
    var F = i.cartographicToCartesian(A, oE);
    A.longitude = f;
    var b = i.cartographicToCartesian(A, iE);
    u.subtract(x, C, x), u.subtract(F, C, F), u.subtract(S, C, S), u.subtract(b, C, b), u.subtract(I, C, I), u.subtract(O, C, O);
    var N = i.geodeticSurfaceNormal(C, a.direction);
    u.negate(N, N);
    var D = u.cross(N, u.UNIT_Z, a.right);
    u.normalize(D, D);
    var V = u.cross(D, N, a.up),
        M;
    if (e.frustum instanceof $e) {
        var W = Math.max(u.distance(S, x), u.distance(F, b)),
            G = Math.max(u.distance(S, F), u.distance(x, b)),
            U, q, Y = e.frustum._offCenterFrustum.right / e.frustum._offCenterFrustum.top,
            j = G * Y;
        W > j ? (U = W, q = U / Y) : (q = G, U = j), M = Math.max(U, q)
    } else {
        var Z = Math.tan(e.frustum.fovy * .5),
            le = e.frustum.aspectRatio * Z;
        if (M = Math.max(It(N, V, x, Z), It(N, V, F, Z), It(N, V, S, Z), It(N, V, b, Z), It(N, V, I, Z), It(N, V, O, Z), It(N, D, x, le), It(N, D, F, le), It(N, D, S, le), It(N, D, b, le), It(N, D, I, le), It(N, D, O, le)), s < 0 && o > 0) {
            var ne = Fi;
            ne.longitude = f, ne.latitude = 0, ne.height = 0;
            var he = i.cartographicToCartesian(ne, Ts);
            u.subtract(he, C, he), M = Math.max(M, It(N, V, he, Z), It(N, D, he, le)), ne.longitude = h, he = i.cartographicToCartesian(ne, Ts), u.subtract(he, C, he), M = Math.max(M, It(N, V, he, Z), It(N, D, he, le))
        }
    }
    return u.add(C, u.multiplyByScalar(N, -M, Ts), r)
}
E("rectangleCameraPositionColumbusView");
E("rectangleCameraPosition2D");
$.prototype.getRectangleCameraCoordinates = E("getRectangleCameraCoordinates");
var lE = new Ir;

function dE(e, t, r, n) {
    r = v(r, se.WGS84);
    var i = e.getPickRay(t, lE),
        a = At.rayEllipsoid(i, r);
    if (a) {
        var o = a.start > 0 ? a.start : a.stop;
        return Ir.getPoint(i, o, n)
    }
}
$.prototype.pickEllipsoid = function(e, t, r) {
    return c(r) || (r = new u), t = v(t, se.WGS84), r = dE(this, e, t, r), r
};
var _E = new u,
    mE = new u,
    vE = new u;

function pE(e, t, r) {
    var n = e._scene.canvas,
        i = n.clientWidth,
        a = n.clientHeight,
        o = Math.tan(e.frustum.fovy * .5),
        s = e.frustum.aspectRatio * o,
        h = e.frustum.near,
        f = 2 / i * t.x - 1,
        l = 2 / a * (a - t.y) - 1,
        d = e.positionWC;
    u.clone(d, r.origin);
    var m = u.multiplyByScalar(e.directionWC, h, _E);
    u.add(d, m, m);
    var _ = u.multiplyByScalar(e.rightWC, f * h * s, mE),
        g = u.multiplyByScalar(e.upWC, l * h * o, vE),
        T = u.add(m, _, r.direction);
    return u.add(T, g, T), u.subtract(T, d, T), u.normalize(T, T), r
}
const gE = E("getPickRayOrthographic");
$.prototype.getPickRay = function(e, t) {
    c(t) || (t = new Ir);
    var r = this.frustum;
    return c(r.aspectRatio) && c(r.fov) && c(r.near) ? pE(this, e, t) : gE(this, e, t)
};
var TE = new u,
    yE = new u;
$.prototype.distanceToBoundingSphere = function(e) {
    var t = u.subtract(this.positionWC, e.center, TE),
        r = u.multiplyByScalar(this.directionWC, u.dot(t, this.directionWC), yE);
    return Math.max(0, u.magnitude(r) - e.radius)
};
var EE = new R;
$.prototype.getPixelSize = function(e, t, r) {
    var n = this.distanceToBoundingSphere(e),
        i = this.frustum.getPixelDimensions(t, r, n, this._scene.pixelRatio, EE);
    return Math.max(i.x, i.y)
};
$.prototype.createCorrectPositionTween = E("createCorrectPositionTween");
var CE = new u,
    ct = {
        destination: void 0,
        heading: void 0,
        pitch: void 0,
        roll: void 0,
        duration: void 0,
        complete: void 0,
        cancel: void 0,
        endTransform: void 0,
        maximumHeight: void 0,
        easingFunction: void 0
    };
$.prototype.cancelFlight = function() {
    c(this._currentFlight) && (this._currentFlight.cancelTween(), this._currentFlight = void 0)
};
$.prototype.completeFlight = function() {
    if (c(this._currentFlight)) {
        this._currentFlight.cancelTween();
        var e = {
            destination: void 0,
            orientation: {
                heading: void 0,
                pitch: void 0,
                roll: void 0
            }
        };
        e.destination = ct.destination, e.orientation.heading = ct.heading, e.orientation.pitch = ct.pitch, e.orientation.roll = ct.roll, this.setView(e), c(this._currentFlight.complete) && this._currentFlight.complete(), this._currentFlight = void 0
    }
};
$.prototype.flyTo = function(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.destination,
        r = this._mode;
    if (r !== Q.MORPHING) {
        this.cancelFlight();
        var n = v(e.orientation, v.EMPTY_OBJECT);
        if (c(n.direction) && (n = bl(this, t, n, $s.orientation)), c(e.duration) && e.duration <= 0) {
            var i = $s;
            i.destination = e.destination, i.orientation.heading = n.heading, i.orientation.pitch = n.pitch, i.orientation.roll = n.roll, i.convert = e.convert, i.endTransform = e.endTransform, this.setView(i), typeof e.complete == "function" && e.complete();
            return
        }
        var a = c(t.west);
        a && (t = this.getRectangleCameraCoordinates(t, CE));
        var o = this,
            s;
        ct.destination = t, ct.heading = n.heading, ct.pitch = n.pitch, ct.roll = n.roll, ct.duration = e.duration, ct.complete = function() {
            s === o._currentFlight && (o._currentFlight = void 0), c(e.complete) && e.complete()
        }, ct.cancel = e.cancel, ct.endTransform = e.endTransform, ct.convert = a ? !1 : e.convert, ct.maximumHeight = e.maximumHeight, ct.pitchAdjustHeight = e.pitchAdjustHeight, ct.flyOverLongitude = e.flyOverLongitude, ct.flyOverLongitudeWeight = e.flyOverLongitudeWeight, ct.easingFunction = e.easingFunction;
        var h = this._scene,
            f = Ml.createTween(h, ct);
        if (f.duration === 0) {
            typeof f.complete == "function" && f.complete();
            return
        }
        s = h.tweens.add(f), this._currentFlight = s;
        var l = this._scene.preloadFlightCamera;
        this._mode !== Q.SCENE2D && (c(l) || (l = $.clone(this)), l.setView({
            destination: t,
            orientation: n
        }), this._scene.preloadFlightCullingVolume = l.frustum.computeCullingVolume(l.positionWC, l.directionWC, l.upWC))
    }
};
E("adjustBoundingSphereOffset");
$.prototype.viewBoundingSphere = E("viewBoundingSphere");
$.prototype.flyToBoundingSphere = E("flyToBoundingSphere");
E("computeHorizonQuad");
E("addToResult");
$.prototype.computeViewRectangle = E("computeViewRectangle");
$.prototype.switchToPerspectiveFrustum = E("switchToPerspectiveFrustum");
$.prototype.switchToOrthographicFrustum = E("switchToOrthographicFrustum");
$.clone = function(e, t) {
    return c(t) || (t = new $(e._scene)), u.clone(e.position, t.position), u.clone(e.direction, t.direction), u.clone(e.up, t.up), u.clone(e.right, t.right), y.clone(e._transform, t.transform), t._transformChanged = !0, t.frustum = e.frustum.clone(), t
};

function AE() {
    return E(this.constructor.name)
}
var wE = "varying vec4 positionEC;void main(){vec3 position;vec3 direction;if(czm_orthographicIn3D==1.0){vec2 uv=(gl_FragCoord.xy-czm_viewport.xy)/czm_viewport.zw;vec2 minPlane=vec2(czm_frustumPlanes.z,czm_frustumPlanes.y);vec2 maxPlane=vec2(czm_frustumPlanes.w,czm_frustumPlanes.x);position=vec3(mix(minPlane,maxPlane,uv),0.0);direction=vec3(0.0,0.0,-1.0);}else{position=vec3(0.0);direction=normalize(positionEC.xyz);}czm_ray ray=czm_ray(position,direction);vec3 ellipsoid_center=czm_view[3].xyz;czm_raySegment intersection=czm_rayEllipsoidIntersectionInterval(ray,ellipsoid_center,czm_ellipsoidInverseRadii);if(!czm_isEmpty(intersection)){gl_FragColor=vec4(1.0,1.0,0.0,1.0);}else{discard;}czm_writeLogDepth();}",
    RE = "attribute vec4 position;varying vec4 positionEC;void main(){positionEC=czm_modelView*position;gl_Position=czm_projection*positionEC;czm_vertexLogDepth();}";

function ta() {
    this._rs = void 0, this._sp = void 0, this._va = void 0, this._command = void 0, this._mode = void 0, this._useLogDepth = !1
}
var Bi = an.supportsTypedArrays() ? new Float32Array(12) : [],
    ah = new u,
    oh = new u,
    ys = new u,
    sh = new u,
    za = new u;

function xE(e, t) {
    var r = e.radii,
        n = t.camera,
        i, a, o;
    if (n.frustum instanceof $e) i = u.ZERO, a = n.rightWC, o = n.upWC;
    else {
        var s = n.positionWC,
            h = u.multiplyComponents(e.oneOverRadii, s, ah),
            f = u.normalize(h, oh),
            l = u.normalize(u.cross(u.UNIT_Z, h, ys), ys),
            d = u.normalize(u.cross(f, l, sh), sh),
            m = u.magnitude(h),
            _ = Math.sqrt(m * m - 1);
        i = u.multiplyByScalar(f, 1 / m, ah);
        var g = _ / m;
        a = u.multiplyByScalar(l, g, oh), o = u.multiplyByScalar(d, g, ys)
    }
    var T = u.add(i, o, za);
    u.subtract(T, a, T), u.multiplyComponents(r, T, T), u.pack(T, Bi, 0);
    var C = u.subtract(i, o, za);
    u.subtract(C, a, C), u.multiplyComponents(r, C, C), u.pack(C, Bi, 3);
    var A = u.add(i, o, za);
    u.add(A, a, A), u.multiplyComponents(r, A, A), u.pack(A, Bi, 6);
    var S = u.subtract(i, o, za);
    return u.add(S, a, S), u.multiplyComponents(r, S, S), u.pack(S, Bi, 9), Bi
}
ta.prototype.update = function(e) {
    if (this._mode = e.mode, e.mode === Q.SCENE3D) {
        var t = e.context,
            r = e.mapProjection.ellipsoid,
            n = e.useLogDepth;
        if (c(this._command) || (this._rs = Xe.fromCache({
                cull: {
                    enabled: !0
                },
                depthTest: {
                    enabled: !0
                },
                colorMask: {
                    red: !1,
                    green: !1,
                    blue: !1,
                    alpha: !1
                }
            }), this._command = new Sr({
                renderState: this._rs,
                boundingVolume: new ae(u.ZERO, r.maximumRadius),
                pass: ue.OPAQUE,
                owner: this
            })), !c(this._sp) || this._useLogDepth !== n) {
            this._useLogDepth = n;
            var i = new Ie({
                    sources: [RE]
                }),
                a = new Ie({
                    sources: [wE]
                });
            if (n) {
                var o = "#ifdef GL_EXT_frag_depth \n#extension GL_EXT_frag_depth : enable \n#endif \n\n";
                a.sources.push(o), a.defines.push("LOG_DEPTH"), i.defines.push("LOG_DEPTH")
            }
            this._sp = Vt.replaceCache({
                shaderProgram: this._sp,
                context: t,
                vertexShaderSource: i,
                fragmentShaderSource: a,
                attributeLocations: {
                    position: 0
                }
            }), this._command.shaderProgram = this._sp
        }
        var s = xE(r, e);
        if (c(this._va)) this._va.getAttribute(0).vertexBuffer.copyFromArrayView(s);
        else {
            var h = new Zi({
                attributes: {
                    position: new Zs({
                        componentDatatype: Be.FLOAT,
                        componentsPerAttribute: 3,
                        values: s
                    })
                },
                indices: [0, 1, 2, 2, 1, 3],
                primitiveType: zn.TRIANGLES
            });
            this._va = ar.fromGeometry({
                context: t,
                geometry: h,
                attributeLocations: {
                    position: 0
                },
                bufferUsage: nn.DYNAMIC_DRAW
            }), this._command.vertexArray = this._va
        }
    }
};
ta.prototype.execute = function(e, t) {
    this._mode === Q.SCENE3D && this._command.execute(e, t)
};
ta.prototype.isDestroyed = function() {
    return !1
};
ta.prototype.destroy = function() {
    this._sp = this._sp && this._sp.destroy(), this._va = this._va && this._va.destroy()
};

function Ro() {}
var SE = /\bgl_FragDepthEXT\b/,
    IE = /\bdiscard\b/;

function OE(e, t) {
    var r = e.shaderCache.getDerivedShaderProgram(t, "depthOnly");
    if (!c(r)) {
        var n = t._attributeLocations,
            i = t.fragmentShaderSource,
            a, o = !1,
            s = i.sources,
            h = s.length;
        for (a = 0; a < h; ++a)
            if (SE.test(s[a]) || IE.test(s[a])) {
                o = !0;
                break
            } var f = !1,
            l = i.defines;
        for (h = l.length, a = 0; a < h; ++a)
            if (l[a] === "LOG_DEPTH") {
                f = !0;
                break
            } var d;
        !o && !f ? (d = "void main() \n{ \n    gl_FragColor = vec4(1.0); \n} \n", i = new Ie({
            sources: [d]
        })) : !o && f && (d = "#ifdef GL_EXT_frag_depth \n#extension GL_EXT_frag_depth : enable \n#endif \n\nvoid main() \n{ \n    gl_FragColor = vec4(1.0); \n    czm_writeLogDepth(); \n} \n", i = new Ie({
            defines: ["LOG_DEPTH"],
            sources: [d]
        })), r = e.shaderCache.createDerivedShaderProgram(t, "depthOnly", {
            vertexShaderSource: t.vertexShaderSource,
            fragmentShaderSource: i,
            attributeLocations: n
        })
    }
    return r
}

function PE(e, t) {
    var r = e._depthOnlyRenderStateCache,
        n = r[t.id];
    if (!c(n)) {
        var i = Xe.getState(t);
        i.depthMask = !0, i.colorMask = {
            red: !1,
            green: !1,
            blue: !1,
            alpha: !1
        }, n = Xe.fromCache(i), r[t.id] = n
    }
    return n
}
Ro.createDepthOnlyDerivedCommand = function(e, t, r, n) {
    c(n) || (n = {});
    var i, a;
    return c(n.depthOnlyCommand) && (i = n.depthOnlyCommand.shaderProgram, a = n.depthOnlyCommand.renderState), n.depthOnlyCommand = Sr.shallowClone(t, n.depthOnlyCommand), !c(i) || n.shaderProgramId !== t.shaderProgram.id ? (n.depthOnlyCommand.shaderProgram = OE(r, t.shaderProgram), n.depthOnlyCommand.renderState = PE(e, t.renderState), n.shaderProgramId = t.shaderProgram.id) : (n.depthOnlyCommand.shaderProgram = i, n.depthOnlyCommand.renderState = a), n
};
var NE = /\s+czm_writeLogDepth\(/,
    ME = /\s+czm_vertexLogDepth\(/,
    DE = /\s*#extension\s+GL_EXT_frag_depth\s*:\s*enable/;

function bE(e, t) {
    var r = e.shaderCache.getDerivedShaderProgram(t, "logDepth");
    if (!c(r)) {
        var n = t._attributeLocations,
            i = t.vertexShaderSource.clone(),
            a = t.fragmentShaderSource.clone();
        i.defines = c(i.defines) ? i.defines.slice(0) : [], i.defines.push("LOG_DEPTH"), a.defines = c(a.defines) ? a.defines.slice(0) : [], a.defines.push("LOG_DEPTH");
        var o, s, h = !1,
            f = i.sources,
            l = f.length;
        for (o = 0; o < l; ++o)
            if (ME.test(f[o])) {
                h = !0;
                break
            } if (!h) {
            for (o = 0; o < l; ++o) f[o] = Ie.replaceMain(f[o], "czm_log_depth_main");
            s = "\n\nvoid main() \n{ \n    czm_log_depth_main(); \n    czm_vertexLogDepth(); \n} \n", f.push(s)
        }
        for (f = a.sources, l = f.length, h = !1, o = 0; o < l; ++o) NE.test(f[o]) && (h = !0);
        a.defines.indexOf("LOG_DEPTH_WRITE") !== -1 && (h = !0);
        var d = !0;
        for (o = 0; o < l; ++o) DE.test(f[o]) && (d = !1);
        var m = "";
        if (d && (m += "#ifdef GL_EXT_frag_depth \n#extension GL_EXT_frag_depth : enable \n#endif \n\n"), !h) {
            for (o = 0; o < l; o++) f[o] = Ie.replaceMain(f[o], "czm_log_depth_main");
            m += "\nvoid main() \n{ \n    czm_log_depth_main(); \n    czm_writeLogDepth(); \n} \n"
        }
        f.push(m), r = e.shaderCache.createDerivedShaderProgram(t, "logDepth", {
            vertexShaderSource: i,
            fragmentShaderSource: a,
            attributeLocations: n
        })
    }
    return r
}
Ro.createLogDepthCommand = function(e, t, r) {
    c(r) || (r = {});
    var n;
    return c(r.command) && (n = r.command.shaderProgram), r.command = Sr.shallowClone(e, r.command), !c(n) || r.shaderProgramId !== e.shaderProgram.id ? (r.command.shaderProgram = bE(t, e.shaderProgram), r.shaderProgramId = e.shaderProgram.id) : r.command.shaderProgram = n, r
};

function LE(e, t) {
    var r = e.shaderCache.getDerivedShaderProgram(t, "HDR");
    if (!c(r)) {
        var n = t._attributeLocations,
            i = t.vertexShaderSource.clone(),
            a = t.fragmentShaderSource.clone();
        i.defines = c(i.defines) ? i.defines.slice(0) : [], i.defines.push("HDR"), a.defines = c(a.defines) ? a.defines.slice(0) : [], a.defines.push("HDR"), r = e.shaderCache.createDerivedShaderProgram(t, "HDR", {
            vertexShaderSource: i,
            fragmentShaderSource: a,
            attributeLocations: n
        })
    }
    return r
}
Ro.createHdrCommand = function(e, t, r) {
    c(r) || (r = {});
    var n;
    return c(r.command) && (n = r.command.shaderProgram), r.command = Sr.shallowClone(e, r.command), !c(n) || r.shaderProgramId !== e.shaderProgram.id ? (r.command.shaderProgram = LE(t, e.shaderProgram), r.shaderProgramId = e.shaderProgram.id) : r.command.shaderProgram = n, r
};

function Bl() {
    this.enabled = !0, this.density = 2e-4, this.screenSpaceErrorFactor = 2, this.minimumBrightness = .03
}
var Ja = [359.393, 800.749, 1275.6501, 2151.1192, 3141.7763, 4777.5198, 6281.2493, 12364.307, 15900.765, 49889.0549, 78026.8259, 99260.7344, 120036.3873, 151011.0158, 156091.1953, 203849.3112, 274866.9803, 319916.3149, 493552.0528, 628733.5874],
    qr = [2e-5, 2e-4, 1e-4, 7e-5, 5e-5, 4e-5, 3e-5, 19e-6, 1e-5, 85e-7, 62e-7, 58e-7, 53e-7, 52e-7, 51e-7, 42e-7, 4e-6, 34e-7, 26e-7, 22e-7];
for (var Es = 0; Es < qr.length; ++Es) qr[Es] *= 1e6;
var Ul = qr[1],
    Js = qr[qr.length - 1];
for (var Va = 0; Va < qr.length; ++Va) qr[Va] = (qr[Va] - Js) / (Ul - Js);
var gt = 0;

function FE(e) {
    var t = Ja,
        r = t.length;
    if (e < t[0]) return gt = 0, gt;
    if (e > t[r - 1]) return gt = r - 2, gt;
    if (e >= t[gt]) {
        if (gt + 1 < r && e < t[gt + 1]) return gt;
        if (gt + 2 < r && e < t[gt + 2]) return ++gt, gt
    } else if (gt - 1 >= 0 && e >= t[gt - 1]) return --gt, gt;
    var n;
    for (n = 0; n < r - 2 && !(e >= t[n] && e < t[n + 1]); ++n);
    return gt = n, gt
}
var BE = new u;
Bl.prototype.update = function(e) {
    var t = e.fog.enabled = this.enabled;
    if (t) {
        var r = e.camera,
            n = r.positionCartographic;
        if (!c(n) || n.height > 8e5 || e.mode !== Q.SCENE3D) {
            e.fog.enabled = !1;
            return
        }
        var i = n.height,
            a = FE(i),
            o = p.clamp((i - Ja[a]) / (Ja[a + 1] - Ja[a]), 0, 1),
            s = p.lerp(qr[a], qr[a + 1], o),
            h = this.density * 1e6,
            f = h / Ul * Js;
        s = s * (h - f) * 1e-6;
        var l = u.normalize(r.positionWC, BE),
            d = Math.abs(u.dot(r.directionWC, l));
        s *= 1 - d, e.fog.density = s, e.fog.sse = this.screenSpaceErrorFactor, e.fog.minimumBrightness = this.minimumBrightness
    }
};

function UE(e, t, r) {
    this.context = e, this.commandList = [], this.shadowMaps = [], this.brdfLutGenerator = void 0, this.environmentMap = void 0, this.sphericalHarmonicCoefficients = void 0, this.specularEnvironmentMaps = void 0, this.specularEnvironmentMapsMaximumLOD = void 0, this.mode = Q.SCENE3D, this.morphTime = Q.getMorphTime(Q.SCENE3D), this.frameNumber = 0, this.newFrame = !1, this.time = void 0, this.jobScheduler = r, this.mapProjection = void 0, this.camera = void 0, this.cameraUnderground = !1, this.globeTranslucencyState = void 0, this.cullingVolume = void 0, this.occluder = void 0, this.maximumScreenSpaceError = void 0, this.pixelRatio = 1, this.passes = {
        render: !1,
        pick: !1,
        depth: !1,
        postProcess: !1,
        offscreen: !1
    }, this.creditDisplay = t, this.afterRender = [], this.scene3DOnly = !1, this.fog = {
        enabled: !1,
        density: void 0,
        sse: void 0,
        minimumBrightness: void 0
    }, this.terrainExaggeration = 1, this.shadowState = {
        shadowsEnabled: !0,
        shadowMaps: [],
        lightShadowMaps: [],
        nearPlane: 1,
        farPlane: 5e3,
        closestObjectSize: 1e3,
        lastDirtyTime: 0,
        outOfView: !0
    }, this.imagerySplitPosition = 0, this.frustumSplits = [], this.backgroundColor = void 0, this.light = void 0, this.minimumDisableDepthTestDistance = void 0, this.invertClassification = !1, this.invertClassificationColor = void 0, this.useLogDepth = !1, this.tilesetPassState = void 0, this.minimumTerrainHeight = 0
}
var Cs = "uniform sampler2D colorTexture;varying vec2 v_textureCoordinates;void main(){gl_FragColor=texture2D(colorTexture,v_textureCoordinates);}",
    uh = "uniform highp sampler2D u_depthTexture;varying vec2 v_textureCoordinates;void main(){gl_FragColor=czm_packDepth(texture2D(u_depthTexture,v_textureCoordinates).r);}",
    zl = {
        CESIUM_3D_TILE_MASK: 128,
        SKIP_LOD_MASK: 112,
        SKIP_LOD_BIT_SHIFT: 4,
        CLASSIFICATION_MASK: 15
    };
zl.setCesium3DTileBit = E("StencilConstants.setCesium3DTileBit");
const eu = Object.freeze(zl);
var zE = {
    NEVER: w.NEVER,
    LESS: w.LESS,
    EQUAL: w.EQUAL,
    LESS_OR_EQUAL: w.LEQUAL,
    GREATER: w.GREATER,
    NOT_EQUAL: w.NOTEQUAL,
    GREATER_OR_EQUAL: w.GEQUAL,
    ALWAYS: w.ALWAYS
};
const ch = Object.freeze(zE);
var VE = {
    ZERO: w.ZERO,
    KEEP: w.KEEP,
    REPLACE: w.REPLACE,
    INCREMENT: w.INCR,
    DECREMENT: w.DECR,
    INVERT: w.INVERT,
    INCREMENT_WRAP: w.INCR_WRAP,
    DECREMENT_WRAP: w.DECR_WRAP
};
const As = Object.freeze(VE);

function Er() {
    this._globeColorTexture = void 0, this._primitiveColorTexture = void 0, this._depthStencilTexture = void 0, this._globeDepthTexture = void 0, this._tempGlobeDepthTexture = void 0, this._tempCopyDepthTexture = void 0, this._globeColorFramebuffer = void 0, this._primitiveColorFramebuffer = void 0, this._copyDepthFramebuffer = void 0, this._tempCopyDepthFramebuffer = void 0, this._updateDepthFramebuffer = void 0, this._clearGlobeColorCommand = void 0, this._clearPrimitiveColorCommand = void 0, this._copyColorCommand = void 0, this._copyDepthCommand = void 0, this._tempCopyDepthCommand = void 0, this._updateDepthCommand = void 0, this._mergeColorCommand = void 0, this._viewport = new Re, this._rs = void 0, this._rsBlend = void 0, this._rsUpdate = void 0, this._useScissorTest = !1, this._scissorRectangle = void 0, this._useLogDepth = void 0, this._useHdr = void 0, this._clearGlobeDepth = void 0, this._debugGlobeDepthViewportCommand = void 0
}
Object.defineProperties(Er.prototype, {
    framebuffer: {
        get: function() {
            return this._globeColorFramebuffer
        }
    },
    primitiveFramebuffer: {
        get: function() {
            return this._primitiveColorFramebuffer
        }
    }
});

function GE(e, t, r, n) {
    if (!c(e._debugGlobeDepthViewportCommand) || n !== e._useLogDepth) {
        var i = "uniform highp sampler2D u_depthTexture;\nvarying vec2 v_textureCoordinates;\nvoid main()\n{\n    float z_window = czm_unpackDepth(texture2D(u_depthTexture, v_textureCoordinates));\n    z_window = czm_reverseLogDepth(z_window); \n    float n_range = czm_depthRange.near;\n    float f_range = czm_depthRange.far;\n    float z_ndc = (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n    float scale = pow(z_ndc * 0.5 + 0.5, 8.0);\n    gl_FragColor = vec4(mix(vec3(0.0), vec3(1.0), scale), 1.0);\n}\n",
            a = new Ie({
                defines: [n ? "LOG_DEPTH" : ""],
                sources: [i]
            });
        e._debugGlobeDepthViewportCommand = t.createViewportQuadCommand(a, {
            uniformMap: {
                u_depthTexture: function() {
                    return e._globeDepthTexture
                }
            },
            owner: e
        }), e._useLogDepth = n
    }
    e._debugGlobeDepthViewportCommand.execute(t, r)
}

function HE(e) {
    e._globeColorTexture = e._globeColorTexture && !e._globeColorTexture.isDestroyed() && e._globeColorTexture.destroy(), e._depthStencilTexture = e._depthStencilTexture && !e._depthStencilTexture.isDestroyed() && e._depthStencilTexture.destroy(), e._globeDepthTexture = e._globeDepthTexture && !e._globeDepthTexture.isDestroyed() && e._globeDepthTexture.destroy()
}

function WE(e) {
    e._globeColorFramebuffer = e._globeColorFramebuffer && !e._globeColorFramebuffer.isDestroyed() && e._globeColorFramebuffer.destroy(), e._copyDepthFramebuffer = e._copyDepthFramebuffer && !e._copyDepthFramebuffer.isDestroyed() && e._copyDepthFramebuffer.destroy()
}

function qE(e) {
    e._tempCopyDepthFramebuffer = e._tempCopyDepthFramebuffer && !e._tempCopyDepthFramebuffer.isDestroyed() && e._tempCopyDepthFramebuffer.destroy(), e._updateDepthFramebuffer = e._updateDepthFramebuffer && !e._updateDepthFramebuffer.isDestroyed() && e._updateDepthFramebuffer.destroy(), e._tempGlobeDepthTexture = e._tempGlobeDepthTexture && !e._tempGlobeDepthTexture.isDestroyed() && e._tempGlobeDepthTexture.destroy()
}

function kE(e, t, r, n, i) {
    e._tempGlobeDepthTexture = new Ze({
        context: t,
        width: r,
        height: n,
        pixelFormat: je.RGBA,
        pixelDatatype: Me.UNSIGNED_BYTE,
        sampler: yt.NEAREST
    }), e._tempCopyDepthFramebuffer = new Dt({
        context: t,
        colorTextures: [e._tempGlobeDepthTexture],
        destroyAttachments: !1
    }), e._updateDepthFramebuffer = new Dt({
        context: t,
        colorTextures: [e._globeDepthTexture],
        depthStencilTexture: i.framebuffer.depthStencilTexture,
        destroyAttachments: !1
    })
}

function YE(e, t, r, n, i) {
    var a = i ? t.halfFloatingPointTexture ? Me.HALF_FLOAT : Me.FLOAT : Me.UNSIGNED_BYTE;
    e._globeColorTexture = new Ze({
        context: t,
        width: r,
        height: n,
        pixelFormat: je.RGBA,
        pixelDatatype: a,
        sampler: yt.NEAREST
    }), e._depthStencilTexture = new Ze({
        context: t,
        width: r,
        height: n,
        pixelFormat: je.DEPTH_STENCIL,
        pixelDatatype: Me.UNSIGNED_INT_24_8
    }), e._globeDepthTexture = new Ze({
        context: t,
        width: r,
        height: n,
        pixelFormat: je.RGBA,
        pixelDatatype: Me.UNSIGNED_BYTE,
        sampler: yt.NEAREST
    })
}

function jE(e, t) {
    e._globeColorFramebuffer = new Dt({
        context: t,
        colorTextures: [e._globeColorTexture],
        depthStencilTexture: e._depthStencilTexture,
        destroyAttachments: !1
    }), e._copyDepthFramebuffer = new Dt({
        context: t,
        colorTextures: [e._globeDepthTexture],
        destroyAttachments: !1
    })
}

function XE(e, t, r, n, i) {
    var a = i ? t.halfFloatingPointTexture ? Me.HALF_FLOAT : Me.FLOAT : Me.UNSIGNED_BYTE;
    e._primitiveColorTexture = new Ze({
        context: t,
        width: r,
        height: n,
        pixelFormat: je.RGBA,
        pixelDatatype: a,
        sampler: yt.NEAREST
    }), e._primitiveColorFramebuffer = new Dt({
        context: t,
        colorTextures: [e._primitiveColorTexture],
        depthStencilTexture: e._depthStencilTexture,
        destroyAttachments: !1
    })
}

function ZE(e) {
    e._primitiveColorTexture = e._primitiveColorTexture && !e._primitiveColorTexture.isDestroyed() && e._primitiveColorTexture.destroy(), e._primitiveColorFramebuffer = e._primitiveColorFramebuffer && !e._primitiveColorFramebuffer.isDestroyed() && e._primitiveColorFramebuffer.destroy()
}

function KE(e, t, r, n, i, a) {
    var o = e._globeColorTexture,
        s = !c(o) || o.width !== r || o.height !== n || i !== e._useHdr;
    s && (HE(e), WE(e), YE(e, t, r, n, i), jE(e, t)), (s || a !== e._clearGlobeDepth) && (ZE(e), a && XE(e, t, r, n, i))
}

function Vl(e, t, r, n, i) {
    e._viewport.width = r, e._viewport.height = n;
    var a = !Re.equals(e._viewport, i.viewport),
        o = a !== e._useScissorTest;
    e._useScissorTest = a, Re.equals(e._scissorRectangle, i.viewport) || (e._scissorRectangle = Re.clone(i.viewport, e._scissorRectangle), o = !0), (!c(e._rs) || !Re.equals(e._viewport, e._rs.viewport) || o) && (e._rs = Xe.fromCache({
        viewport: e._viewport,
        scissorTest: {
            enabled: e._useScissorTest,
            rectangle: e._scissorRectangle
        }
    }), e._rsBlend = Xe.fromCache({
        viewport: e._viewport,
        scissorTest: {
            enabled: e._useScissorTest,
            rectangle: e._scissorRectangle
        },
        blending: xf.ALPHA_BLEND
    }), e._rsUpdate = Xe.fromCache({
        viewport: e._viewport,
        scissorTest: {
            enabled: e._useScissorTest,
            rectangle: e._scissorRectangle
        },
        stencilTest: {
            enabled: !0,
            frontFunction: ch.EQUAL,
            frontOperation: {
                fail: As.KEEP,
                zFail: As.KEEP,
                zPass: As.KEEP
            },
            backFunction: ch.NEVER,
            reference: eu.CESIUM_3D_TILE_MASK,
            mask: eu.CESIUM_3D_TILE_MASK
        }
    })), c(e._copyDepthCommand) || (e._copyDepthCommand = t.createViewportQuadCommand(uh, {
        uniformMap: {
            u_depthTexture: function() {
                return e._depthStencilTexture
            }
        },
        owner: e
    })), e._copyDepthCommand.framebuffer = e._copyDepthFramebuffer, e._copyDepthCommand.renderState = e._rs, c(e._copyColorCommand) || (e._copyColorCommand = t.createViewportQuadCommand(Cs, {
        uniformMap: {
            colorTexture: function() {
                return e._globeColorTexture
            }
        },
        owner: e
    })), e._copyColorCommand.renderState = e._rs, c(e._tempCopyDepthCommand) || (e._tempCopyDepthCommand = t.createViewportQuadCommand(uh, {
        uniformMap: {
            u_depthTexture: function() {
                return e._tempCopyDepthTexture
            }
        },
        owner: e
    })), e._tempCopyDepthCommand.framebuffer = e._tempCopyDepthFramebuffer, e._tempCopyDepthCommand.renderState = e._rs, c(e._updateDepthCommand) || (e._updateDepthCommand = t.createViewportQuadCommand(Cs, {
        uniformMap: {
            colorTexture: function() {
                return e._tempGlobeDepthTexture
            }
        },
        owner: e
    })), e._updateDepthCommand.framebuffer = e._updateDepthFramebuffer, e._updateDepthCommand.renderState = e._rsUpdate, c(e._clearGlobeColorCommand) || (e._clearGlobeColorCommand = new jt({
        color: new H(0, 0, 0, 0),
        stencil: 0,
        owner: e
    })), e._clearGlobeColorCommand.framebuffer = e._globeColorFramebuffer, c(e._clearPrimitiveColorCommand) || (e._clearPrimitiveColorCommand = new jt({
        color: new H(0, 0, 0, 0),
        stencil: 0,
        owner: e
    })), e._clearPrimitiveColorCommand.framebuffer = e._primitiveColorFramebuffer, c(e._mergeColorCommand) || (e._mergeColorCommand = t.createViewportQuadCommand(Cs, {
        uniformMap: {
            colorTexture: function() {
                return e._primitiveColorTexture
            }
        },
        owner: e
    })), e._mergeColorCommand.framebuffer = e._globeColorFramebuffer, e._mergeColorCommand.renderState = e._rsBlend
}
Er.prototype.executeDebugGlobeDepth = function(e, t, r) {
    GE(this, e, t, r)
};
Er.prototype.update = function(e, t, r, n, i) {
    var a = r.width,
        o = r.height;
    KE(this, e, a, o, n, i), Vl(this, e, a, o, t), e.uniformState.globeDepthTexture = void 0, this._useHdr = n, this._clearGlobeDepth = i
};
Er.prototype.executeCopyDepth = function(e, t) {
    c(this._copyDepthCommand) && (this._copyDepthCommand.execute(e, t), e.uniformState.globeDepthTexture = this._globeDepthTexture)
};
Er.prototype.executeUpdateDepth = function(e, t, r) {
    var n = t.framebuffer.depthStencilTexture;
    if (r || n !== this._depthStencilTexture) {
        if (c(this._updateDepthCommand)) {
            if (!c(this._updateDepthFramebuffer) || this._updateDepthFramebuffer.depthStencilTexture !== n || this._updateDepthFramebuffer.getColorTexture(0) !== this._globeDepthTexture) {
                var i = this._globeDepthTexture.width,
                    a = this._globeDepthTexture.height;
                qE(this), kE(this, e, i, a, t), Vl(this, e, i, a, t)
            }
            this._tempCopyDepthTexture = n, this._tempCopyDepthCommand.execute(e, t), this._updateDepthCommand.execute(e, t)
        }
        return
    }
    c(this._copyDepthCommand) && this._copyDepthCommand.execute(e, t)
};
Er.prototype.executeCopyColor = function(e, t) {
    c(this._copyColorCommand) && this._copyColorCommand.execute(e, t)
};
Er.prototype.executeMergeColor = function(e, t) {
    c(this._mergeColorCommand) && this._mergeColorCommand.execute(e, t)
};
Er.prototype.clear = function(e, t, r) {
    var n = this._clearGlobeColorCommand;
    c(n) && (H.clone(r, n.color), n.execute(e, t)), n = this._clearPrimitiveColorCommand, c(n) && c(this._primitiveColorFramebuffer) && n.execute(e, t)
};
Er.prototype.isDestroyed = function() {
    return !1
};
Er.prototype.destroy = E("GlobeDepth#destroy");
var Lt = {
        OPAQUE_FRONT_FACE: 0,
        OPAQUE_BACK_FACE: 1,
        DEPTH_ONLY_FRONT_FACE: 2,
        DEPTH_ONLY_BACK_FACE: 3,
        DEPTH_ONLY_FRONT_AND_BACK_FACE: 4,
        TRANSLUCENT_FRONT_FACE: 5,
        TRANSLUCENT_BACK_FACE: 6,
        TRANSLUCENT_FRONT_FACE_MANUAL_DEPTH_TEST: 7,
        TRANSLUCENT_BACK_FACE_MANUAL_DEPTH_TEST: 8,
        PICK_FRONT_FACE: 9,
        PICK_BACK_FACE: 10,
        DERIVED_COMMANDS_MAXIMUM_LENGTH: 11
    },
    Dn = Lt.DERIVED_COMMANDS_MAXIMUM_LENGTH,
    QE = ["opaqueFrontFaceCommand", "opaqueBackFaceCommand", "depthOnlyFrontFaceCommand", "depthOnlyBackFaceCommand", "depthOnlyFrontAndBackFaceCommand", "translucentFrontFaceCommand", "translucentBackFaceCommand", "translucentFrontFaceManualDepthTestCommand", "translucentBackFaceManualDepthTestCommand", "pickFrontFaceCommand", "pickBackFaceCommand"];

function Hn() {
    this._frontFaceAlphaByDistance = new dt(0, 1, 0, 1), this._backFaceAlphaByDistance = new dt(0, 1, 0, 1), this._frontFaceTranslucent = !1, this._backFaceTranslucent = !1, this._requiresManualDepthTest = !1, this._sunVisibleThroughGlobe = !1, this._environmentVisible = !1, this._useDepthPlane = !1, this._numberOfTextureUniforms = 0, this._globeTranslucencyFramebuffer = void 0, this._rectangle = L.clone(L.MAX_VALUE), this._derivedCommandKey = 0, this._derivedCommandsDirty = !1, this._derivedCommandPacks = void 0, this._derivedCommandTypes = new Array(Dn), this._derivedBlendCommandTypes = new Array(Dn), this._derivedPickCommandTypes = new Array(Dn), this._derivedCommandTypesToUpdate = new Array(Dn), this._derivedCommandsLength = 0, this._derivedBlendCommandsLength = 0, this._derivedPickCommandsLength = 0, this._derivedCommandsToUpdateLength = 0
}
Object.defineProperties(Hn.prototype, {
    frontFaceAlphaByDistance: {
        get: function() {
            return this._frontFaceAlphaByDistance
        }
    },
    backFaceAlphaByDistance: {
        get: function() {
            return this._backFaceAlphaByDistance
        }
    },
    translucent: {
        get: function() {
            return this._frontFaceTranslucent
        }
    },
    sunVisibleThroughGlobe: {
        get: function() {
            return this._sunVisibleThroughGlobe
        }
    },
    environmentVisible: {
        get: function() {
            return this._environmentVisible
        }
    },
    useDepthPlane: {
        get: function() {
            return this._useDepthPlane
        }
    },
    numberOfTextureUniforms: {
        get: function() {
            return this._numberOfTextureUniforms
        }
    },
    rectangle: {
        get: function() {
            return this._rectangle
        }
    }
});
Hn.prototype.update = function(e) {
    var t = e.globe;
    if (!c(t) || !t.show) {
        this._frontFaceTranslucent = !1, this._backFaceTranslucent = !1, this._sunVisibleThroughGlobe = !0, this._environmentVisible = !0, this._useDepthPlane = !1;
        return
    }
    this._frontFaceAlphaByDistance = hh(t.translucency.enabled, t.translucency.frontFaceAlpha, t.translucency.frontFaceAlphaByDistance, this._frontFaceAlphaByDistance), this._backFaceAlphaByDistance = hh(t.translucency.enabled, t.translucency.backFaceAlpha, t.translucency.backFaceAlphaByDistance, this._backFaceAlphaByDistance), this._frontFaceTranslucent = fh(t.translucency.enabled, this._frontFaceAlphaByDistance, t), this._backFaceTranslucent = fh(t.translucency.enabled, this._backFaceAlphaByDistance, t), this._requiresManualDepthTest = tC(this, e, t), this._sunVisibleThroughGlobe = $E(this, e), this._environmentVisible = JE(this, e), this._useDepthPlane = eC(this, e), this._numberOfTextureUniforms = rC(this), this._rectangle = L.clone(t.translucency.rectangle, this._rectangle), nC(this, e)
};

function hh(e, t, r, n) {
    return e ? c(r) ? (dt.clone(r, n), n.nearValue *= t, n.farValue *= t, n) : (n.nearValue = t, n.farValue = t, n) : (n.nearValue = 1, n.farValue = 1, n)
}

function fh(e, t, r) {
    return e && (r.baseColor.alpha < 1 || t.nearValue < 1 || t.farValue < 1)
}

function $E(e, t) {
    var r = e._frontFaceTranslucent,
        n = e._backFaceTranslucent;
    return r && (t.cameraUnderground || n)
}

function JE(e, t) {
    return !t.cameraUnderground || e._frontFaceTranslucent
}

function eC(e, t) {
    return !t.cameraUnderground && !e._frontFaceTranslucent
}

function tC(e, t, r) {
    return e._frontFaceTranslucent && !e._backFaceTranslucent && !r.depthTestAgainstTerrain && t.mode !== Q.SCENE2D && t.context.depthTexture
}

function rC(e) {
    var t = 0;
    return e._frontFaceTranslucent && ++t, e._requiresManualDepthTest && ++t, t
}

function nC(e, t) {
    e._derivedCommandsLength = ws(e, t, !1, !1, e._derivedCommandTypes), e._derivedBlendCommandsLength = ws(e, t, !0, !1, e._derivedBlendCommandTypes), e._derivedPickCommandsLength = ws(e, t, !1, !0, e._derivedPickCommandTypes);
    var r, n = 0;
    for (r = 0; r < e._derivedCommandsLength; ++r) n |= 1 << e._derivedCommandTypes[r];
    for (r = 0; r < e._derivedBlendCommandsLength; ++r) n |= 1 << e._derivedBlendCommandTypes[r];
    for (r = 0; r < e._derivedPickCommandsLength; ++r) n |= 1 << e._derivedPickCommandTypes[r];
    var i = 0;
    for (r = 0; r < Dn; ++r)(n & 1 << r) > 0 && (e._derivedCommandTypesToUpdate[i++] = r);
    e._derivedCommandsToUpdateLength = i;
    var a = n !== e._derivedCommandKey;
    e._derivedCommandKey = n, e._derivedCommandsDirty = a, !c(e._derivedCommandPacks) && e._frontFaceTranslucent && (e._derivedCommandPacks = iC())
}

function ws(e, t, r, n, i) {
    var a = 0,
        o = e._frontFaceTranslucent,
        s = e._backFaceTranslucent;
    if (!o) return a;
    var h = t.cameraUnderground,
        f = e._requiresManualDepthTest,
        l = n ? Lt.PICK_FRONT_FACE : f ? Lt.TRANSLUCENT_FRONT_FACE_MANUAL_DEPTH_TEST : Lt.TRANSLUCENT_FRONT_FACE,
        d = n ? Lt.PICK_BACK_FACE : f ? Lt.TRANSLUCENT_BACK_FACE_MANUAL_DEPTH_TEST : Lt.TRANSLUCENT_BACK_FACE;
    return t.mode === Q.SCENE2D ? (i[a++] = Lt.DEPTH_ONLY_FRONT_FACE, i[a++] = l, a) : (s ? (r || (i[a++] = Lt.DEPTH_ONLY_FRONT_AND_BACK_FACE), h ? (i[a++] = l, i[a++] = d) : (i[a++] = d, i[a++] = l)) : h ? (r || (i[a++] = Lt.DEPTH_ONLY_BACK_FACE), i[a++] = Lt.OPAQUE_FRONT_FACE, i[a++] = d) : (r || (i[a++] = Lt.DEPTH_ONLY_FRONT_FACE), i[a++] = Lt.OPAQUE_BACK_FACE, i[a++] = l), a)
}
const iC = E("createDerivedCommandPacks");
var lh = new Array(Dn),
    dh = new Array(Dn);
Hn.prototype.updateDerivedCommands = function(e, t) {
    var r = this._derivedCommandTypesToUpdate,
        n = this._derivedCommandsToUpdateLength;
    if (n !== 0) {
        for (var i = 0; i < n; ++i) dh[i] = this._derivedCommandPacks[r[i]], lh[i] = QE[r[i]];
        aC(this, e, n, r, lh, dh, t)
    }
};
const aC = E("updateDerivedCommands");
Hn.prototype.pushDerivedCommands = E("pushDerivedCommands");

function oC(e, t, r, n, i, a, o) {
    for (var s = 0; s < t; ++s) {
        var h = e[s],
            f = h.derivedCommands.type;
        (!c(o) || o.indexOf(f) > -1) && r(h, n, i, a)
    }
}
var sC = [Lt.OPAQUE_FRONT_FACE, Lt.OPAQUE_BACK_FACE];
Hn.prototype.executeGlobeCommands = function(e, t, r, n, i) {
    var a = n.context,
        o = e.commands[ue.GLOBE],
        s = e.indices[ue.GLOBE];
    s !== 0 && (this._globeTranslucencyFramebuffer = r, r.clearClassification(a, i), oC(o, s, t, n, a, i, sC))
};
Hn.prototype.executeGlobeClassificationCommands = E("executeGlobeClassificationCommands");

function uC() {
    return E(this.constructor.name)
}

function cC(e) {
    if (typeof e == "string") {
        var t = document.getElementById(e);
        e = t
    }
    return e
}

function xo(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = cC(e.container);
    this._container = t;
    var r = document.createElement("div");
    r.className = "cesium-performanceDisplay";
    var n = document.createElement("div");
    n.className = "cesium-performanceDisplay-fps", this._fpsText = document.createTextNode(""), n.appendChild(this._fpsText);
    var i = document.createElement("div");
    i.className = "cesium-performanceDisplay-ms", this._msText = document.createTextNode(""), i.appendChild(this._msText), r.appendChild(i), r.appendChild(n), this._container.appendChild(r), this._lastFpsSampleTime = Xt(), this._lastMsSampleTime = Xt(), this._fpsFrameCount = 0, this._msFrameCount = 0, this._throttled = !1;
    var a = document.createElement("div");
    a.className = "cesium-performanceDisplay-throttled", this._throttledText = document.createTextNode(""), a.appendChild(this._throttledText), r.appendChild(a)
}
Object.defineProperties(xo.prototype, {
    throttled: {
        get: function() {
            return this._throttled
        },
        set: function(e) {
            this._throttled !== e && (e ? this._throttledText.nodeValue = "(throttled)" : this._throttledText.nodeValue = "", this._throttled = e)
        }
    }
});
xo.prototype.update = function(e) {
    var t = Xt(),
        r = v(e, !0);
    this._fpsFrameCount++;
    var n = t - this._lastFpsSampleTime;
    if (n > 1e3) {
        var i = "N/A";
        r && (i = this._fpsFrameCount * 1e3 / n | 0), this._fpsText.nodeValue = i + " FPS", this._lastFpsSampleTime = t, this._fpsFrameCount = 0
    }
    this._msFrameCount++;
    var a = t - this._lastMsSampleTime;
    if (a > 200) {
        var o = "N/A";
        r && (o = (a / this._msFrameCount).toFixed(2)), this._msText.nodeValue = o + " MS", this._lastMsSampleTime = t, this._msFrameCount = 0
    }
};
xo.prototype.destroy = function() {
    return Je(this)
};

function _t(e) {
    e = v(e, v.EMPTY_OBJECT), this._primitives = [], this._guid = fo(), this._zIndex = void 0, this.show = v(e.show, !0), this.destroyPrimitives = v(e.destroyPrimitives, !0)
}
Object.defineProperties(_t.prototype, {
    length: {
        get: function() {
            return this._primitives.length
        }
    }
});
_t.prototype.add = function(e, t) {
    var r = c(t),
        n = e._external = e._external || {},
        i = n._composites = n._composites || {};
    return i[this._guid] = {
        collection: this
    }, r ? this._primitives.splice(t, 0, e) : this._primitives.push(e), e
};
_t.prototype.remove = function(e) {
    if (this.contains(e)) {
        var t = this._primitives.indexOf(e);
        if (t !== -1) return this._primitives.splice(t, 1), delete e._external._composites[this._guid], this.destroyPrimitives && e.destroy(), !0
    }
    return !1
};
_t.prototype.removeAndDestroy = function(e) {
    var t = this.remove(e);
    return t && !this.destroyPrimitives && e.destroy(), t
};
_t.prototype.removeAll = function() {
    for (var e = this._primitives, t = e.length, r = 0; r < t; ++r) delete e[r]._external._composites[this._guid], this.destroyPrimitives && e[r].destroy();
    this._primitives = []
};
_t.prototype.contains = function(e) {
    return !!(c(e) && e._external && e._external._composites && e._external._composites[this._guid])
};

function So(e, t) {
    return e._primitives.indexOf(t)
}
_t.prototype.raise = function(e) {
    if (c(e)) {
        var t = So(this, e),
            r = this._primitives;
        if (t !== r.length - 1) {
            var n = r[t];
            r[t] = r[t + 1], r[t + 1] = n
        }
    }
};
_t.prototype.raiseToTop = function(e) {
    if (c(e)) {
        var t = So(this, e),
            r = this._primitives;
        t !== r.length - 1 && (r.splice(t, 1), r.push(e))
    }
};
_t.prototype.lower = function(e) {
    if (c(e)) {
        var t = So(this, e),
            r = this._primitives;
        if (t !== 0) {
            var n = r[t];
            r[t] = r[t - 1], r[t - 1] = n
        }
    }
};
_t.prototype.lowerToBottom = function(e) {
    if (c(e)) {
        var t = So(this, e),
            r = this._primitives;
        t !== 0 && (r.splice(t, 1), r.unshift(e))
    }
};
_t.prototype.get = function(e) {
    return this._primitives[e]
};
_t.prototype.update = function(e) {
    if (this.show)
        for (var t = this._primitives, r = 0; r < t.length; ++r) t[r].update(e)
};
_t.prototype.prePassesUpdate = function(e) {
    for (var t = this._primitives, r = 0; r < t.length; ++r) {
        var n = t[r];
        c(n.prePassesUpdate) && n.prePassesUpdate(e)
    }
};
_t.prototype.updateForPass = function(e, t) {
    for (var r = this._primitives, n = 0; n < r.length; ++n) {
        var i = r[n];
        c(i.updateForPass) && i.updateForPass(e, t)
    }
};
_t.prototype.postPassesUpdate = function(e) {
    for (var t = this._primitives, r = 0; r < t.length; ++r) {
        var n = t[r];
        c(n.postPassesUpdate) && n.postPassesUpdate(e)
    }
};
_t.prototype.isDestroyed = function() {
    return !1
};
_t.prototype.destroy = function() {
    return this.removeAll(), Je(this)
};
var hC = {
    SECONDS_PER_MILLISECOND: .001,
    SECONDS_PER_MINUTE: 60,
    MINUTES_PER_HOUR: 60,
    HOURS_PER_DAY: 24,
    SECONDS_PER_HOUR: 3600,
    MINUTES_PER_DAY: 1440,
    SECONDS_PER_DAY: 86400,
    DAYS_PER_JULIAN_CENTURY: 36525,
    PICOSECOND: 1e-9,
    MODIFIED_JULIAN_DATE_DIFFERENCE: 24000005e-1
};
const tu = Object.freeze(hC);

function so(e, t, r, n, i, a, o, s, h, f) {
    this._tweens = e, this._tweenjs = t, this._startObject = nr(r), this._stopObject = nr(n), this._duration = i, this._delay = a, this._easingFunction = o, this._update = s, this._complete = h, this.cancel = f, this.needsStart = !0
}
Object.defineProperties(so.prototype, {
    startObject: {
        get: function() {
            return this._startObject
        }
    },
    stopObject: {
        get: function() {
            return this._stopObject
        }
    },
    duration: {
        get: function() {
            return this._duration
        }
    },
    delay: {
        get: function() {
            return this._delay
        }
    },
    easingFunction: {
        get: function() {
            return this._easingFunction
        }
    },
    update: {
        get: function() {
            return this._update
        }
    },
    complete: {
        get: function() {
            return this._complete
        }
    },
    tweenjs: {
        get: function() {
            return this._tweenjs
        }
    }
});
so.prototype.cancelTween = function() {
    this._tweens.remove(this)
};

function Dr() {
    this._tweens = []
}
Object.defineProperties(Dr.prototype, {
    length: {
        get: function() {
            return this._tweens.length
        }
    }
});
Dr.prototype.add = function(e) {
    if (e = v(e, v.EMPTY_OBJECT), e.duration === 0) return c(e.complete) && e.complete(), new so(this);
    var t = e.duration / tu.SECONDS_PER_MILLISECOND,
        r = v(e.delay, 0),
        n = r / tu.SECONDS_PER_MILLISECOND,
        i = v(e.easingFunction, Qs.LINEAR_NONE),
        a = e.startObject,
        o = new ce.Tween(a);
    o.to(nr(e.stopObject), t), o.delay(n), o.easing(i), c(e.update) && o.onUpdate(function() {
        e.update(a)
    }), o.onComplete(v(e.complete, null)), o.repeat(v(e._repeat, 0));
    var s = new so(this, o, e.startObject, e.stopObject, e.duration, r, i, e.update, e.complete, e.cancel);
    return this._tweens.push(s), s
};
Dr.prototype.addProperty = E("TweenCollection#.addProperty");
Dr.prototype.addAlpha = E("TweenCollection#addAlpha");
Dr.prototype.addOffsetIncrement = E("TweenCollection#addOffsetIncrement");
Dr.prototype.remove = function(e) {
    if (!c(e)) return !1;
    var t = this._tweens.indexOf(e);
    return t !== -1 ? (e.tweenjs.stop(), c(e.cancel) && e.cancel(), this._tweens.splice(t, 1), !0) : !1
};
Dr.prototype.removeAll = E("TweenCollection#removeAll");
Dr.prototype.contains = E("TweenCollection#contains");
Dr.prototype.get = E("TweenCollection#get");
Dr.prototype.update = function(e) {
    var t = this._tweens,
        r = 0;
    for (e = c(e) ? e / tu.SECONDS_PER_MILLISECOND : Xt(); r < t.length;) {
        var n = t[r],
            i = n.tweenjs;
        n.needsStart ? (n.needsStart = !1, i.start(e)) : i.update(e) ? r++ : (i.stop(), t.splice(r, 1))
    }
};

function fC(e, t) {
    this.near = v(e, 0), this.far = v(t, 0);
    for (var r = ue.NUMBER_OF_PASSES, n = new Array(r), i = new Array(r), a = 0; a < r; ++a) n[a] = [], i[a] = 0;
    this.commands = n, this.indices = i
}
var Sn = {
    RGBA4: w.RGBA4,
    RGB5_A1: w.RGB5_A1,
    RGB565: w.RGB565,
    DEPTH_COMPONENT16: w.DEPTH_COMPONENT16,
    STENCIL_INDEX8: w.STENCIL_INDEX8,
    DEPTH_STENCIL: w.DEPTH_STENCIL,
    validate: function(e) {
        return e === Sn.RGBA4 || e === Sn.RGB5_A1 || e === Sn.RGB565 || e === Sn.DEPTH_COMPONENT16 || e === Sn.STENCIL_INDEX8 || e === Sn.DEPTH_STENCIL
    }
};
const ru = Object.freeze(Sn);

function di(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.context,
        r = t._gl;
    oe.maximumRenderbufferSize;
    var n = v(e.format, ru.RGBA4),
        i = c(e.width) ? e.width : r.drawingBufferWidth,
        a = c(e.height) ? e.height : r.drawingBufferHeight;
    this._gl = r, this._format = n, this._width = i, this._height = a, this._renderbuffer = this._gl.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, this._renderbuffer), r.renderbufferStorage(r.RENDERBUFFER, n, i, a), r.bindRenderbuffer(r.RENDERBUFFER, null)
}
Object.defineProperties(di.prototype, {
    format: {
        get: function() {
            return this._format
        }
    },
    width: {
        get: function() {
            return this._width
        }
    },
    height: {
        get: function() {
            return this._height
        }
    }
});
di.prototype._getRenderbuffer = function() {
    return this._renderbuffer
};
di.prototype.isDestroyed = function() {
    return !1
};
di.prototype.destroy = function() {
    return this._gl.deleteRenderbuffer(this._renderbuffer), Je(this)
};

function Wn() {
    this._colorTexture = void 0, this._idTexture = void 0, this._depthStencilTexture = void 0, this._depthStencilRenderbuffer = void 0, this._framebuffer = void 0, this._idFramebuffer = void 0, this._idClearColor = new H(0, 0, 0, 0), this._useHdr = void 0, this._clearCommand = new jt({
        color: new H(0, 0, 0, 0),
        depth: 1,
        owner: this
    })
}

function Gl(e) {
    e._framebuffer = e._framebuffer && e._framebuffer.destroy(), e._idFramebuffer = e._idFramebuffer && e._idFramebuffer.destroy(), e._colorTexture = e._colorTexture && e._colorTexture.destroy(), e._idTexture = e._idTexture && e._idTexture.destroy(), e._depthStencilTexture = e._depthStencilTexture && e._depthStencilTexture.destroy(), e._depthStencilRenderbuffer = e._depthStencilRenderbuffer && e._depthStencilRenderbuffer.destroy(), e._depthStencilIdTexture = e._depthStencilIdTexture && e._depthStencilIdTexture.destroy(), e._depthStencilIdRenderbuffer = e._depthStencilIdRenderbuffer && e._depthStencilIdRenderbuffer.destroy(), e._framebuffer = void 0, e._idFramebuffer = void 0, e._colorTexture = void 0, e._idTexture = void 0, e._depthStencilTexture = void 0, e._depthStencilRenderbuffer = void 0, e._depthStencilIdTexture = void 0, e._depthStencilIdRenderbuffer = void 0
}
Wn.prototype.update = function(e, t, r) {
    var n = t.width,
        i = t.height,
        a = this._colorTexture;
    if (!(c(a) && a.width === n && a.height === i && r === this._useHdr)) {
        Gl(this), this._useHdr = r;
        var o = r ? e.halfFloatingPointTexture ? Me.HALF_FLOAT : Me.FLOAT : Me.UNSIGNED_BYTE;
        this._colorTexture = new Ze({
            context: e,
            width: n,
            height: i,
            pixelFormat: je.RGBA,
            pixelDatatype: o,
            sampler: yt.NEAREST
        }), this._idTexture = new Ze({
            context: e,
            width: n,
            height: i,
            pixelFormat: je.RGBA,
            pixelDatatype: Me.UNSIGNED_BYTE,
            sampler: yt.NEAREST
        }), e.depthTexture ? (this._depthStencilTexture = new Ze({
            context: e,
            width: n,
            height: i,
            pixelFormat: je.DEPTH_STENCIL,
            pixelDatatype: Me.UNSIGNED_INT_24_8,
            sampler: yt.NEAREST
        }), this._depthStencilIdTexture = new Ze({
            context: e,
            width: n,
            height: i,
            pixelFormat: je.DEPTH_STENCIL,
            pixelDatatype: Me.UNSIGNED_INT_24_8,
            sampler: yt.NEAREST
        })) : (this._depthStencilRenderbuffer = new di({
            context: e,
            width: n,
            height: i,
            format: ru.DEPTH_STENCIL
        }), this._depthStencilIdRenderbuffer = new di({
            context: e,
            width: n,
            height: i,
            format: ru.DEPTH_STENCIL
        })), this._framebuffer = new Dt({
            context: e,
            colorTextures: [this._colorTexture],
            depthStencilTexture: this._depthStencilTexture,
            depthStencilRenderbuffer: this._depthStencilRenderbuffer,
            destroyAttachments: !1
        }), this._idFramebuffer = new Dt({
            context: e,
            colorTextures: [this._idTexture],
            depthStencilTexture: this._depthStencilIdTexture,
            depthStencilRenderbuffer: this._depthStencilIdRenderbuffer,
            destroyAttachments: !1
        })
    }
};
Wn.prototype.clear = function(e, t, r) {
    var n = t.framebuffer;
    t.framebuffer = this._framebuffer, H.clone(r, this._clearCommand.color), this._clearCommand.execute(e, t), t.framebuffer = this._idFramebuffer, H.clone(this._idClearColor, this._clearCommand.color), this._clearCommand.execute(e, t), t.framebuffer = n
};
Wn.prototype.getFramebuffer = function() {
    return this._framebuffer
};
Wn.prototype.getIdFramebuffer = function() {
    return this._idFramebuffer
};
Wn.prototype.isDestroyed = function() {
    return !1
};
Wn.prototype.destroy = function() {
    return Gl(this), Je(this)
};

function lC() {
    return E(this.constructor.name)
}

function dC() {
    this.command = void 0, this.near = void 0, this.far = void 0
}

function Io(e, t, r) {
    var n = e.context,
        i;
    n.depthTexture && (i = new Er);
    var a = new wl(n);
    a.viewport = Re.clone(r), this.camera = t, this._cameraClone = $.clone(t), this._cameraStartFired = !1, this._cameraMovedTime = void 0, this.viewport = r, this.passState = a, this.sceneFramebuffer = new Wn, this.globeDepth = i, this.globeTranslucencyFramebuffer = new lC, this.pickDepths = [], this.debugGlobeDepths = [], this.frustumCommandsList = [], this.debugFrustumStatistics = void 0, this._commandExtents = []
}
var _h = new u,
    mh = new u;

function _C(e, t) {
    var r = Math.max(Math.abs(e.x), Math.abs(t.x)),
        n = Math.max(Math.abs(e.y), Math.abs(t.y)),
        i = Math.max(Math.abs(e.z), Math.abs(t.z));
    return Math.max(Math.max(r, n), i)
}

function mC(e, t, r) {
    var n = 1 / Math.max(1, _C(e.position, t.position));
    return u.multiplyByScalar(e.position, n, _h), u.multiplyByScalar(t.position, n, mh), u.equalsEpsilon(_h, mh, r) && u.equalsEpsilon(e.direction, t.direction, r) && u.equalsEpsilon(e.up, t.up, r) && u.equalsEpsilon(e.right, t.right, r) && y.equalsEpsilon(e.transform, t.transform, r) && e.frustum.equalsEpsilon(t.frustum, r)
}
Io.prototype.checkForCameraUpdates = function(e) {
    var t = this.camera,
        r = this._cameraClone;
    return mC(t, r, p.EPSILON15) ? (this._cameraStartFired && Xt() - this._cameraMovedTime > e.cameraEventWaitTime && (t.moveEnd.raiseEvent(), this._cameraStartFired = !1), !1) : (this._cameraStartFired || (t.moveStart.raiseEvent(), this._cameraStartFired = !0), this._cameraMovedTime = Xt(), $.clone(t, r), !0)
};

function vC(e, t, r, n) {
    var i = t.frameState,
        a = i.camera,
        o = i.useLogDepth ? t.logarithmicDepthFarToNearRatio : t.farToNearRatio,
        s = t.mode === Q.SCENE2D,
        h = t.nearToFarDistance2D;
    n *= 1 + p.EPSILON2, r = Math.min(Math.max(r, a.frustum.near), a.frustum.far), n = Math.max(Math.min(n, a.frustum.far), r);
    var f;
    s ? (n = Math.min(n, a.position.z + t.nearToFarDistance2D), r = Math.min(r, n), f = Math.ceil(Math.max(1, n - r) / t.nearToFarDistance2D)) : f = Math.ceil(Math.log(n / r) / Math.log(o));
    var l = e.frustumCommandsList;
    l.length = f;
    for (var d = 0; d < f; ++d) {
        var m, _;
        s ? (m = Math.min(n - h, r + d * h), _ = Math.min(n, m + h)) : (m = Math.max(r, Math.pow(o, d) * r), _ = Math.min(n, o * m));
        var g = l[d];
        c(g) ? (g.near = m, g.far = _) : g = l[d] = new fC(m, _)
    }
}

function pC(e, t, r, n, i) {
    t.debugShowFrustums && (r.debugOverlappingFrustums = 0);
    for (var a = e.frustumCommandsList, o = a.length, s = 0; s < o; ++s) {
        var h = a[s],
            f = h.near,
            l = h.far;
        if (!(n > l)) {
            if (i < f) break;
            var d = r.pass,
                m = h.indices[d]++;
            if (h.commands[d][m] = r, t.debugShowFrustums && (r.debugOverlappingFrustums |= 1 << s), r.executeInClosestFrustum) break
        }
    }
    if (t.debugShowFrustums) {
        var _ = e.debugFrustumStatistics.commandsInFrustums;
        _[r.debugOverlappingFrustums] = c(_[r.debugOverlappingFrustums]) ? _[r.debugOverlappingFrustums] + 1 : 1, ++e.debugFrustumStatistics.totalCommands
    }
    t.updateDerivedCommands(r)
}
var vh = new Bt,
    gC = new Pn;
Io.prototype.createPotentiallyVisibleSet = function(e) {
    var t = e.frameState,
        r = t.camera,
        n = r.directionWC,
        i = r.positionWC,
        a = e._computeCommandList,
        o = e._overlayCommandList,
        s = t.commandList;
    e.debugShowFrustums && (this.debugFrustumStatistics = {
        totalCommands: 0,
        commandsInFrustums: {}
    });
    for (var h = this.frustumCommandsList, f = h.length, l = ue.NUMBER_OF_PASSES, d = 0; d < f; ++d)
        for (var m = 0; m < l; ++m) h[d].indices[m] = 0;
    a.length = 0, o.length = 0;
    for (var _ = this._commandExtents, g = _.length, T = 0, C = +Number.MAX_VALUE, A = -Number.MAX_VALUE, S = t.shadowState.shadowsEnabled, x = +Number.MAX_VALUE, I = -Number.MAX_VALUE, O = Number.MAX_VALUE, F = t.mode === Q.SCENE3D ? t.occluder : void 0, b = t.cullingVolume, N = vh.planes, D = 0; D < 5; ++D) N[D] = b.planes[D];
    b = vh;
    for (var V = s.length, M = 0; M < V; ++M) {
        var W = s[M],
            G = W.pass;
        if (G === ue.COMPUTE) a.push(W);
        else if (G === ue.OVERLAY) o.push(W);
        else {
            var U, q, Y = W.boundingVolume;
            if (c(Y)) {
                if (!e.isVisible(W, b, F)) continue;
                var j = Y.computePlaneDistances(i, n, gC);
                U = j.start, q = j.stop, C = Math.min(C, U), A = Math.max(A, q)
            } else W instanceof jt ? (U = r.frustum.near, q = r.frustum.far) : (U = r.frustum.near, q = r.frustum.far, C = Math.min(C, U), A = Math.max(A, q));
            var Z = _[T];
            c(Z) || (Z = _[T] = new dC), Z.command = W, Z.near = U, Z.far = q, T++
        }
    }
    S && (x = Math.min(Math.max(x, r.frustum.near), r.frustum.far), I = Math.max(Math.min(I, r.frustum.far), x)), S && (t.shadowState.nearPlane = x, t.shadowState.farPlane = I, t.shadowState.closestObjectSize = O), vC(this, e, C, A);
    var le, ne;
    for (le = 0; le < T; le++) ne = _[le], pC(this, e, ne.command, ne.near, ne.far);
    if (T < g)
        for (le = T; le < g && (ne = _[le], !!c(ne.command)); le++) ne.command = void 0;
    var he = h.length,
        De = t.frustumSplits;
    De.length = he + 1;
    for (var fe = 0; fe < he; ++fe) De[fe] = h[fe].near, fe === he - 1 && (De[fe + 1] = h[fe].far)
};
Io.prototype.destroy = E("destroy");

function TC() {
    return E(this.constructor.name)
}

function Au() {
    return E(this.constructor.name)
}
Au.isTranslucencySupported = function() {
    return !1
};
var uo = function(e) {
    return function() {
        e.frameState.afterRender.push(function() {
            e.requestRender()
        })
    }
};

function Le(e) {
    e = v(e, v.EMPTY_OBJECT);
    var t = e.canvas,
        r = e.creditContainer,
        n = e.creditViewport,
        i = nr(e.contextOptions);
    c(i) || (i = {}), c(i.webgl) || (i.webgl = {}), i.webgl.powerPreference = v(i.webgl.powerPreference, "high-performance");
    var a = c(r),
        o = new yr(t, i);
    a || (r = document.createElement("div"), r.style.position = "absolute", r.style.bottom = "0", r.style["text-shadow"] = "0 0 2px #000000", r.style.color = "#ffffff", r.style["font-size"] = "10px", r.style["padding-right"] = "5px", t.parentNode.appendChild(r)), c(n) || (n = t.parentNode), this._id = fo(), this._jobScheduler = new uC, this._frameState = new UE(o, new AE, this._jobScheduler), this._frameState.scene3DOnly = v(e.scene3DOnly, !1), this._removeCreditContainer = !a, this._creditContainer = r, this._canvas = t, this._context = o, this._computeEngine = new wo(o), this._globe = void 0, this._globeTranslucencyState = new Hn, this._primitives = new _t, this._groundPrimitives = new _t, this._globeHeight = void 0, this._cameraUnderground = !1, this._logDepthBuffer = o.fragmentDepth, this._logDepthBufferDirty = !0, this._tweens = new Dr, this._shaderFrameCount = 0, this._computeCommandList = [], this._overlayCommandList = [], this._useOIT = v(e.orderIndependentTranslucency, !0), this._executeOITFunction = void 0, this._depthPlane = new ta, this._clearColorCommand = new jt({
        color: new H,
        stencil: 0,
        owner: this
    }), this._depthClearCommand = new jt({
        depth: 1,
        owner: this
    }), this._stencilClearCommand = new jt({
        stencil: 0
    }), this._classificationStencilClearCommand = new jt({
        stencil: 0,
        renderState: Xe.fromCache({
            stencilMask: eu.CLASSIFICATION_MASK
        })
    }), this._depthOnlyRenderStateCache = {}, this._preUpdate = new ze, this._postUpdate = new ze, this._renderError = new ze, this._preRender = new ze, this._postRender = new ze, this._minimumDisableDepthTestDistance = 0, this.rethrowRenderErrors = !1, this.completeMorphOnUserInput = !0, this.morphStart = new ze, this.morphComplete = new ze, this.skyBox = void 0, this.skyAtmosphere = void 0, this.sun = void 0, this.sunBloom = !0, this._sunBloom = void 0, this.moon = void 0, this.backgroundColor = H.clone(H.BLACK), this._mode = Q.SCENE3D, this._mapProjection = c(e.mapProjection) ? e.mapProjection : new jr, this.morphTime = 1, this.farToNearRatio = 1e3, this.logarithmicDepthFarToNearRatio = 1e9, this.nearToFarDistance2D = 175e4, this.debugCommandFilter = void 0, this.debugShowCommands = !1, this.debugShowFrustums = !1, this.debugShowFramesPerSecond = !1, this.debugShowGlobeDepth = !1, this.debugShowDepthFrustum = 1, this.debugShowFrustumPlanes = !1, this._debugShowFrustumPlanes = !1, this._debugFrustumPlanes = void 0, this.pickTranslucentDepth = !1, this.cameraEventWaitTime = 500, this.fog = new Bl, this._shadowMapCamera = new $(this), this.invertClassification = !1, this.invertClassificationColor = H.clone(H.WHITE), this._actualInvertClassificationColor = H.clone(this._invertClassificationColor), this._invertClassification = new Au, this._brdfLutGenerator = new TC, this._terrainExaggeration = v(e.terrainExaggeration, 1), this._performanceDisplay = void 0, this._debugVolume = void 0, this._screenSpaceCameraController = E("_screenSpaceCameraController"), this._cameraUnderground = !1, this._environmentState = {
        skyBoxCommand: void 0,
        skyAtmosphereCommand: void 0,
        sunDrawCommand: void 0,
        sunComputeCommand: void 0,
        moonCommand: void 0,
        isSunVisible: !1,
        isMoonVisible: !1,
        isReadyForAtmosphere: !1,
        isSkyAtmosphereVisible: !1,
        clearGlobeDepth: !1,
        useDepthPlane: !1,
        originalFramebuffer: void 0,
        useGlobeDepthFramebuffer: !1,
        separatePrimitiveFramebuffer: !1,
        useOIT: !1,
        useInvertClassification: !1,
        usePostProcess: !1,
        usePostProcessSelected: !1
    }, this.requestRenderMode = v(e.requestRenderMode, !1), this._renderRequested = !0, this.maximumRenderTimeChange = v(e.maximumRenderTimeChange, 0), this._lastRenderTime = void 0, this._frameRateMonitor = void 0, this._removeRequestListenerCallback = ke.requestCompletedEvent.addEventListener(uo(this)), this._removeTaskProcessorListenerCallback = Tt.taskCompletedEvent.addEventListener(uo(this)), this._removeGlobeCallbacks = [];
    var s = new Re(0, 0, o.drawingBufferWidth, o.drawingBufferHeight),
        h = new $(this);
    this._logDepthBuffer && (h.frustum.near = .1, h.frustum.far = 1e10), this.preloadFlightCamera = new $(this), this.preloadFlightCullingVolume = void 0, this._picking = {
        pickPositionWorldCoordinates: function() {}
    }, this._defaultView = new Io(this, h, s), this._view = this._defaultView, this._hdr = void 0, this._hdrDirty = void 0, this.highDynamicRange = !1, this.gamma = 2.2, this.sphericalHarmonicCoefficients = void 0, this.specularEnvironmentMaps = void 0, this._specularEnvironmentMapAtlas = void 0, Hl(this, 0, Date.now()), this.updateFrameState(), this.initializeFrame()
}

function yC(e, t) {
    for (var r = 0; r < e._removeGlobeCallbacks.length; ++r) e._removeGlobeCallbacks[r]();
    e._removeGlobeCallbacks.length = 0;
    var n = [];
    c(t) && (n.push(t.imageryLayersUpdatedEvent.addEventListener(uo(e))), n.push(t.terrainProviderChanged.addEventListener(uo(e)))), e._removeGlobeCallbacks = n
}
Object.defineProperties(Le.prototype, {
    canvas: {
        get: function() {
            return this._canvas
        }
    },
    drawingBufferHeight: {
        get: function() {
            return this._context.drawingBufferHeight
        }
    },
    drawingBufferWidth: {
        get: function() {
            return this._context.drawingBufferWidth
        }
    },
    maximumAliasedLineWidth: {
        get: function() {
            return oe.maximumAliasedLineWidth
        }
    },
    maximumCubeMapSize: {
        get: function() {
            return oe.maximumCubeMapSize
        }
    },
    pickPositionSupported: {
        get: function() {
            return this._context.depthTexture
        }
    },
    sampleHeightSupported: {
        get: function() {
            return this._context.depthTexture
        }
    },
    clampToHeightSupported: {
        get: function() {
            return this._context.depthTexture
        }
    },
    invertClassificationSupported: {
        get: function() {
            return this._context.depthTexture
        }
    },
    specularEnvironmentMapsSupported: {
        get: function() {
            return !1
        }
    },
    globe: {
        get: function() {
            return this._globe
        },
        set: function(e) {
            this._globe = this._globe && this._globe.destroy(), this._globe = e, yC(this, e)
        }
    },
    primitives: {
        get: function() {
            return this._primitives
        }
    },
    groundPrimitives: {
        get: function() {
            return this._groundPrimitives
        }
    },
    camera: {
        get: function() {
            return this._view.camera
        },
        set: function(e) {
            this._view.camera = e
        }
    },
    view: {
        get: function() {
            return this._view
        },
        set: function(e) {
            this._view = e
        }
    },
    defaultView: {
        get: function() {
            return this._defaultView
        }
    },
    screenSpaceCameraController: {
        get: function() {
            return this._screenSpaceCameraController
        }
    },
    mapProjection: {
        get: function() {
            return this._mapProjection
        }
    },
    jobScheduler: {
        get: function() {
            return this._jobScheduler
        }
    },
    frameState: {
        get: function() {
            return this._frameState
        }
    },
    environmentState: {
        get: function() {
            return this._environmentState
        }
    },
    tweens: {
        get: function() {
            return this._tweens
        }
    },
    imageryLayers: {
        get: function() {
            if (c(this.globe)) return this.globe.imageryLayers
        }
    },
    terrainProvider: {
        get: function() {
            if (c(this.globe)) return this.globe.terrainProvider
        },
        set: function(e) {
            c(this.globe) && (this.globe.terrainProvider = e)
        }
    },
    terrainProviderChanged: {
        get: function() {
            if (c(this.globe)) return this.globe.terrainProviderChanged
        }
    },
    preUpdate: {
        get: function() {
            return this._preUpdate
        }
    },
    postUpdate: {
        get: function() {
            return this._postUpdate
        }
    },
    renderError: {
        get: function() {
            return this._renderError
        }
    },
    preRender: {
        get: function() {
            return this._preRender
        }
    },
    postRender: {
        get: function() {
            return this._postRender
        }
    },
    lastRenderTime: {
        get: function() {
            return this._lastRenderTime
        }
    },
    context: {
        get: function() {
            return this._context
        }
    },
    debugFrustumStatistics: {
        get: function() {
            return this._view.debugFrustumStatistics
        }
    },
    scene3DOnly: {
        get: function() {
            return this._frameState.scene3DOnly
        }
    },
    orderIndependentTranslucency: {
        get: function() {
            return this._useOIT
        }
    },
    id: {
        get: function() {
            return this._id
        }
    },
    mode: {
        get: function() {
            return this._mode
        },
        set: function(e) {
            e === Q.SCENE2D ? this.morphTo2D(0) : e === Q.SCENE3D ? this.morphTo3D(0) : e === Q.COLUMBUS_VIEW && this.morphToColumbusView(0), this._mode = e
        }
    },
    frustumCommandsList: {
        get: function() {
            return this._view.frustumCommandsList
        }
    },
    numberOfFrustums: {
        get: function() {
            return this._view.frustumCommandsList.length
        }
    },
    terrainExaggeration: {
        get: function() {
            return this._terrainExaggeration
        }
    },
    imagerySplitPosition: {
        get: function() {
            return this._frameState.imagerySplitPosition
        },
        set: function(e) {
            this._frameState.imagerySplitPosition = e
        }
    },
    minimumDisableDepthTestDistance: {
        get: function() {
            return this._minimumDisableDepthTestDistance
        },
        set: function(e) {
            this._minimumDisableDepthTestDistance = e
        }
    },
    logarithmicDepthBuffer: {
        get: function() {
            return this._logDepthBuffer
        },
        set: function(e) {
            e = this._context.fragmentDepth && e, this._logDepthBuffer !== e && (this._logDepthBuffer = e, this._logDepthBufferDirty = !0)
        }
    },
    gamma: {
        get: function() {
            return this._context.uniformState.gamma
        },
        set: function(e) {
            this._context.uniformState.gamma = e
        }
    },
    highDynamicRange: {
        get: function() {
            return this._hdr
        },
        set: function(e) {
            var t = this._context,
                r = e && t.depthTexture && (t.colorBufferFloat || t.colorBufferHalfFloat);
            this._hdrDirty = r !== this._hdr, this._hdr = r
        }
    },
    highDynamicRangeSupported: {
        get: function() {
            var e = this._context;
            return e.depthTexture && (e.colorBufferFloat || e.colorBufferHalfFloat)
        }
    },
    cameraUnderground: {
        get: function() {
            return this._cameraUnderground
        }
    },
    pixelRatio: {
        get: function() {
            return this._frameState.pixelRatio
        },
        set: function(e) {
            this._frameState.pixelRatio = e
        }
    },
    opaqueFrustumNearOffset: {
        get: function() {
            return .9999
        }
    },
    globeHeight: {
        get: function() {
            return this._globeHeight
        }
    }
});
Le.prototype.getCompressedTextureFormatSupported = function(e) {
    var t = this.context;
    return (e === "WEBGL_compressed_texture_s3tc" || e === "s3tc") && t.s3tc || (e === "WEBGL_compressed_texture_pvrtc" || e === "pvrtc") && t.pvrtc || (e === "WEBGL_compressed_texture_etc1" || e === "etc1") && t.etc1
};

function ph(e, t, r) {
    e._context, e._view.oit, t.derivedCommands
}
Le.prototype.updateDerivedCommands = function(e) {
    if (c(e.derivedCommands)) {
        var t = this._frameState,
            r = this._context,
            n = t.shadowState.lastDirtyTime;
        e.lastDirtyTime !== n && (e.lastDirtyTime = n, e.dirty = !0);
        var i = t.useLogDepth,
            a = this._hdr,
            o = e.derivedCommands,
            s = c(o.logDepth),
            h = c(o.hdr),
            f = c(o.originalCommand),
            l = i && !s,
            d = a && !h,
            m = (!i || !a) && !f;
        e.dirty = e.dirty || l || d || m, e.dirty && (e.dirty = !1, (s || l) && (o.logDepth = Ro.createLogDepthCommand(e, r, o.logDepth), ph(this, o.logDepth.command)), (f || m) && ph(this, e))
    }
};
var gh = new ae,
    Rs;

function EC(e) {
    var t = e.globe;
    if (e._mode === Q.SCENE3D && c(t) && t.show && !e._cameraUnderground && !e._globeTranslucencyState.translucent) {
        var r = t.ellipsoid,
            n = e.frameState.minimumTerrainHeight;
        return gh.radius = r.minimumRadius + n, Rs = Nt.fromBoundingSphere(gh, e.camera.positionWC, Rs), Rs
    }
}
Le.prototype.clearPasses = function(e) {
    e.render = !1, e.pick = !1, e.depth = !1, e.postProcess = !1, e.offscreen = !1
};

function Hl(e, t, r) {
    var n = e._frameState;
    n.frameNumber = t, n.time = r
}
Le.prototype.updateFrameState = function() {
    var e = this.camera,
        t = this._frameState;
    t.commandList.length = 0, t.brdfLutGenerator = this._brdfLutGenerator, t.environmentMap = this.skyBox && this.skyBox._cubeMap, t.mode = this._mode, t.morphTime = this.morphTime, t.mapProjection = this.mapProjection, t.camera = e, t.cullingVolume = e.frustum.computeCullingVolume(e.positionWC, e.directionWC, e.upWC), t.occluder = EC(this), t.terrainExaggeration = this._terrainExaggeration, t.minimumTerrainHeight = 0, t.minimumDisableDepthTestDistance = this._minimumDisableDepthTestDistance, t.invertClassification = this.invertClassification, t.useLogDepth = this._logDepthBuffer && !(this.camera.frustum instanceof $e || this.camera.frustum instanceof Zt), t.light = this.light, t.cameraUnderground = this._cameraUnderground, t.globeTranslucencyState = this._globeTranslucencyState, c(this._specularEnvironmentMapAtlas) && this._specularEnvironmentMapAtlas.ready ? (t.specularEnvironmentMaps = this._specularEnvironmentMapAtlas.texture, t.specularEnvironmentMapsMaximumLOD = this._specularEnvironmentMapAtlas.maximumMipmapLevel) : (t.specularEnvironmentMaps = void 0, t.specularEnvironmentMapsMaximumLOD = void 0), t.sphericalHarmonicCoefficients = this.sphericalHarmonicCoefficients, this._actualInvertClassificationColor = H.clone(this.invertClassificationColor, this._actualInvertClassificationColor), Au.isTranslucencySupported(this._context) || (this._actualInvertClassificationColor.alpha = 1), t.invertClassificationColor = this._actualInvertClassificationColor, c(this.globe) ? t.maximumScreenSpaceError = this.globe.maximumScreenSpaceError : t.maximumScreenSpaceError = 2, this.clearPasses(t.passes), t.tilesetPassState = void 0
};
Le.prototype.isVisible = function(e, t, r) {
    return c(e) && (!c(e.boundingVolume) || !e.cull || t.computeVisibility(e.boundingVolume) !== ft.OUTSIDE && (!c(r) || !e.occlude || !e.boundingVolume.isOccluded(r)))
};
var xs = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1);
xs = y.inverseTransformation(xs, xs);

function Jt(e, t, r, n, i) {
    var a = t._frameState;
    if (!(c(t.debugCommandFilter) && !t.debugCommandFilter(e))) {
        if (e instanceof jt) {
            e.execute(r, n);
            return
        }
        a.useLogDepth && c(e.derivedCommands.logDepth) && (e = e.derivedCommands.logDepth.command);
        var o = a.passes;
        if (!o.pick && !o.depth && t._hdr && c(e.derivedCommands) && c(e.derivedCommands.hdr) && (e = e.derivedCommands.hdr.command), o.pick || o.depth) {
            if (o.pick && !o.depth && c(e.derivedCommands.picking)) {
                e = e.derivedCommands.picking.pickCommand, e.execute(r, n);
                return
            } else if (c(e.derivedCommands.depth)) {
                e = e.derivedCommands.depth.depthOnlyCommand, e.execute(r, n);
                return
            }
        }
        a.shadowState.lightShadowsEnabled && e.receiveShadows && c(e.derivedCommands.shadows) ? e.derivedCommands.shadows.receiveCommand.execute(r, n) : e.execute(r, n)
    }
}

function Ui(e, t, r, n) {
    var i = t._frameState,
        a = e.derivedCommands;
    c(a) && (i.useLogDepth && c(a.logDepth) && (e = a.logDepth.command), a = e.derivedCommands, c(a.picking) ? (e = a.picking.pickCommand, e.execute(r, n)) : c(a.depth) && (e = a.depth.depthOnlyCommand, e.execute(r, n)))
}

function CC(e, t, r) {
    return t.boundingVolume.distanceSquaredTo(r) - e.boundingVolume.distanceSquaredTo(r)
}

function AC(e, t, r) {
    return e.boundingVolume.distanceSquaredTo(r) - t.boundingVolume.distanceSquaredTo(r) + p.EPSILON12
}

function wC(e, t, r, n, i) {
    var a = e.context;
    El(n, CC, e.camera.positionWC), c(i) && t(i.unclassifiedCommand, e, a, r);
    for (var o = n.length, s = 0; s < o; ++s) t(n[s], e, a, r)
}

function RC(e, t, r, n, i) {
    var a = e.context;
    El(n, AC, e.camera.positionWC), c(i) && t(i.unclassifiedCommand, e, a, r);
    for (var o = n.length, s = 0; s < o; ++s) t(n[s], e, a, r)
}

function Wl(e, t) {
    var r = e._view.debugGlobeDepths,
        n = r[t];
    return !c(n) && e.context.depthTexture && (n = new Er, r[t] = n), n
}
var xC = new Mt,
    SC = new gr,
    IC = new $e,
    OC = new Zt;

function PC(e, t) {
    var r = e.camera,
        n = e.context,
        i = e.frameState,
        a = n.uniformState;
    a.updateCamera(r);
    var o;
    c(r.frustum.fov) ? o = r.frustum.clone(xC) : c(r.frustum.infiniteProjectionMatrix) ? o = r.frustum.clone(SC) : c(r.frustum.width) ? o = r.frustum.clone(IC) : o = r.frustum.clone(OC), o.near = r.frustum.near, o.far = r.frustum.far, a.updateFrustum(o), a.updatePass(ue.ENVIRONMENT);
    var s = i.passes,
        h = s.pick,
        f = e._environmentState,
        l = e._view,
        d = f.renderTranslucentDepthForPick;
    if (!h) {
        var m = f.skyBoxCommand;
        c(m) && Jt(m, e, n, t), f.isSkyAtmosphereVisible && Jt(f.skyAtmosphereCommand, e, n, t), f.isSunVisible && f.sunDrawCommand.execute(n, t), f.isMoonVisible && f.moonCommand.execute(n, t)
    }
    var _;
    f.useOIT ? (c(e._executeOITFunction) || (e._executeOITFunction = function(at, qe, Fe, Te, rt) {
        l.oit.executeCommands(at, qe, Fe, Te, rt)
    }), _ = e._executeOITFunction) : s.render ? _ = wC : _ = RC;
    var g = l.frustumCommandsList,
        T = g.length,
        C = f.clearGlobeDepth,
        A = f.useDepthPlane,
        S = e._globeTranslucencyState,
        x = S.translucent,
        I = e._view.globeTranslucencyFramebuffer,
        O = f.separatePrimitiveFramebuffer = !1,
        F = e._depthClearCommand,
        b = e._stencilClearCommand,
        N = e._classificationStencilClearCommand,
        D = e._depthPlane,
        V = f.usePostProcessSelected;
    r.position.z;
    for (var M, W = 0; W < T; ++W) {
        var G = T - W - 1,
            U = g[G];
        o.near = G !== 0 ? U.near * e.opaqueFrustumNearOffset : U.near, o.far = U.far, a.updateFrustum(o);
        var q = e.debugShowGlobeDepth ? Wl(e, G) : l.globeDepth;
        O && (t.framebuffer = q.framebuffer);
        var Y;
        e.debugShowGlobeDepth && c(q) && f.useGlobeDepthFramebuffer && (q.update(n, t, l.viewport, e._hdr, C), q.clear(n, t, e._clearColorCommand.color), Y = t.framebuffer, t.framebuffer = q.framebuffer), F.execute(n, t), n.stencilBuffer && b.execute(n, t), a.updatePass(ue.GLOBE);
        var j = U.commands[ue.GLOBE],
            Z = U.indices[ue.GLOBE];
        if (x) S.executeGlobeCommands(U, Jt, I, e, t);
        else
            for (M = 0; M < Z; ++M) Jt(j[M], e, n, t);
        if (c(q) && f.useGlobeDepthFramebuffer && q.executeCopyDepth(n, t), e.debugShowGlobeDepth && c(q) && f.useGlobeDepthFramebuffer && (t.framebuffer = Y), !f.renderTranslucentDepthForPick)
            if (a.updatePass(ue.TERRAIN_CLASSIFICATION), j = U.commands[ue.TERRAIN_CLASSIFICATION], Z = U.indices[ue.TERRAIN_CLASSIFICATION], x) S.executeGlobeClassificationCommands(U, Jt, I, e, t);
            else
                for (M = 0; M < Z; ++M) Jt(j[M], e, n, t);
        if (C && (F.execute(n, t), A && D.execute(n, t)), O && (t.framebuffer = q.primitiveFramebuffer), !f.useInvertClassification || h || f.renderTranslucentDepthForPick) {
            for (a.updatePass(ue.CESIUM_3D_TILE), j = U.commands[ue.CESIUM_3D_TILE], Z = U.indices[ue.CESIUM_3D_TILE], M = 0; M < Z; ++M) Jt(j[M], e, n, t);
            if (Z > 0 && (c(q) && f.useGlobeDepthFramebuffer && q.executeUpdateDepth(n, t, C), !f.renderTranslucentDepthForPick))
                for (a.updatePass(ue.CESIUM_3D_TILE_CLASSIFICATION), j = U.commands[ue.CESIUM_3D_TILE_CLASSIFICATION], Z = U.indices[ue.CESIUM_3D_TILE_CLASSIFICATION], M = 0; M < Z; ++M) Jt(j[M], e, n, t)
        } else {
            e._invertClassification.clear(n, t);
            var le = t.framebuffer;
            for (t.framebuffer = e._invertClassification._fbo, a.updatePass(ue.CESIUM_3D_TILE), j = U.commands[ue.CESIUM_3D_TILE], Z = U.indices[ue.CESIUM_3D_TILE], M = 0; M < Z; ++M) Jt(j[M], e, n, t);
            for (c(q) && f.useGlobeDepthFramebuffer && q.executeUpdateDepth(n, t, C), a.updatePass(ue.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW), j = U.commands[ue.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW], Z = U.indices[ue.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW], M = 0; M < Z; ++M) Jt(j[M], e, n, t);
            for (t.framebuffer = le, e._invertClassification.executeClassified(n, t), i.invertClassificationColor.alpha === 1 && e._invertClassification.executeUnclassified(n, t), Z > 0 && n.stencilBuffer && N.execute(n, t), a.updatePass(ue.CESIUM_3D_TILE_CLASSIFICATION), j = U.commands[ue.CESIUM_3D_TILE_CLASSIFICATION], Z = U.indices[ue.CESIUM_3D_TILE_CLASSIFICATION], M = 0; M < Z; ++M) Jt(j[M], e, n, t)
        }
        for (Z > 0 && n.stencilBuffer && b.execute(n, t), a.updatePass(ue.OPAQUE), j = U.commands[ue.OPAQUE], Z = U.indices[ue.OPAQUE], M = 0; M < Z; ++M) Jt(j[M], e, n, t);
        G !== 0 && e.mode !== Q.SCENE2D && (o.near = U.near, a.updateFrustum(o));
        var ne;
        if (!h && f.useInvertClassification && i.invertClassificationColor.alpha < 1 && (ne = e._invertClassification), a.updatePass(ue.TRANSLUCENT), j = U.commands[ue.TRANSLUCENT], j.length = U.indices[ue.TRANSLUCENT], _(e, Jt, t, j, ne), n.depthTexture && e.useDepthPicking && (f.useGlobeDepthFramebuffer || d)) {
            var he = d ? t.framebuffer.depthStencilTexture : q.framebuffer.depthStencilTexture,
                De = e._picking.getPickDepth(e, G);
            De.update(n, he), De.executeCopyDepth(n, t)
        }
        if (O && (t.framebuffer = q.framebuffer), !(h || !V)) {
            var fe = t.framebuffer;
            if (t.framebuffer = l.sceneFramebuffer.getIdFramebuffer(), o.near = G !== 0 ? U.near * e.opaqueFrustumNearOffset : U.near, o.far = U.far, a.updateFrustum(o), a.updatePass(ue.GLOBE), j = U.commands[ue.GLOBE], Z = U.indices[ue.GLOBE], x) S.executeGlobeCommands(U, Ui, I, e, t);
            else
                for (M = 0; M < Z; ++M) Ui(j[M], e, n, t);
            for (C && (F.framebuffer = t.framebuffer, F.execute(n, t), F.framebuffer = void 0), C && A && D.execute(n, t), a.updatePass(ue.CESIUM_3D_TILE), j = U.commands[ue.CESIUM_3D_TILE], Z = U.indices[ue.CESIUM_3D_TILE], M = 0; M < Z; ++M) Ui(j[M], e, n, t);
            for (a.updatePass(ue.OPAQUE), j = U.commands[ue.OPAQUE], Z = U.indices[ue.OPAQUE], M = 0; M < Z; ++M) Ui(j[M], e, n, t);
            for (a.updatePass(ue.TRANSLUCENT), j = U.commands[ue.TRANSLUCENT], Z = U.indices[ue.TRANSLUCENT], M = 0; M < Z; ++M) Ui(j[M], e, n, t);
            t.framebuffer = fe
        }
    }
}

function NC(e) {
    var t = e.context.uniformState;
    t.updatePass(ue.COMPUTE);
    var r = e._environmentState.sunComputeCommand;
    c(r) && r.execute(e._computeEngine);
    for (var n = e._computeCommandList, i = n.length, a = 0; a < i; ++a) n[a].execute(e._computeEngine)
}

function MC(e, t) {
    var r = e.context.uniformState;
    r.updatePass(ue.OVERLAY);
    for (var n = e.context, i = e._overlayCommandList, a = i.length, o = 0; o < a; ++o) i[o].execute(n, t)
}
Le.prototype.updateAndExecuteCommands = function(e, t) {
    DC(!0, this, e, t)
};

function DC(e, t, r, n) {
    var i = t._environmentState,
        a = t._view,
        o = i.renderTranslucentDepthForPick;
    !e && !o && (t.frameState.commandList.length = 0), o || bC(t), a.createPotentiallyVisibleSet(t), e && (c(n) && LC(t, r, n), o || NC(t)), PC(t, r)
}
var Th = new Bt;
Le.prototype.updateEnvironment = function() {
    var e = this._frameState,
        t = this._view,
        r = this._environmentState,
        n = e.passes.render;
    this.skyAtmosphere;
    var i = this.globe,
        a = this._globeTranslucencyState;
    if (!n || this._mode !== Q.SCENE2D && t.camera.frustum instanceof $e || !a.environmentVisible) r.skyAtmosphereCommand = void 0, r.skyBoxCommand = void 0, r.sunDrawCommand = void 0, r.sunComputeCommand = void 0, r.moonCommand = void 0;
    else {
        r.skyBoxCommand = c(this.skyBox) ? this.skyBox.update(e, this._hdr) : void 0;
        var o = c(this.sun) ? this.sun.update(e, t.passState, this._hdr) : void 0;
        r.sunDrawCommand = c(o) ? o.drawCommand : void 0, r.sunComputeCommand = c(o) ? o.computeCommand : void 0, r.moonCommand = c(this.moon) ? this.moon.update(e) : void 0
    }
    var s = r.clearGlobeDepth = c(i) && i.show && (!i.depthTestAgainstTerrain || this.mode === Q.SCENE2D),
        h = r.useDepthPlane = s && this.mode === Q.SCENE3D && a.useDepthPlane;
    h && this._depthPlane.update(e), r.renderTranslucentDepthForPick = !1;
    for (var f = e.mode === Q.SCENE3D && !a.sunVisibleThroughGlobe ? e.occluder : void 0, l = e.cullingVolume, d = Th.planes, m = 0; m < 5; ++m) d[m] = l.planes[m];
    l = Th, r.isSkyAtmosphereVisible = c(r.skyAtmosphereCommand) && r.isReadyForAtmosphere, r.isSunVisible = this.isVisible(r.sunDrawCommand, l, f), r.isMoonVisible = this.isVisible(r.moonCommand, l, f)
};

function bC(e) {
    var t = e._frameState;
    e._groundPrimitives.update(t), e._primitives.update(t), e._globe && e._globe.render(t)
}

function LC(e, t, r) {
    var n = e._context,
        i = e._environmentState,
        a = e._view,
        o = e._frameState.passes,
        s = o.pick;
    i.originalFramebuffer = t.framebuffer;
    var h = e._clearColorCommand;
    H.clone(r, h.color), h.execute(n, t);
    var f = i.useGlobeDepthFramebuffer = c(a.globeDepth);
    f && (a.globeDepth.update(n, t, a.viewport, e._hdr, i.clearGlobeDepth), a.globeDepth.clear(n, t, r));
    var l = a.oit,
        d = i.useOIT = !s && c(l) && l.isSupported();
    d && (l.update(n, t, a.globeDepth.framebuffer, e._hdr), l.clear(n, t, r), i.useOIT = l.isSupported()), f && (t.framebuffer = a.globeDepth.framebuffer), c(t.framebuffer) && h.execute(n, t);
    var m = i.useInvertClassification = !s && c(t.framebuffer) && e.invertClassification;
    if (m) {
        var _;
        if (e.frameState.invertClassificationColor.alpha === 1 && i.useGlobeDepthFramebuffer && (_ = a.globeDepth.framebuffer), c(_) || n.depthTexture) {
            if (e._invertClassification.previousFramebuffer = _, e._invertClassification.update(n), e._invertClassification.clear(n, t), e.frameState.invertClassificationColor.alpha < 1 && d) {
                var g = e._invertClassification.unclassifiedCommand,
                    T = g.derivedCommands;
                T.oit = l.createDerivedCommands(g, n, T.oit)
            }
        } else i.useInvertClassification = !1
    }
    e._globeTranslucencyState.translucent && a.globeTranslucencyFramebuffer.updateAndClear(e._hdr, a.viewport, n, t)
}
Le.prototype.resolveFramebuffers = function(e) {
    var t = this._context,
        r = this._frameState,
        n = this._environmentState,
        i = this._view,
        a = i.globeDepth,
        o = n.useOIT,
        s = n.useGlobeDepthFramebuffer,
        h = n.usePostProcess,
        f = n.originalFramebuffer,
        l = i.sceneFramebuffer.getFramebuffer();
    n.separatePrimitiveFramebuffer && a.executeMergeColor(t, e), o && (e.framebuffer = h ? l : f, i.oit.execute(t, e)), !o && !h && s && (e.framebuffer = f, a.executeCopyColor(t, e));
    var d = r.useLogDepth;
    if (this.debugShowGlobeDepth && s) {
        var m = Wl(this, this.debugShowDepthFrustum - 1);
        m.executeDebugGlobeDepth(t, e, d)
    }
    if (this.debugShowPickDepth && s) {
        var _ = this._picking.getPickDepth(this, this.debugShowDepthFrustum - 1);
        _.executeDebugPickDepth(t, e, d)
    }
};

function FC(e) {
    for (var t = e._frameState.afterRender, r = 0, n = t.length; r < n; ++r) t[r](), e.requestRender();
    t.length = 0
}

function BC(e) {
    var t = e._globe,
        r = e.camera,
        n = r.positionCartographic;
    if (c(t) && t.show && c(n)) return t.getHeight(n)
}

function UC(e) {
    var t = e.camera,
        r = e._mode,
        n = e.globe,
        i = e._screenSpaceCameraController,
        a = t.positionCartographic;
    if (!c(a)) return !1;
    if (!i.onMap() && a.height < 0) return !0;
    if (!c(n) || !n.show || r === Q.SCENE2D || r === Q.MORPHING) return !1;
    var o = e._globeHeight;
    return c(o) && a.height < o
}
Le.prototype.initializeFrame = function() {
    this._shaderFrameCount++ === 120 && (this._shaderFrameCount = 0, this._context.shaderCache.destroyReleasedShaderPrograms(), this._context.textureCache.destroyReleasedTextures()), this._tweens.update(), this._globeHeight = BC(this), this._cameraUnderground = UC(this), this._globeTranslucencyState.update(this), this._screenSpaceCameraController.update(), c(this._deviceOrientationCameraController) && this._deviceOrientationCameraController.update(), this.camera.update(this._mode), this.camera._updateCameraChanged()
};

function zC(e, t) {
    if (e.debugShowFramesPerSecond) {
        if (!c(e._performanceDisplay)) {
            var r = document.createElement("div");
            r.className = "cesium-performanceDisplay-defaultContainer";
            var n = e._canvas.parentNode;
            n.appendChild(r);
            var i = new xo({
                container: r
            });
            e._performanceDisplay = i, e._performanceContainer = r
        }
        e._performanceDisplay.throttled = e.requestRenderMode, e._performanceDisplay.update(t)
    } else c(e._performanceDisplay) && (e._performanceDisplay = e._performanceDisplay && e._performanceDisplay.destroy(), e._performanceContainer.parentNode.removeChild(e._performanceContainer))
}

function VC(e) {
    var t = e._frameState,
        r = e.primitives;
    r.prePassesUpdate(t), c(e.globe) && e.globe.update(t)
}

function GC(e) {
    var t = e._frameState,
        r = e.primitives;
    r.postPassesUpdate(t), ke.update()
}
var HC = new H;

function WC(e) {
    var t = e._frameState,
        r = e.context,
        n = r.uniformState,
        i = e._defaultView;
    e._view = i, e.updateFrameState(), t.passes.render = !0;
    var a = v(e.backgroundColor, H.BLACK);
    e._hdr && (a = H.clone(a, HC), a.red = Math.pow(a.red, e.gamma), a.green = Math.pow(a.green, e.gamma), a.blue = Math.pow(a.blue, e.gamma)), t.backgroundColor = a, e.fog.update(t), n.update(t), e._computeCommandList.length = 0, e._overlayCommandList.length = 0;
    var o = i.viewport;
    o.x = 0, o.y = 0, o.width = r.drawingBufferWidth, o.height = r.drawingBufferHeight;
    var s = i.passState;
    s.framebuffer = void 0, s.blendingEnabled = void 0, s.scissorTest = void 0, s.viewport = Re.clone(o, s.viewport), c(e.globe) && e.globe.beginFrame(t), e.updateEnvironment(), e.updateAndExecuteCommands(s, a), e.resolveFramebuffers(s), s.framebuffer = void 0, MC(e, s), c(e.globe) && (e.globe.endFrame(t), e.globe.tilesLoaded || (e._renderRequested = !0)), r.endFrame()
}

function Ss(e, t) {
    try {
        t(e)
    } catch (r) {
        if (e._renderError.raiseEvent(e, r), e.rethrowRenderErrors) throw r
    }
}
Le.prototype.render = function(e) {
    this._preUpdate.raiseEvent(this, e);
    var t = this._frameState;
    t.newFrame = !1, c(e) || (e = Date.now());
    var r = this._view.checkForCameraUpdates(this),
        n = !this.requestRenderMode || this._renderRequested || r || this._logDepthBufferDirty || this._hdrDirty || this.mode === Q.MORPHING;
    if (!n && c(this.maximumRenderTimeChange) && c(this._lastRenderTime)) {
        var i = this._lastRenderTime - e;
        n = n || i > this.maximumRenderTimeChange
    }
    if (n) {
        this._lastRenderTime = e, this._renderRequested = !1, this._logDepthBufferDirty = !1, this._hdrDirty = !1;
        var a = p.incrementWrap(t.frameNumber, 15e6, 1);
        Hl(this, a, e), t.newFrame = !0
    }
    Ss(this, VC), this._postUpdate.raiseEvent(this, e), n && (this._preRender.raiseEvent(this, e), t.creditDisplay.beginFrame(), Ss(this, WC)), zC(this, n), Ss(this, GC), FC(this), n && (this._postRender.raiseEvent(this, e), t.creditDisplay.endFrame())
};
Le.prototype.forceRender = function(e) {
    this._renderRequested = !0, this.render(e)
};
Le.prototype.requestRender = function() {
    this._renderRequested = !0
};
Le.prototype.clampLineWidth = E("Scene#clampLineWidth");
Le.prototype.pick = E("Scene#pick");
Le.prototype.pickPositionWorldCoordinates = E("Scene#pickPositionWorldCoordinates");
Le.prototype.pickPosition = E("Scene#pickPosition");
Le.prototype.drillPick = E("Scene#drillPick");
Le.prototype.pickFromRay = E("Scene#pickFromRay");
Le.prototype.drillPickFromRay = E("Scene#drillPickFromRay");
Le.prototype.pickFromRayMostDetailed = E("Scene#pickFromRayMostDetailed");
Le.prototype.drillPickFromRayMostDetailed = E("Scene#drillPickFromRayMostDetailed");
Le.prototype.sampleHeight = E("Scene#sampleHeight");
Le.prototype.clampToHeight = E("Scene#clampToHeight");
Le.prototype.sampleHeightMostDetailed = E("Scene#sampleHeightMostDetailed");
Le.prototype.clampToHeightMostDetailed = E("Scene#clampToHeightMostDetailed");
Le.prototype.cartesianToCanvasCoordinates = E("cartesianToCanvasCoordinates");
Le.prototype.isDestroyed = function() {
    return !1
};
Le.prototype.destroy = function() {
    this._tweens.removeAll(), this._computeEngine = this._computeEngine && this._computeEngine.destroy(), this._screenSpaceCameraController = this._screenSpaceCameraController && this._screenSpaceCameraController.destroy(), this._deviceOrientationCameraController = this._deviceOrientationCameraController && !this._deviceOrientationCameraController.isDestroyed() && this._deviceOrientationCameraController.destroy(), this._primitives = this._primitives && this._primitives.destroy(), this._groundPrimitives = this._groundPrimitives && this._groundPrimitives.destroy(), this._globe = this._globe && this._globe.destroy(), this.skyBox = this.skyBox && this.skyBox.destroy(), this.skyAtmosphere = this.skyAtmosphere && this.skyAtmosphere.destroy(), this._debugSphere = this._debugSphere && this._debugSphere.destroy(), this.sun = this.sun && this.sun.destroy(), this._sunPostProcess = this._sunPostProcess && this._sunPostProcess.destroy(), this._depthPlane = this._depthPlane && this._depthPlane.destroy(), this._debugFrustumPlanes = this._debugFrustumPlanes && this._debugFrustumPlanes.destroy(), this._brdfLutGenerator = this._brdfLutGenerator && this._brdfLutGenerator.destroy(), this._picking = this._picking && this._picking.destroy(), this._defaultView = this._defaultView && this._defaultView.destroy(), this._view = void 0, this._removeCreditContainer && this._canvas.parentNode.removeChild(this._creditContainer), this._context = this._context && this._context.destroy(), this._frameState.creditDisplay = this._frameState.creditDisplay && this._frameState.creditDisplay.destroy(), c(this._performanceDisplay) && (this._performanceDisplay = this._performanceDisplay && this._performanceDisplay.destroy(), this._performanceContainer.parentNode.removeChild(this._performanceContainer)), this._removeRequestListenerCallback(), this._removeTaskProcessorListenerCallback();
    for (var e = 0; e < this._removeGlobeCallbacks.length; ++e) this._removeGlobeCallbacks[e]();
    return this._removeGlobeCallbacks.length = 0, Je(this)
};
export {
    ae as B, u as C, Sr as D, xr as E, an as F, Xr as G, Ct as H, si as I, rn as K, y as M, ue as P, Xe as R, Vt as S, Ze as T, Qi as U, Et as V, w as W, se as a, H as b, xf as c, Be as d, nn as e, Ie as f, nt as g, re as h, Ir as i, B as j, et as k, R as l, Pr as m, Je as n, p as o, v as p, Le as q, Or as r, Pe as s, qC as w
};
