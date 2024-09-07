import {
    E as ge,
    B as Se,
    a as z,
    C as r,
    b as G,
    R as we,
    W as X,
    c as De,
    d as W,
    e as y,
    V as be,
    D as xe,
    P as ye,
    T as Ae,
    S as Ee,
    f as te,
    g as ee,
    I as fe,
    h as A,
    U as Me,
    i as pe,
    j as U,
    k as C,
    K as V,
    l as f,
    m as ve,
    M as I,
    n as ke,
    o as D,
    w as J,
    H as ze,
    p as ie,
    q as He,
    G as Le,
    r as Ze,
    F as oe,
    s as We
} from "./cesium-TYJJxKAA.js";
import {
    l as q,
    c as Fe,
    e as F,
    d as Te,
    S as Ne,
    a as Oe,
    F as j,
    b as Be
} from "./index-8L_VtSWh.js";
import {
    b as g,
    K as Ge,
    L as Ce,
    d as N,
    x as K,
    i as Ue,
    m as qe,
    u as Ve,
    c as se,
    y as je
} from "./web-storage-T1aQfpI3.js";
import "./modules-0AeLnh9i.js";
const Ke = 180 / Math.PI,
    ne = u => u * Ke;
var $e = "uniform sampler2D u_texture;varying vec2 v_textureCoordinates;varying vec4 v_color;void main(){vec4 color=czm_gammaCorrect(texture2D(u_texture,v_textureCoordinates)*v_color);if(color.a<0.005){discard;}gl_FragColor=color;czm_writeLogDepth();}",
    Ye = "#ifdef INSTANCED\nattribute vec2 direction;\n#else\nattribute float compressedDirection;\n#endif\nattribute vec4 positionHighAndScale;attribute vec4 positionLowAndShowRatio;attribute float index;varying vec2 v_textureCoordinates;varying vec4 v_pickColor;varying vec4 v_color;uniform float u_revealRatio;uniform vec4 u_color;uniform vec4 u_highlightColor;uniform float u_highlightIndex;uniform float u_activeIndex;vec4 scaleByDistance=vec4(5000,0.5,5000000,0.18);vec2 imageSize=vec2(100);const float SHIFT_LEFT1=2.0;const float SHIFT_RIGHT1=1.0/2.0;vec4 addScreenSpaceOffset(vec4 positionEC,float scale,vec2 direction){vec2 halfSize=imageSize*scale*0.5;halfSize*=(direction*2.0)-1.0;positionEC.xy+=halfSize*czm_metersPerPixel(positionEC);return positionEC;}void main(){vec3 positionHigh=positionHighAndScale.xyz;vec3 positionLow=positionLowAndShowRatio.xyz;float showRatio=positionLowAndShowRatio.w;float scale=positionHighAndScale.w;vec4 p=czm_translateRelativeToEye(positionHigh,positionLow);vec4 positionEC=czm_modelViewRelativeToEye*p;float lengthSq=dot(positionEC.xyz,positionEC.xyz);float distanceScale=czm_nearFarScalar(scaleByDistance,lengthSq);float offsetShow=smoothstep(u_revealRatio+20.0,u_revealRatio,showRatio);scale*=distanceScale;scale*=offsetShow;\n#ifndef INSTANCED\nvec2 direction;direction.x=floor(compressedDirection*SHIFT_RIGHT1);direction.y=compressedDirection-direction.x*SHIFT_LEFT1;\n#endif\npositionEC=addScreenSpaceOffset(positionEC,scale,direction);v_textureCoordinates=direction;if(u_activeIndex==index||u_highlightIndex==index){v_color=u_highlightColor;vec4 zOffset=normalize(positionEC)*-1000.0;positionEC.z+=zOffset.z;}else{v_color=u_color;}gl_Position=czm_projection*positionEC;}";
const $ = new ge,
    Qe = new r,
    Xe = new A,
    ae = {
        direction: 0,
        positionHighAndScale: 1,
        positionLowAndShowRatio: 2,
        index: 3
    },
    Y = {
        positionHighAndScale: 0,
        positionLowAndShowRatio: 1,
        index: 2,
        compressedDirection: 3
    };
