function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.normalized = function() {
        const modulos = this.length();
        return new Vector(this.x / modulos, this.y / modulos, this.z / modulos);
    }

    this.length = function() {
        if (typeof this.modulos === "undefined") {
            this.modulos = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        return this.modulos;
    }
}

function makeVector(a, b) {
    const x = b.x - a.x;
    const y = b.y - a.y;
    const z = b.z - a.z;
    return new Vector(x, y, z);
}

function innerProduct(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

function crossProduct(a, b) {
    const i = a.y * b.z - a.z * b.y;
    const j = a.z * b.x - a.x * b.z;
    const k = a.x * b.y - a.y * b.x;
    return new Vector(i, j, k);
}

function distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function cayleyMengerDeterminant(d12, d13, d14, d21, d23, d24, d31, d32, d34, d41, d42, d43) {
    const container = new Array();
    container.push( [0,         1,         1,         1,         1]);
    container.push( [1,         0, d12 * d12, d13 * d13, d14 * d14]);
    container.push( [1, d21 * d21,         0, d23 * d23, d24 * d24]);
    container.push( [1, d31 * d31, d32 * d32,         0, d34 * d34]);
    container.push( [1, d41 * d41, d42 * d42, d43 * d43,         0]);
    const matrix = new mlMatrix.Matrix(container);

    const det = mlMatrix.determinant(matrix);

    const result = Math.sqrt(det / 288.0);
    return result;
}

function heronTriangleArea(a, b, c) {
    return 0.25 * Math.sqrt(4*a*a*b*b - Math.pow(a*a + b*b - c*c, 2));
}

/**
 * 
 * @param {*} v the vector
 * @param {*} s the scalar
 */
function multiplyVectorByScalar(v, s) {
    return new Vector(v.x * s, v.y * s, v.z * s);
}

function addVectors(a, b) {
    return new Vector(a.x + b.x, a.y + b.y, a.z + b.z);
}

/**
 * A Rodrigues's based vector about vector implementation
 * 
 * @param {*} v the vector to be rotated
 * @param {*} axis the vector representing the axis of rotation
 * @param {*} theta the angle in radians to rotate a around b
 * 
 * The rotation is clockwise taking in consideration the right hand rule
 * 
 * @see https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
 * 
 */
function rodriguesRotateVectorAroundAxis(v, axis, theta) {
    const cos_theta = Math.cos(theta);
    const k = axis.normalized();
    const k_inner_v = innerProduct(k, v);
    const k_inner_v_cos_theta = k_inner_v * (1. - cos_theta);
    const component_3 = multiplyVectorByScalar(k, k_inner_v_cos_theta);

    const k_x_v = crossProduct(k, v);
    const component_2 = multiplyVectorByScalar(k_x_v, Math.sin(theta));

    const component_1 = multiplyVectorByScalar(v, cos_theta);

    const result = addVectors(component_1, addVectors(component_2, component_3));
    return result;
}

function find4thVertex(Q, P, R, Lq, Lp, Lr) {

    const QP = makeVector(Q, P);
    const PR = makeVector(P, R);
    const RQ = makeVector(R, Q);

    const modQP = QP.length();
    const modPR = PR.length();
    const modRQ = RQ.length();

    const base = heronTriangleArea(modQP, modPR, modRQ);

    const volume = cayleyMengerDeterminant(Lr, modRQ, modPR, 
                                        Lr, Lq, Lp, 
                                        modRQ, Lq, modQP, 
                                        modPR, Lp, modQP);

    const H = 3.0 * volume / base;
    const Lp_proj = Math.sqrt(Lp* Lp - H*H);
    const Lr_proj = Math.sqrt(Lr* Lr - H*H);

    const cosSigma = (Lp_proj * Lp_proj - Lr_proj * Lr_proj + modPR * modPR) / (2 * Lp_proj * modPR);

    const theta = Math.asin(H/Lp)
    const sigma = Math.acos(cosSigma);

    const normal = crossProduct(PR, QP).normalized();

    const projection = rodriguesRotateVectorAroundAxis(PR, normal, -sigma);
    
    const m = crossProduct(normal, projection).normalized();

    const rotaded = rodriguesRotateVectorAroundAxis(projection, m, -theta);

    const result = multiplyVectorByScalar(rotaded.normalized(), Lp);

    return result;

}