
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function compute_rest_props(props, keys) {
        const rest = {};
        keys = new Set(keys);
        for (const k in props)
            if (!keys.has(k) && k[0] !== '$')
                rest[k] = props[k];
        return rest;
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function get_root_for_style(node) {
        if (!node)
            return document;
        const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        if (root && root.host) {
            return root;
        }
        return node.ownerDocument;
    }
    function append_empty_stylesheet(node) {
        const style_element = element('style');
        append_stylesheet(get_root_for_style(node), style_element);
        return style_element;
    }
    function append_stylesheet(node, style) {
        append(node.head || node, style);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_svg_attributes(node, attributes) {
        for (const key in attributes) {
            attr(node, key, attributes[key]);
        }
    }
    function set_custom_element_data(node, prop, value) {
        if (prop in node) {
            node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
        }
        else {
            attr(node, prop, value);
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    // unfortunately this can't be a constant as that wouldn't be tree-shakeable
    // so we cache the result instead
    let crossorigin;
    function is_crossorigin() {
        if (crossorigin === undefined) {
            crossorigin = false;
            try {
                if (typeof window !== 'undefined' && window.parent) {
                    void window.parent.document;
                }
            }
            catch (error) {
                crossorigin = true;
            }
        }
        return crossorigin;
    }
    function add_resize_listener(node, fn) {
        const computed_style = getComputedStyle(node);
        if (computed_style.position === 'static') {
            node.style.position = 'relative';
        }
        const iframe = element('iframe');
        iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
            'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
        iframe.setAttribute('aria-hidden', 'true');
        iframe.tabIndex = -1;
        const crossorigin = is_crossorigin();
        let unsubscribe;
        if (crossorigin) {
            iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
            unsubscribe = listen(window, 'message', (event) => {
                if (event.source === iframe.contentWindow)
                    fn();
            });
        }
        else {
            iframe.src = 'about:blank';
            iframe.onload = () => {
                unsubscribe = listen(iframe.contentWindow, 'resize', fn);
            };
        }
        append(node, iframe);
        return () => {
            if (crossorigin) {
                unsubscribe();
            }
            else if (unsubscribe && iframe.contentWindow) {
                unsubscribe();
            }
            detach(iframe);
        };
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    const active_docs = new Set();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = get_root_for_style(node);
        active_docs.add(doc);
        const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node).sheet);
        const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
        if (!current_rules[name]) {
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            active_docs.forEach(doc => {
                const stylesheet = doc.__svelte_stylesheet;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                doc.__svelte_rules = {};
            });
            active_docs.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
        let config = fn(node, params);
        let running = false;
        let animation_name;
        let task;
        let uid = 0;
        function cleanup() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
                task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, 'start'));
            task = loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(1, 0);
                        dispatch(node, true, 'end');
                        cleanup();
                        return running = false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(t, 1 - t);
                    }
                }
                return running;
            });
        }
        let started = false;
        return {
            start() {
                if (started)
                    return;
                started = true;
                delete_rule(node);
                if (is_function(config)) {
                    config = config();
                    wait().then(go);
                }
                else {
                    go();
                }
            },
            invalidate() {
                started = false;
            },
            end() {
                if (running) {
                    cleanup();
                    running = false;
                }
            }
        };
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error('Cannot have duplicate keys in a keyed each');
            }
            keys.add(key);
        }
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.43.2' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const currentPage = writable();

    const getMidpoint = (v1, v2) => {
        if (v1 > v2) {
            return v2 + (v1 - v2) / 2;
        }
        return v1 + (v2 - v1) / 2;
    };
    const relativeRect = (parentRect, childRect) => {
        return DOMRect.fromRect({
            x: childRect.x - parentRect.x,
            y: childRect.y - parentRect.y,
            width: childRect.width,
            height: childRect.height,
        });
    };
    const getConnectionPoint = (rect, side) => {
        const { x, y, width, height } = rect;
        switch (side) {
            case "top":
                return {
                    x: x + width / 2,
                    y,
                };
            case "right":
                return {
                    x: x + width,
                    y: y + height / 2,
                };
            case "bottom":
                return {
                    x: x + width / 2,
                    y: y + height,
                };
            case "left":
            default:
                return {
                    x: x,
                    y: y + height / 2,
                };
        }
    };
    const getPathData = (fromPoint, fromSide, toPoint, toSide) => {
        const d = [];
        d.push(`M ${fromPoint.x},${fromPoint.y}`);
        switch (fromSide) {
            case "top":
                break;
            case "right":
                switch (toSide) {
                    case "top":
                        d.push(`L ${toPoint.x},${fromPoint.y}`);
                        break;
                    case "right":
                    case "bottom":
                    case "left":
                        const midX = getMidpoint(fromPoint.x, toPoint.x);
                        d.push(`L ${midX},${fromPoint.y}`);
                        d.push(`L ${midX},${toPoint.y}`);
                        break;
                }
                break;
            case "bottom":
                switch (toSide) {
                    case "top":
                        const midY = getMidpoint(fromPoint.y, toPoint.y);
                        d.push(`L ${fromPoint.x},${midY}`);
                        d.push(`L ${toPoint.x},${midY}`);
                        break;
                    case "right":
                        d.push(`L ${fromPoint.x},${toPoint.y}`);
                        break;
                    case "bottom":
                        break;
                    case "left":
                        d.push(`L ${fromPoint.x},${toPoint.y}`);
                        break;
                }
                break;
            case "left":
                switch (toSide) {
                    case "top":
                        d.push(`L ${toPoint.x},${fromPoint.y}`);
                        break;
                    case "right": {
                        const midX = getMidpoint(fromPoint.x, toPoint.x);
                        d.push(`L ${midX},${fromPoint.y}`);
                        d.push(`L ${midX},${toPoint.y}`);
                        break;
                    }
                }
                break;
        }
        d.push(`L ${toPoint.x},${toPoint.y}`);
        return d.join(" ");
    };

    /* src/pages/Page.svelte generated by Svelte v3.43.2 */
    const file$1d = "src/pages/Page.svelte";

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	child_ctx[17] = i;
    	return child_ctx;
    }

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	child_ctx[16] = list;
    	child_ctx[17] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[18] = list[i];
    	return child_ctx;
    }

    // (95:2) {:else}
    function create_else_block$3(ctx) {
    	let linear_content;
    	let current;
    	let each_value_2 = /*pageItems*/ ctx[0];
    	validate_each_argument(each_value_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			linear_content = element("linear-content");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			set_custom_element_data(linear_content, "class", "svelte-4reoq4");
    			add_location(linear_content, file$1d, 95, 4, 3291);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, linear_content, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(linear_content, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*pageItems*/ 1) {
    				each_value_2 = /*pageItems*/ ctx[0];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(linear_content, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(linear_content);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(95:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (76:2) {#if clientWidth >= 900}
    function create_if_block$7(ctx) {
    	let content_layer;
    	let connections_1;
    	let svg;
    	let t;
    	let content_grid;
    	let current;
    	let each_value_1 = /*paths*/ ctx[5];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = /*pageItems*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			content_layer = element("content-layer");
    			connections_1 = element("connections");
    			svg = svg_element("svg");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t = space();
    			content_grid = element("content-grid");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(svg, "class", "svelte-4reoq4");
    			add_location(svg, file$1d, 78, 8, 2791);
    			attr_dev(connections_1, "class", "svelte-4reoq4");
    			add_location(connections_1, file$1d, 77, 6, 2769);
    			set_custom_element_data(content_grid, "class", "svelte-4reoq4");
    			add_location(content_grid, file$1d, 86, 6, 3002);
    			set_custom_element_data(content_layer, "class", "svelte-4reoq4");
    			add_location(content_layer, file$1d, 76, 4, 2747);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, content_layer, anchor);
    			append_dev(content_layer, connections_1);
    			append_dev(connections_1, svg);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(svg, null);
    			}

    			append_dev(content_layer, t);
    			append_dev(content_layer, content_grid);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(content_grid, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*paths*/ 32) {
    				each_value_1 = /*paths*/ ctx[5];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(svg, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*layoutStyles, items, pageItems*/ 69) {
    				each_value = /*pageItems*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(content_grid, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(content_layer);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(76:2) {#if clientWidth >= 900}",
    		ctx
    	});

    	return block;
    }

    // (97:6) {#each pageItems as pageItem, index}
    function create_each_block_2(ctx) {
    	let linear_content_item;
    	let switch_instance;
    	let t;
    	let current;
    	var switch_value = /*pageItem*/ ctx[15][0];

    	function switch_props(ctx) {
    		return { $$inline: true };
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    	}

    	const block = {
    		c: function create() {
    			linear_content_item = element("linear-content-item");
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			t = space();
    			set_custom_element_data(linear_content_item, "class", "svelte-4reoq4");
    			add_location(linear_content_item, file$1d, 97, 8, 3359);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, linear_content_item, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, linear_content_item, null);
    			}

    			append_dev(linear_content_item, t);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (switch_value !== (switch_value = /*pageItem*/ ctx[15][0])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, linear_content_item, t);
    				} else {
    					switch_instance = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(linear_content_item);
    			if (switch_instance) destroy_component(switch_instance);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(97:6) {#each pageItems as pageItem, index}",
    		ctx
    	});

    	return block;
    }

    // (81:12) {#if d}
    function create_if_block_1$7(ctx) {
    	let path;
    	let path_d_value;

    	const block = {
    		c: function create() {
    			path = svg_element("path");
    			attr_dev(path, "d", path_d_value = /*d*/ ctx[18]);
    			attr_dev(path, "stroke", "#444");
    			attr_dev(path, "stroke-width", "10");
    			attr_dev(path, "fill", "transparent");
    			add_location(path, file$1d, 81, 14, 2860);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, path, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*paths*/ 32 && path_d_value !== (path_d_value = /*d*/ ctx[18])) {
    				attr_dev(path, "d", path_d_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(path);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$7.name,
    		type: "if",
    		source: "(81:12) {#if d}",
    		ctx
    	});

    	return block;
    }

    // (80:10) {#each paths as d}
    function create_each_block_1(ctx) {
    	let if_block_anchor;
    	let if_block = /*d*/ ctx[18] && create_if_block_1$7(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (/*d*/ ctx[18]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1$7(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(80:10) {#each paths as d}",
    		ctx
    	});

    	return block;
    }

    // (88:8) {#each pageItems as pageItem, index}
    function create_each_block$2(ctx) {
    	let content_item;
    	let switch_instance;
    	let t;
    	let content_item_style_value;
    	let index = /*index*/ ctx[17];
    	let current;
    	var switch_value = /*pageItem*/ ctx[15][0];

    	function switch_props(ctx) {
    		return { $$inline: true };
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    	}

    	const assign_content_item = () => /*content_item_binding*/ ctx[10](content_item, index);
    	const unassign_content_item = () => /*content_item_binding*/ ctx[10](null, index);

    	const block = {
    		c: function create() {
    			content_item = element("content-item");
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			t = space();
    			set_custom_element_data(content_item, "style", content_item_style_value = /*layoutStyles*/ ctx[6][/*index*/ ctx[17]]);
    			set_custom_element_data(content_item, "class", "svelte-4reoq4");
    			add_location(content_item, file$1d, 88, 10, 3072);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, content_item, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, content_item, null);
    			}

    			append_dev(content_item, t);
    			assign_content_item();
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (switch_value !== (switch_value = /*pageItem*/ ctx[15][0])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, content_item, t);
    				} else {
    					switch_instance = null;
    				}
    			}

    			if (!current || dirty & /*layoutStyles*/ 64 && content_item_style_value !== (content_item_style_value = /*layoutStyles*/ ctx[6][/*index*/ ctx[17]])) {
    				set_custom_element_data(content_item, "style", content_item_style_value);
    			}

    			if (index !== /*index*/ ctx[17]) {
    				unassign_content_item();
    				index = /*index*/ ctx[17];
    				assign_content_item();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(content_item);
    			if (switch_instance) destroy_component(switch_instance);
    			unassign_content_item();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(88:8) {#each pageItems as pageItem, index}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1d(ctx) {
    	let page_root;
    	let current_block_type_index;
    	let if_block;
    	let page_root_resize_listener;
    	let current;
    	const if_block_creators = [create_if_block$7, create_else_block$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*clientWidth*/ ctx[3] >= 900) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			page_root = element("page-root");
    			if_block.c();
    			set_custom_element_data(page_root, "class", "svelte-4reoq4");
    			add_render_callback(() => /*page_root_elementresize_handler*/ ctx[11].call(page_root));
    			add_location(page_root, file$1d, 74, 0, 2652);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, page_root, anchor);
    			if_blocks[current_block_type_index].m(page_root, null);
    			page_root_resize_listener = add_resize_listener(page_root, /*page_root_elementresize_handler*/ ctx[11].bind(page_root));
    			/*page_root_binding*/ ctx[12](page_root);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(page_root, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(page_root);
    			if_blocks[current_block_type_index].d();
    			page_root_resize_listener();
    			/*page_root_binding*/ ctx[12](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1d($$self, $$props, $$invalidate) {
    	let layoutStyles;
    	let rootRect;
    	let itemRects;
    	let connections;
    	let paths;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Page', slots, []);

    	const styleFromLayout2 = layout => {
    		if (layout) {
    			const parts = layout.split(/\s+/);
    			const style = [];

    			parts.forEach(part => {
    				if (part.startsWith("cs")) {
    					style.push(`grid-column-end: span ${part.substring(2)}`);
    				} else if (part.startsWith("c")) {
    					style.push(`grid-column-start: ${part.substring(1)}`);
    				} else if (part.startsWith("rs")) {
    					style.push(`grid-row-end: span ${part.substring(2)}`);
    				} else if (part.startsWith("r")) {
    					style.push(`grid-row-start: ${part.substring(1)}`);
    				}
    			});

    			return style.join(";");
    		}
    	};

    	let { pageItems } = $$props;

    	// ---------- refs ---------- //
    	let root;

    	let items = [];
    	let clientWidth, clientHeight;

    	// ---------- connection paths ---------- //
    	const getSides = connection => {
    		switch (connection) {
    			case "b-t":
    				return { from: "bottom", to: "top" };
    			case "b-l":
    				return { from: "bottom", to: "left" };
    			case "b-r":
    				return { from: "bottom", to: "right" };
    			case "l-t":
    				return { from: "left", to: "top" };
    			case "l-r":
    				return { from: "left", to: "right" };
    			case "r-l":
    				return { from: "right", to: "left" };
    			case "r-t":
    				return { from: "right", to: "top" };
    			default:
    				return { from: "bottom", to: "top" };
    		}
    	};

    	const writable_props = ['pageItems'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Page> was created with unknown prop '${key}'`);
    	});

    	function content_item_binding($$value, index) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			items[index] = $$value;
    			$$invalidate(2, items);
    		});
    	}

    	function page_root_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		clientHeight = this.clientHeight;
    		$$invalidate(3, clientWidth);
    		$$invalidate(4, clientHeight);
    	}

    	function page_root_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			root = $$value;
    			$$invalidate(1, root);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ('pageItems' in $$props) $$invalidate(0, pageItems = $$props.pageItems);
    	};

    	$$self.$capture_state = () => ({
    		getConnectionPoint,
    		getPathData,
    		relativeRect,
    		styleFromLayout2,
    		pageItems,
    		root,
    		items,
    		clientWidth,
    		clientHeight,
    		getSides,
    		itemRects,
    		connections,
    		paths,
    		rootRect,
    		layoutStyles
    	});

    	$$self.$inject_state = $$props => {
    		if ('pageItems' in $$props) $$invalidate(0, pageItems = $$props.pageItems);
    		if ('root' in $$props) $$invalidate(1, root = $$props.root);
    		if ('items' in $$props) $$invalidate(2, items = $$props.items);
    		if ('clientWidth' in $$props) $$invalidate(3, clientWidth = $$props.clientWidth);
    		if ('clientHeight' in $$props) $$invalidate(4, clientHeight = $$props.clientHeight);
    		if ('itemRects' in $$props) $$invalidate(7, itemRects = $$props.itemRects);
    		if ('connections' in $$props) $$invalidate(8, connections = $$props.connections);
    		if ('paths' in $$props) $$invalidate(5, paths = $$props.paths);
    		if ('rootRect' in $$props) $$invalidate(9, rootRect = $$props.rootRect);
    		if ('layoutStyles' in $$props) $$invalidate(6, layoutStyles = $$props.layoutStyles);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*pageItems*/ 1) {
    			// ---------- styles ---------- //
    			$$invalidate(6, layoutStyles = pageItems.map(pageItem => styleFromLayout2(pageItem[1])));
    		}

    		if ($$self.$$.dirty & /*clientWidth, clientHeight, root*/ 26) {
    			// ---------- measurements ---------- //
    			$$invalidate(9, rootRect = clientWidth && clientHeight && root && root.getBoundingClientRect());
    		}

    		if ($$self.$$.dirty & /*clientWidth, clientHeight, items, rootRect*/ 540) {
    			$$invalidate(7, itemRects = clientWidth && clientHeight
    			? items.map(item => {
    					return item && rootRect && relativeRect(rootRect, item.getBoundingClientRect());
    				})
    			: []);
    		}

    		if ($$self.$$.dirty & /*pageItems*/ 1) {
    			$$invalidate(8, connections = pageItems.map(pageItem => pageItem.length === 3 && pageItem[2]));
    		}

    		if ($$self.$$.dirty & /*connections, itemRects*/ 384) {
    			$$invalidate(5, paths = connections.map((connection, index, array) => {
    				if (connection && itemRects[index] && itemRects[index + 1]) {
    					const sides = getSides(connection);
    					const fromPoint = getConnectionPoint(itemRects[index], sides.from);
    					const toPoint = getConnectionPoint(itemRects[index + 1], sides.to);
    					return getPathData(fromPoint, sides.from, toPoint, sides.to);
    				}

    				return undefined;
    			}));
    		}
    	};

    	return [
    		pageItems,
    		root,
    		items,
    		clientWidth,
    		clientHeight,
    		paths,
    		layoutStyles,
    		itemRects,
    		connections,
    		rootRect,
    		content_item_binding,
    		page_root_elementresize_handler,
    		page_root_binding
    	];
    }

    class Page extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1d, create_fragment$1d, safe_not_equal, { pageItems: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Page",
    			options,
    			id: create_fragment$1d.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*pageItems*/ ctx[0] === undefined && !('pageItems' in props)) {
    			console.warn("<Page> was created without expected prop 'pageItems'");
    		}
    	}

    	get pageItems() {
    		throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pageItems(value) {
    		throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/pages/CodeComments/Title.svelte generated by Svelte v3.43.2 */

    const file$1c = "src/pages/CodeComments/Title.svelte";

    function create_fragment$1c(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Commenting Code";
    			add_location(h1, file$1c, 1, 2, 9);
    			attr_dev(root, "class", "svelte-1s5l90g");
    			add_location(root, file$1c, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1c($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$a extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1c, create_fragment$1c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$1c.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidWhat/Title.svelte generated by Svelte v3.43.2 */

    const file$1b = "src/pages/CodeComments/AvoidWhat/Title.svelte";

    function create_fragment$1b(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Avoid commenting the what";
    			add_location(h1, file$1b, 1, 4, 11);
    			attr_dev(root, "class", "svelte-tjto4g");
    			add_location(root, file$1b, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1b($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$9 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1b, create_fragment$1b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$1b.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidWhat/Prose.svelte generated by Svelte v3.43.2 */

    const file$1a = "src/pages/CodeComments/AvoidWhat/Prose.svelte";

    function create_fragment$1a(ctx) {
    	let root;
    	let p0;
    	let t1;
    	let p1;
    	let t2;
    	let i;
    	let t4;

    	const block = {
    		c: function create() {
    			root = element("root");
    			p0 = element("p");
    			p0.textContent = "Comments that explain what the code is doing are only valuable to those\n    unfamiliar with the language. The code itself describes exactly what will\n    happen when it runs. This precision is the entire point of programming\n    lanugages (vs. natural languages)";
    			t1 = space();
    			p1 = element("p");
    			t2 = text("Adding ");
    			i = element("i");
    			i.textContent = "what";
    			t4 = text(" comments may be a habit created when learning to program.\n    Students often pseudo-code the sequence of statements in comments. It is easy\n    to forget to clean them up after the code is written.");
    			attr_dev(p0, "class", "svelte-j87c1z");
    			add_location(p0, file$1a, 1, 2, 9);
    			add_location(i, file$1a, 8, 11, 304);
    			attr_dev(p1, "class", "svelte-j87c1z");
    			add_location(p1, file$1a, 7, 2, 289);
    			attr_dev(root, "class", "svelte-j87c1z");
    			add_location(root, file$1a, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, p0);
    			append_dev(root, t1);
    			append_dev(root, p1);
    			append_dev(p1, t2);
    			append_dev(p1, i);
    			append_dev(p1, t4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1a($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Prose', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Prose> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Prose$4 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1a, create_fragment$1a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prose",
    			options,
    			id: create_fragment$1a.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidWhat/Example.svelte generated by Svelte v3.43.2 */

    const file$19 = "src/pages/CodeComments/AvoidWhat/Example.svelte";

    function create_fragment$19(ctx) {
    	let pre;

    	const block = {
    		c: function create() {
    			pre = element("pre");
    			pre.textContent = `${/*code*/ ctx[0]}`;
    			add_location(pre, file$19, 13, 2, 282);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, pre, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(pre);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$19.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$19($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code = `
// Declare constants
public const double CompressionRatio = 0.75;
public const string JpegImageType = "JPEG";
  
public void Save()
{
    // Save the image
    this._image.Save(this._data, CompressionRatio, JpegImageType);
}
      `;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code });
    	return [code];
    }

    class Example$7 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$19, create_fragment$19, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$19.name
    		});
    	}
    }

    /* src/pages/CodeComments/AlwaysWhy/Title.svelte generated by Svelte v3.43.2 */

    const file$18 = "src/pages/CodeComments/AlwaysWhy/Title.svelte";

    function create_fragment$18(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Always comment the why";
    			add_location(h1, file$18, 1, 2, 9);
    			attr_dev(root, "class", "svelte-1s5l90g");
    			add_location(root, file$18, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$18.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$18($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$8 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$18, create_fragment$18, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$18.name
    		});
    	}
    }

    /* src/pages/CodeComments/AlwaysWhy/Prose.svelte generated by Svelte v3.43.2 */

    const file$17 = "src/pages/CodeComments/AlwaysWhy/Prose.svelte";

    function create_fragment$17(ctx) {
    	let root;
    	let p0;
    	let t0;
    	let i;
    	let t2;
    	let t3;
    	let ul;
    	let li0;
    	let t5;
    	let li1;
    	let t7;
    	let li2;
    	let t9;
    	let li3;
    	let t11;
    	let p1;
    	let t13;
    	let p2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			p0 = element("p");
    			t0 = text("The primary question everyone has when reading new code is ");
    			i = element("i");
    			i.textContent = "why";
    			t2 = text(" it\n        was written this way.");
    			t3 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Why does the code recalculate the database index before and after a\n          new row was written?";
    			t5 = space();
    			li1 = element("li");
    			li1.textContent = "Why did this call this function instead of that similar function?";
    			t7 = space();
    			li2 = element("li");
    			li2.textContent = "Why is this object serialized with a boolean flag at the beginning?";
    			t9 = space();
    			li3 = element("li");
    			li3.textContent = "Why does this async function lock the entire object rather than only\n          the field it changes?";
    			t11 = space();
    			p1 = element("p");
    			p1.textContent = "If you care about the longevity of your code and want your hard work\n        appreciated, comment why.";
    			t13 = space();
    			p2 = element("p");
    			p2.textContent = "Describe your reasons for decisions. Call out the nuances of how you\n        crafted the code.";
    			add_location(i, file$17, 2, 67, 82);
    			attr_dev(p0, "class", "svelte-5b7l1a");
    			add_location(p0, file$17, 1, 4, 11);
    			add_location(li0, file$17, 6, 8, 156);
    			add_location(li1, file$17, 10, 8, 292);
    			add_location(li2, file$17, 13, 8, 395);
    			add_location(li3, file$17, 16, 8, 500);
    			attr_dev(ul, "class", "svelte-5b7l1a");
    			add_location(ul, file$17, 5, 6, 143);
    			attr_dev(p1, "class", "svelte-5b7l1a");
    			add_location(p1, file$17, 21, 6, 648);
    			attr_dev(p2, "class", "svelte-5b7l1a");
    			add_location(p2, file$17, 25, 6, 780);
    			attr_dev(root, "class", "svelte-5b7l1a");
    			add_location(root, file$17, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, p0);
    			append_dev(p0, t0);
    			append_dev(p0, i);
    			append_dev(p0, t2);
    			append_dev(root, t3);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t5);
    			append_dev(ul, li1);
    			append_dev(ul, t7);
    			append_dev(ul, li2);
    			append_dev(ul, t9);
    			append_dev(ul, li3);
    			append_dev(root, t11);
    			append_dev(root, p1);
    			append_dev(root, t13);
    			append_dev(root, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$17.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$17($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Prose', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Prose> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Prose$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$17, create_fragment$17, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prose",
    			options,
    			id: create_fragment$17.name
    		});
    	}
    }

    /* src/pages/CodeComments/AlwaysWhy/Example.svelte generated by Svelte v3.43.2 */

    const file$16 = "src/pages/CodeComments/AlwaysWhy/Example.svelte";

    function create_fragment$16(ctx) {
    	let pre;

    	const block = {
    		c: function create() {
    			pre = element("pre");
    			pre.textContent = `${/*code*/ ctx[0]}`;
    			add_location(pre, file$16, 13, 0, 308);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, pre, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(pre);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$16.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$16($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code = `
// Compress ratio 0.75 minimzes disk space with no noticable image quality loss
public const double CompressionRatio = 0.75;

public const string JpegImageType = "JPEG";
  
public void Save()
}
  this._image.Save(this._data, CompressionRatio, JpegImageType);
}
`;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code });
    	return [code];
    }

    class Example$6 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$16, create_fragment$16, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$16.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferConcise/Title.svelte generated by Svelte v3.43.2 */

    const file$15 = "src/pages/CodeComments/PreferConcise/Title.svelte";

    function create_fragment$15(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Prefer concise, single sentences";
    			add_location(h1, file$15, 1, 4, 11);
    			attr_dev(root, "class", "svelte-tjto4g");
    			add_location(root, file$15, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$15.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$15($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$7 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$15, create_fragment$15, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$15.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferConcise/Prose.svelte generated by Svelte v3.43.2 */

    const file$14 = "src/pages/CodeComments/PreferConcise/Prose.svelte";

    function create_fragment$14(ctx) {
    	let root;
    	let p;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			root = element("root");
    			p = element("p");
    			p.textContent = "Concise yet informative comments makes your code easier to understand.\n    Flowery platitudes, word play, and thesaurus lookups are best left for\n    poetry.";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Prefer each comment is a single sentence on a single line.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Avoid compound sentences (i.e. sentences combined with and/or)";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Avoid conditional clauses (i.e. sentences with ifs, whens, and buts)";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "Avoid unnecessary adjectives and adverbs (e.g. easy, fast, powerful,\n      quickly)";
    			attr_dev(p, "class", "svelte-5b7l1a");
    			add_location(p, file$14, 1, 2, 9);
    			add_location(li0, file$14, 7, 4, 193);
    			add_location(li1, file$14, 8, 4, 265);
    			add_location(li2, file$14, 9, 4, 341);
    			add_location(li3, file$14, 12, 4, 435);
    			attr_dev(ul, "class", "svelte-5b7l1a");
    			add_location(ul, file$14, 6, 2, 184);
    			attr_dev(root, "class", "svelte-5b7l1a");
    			add_location(root, file$14, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, p);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$14.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$14($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Prose', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Prose> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Prose$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$14, create_fragment$14, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prose",
    			options,
    			id: create_fragment$14.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferConcise/Example.svelte generated by Svelte v3.43.2 */

    const file$13 = "src/pages/CodeComments/PreferConcise/Example.svelte";

    function create_fragment$13(ctx) {
    	let root;
    	let div0;
    	let t1;
    	let pre0;
    	let t3;
    	let div1;
    	let t5;
    	let pre1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			div0 = element("div");
    			div0.textContent = "Some wordy comments";
    			t1 = space();
    			pre0 = element("pre");
    			pre0.textContent = `${/*code1*/ ctx[0]}`;
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "More concise comments";
    			t5 = space();
    			pre1 = element("pre");
    			pre1.textContent = `${/*code2*/ ctx[1]}`;
    			add_location(div0, file$13, 16, 2, 596);
    			add_location(pre0, file$13, 17, 2, 629);
    			add_location(div1, file$13, 18, 2, 650);
    			add_location(pre1, file$13, 19, 2, 685);
    			add_location(root, file$13, 15, 0, 587);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, div0);
    			append_dev(root, t1);
    			append_dev(root, pre0);
    			append_dev(root, t3);
    			append_dev(root, div1);
    			append_dev(root, t5);
    			append_dev(root, pre1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$13.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$13($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code1 = `
/* 
The database record is updated by including a simple client ID and it is combined with a generated seed value.
The row id exists to ensure that rows generated by each client can be retrieved easily later on.  
The row ID is a GUID that is base-64 encoded as a string and is then reversed for maximum cluster distribution. 
*/  
      `;

    	const code2 = `
/*         
Created a unique row ID by combining the client ID with the generated seed.
The row ID is reversed then base-64 encoded for cluster distribution.               
*/
      `;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code1, code2 });
    	return [code1, code2];
    }

    class Example$5 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$13, create_fragment$13, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$13.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferActive/Title.svelte generated by Svelte v3.43.2 */

    const file$12 = "src/pages/CodeComments/PreferActive/Title.svelte";

    function create_fragment$12(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Prefer active voice";
    			add_location(h1, file$12, 1, 4, 11);
    			attr_dev(root, "class", "svelte-tjto4g");
    			add_location(root, file$12, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$12.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$12($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$6 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$12, create_fragment$12, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$12.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferActive/Prose.svelte generated by Svelte v3.43.2 */

    const file$11 = "src/pages/CodeComments/PreferActive/Prose.svelte";

    function create_fragment$11(ctx) {
    	let root;
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			p0 = element("p");
    			p0.textContent = "Running code takes action. The voice of comments should reflect\n    activity. Use verbs associated with the action or decision you made in\n    the code.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Passive voice has repetative extra words and is harder to read. You may\n    need passive voice when writing your next novel, but less often in\n    comments.";
    			attr_dev(p0, "class", "svelte-j87c1z");
    			add_location(p0, file$11, 1, 2, 9);
    			attr_dev(p1, "class", "svelte-j87c1z");
    			add_location(p1, file$11, 6, 2, 179);
    			attr_dev(root, "class", "svelte-j87c1z");
    			add_location(root, file$11, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, p0);
    			append_dev(root, t1);
    			append_dev(root, p1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$11.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$11($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Prose', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Prose> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Prose$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$11, create_fragment$11, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prose",
    			options,
    			id: create_fragment$11.name
    		});
    	}
    }

    /* src/pages/CodeComments/PreferActive/Example.svelte generated by Svelte v3.43.2 */

    const file$10 = "src/pages/CodeComments/PreferActive/Example.svelte";

    function create_fragment$10(ctx) {
    	let root;
    	let div0;
    	let t1;
    	let pre0;
    	let t3;
    	let div1;
    	let t5;
    	let pre1;
    	let t7;
    	let div2;
    	let t9;
    	let pre2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			div0 = element("div");
    			div0.textContent = "A passive voice comment";
    			t1 = space();
    			pre0 = element("pre");
    			pre0.textContent = `${/*code1*/ ctx[0]}`;
    			t3 = space();
    			div1 = element("div");
    			div1.textContent = "An active voice comment";
    			t5 = space();
    			pre1 = element("pre");
    			pre1.textContent = `${/*code2*/ ctx[1]}`;
    			t7 = space();
    			div2 = element("div");
    			div2.textContent = "An alternative active voice comment";
    			t9 = space();
    			pre2 = element("pre");
    			pre2.textContent = `${/*code3*/ ctx[2]}`;
    			add_location(div0, file$10, 12, 2, 294);
    			add_location(pre0, file$10, 13, 2, 331);
    			add_location(div1, file$10, 14, 2, 352);
    			add_location(pre1, file$10, 15, 2, 389);
    			add_location(div2, file$10, 16, 2, 410);
    			add_location(pre2, file$10, 17, 2, 459);
    			add_location(root, file$10, 11, 0, 285);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, div0);
    			append_dev(root, t1);
    			append_dev(root, pre0);
    			append_dev(root, t3);
    			append_dev(root, div1);
    			append_dev(root, t5);
    			append_dev(root, pre1);
    			append_dev(root, t7);
    			append_dev(root, div2);
    			append_dev(root, t9);
    			append_dev(root, pre2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$10.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$10($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code1 = `
// To avoid deadlocks the customer and product lists are locked.
`;

    	const code2 = `
// Locked customer and product lists to avoid deadlocks.
      `;

    	const code3 = `
// Avoided deadlocks by locking both customer and product lists.
      `;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code1, code2, code3 });
    	return [code1, code2, code3];
    }

    class Example$4 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$10, create_fragment$10, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$10.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidUseless/Title.svelte generated by Svelte v3.43.2 */

    const file$$ = "src/pages/CodeComments/AvoidUseless/Title.svelte";

    function create_fragment$$(ctx) {
    	let root;
    	let h1;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Avoid comments for the sake of comments";
    			add_location(h1, file$$, 1, 4, 11);
    			attr_dev(root, "class", "svelte-tjto4g");
    			add_location(root, file$$, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$$.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$$($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$5 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$$, create_fragment$$, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$$.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidUseless/Prose.svelte generated by Svelte v3.43.2 */

    const file$_ = "src/pages/CodeComments/AvoidUseless/Prose.svelte";

    function create_fragment$_(ctx) {
    	let root;
    	let p0;
    	let t1;
    	let p1;
    	let t2;
    	let i0;
    	let t4;
    	let i1;
    	let t6;

    	const block = {
    		c: function create() {
    			root = element("root");
    			p0 = element("p");
    			p0.textContent = "Keep in mind comments are for humans, not for computers. You want to get the\n    highest ink-to-value ratio possible. Comments should only be added where\n    they provide value to the reader.";
    			t1 = space();
    			p1 = element("p");
    			t2 = text("Don't use tools that auto-generate comments in your source. If you ");
    			i0 = element("i");
    			i0.textContent = "must";
    			t4 = text("\n    publish online documentation and every single thing ");
    			i1 = element("i");
    			i1.textContent = "must";
    			t6 = text("\n    be documented to meet a conformance requirement, see if your build system can\n    generated missing comments at build time.");
    			attr_dev(p0, "class", "svelte-j87c1z");
    			add_location(p0, file$_, 1, 2, 9);
    			add_location(i0, file$_, 7, 71, 293);
    			add_location(i1, file$_, 10, 56, 373);
    			attr_dev(p1, "class", "svelte-j87c1z");
    			add_location(p1, file$_, 6, 2, 218);
    			attr_dev(root, "class", "svelte-j87c1z");
    			add_location(root, file$_, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, p0);
    			append_dev(root, t1);
    			append_dev(root, p1);
    			append_dev(p1, t2);
    			append_dev(p1, i0);
    			append_dev(p1, t4);
    			append_dev(p1, i1);
    			append_dev(p1, t6);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$_.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$_($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Prose', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Prose> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Prose extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$_, create_fragment$_, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prose",
    			options,
    			id: create_fragment$_.name
    		});
    	}
    }

    /* src/pages/CodeComments/AvoidUseless/Example.svelte generated by Svelte v3.43.2 */

    const file$Z = "src/pages/CodeComments/AvoidUseless/Example.svelte";

    function create_fragment$Z(ctx) {
    	let root;
    	let div;
    	let t1;
    	let pre;

    	const block = {
    		c: function create() {
    			root = element("root");
    			div = element("div");
    			div.textContent = "A auto-generated comment with little value";
    			t1 = space();
    			pre = element("pre");
    			pre.textContent = `${/*code1*/ ctx[0]}`;
    			add_location(div, file$Z, 7, 2, 142);
    			add_location(pre, file$Z, 8, 2, 198);
    			add_location(root, file$Z, 6, 0, 133);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, div);
    			append_dev(root, t1);
    			append_dev(root, pre);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$Z.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$Z($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code1 = `
  // Gets and sets the Name
  public string Name &#123; get&semi; set&semi; &#125;  
`;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code1 });
    	return [code1];
    }

    class Example$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$Z, create_fragment$Z, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$Z.name
    		});
    	}
    }

    /* src/pages/CodeComments/CodeComments.svelte generated by Svelte v3.43.2 */
    const file$Y = "src/pages/CodeComments/CodeComments.svelte";

    function create_fragment$Y(ctx) {
    	let article;
    	let page;
    	let current;

    	page = new Page({
    			props: { pageItems: /*pageItems*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			article = element("article");
    			create_component(page.$$.fragment);
    			attr_dev(article, "class", "svelte-1n31yal");
    			add_location(article, file$Y, 37, 2, 1774);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			mount_component(page, article, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(page.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(page.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			destroy_component(page);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$Y.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$Y($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CodeComments', slots, []);

    	const pageItems = [
    		[Title$a, "r1 c1 cs13", "b-t"],
    		[Title$9, "r2 c2 cs11", "b-t"],
    		[Prose$4, "r3 c1 cs3", "r-l"],
    		[Example$7, "r3 c5 cs9", "r-l"],
    		[Title$8, "r4 c2 cs11", "b-t"],
    		[Prose$3, "r5 c1 cs3", "r-l"],
    		[Example$6, "r5 c5 cs9", "r-l"],
    		[Title$7, "r6 c2 cs11", "b-t"],
    		[Prose$2, "r7 c1 cs3", "r-l"],
    		[Example$5, "r7 c5 cs9", "r-l"],
    		[Title$6, "r8 c2 cs11", "b-t"],
    		[Prose$1, "r9 c1 cs3", "r-l"],
    		[Example$4, "r9 c5 cs9", "r-l"],
    		[Title$5, "r10 c2 cs11", "b-t"],
    		[Prose, "r11 c1 cs3", "r-l"],
    		[Example$3, "r11 c5 cs9", "r-l"]
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CodeComments> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Page,
    		Title: Title$a,
    		AvoidWhat_Title: Title$9,
    		AvoidWhat_Prose: Prose$4,
    		AvoidWhat_Example: Example$7,
    		AlwaysWhy_Title: Title$8,
    		AlwaysWhy_Prose: Prose$3,
    		AlwaysWhy_Example: Example$6,
    		PreferConcise_Title: Title$7,
    		PreferConcise_Prose: Prose$2,
    		PreferConcise_Example: Example$5,
    		PreferActive_Title: Title$6,
    		PreferActive_Prose: Prose$1,
    		PreferActive_Example: Example$4,
    		AvoidUseless_Title: Title$5,
    		AvoidUseless_Prose: Prose,
    		AvoidUseless_Example: Example$3,
    		pageItems
    	});

    	return [pageItems];
    }

    class CodeComments extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$Y, create_fragment$Y, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CodeComments",
    			options,
    			id: create_fragment$Y.name
    		});
    	}
    }

    /* src/pages/CodeLocality/CodeLocality.svelte generated by Svelte v3.43.2 */
    const file$X = "src/pages/CodeLocality/CodeLocality.svelte";

    function create_fragment$X(ctx) {
    	let div22;
    	let div0;
    	let t1;
    	let div4;
    	let div1;
    	let p0;
    	let t3;
    	let div2;
    	let p1;
    	let t5;
    	let div3;
    	let p2;
    	let t7;
    	let div5;
    	let t8;
    	let div6;
    	let t10;
    	let div10;
    	let div7;
    	let p3;
    	let t12;
    	let p4;
    	let t14;
    	let div8;
    	let p5;
    	let t15;
    	let a;
    	let t17;
    	let ul0;
    	let li0;
    	let t19;
    	let li1;
    	let t21;
    	let div9;
    	let p6;
    	let t23;
    	let p7;
    	let t25;
    	let div11;
    	let t26;
    	let div12;
    	let t28;
    	let div16;
    	let div13;
    	let p8;
    	let t30;
    	let p9;
    	let t32;
    	let div14;
    	let p10;
    	let t34;
    	let p11;
    	let t36;
    	let div15;
    	let p12;
    	let t38;
    	let p13;
    	let t40;
    	let div17;
    	let t41;
    	let div18;
    	let t43;
    	let div21;
    	let div19;
    	let ul1;
    	let li2;
    	let t45;
    	let li3;
    	let t47;
    	let li4;
    	let t49;
    	let div20;
    	let ul2;
    	let li5;
    	let t51;
    	let li6;

    	const block = {
    		c: function create() {
    			div22 = element("div");
    			div0 = element("div");
    			div0.textContent = "Tools organize code for computers";
    			t1 = space();
    			div4 = element("div");
    			div1 = element("div");
    			p0 = element("p");
    			p0.textContent = "The conventional coding standard for many projects requires grouping\n        code by access (e.g. public, protected, private), by member type (e.g.\n        properties, methods), or by lifetime (e.g. constants, instance types,\n        static types).";
    			t3 = space();
    			div2 = element("div");
    			p1 = element("p");
    			p1.textContent = "These rules were defined based on programming languages where the order\n        of statements in the text file determined the compiled memory layout.\n        Following the same rules in modern languages and when modern editors is\n        an archaic process.";
    			t5 = space();
    			div3 = element("div");
    			p2 = element("p");
    			p2.textContent = "Avoid grouping your code based on access, lifetime, or any way prefered\n        by the computer. This is why we have text programming languages rather\n        than typing ones and zeros.";
    			t7 = space();
    			div5 = element("div");
    			t8 = space();
    			div6 = element("div");
    			div6.textContent = "Locality helps organize code for humans";
    			t10 = space();
    			div10 = element("div");
    			div7 = element("div");
    			p3 = element("p");
    			p3.textContent = "The principle of locality says that things nearby in time or space are\n        likely to be referenced in the near future.";
    			t12 = space();
    			p4 = element("p");
    			p4.textContent = "Code should be organized to optimize readability and maintainability.\n        Applying the principle of locality groups things nearby that are likely\n        to be referenced together or change together.";
    			t14 = space();
    			div8 = element("div");
    			p5 = element("p");
    			t15 = text("Here are the definitions from ");
    			a = element("a");
    			a.textContent = "Wikipedia";
    			t17 = space();
    			ul0 = element("ul");
    			li0 = element("li");
    			li0.textContent = "If a particular location is referenced at a particular time, then it\n          is likely that nearby locations will be referenced in the near future\n          (Spatial Locality).";
    			t19 = space();
    			li1 = element("li");
    			li1.textContent = "If at one point in time a particular location is referenced, then it\n          is likely that the same location will be referenced again in the near\n          future (Temporal Locality).";
    			t21 = space();
    			div9 = element("div");
    			p6 = element("p");
    			p6.textContent = "Locality has been an important principle in computer storage, video\n        optimization, and caching.";
    			t23 = space();
    			p7 = element("p");
    			p7.textContent = "You can use the same principle to better organize your code for human\n        productivity.";
    			t25 = space();
    			div11 = element("div");
    			t26 = space();
    			div12 = element("div");
    			div12.textContent = "The principle in practice";
    			t28 = space();
    			div16 = element("div");
    			div13 = element("div");
    			p8 = element("p");
    			p8.textContent = "Keep fields near the functions that use them. Keep subroutines near the\n        functions that call them. If one function is referenced, then it is\n        likely that the fields and functions it uses will be referenced in the\n        near future.";
    			t30 = space();
    			p9 = element("p");
    			p9.textContent = "Sometimes you can’t group everything in perfect clusters. Fall back to\n        grouping things that are most likely to change together and at the same\n        time.";
    			t32 = space();
    			div14 = element("div");
    			p10 = element("p");
    			p10.textContent = "If you have trouble organizing a particular module or class, check if it\n        has very independent groups of fields or methods. It may be that you\n        need to break up your code into smaller pieces where each has a single\n        responsibility.";
    			t34 = space();
    			p11 = element("p");
    			p11.textContent = "The great thing is that by using locality, you’ve already grouped\n        related things together - making them easy to put in a new file.";
    			t36 = space();
    			div15 = element("div");
    			p12 = element("p");
    			p12.textContent = "Leverage the modern IDE at your finger tips. Search, reference\n        following, and direct lookup capabilities of IDEs can quickly navigate\n        to the code you are looking for.";
    			t38 = space();
    			p13 = element("p");
    			p13.textContent = "Don’t worry too much that you don’t have all the data fields grouped\n        together; a modern IDE can usually give you that view without causing\n        you to re-organize your code.";
    			t40 = space();
    			div17 = element("div");
    			t41 = space();
    			div18 = element("div");
    			div18.textContent = "Benefits";
    			t43 = space();
    			div21 = element("div");
    			div19 = element("div");
    			ul1 = element("ul");
    			li2 = element("li");
    			li2.textContent = "Reduces scrolling when seeking for related fields and methods";
    			t45 = space();
    			li3 = element("li");
    			li3.textContent = "Helps other understand the code faster as cohesive related units";
    			t47 = space();
    			li4 = element("li");
    			li4.textContent = "Avoids missing a necessary cascading change to related code";
    			t49 = space();
    			div20 = element("div");
    			ul2 = element("ul");
    			li5 = element("li");
    			li5.textContent = "Reduces scatter of changes in code reviews and pull requests";
    			t51 = space();
    			li6 = element("li");
    			li6.textContent = "Don’t have to run tools to enforce annoying rules because you have\n          semantically organized the code.";
    			attr_dev(div0, "class", "section-header svelte-z5dwd0");
    			add_location(div0, file$X, 5, 2, 112);
    			add_location(p0, file$X, 8, 6, 240);
    			attr_dev(div1, "class", "prose svelte-z5dwd0");
    			add_location(div1, file$X, 7, 4, 214);
    			add_location(p1, file$X, 16, 6, 553);
    			attr_dev(div2, "class", "prose svelte-z5dwd0");
    			add_location(div2, file$X, 15, 4, 527);
    			add_location(p2, file$X, 24, 6, 875);
    			attr_dev(div3, "class", "prose svelte-z5dwd0");
    			add_location(div3, file$X, 23, 4, 849);
    			attr_dev(div4, "class", "three-columns svelte-z5dwd0");
    			add_location(div4, file$X, 6, 2, 182);
    			attr_dev(div5, "class", "separator svelte-z5dwd0");
    			add_location(div5, file$X, 31, 2, 1107);
    			attr_dev(div6, "class", "section-header svelte-z5dwd0");
    			add_location(div6, file$X, 32, 2, 1135);
    			add_location(p3, file$X, 35, 6, 1269);
    			add_location(p4, file$X, 39, 6, 1421);
    			attr_dev(div7, "class", "prose svelte-z5dwd0");
    			add_location(div7, file$X, 34, 4, 1243);
    			attr_dev(a, "href", "http://en.wikipedia.org/wiki/Locality_of_reference");
    			add_location(a, file$X, 47, 38, 1731);
    			add_location(p5, file$X, 46, 6, 1689);
    			attr_dev(li0, "class", "svelte-z5dwd0");
    			add_location(li0, file$X, 52, 8, 1855);
    			attr_dev(li1, "class", "svelte-z5dwd0");
    			add_location(li1, file$X, 57, 8, 2071);
    			add_location(ul0, file$X, 51, 6, 1842);
    			attr_dev(div8, "class", "prose svelte-z5dwd0");
    			add_location(div8, file$X, 45, 4, 1663);
    			add_location(p6, file$X, 65, 6, 2340);
    			add_location(p7, file$X, 69, 6, 2472);
    			attr_dev(div9, "class", "prose svelte-z5dwd0");
    			add_location(div9, file$X, 64, 4, 2314);
    			attr_dev(div10, "class", "three-columns svelte-z5dwd0");
    			add_location(div10, file$X, 33, 2, 1211);
    			attr_dev(div11, "class", "separator svelte-z5dwd0");
    			add_location(div11, file$X, 75, 2, 2609);
    			attr_dev(div12, "class", "section-header svelte-z5dwd0");
    			add_location(div12, file$X, 76, 2, 2637);
    			add_location(p8, file$X, 79, 6, 2757);
    			add_location(p9, file$X, 86, 6, 3035);
    			attr_dev(div13, "class", "prose svelte-z5dwd0");
    			add_location(div13, file$X, 78, 4, 2731);
    			add_location(p10, file$X, 93, 6, 3264);
    			add_location(p11, file$X, 99, 6, 3546);
    			attr_dev(div14, "class", "prose svelte-z5dwd0");
    			add_location(div14, file$X, 92, 4, 3238);
    			add_location(p12, file$X, 105, 6, 3749);
    			add_location(p13, file$X, 110, 6, 3961);
    			attr_dev(div15, "class", "prose svelte-z5dwd0");
    			add_location(div15, file$X, 104, 4, 3723);
    			attr_dev(div16, "class", "three-columns svelte-z5dwd0");
    			add_location(div16, file$X, 77, 2, 2699);
    			attr_dev(div17, "class", "separator svelte-z5dwd0");
    			add_location(div17, file$X, 117, 2, 4191);
    			attr_dev(div18, "class", "section-header svelte-z5dwd0");
    			add_location(div18, file$X, 118, 2, 4219);
    			attr_dev(li2, "class", "svelte-z5dwd0");
    			add_location(li2, file$X, 122, 8, 4332);
    			attr_dev(li3, "class", "svelte-z5dwd0");
    			add_location(li3, file$X, 123, 8, 4411);
    			attr_dev(li4, "class", "svelte-z5dwd0");
    			add_location(li4, file$X, 126, 8, 4513);
    			attr_dev(ul1, "class", "svelte-z5dwd0");
    			add_location(ul1, file$X, 121, 6, 4319);
    			attr_dev(div19, "class", "list svelte-z5dwd0");
    			add_location(div19, file$X, 120, 4, 4294);
    			attr_dev(li5, "class", "svelte-z5dwd0");
    			add_location(li5, file$X, 131, 8, 4647);
    			attr_dev(li6, "class", "svelte-z5dwd0");
    			add_location(li6, file$X, 132, 8, 4725);
    			attr_dev(ul2, "class", "svelte-z5dwd0");
    			add_location(ul2, file$X, 130, 6, 4634);
    			attr_dev(div20, "class", "list svelte-z5dwd0");
    			add_location(div20, file$X, 129, 4, 4609);
    			attr_dev(div21, "class", "two-columns svelte-z5dwd0");
    			add_location(div21, file$X, 119, 2, 4264);
    			attr_dev(div22, "class", "root centered-column  svelte-z5dwd0");
    			add_location(div22, file$X, 4, 0, 74);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div22, anchor);
    			append_dev(div22, div0);
    			append_dev(div22, t1);
    			append_dev(div22, div4);
    			append_dev(div4, div1);
    			append_dev(div1, p0);
    			append_dev(div4, t3);
    			append_dev(div4, div2);
    			append_dev(div2, p1);
    			append_dev(div4, t5);
    			append_dev(div4, div3);
    			append_dev(div3, p2);
    			append_dev(div22, t7);
    			append_dev(div22, div5);
    			append_dev(div22, t8);
    			append_dev(div22, div6);
    			append_dev(div22, t10);
    			append_dev(div22, div10);
    			append_dev(div10, div7);
    			append_dev(div7, p3);
    			append_dev(div7, t12);
    			append_dev(div7, p4);
    			append_dev(div10, t14);
    			append_dev(div10, div8);
    			append_dev(div8, p5);
    			append_dev(p5, t15);
    			append_dev(p5, a);
    			append_dev(div8, t17);
    			append_dev(div8, ul0);
    			append_dev(ul0, li0);
    			append_dev(ul0, t19);
    			append_dev(ul0, li1);
    			append_dev(div10, t21);
    			append_dev(div10, div9);
    			append_dev(div9, p6);
    			append_dev(div9, t23);
    			append_dev(div9, p7);
    			append_dev(div22, t25);
    			append_dev(div22, div11);
    			append_dev(div22, t26);
    			append_dev(div22, div12);
    			append_dev(div22, t28);
    			append_dev(div22, div16);
    			append_dev(div16, div13);
    			append_dev(div13, p8);
    			append_dev(div13, t30);
    			append_dev(div13, p9);
    			append_dev(div16, t32);
    			append_dev(div16, div14);
    			append_dev(div14, p10);
    			append_dev(div14, t34);
    			append_dev(div14, p11);
    			append_dev(div16, t36);
    			append_dev(div16, div15);
    			append_dev(div15, p12);
    			append_dev(div15, t38);
    			append_dev(div15, p13);
    			append_dev(div22, t40);
    			append_dev(div22, div17);
    			append_dev(div22, t41);
    			append_dev(div22, div18);
    			append_dev(div22, t43);
    			append_dev(div22, div21);
    			append_dev(div21, div19);
    			append_dev(div19, ul1);
    			append_dev(ul1, li2);
    			append_dev(ul1, t45);
    			append_dev(ul1, li3);
    			append_dev(ul1, t47);
    			append_dev(ul1, li4);
    			append_dev(div21, t49);
    			append_dev(div21, div20);
    			append_dev(div20, ul2);
    			append_dev(ul2, li5);
    			append_dev(ul2, t51);
    			append_dev(ul2, li6);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div22);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$X.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$X($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CodeLocality', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CodeLocality> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ is_empty, listen });
    	return [];
    }

    class CodeLocality extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$X, create_fragment$X, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CodeLocality",
    			options,
    			id: create_fragment$X.name
    		});
    	}
    }

    /* src/pages/CodeNaming/CodeNaming.svelte generated by Svelte v3.43.2 */
    const file$W = "src/pages/CodeNaming/CodeNaming.svelte";

    function create_fragment$W(ctx) {
    	let div30;
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let p2;
    	let t7;
    	let div2;
    	let p3;
    	let t9;
    	let ul0;
    	let li0;
    	let t11;
    	let li1;
    	let t13;
    	let li2;
    	let t15;
    	let div4;
    	let t16;
    	let div5;
    	let t18;
    	let div8;
    	let div6;
    	let ul1;
    	let li3;
    	let t20;
    	let li4;
    	let t22;
    	let li5;
    	let t24;
    	let div7;
    	let ul2;
    	let li6;
    	let t26;
    	let li7;
    	let t28;
    	let div9;
    	let t29;
    	let div10;
    	let t31;
    	let div11;
    	let p4;
    	let t33;
    	let div14;
    	let div12;
    	let ul3;
    	let li8;
    	let t35;
    	let li9;
    	let t37;
    	let li10;
    	let t39;
    	let li11;
    	let t41;
    	let div13;
    	let ul4;
    	let li12;
    	let t43;
    	let li13;
    	let t45;
    	let div15;
    	let t46;
    	let div16;
    	let t48;
    	let div19;
    	let div17;
    	let ul5;
    	let li14;
    	let t50;
    	let li15;
    	let t52;
    	let div18;
    	let ul6;
    	let li16;
    	let t54;
    	let li17;
    	let t56;
    	let div20;
    	let t57;
    	let div21;
    	let t59;
    	let div24;
    	let div22;
    	let ul7;
    	let li18;
    	let t61;
    	let li19;
    	let t63;
    	let div23;
    	let ul8;
    	let li20;
    	let t65;
    	let li21;
    	let t67;
    	let li22;
    	let t69;
    	let div25;
    	let t70;
    	let div26;
    	let t72;
    	let div29;
    	let div27;
    	let ul9;
    	let li23;
    	let t74;
    	let li24;
    	let t76;
    	let div28;
    	let ul10;
    	let li25;
    	let t78;
    	let li26;

    	const block = {
    		c: function create() {
    			div30 = element("div");
    			div0 = element("div");
    			div0.textContent = "Naming is important";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			p0 = element("p");
    			p0.textContent = "The names you choose in your code are important. Names give meaning to\n        the structure of code.";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "Paying attention to naming is critical to software architecture.";
    			t5 = space();
    			p2 = element("p");
    			p2.textContent = "Good names make developers more productive. Well named code is easier to\n        understand, easier to maintain, less likely to have bugs, and requires\n        fewer code comments.";
    			t7 = space();
    			div2 = element("div");
    			p3 = element("p");
    			p3.textContent = "Finding the perfect name isn’t easy. It is a problem made messy by\n        natural language.";
    			t9 = space();
    			ul0 = element("ul");
    			li0 = element("li");
    			li0.textContent = "There are often multiple definitions for the same word.";
    			t11 = space();
    			li1 = element("li");
    			li1.textContent = "People can interpret words differently and have personal preferences.";
    			t13 = space();
    			li2 = element("li");
    			li2.textContent = "We build on top of a history of existing names and an evolving\n          dictionary.";
    			t15 = space();
    			div4 = element("div");
    			t16 = space();
    			div5 = element("div");
    			div5.textContent = "Always look for better names";
    			t18 = space();
    			div8 = element("div");
    			div6 = element("div");
    			ul1 = element("ul");
    			li3 = element("li");
    			li3.textContent = "Don’t try to pick a perfect name the first time. As you solve\n          problems, use what you learn about the problem space.";
    			t20 = space();
    			li4 = element("li");
    			li4.textContent = "Write sample caller code and unit tests to evaluate your names.";
    			t22 = space();
    			li5 = element("li");
    			li5.textContent = "Let developers unfamiliar with your code read it and see if they can\n          understand it without additional explanation.";
    			t24 = space();
    			div7 = element("div");
    			ul2 = element("ul");
    			li6 = element("li");
    			li6.textContent = "Comment imperfect names in code. List the names you rejected and why.";
    			t26 = space();
    			li7 = element("li");
    			li7.textContent = "Keep the cost of renaming low by using the refactoring tools available\n          in modern IDEs and version control.";
    			t28 = space();
    			div9 = element("div");
    			t29 = space();
    			div10 = element("div");
    			div10.textContent = "Prefer correct grammar";
    			t31 = space();
    			div11 = element("div");
    			p4 = element("p");
    			p4.textContent = "These are some rules for English. If you code in another language, they\n      may not apply.";
    			t33 = space();
    			div14 = element("div");
    			div12 = element("div");
    			ul3 = element("ul");
    			li8 = element("li");
    			li8.textContent = "Adjectives come before nouns.";
    			t35 = space();
    			li9 = element("li");
    			li9.textContent = "Use nouns for structures and classes.";
    			t37 = space();
    			li10 = element("li");
    			li10.textContent = "Use verbs for methods.";
    			t39 = space();
    			li11 = element("li");
    			li11.textContent = "Use proper verb tense for events to distinguish between the present\n          (e.g. onDrag) and past (e.g. onDropped).";
    			t41 = space();
    			div13 = element("div");
    			ul4 = element("ul");
    			li12 = element("li");
    			li12.textContent = "Use singular and plural to indicate if there is one or many (i.e.\n          cardinality).";
    			t43 = space();
    			li13 = element("li");
    			li13.textContent = "Avoid “verbing” nouns unless you are naming a functor. See anthimeria.";
    			t45 = space();
    			div15 = element("div");
    			t46 = space();
    			div16 = element("div");
    			div16.textContent = "Avoid distinguishing without a difference";
    			t48 = space();
    			div19 = element("div");
    			div17 = element("div");
    			ul5 = element("ul");
    			li14 = element("li");
    			li14.textContent = "Use the minimal number of words to describe the purpose of the code.";
    			t50 = space();
    			li15 = element("li");
    			li15.textContent = "Add words when you must distinguish one thing from another.";
    			t52 = space();
    			div18 = element("div");
    			ul6 = element("ul");
    			li16 = element("li");
    			li16.textContent = "Keep names short by leveraging structural hierarchy (e.g. namespaces, modules).";
    			t54 = space();
    			li17 = element("li");
    			li17.textContent = "Avoid adding empty words evident from the code structure (e.g. Object, Type, Struct, Class, Method)";
    			t56 = space();
    			div20 = element("div");
    			t57 = space();
    			div21 = element("div");
    			div21.textContent = "Prefer to be humble";
    			t59 = space();
    			div24 = element("div");
    			div22 = element("div");
    			ul7 = element("ul");
    			li18 = element("li");
    			li18.textContent = "Prefer the most concrete name related to your problem domain. While abstraction and encapsulation are important, over-abstract names create disconnect the code from the problem it is trying to solve.";
    			t61 = space();
    			li19 = element("li");
    			li19.textContent = "When faced with several good names, choose the most commonly used name.";
    			t63 = space();
    			div23 = element("div");
    			ul8 = element("ul");
    			li20 = element("li");
    			li20.textContent = "Don’t use synonyms for different things and pretend there is some subtle difference only you can see.";
    			t65 = space();
    			li21 = element("li");
    			li21.textContent = "Don’t be too clever. No one wants to read code requiring a dictionary and thesaurus.";
    			t67 = space();
    			li22 = element("li");
    			li22.textContent = "Don’t use the same names as ones likely to conflict with global scope, popular frameworks, or code keywords.";
    			t69 = space();
    			div25 = element("div");
    			t70 = space();
    			div26 = element("div");
    			div26.textContent = "Avoid false metrics";
    			t72 = space();
    			div29 = element("div");
    			div27 = element("div");
    			ul9 = element("ul");
    			li23 = element("li");
    			li23.textContent = "Don’t overvalue short names. Auto-complete and intelli-sense are everywhere.";
    			t74 = space();
    			li24 = element("li");
    			li24.textContent = "Don’t allow a desire for consistency make you stick with a bad name.";
    			t76 = space();
    			div28 = element("div");
    			ul10 = element("ul");
    			li25 = element("li");
    			li25.textContent = "Don’t choose names so they are alphabetized on disk. Modern IDEs can search and browse code easily.";
    			t78 = space();
    			li26 = element("li");
    			li26.textContent = "Choose a name for today, not tomorrow. Avoid choosing a “future-proof” name for code you haven’t written.";
    			attr_dev(div0, "class", "section-header svelte-10ybths");
    			add_location(div0, file$W, 5, 2, 112);
    			add_location(p0, file$W, 8, 6, 224);
    			add_location(p1, file$W, 12, 6, 355);
    			add_location(p2, file$W, 13, 6, 433);
    			attr_dev(div1, "class", "prose svelte-10ybths");
    			add_location(div1, file$W, 7, 4, 198);
    			add_location(p3, file$W, 20, 6, 678);
    			attr_dev(li0, "class", "svelte-10ybths");
    			add_location(li0, file$W, 26, 8, 814);
    			attr_dev(li1, "class", "svelte-10ybths");
    			add_location(li1, file$W, 27, 8, 887);
    			attr_dev(li2, "class", "svelte-10ybths");
    			add_location(li2, file$W, 30, 8, 994);
    			add_location(ul0, file$W, 25, 6, 801);
    			attr_dev(div2, "class", "prose svelte-10ybths");
    			add_location(div2, file$W, 19, 4, 652);
    			attr_dev(div3, "class", "two-columns svelte-10ybths");
    			add_location(div3, file$W, 6, 2, 168);
    			attr_dev(div4, "class", "separator svelte-10ybths");
    			add_location(div4, file$W, 37, 2, 1142);
    			attr_dev(div5, "class", "section-header svelte-10ybths");
    			add_location(div5, file$W, 38, 2, 1170);
    			attr_dev(li3, "class", "svelte-10ybths");
    			add_location(li3, file$W, 42, 8, 1303);
    			attr_dev(li4, "class", "svelte-10ybths");
    			add_location(li4, file$W, 46, 8, 1466);
    			attr_dev(li5, "class", "svelte-10ybths");
    			add_location(li5, file$W, 47, 8, 1547);
    			attr_dev(ul1, "class", "svelte-10ybths");
    			add_location(ul1, file$W, 41, 6, 1290);
    			attr_dev(div6, "class", "list svelte-10ybths");
    			add_location(div6, file$W, 40, 4, 1265);
    			attr_dev(li6, "class", "svelte-10ybths");
    			add_location(li6, file$W, 55, 8, 1766);
    			attr_dev(li7, "class", "svelte-10ybths");
    			add_location(li7, file$W, 58, 8, 1873);
    			attr_dev(ul2, "class", "svelte-10ybths");
    			add_location(ul2, file$W, 54, 6, 1753);
    			attr_dev(div7, "class", "list svelte-10ybths");
    			add_location(div7, file$W, 53, 4, 1728);
    			attr_dev(div8, "class", "two-columns svelte-10ybths");
    			add_location(div8, file$W, 39, 2, 1235);
    			attr_dev(div9, "class", "separator svelte-10ybths");
    			add_location(div9, file$W, 65, 2, 2053);
    			attr_dev(div10, "class", "section-header svelte-10ybths");
    			add_location(div10, file$W, 66, 2, 2081);
    			add_location(p4, file$W, 68, 4, 2172);
    			attr_dev(div11, "class", "section-prose svelte-10ybths");
    			add_location(div11, file$W, 67, 2, 2140);
    			attr_dev(li8, "class", "svelte-10ybths");
    			add_location(li8, file$W, 76, 8, 2363);
    			attr_dev(li9, "class", "svelte-10ybths");
    			add_location(li9, file$W, 77, 8, 2410);
    			attr_dev(li10, "class", "svelte-10ybths");
    			add_location(li10, file$W, 78, 8, 2465);
    			attr_dev(li11, "class", "svelte-10ybths");
    			add_location(li11, file$W, 79, 8, 2505);
    			attr_dev(ul3, "class", "svelte-10ybths");
    			add_location(ul3, file$W, 75, 6, 2350);
    			attr_dev(div12, "class", "list svelte-10ybths");
    			add_location(div12, file$W, 74, 4, 2325);
    			attr_dev(li12, "class", "svelte-10ybths");
    			add_location(li12, file$W, 87, 8, 2718);
    			attr_dev(li13, "class", "svelte-10ybths");
    			add_location(li13, file$W, 91, 8, 2845);
    			attr_dev(ul4, "class", "svelte-10ybths");
    			add_location(ul4, file$W, 86, 6, 2705);
    			attr_dev(div13, "class", "list svelte-10ybths");
    			add_location(div13, file$W, 85, 4, 2680);
    			attr_dev(div14, "class", "two-columns svelte-10ybths");
    			add_location(div14, file$W, 73, 2, 2295);
    			attr_dev(div15, "class", "separator svelte-10ybths");
    			add_location(div15, file$W, 97, 2, 2981);
    			attr_dev(div16, "class", "section-header svelte-10ybths");
    			add_location(div16, file$W, 98, 2, 3009);
    			attr_dev(li14, "class", "svelte-10ybths");
    			add_location(li14, file$W, 102, 8, 3156);
    			attr_dev(li15, "class", "svelte-10ybths");
    			add_location(li15, file$W, 103, 8, 3242);
    			attr_dev(ul5, "class", "svelte-10ybths");
    			add_location(ul5, file$W, 101, 6, 3143);
    			attr_dev(div17, "class", "list svelte-10ybths");
    			add_location(div17, file$W, 100, 4, 3118);
    			attr_dev(li16, "class", "svelte-10ybths");
    			add_location(li16, file$W, 108, 8, 3384);
    			attr_dev(li17, "class", "svelte-10ybths");
    			add_location(li17, file$W, 109, 8, 3481);
    			attr_dev(ul6, "class", "svelte-10ybths");
    			add_location(ul6, file$W, 107, 6, 3371);
    			attr_dev(div18, "class", "list svelte-10ybths");
    			add_location(div18, file$W, 106, 4, 3346);
    			attr_dev(div19, "class", "two-columns svelte-10ybths");
    			add_location(div19, file$W, 99, 2, 3088);
    			attr_dev(div20, "class", "separator svelte-10ybths");
    			add_location(div20, file$W, 115, 2, 3646);
    			attr_dev(div21, "class", "section-header svelte-10ybths");
    			add_location(div21, file$W, 116, 2, 3674);
    			attr_dev(li18, "class", "svelte-10ybths");
    			add_location(li18, file$W, 120, 8, 3799);
    			attr_dev(li19, "class", "svelte-10ybths");
    			add_location(li19, file$W, 121, 8, 4016);
    			attr_dev(ul7, "class", "svelte-10ybths");
    			add_location(ul7, file$W, 119, 6, 3786);
    			attr_dev(div22, "class", "list svelte-10ybths");
    			add_location(div22, file$W, 118, 4, 3761);
    			attr_dev(li20, "class", "svelte-10ybths");
    			add_location(li20, file$W, 126, 8, 4170);
    			attr_dev(li21, "class", "svelte-10ybths");
    			add_location(li21, file$W, 127, 8, 4289);
    			attr_dev(li22, "class", "svelte-10ybths");
    			add_location(li22, file$W, 130, 8, 4411);
    			attr_dev(ul8, "class", "svelte-10ybths");
    			add_location(ul8, file$W, 125, 6, 4157);
    			attr_dev(div23, "class", "list svelte-10ybths");
    			add_location(div23, file$W, 124, 4, 4132);
    			attr_dev(div24, "class", "two-columns svelte-10ybths");
    			add_location(div24, file$W, 117, 2, 3731);
    			attr_dev(div25, "class", "separator svelte-10ybths");
    			add_location(div25, file$W, 134, 2, 4565);
    			attr_dev(div26, "class", "section-header svelte-10ybths");
    			add_location(div26, file$W, 135, 2, 4593);
    			attr_dev(li23, "class", "svelte-10ybths");
    			add_location(li23, file$W, 139, 8, 4718);
    			attr_dev(li24, "class", "svelte-10ybths");
    			add_location(li24, file$W, 140, 8, 4812);
    			attr_dev(ul9, "class", "svelte-10ybths");
    			add_location(ul9, file$W, 138, 6, 4705);
    			attr_dev(div27, "class", "list svelte-10ybths");
    			add_location(div27, file$W, 137, 4, 4680);
    			attr_dev(li25, "class", "svelte-10ybths");
    			add_location(li25, file$W, 145, 8, 4963);
    			attr_dev(li26, "class", "svelte-10ybths");
    			add_location(li26, file$W, 146, 8, 5080);
    			attr_dev(ul10, "class", "svelte-10ybths");
    			add_location(ul10, file$W, 144, 6, 4950);
    			attr_dev(div28, "class", "list svelte-10ybths");
    			add_location(div28, file$W, 143, 4, 4925);
    			attr_dev(div29, "class", "two-columns svelte-10ybths");
    			add_location(div29, file$W, 136, 2, 4650);
    			attr_dev(div30, "class", "root centered-column  svelte-10ybths");
    			add_location(div30, file$W, 4, 0, 74);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div30, anchor);
    			append_dev(div30, div0);
    			append_dev(div30, t1);
    			append_dev(div30, div3);
    			append_dev(div3, div1);
    			append_dev(div1, p0);
    			append_dev(div1, t3);
    			append_dev(div1, p1);
    			append_dev(div1, t5);
    			append_dev(div1, p2);
    			append_dev(div3, t7);
    			append_dev(div3, div2);
    			append_dev(div2, p3);
    			append_dev(div2, t9);
    			append_dev(div2, ul0);
    			append_dev(ul0, li0);
    			append_dev(ul0, t11);
    			append_dev(ul0, li1);
    			append_dev(ul0, t13);
    			append_dev(ul0, li2);
    			append_dev(div30, t15);
    			append_dev(div30, div4);
    			append_dev(div30, t16);
    			append_dev(div30, div5);
    			append_dev(div30, t18);
    			append_dev(div30, div8);
    			append_dev(div8, div6);
    			append_dev(div6, ul1);
    			append_dev(ul1, li3);
    			append_dev(ul1, t20);
    			append_dev(ul1, li4);
    			append_dev(ul1, t22);
    			append_dev(ul1, li5);
    			append_dev(div8, t24);
    			append_dev(div8, div7);
    			append_dev(div7, ul2);
    			append_dev(ul2, li6);
    			append_dev(ul2, t26);
    			append_dev(ul2, li7);
    			append_dev(div30, t28);
    			append_dev(div30, div9);
    			append_dev(div30, t29);
    			append_dev(div30, div10);
    			append_dev(div30, t31);
    			append_dev(div30, div11);
    			append_dev(div11, p4);
    			append_dev(div30, t33);
    			append_dev(div30, div14);
    			append_dev(div14, div12);
    			append_dev(div12, ul3);
    			append_dev(ul3, li8);
    			append_dev(ul3, t35);
    			append_dev(ul3, li9);
    			append_dev(ul3, t37);
    			append_dev(ul3, li10);
    			append_dev(ul3, t39);
    			append_dev(ul3, li11);
    			append_dev(div14, t41);
    			append_dev(div14, div13);
    			append_dev(div13, ul4);
    			append_dev(ul4, li12);
    			append_dev(ul4, t43);
    			append_dev(ul4, li13);
    			append_dev(div30, t45);
    			append_dev(div30, div15);
    			append_dev(div30, t46);
    			append_dev(div30, div16);
    			append_dev(div30, t48);
    			append_dev(div30, div19);
    			append_dev(div19, div17);
    			append_dev(div17, ul5);
    			append_dev(ul5, li14);
    			append_dev(ul5, t50);
    			append_dev(ul5, li15);
    			append_dev(div19, t52);
    			append_dev(div19, div18);
    			append_dev(div18, ul6);
    			append_dev(ul6, li16);
    			append_dev(ul6, t54);
    			append_dev(ul6, li17);
    			append_dev(div30, t56);
    			append_dev(div30, div20);
    			append_dev(div30, t57);
    			append_dev(div30, div21);
    			append_dev(div30, t59);
    			append_dev(div30, div24);
    			append_dev(div24, div22);
    			append_dev(div22, ul7);
    			append_dev(ul7, li18);
    			append_dev(ul7, t61);
    			append_dev(ul7, li19);
    			append_dev(div24, t63);
    			append_dev(div24, div23);
    			append_dev(div23, ul8);
    			append_dev(ul8, li20);
    			append_dev(ul8, t65);
    			append_dev(ul8, li21);
    			append_dev(ul8, t67);
    			append_dev(ul8, li22);
    			append_dev(div30, t69);
    			append_dev(div30, div25);
    			append_dev(div30, t70);
    			append_dev(div30, div26);
    			append_dev(div30, t72);
    			append_dev(div30, div29);
    			append_dev(div29, div27);
    			append_dev(div27, ul9);
    			append_dev(ul9, li23);
    			append_dev(ul9, t74);
    			append_dev(ul9, li24);
    			append_dev(div29, t76);
    			append_dev(div29, div28);
    			append_dev(div28, ul10);
    			append_dev(ul10, li25);
    			append_dev(ul10, t78);
    			append_dev(ul10, li26);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div30);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$W.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$W($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CodeNaming', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CodeNaming> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ is_empty, listen });
    	return [];
    }

    class CodeNaming extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$W, create_fragment$W, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CodeNaming",
    			options,
    			id: create_fragment$W.name
    		});
    	}
    }

    var img$i = "data:image/png;base64,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";

    var img$h = "data:image/png;base64,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";

    var img$g = "data:image/png;base64,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";

    /* src/pages/PrettyGoodNLP/StepCallout.svelte generated by Svelte v3.43.2 */

    const file$V = "src/pages/PrettyGoodNLP/StepCallout.svelte";

    function create_fragment$V(ctx) {
    	let div3;
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let t2;
    	let div2;
    	let t3;
    	let div3_class_value;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			t0 = text(/*step*/ ctx[0]);
    			t1 = space();
    			div1 = element("div");
    			t2 = space();
    			div2 = element("div");
    			t3 = text(/*name*/ ctx[1]);
    			attr_dev(div0, "class", "number svelte-gam5n8");
    			add_location(div0, file$V, 12, 2, 258);
    			attr_dev(div1, "class", "line svelte-gam5n8");
    			add_location(div1, file$V, 13, 2, 293);
    			attr_dev(div2, "class", "name svelte-gam5n8");
    			add_location(div2, file$V, 14, 2, 316);
    			attr_dev(div3, "class", div3_class_value = "" + (null_to_empty(/*stepClassName*/ ctx[2]) + " svelte-gam5n8"));
    			add_location(div3, file$V, 11, 0, 228);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);
    			append_dev(div0, t0);
    			append_dev(div3, t1);
    			append_dev(div3, div1);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, t3);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*step*/ 1) set_data_dev(t0, /*step*/ ctx[0]);
    			if (dirty & /*name*/ 2) set_data_dev(t3, /*name*/ ctx[1]);

    			if (dirty & /*stepClassName*/ 4 && div3_class_value !== (div3_class_value = "" + (null_to_empty(/*stepClassName*/ ctx[2]) + " svelte-gam5n8"))) {
    				attr_dev(div3, "class", div3_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$V.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$V($$self, $$props, $$invalidate) {
    	let stepClassName;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('StepCallout', slots, []);
    	let { step } = $$props;
    	let { name } = $$props;
    	let { align } = $$props;
    	const writable_props = ['step', 'name', 'align'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<StepCallout> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('step' in $$props) $$invalidate(0, step = $$props.step);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    		if ('align' in $$props) $$invalidate(3, align = $$props.align);
    	};

    	$$self.$capture_state = () => ({ step, name, align, stepClassName });

    	$$self.$inject_state = $$props => {
    		if ('step' in $$props) $$invalidate(0, step = $$props.step);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    		if ('align' in $$props) $$invalidate(3, align = $$props.align);
    		if ('stepClassName' in $$props) $$invalidate(2, stepClassName = $$props.stepClassName);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*align, step*/ 9) {
    			$$invalidate(2, stepClassName = align === "toggle"
    			? step % 2 === 0 ? "step right" : "step left"
    			: `step ${align}`);
    		}
    	};

    	return [step, name, stepClassName, align];
    }

    class StepCallout extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$V, create_fragment$V, safe_not_equal, { step: 0, name: 1, align: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "StepCallout",
    			options,
    			id: create_fragment$V.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*step*/ ctx[0] === undefined && !('step' in props)) {
    			console.warn("<StepCallout> was created without expected prop 'step'");
    		}

    		if (/*name*/ ctx[1] === undefined && !('name' in props)) {
    			console.warn("<StepCallout> was created without expected prop 'name'");
    		}

    		if (/*align*/ ctx[3] === undefined && !('align' in props)) {
    			console.warn("<StepCallout> was created without expected prop 'align'");
    		}
    	}

    	get step() {
    		throw new Error("<StepCallout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set step(value) {
    		throw new Error("<StepCallout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get name() {
    		throw new Error("<StepCallout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<StepCallout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get align() {
    		throw new Error("<StepCallout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set align(value) {
    		throw new Error("<StepCallout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/pages/PrettyGoodNLP/Step.svelte generated by Svelte v3.43.2 */
    const file$U = "src/pages/PrettyGoodNLP/Step.svelte";

    function create_fragment$U(ctx) {
    	let div2;
    	let div0;
    	let stepcallout;
    	let t;
    	let div1;
    	let div2_class_value;
    	let div2_resize_listener;
    	let current;

    	stepcallout = new StepCallout({
    			props: {
    				step: /*stepNumber*/ ctx[0],
    				name: /*name*/ ctx[1],
    				align: /*calloutAlignment*/ ctx[3]
    			},
    			$$inline: true
    		});

    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			create_component(stepcallout.$$.fragment);
    			t = space();
    			div1 = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div0, "class", "callout svelte-aapv7n");
    			add_location(div0, file$U, 9, 2, 312);
    			attr_dev(div1, "class", "prose svelte-aapv7n");
    			add_location(div1, file$U, 12, 2, 415);
    			attr_dev(div2, "class", div2_class_value = "" + (null_to_empty(/*stepClassName*/ ctx[4]) + " svelte-aapv7n"));
    			add_render_callback(() => /*div2_elementresize_handler*/ ctx[7].call(div2));
    			add_location(div2, file$U, 8, 0, 265);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			mount_component(stepcallout, div0, null);
    			append_dev(div2, t);
    			append_dev(div2, div1);

    			if (default_slot) {
    				default_slot.m(div1, null);
    			}

    			div2_resize_listener = add_resize_listener(div2, /*div2_elementresize_handler*/ ctx[7].bind(div2));
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const stepcallout_changes = {};
    			if (dirty & /*stepNumber*/ 1) stepcallout_changes.step = /*stepNumber*/ ctx[0];
    			if (dirty & /*name*/ 2) stepcallout_changes.name = /*name*/ ctx[1];
    			if (dirty & /*calloutAlignment*/ 8) stepcallout_changes.align = /*calloutAlignment*/ ctx[3];
    			stepcallout.$set(stepcallout_changes);

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			if (!current || dirty & /*stepClassName*/ 16 && div2_class_value !== (div2_class_value = "" + (null_to_empty(/*stepClassName*/ ctx[4]) + " svelte-aapv7n"))) {
    				attr_dev(div2, "class", div2_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(stepcallout.$$.fragment, local);
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(stepcallout.$$.fragment, local);
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_component(stepcallout);
    			if (default_slot) default_slot.d(detaching);
    			div2_resize_listener();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$U.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$U($$self, $$props, $$invalidate) {
    	let stepClassName;
    	let calloutAlignment;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Step', slots, ['default']);
    	let { stepNumber } = $$props;
    	let { name } = $$props;
    	let clientWidth;
    	const writable_props = ['stepNumber', 'name'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Step> was created with unknown prop '${key}'`);
    	});

    	function div2_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		$$invalidate(2, clientWidth);
    	}

    	$$self.$$set = $$props => {
    		if ('stepNumber' in $$props) $$invalidate(0, stepNumber = $$props.stepNumber);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		StepCallout,
    		stepNumber,
    		name,
    		clientWidth,
    		calloutAlignment,
    		stepClassName
    	});

    	$$self.$inject_state = $$props => {
    		if ('stepNumber' in $$props) $$invalidate(0, stepNumber = $$props.stepNumber);
    		if ('name' in $$props) $$invalidate(1, name = $$props.name);
    		if ('clientWidth' in $$props) $$invalidate(2, clientWidth = $$props.clientWidth);
    		if ('calloutAlignment' in $$props) $$invalidate(3, calloutAlignment = $$props.calloutAlignment);
    		if ('stepClassName' in $$props) $$invalidate(4, stepClassName = $$props.stepClassName);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*stepNumber*/ 1) {
    			$$invalidate(4, stepClassName = stepNumber % 2 === 0 ? "step even" : "step odd");
    		}

    		if ($$self.$$.dirty & /*clientWidth*/ 4) {
    			$$invalidate(3, calloutAlignment = clientWidth > 900 ? "toggle" : "left");
    		}
    	};

    	return [
    		stepNumber,
    		name,
    		clientWidth,
    		calloutAlignment,
    		stepClassName,
    		$$scope,
    		slots,
    		div2_elementresize_handler
    	];
    }

    class Step extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$U, create_fragment$U, safe_not_equal, { stepNumber: 0, name: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Step",
    			options,
    			id: create_fragment$U.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*stepNumber*/ ctx[0] === undefined && !('stepNumber' in props)) {
    			console.warn("<Step> was created without expected prop 'stepNumber'");
    		}

    		if (/*name*/ ctx[1] === undefined && !('name' in props)) {
    			console.warn("<Step> was created without expected prop 'name'");
    		}
    	}

    	get stepNumber() {
    		throw new Error("<Step>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set stepNumber(value) {
    		throw new Error("<Step>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get name() {
    		throw new Error("<Step>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Step>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/pages/PrettyGoodNLP/PrettyGoodNlp.svelte generated by Svelte v3.43.2 */
    const file$T = "src/pages/PrettyGoodNLP/PrettyGoodNlp.svelte";

    // (12:2) <Step stepNumber="1" name="Strings">
    function create_default_slot_15(ctx) {
    	let p0;
    	let t1;
    	let img;
    	let img_src_value;
    	let t2;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "The first thing I did was break up a sentence into parts. I defined a\n      string for each part to look for in the sentence. I gave a point for each\n      time a string exact matched anywhere in the sentence. The score was the\n      number of matches divided by the number of parts.";
    			t1 = space();
    			img = element("img");
    			t2 = space();
    			p1 = element("p");
    			p1.textContent = "Next, I supported alternatives strings for each part of a sentence. I\n      defined a set of strings for each part and gave a point if one of the\n      strings in the set matched. In machine learning, this is often called a\n      phrase dictionary.";
    			add_location(p0, file$T, 12, 4, 408);
    			attr_dev(img, "class", "image svelte-g3hko2");
    			if (!src_url_equal(img.src, img_src_value = img$i)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character using a marionette");
    			add_location(img, file$T, 19, 4, 716);
    			add_location(p1, file$T, 24, 4, 833);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, img, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15.name,
    		type: "slot",
    		source: "(12:2) <Step stepNumber=\\\"1\\\" name=\\\"Strings\\\">",
    		ctx
    	});

    	return block;
    }

    // (32:2) <Step stepNumber="2" name="Words">
    function create_default_slot_14(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "I now needed to prevent substring false positives such as matching \"the\"\n      within \"there\". To do this, I needed to be words rather than characters. I\n      created a basic tokenizer that breaks up words by spaces, punctuation, and\n      other delimiters.";
    			add_location(p, file$T, 32, 4, 1152);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14.name,
    		type: "slot",
    		source: "(32:2) <Step stepNumber=\\\"2\\\" name=\\\"Words\\\">",
    		ctx
    	});

    	return block;
    }

    // (40:2) <Step stepNumber="3" name="Phrases">
    function create_default_slot_13(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "I wanted a search better suited for finding words in sentences rather than\n      only character matches. I knew about the Trie tree structure which is used\n      in full-text search. It is very efficient in finding multiple possible\n      phrases within a sentence at once. This was exactly what I needed for\n      matching strings in my phrase dictionary.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "To implement a Trie search, I defined the Trie node data structure. I\n      create a character range, a token range, and a token map to translate\n      between them. I discovered and fixed several issues with the pseudo-code\n      description of the Trie algorithm I found online. I wrapped up by adding\n      an ID system to identify which phrase I matched. This let me handle\n      matching a shorter phrases within matches of longer phrases.";
    			add_location(p0, file$T, 40, 4, 1483);
    			add_location(p1, file$T, 47, 4, 1863);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(40:2) <Step stepNumber=\\\"3\\\" name=\\\"Phrases\\\">",
    		ctx
    	});

    	return block;
    }

    // (57:2) <Step stepNumber="4" name="Patterns">
    function create_default_slot_12(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "I knew that phrase matching would only go so far. I needed to be able to\n      match string patterns like dates, URLs, or zip codes. I added regular\n      expression matching with some constraints built in to match phrases in a\n      sentence.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "While, I'm pretty good with regular expressions, I dread them. Even a\n      simple pattern requires a bit of complicated syntax that can be difficult\n      to figure out and maintain. To make pattern matching easier, I added a\n      string format to express simple patterns. For example a social security\n      number could be ###-##-####.";
    			add_location(p0, file$T, 57, 4, 2381);
    			add_location(p1, file$T, 63, 4, 2648);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(57:2) <Step stepNumber=\\\"4\\\" name=\\\"Patterns\\\">",
    		ctx
    	});

    	return block;
    }

    // (72:2) <Step stepNumber="5" name="Never Parts"     >
    function create_default_slot_11(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "There are words and phrases that negate meaning or would indicate a\n      different intention. I added defining never parts using the same ways to\n      match as parts. If any one of the never parts matches, it results in a\n      zero score.";
    			add_location(p, file$T, 72, 5, 3064);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(72:2) <Step stepNumber=\\\"5\\\" name=\\\"Never Parts\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (83:2) <Step stepNumber="6" name="Order"     >
    function create_default_slot_10(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "At this point, we can effectively match phrases and patterns in a\n      sentence. The initial scoring left a lot to be desired, but it needed\n      to remain straightforward and deterministic.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Beyond counting matches, the order of matches is an important signal to\n      consider. I increased the score for each in-order match. Since many\n      sentences are understandable even if they are completely out of order, I\n      capped the penalty. I also add a flag to each part definition to ignore\n      its order during scoring.";
    			add_location(p0, file$T, 84, 4, 3456);
    			add_location(p1, file$T, 89, 4, 3672);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(83:2) <Step stepNumber=\\\"6\\\" name=\\\"Order\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (98:2) <Step stepNumber="7" name="Weight"     >
    function create_default_slot_9(ctx) {
    	let p0;
    	let t1;
    	let img;
    	let img_src_value;
    	let t2;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "Some parts of a sentence are more important to match that others. I added\n      a weight, with a default of 1, to each part.";
    			t1 = space();
    			img = element("img");
    			t2 = space();
    			p1 = element("p");
    			p1.textContent = "I updated my scoring algorithm to measure each match multiplied by its\n      weight. This causes the score to be the sum of the relative weights rather\n      than counts.";
    			add_location(p0, file$T, 98, 5, 4078);
    			attr_dev(img, "class", "image svelte-g3hko2");
    			if (!src_url_equal(img.src, img_src_value = img$h)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character lifting weights");
    			add_location(img, file$T, 102, 4, 4226);
    			add_location(p1, file$T, 107, 4, 4335);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, img, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(98:2) <Step stepNumber=\\\"7\\\" name=\\\"Weight\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (114:2) <Step stepNumber="8" name="Noise">
    function create_default_slot_8(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "When there are parts that don't match, it can add confusion to\n      understanding the sentence. I decreased the score for each noise token.\n      This noise shouldn't signifcantly reduce score, so I capped this penalty\n      too.";
    			add_location(p, file$T, 114, 4, 4576);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(114:2) <Step stepNumber=\\\"8\\\" name=\\\"Noise\\\">",
    		ctx
    	});

    	return block;
    }

    // (122:2) <Step stepNumber="9" name="Required">
    function create_default_slot_7(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Some parts of a sentence must be there to match the intent of the\n      sentence. To handle required parts, I added a flag to each part where if\n      that part does not match, the resulting score is zero.";
    			add_location(p, file$T, 122, 4, 4880);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(122:2) <Step stepNumber=\\\"9\\\" name=\\\"Required\\\">",
    		ctx
    	});

    	return block;
    }

    // (129:2) <Step stepNumber="10" name="Optional">
    function create_default_slot_6(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Other parts are nice to have, but completely optional. If a weight is set\n      to zero, that parts score is not considered and it becomes optional.";
    			add_location(p, file$T, 129, 4, 5160);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(129:2) <Step stepNumber=\\\"10\\\" name=\\\"Optional\\\">",
    		ctx
    	});

    	return block;
    }

    // (138:2) <Step stepNumber="11" name="Variables"     >
    function create_default_slot_5(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "Now we have a recognizer that has good ways to match parts of a\n      sentence and return a score based on ordering, noise, relative\n      weights, and required/optional parts. We can define an set of examples\n      and expected parts to find out how well a sentence matches the intent.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "I added a variable name field to each part. When a part with a variable\n      matches, it is included in the recognition result. Because a part may have\n      multiple matches that vary by start position and length, each variable\n      match can return an array of matching values. The values are sorted from\n      best to worst match.";
    			add_location(p0, file$T, 138, 5, 5462);
    			add_location(p1, file$T, 144, 4, 5772);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(138:2) <Step stepNumber=\\\"11\\\" name=\\\"Variables\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (153:2) <Step stepNumber="12" name="Ranking"     >
    function create_default_slot_4(ctx) {
    	let p;
    	let t1;
    	let ol;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "I wrote a match sorting algorithm that orders the variable values in the\n      context of matching parts across the sentence.";
    			t1 = space();
    			ol = element("ol");
    			li0 = element("li");
    			li0.textContent = "new matches: A match from a previous part is sorted after new matches";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "after previous matches: A match that starts after the best previous part\n        match is sorted earlier than other matches.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "earlier matches: A match starting earlier in the sentence is sorted\n        earlier that other matches";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "longer: A match with greater length is sorted earlier than other matches";
    			add_location(p, file$T, 153, 5, 6181);
    			add_location(li0, file$T, 158, 6, 6341);
    			add_location(li1, file$T, 161, 6, 6442);
    			add_location(li2, file$T, 165, 6, 6598);
    			add_location(li3, file$T, 169, 6, 6732);
    			add_location(ol, file$T, 157, 4, 6330);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, ol, anchor);
    			append_dev(ol, li0);
    			append_dev(ol, t3);
    			append_dev(ol, li1);
    			append_dev(ol, t5);
    			append_dev(ol, li2);
    			append_dev(ol, t7);
    			append_dev(ol, li3);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(ol);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(153:2) <Step stepNumber=\\\"12\\\" name=\\\"Ranking\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (178:2) <Step stepNumber="13" name="Parse"     >
    function create_default_slot_3(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "In order to debug, I wanted to be able to understand exactly what the\n      recognizer matched. I added text ranges for each match, of each part, of\n      each example to the results. I also returned the token map to inspect the\n      text ranges by token or character range.";
    			add_location(p, file$T, 178, 5, 6978);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(178:2) <Step stepNumber=\\\"13\\\" name=\\\"Parse\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (187:2) <Step stepNumber="14" name="Metrics"     >
    function create_default_slot_2(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "It is also helpfulto know how the recognizer scored a sentence. I added\n      the set of metrics that are used to calculate the score.";
    			add_location(p, file$T, 187, 5, 7328);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(187:2) <Step stepNumber=\\\"14\\\" name=\\\"Metrics\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (194:2) <Step stepNumber="15" name="Sharing"     >
    function create_default_slot_1(ctx) {
    	let img;
    	let img_src_value;
    	let t0;
    	let p;

    	const block = {
    		c: function create() {
    			img = element("img");
    			t0 = space();
    			p = element("p");
    			p.textContent = "Any application trying to recognize text is probably going to want to\n      recognize multiple different intents. Some of these intents may have\n      examples that have similar or duplicate phrases or patterns for their\n      parts. I added a shared dictionary of phrases and patterns to allow the\n      caller to reference them from an intent without having to retype them.";
    			attr_dev(img, "class", "image svelte-g3hko2");
    			if (!src_url_equal(img.src, img_src_value = img$g)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets characters sharing a heart");
    			add_location(img, file$T, 194, 5, 7537);
    			add_location(p, file$T, 199, 4, 7653);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(194:2) <Step stepNumber=\\\"15\\\" name=\\\"Sharing\\\"     >",
    		ctx
    	});

    	return block;
    }

    // (209:2) <Step stepNumber="16" name="Customization"     >
    function create_default_slot(ctx) {
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "The recognizer interface is defined to as a general purpose method for\n      text recognition. It takes the text to recognize, the intent, and some\n      options. It returns a score between 0 and 1 (inclusive) and the extracted\n      variable name/values pairs. Another implementation could be substituted\n      for this recognizer.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "The options also allow some limited customization. A different tokenizer\n      can be passed for handling different languages. The noise and out-of-order\n      penalties can be adjusted.";
    			add_location(p0, file$T, 209, 5, 8109);
    			add_location(p1, file$T, 216, 4, 8465);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(209:2) <Step stepNumber=\\\"16\\\" name=\\\"Customization\\\"     >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$T(ctx) {
    	let div9;
    	let div0;
    	let t0;
    	let h10;
    	let t2;
    	let div1;
    	let t3;
    	let step0;
    	let t4;
    	let step1;
    	let t5;
    	let step2;
    	let t6;
    	let step3;
    	let t7;
    	let step4;
    	let t8;
    	let div2;
    	let t9;
    	let h11;
    	let t11;
    	let div3;
    	let t12;
    	let step5;
    	let t13;
    	let step6;
    	let t14;
    	let step7;
    	let t15;
    	let step8;
    	let t16;
    	let step9;
    	let t17;
    	let div4;
    	let t18;
    	let h12;
    	let t20;
    	let div5;
    	let t21;
    	let step10;
    	let t22;
    	let step11;
    	let t23;
    	let div6;
    	let t24;
    	let h13;
    	let t26;
    	let div7;
    	let t27;
    	let step12;
    	let t28;
    	let step13;
    	let t29;
    	let step14;
    	let t30;
    	let step15;
    	let t31;
    	let div8;
    	let current;

    	step0 = new Step({
    			props: {
    				stepNumber: "1",
    				name: "Strings",
    				$$slots: { default: [create_default_slot_15] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step1 = new Step({
    			props: {
    				stepNumber: "2",
    				name: "Words",
    				$$slots: { default: [create_default_slot_14] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step2 = new Step({
    			props: {
    				stepNumber: "3",
    				name: "Phrases",
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step3 = new Step({
    			props: {
    				stepNumber: "4",
    				name: "Patterns",
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step4 = new Step({
    			props: {
    				stepNumber: "5",
    				name: "Never Parts",
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step5 = new Step({
    			props: {
    				stepNumber: "6",
    				name: "Order",
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step6 = new Step({
    			props: {
    				stepNumber: "7",
    				name: "Weight",
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step7 = new Step({
    			props: {
    				stepNumber: "8",
    				name: "Noise",
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step8 = new Step({
    			props: {
    				stepNumber: "9",
    				name: "Required",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step9 = new Step({
    			props: {
    				stepNumber: "10",
    				name: "Optional",
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step10 = new Step({
    			props: {
    				stepNumber: "11",
    				name: "Variables",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step11 = new Step({
    			props: {
    				stepNumber: "12",
    				name: "Ranking",
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step12 = new Step({
    			props: {
    				stepNumber: "13",
    				name: "Parse",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step13 = new Step({
    			props: {
    				stepNumber: "14",
    				name: "Metrics",
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step14 = new Step({
    			props: {
    				stepNumber: "15",
    				name: "Sharing",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	step15 = new Step({
    			props: {
    				stepNumber: "16",
    				name: "Customization",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div0 = element("div");
    			t0 = space();
    			h10 = element("h1");
    			h10.textContent = "Matching";
    			t2 = space();
    			div1 = element("div");
    			t3 = space();
    			create_component(step0.$$.fragment);
    			t4 = space();
    			create_component(step1.$$.fragment);
    			t5 = space();
    			create_component(step2.$$.fragment);
    			t6 = space();
    			create_component(step3.$$.fragment);
    			t7 = space();
    			create_component(step4.$$.fragment);
    			t8 = space();
    			div2 = element("div");
    			t9 = space();
    			h11 = element("h1");
    			h11.textContent = "Scoring";
    			t11 = space();
    			div3 = element("div");
    			t12 = space();
    			create_component(step5.$$.fragment);
    			t13 = space();
    			create_component(step6.$$.fragment);
    			t14 = space();
    			create_component(step7.$$.fragment);
    			t15 = space();
    			create_component(step8.$$.fragment);
    			t16 = space();
    			create_component(step9.$$.fragment);
    			t17 = space();
    			div4 = element("div");
    			t18 = space();
    			h12 = element("h1");
    			h12.textContent = "Extraction";
    			t20 = space();
    			div5 = element("div");
    			t21 = space();
    			create_component(step10.$$.fragment);
    			t22 = space();
    			create_component(step11.$$.fragment);
    			t23 = space();
    			div6 = element("div");
    			t24 = space();
    			h13 = element("h1");
    			h13.textContent = "Bells and Whistles";
    			t26 = space();
    			div7 = element("div");
    			t27 = space();
    			create_component(step12.$$.fragment);
    			t28 = space();
    			create_component(step13.$$.fragment);
    			t29 = space();
    			create_component(step14.$$.fragment);
    			t30 = space();
    			create_component(step15.$$.fragment);
    			t31 = space();
    			div8 = element("div");
    			attr_dev(div0, "class", "separator svelte-g3hko2");
    			add_location(div0, file$T, 8, 2, 291);
    			attr_dev(h10, "class", "svelte-g3hko2");
    			add_location(h10, file$T, 9, 2, 319);
    			attr_dev(div1, "class", "separator svelte-g3hko2");
    			add_location(div1, file$T, 10, 2, 339);
    			attr_dev(div2, "class", "separator svelte-g3hko2");
    			add_location(div2, file$T, 79, 2, 3337);
    			attr_dev(h11, "class", "svelte-g3hko2");
    			add_location(h11, file$T, 80, 2, 3365);
    			attr_dev(div3, "class", "separator svelte-g3hko2");
    			add_location(div3, file$T, 81, 2, 3384);
    			attr_dev(div4, "class", "separator svelte-g3hko2");
    			add_location(div4, file$T, 134, 2, 5340);
    			attr_dev(h12, "class", "svelte-g3hko2");
    			add_location(h12, file$T, 135, 2, 5368);
    			attr_dev(div5, "class", "separator svelte-g3hko2");
    			add_location(div5, file$T, 136, 2, 5390);
    			attr_dev(div6, "class", "separator svelte-g3hko2");
    			add_location(div6, file$T, 174, 2, 6852);
    			attr_dev(h13, "class", "svelte-g3hko2");
    			add_location(h13, file$T, 175, 2, 6880);
    			attr_dev(div7, "class", "separator svelte-g3hko2");
    			add_location(div7, file$T, 176, 2, 6910);
    			attr_dev(div8, "class", "separator svelte-g3hko2");
    			add_location(div8, file$T, 223, 2, 8684);
    			attr_dev(div9, "class", "root svelte-g3hko2");
    			add_location(div9, file$T, 7, 0, 268);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div0);
    			append_dev(div9, t0);
    			append_dev(div9, h10);
    			append_dev(div9, t2);
    			append_dev(div9, div1);
    			append_dev(div9, t3);
    			mount_component(step0, div9, null);
    			append_dev(div9, t4);
    			mount_component(step1, div9, null);
    			append_dev(div9, t5);
    			mount_component(step2, div9, null);
    			append_dev(div9, t6);
    			mount_component(step3, div9, null);
    			append_dev(div9, t7);
    			mount_component(step4, div9, null);
    			append_dev(div9, t8);
    			append_dev(div9, div2);
    			append_dev(div9, t9);
    			append_dev(div9, h11);
    			append_dev(div9, t11);
    			append_dev(div9, div3);
    			append_dev(div9, t12);
    			mount_component(step5, div9, null);
    			append_dev(div9, t13);
    			mount_component(step6, div9, null);
    			append_dev(div9, t14);
    			mount_component(step7, div9, null);
    			append_dev(div9, t15);
    			mount_component(step8, div9, null);
    			append_dev(div9, t16);
    			mount_component(step9, div9, null);
    			append_dev(div9, t17);
    			append_dev(div9, div4);
    			append_dev(div9, t18);
    			append_dev(div9, h12);
    			append_dev(div9, t20);
    			append_dev(div9, div5);
    			append_dev(div9, t21);
    			mount_component(step10, div9, null);
    			append_dev(div9, t22);
    			mount_component(step11, div9, null);
    			append_dev(div9, t23);
    			append_dev(div9, div6);
    			append_dev(div9, t24);
    			append_dev(div9, h13);
    			append_dev(div9, t26);
    			append_dev(div9, div7);
    			append_dev(div9, t27);
    			mount_component(step12, div9, null);
    			append_dev(div9, t28);
    			mount_component(step13, div9, null);
    			append_dev(div9, t29);
    			mount_component(step14, div9, null);
    			append_dev(div9, t30);
    			mount_component(step15, div9, null);
    			append_dev(div9, t31);
    			append_dev(div9, div8);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const step0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step0_changes.$$scope = { dirty, ctx };
    			}

    			step0.$set(step0_changes);
    			const step1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step1_changes.$$scope = { dirty, ctx };
    			}

    			step1.$set(step1_changes);
    			const step2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step2_changes.$$scope = { dirty, ctx };
    			}

    			step2.$set(step2_changes);
    			const step3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step3_changes.$$scope = { dirty, ctx };
    			}

    			step3.$set(step3_changes);
    			const step4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step4_changes.$$scope = { dirty, ctx };
    			}

    			step4.$set(step4_changes);
    			const step5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step5_changes.$$scope = { dirty, ctx };
    			}

    			step5.$set(step5_changes);
    			const step6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step6_changes.$$scope = { dirty, ctx };
    			}

    			step6.$set(step6_changes);
    			const step7_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step7_changes.$$scope = { dirty, ctx };
    			}

    			step7.$set(step7_changes);
    			const step8_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step8_changes.$$scope = { dirty, ctx };
    			}

    			step8.$set(step8_changes);
    			const step9_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step9_changes.$$scope = { dirty, ctx };
    			}

    			step9.$set(step9_changes);
    			const step10_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step10_changes.$$scope = { dirty, ctx };
    			}

    			step10.$set(step10_changes);
    			const step11_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step11_changes.$$scope = { dirty, ctx };
    			}

    			step11.$set(step11_changes);
    			const step12_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step12_changes.$$scope = { dirty, ctx };
    			}

    			step12.$set(step12_changes);
    			const step13_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step13_changes.$$scope = { dirty, ctx };
    			}

    			step13.$set(step13_changes);
    			const step14_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step14_changes.$$scope = { dirty, ctx };
    			}

    			step14.$set(step14_changes);
    			const step15_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				step15_changes.$$scope = { dirty, ctx };
    			}

    			step15.$set(step15_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(step0.$$.fragment, local);
    			transition_in(step1.$$.fragment, local);
    			transition_in(step2.$$.fragment, local);
    			transition_in(step3.$$.fragment, local);
    			transition_in(step4.$$.fragment, local);
    			transition_in(step5.$$.fragment, local);
    			transition_in(step6.$$.fragment, local);
    			transition_in(step7.$$.fragment, local);
    			transition_in(step8.$$.fragment, local);
    			transition_in(step9.$$.fragment, local);
    			transition_in(step10.$$.fragment, local);
    			transition_in(step11.$$.fragment, local);
    			transition_in(step12.$$.fragment, local);
    			transition_in(step13.$$.fragment, local);
    			transition_in(step14.$$.fragment, local);
    			transition_in(step15.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(step0.$$.fragment, local);
    			transition_out(step1.$$.fragment, local);
    			transition_out(step2.$$.fragment, local);
    			transition_out(step3.$$.fragment, local);
    			transition_out(step4.$$.fragment, local);
    			transition_out(step5.$$.fragment, local);
    			transition_out(step6.$$.fragment, local);
    			transition_out(step7.$$.fragment, local);
    			transition_out(step8.$$.fragment, local);
    			transition_out(step9.$$.fragment, local);
    			transition_out(step10.$$.fragment, local);
    			transition_out(step11.$$.fragment, local);
    			transition_out(step12.$$.fragment, local);
    			transition_out(step13.$$.fragment, local);
    			transition_out(step14.$$.fragment, local);
    			transition_out(step15.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div9);
    			destroy_component(step0);
    			destroy_component(step1);
    			destroy_component(step2);
    			destroy_component(step3);
    			destroy_component(step4);
    			destroy_component(step5);
    			destroy_component(step6);
    			destroy_component(step7);
    			destroy_component(step8);
    			destroy_component(step9);
    			destroy_component(step10);
    			destroy_component(step11);
    			destroy_component(step12);
    			destroy_component(step13);
    			destroy_component(step14);
    			destroy_component(step15);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$T.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$T($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('PrettyGoodNlp', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<PrettyGoodNlp> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		BracketsMarionette: img$i,
    		BracketsLifts: img$h,
    		BracketsSharesHeart: img$g,
    		Step
    	});

    	return [];
    }

    class PrettyGoodNlp extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$T, create_fragment$T, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PrettyGoodNlp",
    			options,
    			id: create_fragment$T.name
    		});
    	}
    }

    /* src/pages/Productivity/Title.svelte generated by Svelte v3.43.2 */

    const file$S = "src/pages/Productivity/Title.svelte";

    function create_fragment$S(ctx) {
    	let root;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "Productivity Tips";
    			t1 = space();
    			p = element("p");
    			p.textContent = "These practices help me get things done and enjoy my work.";
    			attr_dev(h1, "class", "svelte-1wb21il");
    			add_location(h1, file$S, 1, 4, 11);
    			add_location(p, file$S, 2, 4, 42);
    			attr_dev(root, "class", "svelte-1wb21il");
    			add_location(root, file$S, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    			append_dev(root, t1);
    			append_dev(root, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$S.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$S($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$4 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$S, create_fragment$S, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$S.name
    		});
    	}
    }

    var img$f = "data:image/png;base64,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";

    /* src/pages/Productivity/BracketsStickyNote.svelte generated by Svelte v3.43.2 */
    const file$R = "src/pages/Productivity/BracketsStickyNote.svelte";

    function create_fragment$R(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$f)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character holding up sticky notes");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$R, 3, 0, 101);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$R.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$R($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsStickyNote', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsStickyNote> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$f });
    	return [];
    }

    class BracketsStickyNote extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$R, create_fragment$R, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsStickyNote",
    			options,
    			id: create_fragment$R.name
    		});
    	}
    }

    /* src/pages/Productivity/ThreeThingsTip.svelte generated by Svelte v3.43.2 */

    const file$Q = "src/pages/Productivity/ThreeThingsTip.svelte";

    function create_fragment$Q(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ol;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Each morning, choose three things to get done";
    			t1 = space();
    			ol = element("ol");
    			li0 = element("li");
    			li0.textContent = "The most important, difficult, and urgent task.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "A task that can be achieved in one day or less.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Something you will enjoy and learn something new.";
    			add_location(h2, file$Q, 1, 2, 8);
    			add_location(li0, file$Q, 3, 4, 74);
    			add_location(li1, file$Q, 4, 4, 135);
    			add_location(li2, file$Q, 5, 4, 196);
    			add_location(ol, file$Q, 2, 2, 65);
    			add_location(div, file$Q, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ol);
    			append_dev(ol, li0);
    			append_dev(ol, t3);
    			append_dev(ol, li1);
    			append_dev(ol, t5);
    			append_dev(ol, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$Q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$Q($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ThreeThingsTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ThreeThingsTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class ThreeThingsTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$Q, create_fragment$Q, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ThreeThingsTip",
    			options,
    			id: create_fragment$Q.name
    		});
    	}
    }

    /* src/pages/Productivity/TheThingsDetails.svelte generated by Svelte v3.43.2 */

    const file$P = "src/pages/Productivity/TheThingsDetails.svelte";

    function create_fragment$P(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Ignore the remaining ocean of work. Work on the first item first and switch\n    to the second item if you get blocked. If you finish the first two, reward\n    yourself with the third.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Choosing three tasks like this helps you make progress on the most\n    challenging work, get at least one thing done each day, and avoid burnout.";
    			add_location(p0, file$P, 1, 2, 8);
    			add_location(p1, file$P, 6, 2, 209);
    			add_location(div, file$P, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$P.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$P($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('TheThingsDetails', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<TheThingsDetails> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class TheThingsDetails extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$P, create_fragment$P, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TheThingsDetails",
    			options,
    			id: create_fragment$P.name
    		});
    	}
    }

    var img$e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAAH+CAYAAAAYgp5aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAFROSURBVHhe7d0HfBRF4z7wgYh0IiChI4IUFSkiig1UpGMFRUWxF+wVy2vFLioo2LtifVWwo+CLggiWn9gV6UVAeg/9/nnGmfyPcCS3d7szO7vP9/NZtlySO5K7fXZmp5RKFBBERES0ndJqTUREREkYkERERCkwIImIiFJgQBIREaXAgCQiIkqBAUlERJQCA5KIiCgFBiQREVEKDEgiIqIUGJBEREQpMCCJiIhSYEASERGlwIAkIiJKgQFJRESUAgOSiIgoBQYkERFRCgxIIiKiFEolCqhtipFSpUqpLQoTfhyJwoMlSCIiohQYkERERCmwijWmkqtY+Rawi38LonBiCZKIiCgFBiQREVEKDEgiIqIUGJBEREQpMCCJiIhSYEASERGlwIAkIiJKgQFJRESUAgOSiIgoBQYkERFRCgxIIiKiFDgWa0xxuqtw4seRKDxYgiQiIkqBAUlERJQCq1hjilMshQf/FkThxBIkERFRCgxIIiKiFBiQREREKTAgiYiIUmBAEhERpcCAJCIiSoEBSURElAIDkoiIKAUOFBBTJjunx3nc13R+txwogCicWIIkIiJKgQFJRESUAqtYY8pWFavX54rD92bzXEQUHJYgiYiIUmBAEhERpcCAJCIiSoEBSRRBt9xyi1izZo3aI6JMMCCJImbx4sXi3nvvFTVr1hQPPPCAOkpEXjEgiSLmoYceElu3bhX5+fni+uuvF3vuuad4+umn1aNElC5284gpk10LXOlukczk92bzXEUtWrRI1KtXTwZkUa1btxY33HCD6Nu3rzpCRMVhCZIoQnTpsSiE8I8//ihOOeUUceSRR4pPP/1UPUJEO8MSZEz5WWopicnSWDJXvjeb50o2ZcoUsf/++6u91HbZZRexZcsWuX388cfLxjwlfQ9RXLEESRQR//nPf9TWzulwRCiPGjVKtG3bVlx22WWyYQ8RbY8BSRQBzz//vPjkk0/UXsmSS6rDhw+XDXnuu+8+dYSIgFWsMZVNNSClz+vvNpOP49KlS0XTpk3FihUr1JHMNWnSRFa7nnHGGeoIUXyxBEnkuOuuu86XcCxdurSYNm2a6N+/vzjqqKPEhAkT1CNE8cQSZEyxBGlG0CXIt99+W5x00klqzx85OTmFLWEvvPBCcccdd8hBB4jihgEZU9kEpNe3DL+3eNk8V+PGjcXMmTPVXjAqVKgg7rrrLnHVVVepI0TxwCpWIkfhXmHQ4Qjr168XV199tWjVqpX46KOP1FGi6GMJMqZMlnL4vcXL5Ll+++030aJFC7VnVr9+/cQ999wjGjRooI4QRRNLkEQOSh6EHPcMTXr11VfFXnvtJR5++GF1hCiaGJBEDnrppZfE448/LlueokFNjRo1xH777aceDd7mzZvFNddcI5o1aybGjRunjhJFC6tYY8pENaDG7y1eNs/1yy+/iEsuuaSwSwaqP1etWiU+/PBDuW/KySefLGcMyc3NVUeI3McSJJHDUGocP368nKUDUP25adMm8cILL8guGrvvvrs8HrS33npL1KlTR06vRRQVLEHGlMlSDr+3eNk8VzKUGi+99FIxZ84cUalSpcIh5N599125zJs3T31lsND15M477xSnnnqqOkLkJgZkTJk8ifN7i5fNcxWFEXUQkq+99prcP//882VQLl++XNx///3iySefFBs2bJCPBa19+/Zi5MiRolatWuoIkVsYkDFl8iTO7y1eNs+1M2jAg3uTsM8++8iQxDyQP/zwg3jjjTfkYqJEWa5cOTkHJQYZaNmypTpK5AYGZEyZPInze4uXzXMV56effpIhOXHiRLmPas+bb75Zbn/99dcyJN98800jU13l5eXJki2qXdFFhMgFDMiYMnkS5/cWL5vnSgcazuh+k926dROPPfaYaNSokdyfPn26HJEHYWlC9erVxe233y4uuugiOXkzUZgxIGMqm5M4pS8MAQnvv/++LMGhWrVy5cpi6NCh4pxzzlGPCvHjjz/KWUHGjh2rjgQLpUiUaFH9ShRWDMiYYkCaEZaAhGXLlsmQ1KVFVHcOGTKkcKYOPDe6iWAZPXq0PBa0Y445Rr4OtnilMGJAxhQD0gyvv1sTH0d06EejGQxCjhF4EJIYYEDDBMwIyREjRojvv/9eHQ0O/v86JHv16qWOEtnHgIypbALS61uG31u8bJ4rU5gFBCGJqlc4++yzZVAmj4QzderUwqCcNWuWOhocVP2edtppMig7duyojhLZw4CMKZMncX5v8bJ5rmwNGzZMBiXGc61fv74Myd69e6tH/zV//nx5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brzxxqxHhy/q119/FY888ojaCzddgly1apVcm8SAJHKXrYAsVaqU2krPd999J/Lz82XDzBo1ashjP/74o1yny+/+89kwemOqdevW4vLLL1d7/hk1apR4++231V546RLk2rVr5dok3oMkcpetKlYMi+nFN998I9ft27eXa/BSw4euHZj9IyyMnzXPPvtsccABB6g9fyBwXnzxRbFkyRJ1JJx0QG7cuFGuTWIJkshdugTpdw1cSbxWsU6ePFmudUDidtLnn38ut9ORPPJOGBgPyBYtWoizzjpL7fkHfSMRkmGmq1httLxlQBK5S5cgMx3ZxpSiAYnzspc2F35PcpEtK/VuKEUG0WDnpZdeknXgYcUSJBFlwoVGOn///beYMWOGHKBcj4Kjq1zTgXYq7dq1U3vhYCUgERQoReqbuH757bffQl2K1CVIG61YbQyQTkT+0AFpui2Bly5pqe4/egnIxo0byz6QYWIlIKF79+5yAAG/Pf744+Krr75Se+GiA9JGWLEESeQuW410vPRHLFq9ismRv/32W7mdjjB179CsBSScd955211t+OWBBx4Qq1evVnvhUb58eXkF6LVlmB8wvB0RuUmXHE2XIL3c8ywakCg9eqktO/bYY9VWeFgNyGbNmolrrrlG7fnngw8+EO+//77aC5dKlSqpLbMYkETu0sEY1kY6eF06IA866CC59lJ6xJityUPThYXVgIQ+ffrIkqTfMLHynDlz1F546GpW02yUWonIH1477Psl3UBGOOIcg14K1apVk+NNe7n/WLduXVG9enW1Fx7WAxIQkPXq1VN7/sB9yNdee03thQdLkETklemqVS3dC2tdWkyuXsUoZ+nab7/91Fa4hCIgUSS/9tpr1Z5/EJC4URwmtkqQuKIjIjfpgDRdkky3BKlLiwceeKBceyk9AhpthlEoAhJQivR7SixcwYStFGmrBInxEYnITbaqWNMduUeXIHVATpo0Sa7TddRRR6mtcAlNQKJkdccdd8iWnn7CdFhffvml2rPPVgnSxvivROSPMDfSWbhw4XYDBKA/+oQJE9SjJUO/+CZNmqi9cAlNQAKuIs4991y15w+M7hCmwQNslSCjMFDAtGnTxDPPPCNOP/102aE4Ly9P/j5xdb377ruLpk2bik6dOom77767cModIs3l94+te5DpBHLR0iPCccWKFXI7HWigE1oF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";

    /* src/pages/Productivity/BracketsPlans.svelte generated by Svelte v3.43.2 */
    const file$O = "src/pages/Productivity/BracketsPlans.svelte";

    function create_fragment$O(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$e)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character planning");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$O, 3, 0, 94);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$O.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$O($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsPlans', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsPlans> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$e });
    	return [];
    }

    class BracketsPlans extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$O, create_fragment$O, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsPlans",
    			options,
    			id: create_fragment$O.name
    		});
    	}
    }

    /* src/pages/Productivity/SolitudeTip.svelte generated by Svelte v3.43.2 */

    const file$N = "src/pages/Productivity/SolitudeTip.svelte";

    function create_fragment$N(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Plan each week in solitude";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Take 30 minutes on Monday, alone, to frame your week.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Pick a theme for the week. Consider your team's goals for the current\n      period.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Block out time on your calendar to get work done, learn, and to rest\n      between major efforts.";
    			add_location(h2, file$N, 1, 2, 8);
    			add_location(li0, file$N, 3, 4, 55);
    			add_location(li1, file$N, 4, 4, 122);
    			add_location(li2, file$N, 8, 4, 231);
    			add_location(ul, file$N, 2, 2, 46);
    			add_location(div, file$N, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$N.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$N($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('SolitudeTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<SolitudeTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class SolitudeTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$N, create_fragment$N, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SolitudeTip",
    			options,
    			id: create_fragment$N.name
    		});
    	}
    }

    /* src/pages/Productivity/SolitudeDetails.svelte generated by Svelte v3.43.2 */

    const file$M = "src/pages/Productivity/SolitudeDetails.svelte";

    function create_fragment$M(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Think of your available time like money you're going to invest. Where\n    should you allocate your time to get the highest return? You will get\n    more done if you decide for yourself at the start of the week.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Grouping planned work into a theme and blocking out time helps avoid\n    context switching and meetings from taking over your calendar.";
    			add_location(p0, file$M, 1, 2, 8);
    			add_location(p1, file$M, 6, 2, 236);
    			add_location(div, file$M, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$M.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$M($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('SolitudeDetails', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<SolitudeDetails> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class SolitudeDetails extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$M, create_fragment$M, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SolitudeDetails",
    			options,
    			id: create_fragment$M.name
    		});
    	}
    }

    var img$d = "data:image/png;base64,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tz3zULWzN+G2R/9fhauzzjpru38HhSwFL3UF51NpoPvUXThlyhR/BNhEyAK8q6++2n3+85/3R6gVhRd18+Vvne2syy+nAetPPfVUFqjyvbadveUmAwYMcG94wxu2bocddlgWjvQ2p8ZvdaYrgStXDF10TXbNjTfemM2vBVhGyAK8O++8073jHe/wR+gNeZVKYUWhSu0dBSpVEytDVN7uzrJD//RP/5QFqTxU6c3C7VFXYD52S+3OdCdwSR66tKfS1Tmto8mgd1hHyAK8efPmuXHjxvkjxKAAok3dfjuqUmk28eeee27rVgxTClpdpTFzehFBm6bMyEOV5nHqCVWhNPZK1a3tBS79e1SByacj6AqFrfzPZUzXK28XKmQB1hGygILRo0e7hQsX+iNUY2dVKoWUYpAqbjtbmLjS0KFD3etf//osTOV7bcWpM0LrSuAS/fv1b+/qTOeqbOnPVldlWbsWGY+FekHIAgoUBu69915/hO5Q9SGvVClQjB071i1durTTEDVz5sxude/l9DZfZZjSXv+vWupq4BIFCH2N8jFnO1PGrsXzzjvPXXvttf4IsIuQBRR8/OMfdz/4wQ/8EbZHFSmFqje+8Y1uzz33zLrwtGbj888/n23q6tnZVBjbo8lc99prr+zPzTcthK0wVbmGY4rytwvzStTOuv8UuvS1zENXZ92nufzPzgNdvVIVq6tdrUDKCFlAwde+9jX3pS99yR8h179/f7frrru6kSNHZuOZNPu5QtTKlSv97+ieYcOGbROiilutq1KhKWjlbyp2pfuvWBHcWbWrXqtcDHpHvSBkAQW33XabO+200/xReWlKg2rnBVMo22OPPbLgVFmZ0iz5ZZUHIwWuroQuyatdGmOm8NVZ8FKVS9UtVbn0/7BK/04GvaNeELKAgieffHKHr/PjVerWmzhxYhak8q143Nra6n8ndkSBSOO48uC1szFdOYURhS3tO3uxwGqVi0HvqCeELKBA44o0uzsfi1eo664YnIptVaoQR0+qXaKQpeClwJVXvbTlVS4Lbywy6B31hJAFVDjggAPc9OnT/VH9U5B63etelw0u116buvcUqFStQu2puqVwpHFw2qsytbMB9UWqduWBS3OUqTtO4+lSrHIx6B31hJAFVHj/+9/vfvGLX/ij+qCpD/IAVdwUrDT+CvYoeCkgqeKlvbaudjXmFL606LUquFqM+aGHHvK/UjsMekc9IWQBFS6//HJ3ySWX+CM7VHXae++9twlQeVshC+Wg6pSqXHn46kn3oLodGxsbe7yQdnf16dMn66LX/1dhD6gXhCygwq233upOP/10f5Qe3ZDUnadun0MPPTRbLkZdnDz9Y3sUuhS2VOlSl2NPw1dsDHpHvSFkARXUXaGB3SnQcjHqztFixlrUWGFKoaqhocH/DqDnUgtfl156qckqMrA9hCygE+PHj3dz5871R/H169cvG4CuIPWmN70pW8RYgUqTdgK1kHc75oPtFcS6O+aru6ZNm7bDyVcBawhZQCfe9773uZtvvtkfhTV48OCsUnbEEUe4t7zlLVmoSqVyBuxMPsBeY76017G2ajEeC/WIkAV04pprrnEXXHCBP+q5QYMGZRUpjZ+aPHly1u2npWmAepMHrjx8aetO1yPjsVCPCFlAJ/70pz9llabu0FQImi3+8MMPz/5bBarddtvN/ypQXl3pemQ8FuoRIQvohD4Wzc3NbtOmTf7Ma2kNPoUphSptqlYB6Lpi1+NZZ53FG7KoO4QsYDs0AFeL7ebyMJVvGqgOAMD2ELKA7VD3hd760+B0hSpVtgAA6CpCFgAAQAR9/R4AAAABEbIAAAAiIGQBAABEQMgCAACIgJAFAAAQASELAAAgAkIWAABABIQsAACACAhZAAAAERCyAAAAIiBkAQAAREDIAgAAiICQBQAAEAEhCwAAIAJCFgAAQASELAAAgOCc+//emxgLSFZx9gAAAABJRU5ErkJggg==";

    /* src/pages/Productivity/BracketsMeditates.svelte generated by Svelte v3.43.2 */
    const file$L = "src/pages/Productivity/BracketsMeditates.svelte";

    function create_fragment$L(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$d)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character meditating");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$L, 3, 0, 98);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$L.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$L($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsMeditates', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsMeditates> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$d });
    	return [];
    }

    class BracketsMeditates extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$L, create_fragment$L, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsMeditates",
    			options,
    			id: create_fragment$L.name
    		});
    	}
    }

    /* src/pages/Productivity/PracticeFlowTip.svelte generated by Svelte v3.43.2 */

    const file$K = "src/pages/Productivity/PracticeFlowTip.svelte";

    function create_fragment$K(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Practice Flow";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Try techniques like pomodoro. Set 20 minute timers to focus on one\n      thing at a time.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Create a ritual cadence for your day.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Be unavailable for distraction when you are concentrating.";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "Avoid checking email or text messages first thing. Instead jump into\n      flow first.";
    			add_location(h2, file$K, 1, 2, 8);
    			add_location(li0, file$K, 3, 4, 42);
    			add_location(li1, file$K, 7, 4, 157);
    			add_location(li2, file$K, 8, 4, 208);
    			add_location(li3, file$K, 9, 4, 280);
    			add_location(ul, file$K, 2, 2, 33);
    			add_location(div, file$K, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$K.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$K($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('PracticeFlowTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<PracticeFlowTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class PracticeFlowTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$K, create_fragment$K, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PracticeFlowTip",
    			options,
    			id: create_fragment$K.name
    		});
    	}
    }

    /* src/pages/Productivity/PracticeFlowDetails.svelte generated by Svelte v3.43.2 */

    const file$J = "src/pages/Productivity/PracticeFlowDetails.svelte";

    function create_fragment$J(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Flow is when you are entirely focused on your current work. You tune out\n    distraction, stop watching the clock, and make meaningful progress.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Practicing concentration techniques and having a consistent cadence for\n    your day trains your brain to quickly get into deep flow.";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "Train others to not interrupt you when you are thinking. Set a busy\n    status on your computer, turn off notifications, and consider a sign or\n    light that indicates you are not available.";
    			add_location(p0, file$J, 1, 2, 8);
    			add_location(p1, file$J, 5, 2, 170);
    			add_location(p2, file$J, 9, 2, 321);
    			add_location(div, file$J, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    			append_dev(div, t3);
    			append_dev(div, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$J.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$J($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('PracticeFlowDetails', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<PracticeFlowDetails> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class PracticeFlowDetails extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$J, create_fragment$J, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PracticeFlowDetails",
    			options,
    			id: create_fragment$J.name
    		});
    	}
    }

    var img$c = "data:image/png;base64,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";

    /* src/pages/Productivity/BracketsReportsStatus.svelte generated by Svelte v3.43.2 */
    const file$I = "src/pages/Productivity/BracketsReportsStatus.svelte";

    function create_fragment$I(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$c)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character reports status");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$I, 3, 0, 103);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$I.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$I($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsReportsStatus', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsReportsStatus> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$c });
    	return [];
    }

    class BracketsReportsStatus extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$I, create_fragment$I, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsReportsStatus",
    			options,
    			id: create_fragment$I.name
    		});
    	}
    }

    /* src/pages/Productivity/AccountabilityTip.svelte generated by Svelte v3.43.2 */

    const file$H = "src/pages/Productivity/AccountabilityTip.svelte";

    function create_fragment$H(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;
    	let t9;
    	let li4;
    	let t11;
    	let li5;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Communicate with accountability";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Commit to completing specific, atomic tasks each day.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Prefer action verbs for tasks like 'create', 'update', or 'fix'.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Be prepared to give status to your team at any time.";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "Call yourself out when you don't get something done or make a mistake.";
    			t9 = space();
    			li4 = element("li");
    			li4.textContent = "Avoid excuses for failures. State how you will do better in the future.";
    			t11 = space();
    			li5 = element("li");
    			li5.textContent = "Don't be afraid to ask for help when blocked.";
    			add_location(h2, file$H, 1, 2, 8);
    			add_location(li0, file$H, 3, 4, 60);
    			add_location(li1, file$H, 4, 4, 127);
    			add_location(li2, file$H, 5, 4, 205);
    			add_location(li3, file$H, 6, 4, 271);
    			add_location(li4, file$H, 9, 4, 367);
    			add_location(li5, file$H, 12, 4, 464);
    			add_location(ul, file$H, 2, 2, 51);
    			add_location(div, file$H, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    			append_dev(ul, t9);
    			append_dev(ul, li4);
    			append_dev(ul, t11);
    			append_dev(ul, li5);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$H.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$H($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccountabilityTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccountabilityTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class AccountabilityTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$H, create_fragment$H, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccountabilityTip",
    			options,
    			id: create_fragment$H.name
    		});
    	}
    }

    /* src/pages/Productivity/AccountabilityDetails.svelte generated by Svelte v3.43.2 */

    const file$G = "src/pages/Productivity/AccountabilityDetails.svelte";

    function create_fragment$G(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Setting an example of personal accountability will make you and your\n    team more productive. When your teammates know you are open and honest\n    about your work, they will trust you and want to help you succeed.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "When a task atomic (either complete or incomplete) and action oriented,\n    you avoid thrashing on a task day after day with the same 'I'm working\n    on it' status report.";
    			add_location(p0, file$G, 1, 2, 8);
    			add_location(p1, file$G, 6, 2, 240);
    			add_location(div, file$G, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$G.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$G($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccountabilityDetails', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccountabilityDetails> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class AccountabilityDetails extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$G, create_fragment$G, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccountabilityDetails",
    			options,
    			id: create_fragment$G.name
    		});
    	}
    }

    var img$b = "data:image/png;base64,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";

    /* src/pages/Productivity/BracketsHat.svelte generated by Svelte v3.43.2 */
    const file$F = "src/pages/Productivity/BracketsHat.svelte";

    function create_fragment$F(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$b)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character wearing a hat");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$F, 3, 0, 92);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$F.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$F($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsHat', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsHat> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$b });
    	return [];
    }

    class BracketsHat extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$F, create_fragment$F, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsHat",
    			options,
    			id: create_fragment$F.name
    		});
    	}
    }

    /* src/pages/Productivity/InnerKidTip.svelte generated by Svelte v3.43.2 */

    const file$E = "src/pages/Productivity/InnerKidTip.svelte";

    function create_fragment$E(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;
    	let t9;
    	let li4;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Listen to your inner kid";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Eat when hungry";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Nap when tired";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Exercise regularly";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "Give yourself a break when stressed";
    			t9 = space();
    			li4 = element("li");
    			li4.textContent = "Step away and amble when blocked";
    			add_location(h2, file$E, 1, 2, 8);
    			add_location(li0, file$E, 3, 4, 53);
    			add_location(li1, file$E, 4, 4, 82);
    			add_location(li2, file$E, 5, 4, 110);
    			add_location(li3, file$E, 6, 4, 142);
    			add_location(li4, file$E, 7, 4, 191);
    			add_location(ul, file$E, 2, 2, 44);
    			add_location(div, file$E, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    			append_dev(ul, t9);
    			append_dev(ul, li4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$E.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$E($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InnerKidTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InnerKidTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class InnerKidTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$E, create_fragment$E, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InnerKidTip",
    			options,
    			id: create_fragment$E.name
    		});
    	}
    }

    /* src/pages/Productivity/InnerKidDetails.svelte generated by Svelte v3.43.2 */

    const file$D = "src/pages/Productivity/InnerKidDetails.svelte";

    function create_fragment$D(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Kids run and play in intervals. You should too. Burnout doesn't happen in a\n    day and it can't be fixed in a day. Managing your energy levels will make\n    you more productive and avoid making mistakes.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "When you are blocked on a difficult problem, take a slow walk for 30\n    minutes. Your brain will make an insightful leap when you give it some time\n    to background process.";
    			add_location(p0, file$D, 1, 2, 8);
    			add_location(p1, file$D, 6, 2, 230);
    			add_location(div, file$D, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$D.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$D($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('InnerKidDetails', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<InnerKidDetails> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class InnerKidDetails extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$D, create_fragment$D, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "InnerKidDetails",
    			options,
    			id: create_fragment$D.name
    		});
    	}
    }

    var img$a = "data:image/png;base64,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53RQ+eOPP2Sflm7mHT9+vOxdki9fPu+IyD0MLFFEBhZTFZadO3d6R0QEy5cvjzuoREKV5dtvv1Uffvih94x/TE4yyQoLuYyBJQoGFiJ7vPPOO6pNmzaqTp06J4JKkSJFZB9LUNF0leWVV16RvSsYWMhlDCxR2NAkhJOryaGSRCYhiDz33HOqVq1a6pprrlGzZs2SCkmxYsXk9V27dsk+EZMmTXJqgVEGFnIZA0sUutOtyQoLsMpCyebHH39U99xzjypRooTq06ePNOGUKVNGVa5cWUK8H327sFaYS1UWBhZyGQNLFDZUWCAzd5FEYfLRRx+pjh07qipVqqgnn3xS1uY5//zzVaNGjdSmTZvUunXrvF/pDwYWonBgYIlCBxaTw5rB5IJqREGYOHGiuuyyy1TTpk3VG2+8Ic9df/316oYbblAbNmxQn376qTznt6VLl6rFixd7jzKPnW6JsgYDSxQ2dLoF9mEhF3333XfS7JOSkqJ69OihPv/8c1WyZEl19913q549e8ooHoSXrP78P/vss95R5pmsxjKwkMsYWKJgYCHyF/qNoLPrFVdcoWrWrCnNPr/99puqW7euzEDbqVMn9cILL8g8KUF97l9//XUJS34wuQAhAwu5jIElin379sk+f/78sjeFTUIUdl999ZXq16+fKlq0qOrWrZtUT3Aj8Pe//13NmTNH1atXTw0aNEgWJzQR0J944gnvKHNYYSHKGgwsUezfv1/2pmeQZGChMDpy5IhUSho2bKguuOACqaBgGDHCCabQX79+vVzg0cnWRFCJXNQUfzc6/GYWKyxEWYOBJYrIwGKySejAgQPeEZH90Lxy2223STWlV69eauHChapgwYIyPPnLL79U7733nvrhhx/UOeecYySoYB4XwMrK5513npoyZYr6+OOPVZMmTeT5zGBgIcoaDCxR2NIkpIMTka2woOCIESOkkoLRPqNHj5agffnll6sJEybIXEJ33nmnmjx5sqpUqZKRoKKbazCPS8WKFWW23K+//loqPH4xGVi4lhC5jIElCluahBhYyFZTp05V1113nUzq1r9/f+mrglE/d911l1qxYoU0s9SuXVtew3wqJoIKJp8DdKJHpfTxxx+XodLoP+M3VliIsgYDSxSRgQUlbVPYJEQ2WbJkibrjjjskCHTo0EHNmDFDnse8KW+99ZbasmWLGj58uEx4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";

    /* src/pages/Productivity/BracketsDabs.svelte generated by Svelte v3.43.2 */
    const file$C = "src/pages/Productivity/BracketsDabs.svelte";

    function create_fragment$C(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = img$a)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Brackets character dabbing");
    			attr_dev(img, "class", "svelte-bhqxvs");
    			add_location(img, file$C, 3, 0, 93);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$C.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$C($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BracketsDabs', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BracketsDabs> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ BracketsCharacter: img$a });
    	return [];
    }

    class BracketsDabs extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$C, create_fragment$C, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BracketsDabs",
    			options,
    			id: create_fragment$C.name
    		});
    	}
    }

    /* src/pages/Productivity/AccomplishmentsTip.svelte generated by Svelte v3.43.2 */

    const file$B = "src/pages/Productivity/AccomplishmentsTip.svelte";

    function create_fragment$B(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Record your accomplishments";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Write down what you got done each week.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Consider sending your accomplishments to your team and/or boss.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Reflect to wrap up and enjoy the weekend.";
    			add_location(h2, file$B, 1, 2, 8);
    			add_location(li0, file$B, 3, 4, 56);
    			add_location(li1, file$B, 4, 4, 109);
    			add_location(li2, file$B, 5, 4, 186);
    			add_location(ul, file$B, 2, 2, 47);
    			add_location(div, file$B, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$B.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$B($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AccomplishmentsTip', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AccomplishmentsTip> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class AccomplishmentsTip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$B, create_fragment$B, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AccomplishmentsTip",
    			options,
    			id: create_fragment$B.name
    		});
    	}
    }

    /* src/pages/Productivity/Productivity.svelte generated by Svelte v3.43.2 */
    const file$A = "src/pages/Productivity/Productivity.svelte";

    function create_fragment$A(ctx) {
    	let article;
    	let page;
    	let current;

    	page = new Page({
    			props: { pageItems: /*pageItems*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			article = element("article");
    			create_component(page.$$.fragment);
    			attr_dev(article, "class", "svelte-6wrq3h");
    			add_location(article, file$A, 43, 0, 1999);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			mount_component(page, article, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(page.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(page.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			destroy_component(page);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$A.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$A($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Productivity', slots, []);

    	const pageItems = [
    		[Title$4, "r1 c1 cs13", "b-t"],
    		[BracketsStickyNote, "r2 c2 cs4", "r-l"],
    		[ThreeThingsTip, "r2 c8 cs6", "b-r"],
    		[TheThingsDetails, "r3 c5 cs3", "b-t"],
    		[BracketsPlans, "r4 c9 cs3", "r-l"],
    		[SolitudeTip, "r4 rs2 c1 cs6", "b-t"],
    		[SolitudeDetails, "r6 c8 cs5", "l-r"],
    		[BracketsMeditates, "r6 rs2 c1 cs4", "b-t"],
    		[PracticeFlowTip, "r8 c2 cs6", "b-t"],
    		[PracticeFlowDetails, "r8 rs2 c9 cs3", "b-t"],
    		[BracketsReportsStatus, "r11 c1 cs3", "r-l"],
    		[AccountabilityTip, "r11 rs2 c5 cs4", "r-l"],
    		[AccountabilityDetails, "r11 rs2 c10 cs3", "b-t"],
    		[BracketsHat, "r13 rs2 c7 cs5", "r-l"],
    		[InnerKidTip, "r13 c1 cs5", "b-t"],
    		[InnerKidDetails, "r14 rs2 c1 cs5", "b-t"],
    		[BracketsDabs, "r16 c5 cs5", "b-t"],
    		[AccomplishmentsTip, "r17 c2 cs6", "r-l"],
    		[AccountabilityDetails, "r17 rs2 c9 cs3"]
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Productivity> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Page,
    		Title: Title$4,
    		BracketsStickyNotes: BracketsStickyNote,
    		ThreeThingsTip,
    		ThreeThingsDetails: TheThingsDetails,
    		BracketsPlans,
    		SolitudeTip,
    		SolitudeDetails,
    		BracketsMedidates: BracketsMeditates,
    		PracticeFlowTip,
    		PracticeFlowDetails,
    		BracketsReportsStatus,
    		AccountabilityTip,
    		AccountabilityDetails,
    		BracketsHat,
    		InnerKidTip,
    		InnerKidDetails,
    		BracketsDabs,
    		AccomplishmentsTip,
    		pageItems
    	});

    	return [pageItems];
    }

    class Productivity extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$A, create_fragment$A, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Productivity",
    			options,
    			id: create_fragment$A.name
    		});
    	}
    }

    /* src/pages/UnitTesting/Title.svelte generated by Svelte v3.43.2 */

    const file$z = "src/pages/UnitTesting/Title.svelte";

    function create_fragment$z(ctx) {
    	let root;

    	const block = {
    		c: function create() {
    			root = element("root");
    			root.textContent = "Unit Testing";
    			attr_dev(root, "class", "svelte-1inwccm");
    			add_location(root, file$z, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$z.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$z($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$z, create_fragment$z, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$z.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Title.svelte generated by Svelte v3.43.2 */

    const file$y = "src/pages/UnitTesting/AAA/Title.svelte";

    function create_fragment$y(ctx) {
    	let root;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "The Arrange, Act, Assert (AAA) pattern";
    			t1 = space();
    			p = element("p");
    			p.textContent = "This pattern divides your test into three distinct phases.";
    			attr_dev(h1, "class", "svelte-14ivs0n");
    			add_location(h1, file$y, 1, 2, 9);
    			attr_dev(p, "class", "svelte-14ivs0n");
    			add_location(p, file$y, 2, 2, 59);
    			attr_dev(root, "class", "svelte-14ivs0n");
    			add_location(root, file$y, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    			append_dev(root, t1);
    			append_dev(root, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$y.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$y($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$y, create_fragment$y, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$y.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Arrange.svelte generated by Svelte v3.43.2 */

    const file$x = "src/pages/UnitTesting/AAA/Arrange.svelte";

    function create_fragment$x(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let p2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Arrange";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "In this phase, you set up the prerequisite state for you test.";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "This includes preparing input arguments to pass to your target method and\n    sometimes mocking dependencies used by your target method.";
    			t5 = space();
    			p2 = element("p");
    			p2.textContent = "If an error is raised, it means the test itself is invalid and not that code\n    under test failed.";
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$x, 1, 2, 9);
    			attr_dev(p0, "class", "svelte-1yhpnzq");
    			add_location(p0, file$x, 2, 2, 28);
    			attr_dev(p1, "class", "svelte-1yhpnzq");
    			add_location(p1, file$x, 3, 2, 100);
    			attr_dev(p2, "class", "svelte-1yhpnzq");
    			add_location(p2, file$x, 7, 2, 254);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$x, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p0);
    			append_dev(root, t3);
    			append_dev(root, p1);
    			append_dev(root, t5);
    			append_dev(root, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$x.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$x($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Arrange', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Arrange> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Arrange extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$x, create_fragment$x, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Arrange",
    			options,
    			id: create_fragment$x.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Act.svelte generated by Svelte v3.43.2 */

    const file$w = "src/pages/UnitTesting/AAA/Act.svelte";

    function create_fragment$w(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let p2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Act";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "In this phase, you perform your target action (e.g. call your target method)\n    and capture the result you want to verify (e.g. save the return value).";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "Each unit test should test one thing. If you find yourself calling multiple\n    target methods within a single test, consider breaking them up into multiple\n    tests.";
    			t5 = space();
    			p2 = element("p");
    			p2.textContent = "If an unexpected error is raised (or if an expected error is not raised) it\n    means there is a bug in the target method.";
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$w, 1, 2, 9);
    			attr_dev(p0, "class", "svelte-1yhpnzq");
    			add_location(p0, file$w, 2, 2, 24);
    			attr_dev(p1, "class", "svelte-1yhpnzq");
    			add_location(p1, file$w, 6, 2, 194);
    			attr_dev(p2, "class", "svelte-1yhpnzq");
    			add_location(p2, file$w, 11, 2, 379);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$w, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p0);
    			append_dev(root, t3);
    			append_dev(root, p1);
    			append_dev(root, t5);
    			append_dev(root, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$w.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$w($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Act', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Act> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Act extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$w, create_fragment$w, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Act",
    			options,
    			id: create_fragment$w.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Assert.svelte generated by Svelte v3.43.2 */

    const file$v = "src/pages/UnitTesting/AAA/Assert.svelte";

    function create_fragment$v(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let p2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Assert";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "In this phase, you verify the result from the target method matches the\n    expected result.";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "Most test frameworks include helper methods letting you compare values and\n    fail the test if they don't match.";
    			t5 = space();
    			p2 = element("p");
    			p2.textContent = "Unit test purists want each unit test to verify one thing per test. That's a\n    perfectly OK practice if you want to factor tests that way.";
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$v, 1, 2, 9);
    			attr_dev(p0, "class", "svelte-1yhpnzq");
    			add_location(p0, file$v, 2, 2, 27);
    			attr_dev(p1, "class", "svelte-1yhpnzq");
    			add_location(p1, file$v, 6, 2, 137);
    			attr_dev(p2, "class", "svelte-1yhpnzq");
    			add_location(p2, file$v, 10, 2, 268);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$v, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p0);
    			append_dev(root, t3);
    			append_dev(root, p1);
    			append_dev(root, t5);
    			append_dev(root, p2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$v.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$v($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Assert', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Assert> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Assert extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$v, create_fragment$v, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Assert",
    			options,
    			id: create_fragment$v.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Example.svelte generated by Svelte v3.43.2 */

    const file$u = "src/pages/UnitTesting/AAA/Example.svelte";

    function create_fragment$u(ctx) {
    	let pre;

    	const block = {
    		c: function create() {
    			pre = element("pre");
    			pre.textContent = `${/*code1*/ ctx[0]}`;
    			add_location(pre, file$u, 25, 0, 529);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, pre, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(pre);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$u.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$u($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code1 = `
[TestMethod]
public void WhenNameSetToDifferentValueThenPropertyChangedRaised()
{
    //Arrange            
    var target = new Customer();
    target.Name = "New";

    bool actual = false;
    target.PropertyChanged += delegate(object sender, PropertyChangedEventArgs e)
    {
        if (e.PropertyName == PropertyNames.Task.Name)
        {
            actual = true;
        }
    }

    // Act
    target.Name = "Name";

    // Assert            
    Assert.IsTrue(actual);
}`;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code1 });
    	return [code1];
    }

    class Example$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$u, create_fragment$u, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$u.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Benefits.svelte generated by Svelte v3.43.2 */

    const file$t = "src/pages/UnitTesting/AAA/Benefits.svelte";

    function create_fragment$t(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Benefits";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "It is clear what is being tested vs. what is setup and verification.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "It is easier to debug errors arranging the test vs. the target.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "You are less likely to accidentally test a mocked function. It happens\n      more than you might expect.";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "You are more likely to factor unit tests to test one thing at a time.";
    			attr_dev(h3, "class", "svelte-1pbolr");
    			add_location(h3, file$t, 1, 2, 9);
    			add_location(li0, file$t, 3, 4, 38);
    			add_location(li1, file$t, 6, 4, 132);
    			add_location(li2, file$t, 7, 4, 209);
    			add_location(li3, file$t, 11, 4, 339);
    			add_location(ul, file$t, 2, 2, 29);
    			add_location(root, file$t, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$t.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$t($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Benefits', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Benefits> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Benefits$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$t, create_fragment$t, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Benefits",
    			options,
    			id: create_fragment$t.name
    		});
    	}
    }

    /* src/pages/UnitTesting/AAA/Tips.svelte generated by Svelte v3.43.2 */

    const file$s = "src/pages/UnitTesting/AAA/Tips.svelte";

    function create_fragment$s(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Tips";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "If your testing framework provides setup/teardown methods, then prefer to\n      use them.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "If not, you can separate phases using code comments like in this example.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Dont let the AAA comments disuade you from adding other helpful comments.";
    			attr_dev(h3, "class", "svelte-1pbolr");
    			add_location(h3, file$s, 1, 2, 9);
    			add_location(li0, file$s, 3, 4, 34);
    			add_location(li1, file$s, 7, 4, 149);
    			add_location(li2, file$s, 10, 4, 248);
    			add_location(ul, file$s, 2, 2, 25);
    			add_location(root, file$s, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$s.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$s($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Tips', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Tips> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Tips$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$s, create_fragment$s, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tips",
    			options,
    			id: create_fragment$s.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Title.svelte generated by Svelte v3.43.2 */

    const file$r = "src/pages/UnitTesting/ETA/Title.svelte";

    function create_fragment$r(ctx) {
    	let root;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "The Expected, Target, Actual (ETA) pattern";
    			t1 = space();
    			p = element("p");
    			p.textContent = "This pattern names variables by their role in the test.";
    			attr_dev(h1, "class", "svelte-1d8jriv");
    			add_location(h1, file$r, 1, 2, 9);
    			attr_dev(p, "class", "svelte-1d8jriv");
    			add_location(p, file$r, 2, 2, 63);
    			attr_dev(root, "class", "svelte-1d8jriv");
    			add_location(root, file$r, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    			append_dev(root, t1);
    			append_dev(root, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$r.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$r($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$r, create_fragment$r, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$r.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Expected.svelte generated by Svelte v3.43.2 */

    const file$q = "src/pages/UnitTesting/ETA/Expected.svelte";

    function create_fragment$q(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p;
    	let t2;
    	let i;
    	let t4;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Expected";
    			t1 = space();
    			p = element("p");
    			t2 = text("Use the variable name ");
    			i = element("i");
    			i.textContent = "expected";
    			t4 = text(" for the result of your test that you expect.");
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$q, 1, 2, 9);
    			add_location(i, file$q, 3, 26, 59);
    			attr_dev(p, "class", "svelte-1yhpnzq");
    			add_location(p, file$q, 2, 2, 29);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$q, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p);
    			append_dev(p, t2);
    			append_dev(p, i);
    			append_dev(p, t4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$q($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Expected', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Expected> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Expected extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$q, create_fragment$q, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Expected",
    			options,
    			id: create_fragment$q.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Target.svelte generated by Svelte v3.43.2 */

    const file$p = "src/pages/UnitTesting/ETA/Target.svelte";

    function create_fragment$p(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p;
    	let t2;
    	let i;
    	let t4;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Target";
    			t1 = space();
    			p = element("p");
    			t2 = text("Use the name ");
    			i = element("i");
    			i.textContent = "target";
    			t4 = text(" for the variable of what you are testing.");
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$p, 1, 2, 9);
    			add_location(i, file$p, 3, 17, 48);
    			attr_dev(p, "class", "svelte-1yhpnzq");
    			add_location(p, file$p, 2, 2, 27);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$p, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p);
    			append_dev(p, t2);
    			append_dev(p, i);
    			append_dev(p, t4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Target', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Target> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Target extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$p, create_fragment$p, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Target",
    			options,
    			id: create_fragment$p.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Actual.svelte generated by Svelte v3.43.2 */

    const file$o = "src/pages/UnitTesting/ETA/Actual.svelte";

    function create_fragment$o(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p;
    	let t2;
    	let i;
    	let t4;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Actual";
    			t1 = space();
    			p = element("p");
    			t2 = text("Use the name ");
    			i = element("i");
    			i.textContent = "actual";
    			t4 = text(" for the variable of the result you want to verify.");
    			attr_dev(h2, "class", "svelte-1yhpnzq");
    			add_location(h2, file$o, 1, 2, 9);
    			add_location(i, file$o, 3, 17, 48);
    			attr_dev(p, "class", "svelte-1yhpnzq");
    			add_location(p, file$o, 2, 2, 27);
    			attr_dev(root, "class", "svelte-1yhpnzq");
    			add_location(root, file$o, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p);
    			append_dev(p, t2);
    			append_dev(p, i);
    			append_dev(p, t4);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$o($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Actual', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Actual> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Actual extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Actual",
    			options,
    			id: create_fragment$o.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Example.svelte generated by Svelte v3.43.2 */

    const file$n = "src/pages/UnitTesting/ETA/Example.svelte";

    function create_fragment$n(ctx) {
    	let pre;

    	const block = {
    		c: function create() {
    			pre = element("pre");
    			pre.textContent = `${/*code2*/ ctx[0]}`;
    			add_location(pre, file$n, 22, 0, 443);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, pre, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(pre);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$n($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code2 = `
[TestMethod()]
public void WhenNameSetThenValueUpdated()
{
// Arrange
var expected = "Name";

var id = new Guid("04360d3f-76bb-42c7-96dc-982934c39a3c");
var publishedLocation = "PublishedLocation";

var target = new Enlistment(id, publishedLocation);

// Act
target.Name = expected;
var actual = target.Name;

// Assert                                  
Assert.AreEqual(expected, actual);
}
    `;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code2 });
    	return [code2];
    }

    class Example$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$n, create_fragment$n, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$n.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Benefits.svelte generated by Svelte v3.43.2 */

    const file$m = "src/pages/UnitTesting/ETA/Benefits.svelte";

    function create_fragment$m(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Benefits";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Helps ensure your assertion compares expected vs. actual.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Improved readability of tests. Other developers can scan quickly to find\n      the key variables.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "You avoid depending on the types and names of the code under test. If that\n      code changes some names, you don't have to update all your tests.";
    			attr_dev(h3, "class", "svelte-11l7jnb");
    			add_location(h3, file$m, 1, 2, 9);
    			add_location(li0, file$m, 3, 4, 38);
    			add_location(li1, file$m, 4, 4, 109);
    			add_location(li2, file$m, 8, 4, 232);
    			add_location(ul, file$m, 2, 2, 29);
    			attr_dev(root, "class", "svelte-11l7jnb");
    			add_location(root, file$m, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$m($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Benefits', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Benefits> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Benefits$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$m, create_fragment$m, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Benefits",
    			options,
    			id: create_fragment$m.name
    		});
    	}
    }

    /* src/pages/UnitTesting/ETA/Tips.svelte generated by Svelte v3.43.2 */

    const file$l = "src/pages/UnitTesting/ETA/Tips.svelte";

    function create_fragment$l(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t2;
    	let i0;
    	let t4;
    	let i1;
    	let t6;
    	let t7;
    	let li1;
    	let t9;
    	let li2;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Tips";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			t2 = text("If you have multiple variables for expected or actual values, then use ");
    			i0 = element("i");
    			i0.textContent = "expected";
    			t4 = text("\n      and ");
    			i1 = element("i");
    			i1.textContent = "actual";
    			t6 = text(" as prefixes (e.g. expectedFirstName, expectedLastName).");
    			t7 = space();
    			li1 = element("li");
    			li1.textContent = "If you are testing a static method and don't have an instance variable for\n      your target you can just skip naming anything target.";
    			t9 = space();
    			li2 = element("li");
    			li2.textContent = "If your language can infer types, then don't specify the types of\n      variables explicitly (e.g. use var, let, const). If you need to verify a\n      type, then assert you have the correct type.";
    			attr_dev(h3, "class", "svelte-1pbolr");
    			add_location(h3, file$l, 1, 2, 9);
    			add_location(i0, file$l, 4, 77, 116);
    			add_location(i1, file$l, 7, 10, 158);
    			add_location(li0, file$l, 3, 4, 34);
    			add_location(li1, file$l, 9, 4, 242);
    			add_location(li2, file$l, 13, 4, 402);
    			add_location(ul, file$l, 2, 2, 25);
    			add_location(root, file$l, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(li0, t2);
    			append_dev(li0, i0);
    			append_dev(li0, t4);
    			append_dev(li0, i1);
    			append_dev(li0, t6);
    			append_dev(ul, t7);
    			append_dev(ul, li1);
    			append_dev(ul, t9);
    			append_dev(ul, li2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$l($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Tips', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Tips> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Tips$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tips",
    			options,
    			id: create_fragment$l.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/Title.svelte generated by Svelte v3.43.2 */

    const file$k = "src/pages/UnitTesting/WhenThen/Title.svelte";

    function create_fragment$k(ctx) {
    	let root;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h1 = element("h1");
    			h1.textContent = "The When/Then pattern";
    			t1 = space();
    			p = element("p");
    			p.textContent = "This pattern names your tests as condition/result statements.";
    			attr_dev(h1, "class", "svelte-14ivs0n");
    			add_location(h1, file$k, 1, 2, 9);
    			attr_dev(p, "class", "svelte-14ivs0n");
    			add_location(p, file$k, 2, 2, 42);
    			attr_dev(root, "class", "svelte-14ivs0n");
    			add_location(root, file$k, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h1);
    			append_dev(root, t1);
    			append_dev(root, p);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$k($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$k.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/WhenThen.svelte generated by Svelte v3.43.2 */

    const file$j = "src/pages/UnitTesting/WhenThen/WhenThen.svelte";

    function create_fragment$j(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p;
    	let t2;
    	let i0;
    	let t4;
    	let i1;
    	let t6;
    	let t7;
    	let div;
    	let t9;
    	let pre;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "When/Then";
    			t1 = space();
    			p = element("p");
    			t2 = text("You can name your test as When ");
    			i0 = element("i");
    			i0.textContent = "Condition";
    			t4 = text(" Then ");
    			i1 = element("i");
    			i1.textContent = "Result";
    			t6 = text(".");
    			t7 = space();
    			div = element("div");
    			div.textContent = "For example,";
    			t9 = space();
    			pre = element("pre");
    			pre.textContent = "WhenIndexOutOfRangeThrowsError";
    			attr_dev(h2, "class", "svelte-12nhx4o");
    			add_location(h2, file$j, 1, 2, 9);
    			add_location(i0, file$j, 3, 35, 69);
    			add_location(i1, file$j, 3, 57, 91);
    			attr_dev(p, "class", "svelte-12nhx4o");
    			add_location(p, file$j, 2, 2, 30);
    			add_location(div, file$j, 5, 2, 115);
    			add_location(pre, file$j, 6, 2, 141);
    			attr_dev(root, "class", "svelte-12nhx4o");
    			add_location(root, file$j, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p);
    			append_dev(p, t2);
    			append_dev(p, i0);
    			append_dev(p, t4);
    			append_dev(p, i1);
    			append_dev(p, t6);
    			append_dev(root, t7);
    			append_dev(root, div);
    			append_dev(root, t9);
    			append_dev(root, pre);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$j($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('WhenThen', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<WhenThen> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class WhenThen extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "WhenThen",
    			options,
    			id: create_fragment$j.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/ThenWhen.svelte generated by Svelte v3.43.2 */

    const file$i = "src/pages/UnitTesting/WhenThen/ThenWhen.svelte";

    function create_fragment$i(ctx) {
    	let root;
    	let h2;
    	let t1;
    	let p;
    	let t3;
    	let div;
    	let t5;
    	let pre;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h2 = element("h2");
    			h2.textContent = "Then/When";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Some testing frameworks like Jest have an it() function which causes\n    inverting the when and the then.";
    			t3 = space();
    			div = element("div");
    			div.textContent = "For example,";
    			t5 = space();
    			pre = element("pre");
    			pre.textContent = "it('throws when index out of range')";
    			attr_dev(h2, "class", "svelte-12nhx4o");
    			add_location(h2, file$i, 1, 2, 9);
    			attr_dev(p, "class", "svelte-12nhx4o");
    			add_location(p, file$i, 2, 2, 30);
    			add_location(div, file$i, 6, 2, 153);
    			add_location(pre, file$i, 7, 2, 179);
    			attr_dev(root, "class", "svelte-12nhx4o");
    			add_location(root, file$i, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h2);
    			append_dev(root, t1);
    			append_dev(root, p);
    			append_dev(root, t3);
    			append_dev(root, div);
    			append_dev(root, t5);
    			append_dev(root, pre);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$i.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$i($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ThenWhen', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ThenWhen> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class ThenWhen extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ThenWhen",
    			options,
    			id: create_fragment$i.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/Example.svelte generated by Svelte v3.43.2 */

    const file$h = "src/pages/UnitTesting/WhenThen/Example.svelte";

    function create_fragment$h(ctx) {
    	let pre;

    	const block = {
    		c: function create() {
    			pre = element("pre");
    			pre.textContent = `${/*code3*/ ctx[0]}`;
    			add_location(pre, file$h, 21, 0, 583);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, pre, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(pre);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Example', slots, []);

    	const code3 = `
//Unit testing a Name property:

public void WhenNameSetThenValueSet() {}

public void WhenNameSetToDifferentValueThenPropertyChangedRaised() {}

public void WhenNameSetToSameValueThenPropertyChangedNotRaised() {}

public void WhenNameSetToNullThenExceptionThrown() {}

public void WhenNameSetToEmptyThenValueSet() {}

//Unit testing a bank account transfer method:

public void WhenTransferCalledWithAmountGreaterThanMaximumThenExceptionThrown() {}

public void WhenTranserCalledAndTransferCancelledThenAccountBalancesNotChanged() {}
`;

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Example> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ code3 });
    	return [code3];
    }

    class Example extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Example",
    			options,
    			id: create_fragment$h.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/Benefits.svelte generated by Svelte v3.43.2 */

    const file$g = "src/pages/UnitTesting/WhenThen/Benefits.svelte";

    function create_fragment$g(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Benefits";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "The test name is easy to read as a meaningful sentence.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "The descriptive name avoids the need for comments to explain what the test\n      does.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "The name encourages asserting one logical result per condition. This makes\n      the test more atomic and less likely to partial failures that require\n      stepping through with the debugger.";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "The test is easy to distinguish from other tests. Any decent test runner\n      shows you where the test lives in the code hierarchy (e.g. project,\n      namespace, and class) so putting code structure in the name is\n      unnecessary.";
    			attr_dev(h3, "class", "svelte-1pbolr");
    			add_location(h3, file$g, 1, 2, 9);
    			add_location(li0, file$g, 3, 4, 38);
    			add_location(li1, file$g, 4, 4, 107);
    			add_location(li2, file$g, 8, 4, 219);
    			add_location(li3, file$g, 13, 4, 437);
    			add_location(ul, file$g, 2, 2, 29);
    			add_location(root, file$g, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Benefits', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Benefits> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Benefits extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Benefits",
    			options,
    			id: create_fragment$g.name
    		});
    	}
    }

    /* src/pages/UnitTesting/WhenThen/Tips.svelte generated by Svelte v3.43.2 */

    const file$f = "src/pages/UnitTesting/WhenThen/Tips.svelte";

    function create_fragment$f(ctx) {
    	let root;
    	let h3;
    	let t1;
    	let ul;
    	let li0;
    	let t3;
    	let li1;
    	let t5;
    	let li2;
    	let t7;
    	let li3;

    	const block = {
    		c: function create() {
    			root = element("root");
    			h3 = element("h3");
    			h3.textContent = "Tips";
    			t1 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "Use the past tense of verbs. Past tense solidifies the test as a factual\n      entity in the readers mind.";
    			t3 = space();
    			li1 = element("li");
    			li1.textContent = "Avoid passive verbs (e.g. is, are). They take up space without much\n      benefit and humans reading the test name will fill these in automatically\n      in their heads.";
    			t5 = space();
    			li2 = element("li");
    			li2.textContent = "Choose nouns and verbs you would use when describing the test to other\n      developers (e.g. set a property, call a method, raise an event).";
    			t7 = space();
    			li3 = element("li");
    			li3.textContent = "Don't worry too much about name length, but keep the names just long\n      enough to distinguish one test from another and make the intention of the\n      test clear.";
    			attr_dev(h3, "class", "svelte-1pbolr");
    			add_location(h3, file$f, 1, 2, 9);
    			add_location(li0, file$f, 3, 4, 34);
    			add_location(li1, file$f, 7, 4, 166);
    			add_location(li2, file$f, 12, 4, 361);
    			add_location(li3, file$f, 16, 4, 528);
    			add_location(ul, file$f, 2, 2, 25);
    			add_location(root, file$f, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, root, anchor);
    			append_dev(root, h3);
    			append_dev(root, t1);
    			append_dev(root, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t3);
    			append_dev(ul, li1);
    			append_dev(ul, t5);
    			append_dev(ul, li2);
    			append_dev(ul, t7);
    			append_dev(ul, li3);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(root);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Tips', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Tips> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Tips extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tips",
    			options,
    			id: create_fragment$f.name
    		});
    	}
    }

    /* src/pages/UnitTesting/UnitTesting.svelte generated by Svelte v3.43.2 */
    const file$e = "src/pages/UnitTesting/UnitTesting.svelte";

    function create_fragment$e(ctx) {
    	let article;
    	let page;
    	let current;

    	page = new Page({
    			props: { pageItems: /*pageItems*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			article = element("article");
    			create_component(page.$$.fragment);
    			attr_dev(article, "class", "svelte-6wrq3h");
    			add_location(article, file$e, 47, 0, 1946);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			mount_component(page, article, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(page.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(page.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			destroy_component(page);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('UnitTesting', slots, []);

    	const pageItems = [
    		[Title$3, "r1 c1 cs13", "b-t"],
    		[Title$2, "r2 c2 cs11", "b-t"],
    		[Arrange, "r3 c2 cs3", "r-l"],
    		[Act, "r3 c6 cs3", "r-l"],
    		[Assert, "r3 c10 cs3", "b-t"],
    		[Example$2, "r4 c1 cs13", "b-t"],
    		[Benefits$2, "r5 c3 cs3", "r-l"],
    		[Tips$2, "r5 c9 cs3", "b-t"],
    		[Title$1, "r6 c2 cs11", "b-t"],
    		[Expected, "r7 c2 cs3", "r-l"],
    		[Target, "r7 c6 cs3", "r-l"],
    		[Actual, "r7 c10 cs3", "b-t"],
    		[Example$1, "r8 c1 cs13", "b-t"],
    		[Benefits$1, "r9 c3 cs3", "r-l"],
    		[Tips$1, "r9 c9 cs3", "b-t"],
    		[Title, "r10 c2 cs11", "b-t"],
    		[WhenThen, "r11 c1 cs5", "r-l"],
    		[ThenWhen, "r11 c9 cs5", "b-t"],
    		[Example, "r12 c1 cs12", "b-t"],
    		[Benefits, "r13 c3 cs3", "r-l"],
    		[Tips, "r13 c9 cs3"]
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<UnitTesting> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Page,
    		Title: Title$3,
    		AAA_Title: Title$2,
    		AAA_Arrange: Arrange,
    		AAA_Act: Act,
    		AAA_Assert: Assert,
    		AAA_Example: Example$2,
    		AAA_Benefits: Benefits$2,
    		AAA_Tips: Tips$2,
    		ETA_Title: Title$1,
    		ETA_Expected: Expected,
    		ETA_Target: Target,
    		ETA_Actual: Actual,
    		ETA_Example: Example$1,
    		ETA_Benefits: Benefits$1,
    		ETA_Tips: Tips$1,
    		WhenThen_Title: Title,
    		WhenThen_WhenThen: WhenThen,
    		WhenThen_ThenWhen: ThenWhen,
    		WhenThen_Example: Example,
    		WhenThen_Benefits: Benefits,
    		WhenThen_Tips: Tips,
    		pageItems
    	});

    	return [pageItems];
    }

    class UnitTesting extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "UnitTesting",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    const pages = [
        {
            id: "commenting-code",
            component: CodeComments,
            title: "Commenting Code",
        },
        {
            id: "code-locality",
            component: CodeLocality,
            title: "Code Locality",
        },
        {
            id: "naming-code",
            component: CodeNaming,
            title: "Naming Code",
        },
        {
            id: "pretty-good-nlp",
            component: PrettyGoodNlp,
            title: "pretty-good-nlp",
        },
        {
            id: "productivity",
            component: Productivity,
            title: "Productivity",
        },
        {
            id: "unit-testing",
            component: UnitTesting,
            title: "Unit Testing",
        },
    ];

    let $currentPage;
    currentPage.subscribe((value) => ($currentPage = value));
    const scrollPositionsById = {};
    const setUrlQueryId = (id) => {
        if (window) {
            const urlParams = new URLSearchParams(window.location.search);
            const idParam = urlParams.get("id");
            const newUrl = new URL(window.location.toString());
            id ? newUrl.searchParams.set("id", id) : newUrl.searchParams.delete("id");
            if (idParam !== id) {
                window.history.pushState({}, "", newUrl.toString());
            }
        }
    };
    const rememberScrollPosition = () => {
        let id = ($currentPage === null || $currentPage === void 0 ? void 0 : $currentPage.id) || "home";
        console.log("remember", id, window.scrollY);
        scrollPositionsById[id] = {
            scrollX: window.scrollX,
            scrollY: window.scrollY,
        };
    };
    const restoreScrollPosition = () => {
        let id = ($currentPage === null || $currentPage === void 0 ? void 0 : $currentPage.id) || "home";
        const position = scrollPositionsById[id];
        console.log("restore", id, position === null || position === void 0 ? void 0 : position.scrollY);
        window.scroll((position === null || position === void 0 ? void 0 : position.scrollX) || 0, (position === null || position === void 0 ? void 0 : position.scrollY) || 0);
    };
    /**
     * Navigates to a page and pushes to history
     * @param id The page ID or undefined to show the front page
     */
    const goToPage = (id) => {
        if (id) {
            const page = pages.find((x) => x.id === id);
            if (page) {
                rememberScrollPosition();
                setUrlQueryId(id);
                currentPage.set(page);
                setTimeout(() => restoreScrollPosition(), 120);
            }
        }
        else {
            rememberScrollPosition();
            setUrlQueryId(undefined);
            currentPage.set(undefined);
            setTimeout(() => restoreScrollPosition(), 120);
        }
    };
    /**
     * Shows a page in the UI
     * @param id The page ID or undefined to show the front page
     */
    const showPage = (id) => {
        if (id) {
            const page = pages.find((x) => x.id === id);
            if (page) {
                rememberScrollPosition();
                currentPage.set(page);
                setTimeout(() => restoreScrollPosition(), 120);
            }
        }
        else {
            rememberScrollPosition();
            currentPage.set(undefined);
            setTimeout(() => restoreScrollPosition(), 120);
        }
    };

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity);
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
        };
    }

    /* src/icons/GitHub.svelte generated by Svelte v3.43.2 */

    const file$d = "src/icons/GitHub.svelte";

    function create_fragment$d(ctx) {
    	let svg;
    	let title;
    	let t;
    	let path;

    	let svg_levels = [
    		{ fill: "currentColor" },
    		{ height: "100%" },
    		{ viewBox: "0 0 16 16" },
    		{ width: "100%" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		/*$$restProps*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			title = svg_element("title");
    			t = text("Github");
    			path = svg_element("path");
    			add_location(title, file$d, 8, 2, 140);
    			attr_dev(path, "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z");
    			attr_dev(path, "fill", "#171516");
    			add_location(path, file$d, 9, 2, 164);
    			set_svg_attributes(svg, svg_data);
    			add_location(svg, file$d, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, title);
    			append_dev(title, t);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ fill: "currentColor" },
    				{ height: "100%" },
    				{ viewBox: "0 0 16 16" },
    				{ width: "100%" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	const omit_props_names = [];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('GitHub', slots, []);

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    	};

    	return [$$restProps];
    }

    class GitHub extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "GitHub",
    			options,
    			id: create_fragment$d.name
    		});
    	}
    }

    /* src/icons/LinkedIn.svelte generated by Svelte v3.43.2 */

    const file$c = "src/icons/LinkedIn.svelte";

    function create_fragment$c(ctx) {
    	let svg;
    	let title;
    	let t;
    	let path;

    	let svg_levels = [
    		{ fill: "currentColor" },
    		{ height: "100%" },
    		{ viewBox: "0 0 16 16" },
    		{ width: "100%" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		/*$$restProps*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			title = svg_element("title");
    			t = text("Linked In");
    			path = svg_element("path");
    			add_location(title, file$c, 8, 2, 140);
    			attr_dev(path, "d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z");
    			attr_dev(path, "fill", "#0a66c2");
    			add_location(path, file$c, 9, 2, 167);
    			set_svg_attributes(svg, svg_data);
    			add_location(svg, file$c, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, title);
    			append_dev(title, t);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ fill: "currentColor" },
    				{ height: "100%" },
    				{ viewBox: "0 0 16 16" },
    				{ width: "100%" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	const omit_props_names = [];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('LinkedIn', slots, []);

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    	};

    	return [$$restProps];
    }

    class LinkedIn extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinkedIn",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* src/icons/StackOverflow.svelte generated by Svelte v3.43.2 */

    const file$b = "src/icons/StackOverflow.svelte";

    function create_fragment$b(ctx) {
    	let svg;
    	let title;
    	let t;
    	let path0;
    	let path1;

    	let svg_levels = [
    		{ fill: "currentColor" },
    		{ height: "100%" },
    		{ viewBox: "0 0 16 16" },
    		{ width: "100%" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		/*$$restProps*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			title = svg_element("title");
    			t = text("Stack Overflow");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			add_location(title, file$b, 8, 2, 140);
    			attr_dev(path0, "d", "M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z");
    			attr_dev(path0, "fill", "#bcbbbb");
    			add_location(path0, file$b, 9, 2, 172);
    			attr_dev(path1, "d", "M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z");
    			attr_dev(path1, "fill", "#f48024");
    			add_location(path1, file$b, 10, 2, 258);
    			set_svg_attributes(svg, svg_data);
    			add_location(svg, file$b, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, title);
    			append_dev(title, t);
    			append_dev(svg, path0);
    			append_dev(svg, path1);
    		},
    		p: function update(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ fill: "currentColor" },
    				{ height: "100%" },
    				{ viewBox: "0 0 16 16" },
    				{ width: "100%" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	const omit_props_names = [];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('StackOverflow', slots, []);

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    	};

    	return [$$restProps];
    }

    class StackOverflow extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "StackOverflow",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* src/icons/Twitter.svelte generated by Svelte v3.43.2 */

    const file$a = "src/icons/Twitter.svelte";

    function create_fragment$a(ctx) {
    	let svg;
    	let title;
    	let t;
    	let path;

    	let svg_levels = [
    		{ fill: "#1d9bf0" },
    		{ height: "100%" },
    		{ viewBox: "0 0 16 16" },
    		{ width: "100%" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		/*$$restProps*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			title = svg_element("title");
    			t = text("Twitter");
    			path = svg_element("path");
    			add_location(title, file$a, 8, 2, 135);
    			attr_dev(path, "d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
    			add_location(path, file$a, 9, 2, 160);
    			set_svg_attributes(svg, svg_data);
    			add_location(svg, file$a, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, title);
    			append_dev(title, t);
    			append_dev(svg, path);
    		},
    		p: function update(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ fill: "#1d9bf0" },
    				{ height: "100%" },
    				{ viewBox: "0 0 16 16" },
    				{ width: "100%" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	const omit_props_names = [];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Twitter', slots, []);

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    	};

    	return [$$restProps];
    }

    class Twitter extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Twitter",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    var img$9 = "data:image/png;base64,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";

    /* src/AppHeader.svelte generated by Svelte v3.43.2 */
    const file$9 = "src/AppHeader.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[6] = list[i];
    	child_ctx[8] = i;
    	return child_ctx;
    }

    // (32:6) {#if mounted}
    function create_if_block$6(ctx) {
    	let each_1_anchor;
    	let each_value = /*nameCharacters*/ ctx[2];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*nameCharacters*/ 4) {
    				each_value = /*nameCharacters*/ ctx[2];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: function intro(local) {
    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}
    		},
    		o: noop,
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(32:6) {#if mounted}",
    		ctx
    	});

    	return block;
    }

    // (43:12) {:else}
    function create_else_block$2(ctx) {
    	let t_value = /*nameCharacter*/ ctx[6] + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(43:12) {:else}",
    		ctx
    	});

    	return block;
    }

    // (41:12) {#if nameCharacter === " "}
    function create_if_block_1$6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(" ");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$6.name,
    		type: "if",
    		source: "(41:12) {#if nameCharacter === \\\" \\\"}",
    		ctx
    	});

    	return block;
    }

    // (33:8) {#each nameCharacters as nameCharacter, index}
    function create_each_block$1(ctx) {
    	let name_character;
    	let t;
    	let name_character_intro;

    	function select_block_type(ctx, dirty) {
    		if (/*nameCharacter*/ ctx[6] === " ") return create_if_block_1$6;
    		return create_else_block$2;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			name_character = element("name-character");
    			if_block.c();
    			t = space();
    			set_custom_element_data(name_character, "class", "svelte-v3wca3");
    			add_location(name_character, file$9, 33, 10, 1002);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, name_character, anchor);
    			if_block.m(name_character, null);
    			append_dev(name_character, t);
    		},
    		p: function update(ctx, dirty) {
    			if_block.p(ctx, dirty);
    		},
    		i: function intro(local) {
    			if (!name_character_intro) {
    				add_render_callback(() => {
    					name_character_intro = create_in_transition(name_character, fly, {
    						y: /*index*/ ctx[8] % 2 === 0 ? -100 : 100,
    						duration: 150,
    						delay: 750 + /*index*/ ctx[8] * 100
    					});

    					name_character_intro.start();
    				});
    			}
    		},
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(name_character);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(33:8) {#each nameCharacters as nameCharacter, index}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$9(ctx) {
    	let app_header;
    	let app_title;
    	let photo;
    	let photo_border;
    	let photo_frame;
    	let img;
    	let img_src_value;
    	let t0;
    	let my_name;
    	let t1;
    	let social;
    	let a0;
    	let github;
    	let t2;
    	let a1;
    	let linkedin;
    	let t3;
    	let a2;
    	let twitter;
    	let t4;
    	let a3;
    	let stackoverflow;
    	let app_header_resize_listener;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block = /*mounted*/ ctx[1] && create_if_block$6(ctx);
    	github = new GitHub({ $$inline: true });
    	linkedin = new LinkedIn({ $$inline: true });
    	twitter = new Twitter({ $$inline: true });
    	stackoverflow = new StackOverflow({ $$inline: true });

    	const block = {
    		c: function create() {
    			app_header = element("app-header");
    			app_title = element("app-title");
    			photo = element("photo");
    			photo_border = element("photo-border");
    			photo_frame = element("photo-frame");
    			img = element("img");
    			t0 = space();
    			my_name = element("my-name");
    			if (if_block) if_block.c();
    			t1 = space();
    			social = element("social");
    			a0 = element("a");
    			create_component(github.$$.fragment);
    			t2 = space();
    			a1 = element("a");
    			create_component(linkedin.$$.fragment);
    			t3 = space();
    			a2 = element("a");
    			create_component(twitter.$$.fragment);
    			t4 = space();
    			a3 = element("a");
    			create_component(stackoverflow.$$.fragment);
    			if (!src_url_equal(img.src, img_src_value = img$9)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Geoff Cox");
    			attr_dev(img, "width", "50");
    			attr_dev(img, "height", "50");
    			add_location(img, file$9, 26, 10, 758);
    			set_custom_element_data(photo_frame, "class", "svelte-v3wca3");
    			add_location(photo_frame, file$9, 25, 8, 734);
    			set_custom_element_data(photo_border, "class", "svelte-v3wca3");
    			add_location(photo_border, file$9, 24, 6, 711);
    			attr_dev(photo, "class", "svelte-v3wca3");
    			add_location(photo, file$9, 23, 4, 669);
    			set_custom_element_data(my_name, "class", "svelte-v3wca3");
    			add_location(my_name, file$9, 30, 4, 879);
    			set_custom_element_data(app_title, "class", "svelte-v3wca3");
    			add_location(app_title, file$9, 22, 2, 653);
    			attr_dev(a0, "href", "https://github.com/GeoffCox");
    			attr_dev(a0, "target", "_blank");
    			attr_dev(a0, "class", "svelte-v3wca3");
    			add_location(a0, file$9, 51, 4, 1413);
    			attr_dev(a1, "href", "https://www.linkedin.com/in/geoffcoxlive/");
    			attr_dev(a1, "target", "_blank");
    			attr_dev(a1, "class", "svelte-v3wca3");
    			add_location(a1, file$9, 54, 4, 1498);
    			attr_dev(a2, "href", "https://twitter.com/geoffcoxlive");
    			attr_dev(a2, "target", "_blank");
    			attr_dev(a2, "class", "svelte-v3wca3");
    			add_location(a2, file$9, 57, 4, 1599);
    			attr_dev(a3, "href", "https://stackoverflow.com/users/30505/geoff-cox");
    			attr_dev(a3, "target", "_blank");
    			attr_dev(a3, "class", "svelte-v3wca3");
    			add_location(a3, file$9, 60, 4, 1690);
    			attr_dev(social, "class", "svelte-v3wca3");
    			add_location(social, file$9, 50, 2, 1400);
    			set_custom_element_data(app_header, "class", "svelte-v3wca3");
    			add_render_callback(() => /*app_header_elementresize_handler*/ ctx[5].call(app_header));
    			toggle_class(app_header, "cozy", /*clientWidth*/ ctx[0] >= 200 && /*clientWidth*/ ctx[0] < 450);
    			toggle_class(app_header, "compact", /*clientWidth*/ ctx[0] < 200);
    			add_location(app_header, file$9, 17, 0, 527);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, app_header, anchor);
    			append_dev(app_header, app_title);
    			append_dev(app_title, photo);
    			append_dev(photo, photo_border);
    			append_dev(photo_border, photo_frame);
    			append_dev(photo_frame, img);
    			append_dev(app_title, t0);
    			append_dev(app_title, my_name);
    			if (if_block) if_block.m(my_name, null);
    			append_dev(app_header, t1);
    			append_dev(app_header, social);
    			append_dev(social, a0);
    			mount_component(github, a0, null);
    			append_dev(social, t2);
    			append_dev(social, a1);
    			mount_component(linkedin, a1, null);
    			append_dev(social, t3);
    			append_dev(social, a2);
    			mount_component(twitter, a2, null);
    			append_dev(social, t4);
    			append_dev(social, a3);
    			mount_component(stackoverflow, a3, null);
    			app_header_resize_listener = add_resize_listener(app_header, /*app_header_elementresize_handler*/ ctx[5].bind(app_header));
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(photo, "click", /*click_handler*/ ctx[3], false, false, false),
    					listen_dev(my_name, "click", /*click_handler_1*/ ctx[4], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*mounted*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty & /*mounted*/ 2) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(my_name, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*clientWidth*/ 1) {
    				toggle_class(app_header, "cozy", /*clientWidth*/ ctx[0] >= 200 && /*clientWidth*/ ctx[0] < 450);
    			}

    			if (dirty & /*clientWidth*/ 1) {
    				toggle_class(app_header, "compact", /*clientWidth*/ ctx[0] < 200);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			transition_in(github.$$.fragment, local);
    			transition_in(linkedin.$$.fragment, local);
    			transition_in(twitter.$$.fragment, local);
    			transition_in(stackoverflow.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(github.$$.fragment, local);
    			transition_out(linkedin.$$.fragment, local);
    			transition_out(twitter.$$.fragment, local);
    			transition_out(stackoverflow.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(app_header);
    			if (if_block) if_block.d();
    			destroy_component(github);
    			destroy_component(linkedin);
    			destroy_component(twitter);
    			destroy_component(stackoverflow);
    			app_header_resize_listener();
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const name = "Geoff Cox";

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AppHeader', slots, []);
    	let clientWidth;
    	let mounted = false;
    	const nameCharacters = Array.from(name);

    	onMount(() => {
    		$$invalidate(1, mounted = true);
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<AppHeader> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => goToPage();
    	const click_handler_1 = () => goToPage();

    	function app_header_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		$$invalidate(0, clientWidth);
    	}

    	$$self.$capture_state = () => ({
    		onMount,
    		fly,
    		goToPage,
    		GitHub,
    		LinkedIn,
    		StackOverflow,
    		Twitter,
    		Geoff: img$9,
    		clientWidth,
    		mounted,
    		name,
    		nameCharacters
    	});

    	$$self.$inject_state = $$props => {
    		if ('clientWidth' in $$props) $$invalidate(0, clientWidth = $$props.clientWidth);
    		if ('mounted' in $$props) $$invalidate(1, mounted = $$props.mounted);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		clientWidth,
    		mounted,
    		nameCharacters,
    		click_handler,
    		click_handler_1,
    		app_header_elementresize_handler
    	];
    }

    class AppHeader extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AppHeader",
    			options,
    			id: create_fragment$9.name
    		});
    	}
    }

    var img$8 = "data:image/png;base64,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bnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyMzAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyMDQiIGV4aWY6VXNlckNvbW1lbnQ9IlNjcmVlbnNob3QiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTMwVDEyOjI4OjM2LTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0zMVQxNDozNjoyNy0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0zMVQxNDozNjoyNy0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyM2E5MGVmLTk0NmUtNGE3Yi05ZGE5LTg1ZTk0NjM2MzMzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MjNhOTBlZi05NDZlLTRhN2ItOWRhOS04NWU5NDYzNjMzMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MjNhOTBlZi05NDZlLTRhN2ItOWRhOS04NWU5NDYzNjMzMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjNhOTBlZi05NDZlLTRhN2ItOWRhOS04NWU5NDYzNjMzMzkiIHN0RXZ0OndoZW49IjIwMjEtMTItMzFUMTQ6MzY6MjctMDg6MDAiIHN0RXZ0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";

    var img$7 = "data:image/png;base64,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bnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyMzAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyMDQiIGV4aWY6VXNlckNvbW1lbnQ9IlNjcmVlbnNob3QiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTMwVDEyOjMxOjAxLTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0zMVQxNDozOC0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0zMVQxNDozOC0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwYTVhYTIxLTAzMjUtNDhlOC05OTlkLWJlZTU3YzUyMTQyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMGE1YWEyMS0wMzI1LTQ4ZTgtOTk5ZC1iZWU1N2M1MjE0MjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGE1YWEyMS0wMzI1LTQ4ZTgtOTk5ZC1iZWU1N2M1MjE0MjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMGE1YWEyMS0wMzI1LTQ4ZTgtOTk5ZC1iZWU1N2M1MjE0MjEiIHN0RXZ0OndoZW49IjIwMjEtMTItMzFUMTQ6MzgtMDg6MDAiIHN0RXZ0OnNvZnR3YXJl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";

    var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAADMCAIAAADS7/fPAAAMe2lDQ1BEaXNwbGF5AABIiZVXd1TT99d+viMJCYQwAgqChI0giMwggkDYIHuLIyQBAiHEkKDiHqUK1i2iONG6q1YrqHUgatVq3bOOohZHpRa17sHvjwS09ve+73nvOcnnnufz3Pvce7/fk5ML8F6LVSoFaQKUKTXqtJgIQU5unoDVDiNwYQYLCMWSClV4SkoiAHSf/7SXV0AAwEVPsUql+Pf9/2pmUlmFBCDyARRIKyRlANEC0MslKrUGYOYDcByjUWkA5hQAfHVObh7AXASAX6TzNwLgF+j8/QD46ow0EcA8BxgYicXqIsD4JgBBpaRIAxi/B+CtlMqVAK8/gFBJsVgK8BQA+peVlUsBXj0At0pJkQrgtQAQFnyWs+gf+Qt68ovFRT2+ri8AgEGkvEKlEI/7f47m/7YyhbZbwwWAUbE6Ng0AHyCulZYnpAEwAogOZUFSMgAzgHgtl+rmDpCcYm1spo5P2kgqRHkALAHSWyqOTABgA5DRSkVSoh4vKJRHxwEwAcixck1cBoDeADlTVhGVruesVpen6bXIpkK1KFyPnxCrAb3WbW1pZrg+/7NiWZw+P2VcVZyRDYADUE6V8qwkAMYA5VVRmp6g5wyuKhYldXPU2rRMAE4AlSZTxkTo8lOVheroND2/pqyiu19qdbE8Lknv79QUZ8Tq5kMdlYij0nW9UOdkyvDM7jyyipzE7l6kssgoXe/UQ5kyM12f57VKE5Gmi6U5KkWKnk87yBQxaQAcANqvojJdH0tnadQZ+mdEF6o0KRm6OumqEnF8iq4eeh4SIUIkBNBCgAKUowTyMx3NHRDob6IhhhpFkMFTj3RHZEMMNZQQIx1V+BNKyFDRExcBMdSQoRJKfOhBdd+eKIQYalRChgqU4j7UKEMCFJBBCzVkUPaoZeF3qCH/l7oYAkhQDgXKoYb8f8C70U9IOERI1CPabkUBr5vJjGJGMmOZ0cx+tDUdSgfTiXQoHUaH0j60kA7q7uMTn3GfcZ5xl3GZ0ca4PlI+Tf1FlUPRBq1+hjIUfD4L2oX2of3pCDqEDqWDIKAtaWt40n60kA6nh9DBtD8dBJG+bi3UX8zwiw4+exp6HtubTbJ7scPYbl9GGrsb+/dkkUH5j/noai3ombeo5+ZLfdFn05eiHAlfMqmZ1C7qOHWYOkntp5ohoA5Re6jT1AGq+bO363eoUdSjlgYZlCiFAvJ/6Yn1mmrIUOG9xfuR93vdnUY2VgMAonLVOLW8qFgjCFepFDJBnFLi1V/g4+0zEMjJzRPofr6ep4IAQFie/oRN/w0IOdTV1fXjJyz+EPB9IMDZ+wlzEwKmhsCJvRKtulKH0QDAAAc88GGFvnCEGzzhgwAEIwxRiEcyMpCLEZCgGGVQYwwmYCqqUYt5WIxlWIW12IjvsBPN2I/D+AmncA6XcQNtaMdjdOIl3hEEwSK4hDlhRdgRzoQH4UMIiVAiikgk0ohcYhRRRCgJLTGBmE7UEguIZcQaYhPxPbGXOEycJM4T14k7xCPiGfGWpEgjkk/aki7kAFJIhpMJZAY5nCwiR5NV5AxyDllPNpJbySbyMHmKvEy2kY/JFxQoQ8qSsqc8KSElopKpPKqQUlOTqBqqjmqktlH7qOPURaqN6qDe0EzanBbQnnQwHUtn0hJ6ND2Jnk0vozfSTfRR+iJ9h+6kPzK4DBuGB2MQI46RwyhijGFUM+oY6xm7GccYlxntjJdMJtOS6coMZMYyc5klzPHM2cwVzO3MFuZ55j3mCxaLZcXyYIWwklliloZVzVrK2so6xLrAame9NjA0sDPwMYg2yDNQGkwzqDPYbHDQ4ILBA4N3bBO2M3sQO5ktZY9jz2WvY+9jn2W3s99xTDmunBBOBqeEM5VTz9nGOca5yXluaGjoYBhkmGooN5xiWG+4w/CE4R3DN0ZmRu5GIqN8I63RHKMNRi1G142ec7lcF24YN4+r4c7hbuIe4d7mvjY2N/YyjjOWGk82bjBuMr5g/ITH5jnzwnkjeFW8Ot4u3llehwnbxMVEZCI2mWTSYLLX5KrJC1Nz04GmyaZlprNNN5ueNH1oxjJzMYsyk5rNMFtrdsTsnjll7mguMpeYTzdfZ37MvJ3P5Lvy4/gl/Fr+d/wz/E4LMws/iyyLsRYNFgcs2iwpSxfLOEuF5VzLnZZXLN/2su0V3kvWa1avbb0u9HrVu0/vsN6y3jW9t/e+3PutlcAqyqrUar5Vs9Uta9ra3TrVeoz1Sutj1h19+H2C+0j61PTZ2edXG9LG3SbNZrzNWpvTNi9s+9rG2Kpsl9oese3oa9k3rG9J30V9D/Z9ZGduF2ont1tkd8juD4GFIFygENQLjgo67W3sY+219mvsz9i/c3B1yHSY5rDd4ZYjx1HoWOi4yLHVsdPJzmmo0wSnLU6/OrOdhc7Fzkucjzu/cnF1yXb52qXZ5aFrb9c41yrXLa433bhuQ9xGuzW6XerH7CfsV9pvRb9z7qS7v3uxe4P7WQ/SI8BD7rHC43x/Rv+g/sr+jf2vehp5hntWem7xvONl6ZXoNc2r2evJAKcBeQPmDzg+4KO3v7fCe533jYFmA+MHThu4b+AzH3cfiU+DzyVfrm+072TfPb5P/Tz8ZH4r/a75m/sP9f/av9X/Q0BggDpgW8CjQKfAUYHLA68K+cIU4WzhiSBGUETQ5KD9QW8GBQzSDNo56K9gz+DS4M3BDwe7DpYNXjf4XohDiDhkTUhbqCB0VOjq0LYh9kPEQxqH3A1zDJOGrQ97EN4vvCR8a/iTCO8IdcTuiFeiQaKJopZIKjImsibyTJRZVGbUsqjb0Q7RRdFbojtj/GPGx7TEMmITYufHXo2zjZPEbYrrjA+Mnxh/NMEoIT1hWcLdRPdEdeK+oeTQ+KELh95Mck5SJjUnIzkueWHyrRTXlNEpP6YyU1NSG1Lvpw1Mm5B2PN08fWT65vSXGREZczNuZLplajNbs3hZ+Vmbsl5lR2YvyG7LGZAzMedUrnWuPHdPHisvK2993othUcMWD2vP98+vzr8y3HX42OEnR1iPUIw4MJI3Ujxy1yjGqOxRm0e9FyeLG8UvCuIKlhd0SkSSJZLH0jDpIukjWYhsgexBYUjhgsKHRSFFC4seFQ8privukIvky+RPS2JLVpW8Kk0u3VDapchWbC8zKBtVtldppixVHi3vWz62/LzKQ1Wtahs9aPTi0Z3qBPX6CqJieMUeDV+j0pzWumm/0t6pDK1sqHw9JmvMrrGmY5VjT49zHzdr3IOq6Kpvx9PjJeNbJ9hPmDrhzsTwiWsmEZMKJrVOdpw8Y3L7lJgpG6dyppZO/WWa97QF0/6enj193wzbGVNm3Psq5qst1cbV6uqrXwd/vWomPVM+88ws31lLZ32skdb8XOtdW1f7frZk9s/fDPym/puuOYVzzswNmLtyHnOect6V+UPmb1xguqBqwb2FQxc2LRIsqln09+KRi0/W+dWtWsJZol3SVp9Yv2ep09J5S98vK152uSGiYftym+Wzlr9aIV1xYWXYym2rbFfVrnq7Wr762pqYNU2NLo11a5lrK9feX5e17vi3wm83rbdeX7v+wwblhraNaRuPbgrctGmzzea5W8gt2i2PtuZvPfdd5Hd7tnluW7PdcnvtDuzQ7vjj+1HfX9mZsLN1l3DXth+cf1i+23x3TRPRNK6ps7m4uW1P7p7ze+P3tu4L3rf7R68fN+y3399wwOLA3IOcgzMOdh2qOvSiRdXScbjo8L3Wka03juQcuXQ09eiZYwnHTvwU/dOR4+HHD50IObH/5KCTe38W/tx8KuBU02n/07t/8f9l95mAM01nA8/uORd0bt/5wecPXhhy4fDFyIs/XYq7dOpy0uXzVzKvXLuaf7XtmvTaw+uK609/rfz13Y0pNxk3a26Z3Kq7bXO78bd+v21vC2g7cCfyzum76Xdv3JPce/x7xe/v22fc596ve2D3YNNDn4f7H0U/OvfHsD/aH6sev+uo/tP0z+VP3J788FfYX6c7czrbn6qfdj2b/dzq+Ya//f5ufZHy4vbLspfvXtW8tnq98Y3wzfG32W8fvBvznvW+/kO/D/s+Jny82VXW1aUSq8UAAAoAWVgIPNsAcHMB83MAZ5huFwQAELr9FdD9B/nvvm5fBAAEANv4QGoHILoK7FgHuBQCvHwghQtkBIH09e356K2i0NdHl8soAmDc7up67gKwFgIf5nV1vWvs6vqwFqBuAi1K3Q4KAEwTYHXKh4KyAvwX0+2nn/X45QmQvr5++PL8DywskOZ7dOFaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZmFjLCAyMDIxLzExLzE3LTE3OjIzOjE5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyMzAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyMDQiIGV4aWY6VXNlckNvbW1lbnQ9IlNjcmVlbnNob3QiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTMwVDEyOjMyLTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0zMVQxNDozNzoxNy0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0zMVQxNDozNzoxNy0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2YzJiZjEzLTJiOGMtNDhhZS1hYWMxLTlmOGRjZmQ1YjFiNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NmMyYmYxMy0yYjhjLTQ4YWUtYWFjMS05ZjhkY2ZkNWIxYjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NmMyYmYxMy0yYjhjLTQ4YWUtYWFjMS05ZjhkY2ZkNWIxYjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NmMyYmYxMy0yYjhjLTQ4YWUtYWFjMS05ZjhkY2ZkNWIxYjYiIHN0RXZ0OndoZW49IjIwMjEtMTItMzFUMTQ6Mzc6MTctMDg6MDAiIHN0RXZ0OnNv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";

    var img$5 = "data:image/png;base64,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bnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyMzAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyMDQiIGV4aWY6VXNlckNvbW1lbnQ9IlNjcmVlbnNob3QiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTMwVDEyOjMzOjA0LTA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0zMVQxNDozODo0NS0wODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0zMVQxNDozODo0NS0wODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkYzZhN2I0LTY0NjUtNDVmZS1iZTE2LTcyMjc4NDM5OTAzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphZGZlYjhiNS02ZjZjLTQwYTEtODU2NC00MDcxNzFmYWQxM2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGZlYjhiNS02ZjZjLTQwYTEtODU2NC00MDcxNzFmYWQxM2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZGZlYjhiNS02ZjZjLTQwYTEtODU2NC00MDcxNzFmYWQxM2QiIHN0RXZ0OndoZW49IjIwMjEtMTItMzFUMTQ6MzU6MjgtMDg6MDAiIHN0RXZ0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";

    /* src/newFrontPage/About.svelte generated by Svelte v3.43.2 */
    const file$8 = "src/newFrontPage/About.svelte";

    function create_fragment$8(ctx) {
    	let about;
    	let section_header0;
    	let about_image0;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let section_name0;
    	let t2;
    	let content0;
    	let item0;
    	let t4;
    	let item1;
    	let t6;
    	let item2;
    	let t8;
    	let section_header1;
    	let about_image1;
    	let img1;
    	let img1_src_value;
    	let t9;
    	let section_name1;
    	let t11;
    	let content1;
    	let item3;
    	let t13;
    	let item4;
    	let t15;
    	let item5;
    	let t17;
    	let section_header2;
    	let about_image2;
    	let img2;
    	let img2_src_value;
    	let t18;
    	let section_name2;
    	let t20;
    	let content2;
    	let item6;
    	let t22;
    	let item7;
    	let t24;
    	let item8;
    	let t26;
    	let section_header3;
    	let about_image3;
    	let img3;
    	let img3_src_value;
    	let t27;
    	let section_name3;
    	let t29;
    	let content3;
    	let item9;
    	let t31;
    	let item10;
    	let t33;
    	let item11;

    	const block = {
    		c: function create() {
    			about = element("about");
    			section_header0 = element("section-header");
    			about_image0 = element("about-image");
    			img0 = element("img");
    			t0 = space();
    			section_name0 = element("section-name");
    			section_name0.textContent = "Profession";
    			t2 = space();
    			content0 = element("content");
    			item0 = element("item");
    			item0.textContent = "Principal software developer at Microsoft";
    			t4 = space();
    			item1 = element("item");
    			item1.textContent = "Helping advance web experiences on the Fluent UI React team";
    			t6 = space();
    			item2 = element("item");
    			item2.textContent = "Over 25 years professional experience building products, services, and\n      developer tools.";
    			t8 = space();
    			section_header1 = element("section-header");
    			about_image1 = element("about-image");
    			img1 = element("img");
    			t9 = space();
    			section_name1 = element("section-name");
    			section_name1.textContent = "Joy";
    			t11 = space();
    			content1 = element("content");
    			item3 = element("item");
    			item3.textContent = "Writing code everyday";
    			t13 = space();
    			item4 = element("item");
    			item4.textContent = "Thinking about the structure, names, and relationships of code to align\n      concepts and architecture";
    			t15 = space();
    			item5 = element("item");
    			item5.textContent = "Exploring new programming languages, technologies and teamwork approaches";
    			t17 = space();
    			section_header2 = element("section-header");
    			about_image2 = element("about-image");
    			img2 = element("img");
    			t18 = space();
    			section_name2 = element("section-name");
    			section_name2.textContent = "Character";
    			t20 = space();
    			content2 = element("content");
    			item6 = element("item");
    			item6.textContent = "Thoughtful, dedicated, and kind";
    			t22 = space();
    			item7 = element("item");
    			item7.textContent = "Motto is Be Prepared";
    			t24 = space();
    			item8 = element("item");
    			item8.textContent = "Optimist with resting pessimist face";
    			t26 = space();
    			section_header3 = element("section-header");
    			about_image3 = element("about-image");
    			img3 = element("img");
    			t27 = space();
    			section_name3 = element("section-name");
    			section_name3.textContent = "Mindset";
    			t29 = space();
    			content3 = element("content");
    			item9 = element("item");
    			item9.textContent = "Make a difference every day";
    			t31 = space();
    			item10 = element("item");
    			item10.textContent = "Help others grow, overcome, and shine";
    			t33 = space();
    			item11 = element("item");
    			item11.textContent = "Encourage joyful curiosity";
    			if (!src_url_equal(img0.src, img0_src_value = img$8)) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Brackets character on a work badge");
    			attr_dev(img0, "class", "svelte-uypywv");
    			add_location(img0, file$8, 9, 6, 312);
    			set_custom_element_data(about_image0, "class", "svelte-uypywv");
    			add_location(about_image0, file$8, 8, 4, 292);
    			set_custom_element_data(section_name0, "class", "svelte-uypywv");
    			add_location(section_name0, file$8, 11, 4, 404);
    			set_custom_element_data(section_header0, "class", "svelte-uypywv");
    			add_location(section_header0, file$8, 7, 2, 271);
    			attr_dev(item0, "class", "svelte-uypywv");
    			add_location(item0, file$8, 14, 4, 480);
    			attr_dev(item1, "class", "svelte-uypywv");
    			add_location(item1, file$8, 15, 4, 539);
    			attr_dev(item2, "class", "svelte-uypywv");
    			add_location(item2, file$8, 16, 4, 616);
    			attr_dev(content0, "class", "svelte-uypywv");
    			add_location(content0, file$8, 13, 2, 466);
    			if (!src_url_equal(img1.src, img1_src_value = img$7)) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "Brackets character surrounded by hearts");
    			attr_dev(img1, "class", "svelte-uypywv");
    			add_location(img1, file$8, 23, 6, 791);
    			set_custom_element_data(about_image1, "class", "svelte-uypywv");
    			add_location(about_image1, file$8, 22, 4, 771);
    			set_custom_element_data(section_name1, "class", "svelte-uypywv");
    			add_location(section_name1, file$8, 25, 4, 888);
    			set_custom_element_data(section_header1, "class", "svelte-uypywv");
    			add_location(section_header1, file$8, 21, 2, 750);
    			attr_dev(item3, "class", "svelte-uypywv");
    			add_location(item3, file$8, 28, 4, 957);
    			attr_dev(item4, "class", "svelte-uypywv");
    			add_location(item4, file$8, 29, 4, 996);
    			attr_dev(item5, "class", "svelte-uypywv");
    			add_location(item5, file$8, 33, 4, 1129);
    			attr_dev(content1, "class", "svelte-uypywv");
    			add_location(content1, file$8, 27, 2, 943);
    			if (!src_url_equal(img2.src, img2_src_value = img$6)) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "Brackets character in clothing and with hair");
    			attr_dev(img2, "class", "svelte-uypywv");
    			add_location(img2, file$8, 39, 6, 1284);
    			set_custom_element_data(about_image2, "class", "svelte-uypywv");
    			add_location(about_image2, file$8, 38, 4, 1264);
    			set_custom_element_data(section_name2, "class", "svelte-uypywv");
    			add_location(section_name2, file$8, 44, 4, 1407);
    			set_custom_element_data(section_header2, "class", "svelte-uypywv");
    			add_location(section_header2, file$8, 37, 2, 1243);
    			attr_dev(item6, "class", "svelte-uypywv");
    			add_location(item6, file$8, 47, 4, 1482);
    			attr_dev(item7, "class", "svelte-uypywv");
    			add_location(item7, file$8, 48, 4, 1531);
    			attr_dev(item8, "class", "svelte-uypywv");
    			add_location(item8, file$8, 49, 4, 1569);
    			attr_dev(content2, "class", "svelte-uypywv");
    			add_location(content2, file$8, 46, 2, 1468);
    			if (!src_url_equal(img3.src, img3_src_value = img$5)) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "Brackets character growing a Bansai tree");
    			attr_dev(img3, "class", "svelte-uypywv");
    			add_location(img3, file$8, 53, 6, 1675);
    			set_custom_element_data(about_image3, "class", "svelte-uypywv");
    			add_location(about_image3, file$8, 52, 4, 1655);
    			set_custom_element_data(section_name3, "class", "svelte-uypywv");
    			add_location(section_name3, file$8, 58, 4, 1796);
    			set_custom_element_data(section_header3, "class", "svelte-uypywv");
    			add_location(section_header3, file$8, 51, 2, 1634);
    			attr_dev(item9, "class", "svelte-uypywv");
    			add_location(item9, file$8, 61, 4, 1869);
    			attr_dev(item10, "class", "svelte-uypywv");
    			add_location(item10, file$8, 62, 4, 1914);
    			attr_dev(item11, "class", "svelte-uypywv");
    			add_location(item11, file$8, 63, 4, 1969);
    			attr_dev(content3, "class", "svelte-uypywv");
    			add_location(content3, file$8, 60, 2, 1855);
    			attr_dev(about, "class", "svelte-uypywv");
    			add_location(about, file$8, 6, 0, 261);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, about, anchor);
    			append_dev(about, section_header0);
    			append_dev(section_header0, about_image0);
    			append_dev(about_image0, img0);
    			append_dev(section_header0, t0);
    			append_dev(section_header0, section_name0);
    			append_dev(about, t2);
    			append_dev(about, content0);
    			append_dev(content0, item0);
    			append_dev(content0, t4);
    			append_dev(content0, item1);
    			append_dev(content0, t6);
    			append_dev(content0, item2);
    			append_dev(about, t8);
    			append_dev(about, section_header1);
    			append_dev(section_header1, about_image1);
    			append_dev(about_image1, img1);
    			append_dev(section_header1, t9);
    			append_dev(section_header1, section_name1);
    			append_dev(about, t11);
    			append_dev(about, content1);
    			append_dev(content1, item3);
    			append_dev(content1, t13);
    			append_dev(content1, item4);
    			append_dev(content1, t15);
    			append_dev(content1, item5);
    			append_dev(about, t17);
    			append_dev(about, section_header2);
    			append_dev(section_header2, about_image2);
    			append_dev(about_image2, img2);
    			append_dev(section_header2, t18);
    			append_dev(section_header2, section_name2);
    			append_dev(about, t20);
    			append_dev(about, content2);
    			append_dev(content2, item6);
    			append_dev(content2, t22);
    			append_dev(content2, item7);
    			append_dev(content2, t24);
    			append_dev(content2, item8);
    			append_dev(about, t26);
    			append_dev(about, section_header3);
    			append_dev(section_header3, about_image3);
    			append_dev(about_image3, img3);
    			append_dev(section_header3, t27);
    			append_dev(section_header3, section_name3);
    			append_dev(about, t29);
    			append_dev(about, content3);
    			append_dev(content3, item9);
    			append_dev(content3, t31);
    			append_dev(content3, item10);
    			append_dev(content3, t33);
    			append_dev(content3, item11);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(about);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('About', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<About> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		BracketsBadge: img$8,
    		BracketsLoves: img$7,
    		BracketsDude: img$6,
    		BracketsBonsai: img$5
    	});

    	return [];
    }

    class About extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "About",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    var img$4 = "data:image/png;base64,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R1kcRCqMm2/evLk5I5LFS4BjfV9smKYQIYi93Zo0aaIX8MdSmtjbDeGIl2LDsfAYGzqdoLcqNhxjxim7LV682HzluPC94fuw37/dACGPu37sseEii++xurqaUzmSE3gvdO7cOfH8Arg5rXnzjfdeCLhRdvW1sLoYrjX4N3FjXduG9yCCG+8/Iqm8BDiCKvRa13gjYjwp9riAFe4R+AjMwg2vEW9wbLho2WO8bgQxNlQz9hg3InazNyY1N/z9UuA14DUzwMklVJXoX4FHNNjqOsZ7o/CmshS46bbvj8I9WpUQjPidrm1r0aKFqqys1PvCDX8fozKmTZumpznFjTreG3iv4j2JDTfHthBASNugrrkVC18DX5dIKi8BTkSy4DJgw7xwb49tSONGFfu8PCYjkowBTkREJJDzXuhERETkHwOciIhIIAY4ERGRQAxwIiIigRjgREREAjHAiYiIBGKAExERCcQAJyIiEogBTkREJBADnIiISCAGOBERkUAMcCIiIoEY4ERERAIxwImIiARigBMREQnEACciIhKIAU5ERCQQA5yIiEggBjgREZFADHAiIiKBGOBEREQCMcCJiIgEYoATEREJxAAnIiISiAFOREQkEAOciIhIIAY4ERGRQAxwIiIigRjgRERE4ij1/1gl4ZF06/C7AAAAAElFTkSuQmCC";

    var img$3 = "data:image/png;base64,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";

    var img$2 = "data:image/png;base64,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";

    var img$1 = "data:image/png;base64,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";

    var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAFCCAYAAACq6PUOAAAMbGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkJDQAghICb0jnQBSQmgBpHcbIQkklBgTgoodXVRw7SKKFV0VUWwrIHbsyqLY+2JBRVkXdbGh8iYkoOu+8r3zfXPvnzNn/lPuTO49AGh+4EokBagWAIXiImliRAgjPSOTQeoEVEADOkAPMLk8mYQVHx8DoAze/y7vbgBEcb/qrOD65/x/FR2+QMYDABkDcTZfxiuE+DgA+FqeRFoEAFGht5xUJFHgWRDrSmGAEK9Q4Fwl3q7A2Up8eMAmOZEN8WUA1KhcrjQXAI17UM8o5uVCHo3PELuK+SIxAJpOEAfyhFw+xIrYnQoLJyhwFcR20F4CMYwHMLO/48z9G3/2ED+XmzuElXkNiFqoSCYp4E75P0vzv6WwQD7owwYOqlAamajIH9bwVv6EaAWmQtwtzo6NU9Qa4g8ivrLuAKAUoTwyRWmPGvNkbFg/oA+xK58bGg2xMcTh4oLYGJU+O0cUzoEY7hZ0sqiIkwyxAcTzBbKwJJXNRumERJUvtCFHymap9Oe40gG/Cl8P5PkpLBX/G6GAo+LHNEqEyWkQUyC2KhalxkKsAbGLLD8pWmUzskTIjh20kcoTFfFbQZwoEEeEKPmx4hxpeKLKvrxQNpgvtlEo4sSq8L4iYXKksj7YKR53IH6YC3ZZIGalDPIIZOkxg7nwBaFhytyx5wJxSpKK54OkKCRRuRanSAriVfa4haAgQqG3gNhTVpykWounFsHNqeTHcyRF8cnKOPGSPG5UvDIefAmIAWwQChhADkc2mADygKitu7Eb/lLOhAMukIJcIADOKs3girSBGTG8JoES8AdEAiAbWhcyMCsAxVD/ZUirvDqDnIHZ4oEV+eApxIUgGhTA3/KBVeIhb6ngCdSI/uGdCwcPxlsAh2L+3+sHtd80LKiJUWnkgx4ZmoOWxDBiKDGSGE60x43wQNwfj4HXYDjccSbuO5jHN3vCU0I74RHhOqGDcHu8qFT6Q5SjQAfkD1fVIvv7WuA2kNMLD8EDIDtkxvVxI+CMe0I/LDwIevaCWrYqbkVVGD9w/y2D756Gyo7sSkbJw8jBZLsfV2o4aHgNsShq/X19lLFmD9WbPTTzo3/2d9Xnw3v0j5bYfGw/dhY7gZ3HDmONgIEdw5qwVuyIAg/tricDu2vQW+JAPPmQR/QPf1yVT0UlZa51rl2un5VzRYLJRYqDx54gmSIV5QqLGCz4dhAwOGKeixPD3dXdDQDFu0b59/U2YeAdgui3ftPN+R2AgGP9/f2HvumijgGw1wce/4PfdHZMALTVATh3kCeXFit1uOJCgP8SmvCkGQJTYAnsYD7uwBv4g2AQBqJAHEgGGWAcrLIQ7nMpmASmgdmgDFSAJWAlWAM2gM1gO9gF9oFGcBicAGfARXAZXAd34e7pBC9BD3gH+hAEISE0hI4YImaINeKIuCNMJBAJQ2KQRCQDyUJyETEiR6Yhc5AKZBmyBtmE1CJ7kYPICeQ80o7cRh4iXcgb5BOKoVRUFzVBbdARKBNlodFoMjoWzUUnoiXoXHQRWoXWoDvRBvQEehG9jnagL9FeDGDqmD5mjjljTIyNxWGZWA4mxWZg5VglVoPVY83wOV/FOrBu7CNOxOk4A3eGOzgST8F5+ER8Br4QX4NvxxvwU/hV/CHeg38l0AjGBEeCH4FDSCfkEiYRygiVhK2EA4TT8Cx1Et4RiUR9oi3RB57FDGIecSpxIXEdcTfxOLGd+JjYSyKRDEmOpABSHIlLKiKVkVaTdpKOka6QOkkf1NTVzNTc1cLVMtXEaqVqlWo71I6qXVF7ptZH1iJbk/3IcWQ+eQp5MXkLuZl8idxJ7qNoU2wpAZRkSh5lNqWKUk85TblHeauurm6h7queoC5Sn6Vepb5H/Zz6Q/WPVB2qA5VNHUOVUxdRt1GPU29T39JoNBtaMC2TVkRbRKulnaQ9oH3QoGu4aHA0+BozNao1GjSuaLzSJGtaa7I0x2mWaFZq7te8pNmtRday0WJrcbVmaFVrHdS6qdWrTdd2047TLtReqL1D+7z2cx2Sjo1OmA5fZ67OZp2TOo/pGN2Szqbz6HPoW+in6Z26RF1bXY5unm6F7i7dNt0ePR09T71Uvcl61XpH9Dr0MX0bfY5+gf5i/X36N/Q/DTMZxhomGLZgWP2wK8PeGww3CDYQGJQb7Da4bvDJkGEYZphvuNSw0fC+EW7kYJRgNMlovdFpo+7husP9h/OGlw/fN/yOMWrsYJxoPNV4s3Grca+JqUmEicRktclJk25TfdNg0zzTFaZHTbvM6GaBZiKzFWbHzF4w9BgsRgGjinGK0WNubB5pLjffZN5m3mdha5FiUWqx2+K+JcWSaZljucKyxbLHysxqlNU0qzqrO9Zka6a10HqV9Vnr9za2Nmk282wabZ7bGthybEts62zv2dHsguwm2tXYXbMn2jPt8+3X2V92QB28HIQO1Q6XHFFHb0eR4zrHdieCk6+T2KnG6aYz1ZnlXOxc5/zQRd8lxqXUpdHl1QirEZkjlo44O+Krq5drgesW17tuOm5RbqVuzW5v3B3cee7V7tc8aB7hHjM9mjxeezp6CjzXe97yonuN8prn1eL1xdvHW+pd793lY+WT5bPW5yZTlxnPXMg850vwDfGd6XvY96Oft1+R3z6/P/2d/fP9d/g/H2k7UjByy8jHARYB3IBNAR2BjMCswI2BHUHmQdygmqBHwZbB/OCtwc9Y9qw81k7WqxDXEGnIgZD3bD/2dPbxUCw0IrQ8tC1MJywlbE3Yg3CL8NzwuvCeCK+IqRHHIwmR0ZFLI29yTDg8Ti2nJ8onanrUqWhqdFL0muhHMQ4x0pjmUeioqFHLR92LtY4VxzbGgThO3PK4+/G28RPjDyUQE+ITqhOeJrolTks8m0RPGp+0I+ldckjy4uS7KXYp8pSWVM3UMam1qe/TQtOWpXWkj0ifnn4xwyhDlNGUScpMzdya2Ts6bPTK0Z1jvMaUjbkx1nbs5LHnxxmNKxh3ZLzmeO74/VmErLSsHVmfuXHcGm5vNid7bXYPj81bxXvJD+av4HcJAgTLBM9yAnKW5TzPDchdntslDBJWCrtFbNEa0eu8yLwNee/z4/K35fcXpBXsLlQrzCo8KNYR54tPTTCdMHlCu8RRUibpmOg3ceXEHmm0dKsMkY2VNRXpwo/6Vrmd/Cf5w+LA4uriD5NSJ+2frD1ZPLl1isOUBVOelYSX/DIVn8qb2jLNfNrsaQ+ns6ZvmoHMyJ7RMtNy5tyZnbMiZm2fTZmdP/u3UtfSZaV/zUmb0zzXZO6suY9/iviprkyjTFp2c57/vA3z8fmi+W0LPBasXvC1nF9+ocK1orLi80Lewgs/u/1c9XP/opxFbYu9F69fQlwiXnJjadDS7cu0l5Use7x81PKGFYwV5Sv+Wjl+5flKz8oNqyir5Ks6qmKqmlZbrV6y+vMa4Zrr1SHVu9car12w9v06/ror64PX128w2VCx4dNG0cZbmyI2NdTY1FRuJm4u3vx0S+qWs78wf6ndarS1YuuXbeJtHdsTt5+q9amt3WG8Y3EdWiev69o5ZuflXaG7muqd6zft1t9dsQfske95sTdr74190fta9jP31/9q/evaA/QD5Q1Iw5SGnkZhY0dTRlP7waiDLc3+zQcOuRzadtj8cPURvSOLj1KOzj3af6zkWO9xyfHuE7knHreMb7l7Mv3ktVMJp9pOR58+dyb8zMmzrLPHzgWcO3ze7/zBC8wLjRe9Lza0erUe+M3rtwNt3m0Nl3wuNV32vdzcPrL96JWgKyeuhl49c41z7eL12OvtN1Ju3Lo55mbHLf6t57cLbr++U3yn7+6se4R75fe17lc+MH5Q87v977s7vDuOPAx92Poo6dHdx7zHL5/InnzunPuU9rTymdmz2ufuzw93hXddfjH6RedLycu+7rI/tP9Y+8ru1a9/Bv/Z2pPe0/la+rr/zcK3hm+3/eX5V0tvfO+Dd4Xv+t6XfzD8sP0j8+PZT2mfnvVN+kz6XPXF/kvz1+iv9/oL+/slXCl34FMAgwPNyQHgzTYAaBkA0GHfRhmt7AUHBFH2rwMI/Ces7BcHxBuAevj9ntANv25uArBnC2y/IL8m7FXjaQAk+wLUw2NoqESW4+Gu5KLCPoXwoL//LezZSMsB+LKkv7+vpr//y2YYLOwdj4uVPahCiLBn2Bj/JbswG/wbUfan3+X44x0oIvAEP97/BSwskObJ6zEOAAAAimVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAJAAAAABAAAAkAAAAAEAA5KGAAcAAAASAAAAeKACAAQAAAABAAABVqADAAQAAAABAAABQgAAAABBU0NJSQAAAFNjcmVlbnNob3RG0oqMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB1mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzQyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CuPfJDQAAAAcaURPVAAAAAIAAAAAAAAAoQAAACgAAAChAAAAoQAAGXhTwvXbAAAZRElEQVR4AexdSegcxRfuRI0BNZK44cGoJBHcCYoLEtSLBoIaFPXkQc3ZBBQxB9GIKF6UIN4MLkfRg/uC4oIoakBNQIOokRANrnHfova/3sy/ZqrrV1Wvqrtqurv6K/j9uruWV+9979XXb2pmeuaVohQoQAAIAAEgEA2BeSDWaFhCEBAAAkBghACIFYEABIAAEIiMAIg1MqAQBwSAABAAsSIGgAAQAAKREQCxRgYU4oAAEAACIFbEABAAAkAgMgIg1siAQhwQAAJAAMSKGAACQAAIREYAxBoZUIgDAkAACIBYEQNAAAgAgcgIgFgjAwpxQAAIAAEQK2IACAABIBAZARBrZEAhDggAASAAYkUMAAEgAAQiIwBijQwoxAEBIAAEQKyIASAABIBAZARArJEBhTggAASAAIgVMQAEgAAQiIwAiDUyoBAHBIAAEACxIgaAABAAApERALFGBhTigAAQAAIgVsQAEAACQCAyAiDWyIBCHBAAAkAAxIoYAAJAAAhERgDEGhlQiAMCQAAIgFgRA14IzJs3z6sf16ksS65Lkva+658EFAhNhgCINRm0eQnuOzH1Xf+8oil/a0Cs+fu4sYWvvfZaceGFFzaWQwKQsUaBEUI6jgCIteMO6oJ6INaxFy644ILi1Vdf7YJLoEPHEQCxdtxBXVDv9ttvLzZt2hRFlT5nrCDWKCEwCCEg1kG4uZmRINYxfrfddltBWKAAAQ4BECuHENpHZIKMtShArFgMvgiAWH2RGnA/euOK9lljlD5vBYBYY0TAQGSIQEcBAk4ExN4iffjU+icIxzm+T41ki83WnOzsk0/6qCsy1oHcQJuYyWWsOWVyrv1k+kQAvYGFAgQ4BECsHEJoH32G1bUVAGJFkACBKgIg1ioeuDIgwH1rKSdidWXnyFgNwYEqIwIgViMsqFQR4Ig1p893glhVz+O8LgIg1rrIDWgciHXsbGSsAwr6pqb28R036DxbBESMWd8ppzb61ABX6B116if70/Usi5yb5nfN7bJVEOssVcZcPUYAGatYSShuBJpmrLZ32me1hWDS3za3qa9ER6xzeYojEHAj0OObAlSfEQIigmpnrJQdusa7sscY5rnmN83t0jWGPpAxDASQsbrvO2gVCLiyOAmQWC7ytHJ0vRlEHW2ZY0VIgwuX7qa5Xf1tNjZQD0MzRQDEmqljY5rlIhs5j410OGKl8baxUnaTIze/PrfLVr1vE70wNnMERLCgAAEnAmIJOF/OU7utuF6K0zjTy3GbrDr1Iiu16q7PTW9OuWytMz/GDBMBZKxiJaG4EeCyPhotlo9ViG286aW4VUiDBlsWquvMPdBb799AJQzNHYFh3k9gdQgCrqxPrI9RlsfJo+xQyqGjni1y45u203ykK81Nf6bCZaz4uJUJNdSZEEDGmvudM4J9toxTFS2CS73s5TmXsQpiLQQp99I2KD1bBECss8W7l7P5EGsOpANi7WV4dlJpEGsn3dItpUCsY3/kcPPoVmTlqw2INV/fRrMMxDqGEsQaLaSyFwRizd7FzQ0EsY4xBLE2j6WhSACxDsXTDey0fddfFZkD6WCPVfUozpsgAGJtgt5AxoJYx44WH9kqCAsUIMAhAGLlEEL7iEy4n78eQsYKYsVi8EUAxOqL1ID7cS+RCRoQ64ADBKbPQQDEOgcSVOgIDIVYuS0PZKx6ZODahgCI1YYM6icIgFjHUNC3rigzRwECHAIgVg4htBcg1nEQgFixGHwRALH6IjXwfrYnRElYcthj5bYCQKzS2zhyCIBYOYTQPkIgBbFSJkxkFbvUlQtije2JAcszPfIKdUBAR0AskdFj92xHeixfaKExJK/OWNtcUqbIoG1drPVyrM1GqkcBAj4IIFJ8UEIfJ6nWIUedxJqSKxGpSogiEw72mq6TKk+eBwvFgEEiAGIdpNvDjSaikuRiOoYSo43EQuUQodp0C81adXI22RmOHEYMEQEQ6xC9XsNmG3lJ8gkhRBupSll05OS5CFXKCc1aQaw1AgNDjAiAWI2woFJHICaxSuLjjjSniWCpjhsr203jddvktQ+xUh8UIMAhgE8FiBWIwiPAPTpQENjomQKcJO6dd9N4ki0L98wC2U89CjIsBEmrVcbzoXxe12g8KuMiwDEv2oEAIUCZn4g86x+1c8UnI3TNUbeNMl+f4qMfMlYfJNEHWwGIAS8EOGL1JRxOTl3ytI3zJVUCAcTqFQro5IEAiNUDJHThM1ZfYpVYzoJgQ3XyIVafzFzaiONwEQCxDtf3QZZzRBhKYjQ5J9OWhXL1IVmqCgKIVUUD500QALE2QW9AYznSqUOsEr5YBEuE2kQPzkYidNIVBQhwCIBYOYTQPkKAI50mhCYhbkKwMebnbCRirZsNSxtxHAYC+LiVWC0oPALcR5EEKRWCdHhBTA/6OBYV349VCTL2+pjXSCjzj7ORhpONZCsKEHAiMIz7B6xsigCXzVF7zMJlryleknM2ioWEjDWmkzOWha2AjJ0b0zSOdGITq9RdJ1iRMZap5uJsBLFKr+DIIYCtAGc+j0aJAPcyWZDS6GWy7B/7SFsE9DKc/lIW7rmzND/ZigIEXAiAWF3ooG2CQNvEOlEk8QmINTHAAxEPYh2Io2OY6SKd1BlrDP19ZLhspPHIWH1QRB8QK2LAGwEX6QyFWAkssb/mjRk6DhMBEOsw/V7Lahex5kI2LhslaLnYKu3BMT4CINb4mGYr0UU6uZCNy0bp2FxslfbgGB8BEGt8TLOV6CKdXMiGe+4sOTcXW7MN1A4YBmLtgBP6ogKIdewpEGtfIrY9PUGs7WHfq5m5j1vlQjbIWHsVlp1VFsTaWdd0SzEXseb0ESQQa7firq/agFj76rkZ6w1inQKeS3Y+tQhnsREAscZGNFN5QyFWnx87BLFmGuQRzQKxRgQzZ1EuYo356L62MeSINadtj7axznl+EGvO3o1oG4h1DCaINWJQ5SxKvKxBAQIsAvrj+8SamPwUdopno7IKJergspNsFsSaaGaIzQkBZKw53zUj2sa9RPadSiwe365R+7k+gxsyETLWELSG2zc5scYK6L4vyLb0jxXaINYxkjntJ8eKDciZiwCIdS4mlZq+3xgqxjS4ALGOwQOxNgiiAQ1NSqyuNzxCMW4r4wOxjj3l88F5H5/23Y8gVh8vow+IlYmBGMSaw74ciHUcKLk8d5YJezQ3RCApscZ6+Ug29jnTyYFYY9xg+u5H0h/ESiigcAiAWBmEYhBKDi8fY+BAUPf5Btmm/kyYejf33Y9kaB9sALEyIRnDiSDWKcgg1ikWbZzFiGfSuy0/0tx9sCEpscbal2vTkTGcmAOxkg9Q+o1ADm8mkwdirMnk23PizpOsCOUn384ReMw5F4STbO5ZCyZbTDZSXU52zhpXzBcPAbE/bI1RW+za6uNpFS7JplNIPXFTykIpfbICYh3fTCigUYBA2wi4bv4hpER92yyhupr6p052kiIUk1gJiNRgNAkW0s3kQKoDsTZBFmNjIeCKUVvs2upj6VRHjk2nkPrUXJKUWDlDfY1TA8J3TB2H2cYQMXIvHVw3ERCrDVnUzxIBdR1xa5Nrn6Xe+lycbj7tqXmkVWLlyIoANQVDalBURxIpSke59AWxqqjhvIsIuGJUxrjvsU37fHV09Uud7HSaWE2kKsGaBbmqpCrntZGrK2hTO7HNIMfc/UHAFaMU37NYU7NCy8UdZGvqNdlZYuWASR0IrvlN5CqJ13RM7cRZBSvm6TcCQyJWztbUnuwksbpITScu6hu7EBHq8+jXOrnq7ep1bP0gDwjUQYAjmxRrqY6eMcZwtsaYwyWjc8QaQqqSvGIGhA+pynlVcpV1pqPLAWgDArNCwBSbal3MdTQrm2zzDJpYyalqcZEqtbnAihEUIaQqA1KSq7w2HVUbcQ4E2kLAFJtqnYzltvSLOa9ql+k85lwmWVVmM/VoUGcySK+T4l2kppKmjVzVPlJmyNE1P+lM8nXd5bVNJ9keogf6AoFUCMh4tB1BrPGQ7wyxkkkmcjMRpk5kpj6hELmIk/SiYuuj66MH7mgw/gGBlhHQ41K/9iVWNd5jrL0QWGg+OT8dbfPrtunXIXPW6ZuUWCUAulHqta60Sq420GiMlO3qo8vmrkmWqhvNoRdTH1Vndbw812XgGgi0gYCMR9vRFO+6nqaxPuN0OXWu9bUnddHn59YjjUtdks5ABkvjbUeTgQQMgcgV6he7qM6zyZd9pEM5R9rkxNYd8oCACwHbGpT1Mp5tMmTcy/7q0We92uT61LvmJj3U+bn1SP1Tl9YfGygMFHZ2q9AvH4ggG/3ZNKM+9EeFexybcLRT1kgI/lUQ2LdvX/HOO+8UH3zwQbF79+7i999/LxYuXFgcc8wxxcqVK4uzzjqrWLBgQWUMLtwI+Dxuz7UeXeNpvVCcpyrcI0jV+bn1SDq67IxiQ0rmFsayGWsO2Rx3h8zBxpRxosretm1bed1115WHHHKIM3YWLVo06kf9UfwQID7h/lySuPXsGtu0jZt7zJXjWbj1qPZtqpdtfNKc2AeMHEiHc2QONtoCKFb9Dz/8UF577bWlyIrYxa+Sw/z580fj9u7dG0uVbOWouNnOXca71rP6Utwlo25b37YCQKx1Pa2MA7EqYNQ4ff/998ulS5cGEapODMcee2y5Y8eOGrMPZ4iLGCWeHBqyn37kxsVot+lP9Wrh1iPpnrokncEGhOqUHLI5zpE52JgqELdv314uXrx4DqkS0d50000lYbdnz57y119/HR3pmupNRHz44YeXW7duTaVq7+X6rEcfI2X2SPJ0UvMZ36QPzS3toCNd60Xqp/KMfq6PiX2dlFh9DMyBdMgG3XHqdQ42xg48kvfFF1+URx99dAU72jvdvHlz+ffffzunpHbqR/1VrIlcd+7c6Rw71EZJSCpe+nkO2PjwTmo7QawREOaI1XRXjTBtr0X8+++/5XnnnVchxeXLl5cfffRRkF3Un8apBEFyST5KFQEfYs0hCQCxir2OHBxJNqgLWz8HsVYXOF09/PDDFcyOOuqocteuXXM7etTQOBqv4v7QQw95jBxWFxDr9FMRqXknacbKEQ4thNQGzmLpcHaCWKte+O+//8oVK1ZUiLBpHOg+WLZsWUnzoEwRALGCWKfR0IMz7qUHiLXqxFdeeaVCqmvXrq12qHlFctSsleZBmSIAYgWxTqOhB2ccsVJAo0wRWL9+fYUA33jjjWljgzOSoxLrhg0bGkjLbygXp7m8guyCndgKiLB+OEeCWKsgi6+jTgjwiCOOiPZGE71hRfIkuZ5zzjnViQd+xcUpiDVegCQlVlJTBrnt2HRvLR4U9SVxAQtirWK7ZMmSSVysWbOm2tjwiuTJWDvssMMaSstrOBenINZ4/k76EBbhqML14AZqF8RaCOKh094WehjLpk2brPqTfWQnyhgB8TVUuqGPLq6//vriwQcfjAbNunXrii1btozkUeyJN7Ciye67IJ+Hk9RZj/oaj7GeSVdTkXFjapN13HqkfuImM3mIkhwX9RiPo82ShLKTDMJ0TnfRvhefTKDvNsbUn77fL2OBng8Qs5A8KZvmQZkiQK8OJTa2I/UJLTZZKep9dPNZj6l5p/WtgNQG+jiiaR8fRzadI6fx6mdOL7rooqimkTy5oGkelCkCINZpkiey6ikwCc6SEysZIAPddMyBWH0CNoHveitSJT/6Supff/0VxRb6muuhhx46ibdVq1ZFkZuLEJ84Dc1YfWSa1n2dOl8y5DiH5vaVVdf3yfdYuQfUCmIN2uuY1X6OAFTg71d89q5C5PnN2t9e5PM77rhjYsDzzz9frF69enJd9+TFF1+syNm4cWNx11131RWX5Th9/ehGCqIsBOno1dZrn9i3Dg5sIL1IP65wnEPjfWVxc1nb6zKy7zhhwCSDEErMOQ/NWE0yUtT52kf9fO7a1AdljMCHH35YiYPzzz8/CjR6rL377rtR5OYkhFsroXFK65eTGaud/OtT9Dgwze8ry2c+U5/ebQWYQEpRZwLLVgditSFjr6fPmKp+e+yxx+ydPVoef/zxirwzzjjDY9TwuqiYm85DE52+EivZnrKklS4054APdaQpGFLUhYAOYg1Ba9z3pZdeqhDhwQcfXNKzWesUGqf/lMszzzxTR1T2Y7i1EroeufXNzRfS7ptl+mSsNG/Kkla60JwDPvSlR4gjmvQNAR3EGoLWtO9VV11VIVd6lurrr78+7eBxRl9jVb9tRT6//PLLPUYOswtHOqHEyslrsgb1sb66cZwj5aaMABCrYd+XgA8pPsTqGxQh8/a9748//liedNJJFXI94IADyhtvvLH8/vvvnebRb2TRLwlQf7lQ6HjyySeX1IZiRoAjwtA45eSpvml6TnP5FF9iDU3qfOaWfcIYRI4KOHJGhhrX1Dm+4wNMLEGsIWhV+37++eflcccdVyFH8hFtDVBG+8gjj5T0JtTHH388OtL11VdfPeelP405/vjjyy+//LI6Aa4qCHBECGKtwFX7IjmxcqQDYq3tu2wGfv311+W55547h1x9b4LUjx7ssnv37mwwSWUIiHX6yaRQ7gnxSfLPsXKfcxPGFcLZYm34FfVzeCHjbNKbfCdZyuRspH6kK9mKYkZAPJmquP/++0ff4f7555/NnQy14k2r4pZbbiluvvnmYv/99zf0QJWKAPc9epGxBn2u3Oczo+r8Tc591xBno9QhlHvkOK9jCAvX6Ut3BaGI9Y/a+144G8l+ERR9N3Mm+tP+6H333VeedtpppbiJWuPm1FNPLe++++7y22+/nYleuUwSe2uO4tq1vmO2+a4hzkapU+i2R0gM9G4rIMS4WfUFsaZBeu/evaX45lRl4d55552jn8FOM2P+UjnSCU10QKzmmAGxmnEJqgWxBsEV1Pmpp56qECtdo9RHoM/ESpmmT+FsRMbqg2JH+khn2Y6+L2M6Yk5n1ACxxnUFlwR0OWONTawp16TfLaCBb2M7soEqSYfaCFXWp3RiUsNaFg5ijeuA2OtxllsBIFYtFiS5mI6hd0hNdGcuTbapdSDWeq4CsdbDzTZqCMTK2SjXZco1mTxjJQdLQ0zHoRAr2Y4SjgCINRwz1wiOdELX46wzVh/9OBslD2VNrK4g6FObdJbr2Cd7uqIriDWuJzjS8SEuVSMQq4rG9HwmadQQyMZlo2ybwo4zXwRArL5I+fWLTay+78DLNdD06EP8nI2qDn6ohfcCsYZjZhzhc+c2DkSlEwEQqxOe4EaOdHyIS50UxKqiMT1P/pVWcXdw/gS2UIW69L74fLUvla3it56KrVu3Ftu2bSv27NlT7Nu3r6CveoqHmxRnnnlmsWLFit7i+/TTTxeXXnrpRH9BtMUll1wyue7TyZ9//lm89dZbxXvvvVfs3LmzoK/uLliwoBA/eliIp3IV4uZcLF26NLlJ6tfC9ckEsY700Ott1z5f57aNrVPvo1+ITqnWZPKMlbtDTjm+32dtZKz01KdrrrnG+KQnEbSTNw2XLVtWbtq0qfzmm296B3IOGeuOHTvKdevWsX4in5199tnlo48+Wv7zzz/JfKXGhn4emrFy61uX3/TaB5QQnXzk1enTKrESGeVSZkmsX331VXnFFVdMiNM3WOkp+/fcc0/SRRvbn30m1t9++6284YYbyv322y/YV6ecckr59ttvx4ZzJM8VL6EThpCYa17fNh/9QnTykVenD4i1DmqGMbMi1pdffrlcsmRJ8EJVA5d0/emnnwxWdK+qr8QqXuqPHrqt4h56Lp7WVW7evDm6U1x61JnMJS92m69+vvMSCacoyfdYXfsdYoFn8yg9n0eVCQcKf9cvglSLNWvWFLSnqhbxUr8QGWxx8cUXF8uXLy8WLlxYiAeYjPZcaY/yySefHO3nqWNWrlxZvPDCC8WRRx6pVnfuvI97rJ999lmxatWq0X63Cijte1922WWjPeLTTz+9WLx4cUH7rp9++mlBP939xBNPFDRWL/RT4bfeeqteXfvatcdaJ0ZVebSmmxbiDFvx1U/VySaL6n3luWQY24TgpMWVltM7irkU7t1RyhKbFNpPpafqUyzIP/GmR7lly5ZSPMvUKfq7774rN2zYUM6fP38ylmTQL5n+8ccfzrFtN/YtY6VXAuLNwgrOhPv69evZRxySH8mf5FfpY3mkX06IVaRM0zHWHG3LMdlmqkulZ6tbASBWP7f+8ssvc36+hEgx9In5zz33XLlo0aLKoqUF3+XSN2KlNxPVBUx4P/vss0EQk1/Jv6qcgw46qBTZbJAcU2dXokPz5VIokVHxs52nsjc5klwmpxtsAyQVAJxcXb+6100y1o0bN1aC5MQTT6y9R0q/gqr+AB9lU+JjWhwMrbX3iVjffPPNip8IZ/GythZ2lPmSn9V4W7t2bS1Z6iAXsTaJUXWOLpzbeETFk85TlXSS/69xKLHqhsvrVABwcuX8TY91g5Z+yZSyFTn/gQceWH7yySec2s52ekK/lEfHK6+80tm/zcY+Eevq1asruN57772NoCM/k79VX23fvr2RTBDrdCuNcE1V0kn+v8Yg1rEj6257PPDAA5WFRT/53LSILxCUJ5xwwkQuvfvc1c+49oVYd+3aVdnDpn1WwrlpIX+rxEp75U0KiHU2xPo/AAAA///fOI7DAAAf/0lEQVTtXQnw5jT5DjcKIrCMF8q14KqgrCiXIgKKgCAoKh6IiyKCiwcgoKDCLoyCyuWBggLDMjCiDsKAC3jMAioqoKIil+ggKl7DuQMucth/nu9v+kv7tU2ao83X78nMN03b5M37Pm/yfGmaJiKLHI477rhMCOH9i6xmrfgQukMGcHAJr3vd63Lslltuuexvf/ubi5ixPGeccUYuF/qdd955Y2lSuHDZZZcV9MR5iuHMM88s6Al8QwT4G35X9XD27NleYq+++upclpKpjq511EuhSJl32GGHWjuVvTjGCvEk/09jWwN1Y6visQAwya3SxeWaS6X973//mz396U/PK8g222xjUtf6/l//+tdCg33/+99vnbfLhJNCrPPmzcv9BCIEvqEC/K7XuX/961/OoqeFWNHedMzq4s5AGjKSWE0ABehtw6mo0G3D3//+90Ll+OhHP9pWRGP6DTbYIJePP8AUw6QQ6ytf+cocS+AaMsDvOjH89Kc/dRbfRDguf/7OikTO2GSnjmUsNaITq26ETzwWACa5PjrreV2I9eabby40qJNPPtmkbqv72267bS7/xS9+cau8XSWeFGJ90YtelGMJXEMG+F2vS1dccYWzeFvC0curijsr4JmxShfXazE7EyRWg6NdnVbOZyim8naXxPqSl7ykUoe+L04KsW6++eY5+YUm1s9//vO5bNSrK6+80tktJNaZ9z0k1oiDzKYaWiZInLuMG5vKqbpfHgo47LDDqpI5X1tvvfXyBrvTTjs5y4mZcVKIVa8T66+/flBI4He9Ht54443O8kmsM8QKLGKF6D3WWIpPg1y8vFpzzTXzRrXlllsGM/vuu+/O5aLRzp8/P5jsUIKWLVuWlWcv4BzXUwuHHHJIAc8///nPwVSE3xWx4sXYQw895Cxb/wNQMl2Ozgp4ZnTRtS4PidXTGZOcfbfddis0qlBvm7/whS/kclHxtt9+++yaa67pFSr8kSxZsiQ79NBDsxe84AXZCiusUNBRNRBcf+ELXzhKh7Fr5Osz/OhHPxrhp/TD8Utf+lIQlcqzNzDk4BNIrDM9Vpf3HrbYs8dqi1RP6c4666wCuXzkIx/x1uQ///lPttFGGxXkKlKYM2dOdsopp2T33nuvdzm2Ah577LEMdqJspUebI0gY+SGnq3Dfffdlp5122ojgq3TFfNMQ+sDfunzfXpYuyyfeFc7lcnx0LuclsZbRnaLzpUuXZmussUbeuFZeeeXs1ltv9ULgpJNOyuWVK5s6X2WVVbJ3vvOd0Xux1157baa/UVfluxw33XTTDPJiBsjfd999s1VXXdWI4ec+9zkvVeBn+FthsdJKK2UYwvEJSpbv0UcHn7y+euv5ffQw5WWP1YRQAvcXLFiQNy5UjE022SS7//77nTT7wQ9+UHjEXnHFFWt7XaoSxujF4vEdvS/9qyJVHo4bbrhh9p73vGfUe77ooosyvMTCEb1pXMd9Pb2KQx7khhweQO/01FNPHQ1PqHKqjuXhC2D7wx/+0MlP8O/GG29csPGggw5ykqVnqtLb5Zous8u4i651eWLqTWKNiW4g2f/+97+z5z//+YVGhulRd911V6sSLr744my11VYryAFpI/z4xz/O9ttvv8aeWKheLB6R995774IeqPzokR1wwAHZL37xCyu7kA7pka/ceN785jd7P4rb9E7Rc33Xu96VYZwV4eijjy7osvrqq2eXXHKJlT0qEfwK/+o2PfOZz8xA8AyTgQCJdTL8lN10003ZU5/61EJjmzVr1uit+eOPP95oBaZt4ZPVcu9wu+22y8p50VM6/fTTjY/nrr3YJ554IgPp6aSBONZEuPPOOxvtqLuJfPqaCkr2W97ylgzltQm2vVO8PMMYa5nsHn300Uz/Cgu6APeDDz44gx+aAnyBWQ/wq7IBR/xx4KUew+QgQGKdHF9lGGzXx1tV43ve856X4SXH4sWLszvuuGM0DvfrX/86W7RoUQZyKRMy8r3sZS/LHnzwwUbrY/RiDz/88AJpgHQw5uv76I78kFP+87D9DFj1TtErV7iWj+XeaR14ePGHL9nK+eGHt771rdn555+fwT8YL4W/4LcPf/jDGfxYzoPhhG984xt1RfF6ogiQWBN1TJ1av/zlL7NnPetZYw2w3CCbzt/0pjdlDzzwQF0RY9dD9WLLk/2XX3757MILLxwrz+cC5EGush9Ee/nll1eKVL1T9D5V+qpjXe+0Uuj/LmKu6S677NIot6os/draa6/t9ZVVk368FxcBEmtcfKNIR4/o3e9+d4FA9AZZF8c4HaYl+QTXXuwjjzySPfe5zy0QzRe/+EUfVWrzQq6OAcrFOLUKGA/Fm32b3insdQ3oRX/lK1/JQJC6PjZxjEH/5S9/cS2a+XpGgMTaswN8iv/d736XfeADH8ie8YxnNDbcrbbaajQeCHILFdr2Yo844oiCjvvss08oVSrl4JFbJ7Ajjzxy9GY/Ru+0UgHtIqbMYSEVfT0BXTcVxxKR+++/v/XLO60IRhNDYDnoIx3LMMEIyJ6R+P3vfy9uueUWIT+lxJ+lkL0xIWcSCDnWJ+TQQVTrfvKTn4ivfe1r4tvf/raQL2+MZUkCEXJsUcgetDGta4J//vOfQr5gE/KR3ChCjp0KORYt5HQmIV/oGdP7JJALVws5nCPk+OpIN/liauQfOZdXvPSlLxXyqzIf8cybCAIk1kQcMQQ15LitkC9mRiQrJ7fXmiTnmQo5zav2fqgbKGPhwoW14mTvVcjZEkIOqwj5uF6bjjeIQFsESKxtEWN6KwTqerHyLbe45557hBy+sJLjk0iutC/WXXddIadc5WK67J3mhTIydQiQWKfO5d0aDHJ79rOfLTBcgSDflIurrrqqMyV23XVX8b3vfW9UnpwtIORc0k5IvTMDWVCSCJBYk3TLcJT6zW9+I+bOnZsbJBdtFvJFVn4eOyJfGgn54iovBvrIr5ryc0aIQAwESKwxUKXMHIELLrhAyE9l8/Pvf//7Yuedd87PY0fk2ghCfpWVFwN95FSr/JwRIhADARJrDFQpM0dAfvYp5NdW+TlmL8hFZPLz2BH5uetodoQqB/rI9V7VKY9EIAoCJNYosFKoQgAzAI4//nh1KjDdCGOuXQWMqT7nOc/Ji8NMAejEQARiIkBijYkuZYsTTzxRHHPMMTkSf/rTn4TcEyo/jx3BfFG5HXVejFxPQHzsYx/LzxkhAjEQILHGQJUycwTkJ51C7geVn99www1C7uGUn8eOyI33hPzyLC8G+siv1fJzRohADARIrDFQpcwcAUx1wpQnFfABgf4yS12PdUR58+bNy8V3/fIsL5iRqUKAxDpV7u7e2PIY54EHHjj6MqsrTVDe2WefnRcHfWJ/4psXxsjUIkBinVrXd2e43LJktDYASgSpyZ1HO/km/sknnxRyZSvxj3/8Y2Qs9Ljtttu6M5wlTS0CJNapdX13hh911FECHwaocOmll4q99tpLnUY7ohy59mwuH3p89rOfzc8ZIQKxECCxxkKWcnMEsCDLZpttNlp1Cxfx8ur6668XchHqPE3oCFb4wksruS/WSDTKksssCqwixUAEYiNAYo2NMOWPENhtt90KawScc8454r3vfW80dDCuivFVFfAC7corr1SnPBKBqAiQWKPCS+EKAaxBih6kWozlaU972mhd0hhfYeHrLrmnl3j44YdHxWPxFUy72mKLLZQ6PBKBqAiQWKPCS+E6ApjPinmkKoBUsbxgyCUEscC13CVV/PGPf1TFiPnz5wu5+2l+zggRiI0AiTU2wpSfIyD3nRLbbLONuPnmm/NreFOPZQRDfI2Fr7qwLCF6rCpgB4Wf//znQu6Qqi7xSASiI0BijQ4xC9ARQA/1Va96lX5JzJo1azTX9I1vfGPhepuT73znO6MxVbkXVyGb3Aww+nYrhQJ5QgQkAiRWVoPOEMBj+g477CBuv/32yjL32GOP0VYqbcZCMXZ77LHHiiuuuKJSJrZfufrqq6Pur1VZMC9ONQIk1ql2f3fGY5L+jjvuWEuquiZbb721kLusjkgY06Oe8pSn5LeXLVs22jTxmmuuGW1eiLUHTAHkumTJEn5xZQKK94MhQGINBiUF1SFQRaprrLGG+OY3vykWLVokLrroorqso7mu2OgP5IoxWmxY2LSx8Nvf/vbR2gA46ju0klxrIeaNGAjISspABKIhIL/NzySpYYv1/CdJNZMvlPIy5fzSTL5kyu/raW3jyA85KkC+3Ga7IBN6QB8GIhAbAfz7MxCBKAiAxORb/wK5lUlVFSznt2aLFy/O5CeomdxJtZCnjlyRDumRD/nLoYpcoQ/JtYwUz0MjwKEA2WoZwiNQ9fgve5CjHVMxhtoUMI563XXXjT4gwHxU7PT66KOPCmxdjTmvs2fPHn0AgPmq+vhrlUx8Oos9r5YuXZrfxhQvvNDiKlc5JIwERoDEGhhQihOj1aTKL6owpoq1UE2kGgM/kCvmt+pjriTXGEhTpkKAxKqQ4DEIAlU91T5JVRlFclVI8NgFAiTWLlCekjJSJVUFP8lVIcFjbARIrLERnhL5qZOqcgPJVSHBY0wESKwx0Z0S2ZNCqsodJFeFBI+xECCxxkJ2SuROGqkqt5BcFRI8xkCAxBoD1SmROamkqtxDclVI8BgaARJraESnRN6kk6pyE8lVIcFjSARIrCHRnBJZQyFV5S6Sq0KCx1AIkFhDITklcoZGqsptJFeFBI8hECCxhkBxAmXgE1GsZfqHP/xhtGIUdjFdZ511xJw5c8TcuXPFiiuuOGZVFanafqY6JizBCyDXNp+/Pvnkk+KOO+4Qv/3tb0dfdT322GOjT2433HBDsfnmm4tVVlklQSupUicIhF58gPLSRUASQXbJJZdku+++e7byyivXLnSy+uqrZ+94xzuya6+9NjemzYIqeaYJjGDhFiwUIxtf/isv3CJ3QcjkDrOZ3BAxT6OnRxwYYoEYuQD3BKJAlX0R4OpWvghOSH6QpMvSfDvttFMmFyyxXqVqQuBoVLNuVSxgiD+lMomazuWOsZnsDTeWyZvDQoBDAbJVDDnI6iqOO+448elPfzrfetrX3iE9/tdhUTUsUJfW5jqGVhYuXCiOOeYYm+RMM+EIkFgn3IFN6oNU5SOrOO+888aSyV6U2GuvvcQrXvGK0fJ5SHvPPfcIbL4nhwvErbfeOpYHF6aBVJXhJnLddNNNBTZAxOaI66677mi3AzlkIn72s5+JSy+9VPzqV79SovLjAQccIL7+9a+P0uYXGRkeAsPqgNMaHYGjjjpq7LH15S9/eSb3i9KTVcYvv/zysZX/Ze3PFixYUJl+qBc/9alPjWGInQiAjylgCAXDAMBN/3384x83ZeX9CUcgqTFWvfL5xvvyi6/eKr+v/nhpomSp48EHH5w9/vjj1qIfeeSRTG7qV5CDlzJyJoG1jElOKHvtY7sZ7LPPPhlwsQ1ypkB20EEHFTCUMzCyq666ylYE000gAiTWwE5TJOZ79FFLTqXKNthgg0Jj/tCHPuQkEluegEx0e3beeWcnWZOWSW7VXbAbOFRtAWNj1yGHHFKQtdFGG2XwE8MwEUiGWPHYpDde33hf7vLVW+X30f+rX/1qAcvtttsue+KJJ5xFyt1RM7kNdUGmHEd0ljcJGcv1EfYDB9eAJwW5lUwBQznW6iqO+RJHgMQa2EGKGH2O6Cn5BDk5PW/AeOy88cYbfcSN8n73u9/NZcK2fffd11tmygLk9tkFe2G/b7jhhhsy+EPVjS222MJXJPMnikAyxCqnBOUVTlU8n2NfePvorPL6EKvcfK+A42tf+9pgUGy22Wa57LXXXturFxxMqQiCMC662mqr5bbC7lDhNa95TS4X/r777rudRav64nt0ViBARl/dVf4AqgQVQWINCqecs1R6A+xyjj8Z17Bo0aKCDmeccYarqLF85Tfk8pPYsTRDuICepe432B0qfPnLXy7IvvDCC51F6zr6xJ0VCJDRR289bwBVgopIhljLLwp00FziQVFqIcxF13IeH2I9+uijCw1XfsfeQvvmpHKX1YLsb33rW80ZJvTu+eefX7ATdocK8Ifu72OPPdZJdHkMWJfZNu6kQKBMbXWtSu/zhBfIjDExJNYxSPwuVDm+7TUfYj3wwAMLDff+++/3M0jLfcsttxRkn3766drd4URPO+20gp2YdhUq3HfffQXZ8+fPdxJNYp2ZG0xibahCNuTjQzgNRfdyC7bU2exj5/ve976C3AceeCCYfbfddltBNh5rhxhOPfXUgp2wO1SAP3S/Y26xS2iqP7p8m7hL+aHy2OhnSuPTXkLZUZaTTI/VBB7upwhgGVDb86aGgd6IazjyyCMLDTckKSxZsqQgW34q66pm0vnOPffcgp0+/igbWv5zwtCNS2iqPzZtSU/jUn6oPLoervEUeWGiiDXFLr9rBWtqGD4N+ayzziqQAkgiVJALuRRk4yXPEINcL6Fg52c+85lgZpZJ+5xzznGS3VR/2hKUkwKBMrXVtSo9ibXBGVWAla8NiVhhS9k+de5DrOWXI3vuuWcD6u1ubbnllrnOK620UrZs2bJ2AiYkNT4EgH3KH1tttVUwzeEPJRdH1yeKpvqjy7eJBzPOQZCNfqY0Pu3FQWWrLOyxWsEUPlFTw/CtKHIF+7zxyuXqsttvv93bgHIvTq7q5C0zZQGvf/3rcwzRsLG4tW+AH+APRRQbb7yxs8im+gP5KfbiXI019c5924urXk35SKxN6ES819QwfCvKCSeckDdeNLI99tjDyxJ8jolemyIEHOWyeF4yU8988cUXF+zdeuutvT+IgB90DE866SRnGJrqD8oYErGabHUGMWLGwRErKpRyBI5dVrA2ZesNrBz3JVZM6VlrrbUKjRjjo67hgx/8YEEWlsLDNi9DDrBP/9IMPnJdyAY4lcenZ82alT300EPOEKo6Xq476rzLeu9shGVGk62WYjpNNlHEikrTFOocgOuxQ9uyVQOoOobQtbwQC75Rb/sSBgu3HHrooQVShRwMC0xDwLq1yy+/fMH+ww8/vHXPFbjrawTA574vFavqjX6NxNpvDW1mqg510ytFU7xOJVSkpnwxydWl7CZd62xsex2b2ZXLecMb3pDJnUWNouTq99n2228/lv8Tn/iEMe+QEnzyk58cw+DVr351dtNNNxnNBM7Au+wDLPDiG8oyy+cx67uv7m3zl20rn7eV10X6JIgVj75lsOrO60CpS69fr8vre10voy5eLqMuHa6HCliQGUsGlsvCCxS8fMI8VDT+pUuXZg8++GCGL6vOPPPMbJdddhnrYUHGfvvt57weaSibupaD9VfnzZs3hiF6oLvuuusIL3yZBfyAI/AErsBXf1GlfLDjjjsGmU2h5NUdSaxd15RieeFacVFu67O6ClK+Xjf+WPcorvLHfDRyKVvpVXVsDV5DBpDr3nvvPUYMVeU2XTvssMMGP65aByPItfzhRRNWdffe9ra3BSFV6FlXhrpuS6x63Y3ZRqqwRXmqfBzrylc21R2rZPd9bTDEaur11hFyCAe0LduUPoROZRnoia655prGBlmuvOutt1522WWXlcVN5fnixYvHdmYo41V1jhdVZ599dlDMqsrRr9kQq55exW3yhTAEJKrK1I/l8k1tBXlTDMlopYPbFDcRpO4wOKnsqJhOsC3bVFli6YgFWY4//vhs/fXXr6zUOu54I461AHxWzY9lR59ysZ0KXgzOnTvXiOHs2bOzE088cTRMEFpn3VdVcVO91+tqOT/uxQxNZUMXvXxTW0H6FEMy21/LMSuJkTlIoIWsNOaECaeQb5uFHGur1TC2jbIiCvmF1mib5jvvvFPIhUHECiusINZZZx0xZ84cIcdlhZy8Xqsfb/w/AnfddZe47rrrhJz4L+699160cCGnuYlNNtlEbLvttkJu5xINKpv2An3qQlN+tC/UwVgBdR9toC7o5ZvaCmQ02VlXRuzrJNbYCFfIN1WW2MRaoRIvTRgCTcSoTGkiHBO5NeVV8l2PprIhV5Vvait6Wld9ouSTBiQR5L+U8dEKeEvSSUJfHyVgA2yp+w3BRh98mNeMQF3d0a83SWlqb/qjeJMM13vTMBSQzABFk6P1yjIE0iGxujZJ5lMI2LQXlbbuqLcrPV6XPuT1Ov1xXQ+mtgK9UwzJaFUHtO5wxEmsKVYj6tQ1AjbtxUYn1XuEvDKp2eT3SYOylR044rwclH5lHtDPy3lSOJ84Yq0CPwUg2+hg+hcewp9HGzyYtj0CipB0ginH20tNLweJ1dMnNhUFFYfE6gk0sw8CAZv2MoQ/aBKrZ3W1AXBaiHUIfx6e1YHZDQiQWGde/qb4B5LMUACJdaaikFgNrMLb+dhk+fFfP0+RcNq6zoYXUrSTxNrW0wHSoyLoDaAcJ7EGAHngIthjnemIkFgbKruJbBT5DIF0TP/CQ7CxwdW8FQABUx1Ce0mRcNqaPql2JtNjJbHO/AOjN8JABJoQmFTCabKp6t6k2klirfJm5GumykJijeyAAYg31SH2WPt1Mom1B/xNjYLE2oNTJqxImye8aRkKQHtKLSRDrABGjaM2HX1ARF6f/KGcBx2abCSxhkJ6uHJIrDNDZym06XJNmzhi9SEdRWaQ0aczTMQKPRmIQBMCJNYZYvXhhCaMfe4l1YIV8TUdXUGsIrO+yLVKl7LNPk5l3uEjMC3EivZebhvlc1dOiFlLkiLWWCCaKmHXBGvSBxWHgQiYECgTTPkc9WzSQyxOiI1LUi04Fog2csuVsm2eNo4isbZBi2nrECjX2fI5ibUOufjXB0+sNo/d5Qrpct7GVTbEOoRG0QYTpm2PgKmedv0k1t4Ccw7bDo5ZUrcpJo5Y21YWU+ULdb+N20isbdBi2joETHW3bVupK6fP6yTWAOjb9C5dKouNXFMlNd1vYz6JtQ1aTFuHgIl0XNpKXVl9Xbdtu33pV1duUj1WGxBdKwvymSqiiTyb7tcBXHWdxFqFCq+1RcBUn13bSls9Yqa34QS0S7SplEIyu7RKcITNjowSaLFgwQIkdwrIu3DhQqe8TZmkU5tuF+51YWehQJ4MEgHTbqdt20p551dJ3N64oa5XBdv2YtteJbGKEPpW6ep0LSWWt+nJhfoXtv0nlKAa59EhTZvQpZ1t9GLayUIgdI/Vtq6HSGeLtG07Ta3H2o4RbNFwTNc14dg6zaYitTG5azvb6Ma0k4OAqf7ifptgU89DpbHVy2Sj0ic1Yp26oQDpiLGAxxX1GFH36FLOpNKXr9uc2wwFQL6sLDbimGZKETA9JqP+tKmn5aGAmLBKYrUSb7JRCZEELJA2mWD7z9FFumnpydnYKRtEF5CzjAlGwNSbQz1rEyQpWQ17hUhnq5fJRqUL0qUUpnoooC9HkFj7Qn5Y5ZpIh8Tan7+TIlbAoP6B6o6p/TO5uI7E6oIa85QRMNWjaSLW1J7wkhpjlWQqTOM8kljTGkuB0g7BZCfGxmTDcJDMLNOCgGmsHvUH9cg26HWyTb46+U3vK+SfRF22wnXbMdbk2kv5X7Dvc4lqY691CD1WYGyyU1aUvl3B8hNHIHSPNUVzTTaqdpRae5m4Hmvbf+HC319CJ3rvoEqt5P6Bq5TktV4RCN1j7dWYmsJNNqpsqbUXEqvyTMdHE7FCHdmD6FgrFjdJCJhIZwidEJONyl8kVoVEzdFEOEOoLDDdZCfSkFiBAkMdAibSGUJbMdmoY5NSe2GPVfdMh3ESa4dgD7QoE+mQWPtzPIm1J+xNC2hArZT+gXuCicUaEGj6gyaxGsCLeJvEGhHcJtEk1iZ0eM8WARLrDFIpdUQmjlhTAm/Gpe1jJNb2mDHHOAJNxDqEtmIa7tARScleEqvumQ7jJNYOwR5wUUMnVriuyUbdtSkNfZBYdc90GCexdgj2gItqIp2UenA+LmiyUZebkr0TRaypzVXTndo2bvOpXkoVpa19TN8NAk2kM5T602SjjnJK9pJYdc90GDcR65D+RDqEdaqKMo0/pkQ0Po6xebqD/KTslcokFYBP3U+STVK6+ihjWvJtSLb64MS89QjIMcWpaCtoC3WcoF+vR6r7O0n1WE3/wBJEqyBhtEoXI5HtY4upbPZYTQjxflN7GVL9mcQeK4k1cPsksQYGlOJqESCxFqHps0NV1ESedd9Jri/R9HgMdW1+9SXEv2Ojn02aoSyPGB/x6S2haShgSPVnEocCSKyB26UNadqkGVLDCAwxxf0PgWkhVtsOV0oVg8Qa2Bs2pGmThsQa2DEDFNdEOEOqP0126m0pJRcnNcZqO0gtwWwMEuDG+zFvhhpjTekrkph4UbY7AqYpe7aS+2ovodoK7EztZR2J1bb2WaYLVVlIrJaAT3EyEuuM80msM1iMxUKRUl//wDBoCDaMOYYXkkSAxDrjFjlcIIBHKiGpHusQSKnKBvybYmpMm9Dnn0MbPZm2PwQmfeisqq24oklidUWO+YgAESggQGKdgSO1obOkeqwzMDFGBIiACYFQPb6+no5C6Q+cSKym2sL7RIAIWCEQipiGQKx92VDnKPZY65DhdSKQOAIk1hkHkVhnsGCMCBABIjBIBNhjHaRbaRQRIAJ9IkBi7RN9lk0EiMAgESCxDtKtNIoIEIE+ESCx9ok+yyYCRGCQCJBYB+lWGkUEiECfCJBY+0SfZRMBIjBIBEisg3QrjSICRKBPBEisfaLPsokAERgkAiTWQbqVRhEBItAnAiTWPtFn2USACAwSARLrIN1Ko4gAEegTARJrn+izbCJABAaJAIl1kG6lUUSACPSJAIm1T/RZNhEgAoNEgMQ6SLfSKCJABPpEgMTaJ/osmwgQgUEiQGIdpFtpFBEgAn0iQGLtE32WTQSIwCARILEO0q00iggQgT4RILH2iT7LJgJEYJAIkFgH6VYaRQSIQJ8IkFj7RJ9lEwEiMEgESKyDdCuNIgJEoE8E/g/UM0ZnDyfYmQAAAABJRU5ErkJggg==";

    const blurbs = [
        {
            id: "productivity",
            title: "Productivity",
            description: "My practices to be a productive contributor, keep learning, and find satisfaction at work",
            imageUrl: img$1,
            imageAlt: "Brackets character showing off productivity",
            layout: "1A",
            pageId: "productivity",
        },
        {
            id: "commenting-code",
            title: "Commenting Code",
            description: "How to ask the right question for better code comments.",
            imageUrl: img$4,
            imageAlt: "Brackets character commenting code",
            layout: "1A",
            pageId: "commenting-code",
        },
        {
            id: "code-locality",
            title: "Code Locality",
            description: "Keep your friends close and your code closer",
            imageUrl: img$3,
            imageAlt: "Brackets character looking at code",
            layout: "1A",
            pageId: "code-locality",
        },
        {
            id: "naming-code",
            title: "Naming code",
            description: "How to name things in code for better software architecture",
            imageUrl: img$2,
            imageAlt: "Brackets character naming code elements",
            layout: "1A",
            pageId: "naming-code",
        },
        {
            id: "pretty-good-nlp",
            title: "pretty-good-nlp",
            description: "A programmable natural language processing (NLP) recognizer",
            imageUrl: img$i,
            imageAlt: "Brackets character using a martionette",
            layout: "1A",
            url: "https://github.com/GeoffCox/pretty-good-nlp",
        },
        {
            id: "projects",
            title: "Open Source Projects",
            description: "My open source repositories on GitHub",
            imageUrl: img,
            imageAlt: "Brackets characters around a sharing symbol",
            url: "https://github.com/GeoffCox?tab=repositories",
        },
        {
            id: "unit-testing",
            title: "Unit Testing",
            description: "Best practices for better unit testing",
            imageUrl: img$4,
            imageAlt: "Brackets character commenting code",
            layout: "1A",
            pageId: "unit-testing",
        },
    ];

    /* src/newFrontPage/HorizontalBlurbCard.svelte generated by Svelte v3.43.2 */

    const file$7 = "src/newFrontPage/HorizontalBlurbCard.svelte";

    // (11:4) {#if blurb.imageUrl}
    function create_if_block_1$5(ctx) {
    	let blurb_image;
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			blurb_image = element("blurb-image");
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*blurb*/ ctx[0].imageAlt);
    			attr_dev(img, "class", "svelte-1vpxtdx");
    			add_location(img, file$7, 12, 8, 263);
    			set_custom_element_data(blurb_image, "class", "svelte-1vpxtdx");
    			add_location(blurb_image, file$7, 11, 6, 241);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_image, anchor);
    			append_dev(blurb_image, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && !src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*blurb*/ 1 && img_alt_value !== (img_alt_value = /*blurb*/ ctx[0].imageAlt)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_image);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$5.name,
    		type: "if",
    		source: "(11:4) {#if blurb.imageUrl}",
    		ctx
    	});

    	return block;
    }

    // (20:6) {#if blurb.description}
    function create_if_block$5(ctx) {
    	let blurb_description;
    	let t_value = /*blurb*/ ctx[0].description + "";
    	let t;

    	const block = {
    		c: function create() {
    			blurb_description = element("blurb-description");
    			t = text(t_value);
    			set_custom_element_data(blurb_description, "class", "svelte-1vpxtdx");
    			add_location(blurb_description, file$7, 20, 8, 465);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_description, anchor);
    			append_dev(blurb_description, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && t_value !== (t_value = /*blurb*/ ctx[0].description + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_description);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(20:6) {#if blurb.description}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let blurb_1;
    	let blurb_split;
    	let t0;
    	let blurb_content;
    	let blurb_title;
    	let t1_value = /*blurb*/ ctx[0].title + "";
    	let t1;
    	let t2;
    	let if_block0 = /*blurb*/ ctx[0].imageUrl && create_if_block_1$5(ctx);
    	let if_block1 = /*blurb*/ ctx[0].description && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			blurb_1 = element("blurb");
    			blurb_split = element("blurb-split");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			blurb_content = element("blurb-content");
    			blurb_title = element("blurb-title");
    			t1 = text(t1_value);
    			t2 = space();
    			if (if_block1) if_block1.c();
    			set_custom_element_data(blurb_title, "class", "svelte-1vpxtdx");
    			add_location(blurb_title, file$7, 16, 6, 370);
    			set_custom_element_data(blurb_content, "class", "svelte-1vpxtdx");
    			add_location(blurb_content, file$7, 15, 4, 348);
    			set_custom_element_data(blurb_split, "class", "svelte-1vpxtdx");
    			add_location(blurb_split, file$7, 9, 2, 196);
    			attr_dev(blurb_1, "class", "svelte-1vpxtdx");
    			toggle_class(blurb_1, "content-first", /*contentBeforeImage*/ ctx[1]);
    			add_location(blurb_1, file$7, 8, 0, 145);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_1, anchor);
    			append_dev(blurb_1, blurb_split);
    			if (if_block0) if_block0.m(blurb_split, null);
    			append_dev(blurb_split, t0);
    			append_dev(blurb_split, blurb_content);
    			append_dev(blurb_content, blurb_title);
    			append_dev(blurb_title, t1);
    			append_dev(blurb_content, t2);
    			if (if_block1) if_block1.m(blurb_content, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*blurb*/ ctx[0].imageUrl) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_1$5(ctx);
    					if_block0.c();
    					if_block0.m(blurb_split, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (dirty & /*blurb*/ 1 && t1_value !== (t1_value = /*blurb*/ ctx[0].title + "")) set_data_dev(t1, t1_value);

    			if (/*blurb*/ ctx[0].description) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block$5(ctx);
    					if_block1.c();
    					if_block1.m(blurb_content, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (dirty & /*contentBeforeImage*/ 2) {
    				toggle_class(blurb_1, "content-first", /*contentBeforeImage*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_1);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('HorizontalBlurbCard', slots, []);
    	let { blurb } = $$props;
    	let { contentBeforeImage = false } = $$props;
    	const writable_props = ['blurb', 'contentBeforeImage'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<HorizontalBlurbCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    		if ('contentBeforeImage' in $$props) $$invalidate(1, contentBeforeImage = $$props.contentBeforeImage);
    	};

    	$$self.$capture_state = () => ({ blurb, contentBeforeImage });

    	$$self.$inject_state = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    		if ('contentBeforeImage' in $$props) $$invalidate(1, contentBeforeImage = $$props.contentBeforeImage);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [blurb, contentBeforeImage];
    }

    class HorizontalBlurbCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { blurb: 0, contentBeforeImage: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalBlurbCard",
    			options,
    			id: create_fragment$7.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*blurb*/ ctx[0] === undefined && !('blurb' in props)) {
    			console.warn("<HorizontalBlurbCard> was created without expected prop 'blurb'");
    		}
    	}

    	get blurb() {
    		throw new Error("<HorizontalBlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set blurb(value) {
    		throw new Error("<HorizontalBlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get contentBeforeImage() {
    		throw new Error("<HorizontalBlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contentBeforeImage(value) {
    		throw new Error("<HorizontalBlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/newFrontPage/VerticalBlurbCard.svelte generated by Svelte v3.43.2 */

    const file$6 = "src/newFrontPage/VerticalBlurbCard.svelte";

    // (10:2) {#if blurb.imageUrl && !contentBeforeImage}
    function create_if_block_2$1(ctx) {
    	let blurb_image;
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			blurb_image = element("blurb-image");
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*blurb*/ ctx[0].imageAlt);
    			attr_dev(img, "class", "svelte-1mergrj");
    			add_location(img, file$6, 11, 6, 262);
    			set_custom_element_data(blurb_image, "class", "svelte-1mergrj");
    			add_location(blurb_image, file$6, 10, 4, 242);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_image, anchor);
    			append_dev(blurb_image, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && !src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*blurb*/ 1 && img_alt_value !== (img_alt_value = /*blurb*/ ctx[0].imageAlt)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_image);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(10:2) {#if blurb.imageUrl && !contentBeforeImage}",
    		ctx
    	});

    	return block;
    }

    // (19:4) {#if blurb.description}
    function create_if_block_1$4(ctx) {
    	let blurb_description;
    	let t_value = /*blurb*/ ctx[0].description + "";
    	let t;

    	const block = {
    		c: function create() {
    			blurb_description = element("blurb-description");
    			t = text(t_value);
    			set_custom_element_data(blurb_description, "class", "svelte-1mergrj");
    			add_location(blurb_description, file$6, 19, 6, 448);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_description, anchor);
    			append_dev(blurb_description, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && t_value !== (t_value = /*blurb*/ ctx[0].description + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_description);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$4.name,
    		type: "if",
    		source: "(19:4) {#if blurb.description}",
    		ctx
    	});

    	return block;
    }

    // (25:2) {#if blurb.imageUrl && contentBeforeImage}
    function create_if_block$4(ctx) {
    	let blurb_image;
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			blurb_image = element("blurb-image");
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*blurb*/ ctx[0].imageAlt);
    			attr_dev(img, "class", "svelte-1mergrj");
    			add_location(img, file$6, 26, 6, 621);
    			set_custom_element_data(blurb_image, "class", "svelte-1mergrj");
    			add_location(blurb_image, file$6, 25, 4, 601);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_image, anchor);
    			append_dev(blurb_image, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && !src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*blurb*/ 1 && img_alt_value !== (img_alt_value = /*blurb*/ ctx[0].imageAlt)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_image);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(25:2) {#if blurb.imageUrl && contentBeforeImage}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let blurb_1;
    	let t0;
    	let blurb_content;
    	let blurb_title;
    	let t1_value = /*blurb*/ ctx[0].title + "";
    	let t1;
    	let t2;
    	let t3;
    	let if_block0 = /*blurb*/ ctx[0].imageUrl && !/*contentBeforeImage*/ ctx[1] && create_if_block_2$1(ctx);
    	let if_block1 = /*blurb*/ ctx[0].description && create_if_block_1$4(ctx);
    	let if_block2 = /*blurb*/ ctx[0].imageUrl && /*contentBeforeImage*/ ctx[1] && create_if_block$4(ctx);

    	const block = {
    		c: function create() {
    			blurb_1 = element("blurb");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			blurb_content = element("blurb-content");
    			blurb_title = element("blurb-title");
    			t1 = text(t1_value);
    			t2 = space();
    			if (if_block1) if_block1.c();
    			t3 = space();
    			if (if_block2) if_block2.c();
    			set_custom_element_data(blurb_title, "class", "svelte-1mergrj");
    			add_location(blurb_title, file$6, 15, 4, 361);
    			set_custom_element_data(blurb_content, "class", "svelte-1mergrj");
    			add_location(blurb_content, file$6, 14, 2, 341);
    			attr_dev(blurb_1, "class", "svelte-1mergrj");
    			toggle_class(blurb_1, "content-first", /*contentBeforeImage*/ ctx[1]);
    			add_location(blurb_1, file$6, 8, 0, 143);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_1, anchor);
    			if (if_block0) if_block0.m(blurb_1, null);
    			append_dev(blurb_1, t0);
    			append_dev(blurb_1, blurb_content);
    			append_dev(blurb_content, blurb_title);
    			append_dev(blurb_title, t1);
    			append_dev(blurb_content, t2);
    			if (if_block1) if_block1.m(blurb_content, null);
    			append_dev(blurb_1, t3);
    			if (if_block2) if_block2.m(blurb_1, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*blurb*/ ctx[0].imageUrl && !/*contentBeforeImage*/ ctx[1]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_2$1(ctx);
    					if_block0.c();
    					if_block0.m(blurb_1, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (dirty & /*blurb*/ 1 && t1_value !== (t1_value = /*blurb*/ ctx[0].title + "")) set_data_dev(t1, t1_value);

    			if (/*blurb*/ ctx[0].description) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_1$4(ctx);
    					if_block1.c();
    					if_block1.m(blurb_content, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*blurb*/ ctx[0].imageUrl && /*contentBeforeImage*/ ctx[1]) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block$4(ctx);
    					if_block2.c();
    					if_block2.m(blurb_1, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (dirty & /*contentBeforeImage*/ 2) {
    				toggle_class(blurb_1, "content-first", /*contentBeforeImage*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_1);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('VerticalBlurbCard', slots, []);
    	let { blurb } = $$props;
    	let { contentBeforeImage = false } = $$props;
    	const writable_props = ['blurb', 'contentBeforeImage'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<VerticalBlurbCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    		if ('contentBeforeImage' in $$props) $$invalidate(1, contentBeforeImage = $$props.contentBeforeImage);
    	};

    	$$self.$capture_state = () => ({ blurb, contentBeforeImage });

    	$$self.$inject_state = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    		if ('contentBeforeImage' in $$props) $$invalidate(1, contentBeforeImage = $$props.contentBeforeImage);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [blurb, contentBeforeImage];
    }

    class VerticalBlurbCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { blurb: 0, contentBeforeImage: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "VerticalBlurbCard",
    			options,
    			id: create_fragment$6.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*blurb*/ ctx[0] === undefined && !('blurb' in props)) {
    			console.warn("<VerticalBlurbCard> was created without expected prop 'blurb'");
    		}
    	}

    	get blurb() {
    		throw new Error("<VerticalBlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set blurb(value) {
    		throw new Error("<VerticalBlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get contentBeforeImage() {
    		throw new Error("<VerticalBlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contentBeforeImage(value) {
    		throw new Error("<VerticalBlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/newFrontPage/SmallBlurbCard.svelte generated by Svelte v3.43.2 */

    const file$5 = "src/newFrontPage/SmallBlurbCard.svelte";

    // (9:2) {#if blurb.imageUrl}
    function create_if_block_1$3(ctx) {
    	let blurb_image;
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			blurb_image = element("blurb-image");
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*blurb*/ ctx[0].imageAlt);
    			attr_dev(img, "class", "svelte-5s736p");
    			add_location(img, file$5, 10, 6, 149);
    			set_custom_element_data(blurb_image, "class", "svelte-5s736p");
    			add_location(blurb_image, file$5, 9, 4, 129);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_image, anchor);
    			append_dev(blurb_image, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && !src_url_equal(img.src, img_src_value = /*blurb*/ ctx[0].imageUrl)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*blurb*/ 1 && img_alt_value !== (img_alt_value = /*blurb*/ ctx[0].imageAlt)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_image);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$3.name,
    		type: "if",
    		source: "(9:2) {#if blurb.imageUrl}",
    		ctx
    	});

    	return block;
    }

    // (18:4) {#if blurb.description}
    function create_if_block$3(ctx) {
    	let blurb_description;
    	let t_value = /*blurb*/ ctx[0].description + "";
    	let t;

    	const block = {
    		c: function create() {
    			blurb_description = element("blurb-description");
    			t = text(t_value);
    			set_custom_element_data(blurb_description, "class", "svelte-5s736p");
    			add_location(blurb_description, file$5, 18, 6, 335);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_description, anchor);
    			append_dev(blurb_description, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*blurb*/ 1 && t_value !== (t_value = /*blurb*/ ctx[0].description + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_description);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(18:4) {#if blurb.description}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let blurb_1;
    	let t0;
    	let blurb_content;
    	let blurb_title;
    	let t1_value = /*blurb*/ ctx[0].title + "";
    	let t1;
    	let t2;
    	let if_block0 = /*blurb*/ ctx[0].imageUrl && create_if_block_1$3(ctx);
    	let if_block1 = /*blurb*/ ctx[0].description && create_if_block$3(ctx);

    	const block = {
    		c: function create() {
    			blurb_1 = element("blurb");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			blurb_content = element("blurb-content");
    			blurb_title = element("blurb-title");
    			t1 = text(t1_value);
    			t2 = space();
    			if (if_block1) if_block1.c();
    			set_custom_element_data(blurb_title, "class", "svelte-5s736p");
    			add_location(blurb_title, file$5, 14, 4, 248);
    			set_custom_element_data(blurb_content, "class", "svelte-5s736p");
    			add_location(blurb_content, file$5, 13, 2, 228);
    			attr_dev(blurb_1, "class", "svelte-5s736p");
    			add_location(blurb_1, file$5, 7, 0, 94);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_1, anchor);
    			if (if_block0) if_block0.m(blurb_1, null);
    			append_dev(blurb_1, t0);
    			append_dev(blurb_1, blurb_content);
    			append_dev(blurb_content, blurb_title);
    			append_dev(blurb_title, t1);
    			append_dev(blurb_content, t2);
    			if (if_block1) if_block1.m(blurb_content, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*blurb*/ ctx[0].imageUrl) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_1$3(ctx);
    					if_block0.c();
    					if_block0.m(blurb_1, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (dirty & /*blurb*/ 1 && t1_value !== (t1_value = /*blurb*/ ctx[0].title + "")) set_data_dev(t1, t1_value);

    			if (/*blurb*/ ctx[0].description) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block$3(ctx);
    					if_block1.c();
    					if_block1.m(blurb_content, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_1);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('SmallBlurbCard', slots, []);
    	let { blurb } = $$props;
    	const writable_props = ['blurb'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<SmallBlurbCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    	};

    	$$self.$capture_state = () => ({ blurb });

    	$$self.$inject_state = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [blurb];
    }

    class SmallBlurbCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { blurb: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SmallBlurbCard",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*blurb*/ ctx[0] === undefined && !('blurb' in props)) {
    			console.warn("<SmallBlurbCard> was created without expected prop 'blurb'");
    		}
    	}

    	get blurb() {
    		throw new Error("<SmallBlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set blurb(value) {
    		throw new Error("<SmallBlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/newFrontPage/BlurbCardLayout.svelte generated by Svelte v3.43.2 */
    const file$4 = "src/newFrontPage/BlurbCardLayout.svelte";

    // (23:2) {:else}
    function create_else_block$1(ctx) {
    	let horizontalblurbcard;
    	let current;

    	horizontalblurbcard = new HorizontalBlurbCard({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(horizontalblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(horizontalblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const horizontalblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) horizontalblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			horizontalblurbcard.$set(horizontalblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(horizontalblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(horizontalblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(horizontalblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(23:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (21:34) 
    function create_if_block_4(ctx) {
    	let verticalblurbcard;
    	let current;

    	verticalblurbcard = new VerticalBlurbCard({
    			props: {
    				blurb: /*blurb*/ ctx[0],
    				contentBeforeImage: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(verticalblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(verticalblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const verticalblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) verticalblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			verticalblurbcard.$set(verticalblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(verticalblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(verticalblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(verticalblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(21:34) ",
    		ctx
    	});

    	return block;
    }

    // (19:34) 
    function create_if_block_3(ctx) {
    	let verticalblurbcard;
    	let current;

    	verticalblurbcard = new VerticalBlurbCard({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(verticalblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(verticalblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const verticalblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) verticalblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			verticalblurbcard.$set(verticalblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(verticalblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(verticalblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(verticalblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(19:34) ",
    		ctx
    	});

    	return block;
    }

    // (17:34) 
    function create_if_block_2(ctx) {
    	let horizontalblurbcard;
    	let current;

    	horizontalblurbcard = new HorizontalBlurbCard({
    			props: {
    				blurb: /*blurb*/ ctx[0],
    				contentBeforeImage: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(horizontalblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(horizontalblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const horizontalblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) horizontalblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			horizontalblurbcard.$set(horizontalblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(horizontalblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(horizontalblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(horizontalblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(17:34) ",
    		ctx
    	});

    	return block;
    }

    // (15:34) 
    function create_if_block_1$2(ctx) {
    	let horizontalblurbcard;
    	let current;

    	horizontalblurbcard = new HorizontalBlurbCard({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(horizontalblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(horizontalblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const horizontalblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) horizontalblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			horizontalblurbcard.$set(horizontalblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(horizontalblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(horizontalblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(horizontalblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(15:34) ",
    		ctx
    	});

    	return block;
    }

    // (13:2) {#if clientWidth < 390}
    function create_if_block$2(ctx) {
    	let smallblurbcard;
    	let current;

    	smallblurbcard = new SmallBlurbCard({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(smallblurbcard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(smallblurbcard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const smallblurbcard_changes = {};
    			if (dirty & /*blurb*/ 1) smallblurbcard_changes.blurb = /*blurb*/ ctx[0];
    			smallblurbcard.$set(smallblurbcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(smallblurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(smallblurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(smallblurbcard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(13:2) {#if clientWidth < 390}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let blurb_card;
    	let current_block_type_index;
    	let if_block;
    	let blurb_card_resize_listener;
    	let current;

    	const if_block_creators = [
    		create_if_block$2,
    		create_if_block_1$2,
    		create_if_block_2,
    		create_if_block_3,
    		create_if_block_4,
    		create_else_block$1
    	];

    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*clientWidth*/ ctx[1] < 390) return 0;
    		if (/*blurb*/ ctx[0].layout === "1A") return 1;
    		if (/*blurb*/ ctx[0].layout === "1B") return 2;
    		if (/*blurb*/ ctx[0].layout === "1C") return 3;
    		if (/*blurb*/ ctx[0].layout === "1D") return 4;
    		return 5;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			blurb_card = element("blurb-card");
    			if_block.c();
    			set_custom_element_data(blurb_card, "class", "svelte-k7wwj6");
    			add_render_callback(() => /*blurb_card_elementresize_handler*/ ctx[2].call(blurb_card));
    			add_location(blurb_card, file$4, 11, 0, 355);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_card, anchor);
    			if_blocks[current_block_type_index].m(blurb_card, null);
    			blurb_card_resize_listener = add_resize_listener(blurb_card, /*blurb_card_elementresize_handler*/ ctx[2].bind(blurb_card));
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(blurb_card, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_card);
    			if_blocks[current_block_type_index].d();
    			blurb_card_resize_listener();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BlurbCardLayout', slots, []);
    	let { blurb } = $$props;
    	let clientWidth;
    	const writable_props = ['blurb'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BlurbCardLayout> was created with unknown prop '${key}'`);
    	});

    	function blurb_card_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		$$invalidate(1, clientWidth);
    	}

    	$$self.$$set = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    	};

    	$$self.$capture_state = () => ({
    		HorizontalBlurbCard,
    		VerticalBlurbCard,
    		SmallBlurbCard,
    		blurb,
    		clientWidth
    	});

    	$$self.$inject_state = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    		if ('clientWidth' in $$props) $$invalidate(1, clientWidth = $$props.clientWidth);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [blurb, clientWidth, blurb_card_elementresize_handler];
    }

    class BlurbCardLayout extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { blurb: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BlurbCardLayout",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*blurb*/ ctx[0] === undefined && !('blurb' in props)) {
    			console.warn("<BlurbCardLayout> was created without expected prop 'blurb'");
    		}
    	}

    	get blurb() {
    		throw new Error("<BlurbCardLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set blurb(value) {
    		throw new Error("<BlurbCardLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/icons/WindowsPlus.svelte generated by Svelte v3.43.2 */

    const file$3 = "src/icons/WindowsPlus.svelte";

    function create_fragment$3(ctx) {
    	let svg;
    	let path0;
    	let path1;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			attr_dev(path0, "fill-rule", "evenodd");
    			attr_dev(path0, "d", "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z");
    			add_location(path0, file$3, 8, 2, 156);
    			attr_dev(path1, "fill-rule", "evenodd");
    			attr_dev(path1, "d", "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z");
    			add_location(path1, file$3, 12, 2, 410);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "width", "100%");
    			attr_dev(svg, "height", "100%");
    			attr_dev(svg, "fill", "currentColor");
    			attr_dev(svg, "class", "bi bi-box-arrow-up-right");
    			attr_dev(svg, "viewBox", "0 0 16 16");
    			add_location(svg, file$3, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path0);
    			append_dev(svg, path1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('WindowsPlus', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<WindowsPlus> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class WindowsPlus extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "WindowsPlus",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/newFrontPage/BlurbCard.svelte generated by Svelte v3.43.2 */
    const file$2 = "src/newFrontPage/BlurbCard.svelte";

    // (29:22) 
    function create_if_block_1$1(ctx) {
    	let a;
    	let blurbcardlayout;
    	let t;
    	let div;
    	let windowsplus;
    	let a_href_value;
    	let current;

    	blurbcardlayout = new BlurbCardLayout({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	windowsplus = new WindowsPlus({ $$inline: true });

    	const block = {
    		c: function create() {
    			a = element("a");
    			create_component(blurbcardlayout.$$.fragment);
    			t = space();
    			div = element("div");
    			create_component(windowsplus.$$.fragment);
    			attr_dev(div, "class", "indicator svelte-41l45o");
    			add_location(div, file$2, 31, 6, 795);
    			attr_dev(a, "class", "link svelte-41l45o");
    			attr_dev(a, "href", a_href_value = /*blurb*/ ctx[0].url);
    			attr_dev(a, "target", "_blank");
    			add_location(a, file$2, 29, 4, 705);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			mount_component(blurbcardlayout, a, null);
    			append_dev(a, t);
    			append_dev(a, div);
    			mount_component(windowsplus, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const blurbcardlayout_changes = {};
    			if (dirty & /*blurb*/ 1) blurbcardlayout_changes.blurb = /*blurb*/ ctx[0];
    			blurbcardlayout.$set(blurbcardlayout_changes);

    			if (!current || dirty & /*blurb*/ 1 && a_href_value !== (a_href_value = /*blurb*/ ctx[0].url)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(blurbcardlayout.$$.fragment, local);
    			transition_in(windowsplus.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(blurbcardlayout.$$.fragment, local);
    			transition_out(windowsplus.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			destroy_component(blurbcardlayout);
    			destroy_component(windowsplus);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(29:22) ",
    		ctx
    	});

    	return block;
    }

    // (25:2) {#if blurb.pageId}
    function create_if_block$1(ctx) {
    	let page_link;
    	let blurbcardlayout;
    	let current;
    	let mounted;
    	let dispose;

    	blurbcardlayout = new BlurbCardLayout({
    			props: { blurb: /*blurb*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			page_link = element("page-link");
    			create_component(blurbcardlayout.$$.fragment);
    			set_custom_element_data(page_link, "class", "svelte-41l45o");
    			add_location(page_link, file$2, 25, 4, 575);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, page_link, anchor);
    			mount_component(blurbcardlayout, page_link, null);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(page_link, "click", /*click_handler*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			const blurbcardlayout_changes = {};
    			if (dirty & /*blurb*/ 1) blurbcardlayout_changes.blurb = /*blurb*/ ctx[0];
    			blurbcardlayout.$set(blurbcardlayout_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(blurbcardlayout.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(blurbcardlayout.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(page_link);
    			destroy_component(blurbcardlayout);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(25:2) {#if blurb.pageId}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let blurb_card;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block$1, create_if_block_1$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*blurb*/ ctx[0].pageId) return 0;
    		if (/*blurb*/ ctx[0].url) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			blurb_card = element("blurb-card");
    			if (if_block) if_block.c();
    			set_custom_element_data(blurb_card, "class", "svelte-41l45o");
    			add_location(blurb_card, file$2, 23, 0, 537);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_card, anchor);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(blurb_card, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					} else {
    						if_block.p(ctx, dirty);
    					}

    					transition_in(if_block, 1);
    					if_block.m(blurb_card, null);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_card);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BlurbCard', slots, []);
    	let { blurb } = $$props;
    	const writable_props = ['blurb'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BlurbCard> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => goToPage(blurb.pageId);

    	$$self.$$set = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    	};

    	$$self.$capture_state = () => ({
    		goToPage,
    		BlurbCardLayout,
    		WindowsPlus,
    		blurb
    	});

    	$$self.$inject_state = $$props => {
    		if ('blurb' in $$props) $$invalidate(0, blurb = $$props.blurb);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [blurb, click_handler];
    }

    class BlurbCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { blurb: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BlurbCard",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*blurb*/ ctx[0] === undefined && !('blurb' in props)) {
    			console.warn("<BlurbCard> was created without expected prop 'blurb'");
    		}
    	}

    	get blurb() {
    		throw new Error("<BlurbCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set blurb(value) {
    		throw new Error("<BlurbCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/newFrontPage/BlurbGrid.svelte generated by Svelte v3.43.2 */
    const file$1 = "src/newFrontPage/BlurbGrid.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	return child_ctx;
    }

    // (7:2) {#each blurbs as blurb (blurb.id)}
    function create_each_block(key_1, ctx) {
    	let blurb_cell;
    	let blurbcard;
    	let t;
    	let current;

    	blurbcard = new BlurbCard({
    			props: { blurb: /*blurb*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			blurb_cell = element("blurb-cell");
    			create_component(blurbcard.$$.fragment);
    			t = space();
    			set_custom_element_data(blurb_cell, "class", "svelte-1b9efpe");
    			add_location(blurb_cell, file$1, 7, 4, 230);
    			this.first = blurb_cell;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_cell, anchor);
    			mount_component(blurbcard, blurb_cell, null);
    			append_dev(blurb_cell, t);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(blurbcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(blurbcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_cell);
    			destroy_component(blurbcard);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(7:2) {#each blurbs as blurb (blurb.id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let blurb_grid;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let blurb_grid_resize_listener;
    	let current;
    	let each_value = blurbs;
    	validate_each_argument(each_value);
    	const get_key = ctx => /*blurb*/ ctx[2].id;
    	validate_each_keys(ctx, each_value, get_each_context, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			blurb_grid = element("blurb-grid");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			set_custom_element_data(blurb_grid, "class", "svelte-1b9efpe");
    			add_render_callback(() => /*blurb_grid_elementresize_handler*/ ctx[1].call(blurb_grid));
    			toggle_class(blurb_grid, "compact", /*clientWidth*/ ctx[0] < 390);
    			add_location(blurb_grid, file$1, 5, 0, 125);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, blurb_grid, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(blurb_grid, null);
    			}

    			blurb_grid_resize_listener = add_resize_listener(blurb_grid, /*blurb_grid_elementresize_handler*/ ctx[1].bind(blurb_grid));
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*blurbs*/ 0) {
    				each_value = blurbs;
    				validate_each_argument(each_value);
    				group_outros();
    				validate_each_keys(ctx, each_value, get_each_context, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, blurb_grid, outro_and_destroy_block, create_each_block, null, get_each_context);
    				check_outros();
    			}

    			if (dirty & /*clientWidth*/ 1) {
    				toggle_class(blurb_grid, "compact", /*clientWidth*/ ctx[0] < 390);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(blurb_grid);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}

    			blurb_grid_resize_listener();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BlurbGrid', slots, []);
    	let clientWidth;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BlurbGrid> was created with unknown prop '${key}'`);
    	});

    	function blurb_grid_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		$$invalidate(0, clientWidth);
    	}

    	$$self.$capture_state = () => ({ blurbs, BlurbCard, clientWidth });

    	$$self.$inject_state = $$props => {
    		if ('clientWidth' in $$props) $$invalidate(0, clientWidth = $$props.clientWidth);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [clientWidth, blurb_grid_elementresize_handler];
    }

    class BlurbGrid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BlurbGrid",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.43.2 */

    const { window: window_1 } = globals;
    const file = "src/App.svelte";

    // (19:2) {#if $currentPage}
    function create_if_block_1(ctx) {
    	document.title = /*$currentPage*/ ctx[1].title || "geoffcox.github.io";
    	const block = { c: noop, m: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(19:2) {#if $currentPage}",
    		ctx
    	});

    	return block;
    }

    // (38:4) {:else}
    function create_else_block(ctx) {
    	let front_page;
    	let about1;
    	let about0;
    	let t;
    	let blurb_grid;
    	let blurbgrid;
    	let current;
    	about0 = new About({ $$inline: true });
    	blurbgrid = new BlurbGrid({ $$inline: true });

    	const block = {
    		c: function create() {
    			front_page = element("front-page");
    			about1 = element("about");
    			create_component(about0.$$.fragment);
    			t = space();
    			blurb_grid = element("blurb-grid");
    			create_component(blurbgrid.$$.fragment);
    			attr_dev(about1, "class", "svelte-anh5fl");
    			add_location(about1, file, 39, 8, 1043);
    			set_custom_element_data(blurb_grid, "class", "svelte-anh5fl");
    			add_location(blurb_grid, file, 42, 8, 1096);
    			set_custom_element_data(front_page, "class", "svelte-anh5fl");
    			add_location(front_page, file, 38, 6, 1022);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, front_page, anchor);
    			append_dev(front_page, about1);
    			mount_component(about0, about1, null);
    			append_dev(front_page, t);
    			append_dev(front_page, blurb_grid);
    			mount_component(blurbgrid, blurb_grid, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(about0.$$.fragment, local);
    			transition_in(blurbgrid.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(about0.$$.fragment, local);
    			transition_out(blurbgrid.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(front_page);
    			destroy_component(about0);
    			destroy_component(blurbgrid);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(38:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (34:4) {#if $currentPage}
    function create_if_block(ctx) {
    	let page;
    	let switch_instance;
    	let current;
    	var switch_value = /*$currentPage*/ ctx[1].component;

    	function switch_props(ctx) {
    		return { $$inline: true };
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    	}

    	const block = {
    		c: function create() {
    			page = element("page");
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			attr_dev(page, "class", "svelte-anh5fl");
    			add_location(page, file, 34, 6, 924);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, page, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, page, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (switch_value !== (switch_value = /*$currentPage*/ ctx[1].component)) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, page, null);
    				} else {
    					switch_instance = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(page);
    			if (switch_instance) destroy_component(switch_instance);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(34:4) {#if $currentPage}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let if_block0_anchor;
    	let t0;
    	let app;
    	let app_header;
    	let appheader;
    	let t1;
    	let app_content;
    	let current_block_type_index;
    	let if_block1;
    	let t2;
    	let app_footer;
    	let app_resize_listener;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block0 = /*$currentPage*/ ctx[1] && create_if_block_1(ctx);
    	appheader = new AppHeader({ $$inline: true });
    	const if_block_creators = [create_if_block, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*$currentPage*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			if_block0_anchor = empty();
    			t0 = space();
    			app = element("app");
    			app_header = element("app-header");
    			create_component(appheader.$$.fragment);
    			t1 = space();
    			app_content = element("app-content");
    			if_block1.c();
    			t2 = space();
    			app_footer = element("app-footer");
    			set_custom_element_data(app_header, "class", "svelte-anh5fl");
    			add_location(app_header, file, 29, 2, 832);
    			set_custom_element_data(app_content, "class", "svelte-anh5fl");
    			add_location(app_content, file, 32, 2, 881);
    			add_location(app_footer, file, 48, 2, 1204);
    			attr_dev(app, "class", "svelte-anh5fl");
    			add_render_callback(() => /*app_elementresize_handler*/ ctx[3].call(app));
    			toggle_class(app, "cozy", /*clientWidth*/ ctx[0] < 650);
    			add_location(app, file, 28, 0, 776);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(document.head, null);
    			append_dev(document.head, if_block0_anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, app, anchor);
    			append_dev(app, app_header);
    			mount_component(appheader, app_header, null);
    			append_dev(app, t1);
    			append_dev(app, app_content);
    			if_blocks[current_block_type_index].m(app_content, null);
    			append_dev(app, t2);
    			append_dev(app, app_footer);
    			app_resize_listener = add_resize_listener(app, /*app_elementresize_handler*/ ctx[3].bind(app));
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(window_1, "popstate", /*onBack*/ ctx[2], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$currentPage*/ ctx[1]) {
    				if (if_block0) ; else {
    					if_block0 = create_if_block_1(ctx);
    					if_block0.c();
    					if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block1 = if_blocks[current_block_type_index];

    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				} else {
    					if_block1.p(ctx, dirty);
    				}

    				transition_in(if_block1, 1);
    				if_block1.m(app_content, null);
    			}

    			if (dirty & /*clientWidth*/ 1) {
    				toggle_class(app, "cozy", /*clientWidth*/ ctx[0] < 650);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(appheader.$$.fragment, local);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(appheader.$$.fragment, local);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			detach_dev(if_block0_anchor);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(app);
    			destroy_component(appheader);
    			if_blocks[current_block_type_index].d();
    			app_resize_listener();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let $currentPage;
    	validate_store(currentPage, 'currentPage');
    	component_subscribe($$self, currentPage, $$value => $$invalidate(1, $currentPage = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let clientWidth;

    	const onBack = () => {
    		const urlParams = new URLSearchParams(window.location.search);
    		showPage(urlParams.get("id"));
    	};

    	onMount(() => {
    		const urlParams = new URLSearchParams(window.location.search);
    		goToPage(urlParams.get("id"));
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function app_elementresize_handler() {
    		clientWidth = this.clientWidth;
    		$$invalidate(0, clientWidth);
    	}

    	$$self.$capture_state = () => ({
    		onMount,
    		goToPage,
    		showPage,
    		currentPage,
    		AppHeader,
    		About,
    		BlurbGrid,
    		clientWidth,
    		onBack,
    		$currentPage
    	});

    	$$self.$inject_state = $$props => {
    		if ('clientWidth' in $$props) $$invalidate(0, clientWidth = $$props.clientWidth);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [clientWidth, $currentPage, onBack, app_elementresize_handler];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    var app = new App({
        target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