let w;
const Je = new Se(r.ZERO, z.WGS84.maximumRadius);
class et {
    constructor({
        scene: e,
        onAdd: t
    }) {
        this.revealRatio = 0, this.image = "https://".concat(window.location.hostname, "/public/marker.png"), this.color = G.fromBytes(0, 255, 130, 255), this.highlightColor = new G(1, 1, 1, 1), this._needsUpdate = !1, this._count = 0, this._colorCommands = [], this._instanced = !0, this._renderState = we.fromCache({
            depthTest: {
                enabled: !0,
                func: X.LEQUAL
            },
            depthMask: !0,
            blending: De.ALPHA_BLEND
        }), this._uniforms = {
            u_texture: () => this._texture,
            u_highlightColor: () => this.highlightColor,
            u_revealRatio: () => Math.floor(this.revealRatio * 1e3),
            u_color: () => this.color,
            u_highlightIndex: () => this._highlightIndex,
            u_activeIndex: () => this.activeIndex
        }, this._scene = e, this._writeMarker = t
    }
    get highlightIndex() {
        return this._highlightIndex
    }
    set highlightIndex(e) {
        var t;
        this._highlightIndex !== e && (this._highlightIndex = e, (t = this._scene) == null || t.requestRender())
    }
    get activeIndex() {
        return this._activeIndex
    }
    set activeIndex(e) {
        var t;
        this._activeIndex !== e && (this._activeIndex = e, (t = this._scene) == null || t.requestRender())
    }
    requestUpdate(e) {
        this._needsUpdate = !0, this._count = e, this._scene.requestRender()
    }
    getCurrentMarkerScale() {
        const e = this._scene._view.camera,
            t = e.position ? this._cartesianToCartographic(e.position, Xe).height : 0,
            i = 5,
            s = .8,
            n = 5e6,
            a = .25,
            o = i * i,
            c = n * n;
        let l = Math.pow((t * t - o) / (c - o), .2);
        return l = Math.max(0, Math.min(l, 1)), s * (1 - l) + a * l
    }
    _writeBillboard(e, [t, i], s, n) {
        ge.fromCartesian(r.fromDegrees(t, i, void 0, void 0, Qe), $);
        const a = $.high,
            o = $.low,
            c = Math.floor(n * 1e3),
            l = this._vaf.writers[w.positionHighAndScale],
            m = this._vaf.writers[w.positionLowAndShowRatio],
            h = this._vaf.writers[w.index];
        if (this._instanced) l(e, a.x, a.y, a.z, s), m(e, o.x, o.y, o.z, c), h(e, e);
        else {
            const d = e * 4;
            l(d + 0, a.x, a.y, a.z, s), l(d + 1, a.x, a.y, a.z, s), l(d + 2, a.x, a.y, a.z, s), l(d + 3, a.x, a.y, a.z, s), m(d + 0, o.x, o.y, o.z, c), m(d + 1, o.x, o.y, o.z, c), m(d + 2, o.x, o.y, o.z, c), m(d + 3, o.x, o.y, o.z, c), h(d + 0, e), h(d + 1, e), h(d + 2, e), h(d + 3, e);
            const _ = this._vaf.writers[Y.compressedDirection];
            _(d + 0, 0), _(d + 1, 2), _(d + 2, 3), _(d + 3, 1)
        }
    }
    _createVertexArray(e) {
        this._vaf = this._vaf && this._vaf.destroy();
        const t = [{
            index: w.positionHighAndScale,
            componentsPerAttribute: 4,
            componentDatatype: W.FLOAT,
            usage: y.STATIC_DRAW
        }, {
            index: w.positionLowAndShowRatio,
            componentsPerAttribute: 4,
            componentDatatype: W.FLOAT,
            usage: y.STATIC_DRAW
        }, {
            index: w.index,
            componentsPerAttribute: 1,
            componentDatatype: W.FLOAT,
            usage: y.STATIC_DRAW
        }, this._instanced ? {
            index: ae.direction,
            componentsPerAttribute: 2,
            componentDatatype: W.FLOAT,
            vertexBuffer: ot(e)
        } : {
            index: Y.compressedDirection,
            componentsPerAttribute: 1,
            componentDatatype: W.FLOAT,
            usage: y.STATIC_DRAW
        }];
        this._vaf = new be(e, t, this._instanced ? this._count : 4 * this._count, this._instanced);
        const i = this._writeBillboard.bind(this);
        for (let s = 0; s < this._count; s++) this._writeMarker(s, i);
        this._vaf.commit((this._instanced ? it : tt)(e))
    }
    _render(e) {
        var s, n;
        const t = this._vaf.va,
            i = t.length;
        this._colorCommands.length = i;
        for (let a = 0; a < i; ++a) {
            const o = (n = (s = this._colorCommands)[a]) != null ? n : s[a] = new xe;
            o._owner = this, o._pass = ye.TRANSLUCENT, o._count = t[a].indicesCount, o._shaderProgram = this._shaderProgram, o._uniformMap = this._uniforms, o._vertexArray = t[a].va, o._renderState = this._renderState, o._boundingVolume = Je, this._instanced && (o._count = 6, o._instanceCount = this._count), e.commandList.push(o)
        }
    }
    _cartesianToCartographic(e, t) {
        return this._scene._globe.ellipsoid.cartesianToCartographic(e, t)
    }
    update(e) {
        var t;
        if (this._instanced = e.context.instancedArrays, w = this._instanced ? ae : Y, !this._texture) {
            const i = new Image;
            i.crossOrigin = "anonymous", i.src = this.image, i.onload = () => {
                this._texture = new Ae({
                    source: i,
                    width: i.naturalWidth,
                    height: i.naturalHeight,
                    context: e.context
                })
            }, i.onerror = s => {
                console.error("Error loading image for billboard: " + s)
            }
        }
        this._texture && (this._needsUpdate && (this._createVertexArray(e.context), this._needsUpdate = !1), !(!this._vaf || !this._vaf.va) && ((t = this._shaderProgram) != null || (this._shaderProgram = Ee.replaceCache({
            context: e.context,
            shaderProgram: this._shaderProgram,
            vertexShaderSource: new te({
                defines: this._instanced ? ["INSTANCED"] : [],
                sources: [Ye]
            }),
            fragmentShaderSource: new te({
                defines: [],
                sources: [$e]
            }),
            attributeLocations: w
        })), !(!e.passes.render && !e.passes.pick) && this._render(e)))
    }
}

function tt(u) {
    let t = u.cache.billboardCollection_indexBufferBatched;
    if (g(t)) return t;
    const i = 16384 * 6 - 6,
        s = new Uint16Array(i);
    for (let n = 0, a = 0; n < i; n += 6, a += 4) s[n] = a, s[n + 1] = a + 1, s[n + 2] = a + 2, s[n + 3] = a + 0, s[n + 4] = a + 2, s[n + 5] = a + 3;
    return t = ee.createIndexBuffer({
        context: u,
        typedArray: s,
        usage: y.STATIC_DRAW,
        indexDatatype: fe.UNSIGNED_SHORT
    }), t.vertexArrayDestroyable = !1, u.cache.billboardCollection_indexBufferBatched = t, t
}

function it(u) {
    var e, t;
    return (t = (e = u.cache).billboardCollection_indexBufferInstanced) != null ? t : e.billboardCollection_indexBufferInstanced = (() => {
        const i = ee.createIndexBuffer({
            context: u,
            typedArray: new Uint16Array([0, 1, 2, 0, 2, 3]),
            usage: y.STATIC_DRAW,
            indexDatatype: fe.UNSIGNED_SHORT
        });
        return i.vertexArrayDestroyable = !1, i
    })()
}

