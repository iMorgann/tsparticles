import type { IParticle, IShapeDrawer } from "tsparticles-engine";

const fixFactor = Math.sqrt(2);

/**
 * @category Shape Drawers
 */
export class SquareDrawer implements IShapeDrawer {
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void {
        context.rect(-radius / fixFactor, -radius / fixFactor, radius * 2 / fixFactor, radius * 2 / fixFactor);
    }

    getSidesCount(): number {
        return 4;
    }
}