function ot(u) {
    var e, t;
    return (t = (e = u.cache).billboardCollection_vertexBufferInstanced) != null ? t : e.billboardCollection_vertexBufferInstanced = (() => {
        const i = ee.createVertexBuffer({
            context: u,
            typedArray: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            usage: y.STATIC_DRAW
        });
        return i.vertexArrayDestroyable = !1, i
    })()
}
class st extends Me {
    constructor(e) {
        super(e), this.firstTileLoaded = !1, this._onFirstTileLoaded = e.onFirstTileLoaded
    }
    requestImage(e, t, i) {
        const s = super.requestImage(e, t, i);
        return this.firstTileLoaded || s == null || s.then(n => (this.firstTileLoaded || (this.firstTileLoaded = !0, this._onFirstTileLoaded()), n)), s
    }
}
const nt = new r,
    at = new r,
    re = [],
    ce = new pe,
    rt = new r,
    ct = new f,
    le = new r,
    lt = new A,
    ht = new r,
    dt = new z,
    he = {
        orientation: new ze
    },
    mt = new pe,
    ut = new r,
    _t = new r,
    gt = U.clone(U.UNIT_W),
    ft = U.clone(U.UNIT_W),
    B = new r,
    Q = new r,
    pt = new r,
    vt = new r,
    Tt = new f,
    Ct = new f,
    Pt = new r,
    It = new A,
    Rt = new I,
    St = new A,
    wt = new f,
    Dt = .4,
    bt = ["_lastInertiaSpinMovement", "_lastInertiaZoomMovement", "_lastInertiaTranslateMovement", "_lastInertiaTiltMovement"];

function xt(u, e) {
    if (u < 0) return 0;
    const t = (1 - e) * 25;
    return Math.exp(-t * u)
}

function yt(u) {
    return f.equalsEpsilon(u.startPosition, u.endPosition, D.EPSILON14)
}
class At {
    constructor(e, t) {
        this._adjustedHeightForTerrain = !1, this.enableInputs = !0, this.enableTranslate = !0, this.enableZoom = !0, this.enableRotate = !0, this.enableTilt = !0, this.enableLook = !0, this.inertiaSpin = .9, this.inertiaTranslate = .9, this.inertiaZoom = .8, this.maximumMovementRatio = .1, this.bounceAnimationTime = 3, this.minimumZoomDistance = 1, this.maximumZoomDistance = Number.POSITIVE_INFINITY, this.translateEventTypes = C.LEFT_DRAG, this.zoomEventTypes = [C.RIGHT_DRAG, C.WHEEL, C.PINCH], this.rotateEventTypes = C.LEFT_DRAG, this.tiltEventTypes = [C.MIDDLE_DRAG, C.PINCH, {
            eventType: C.LEFT_DRAG,
            modifier: V.CTRL
        }, {
            eventType: C.RIGHT_DRAG,
            modifier: V.CTRL
        }], this.lookEventTypes = {
            eventType: C.LEFT_DRAG,
            modifier: V.SHIFT
        }, this.minimumPickingTerrainHeight = 15e4, this._minimumPickingTerrainHeight = this.minimumPickingTerrainHeight, this.minimumCollisionTerrainHeight = 15e3, this._minimumCollisionTerrainHeight = this.minimumCollisionTerrainHeight, this.minimumTrackBallHeight = 75e5, this._minimumTrackBallHeight = this.minimumTrackBallHeight, this.enableCollisionDetection = !0, this._lastInertiaSpinMovement = void 0, this._lastInertiaZoomMovement = void 0, this._lastInertiaTranslateMovement = void 0, this._lastInertiaTiltMovement = void 0, this._inertiaDisablers = {
            _lastInertiaZoomMovement: ["_lastInertiaSpinMovement", "_lastInertiaTranslateMovement", "_lastInertiaTiltMovement"],
            _lastInertiaTiltMovement: ["_lastInertiaSpinMovement", "_lastInertiaTranslateMovement"]
        }, this._rotateMousePosition = new f(-1, -1), this._rotateStartPosition = new r, this._zoomMouseStart = new f(-1, -1), this._zoomWorldPosition = new r, this._useZoomWorldPosition = !1, this._rotating = !1, this._zoomingOnVector = !1, this._zoomingUnderground = !1, this._rotatingZoom = !1, this._cameraUnderground = !1, this._zoomFactor = 5, this._maximumRotateRate = 1.77, this._minimumRotateRate = 1 / 5e3, this._minimumZoomRate = 20, this._maximumZoomRate = 5906376272e3, this.maxZoomReached = !1, this.minZoomReached = !1, this._scene = e, this._aggregator = new ve(e.canvas), this.enableTilt = t.enableTilt, this.getZoomCartesian3 = t.getZoomCartesian3, this.getZoomPosition = t.getZoomPosition, this.maximumZoomDistance = t.maximumZoomDistance, this.maxZoomReached = t.maxZoomReached, this.minimumZoomDistance = t.minimumZoomDistance, this.minZoomReached = t.minZoomReached, this.onMaxZoomReached = t.onMaxZoomReached, this.onMinZoomReached = t.onMinZoomReached, this.onZoomAvailable = t.onZoomAvailable
    }
    onMap() {
        return !0
    }
    update() {
        const e = this._scene,
            t = e.camera,
            i = e.globe;
        I.equals(t.transform, I.IDENTITY) ? (this._globe = i, this._ellipsoid = g(this._globe) ? this._globe._ellipsoid : e.mapProjection.ellipsoid) : (this._globe = void 0, this._ellipsoid = z.UNIT_SPHERE), this._cameraUnderground = e.cameraUnderground && g(this._globe), this._minimumCollisionTerrainHeight = this.minimumCollisionTerrainHeight * e.terrainExaggeration, this._minimumPickingTerrainHeight = this.minimumPickingTerrainHeight * e.terrainExaggeration, this._minimumTrackBallHeight = this.minimumTrackBallHeight * e.terrainExaggeration;
        const s = this._ellipsoid._maximumRadius;
        this._rotateFactor = 1 / s, this._rotateRateRangeAdjustment = s, this._adjustedHeightForTerrain = !1;
        const n = r.clone(t.positionWC, nt),
            a = r.clone(t.directionWC, at);
        this._update3D(), this.enableCollisionDetection && !this._adjustedHeightForTerrain && (!r.equals(n, t.positionWC) || !r.equals(a, t.directionWC)) && this._adjustHeightForTerrain(), this._aggregator.reset()
    }
    isDestroyed() {
        return !1
    }
    destroy() {
        return this._aggregator.destroy(), ke(this)
    }
    disableInertia() {
        for (const e of bt) {
            const t = this[e];
            t && (t.inertiaEnabled = !1)
        }
    }
    _maintainInertia(e, t, i, s, n, a) {
        var _;
        const o = (_ = this[a]) != null ? _ : this[a] = {
                startPosition: new f,
                endPosition: new f,
                motion: new f,
                inertiaEnabled: !0
            },
            c = e.getButtonPressTime(t, i),
            l = e.getButtonReleaseTime(t, i),
            m = c && l && (l.getTime() - c.getTime()) / 1e3,
            d = l && (new Date().getTime() - l.getTime()) / 1e3;
        if (c && l && m < Dt) {
            const v = xt(d, s),
                T = e.getLastMovement(t, i);
            if (!g(T) || yt(T) || !o.inertiaEnabled || (o.motion.x = (T.endPosition.x - T.startPosition.x) * .5, o.motion.y = (T.endPosition.y - T.startPosition.y) * .5, o.startPosition = f.clone(T.startPosition, o.startPosition), o.endPosition = f.multiplyByScalar(o.motion, v, o.endPosition), o.endPosition = f.add(o.startPosition, o.endPosition, o.endPosition), isNaN(o.endPosition.x) || isNaN(o.endPosition.y) || f.distance(o.startPosition, o.endPosition) < .5)) return;
            if (!e.isButtonDown(t, i)) {
                const p = e.getStartMousePosition(t, i);
                this[n](p, o)
            }
        }
    }
    _activateInertia(e) {
        if (g(e)) {
            let t = this[e];
            g(t) && (t.inertiaEnabled = !0);
            const i = this._inertiaDisablers[e];
            if (g(i)) {
                const s = i.length;
                for (let n = 0; n < s; ++n) t = this[i[n]], g(t) && (t.inertiaEnabled = !1, t.inertiaEnabled = !1)
            }
        }
    }
    _reactToInput(e, t, i, s, n) {
        if (!g(t)) return;
        const a = this._aggregator;
        Array.isArray(t) || (re[0] = t, t = re);
        const o = t.length;
        for (let c = 0; c < o; ++c) {
            const l = t[c],
                m = g(l.eventType) ? l.eventType : l,
                h = l.modifier,
                d = a.isMoving(m, h) && a.getMovement(m, h),
                _ = a.getStartMousePosition(m, h);
            this.enableInputs && e && (d ? (this[i](_, d), this._activateInertia(n)) : g(s) && s < 1 && this._maintainInertia(a, m, h, s, i, n))
        }
    }
    _handleZoom(e, t, i, s, n, a) {
        var O, k, H;
        let o = 1;
        g(n) && (o = D.clamp(Math.abs(n), .25, 1));
        const c = t.endPosition.y - t.startPosition.y,
            l = c < 0 ? 0 : this.minimumZoomDistance * o,
            m = this.maximumZoomDistance,
            h = s - l;
        let d = i * h;
        d = D.clamp(d, this._minimumZoomRate, this._maximumZoomRate);
        let _ = c / this._scene._canvas.clientHeight;
        _ = Math.min(_, this.maximumMovementRatio);
        let v = d * _;
        if (this.enableCollisionDetection || this.minimumZoomDistance === 0 || !g(this._globe)) {
            const S = this.maxZoomReached || this.minZoomReached;
            if (v > 0 && Math.abs(s - l) < 1) {
                this.maxZoomReached || (this.maxZoomReached = !0, (O = this.onMaxZoomReached) == null || O.call(this));
                return
            }
            if (v < 0 && Math.abs(s - m) < 1) {
                this.minZoomReached || (this.minZoomReached = !0, (k = this.onMinZoomReached) == null || k.call(this));
                return
            }
            S && ((H = this.onZoomAvailable) == null || H.call(this), this.maxZoomReached = this.minZoomReached = !1), s - v < l ? v = s - l - 1 : s - v > m && (v = s - m)
        }
        const T = this._scene,
            p = T.camera,
            E = he.orientation;
        E.heading = p.heading, E.pitch = p.pitch, E.roll = p.roll;
        const R = f.equals(e, this._zoomMouseStart);
        let b = this._zoomingOnVector,
            P = this._rotatingZoom,
            x;
        if (R || (this._zoomMouseStart = f.clone(e, this._zoomMouseStart), g(this._globe) && (x = a || this._pickGlobe(e, rt)), g(x) ? (this._useZoomWorldPosition = !0, this._zoomWorldPosition = r.clone(x, this._zoomWorldPosition)) : this._useZoomWorldPosition = !1, b = this._zoomingOnVector = !1, P = this._rotatingZoom = !1, this._zoomingUnderground = this._cameraUnderground), !this._useZoomWorldPosition) {
            p.zoomIn(v);
            return
        }
        let M = !1;
        if (p.positionCartographic.height < 2e6 && (P = !0), (!R || P) && (M = !0, this._rotatingZoom = !1), !R && M || b) {
            let S;
            const L = J(T, this._zoomWorldPosition, ct);
            f.equals(e, this._zoomMouseStart) && g(L) ? S = p.getPickRay(L, ce) : S = p.getPickRay(e, ce), p.move(S.direction, v), this._zoomingOnVector = !0
        } else p.zoomIn(v);
        this._cameraUnderground || p.setView(he)
    }
    _pickGlobe(e, t) {
        const i = this._scene,
            s = this._globe,
            n = i.camera;
        if (!g(s)) return;
        const a = !this._cameraUnderground;
        let o;
        i.pickPositionSupported && (o = i.pickPositionWorldCoordinates(e, ut));
        const c = n.getPickRay(e, mt),
            l = s.pickWorldCoordinates(c, i, a, _t),
            m = g(o) ? r.distance(o, n.positionWC) : Number.POSITIVE_INFINITY,
            h = g(l) ? r.distance(l, n.positionWC) : Number.POSITIVE_INFINITY;
        return m < h ? r.clone(o, t) : r.clone(l, t)
    }
    spin3D(e, t) {
        const s = this._scene.camera;
        let n = this._ellipsoid;
        if (!I.equals(s.transform, I.IDENTITY)) {
            this._rotate3D(e, t);
            return
        }
        let a, o;
        if (f.equals(e, this._rotateMousePosition)) {
            if (this._rotating) this._rotate3D(e, t);
            else {
                if (r.magnitude(s.position) < r.magnitude(this._rotateStartPosition)) return;
                a = r.magnitude(this._rotateStartPosition), o = ht, o.x = o.y = o.z = a, n = z.fromCartesian3(o, dt), this._pan3D(e, t, n)
            }
            return
        }
        this._rotating = !1;
        const c = n.cartesianToCartographic(s.positionWC, lt).height;
        g(s.pickEllipsoid(t.startPosition, this._ellipsoid, le)) ? (this._pan3D(e, t, this._ellipsoid), r.clone(le, this._rotateStartPosition)) : c > this._minimumTrackBallHeight && (this._rotating = !0, this._rotate3D(e, t)), f.clone(e, this._rotateMousePosition)
    }
    _rotate3D(e, t, i, s, n) {
        s = ie(s, !1), n = ie(n, !1);
        const a = this._scene,
            o = a.camera,
            c = a.canvas,
            l = o.constrainedAxis;
        g(i) && (o.constrainedAxis = i);
        const m = r.magnitude(o.position);
        let h = this._rotateFactor * (m - this._rotateRateRangeAdjustment);
        h > this._maximumRotateRate && (h = this._maximumRotateRate), h < this._minimumRotateRate && (h = this._minimumRotateRate);
        let d = (t.startPosition.x - t.endPosition.x) / c.clientWidth,
            _ = (t.startPosition.y - t.endPosition.y) / c.clientHeight;
        d = Math.min(d, this.maximumMovementRatio), _ = Math.min(_, this.maximumMovementRatio);
        const v = h * d * Math.PI * 2,
            T = h * _ * Math.PI;
        s || o.rotateRight(v), n || o.rotateUp(T), o.constrainedAxis = l
    }
    _pan3D(e, t, i) {
        const n = this._scene.camera,
            a = f.clone(t.startPosition, Tt),
            o = f.clone(t.endPosition, Ct),
            c = n.pickEllipsoid(a, i, gt),
            l = n.pickEllipsoid(o, i, ft);
        if (!g(c) || !g(l)) {
            this._rotating = !0, this._rotate3D(e, t);
            return
        }
        if (n.worldToCameraCoordinates(c, c), n.worldToCameraCoordinates(l, l), g(n.constrainedAxis)) {
            const m = n.constrainedAxis,
                h = r.mostOrthogonalAxis(m, B);
            r.cross(h, m, h), r.normalize(h, h);
            const d = r.cross(m, h, Q),
                _ = r.magnitude(c),
                v = r.dot(m, c),
                T = Math.acos(v / _),
                p = r.multiplyByScalar(m, v, pt);
            r.subtract(c, p, p), r.normalize(p, p);
            const E = r.magnitude(l),
                R = r.dot(m, l),
                b = Math.acos(R / E),
                P = r.multiplyByScalar(m, R, vt);
            r.subtract(l, P, P), r.normalize(P, P);
            let x = Math.acos(r.dot(p, h));
            r.dot(p, d) < 0 && (x = D.TWO_PI - x);
            let M = Math.acos(r.dot(P, h));
            r.dot(P, d) < 0 && (M = D.TWO_PI - M);
            const O = x - M;
            let k;
            r.equalsEpsilon(m, n.position, D.EPSILON2) ? k = n.right : k = r.cross(m, n.position, B);
            const H = r.cross(m, k, B),
                S = r.dot(H, r.subtract(c, m, Q)),
                L = r.dot(H, r.subtract(l, m, Q));
            let Z;
            S > 0 && L > 0 ? Z = b - T : S > 0 && L <= 0 ? r.dot(n.position, m) > 0 ? Z = -T - b : Z = T + b : Z = T - b, n.rotateRight(O), n.rotateUp(Z)
        } else {
            r.normalize(c, c), r.normalize(l, l);
            const m = r.dot(c, l),
                h = r.cross(c, l, B);
            if (m < 1 && !r.equalsEpsilon(h, r.ZERO, D.EPSILON14)) {
                const d = Math.acos(m);
                n.rotate(h, d)
            }
        }
        n.setView({
            orientation: {
                pitch: Math.PI / -2,
                roll: n.roll,
                heading: n.heading
            }
        })
    }
    zoom3D(e, t) {
        const i = "distance" in t ? t.distance : t,
            s = this._ellipsoid,
            n = this._scene,
            a = n.camera,
            o = n.canvas;
        try {
            J(n, this.getZoomPosition(), e)
        } catch (d) {
            console.error(d, this.getZoomPosition(), e)
        }
        const c = wt;
        c.x = o.clientWidth / 2, c.y = o.clientHeight / 2;
        const l = s.cartesianToCartographic(a.position, It).height;
        let m = l;
        g(m) || (m = l);
        const h = r.normalize(a.position, Pt);
        this._handleZoom(e, i, this._zoomFactor, m, r.dot(h, a.direction), this.getZoomCartesian3 && this.getZoomCartesian3())
    }
    _update3D() {
        this._reactToInput(this.enableRotate, this.rotateEventTypes, "spin3D", this.inertiaSpin, "_lastInertiaSpinMovement"), this._reactToInput(this.enableZoom, this.zoomEventTypes, "zoom3D", this.inertiaZoom, "_lastInertiaZoomMovement")
    }
    _adjustHeightForTerrain() {
        this._adjustedHeightForTerrain = !0;
        const e = this._scene,
            t = e.globe,
            i = e.camera,
            s = t.ellipsoid;
        let n, a;
        I.equals(i.transform, I.IDENTITY) || (n = I.clone(i.transform, Rt), a = r.magnitude(i.position), i._setTransform(I.IDENTITY));
        const o = St;
        s.cartesianToCartographic(i.position, o);
        let c = !1;
        if (o.height < this._minimumCollisionTerrainHeight) {
            const l = this._scene.globeHeight;
            if (g(l)) {
                const m = l + this.minimumZoomDistance;
                o.height < m && (o.height = m, s.cartographicToCartesian(o, i.position), c = !0)
            }
        }
        g(n) && (i._setTransform(n), c && (r.normalize(i.position, i.position), r.negate(i.position, i.direction), r.multiplyByScalar(i.position, Math.max(a, this.minimumZoomDistance), i.position), r.normalize(i.direction, i.direction), r.cross(i.direction, i.up, i.right), r.cross(i.right, i.direction, i.up)))
    }
}
const Pe = new A,
    Et = new f,
    Mt = new r;

function de(u) {
    var e, t;
    return (e = u.camera) != null && e.position ? kt(u, (t = u.camera) == null ? void 0 : t.position, Pe).height : 0
}

function kt(u, e, t) {
    return u.globe.ellipsoid.cartesianToCartographic(e, t)
}

function me([u, e], t = new r) {
    return r.fromDegrees(u, e, void 0, void 0, t)
}
const zt = new r;

function Ie(u, [e, t], i = Et) {
    return J(u, r.fromDegrees(e, t, void 0, void 0, zt), i)
}

function Re(u, e, t = Mt) {
    return u.camera.pickEllipsoid(e, u.globe.ellipsoid, t)
}

function Ht(u, e) {
    const t = A.fromCartesian(u, z.WGS84, Pe);
    return t.height = 0, z.WGS84.cartographicToCartesian(t, e)
}
const Lt = new A,
    Zt = new f,
    Wt = 45 * 45;
class Ft {
    constructor(e) {
        this.reveal = "latitude", this.mediumPlaceTreshold = 5, this.largePlaceTreshold = 20, this.smallPlaceScale = .14, this.mediumPlaceScale = .27, this.largePlaceScale = .42, this.boostScale = 1.5, this.globalScale = .75, this._scene = e, this.billboardCollection = new et({
            scene: e,
            onAdd: (t, i) => {
                const s = this._places.ids[t],
                    n = this._places.byId[s],
                    a = this.reveal === "random" ? Math.random() : Math.max(0, 1 - (n.geo[0] + 180 + 90) % 360 / 360 + (Math.random() * .05 - .025));
                i(t, n.geo, this.getMarkerScale(n), a)
            }
        }), e.primitives.add(this.billboardCollection)
    }
    revealLoop(e) {
        return new Promise(t => {
            const i = Date.now(),
                s = q.add(() => {
                    this._scene.requestRender(), (this.billboardCollection.revealRatio = e(Date.now() - i)) === 1 && (s(), t())
                })
        })
    }
    update(e) {
        var t;
        !e.version || e.version === ((t = this._places) == null ? void 0 : t.version) || (this._places = e, this.billboardCollection.requestUpdate(e.ids.length))
    }
    get activePlace() {
        return this._activePlaceId ? this._places.byId[this._activePlaceId] : void 0
    }
    get activePlaceId() {
        return this._activePlaceId
    }
    set activePlaceId(e) {
        this._activePlaceId = e, this.billboardCollection.activeIndex = this._getPlaceIndex(e)
    }
    get highlightPlaceId() {
        return this._highlightPlaceId
    }
    set highlightPlaceId(e) {
        this._highlightPlaceId = e, this.billboardCollection.highlightIndex = this._getPlaceIndex(e)
    }
    hasMarkers() {
        return g(this._places)
    }
    getMarkerScale({
        size: e,
        boost: t
    }) {
        const i = e > this.largePlaceTreshold ? this.largePlaceScale : e > this.mediumPlaceTreshold ? this.mediumPlaceScale : this.smallPlaceScale;
        return (t && i <= .25 ? this.boostScale : 1) * i * this.globalScale
    }
    getClosestPlaceToScreenPosition(e) {
        const t = Re(this._scene, e);
        if (!t) return;
        const i = this._scene._globe.ellipsoid.cartesianToCartographic(t, Lt);
        i.longitude = ne(i.longitude), i.latitude = ne(i.latitude);
        const s = Fe.lookup(i, 30),
            n = this._getMaxMarkerScreenDistanceSquared();
        let a, o, c = 0,
            l = Number.MAX_VALUE;
        const m = this.billboardCollection.getCurrentMarkerScale();
        for (const h of s) {
            const d = this.getMarkerScale(h) * m * 50 * 1.5,
                _ = this._getScreenDistanceSquaredToGeo(h.geo, e) - d * d;
            _ > n || (_ <= 0 && d > c && (c = d, a = h.id), _ < l && (l = _, o = h.id))
        }
        return a != null ? a : o
    }
    activePlaceIsWithingSnappingDistance(e) {
        const {
            activePlace: t
        } = this;
        if (!t) return !1;
        const i = this._getScreenDistanceSquaredToGeo(t.geo, e);
        return i > 1 && i < this._getMaxMarkerScreenDistanceSquared()
    }
    _getPlaceIndex(e) {
        return e ? this._places.ids.indexOf(e) : -1
    }
    _getMaxMarkerScreenDistanceSquared() {
        return Wt * (F.lastValue("media").$narrow ? .49 : 1)
    }
    _getScreenDistanceSquaredToGeo(e, t) {
        return f.distanceSquared(Ie(this._scene, e, Zt), t)
    }
}

function Nt(u) {
    const e = Ge.get("pixel-ratio"),
        t = e ? Number(e) : K.tier === 2 ? Math.min(2, window.devicePixelRatio) : K.tier === 3 ? Math.min(3, window.devicePixelRatio) : 1,
        i = document.getElementById(u),
        s = document.createElement("div");
    s.className = "cesium-widget", i.appendChild(s);
    const n = m();
    let a = !1,
        o = !1;
    const c = new He({
        canvas: n,
        contextOptions: {
            webgl: {
                alpha: !1,
                preserveDrawingBuffer: !1
            }
        },
        scene3DOnly: !0,
        requestRenderMode: !Ce,
        maximumRenderTimeChange: 1 / 0
    });
    if (c.backgroundColor = G.fromCssColorString("#3b00ff"), c._view.camera.constrainedAxis = r.UNIT_Z, l(), c._globe = (() => {
            const h = new Le;
            return h.showGroundAtmosphere = !1, h._surface.tileProvider.baseColor = G.fromBytes(45, 0, 255, 255), h
        })(), !N) {
        const d = Ue || K.tier < 3 || t < 2,
            _ = new st({
                onFirstTileLoaded: () => {
                    Te.app.enableLoadState("firstTileLoaded")
                },
                url: "".concat(Ne, "/{z}/{x}/{y}{q}.jpg"),
                tileWidth: 512,
                tileHeight: 512,
                maximumLevel: 13,
                customTags: {
                    q(T, p, E, R) {
                        return d || R >= 12 ? "" : "-2x"
                    }
                }
            }),
            v = c._globe.imageryLayers.addImageryProvider(_);
        v.magnificationFilter = X.LINEAR, v.minificationFilter = X.NEAREST
    }
    return c._renderError.addEventListener(console.log), {
        screenSpaceEventHandler: new Ze(n),
        scene: c,
        container: i,
        forceResize() {
            o = !0
        },
        render() {
            o && (o = !1, l(), c.requestRender()), a && (c.initializeFrame(), c.render())
        }
    };

    function l() {
        let {
            clientWidth: h,
            clientHeight: d
        } = n;
        if (c.pixelRatio = t, h = n.width = h * t, d = n.height = d * t, a = h !== 0 && d !== 0, a) {
            const {
                frustum: _
            } = c._view.camera;
            _.aspectRatio ? _.aspectRatio = h / d : (_.top = _.right * (d / h), _.bottom = -_.top)
        }
    }

    function m() {
        const h = document.createElement("canvas");
        oe.supportsImageRenderingPixelated() && (h.style.imageRendering = oe.imageRenderingValue());
        const d = () => !1;
        return h.oncontextmenu = d, h.onselectstart = d, s.appendChild(h), h
    }
}
const ue = new r,
    Ot = new r,
    _e = 111e4,
    Bt = 45 * 45,
    Gt = (() => {
        let u, e, t;
        return i => {
            u !== i && (u = i, q.next(() => {
                e !== u && (t || (t = document.querySelector("#map").style), t.cursor = e = u)
            }))
        }
    })();
ve.prototype.simulateMouseWheel = function(u) {
    const e = C.WHEEL,
        t = this._update;
    t[e] = !0;
    const i = this.getMovement(e),
        s = 15 * D.toRadians(u);
    f.clone(f.ZERO, i.startPosition), i.endPosition.x = 0, i.endPosition.y = s, t[e] = !1
};
class Ut {
    constructor() {
        this._externalMovement = !1, this._flying = !1, this._mouseDown = !1, this._moved3D = !1, this._movementOriginatedFromUserGlobeInteraction = !1, this._pinching = !1, this._renderPaused = !1, this._screenCenter = new f, this._callbacks = {}, this._snapToActiveMarkerDebounced = Oe(() => {
            var i;
            const e = (i = this.markers.activePlace) == null ? void 0 : i.geo;
            if (this._pinching || this._moved3D || this._mouseDown || this._flying || this._externalMovement || !e) return;
            const t = this.markers.activePlace;
            t && this.markers.activePlaceIsWithingSnappingDistance(this._screenCenter) && this._flyTo(t.geo, j * 2)
        }, 500)
    }
    get _camera() {
        return this.scene.camera
    }
    initialize(e, t) {
        t && (this._callbacks = t), F.on("blur-viewer", () => {
            this._movementOriginatedFromUserGlobeInteraction = !1
        });
        const i = this._widget = Nt(e);
        this.scene = i.scene, this.markers = new Ft(this.scene), this._camera.setView({
            destination: new r(7383326785028172e-9, 9419480707813196e-9, 14989893080210578e-9)
        }), F.lastValue("media").$narrow && this._camera.zoomIn(35e5), this._replaceCameraController(), this._position3D = this._camera.positionWC;
        let s;
        const n = new r;
        let a = !1,
            o = !1;
        const c = () => {
            var d;
            this._moved3D = !(s != null && s.equals(this._position3D)), this._moved3D ? (Ht(this._position3D, n), a = this._last2DPosition ? r.distanceSquared(n, this._last2DPosition) > 1e4 : !1) : a = !1, this._position3D.clone(s != null ? s : s = new r), n.clone((d = this._last2DPosition) != null ? d : this._last2DPosition = new r)
        };
        q.add(() => {
            var v, T;
            if (this._renderPaused) return;
            if (this._widget.render(), c(), !this._moved3D && o && !this._pinching && this._snapToActiveMarkerDebounced(), a && this._movementOriginatedFromUserGlobeInteraction && !this._flying && !this._pinching) {
                const p = this.markers.getClosestPlaceToScreenPosition(this._screenCenter);
                p && p !== this.markers.activePlaceId && (this.markers.activePlaceId = p, (T = (v = this._callbacks).onPlaceChanged) == null || T.call(v, this.markers.activePlaceId))
            }
            o = this._moved3D
        });
        const l = i.container,
            m = () => {
                !this._renderPaused && !se && l.classList.add("cesium-resizing"), this._renderPaused = !0
            },
            h = () => {
                this._renderPaused && !se && l.classList.remove("cesium-resizing"), this._renderPaused = !1, i.forceResize();
                const {
                    offsetWidth: d,
                    offsetHeight: _
                } = l;
                this._screenCenter.x = d * .5, this._screenCenter.y = _ * .5
            };
        h(), F.on("window-will-resize", m), F.on("window-resize-debounced", h), i.container.addEventListener("mouseleave", () => {
            this.markers.highlightPlaceId = void 0
        }), this.scene.debugShowFramesPerSecond = Ce
    }
    updateMarkers(e) {
        var i, s;
        const t = this.markers.hasMarkers();
        this.markers.update(e), t || (s = (i = this._callbacks).onMarkersLoaded) == null || s.call(i)
    }
    _initializeInputHandlers() {
        let e = 0,
            t = !1,
            i;
        const s = new r,
            n = [{
                type: "LEFT_DOWN",
                handler: () => {
                    var a;
                    this._last2DPosition ? (a = this._last2DPosition) == null || a.clone(i != null ? i : i = s) : i = void 0, t = !1, this.markers.highlightPlaceId = void 0, this._camera.cancelFlight(), this._mouseDown = !0, this._externalMovement = !1
                }
            }, {
                type: "LEFT_UP",
                handler: () => {
                    this._mouseDown = !1, Be(), e = 0, this._snapToActiveMarkerDebounced()
                }
            }, {
                type: "MOUSE_MOVE",
                handler: a => {
                    if (t = t || this._mouseDown && !!i && i.equals(this._last2DPosition) !== !0, this._mouseDown) e += 1, e === 1 && Te.player.lock(), this._movementOriginatedFromUserGlobeInteraction = !0, this._flying = !1;
                    else {
                        const o = this.markers.getClosestPlaceToScreenPosition(a.endPosition);
                        this.markers.highlightPlaceId = o, je && Gt(o ? "pointer" : "")
                    }
                }
            }, {
                type: "LEFT_CLICK",
                handler: ({
                    position: a
                }) => {
                    var l, m, h;
                    if (t) {
                        t = !1;
                        return
                    }
                    const o = this.markers.getClosestPlaceToScreenPosition(a);
                    if (!o) return;
                    this.markers.activePlaceId = o;
                    const c = (l = this.markers.activePlace) == null ? void 0 : l.geo;
                    c && this._focusTo(c, j), (h = (m = this._callbacks).onPlaceClicked) == null || h.call(m, o)
                }
            }, {
                type: "PINCH_START",
                handler: () => {
                    this._last2DPosition = void 0, this._pinching = !0, this._flying = !1
                }
            }, {
                type: "PINCH_END",
                handler: () => {
                    this._pinching = !1, this._snapToActiveMarkerDebounced()
                }
            }, {
                type: "WHEEL",
                handler: () => {
                    this._camera.cancelFlight(), this._flying = !1, this._last2DPosition = void 0, this._snapToActiveMarkerDebounced()
                }
            }];
        for (const {
                type: a,
                handler: o
            }
            of n) this._widget.screenSpaceEventHandler.setInputAction(o, We[a])
    }
    _replaceCameraController() {
        const {
            minZoomReached: e,
            maxZoomReached: t
        } = this.scene.screenSpaceCameraController;
        this.scene.screenSpaceCameraController.destroy(), this._cameraController = this.scene._screenSpaceCameraController = new At(this.scene, {
            enableTilt: !1,
            getZoomCartesian3: () => {
                var s;
                const i = (s = this.markers.activePlace) == null ? void 0 : s.geo;
                return i && f.distanceSquared(Ie(this.scene, i), this._screenCenter) > Bt ? Re(this.scene, this._screenCenter, Ot) : i ? me(i, ue) : void 0
            },
            getZoomPosition: () => {
                var s, n;
                this._camera.cancelFlight();
                const i = (s = this.markers.activePlace) == null ? void 0 : s.geo;
                return (n = i ? me(i, ue) : void 0) != null ? n : this._position3D
            },
            maximumZoomDistance: 2e7,
            maxZoomReached: t,
            minimumZoomDistance: 6e3,
            minZoomReached: e,
            ...this._callbacks
        })
    }
    async revealMarkers(e) {
        var t, i;
        await (this.markers.reveal === "random" ? this._zoomInToPlaceWhileRevealingMarkers(e) : this._revealMarkersWhileRotatingGlobe(e)), this._initializeInputHandlers(), (i = (t = this._callbacks).onMarkersRevealed) == null || i.call(t)
    }
    async _zoomInToPlaceWhileRevealingMarkers(e) {
        qe(this.markers), await Ve(250);
        const t = N ? 10 : 1500,
            i = t * .66;
        this._focusTo(e.geo, t);
        const s = n => n * n;
        await this.markers.revealLoop(n => s(Math.min(1, n / i))), this.markers.activePlaceId = e.id
    }
    async _revealMarkersWhileRotatingGlobe(e) {
        this.scene.requestRender();
        const t = Date.now(),
            i = N ? 10 : 8e3,
            s = N ? 5 : 5500;
        this.markers.revealLoop(n => Math.min(1, n / i)), await new Promise(n => {
            const a = q.add(o => {
                if (Date.now() - t > s) {
                    n(), a();
                    return
                }
                this._camera.rotateLeft(5e-4 * o), this._camera.zoomOut(500 * o)
            })
        }), this.gotoPlace(e, {
            optimalFlightDuration: !0
        })
    }
    async gotoPlace(e, {
        optimalFlightDuration: t = !1
    } = {}) {
        if (!this._movementOriginatedFromUserGlobeInteraction) {
            const i = t ? void 0 : j * 2;
            await this._focusTo(e.geo, i)
        }
        e && e.id === this.markers.activePlaceId || (this._externalMovement = !0, this.markers.activePlaceId = e.id)
    }
    zoomIn() {
        return this.scene._screenSpaceCameraController._aggregator.simulateMouseWheel(25)
    }
    zoomOut() {
        return this.scene._screenSpaceCameraController._aggregator.simulateMouseWheel(-25)
    }
    moveTo([e, t], i = _e * 10) {
        return this._camera.setView({
            destination: r.fromDegrees(e, t, i)
        })
    }
    _flyTo([e, t], i, s = de(this.scene)) {
        return N && (i = 10), new Promise(n => {
            this._flying = !0, this._cameraController.disableInertia(), this._camera.flyTo({
                destination: r.fromDegrees(e, t, s),
                duration: g(i) ? i * .001 : void 0,
                complete: async () => {
                    this._flying = !1, n()
                }
            })
        })
    }
    _focusTo(e, t) {
        return this._flyTo(e, t, Math.min(_e, de(this.scene)))
    }
}
const $t = new Ut;
export {
    Ut as Viewer, $t as viewer
};
